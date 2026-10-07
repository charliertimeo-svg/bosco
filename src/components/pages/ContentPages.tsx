import Link from "next/link";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { pathFor } from "@/i18n/routes";
import { competitors } from "@/content/competitors";
import { IconCheck, IconDash, IconHelp } from "../Icons";

type ComparePageProps = { locale: Locale };

function cellIcon(value: boolean | "partial" | "unknown") {
  if (value === true) return <IconCheck width={18} height={18} />;
  if (value === false) return <IconDash width={18} height={18} />;
  if (value === "partial")
    return (
      <span style={{ display: "inline-flex", alignItems: "center", gap: 4 }}>
        <IconDash width={18} height={18} />
        <span style={{ fontSize: 11 }}>partiel</span>
      </span>
    );
  return <IconHelp width={18} height={18} />;
}

export function ComparePage({ locale }: ComparePageProps) {
  const d = getDictionary(locale);
  return (
    <article className="container prose">
      <h1>{d.compare.title}</h1>
      <p>{d.compare.lead}</p>
      <p className="disclosure">{d.compare.disclosure}</p>

      <div className="compare-wrap">
        <table className="compare">
          <thead>
            <tr>
              <th>{d.compare.columns.app}</th>
              <th>{d.compare.columns.logbook}</th>
              <th>{d.compare.columns.ai}</th>
              <th>{d.compare.columns.photo}</th>
              <th>{d.compare.columns.offline}</th>
              <th>{d.compare.columns.price}</th>
              <th>{d.compare.columns.platforms}</th>
            </tr>
          </thead>
          <tbody>
            {competitors.map((c) => (
              <tr key={c.slug}>
                <th scope="row">{c.name}</th>
                <td>{cellIcon(c.logbook)}</td>
                <td>{cellIcon(c.ai)}</td>
                <td>{cellIcon(c.photo)}</td>
                <td>{cellIcon(c.offline)}</td>
                <td>{c.price}</td>
                <td>{c.platforms}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <style>{`
        .disclosure {
          background: var(--sea-shallow);
          border: 1px solid var(--rule);
          border-radius: var(--radius-md);
          padding: 10px 14px;
          font-size: 0.9rem;
          color: var(--ink-soft);
        }
        .compare-wrap { overflow-x: auto; }
        .compare { width: 100%; border-collapse: collapse; margin-top: 20px; min-width: 640px; }
        .compare th, .compare td { text-align: left; padding: 10px 12px; border-bottom: 1px solid var(--rule); font-size: 0.92rem; }
        .compare th { font-weight: 500; color: var(--ink-soft); }
        .compare tbody th { color: var(--ink); font-weight: 500; }
      `}</style>
    </article>
  );
}

export function ChecklistPage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <article className="container prose">
      <h1>{d.checklist.title}</h1>
      <p>{d.checklist.lead}</p>
      <p>
        <Link href={`/${locale}#waitlist`}>{d.nav.waitlistCta}</Link>
      </p>
    </article>
  );
}

export function PrivacyPage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <article className="container prose">
      <h1>{d.privacy.title}</h1>
      {d.privacy.body.split("\n\n").map((p, i) => (
        <p key={i}>{p}</p>
      ))}
      <p>
        <Link href={pathFor("legal", locale)}>{d.footer.links.legal}</Link>
      </p>
    </article>
  );
}

export function LegalPage({ locale }: { locale: Locale }) {
  const d = getDictionary(locale);
  return (
    <article className="container prose">
      <h1>{d.legal.title}</h1>
      {d.legal.body.split("\n\n").map((p, i) => (
        <p key={i} style={{ whiteSpace: "pre-line" }}>
          {p}
        </p>
      ))}
      <p>
        <Link href={pathFor("privacy", locale)}>{d.footer.links.privacy}</Link>
      </p>
    </article>
  );
}
