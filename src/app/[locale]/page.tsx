import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { isLocale, site } from "@/config/site";
import { getDictionary } from "@/i18n";
import { buildMetadata } from "@/lib/seo";
import { HeroChart } from "@/components/HeroChart";
import { PhoneMock } from "@/components/PhoneMock";
import { WaitlistForm } from "@/components/WaitlistForm";
import { JsonLd } from "@/components/JsonLd";
import { TrackedLink } from "@/components/TrackedLink";
import { pathFor } from "@/i18n/routes";

type Params = { locale: string };

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) return {};
  const d = getDictionary(locale);
  return buildMetadata({
    locale,
    title: d.home.metaTitle,
    description: d.home.metaDescription,
    path: `/${locale}`,
  });
}

export default async function HomePage({ params }: { params: Promise<Params> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const d = getDictionary(locale);

  const appLd = {
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: site.name,
    operatingSystem: "iOS, Android",
    applicationCategory: "UtilitiesApplication",
    description: d.home.metaDescription,
    offers: { "@type": "Offer", price: "0", priceCurrency: "EUR", availability: "https://schema.org/PreOrder" },
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: d.home.faq.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <>
      <section className="hero">
        <div className="hero__bg">
          <HeroChart />
        </div>
        <div className="container hero__inner">
          <div className="hero__text">
            <span className="eyebrow">{d.home.heroEyebrow}</span>
            <h1>{d.home.heroTitle}</h1>
            <p className="hero__lead">{d.home.heroLead}</p>
            <div className="hero__ctas">
              <TrackedLink
                href="#waitlist"
                className="btn btn-primary"
                event="waitlist_cta_clicked"
                eventProps={{ from: "hero" }}
              >
                {d.home.heroPrimaryCta}
              </TrackedLink>
              <TrackedLink
                href={pathFor("compare", locale)}
                className="btn"
                event="compare_cta_clicked"
                eventProps={{ from: "hero" }}
              >
                {d.home.heroSecondaryCta}
              </TrackedLink>
            </div>
            <p className="hero__disclaimer">{d.home.heroDisclaimer}</p>
          </div>
          <div className="hero__visual">
            <PhoneMock caption={site.tagline[locale]} />
          </div>
        </div>
      </section>

      <section className="container pillars">
        <h2>{d.home.pillarsTitle}</h2>
        <div className="pillars__grid">
          {d.home.pillars.map((p) => (
            <article key={p.title} className="card">
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="container how">
        <h2>{d.home.howTitle}</h2>
        <ol className="how__list">
          {d.home.how.map((step, i) => (
            <li key={i}>
              <span className="how__num">{i + 1}</span>
              <span>{step}</span>
            </li>
          ))}
        </ol>
      </section>

      <section id="waitlist" className="container waitlist-wrap">
        <WaitlistForm locale={locale} />
      </section>

      <section className="container faq">
        <h2>{d.home.faqTitle}</h2>
        {d.home.faq.map((f) => (
          <details key={f.q}>
            <summary>{f.q}</summary>
            <p>{f.a}</p>
          </details>
        ))}
      </section>

      <JsonLd data={[appLd, faqLd]} />

      <style>{`
        .hero { position: relative; overflow: hidden; padding: 60px 0 40px; }
        .hero__bg { position: absolute; inset: 0; z-index: 0; pointer-events: none; }
        .hero__bg svg { width: 100%; height: 100%; }
        .hero__inner { position: relative; z-index: 1; display: grid; grid-template-columns: 1.3fr 1fr; gap: 40px; align-items: center; }
        .hero__text .eyebrow { margin-bottom: 14px; }
        .hero__lead { color: var(--ink-soft); font-size: 1.1rem; max-width: 56ch; }
        .hero__ctas { display: flex; gap: 12px; margin-top: 18px; flex-wrap: wrap; }
        .hero__disclaimer { color: var(--ink-soft); font-size: 0.85rem; margin-top: 12px; }
        .hero__visual { display: flex; justify-content: center; }
        @media (max-width: 820px) {
          .hero__inner { grid-template-columns: 1fr; }
          .hero__visual { order: -1; }
        }

        .pillars { padding: 40px 0; }
        .pillars__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 16px; }
        .pillars__grid h3 { margin-bottom: 6px; }
        .pillars__grid p { margin: 0; color: var(--ink-soft); font-size: 0.95rem; }
        @media (max-width: 820px) { .pillars__grid { grid-template-columns: 1fr 1fr; } }
        @media (max-width: 520px) { .pillars__grid { grid-template-columns: 1fr; } }

        .how { padding: 20px 0 40px; }
        .how__list { list-style: none; padding: 0; margin: 16px 0 0 0; display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 16px; }
        .how__list li { display: flex; gap: 12px; align-items: flex-start; }
        .how__num {
          display: inline-flex; align-items: center; justify-content: center;
          width: 28px; height: 28px; border-radius: 50%;
          background: var(--sea-shallow); color: var(--ink); flex: 0 0 auto; font-size: 0.9rem;
        }
        @media (max-width: 820px) { .how__list { grid-template-columns: 1fr; } }

        .waitlist-wrap { padding: 20px 0 40px; max-width: 720px; }

        .faq { padding: 20px 0 40px; max-width: 820px; }
        .faq details {
          border-top: 1px solid var(--rule); padding: 14px 0;
        }
        .faq details:last-of-type { border-bottom: 1px solid var(--rule); }
        .faq summary { font-weight: 500; cursor: pointer; }
        .faq summary::marker { color: var(--ink-soft); }
        .faq p { margin: 8px 0 0 0; color: var(--ink-soft); }
      `}</style>
    </>
  );
}
