import type { Metadata } from "next";
import { site, type Locale } from "@/config/site";
import { pathFor, type PageKey } from "@/i18n/routes";

type BuildMetadataArgs = {
  locale: Locale;
  title: string;
  description: string;
  path: string;
  pageKey?: PageKey;
};

export function buildMetadata({
  locale,
  title,
  description,
  path,
  pageKey,
}: BuildMetadataArgs): Metadata {
  const canonical = `${site.url}${path}`;

  const languages: Record<string, string> = {};
  if (pageKey) {
    for (const l of site.locales) {
      languages[l] = `${site.url}${pathFor(pageKey, l)}`;
    }
    languages["x-default"] = `${site.url}${pathFor(pageKey, site.defaultLocale)}`;
  } else {
    for (const l of site.locales) {
      languages[l] = `${site.url}/${l}`;
    }
    languages["x-default"] = `${site.url}/${site.defaultLocale}`;
  }

  return {
    title,
    description,
    metadataBase: new URL(site.url),
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      type: "website",
      url: canonical,
      title,
      description,
      siteName: site.name,
      locale,
      images: [{ url: "/og.png", width: 1200, height: 630, alt: site.name }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: ["/og.png"],
    },
    robots: { index: true, follow: true },
  };
}
