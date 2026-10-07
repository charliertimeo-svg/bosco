"use client";

import { useState } from "react";
import type { Locale } from "@/config/site";
import { getDictionary } from "@/i18n";
import { capture } from "@/lib/analytics";

type Status = "idle" | "sending" | "success" | "error";

type Props = { locale: Locale };

export function WaitlistForm({ locale }: Props) {
  const d = getDictionary(locale);
  const [status, setStatus] = useState<Status>("idle");
  const [errorKey, setErrorKey] = useState<string>("");

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      email: String(data.get("email") ?? ""),
      boatType: String(data.get("boatType") ?? ""),
      role: String(data.get("role") ?? ""),
      problem: String(data.get("problem") ?? ""),
      consent: data.get("consent") === "on",
      website: String(data.get("website") ?? ""),
      locale,
    };

    setStatus("sending");
    setErrorKey("");

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (response.ok) {
        setStatus("success");
        capture("waitlist_submitted", {
          boat_type: payload.boatType,
          role: payload.role,
          locale,
        });
        form.reset();
        return;
      }
      const body = (await response.json().catch(() => ({}))) as { error?: string };
      setStatus("error");
      setErrorKey(body.error ?? "generic");
      capture("waitlist_error", { status: response.status });
    } catch {
      setStatus("error");
      setErrorKey("generic");
      capture("waitlist_error", { status: 0 });
    }
  }

  if (status === "success") {
    return (
      <div className="waitlist waitlist--success" role="status">
        <h3>{d.waitlist.successTitle}</h3>
        <p>{d.waitlist.successBody}</p>
      </div>
    );
  }

  return (
    <form className="waitlist" onSubmit={onSubmit} noValidate>
      <h3>{d.waitlist.title}</h3>
      <p className="waitlist__lead">{d.waitlist.lead}</p>

      <label>
        <span>{d.waitlist.emailLabel}</span>
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder={d.waitlist.emailPlaceholder}
        />
      </label>

      <div className="waitlist__row">
        <label>
          <span>{d.waitlist.boatTypeLabel}</span>
          <select name="boatType" required defaultValue="">
            <option value="" disabled>
              —
            </option>
            {Object.entries(d.waitlist.boatTypeOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>

        <label>
          <span>{d.waitlist.roleLabel}</span>
          <select name="role" required defaultValue="">
            <option value="" disabled>
              —
            </option>
            {Object.entries(d.waitlist.roleOptions).map(([value, label]) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </select>
        </label>
      </div>

      <label>
        <span>{d.waitlist.problemLabel}</span>
        <input type="text" name="problem" maxLength={500} />
      </label>

      <label className="waitlist__consent">
        <input type="checkbox" name="consent" required />
        <span>{d.waitlist.consentLabel}</span>
      </label>

      <div className="waitlist__honeypot" aria-hidden="true">
        <label>
          website
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? d.waitlist.submitting : d.waitlist.submit}
      </button>

      {status === "error" && (
        <p className="waitlist__error" role="alert">
          {errorKey === "invalid_email"
            ? d.waitlist.errorInvalidEmail
            : errorKey === "consent_required"
            ? d.waitlist.errorConsent
            : errorKey === "rate_limit"
            ? d.waitlist.errorRateLimit
            : d.waitlist.errorGeneric}
        </p>
      )}

      <style>{`
        .waitlist {
          background: var(--paper-sunk);
          border: 1px solid var(--rule);
          border-radius: var(--radius-lg);
          padding: 24px;
          display: flex; flex-direction: column; gap: 14px;
        }
        .waitlist__lead { color: var(--ink-soft); margin: 0 0 6px 0; font-size: 0.95rem; }
        .waitlist label { display: flex; flex-direction: column; gap: 6px; font-size: 0.9rem; }
        .waitlist input[type="text"], .waitlist input[type="email"], .waitlist select {
          font: inherit; padding: 10px 12px; min-height: 44px;
          border: 1px solid var(--rule-strong); border-radius: var(--radius-md);
          background: var(--paper); color: var(--ink);
        }
        .waitlist input:focus, .waitlist select:focus { border-color: var(--ink); outline: none; }
        .waitlist__row { display: grid; gap: 12px; grid-template-columns: 1fr 1fr; }
        @media (max-width: 520px) { .waitlist__row { grid-template-columns: 1fr; } }
        .waitlist__consent { flex-direction: row; align-items: flex-start; gap: 10px; font-size: 0.88rem; color: var(--ink-soft); }
        .waitlist__consent input { margin-top: 3px; }
        .waitlist__honeypot { position: absolute; left: -9999px; width: 1px; height: 1px; overflow: hidden; }
        .waitlist__error { color: var(--signal); font-size: 0.9rem; margin: 0; }
        .waitlist--success h3 { margin-bottom: 8px; }
      `}</style>
    </form>
  );
}
