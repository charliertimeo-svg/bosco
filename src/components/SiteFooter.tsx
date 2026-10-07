"use client";

import Link from "next/link";
import type { Locale } from "@/config/site";
import { site } from "@/config/site";
import { getDictionary, tpl } from "@/i18n";
import { pathFor } from "@/i18n/routes";

type Props = { locale: Locale };

export function SiteFooter({ locale }: Props) {
  const d = getDictionary(locale);
  const year = new Date().getFullYear();

  function openConsent() {
    window.dispatchEvent(new CustomEvent("bosco:open-consent"));
  }

  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <p className="site-footer__tagline">{d.footer.tagline}</p>
        <ul className="site-footer__links">
          <li>
            <Link href={pathFor("privacy", locale)}>{d.footer.links.privacy}</Link>
          </li>
          <li>
            <Link href={pathFor("legal", locale)}>{d.footer.links.legal}</Link>
          </li>
          <li>
            <button type="button" className="site-footer__cookies" onClick={openConsent}>
              {d.footer.links.cookies}
            </button>
          </li>
        </ul>
        <p className="site-footer__copy">
          {tpl(d.footer.copyright, { year })} — {site.name}
        </p>
      </div>
      <style>{`
        .site-footer { border-top: 1px solid var(--rule); background: var(--paper-sunk); padding: 32px 0; margin-top: 60px; }
        .site-footer__row { display: flex; flex-direction: column; gap: 10px; }
        .site-footer__tagline { font-size: 0.95rem; color: var(--ink-soft); margin: 0; }
        .site-footer__links { display: flex; gap: 16px; list-style: none; margin: 0; padding: 0; }
        .site-footer__links a { font-size: 0.9rem; }
        .site-footer__cookies {
          background: none; border: 0; padding: 0; color: var(--ink); border-bottom: 1px solid var(--rule-strong);
          font: inherit; font-size: 0.9rem; cursor: pointer;
        }
        .site-footer__cookies:hover { border-bottom-color: var(--signal); }
        .site-footer__copy { font-size: 0.78rem; color: var(--ink-soft); margin: 0; }
      `}</style>
    </footer>
  );
}
