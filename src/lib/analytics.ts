"use client";

const CONSENT_KEY = "bosco.consent";

export type ConsentValue = "granted" | "denied" | null;

export function getConsent(): ConsentValue {
  if (typeof window === "undefined") return null;
  const raw = window.localStorage.getItem(CONSENT_KEY);
  if (raw === "granted" || raw === "denied") return raw;
  return null;
}

export function setConsent(value: Exclude<ConsentValue, null>): void {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(CONSENT_KEY, value);
  window.dispatchEvent(new CustomEvent("bosco:consent", { detail: value }));
}

type PosthogLike = {
  init: (key: string, opts: Record<string, unknown>) => void;
  capture: (name: string, props?: Record<string, unknown>) => void;
  opt_in_capturing?: () => void;
  opt_out_capturing?: () => void;
};

declare global {
  interface Window {
    posthog?: PosthogLike;
  }
}

let loading = false;

function loadPosthog(key: string): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.posthog || loading) return Promise.resolve();
  loading = true;
  return new Promise<void>((resolve) => {
    const script = document.createElement("script");
    script.src = "/ingest/static/array.js";
    script.async = true;
    script.onload = () => {
      window.posthog?.init(key, {
        api_host: "/ingest",
        capture_pageview: true,
        persistence: "localStorage",
        autocapture: false,
      });
      resolve();
    };
    document.head.appendChild(script);
  });
}

export async function initAnalyticsIfConsented(): Promise<void> {
  const key = process.env.NEXT_PUBLIC_POSTHOG_KEY;
  if (!key) return;
  if (getConsent() !== "granted") return;
  await loadPosthog(key);
}

export function capture(event: string, props?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  if (getConsent() !== "granted") return;
  window.posthog?.capture(event, props);
}
