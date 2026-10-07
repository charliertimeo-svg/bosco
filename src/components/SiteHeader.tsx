import Link from "next/link";
import type { Locale } from "@/config/site";
import { site } from "@/config/site";
import { getDictionary } from "@/i18n";
import { pathFor } from "@/i18n/routes";
import { BoscoMark } from "./Icons";
import { LanguageSwitcher } from "./LanguageSwitcher";

type Props = {
  locale: Locale;
  slug?: string;
};

export function SiteHeader({ locale, slug }: Props) {
  const d = getDictionary(locale);
  return (
    <header className="site-header">
      <div className="container site-header__row">
        <Link href={`/${locale}`} className="site-header__brand" aria-label={site.name}>
          <BoscoMark width={28} height={28} />
          <span>{site.name}</span>
        </Link>
        <nav className="site-header__nav" aria-label="navigation principale">
          <Link href={pathFor("compare", locale)}>{d.nav.compare}</Link>
          <Link href={pathFor("checklist", locale)}>{d.nav.checklist}</Link>
          <Link href={`/${locale}#waitlist`} className="btn btn-primary site-header__cta">
            {d.nav.waitlistCta}
          </Link>
        </nav>
        <LanguageSwitcher locale={locale} slug={slug} />
      </div>
      <style>{`
        .site-header {
          border-bottom: 1px solid var(--rule);
          background: var(--paper);
          position: sticky; top: 0; z-index: 10;
        }
        .site-header__row {
          display: flex; align-items: center; justify-content: space-between;
          gap: 16px; padding: 14px 20px; flex-wrap: wrap;
        }
        .site-header__brand {
          display: inline-flex; align-items: center; gap: 10px;
          border: 0; font-weight: 500; font-size: 1.05rem;
        }
        .site-header__nav {
          display: flex; align-items: center; gap: 18px; flex-wrap: wrap;
        }
        .site-header__nav a { border: 0; color: var(--ink-soft); }
        .site-header__nav a:hover { color: var(--ink); }
        .site-header__cta { padding: 8px 14px; min-height: 0; font-size: 0.92rem; }
        @media (max-width: 720px) {
          .site-header__nav { gap: 12px; order: 3; width: 100%; justify-content: flex-start; }
        }
      `}</style>
    </header>
  );
}
