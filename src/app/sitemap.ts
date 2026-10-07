import type { MetadataRoute } from "next";
import { site } from "@/config/site";
import { pathFor, routes } from "@/i18n/routes";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of site.locales) {
    const languages: Record<string, string> = {};
    for (const l of site.locales) languages[l] = `${site.url}/${l}`;
    languages["x-default"] = `${site.url}/${site.defaultLocale}`;
    entries.push({
      url: `${site.url}/${locale}`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
      alternates: { languages },
    });
  }

  for (const key of Object.keys(routes) as (keyof typeof routes)[]) {
    for (const locale of site.locales) {
      const languages: Record<string, string> = {};
      for (const l of site.locales) languages[l] = `${site.url}${pathFor(key, l)}`;
      languages["x-default"] = `${site.url}${pathFor(key, site.defaultLocale)}`;
      entries.push({
        url: `${site.url}${pathFor(key, locale)}`,
        lastModified: now,
        changeFrequency: "monthly",
        priority: key === "compare" || key === "checklist" ? 0.8 : 0.3,
        alternates: { languages },
      });
    }
  }

  return entries;
}
