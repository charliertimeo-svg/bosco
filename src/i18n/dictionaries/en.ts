import type { Dictionary } from "./fr";

export const en: Dictionary = {
  nav: {
    home: "home",
    compare: "comparison",
    checklist: "pre-season checklist",
    waitlistCta: "join the list",
  },
  home: {
    metaTitle: "Bosco — offline boat diagnostics",
    metaDescription:
      "Bosco, the mobile app that helps you diagnose and fix your boat at sea, without a signal. In development.",
    heroEyebrow: "in development",
    heroTitle: "when something breaks at sea, Bosco answers onboard",
    heroLead:
      "Before you cast off, the app downloads your equipment manuals, the known failures and the verified fixes to your phone. An on-device AI reads your photos, suggests causes from the simplest to the rarest, and cites its sources.",
    heroPrimaryCta: "join the waitlist",
    heroSecondaryCta: "see the comparison",
    heroDisclaimer: "free list — we're not selling anything until we have a product.",
    pillarsTitle: "what Bosco does",
    pillars: [
      {
        title: "nameplate scan",
        body: "photograph the plate on your engine, pump or windlass: Bosco identifies brand, model, serial and pulls the docs.",
      },
      {
        title: "offline library",
        body: "the manuals for your equipment, searchable and indexed, usable without a signal.",
      },
      {
        title: "maintenance plan",
        body: "the service tasks by engine hours and by season, tailored to your boat.",
      },
      {
        title: "photo diagnostics",
        body: "show the issue: the AI lists likely causes, from the easiest to check to the rarest.",
      },
      {
        title: "cross-checked sources",
        body: "every answer cites its sources (manual + owner feedback) with a confidence level.",
      },
      {
        title: "safety guardrails",
        body: "gas, 230 V, water ingress: Bosco points you to a pro or to the rescue services first (VHF channel 16, Coast Guard).",
      },
    ],
    howTitle: "how it works",
    how: [
      "before you leave, you build your boat's pack: equipment, manuals, history.",
      "at sea, offline, the on-device AI reads the issue and suggests sourced causes.",
      "once online again, Bosco can go further via a cloud model if you choose to.",
    ],
    faqTitle: "frequently asked questions",
    faq: [
      {
        q: "does it really work without a signal?",
        a: "yes. Your boat's pack and the AI run on your phone. A connection is only used if you choose to go further.",
      },
      {
        q: "which boats are covered?",
        a: "the MVP first targets inboard diesel engines, water circuits and onboard electrics. We'll widen the scope after the first field tests.",
      },
      {
        q: "when do you launch?",
        a: "no date until the scope is validated with real boaters. Join the list: we'll ping you when the first tests open.",
      },
      {
        q: "is it paid?",
        a: "the waitlist is free. The price will be set after testing. We're not charging anyone until there's a product.",
      },
    ],
  },
  waitlist: {
    title: "join the waitlist",
    lead:
      "We'll only write to you for the steps that matter to you: tests opening, launch, a major update. Nothing more.",
    emailLabel: "your e-mail",
    emailPlaceholder: "captain@example.com",
    boatTypeLabel: "your boat",
    boatTypeOptions: {
      sail: "sailboat",
      motor: "motorboat",
      multihull: "multihull",
      other: "other",
    },
    roleLabel: "your profile",
    roleOptions: {
      owner: "owner",
      renter: "renter",
      pro: "nautical professional",
    },
    problemLabel: "a breakdown you'd like us to cover (optional)",
    consentLabel:
      "I accept that my e-mail is used to inform me of the Bosco launch. I can unsubscribe at any time.",
    submit: "sign me up",
    submitting: "sending…",
    successTitle: "noted.",
    successBody:
      "a confirmation e-mail is on its way. Click the link inside to validate your sign-up.",
    errorGeneric: "something went wrong. Try again in a moment.",
    errorInvalidEmail: "this e-mail doesn't look valid.",
    errorConsent: "consent is required to continue.",
    errorRateLimit: "too many attempts. Try again in a few minutes.",
  },
  compare: {
    metaTitle: "best boat maintenance apps — 2026 comparison",
    metaDescription:
      "Dated and sourced comparison of the main boat maintenance apps: Ready4Sea, Skipper'n, Eloyot. Bosco is listed (in development) but not ranked.",
    title: "best boat maintenance apps",
    lead:
      "We compare the main apps on the market. Bosco is listed, but not ranked: it isn't usable yet. We refresh the data every three months.",
    disclosure:
      "disclosure: Bosco is made by the author of this site. We mention it for context, not to promote it in the ranking.",
    columns: {
      app: "app",
      logbook: "logbook",
      ai: "AI",
      photo: "photo diagnostics",
      offline: "offline",
      price: "price",
      platforms: "platforms",
    },
  },
  checklist: {
    metaTitle: "boat maintenance checklist before the season",
    metaDescription:
      "The checks to run before your first outing: engine, circuits, safety, hull. To follow and tick off.",
    title: "boat maintenance checklist before the season",
    lead:
      "The checks to run before your first outing. It doesn't replace the builder's manual or a pro's advice.",
  },
  privacy: {
    metaTitle: "privacy",
    metaDescription: "How Bosco handles your personal data.",
    title: "privacy",
    body: `Last updated: 2026-10-06.\n\nBosco processes your personal data minimally and only for the purposes described here.\n\nPurposes: to inform you about the app launch (waitlist), to measure site traffic anonymously (via PostHog, EU region), to reply to your messages if you contact us.\n\nLegal basis: your consent.\n\nData collected: your e-mail, your boat type and your profile (only if you fill the form). Audience: page views, traffic source, aggregated events — nothing nominative until you sign up.\n\nHosting: Vercel (EU and equivalents). E-mails: Brevo (France). Analytics: PostHog EU region.\n\nRetention: until launch + 12 months for waitlist e-mails, then deletion.\n\nYour rights: access, rectification, erasure, portability, objection. Write to bonjour@bosco.app.\n\nCookies: no tracker is set until you accept the banner. You can change your choice at any time via the "Cookies" link in the footer.`,
  },
  legal: {
    metaTitle: "legal notice",
    metaDescription: "Legal information about the Bosco site.",
    title: "legal notice",
    body: `Site publisher: [TO COMPLETE — name or company]\nAddress: [TO COMPLETE]\nPublishing director: [TO COMPLETE]\nContact: bonjour@bosco.app\nCompany ID: [TO COMPLETE if applicable]\n\nHost: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.\n\nIntellectual property: the contents of this site (texts, visuals, code) belong to their author. Any reproduction is subject to prior authorization.`,
  },
  consent: {
    title: "cookies and audience measurement",
    body: "We don't use any cookie until you choose. PostHog (EU region) helps us measure site traffic without profiling. You can change your mind at any time via the \"Cookies\" link in the footer.",
    accept: "accept",
    reject: "decline",
    manage: "cookies",
  },
  footer: {
    tagline: "Bosco — in development. Not available yet.",
    links: {
      privacy: "privacy",
      legal: "legal notice",
      cookies: "cookies",
    },
    copyright: "© {year} Bosco. all rights reserved.",
  },
};
