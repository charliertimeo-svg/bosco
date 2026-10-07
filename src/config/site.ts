export const site = {
  name: "Bosco",
  tagline: {
    fr: "le réflexe du bord quand ça casse en mer",
    en: "the onboard reflex when things break at sea",
    it: "il riflesso di bordo quando qualcosa si rompe in mare",
  },
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bosco.app",
  defaultLocale: "fr" as const,
  locales: ["fr", "en", "it"] as const,
  contactEmail: "bonjour@bosco.app",
  org: {
    legalName: "Bosco",
    country: "FR",
  },
  dates: {
    competitorsCheckedOn: "2026-10-06",
    sitePublishedOn: null as string | null,
  },
  social: {
    instagram: null as string | null,
    youtube: null as string | null,
    tiktok: null as string | null,
  },
} as const;

export type Locale = (typeof site.locales)[number];

export function isLocale(value: string | undefined | null): value is Locale {
  return typeof value === "string" && (site.locales as readonly string[]).includes(value);
}
