import Link from "next/link";
import { site, type Locale } from "@/config/site";
import { resolveSlug, pathFor } from "@/i18n/routes";

type Props = {
  locale: Locale;
  slug?: string;
};

const labels: Record<Locale, string> = { fr: "FR", en: "EN", it: "IT" };

export function LanguageSwitcher({ locale, slug }: Props) {
  const pageKey = slug ? resolveSlug(locale, slug) : null;

  return (
    <nav aria-label="langue" className="lang-switcher">
      <ul>
        {site.locales.map((l) => {
          const href = pageKey ? pathFor(pageKey, l) : `/${l}`;
          const active = l === locale;
          return (
            <li key={l}>
              <Link
                href={href}
                hrefLang={l}
                aria-current={active ? "true" : undefined}
                className={active ? "is-active" : undefined}
              >
                {labels[l]}
              </Link>
            </li>
          );
        })}
      </ul>
      <style>{`
        .lang-switcher ul { display: flex; gap: 10px; list-style: none; margin: 0; padding: 0; }
        .lang-switcher a {
          border: 0; font-size: 0.85rem; color: var(--ink-soft);
          padding: 4px 8px; border-radius: 999px;
        }
        .lang-switcher a:hover { color: var(--ink); }
        .lang-switcher a.is-active { color: var(--ink); background: var(--paper-sunk); }
      `}</style>
    </nav>
  );
}
