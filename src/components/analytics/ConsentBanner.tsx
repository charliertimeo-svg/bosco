"use client";

import { useCallback, useEffect, useState } from "react";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { getConsent, initAnalyticsIfConsented, setConsent } from "@/lib/analytics";

type Props = { locale: Locale };

export function ConsentBanner({ locale }: Props) {
  const d = getDictionary(locale);
  const [visible, setVisible] = useState(false);

  const refresh = useCallback(() => {
    const current = getConsent();
    setVisible(current === null);
    if (current === "granted") {
      void initAnalyticsIfConsented();
    }
  }, []);

  useEffect(() => {
    refresh();
    const open = () => setVisible(true);
    window.addEventListener("bosco:open-consent", open);
    return () => window.removeEventListener("bosco:open-consent", open);
  }, [refresh]);

  function accept() {
    setConsent("granted");
    setVisible(false);
    void initAnalyticsIfConsented();
  }

  function reject() {
    setConsent("denied");
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="consent" role="dialog" aria-live="polite" aria-label={d.consent.title}>
      <div className="consent__inner">
        <div>
          <strong>{d.consent.title}</strong>
          <p>{d.consent.body}</p>
        </div>
        <div className="consent__actions">
          <button type="button" className="btn" onClick={reject}>
            {d.consent.reject}
          </button>
          <button type="button" className="btn btn-primary" onClick={accept}>
            {d.consent.accept}
          </button>
        </div>
      </div>
      <style>{`
        .consent {
          position: fixed; left: 16px; right: 16px; bottom: 16px; z-index: 50;
          background: var(--paper); border: 1px solid var(--rule-strong);
          border-radius: var(--radius-lg); box-shadow: 0 20px 40px -20px rgba(13,43,62,0.3);
        }
        .consent__inner {
          display: grid; grid-template-columns: 1fr auto; gap: 16px; padding: 16px 20px; align-items: center;
        }
        .consent p { margin: 4px 0 0 0; font-size: 0.88rem; color: var(--ink-soft); }
        .consent__actions { display: flex; gap: 10px; }
        .consent .btn { padding: 10px 14px; min-height: 40px; font-size: 0.9rem; }
        @media (max-width: 640px) {
          .consent__inner { grid-template-columns: 1fr; }
          .consent__actions { justify-content: flex-end; }
        }
      `}</style>
    </div>
  );
}
