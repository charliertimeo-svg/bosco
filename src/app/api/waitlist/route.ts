import { NextResponse } from "next/server";
import { isLocale, site } from "@/config/site";
import {
  hitRateLimit,
  isValidEmail,
  saveWaitlistEntry,
  type WaitlistEntry,
} from "@/lib/waitlist-store";

type Payload = {
  email?: unknown;
  boatType?: unknown;
  role?: unknown;
  problem?: unknown;
  locale?: unknown;
  consent?: unknown;
  website?: unknown;
};

const ALLOWED_BOAT = new Set(["sail", "motor", "multihull", "other"]);
const ALLOWED_ROLE = new Set(["owner", "renter", "pro"]);

export async function POST(request: Request): Promise<NextResponse> {
  let body: Payload;
  try {
    body = (await request.json()) as Payload;
  } catch {
    return NextResponse.json({ error: "invalid_json" }, { status: 400 });
  }

  if (typeof body.website === "string" && body.website.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ??
    request.headers.get("x-real-ip") ??
    "anonymous";
  if (hitRateLimit(ip)) {
    return NextResponse.json({ error: "rate_limit" }, { status: 429 });
  }

  const email = typeof body.email === "string" ? body.email.trim().toLowerCase() : "";
  const boatType = typeof body.boatType === "string" ? body.boatType : "";
  const role = typeof body.role === "string" ? body.role : "";
  const problem = typeof body.problem === "string" ? body.problem.slice(0, 500) : "";
  const localeRaw = typeof body.locale === "string" ? body.locale : site.defaultLocale;
  const locale = isLocale(localeRaw) ? localeRaw : site.defaultLocale;
  const consent = body.consent === true;

  if (!consent) {
    return NextResponse.json({ error: "consent_required" }, { status: 400 });
  }
  if (!isValidEmail(email)) {
    return NextResponse.json({ error: "invalid_email" }, { status: 400 });
  }
  if (!ALLOWED_BOAT.has(boatType)) {
    return NextResponse.json({ error: "invalid_boat_type" }, { status: 400 });
  }
  if (!ALLOWED_ROLE.has(role)) {
    return NextResponse.json({ error: "invalid_role" }, { status: 400 });
  }

  const entry: WaitlistEntry = {
    email,
    boatType,
    role,
    problem,
    locale,
    createdAt: new Date().toISOString(),
  };

  try {
    await saveWaitlistEntry(entry);
  } catch (err) {
    console.error("waitlist_save_failed", err);
    return NextResponse.json({ error: "store_failed" }, { status: 500 });
  }

  return NextResponse.json({ ok: true }, { status: 200 });
}
