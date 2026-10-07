import { promises as fs } from "node:fs";
import path from "node:path";
import { site } from "@/config/site";

export type WaitlistEntry = {
  email: string;
  boatType: string;
  role: string;
  problem?: string;
  locale: string;
  createdAt: string;
};

const DEV_FILE = path.join(process.cwd(), ".waitlist-dev.json");

async function appendDevFile(entry: WaitlistEntry): Promise<void> {
  let current: WaitlistEntry[] = [];
  try {
    const raw = await fs.readFile(DEV_FILE, "utf8");
    current = JSON.parse(raw) as WaitlistEntry[];
  } catch {
    current = [];
  }
  current.push(entry);
  await fs.writeFile(DEV_FILE, JSON.stringify(current, null, 2), "utf8");
}

async function sendToBrevo(entry: WaitlistEntry): Promise<void> {
  const apiKey = process.env.BREVO_API_KEY;
  const listId = process.env.BREVO_LIST_ID;
  const doiTemplateId = process.env.BREVO_DOI_TEMPLATE_ID;
  if (!apiKey || !listId) throw new Error("Brevo not configured");

  const attributes = {
    BATEAU: entry.boatType,
    PROFIL: entry.role,
    LANGUE: entry.locale,
    PROBLEME: entry.problem ?? "",
  };

  if (doiTemplateId) {
    const response = await fetch("https://api.brevo.com/v3/contacts/doubleOptinConfirmation", {
      method: "POST",
      headers: {
        "api-key": apiKey,
        "content-type": "application/json",
        accept: "application/json",
      },
      body: JSON.stringify({
        email: entry.email,
        includeListIds: [Number(listId)],
        templateId: Number(doiTemplateId),
        redirectionUrl: `${site.url}/${entry.locale}`,
        attributes,
      }),
    });
    if (!response.ok && response.status !== 204) {
      const text = await response.text();
      throw new Error(`Brevo DOI ${response.status}: ${text}`);
    }
    return;
  }

  const response = await fetch("https://api.brevo.com/v3/contacts", {
    method: "POST",
    headers: {
      "api-key": apiKey,
      "content-type": "application/json",
      accept: "application/json",
    },
    body: JSON.stringify({
      email: entry.email,
      listIds: [Number(listId)],
      updateEnabled: true,
      attributes,
    }),
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Brevo ${response.status}: ${text}`);
  }
}

export async function saveWaitlistEntry(entry: WaitlistEntry): Promise<void> {
  if (process.env.BREVO_API_KEY && process.env.BREVO_LIST_ID) {
    await sendToBrevo(entry);
    return;
  }
  await appendDevFile(entry);
}

const rateLimitBuckets = new Map<string, { count: number; windowStart: number }>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 5;

export function hitRateLimit(ip: string): boolean {
  const now = Date.now();
  const bucket = rateLimitBuckets.get(ip);
  if (!bucket || now - bucket.windowStart > WINDOW_MS) {
    rateLimitBuckets.set(ip, { count: 1, windowStart: now });
    return false;
  }
  bucket.count += 1;
  if (bucket.count > MAX_PER_WINDOW) return true;
  return false;
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value) && value.length <= 254;
}
