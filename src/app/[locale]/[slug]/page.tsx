import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, site } from "@/config/site";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/lib/seo";
import { pathFor, resolveSlug, routes } from "@/i18n/routes";
import {
  ChecklistPage,
  ComparePage,
  LegalPage,
  PrivacyPage,
} from "@/components/pages/ContentPages";
import { JsonLd } from "@/components/JsonLd";

type Params = { locale: string; slug: string };

export const dynamicParams = false;

export function generateStaticParams() {
  const out: Params[] = [];
  for (const key of Object.keys(routes) as (keyof typeof routes)[]) {
    for (const locale of site.locales) {
      out.push({ locale, slug: routes[key][locale] });
    }
  }
  return out;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  if (!isLocale(locale)) return {};
  const key = resolveSlug(locale, slug);
  if (!key) return {};
  const d = getDictionary(locale);
  const section = d[key];
  return buildMetadata({
    locale,
    title: section.metaTitle,
    description: section.metaDescription,
    path: pathFor(key, locale),
    pageKey: key,
  });
}

export default async function SlugPage({ params }: { params: Promise<Params> }) {
  const { locale, slug } = await params;
  if (!isLocale(locale)) notFound();
  const key = resolveSlug(locale, slug);
  if (!key) notFound();

  const d = getDictionary(locale);
  const section = d[key];

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: d.nav.home,
        item: `${site.url}/${locale}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: section.title,
        item: `${site.url}${pathFor(key, locale)}`,
      },
    ],
  };

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: section.title,
    description: section.metaDescription,
    inLanguage: locale,
    author: { "@type": "Organization", name: site.name },
    datePublished: "2026-10-06",
  };

  const body =
    key === "compare" ? (
      <ComparePage locale={locale} />
    ) : key === "checklist" ? (
      <ChecklistPage locale={locale} />
    ) : key === "privacy" ? (
      <PrivacyPage locale={locale} />
    ) : (
      <LegalPage locale={locale} />
    );

  return (
    <>
      <div style={{ padding: "40px 0" }}>{body}</div>
      <JsonLd data={[breadcrumbLd, articleLd]} />
    </>
  );
}
