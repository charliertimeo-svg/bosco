import type { Locale } from "@/config/site";

export type PageKey = "compare" | "checklist" | "privacy" | "legal";

export const routes: Record<PageKey, Record<Locale, string>> = {
  compare: {
    fr: "meilleures-applications-entretien-bateau",
    en: "best-boat-maintenance-apps",
    it: "migliori-app-manutenzione-barca",
  },
  checklist: {
    fr: "checklist-entretien-bateau-avant-saison",
    en: "boat-maintenance-checklist-before-season",
    it: "checklist-manutenzione-barca-inizio-stagione",
  },
  privacy: {
    fr: "confidentialite",
    en: "privacy",
    it: "privacy",
  },
  legal: {
    fr: "mentions-legales",
    en: "legal-notice",
    it: "note-legali",
  },
};

export function resolveSlug(locale: Locale, slug: string): PageKey | null {
  for (const key of Object.keys(routes) as PageKey[]) {
    if (routes[key][locale] === slug) return key;
  }
  return null;
}

export function pathFor(key: PageKey, locale: Locale): string {
  return `/${locale}/${routes[key][locale]}`;
}

export function allLocalizedPaths(key: PageKey): Array<{ locale: Locale; path: string }> {
  return (Object.keys(routes[key]) as Locale[]).map((locale) => ({
    locale,
    path: pathFor(key, locale),
  }));
}
