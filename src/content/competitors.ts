export type Competitor = {
  name: string;
  slug: string;
  logbook: boolean | "partial";
  ai: boolean | "unknown";
  photo: boolean | "unknown";
  offline: boolean | "partial" | "unknown";
  price: string;
  platforms: string;
  source: string;
};

export const competitors: Competitor[] = [
  {
    name: "Ready4Sea",
    slug: "ready4sea",
    logbook: true,
    ai: true,
    photo: true,
    offline: "partial",
    price: "free + 39,99 $ Standard + 79,99 $ Premium",
    platforms: "iOS (Android à vérifier)",
    source: "https://apps.apple.com/us/app/id1626746852",
  },
  {
    name: "Skipper'n",
    slug: "skippern",
    logbook: true,
    ai: false,
    photo: false,
    offline: true,
    price: "gratuit (dons)",
    platforms: "iOS",
    source: "https://mwm.ai/apps/skippern/6778165957",
  },
  {
    name: "Eloyot",
    slug: "eloyot",
    logbook: "partial",
    ai: "unknown",
    photo: "unknown",
    offline: "unknown",
    price: "base gratuite + payant",
    platforms: "non précisé",
    source:
      "https://figaronautisme.meteoconsult.fr/actus-nautisme-lifestyle/2023-10-16/68492-quand-la-plaisance-innove",
  },
  {
    name: "Bosco",
    slug: "bosco",
    logbook: true,
    ai: true,
    photo: true,
    offline: true,
    price: "non fixé",
    platforms: "iOS + Android",
    source: "https://bosco.app",
  },
];
