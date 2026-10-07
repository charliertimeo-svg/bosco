export const fr = {
  nav: {
    home: "accueil",
    compare: "comparatif",
    checklist: "checklist d'avant-saison",
    waitlistCta: "rejoindre la liste",
  },
  home: {
    metaTitle: "Bosco — le diagnostic bateau hors connexion",
    metaDescription:
      "Bosco, l'app mobile qui vous aide à diagnostiquer et réparer votre bateau en mer, sans réseau. En développement.",
    heroEyebrow: "en développement",
    heroTitle: "quand ça casse en mer, Bosco répond à bord",
    heroLead:
      "Avant d'appareiller, l'app charge sur votre téléphone les manuels de vos équipements, les pannes connues et les solutions vérifiées. Une IA locale lit vos photos, propose les causes de la plus simple à la plus rare, et cite ses sources.",
    heroPrimaryCta: "rejoindre la liste d'attente",
    heroSecondaryCta: "voir le comparatif",
    heroDisclaimer: "liste gratuite — on ne vend rien tant qu'on n'a pas de produit.",
    pillarsTitle: "ce que Bosco fait",
    pillars: [
      {
        title: "scan de la plaque signalétique",
        body: "photographiez l'étiquette moteur, pompe ou guindeau : Bosco identifie marque, modèle, série et retrouve la doc.",
      },
      {
        title: "bibliothèque hors ligne",
        body: "les manuels de vos équipements embarqués, consultables sans connexion, indexés et cherchables.",
      },
      {
        title: "plan d'entretien",
        body: "les opérations à faire par heures moteur et par saison, personnalisées à votre bateau.",
      },
      {
        title: "diagnostic photo",
        body: "montrez la panne : l'IA liste les causes probables, de la plus simple à vérifier à la plus rare.",
      },
      {
        title: "sources croisées",
        body: "chaque réponse cite ses sources (manuel + retours propriétaires) avec un niveau de confiance.",
      },
      {
        title: "garde-fous sécurité",
        body: "gaz, 230 V, voie d'eau : Bosco oriente d'abord vers un pro ou vers les secours (VHF canal 16, CROSS).",
      },
    ],
    howTitle: "comment ça marche",
    how: [
      "avant de partir, vous constituez le pack de votre bateau : équipements, manuels, historique.",
      "en mer, hors réseau, l'IA locale lit la panne et propose des causes sourcées.",
      "à la reconnexion, Bosco peut aller plus loin via un modèle cloud si vous le demandez.",
    ],
    faqTitle: "questions fréquentes",
    faq: [
      {
        q: "est-ce que ça marche vraiment sans réseau ?",
        a: "oui. Le pack du bateau et l'IA tournent sur votre téléphone. La connexion n'est utilisée que si vous choisissez d'aller plus loin.",
      },
      {
        q: "quels bateaux sont couverts ?",
        a: "le MVP vise d'abord la motorisation diesel inboard, les circuits eau et l'électricité de bord. On élargit après les premiers retours terrain.",
      },
      {
        q: "quand sortez-vous ?",
        a: "pas de date tant que le périmètre n'est pas validé avec des plaisanciers. Inscrivez-vous à la liste : on prévient quand on ouvre les premiers tests.",
      },
      {
        q: "est-ce payant ?",
        a: "la liste d'attente est gratuite. Le prix sera fixé après la phase de tests. On n'encaisse rien tant qu'il n'y a pas de produit.",
      },
    ],
  },
  waitlist: {
    title: "rejoindre la liste d'attente",
    lead:
      "On vous écrit uniquement pour les étapes qui vous concernent : ouverture des tests, sortie, grosse mise à jour. Pas plus.",
    emailLabel: "votre e-mail",
    emailPlaceholder: "capitaine@exemple.com",
    boatTypeLabel: "votre bateau",
    boatTypeOptions: {
      sail: "voilier",
      motor: "bateau à moteur",
      multihull: "multicoque",
      other: "autre",
    },
    roleLabel: "votre profil",
    roleOptions: {
      owner: "propriétaire",
      renter: "locataire",
      pro: "pro du nautisme",
    },
    problemLabel: "une panne que vous aimeriez voir couverte (facultatif)",
    consentLabel:
      "j'accepte que mon e-mail soit utilisé pour m'informer du lancement de Bosco. Je peux me désinscrire à tout moment.",
    submit: "m'inscrire",
    submitting: "envoi…",
    successTitle: "c'est noté.",
    successBody:
      "un e-mail de confirmation va arriver. Cliquez le lien pour valider votre inscription.",
    errorGeneric: "une erreur est survenue. Réessayez dans un instant.",
    errorInvalidEmail: "cet e-mail ne semble pas valide.",
    errorConsent: "le consentement est obligatoire pour continuer.",
    errorRateLimit: "trop de tentatives. Réessayez dans quelques minutes.",
  },
  compare: {
    metaTitle: "meilleures applications d'entretien bateau — comparatif 2026",
    metaDescription:
      "Comparatif daté et sourcé des principales apps d'entretien bateau : Ready4Sea, Skipper'n, Eloyot. On y liste aussi Bosco (en développement) sans le classer.",
    title: "meilleures applications d'entretien bateau",
    lead:
      "On compare ici les principales apps du marché. On y liste Bosco, en développement, mais on ne le classe pas : il n'est pas encore utilisable. Révision des infos tous les 3 mois.",
    disclosure:
      "transparence : Bosco est édité par l'auteur de ce site. On le mentionne pour information, pas pour le promouvoir dans le classement.",
    columns: {
      app: "app",
      logbook: "carnet",
      ai: "IA",
      photo: "diagnostic photo",
      offline: "hors ligne",
      price: "prix",
      platforms: "plateformes",
    },
  },
  checklist: {
    metaTitle: "checklist d'entretien bateau avant la saison",
    metaDescription:
      "La liste des contrôles à faire avant la première sortie : moteur, circuits, sécurité, coque. À suivre et à cocher.",
    title: "checklist d'entretien bateau avant la saison",
    lead:
      "La liste des contrôles à faire avant la première sortie. Elle ne remplace pas le manuel du constructeur ni l'avis d'un pro.",
  },
  privacy: {
    metaTitle: "confidentialité",
    metaDescription: "Comment Bosco traite vos données personnelles.",
    title: "confidentialité",
    body: `Dernière mise à jour : 2026-10-06.\n\nBosco traite vos données personnelles de manière minimale et uniquement pour les finalités décrites ici.\n\nFinalités : vous informer du lancement de l'app (liste d'attente), mesurer l'audience de ce site de façon anonymisée (via PostHog, région UE), répondre à vos messages si vous nous contactez.\n\nBase légale : votre consentement.\n\nDonnées collectées : votre e-mail, votre type de bateau et votre profil (uniquement si vous remplissez le formulaire). Mesure d'audience : pages vues, source du trafic, événements agrégés — rien de nominatif tant que vous ne vous êtes pas inscrit.\n\nHébergement : Vercel (UE et équivalents). E-mails : Brevo (France). Analytics : PostHog région UE.\n\nDurée de conservation : jusqu'au lancement + 12 mois pour les e-mails liés à la liste d'attente, puis suppression.\n\nVos droits : accès, rectification, effacement, portabilité, opposition. Écrivez à bonjour@bosco.app.\n\nCookies : aucun traceur n'est posé tant que vous n'avez pas accepté la bannière. Vous pouvez modifier votre choix à tout moment via le lien « Cookies » en bas de page.`,
  },
  legal: {
    metaTitle: "mentions légales",
    metaDescription: "Informations légales du site Bosco.",
    title: "mentions légales",
    body: `Éditeur du site : [À COMPLÉTER — nom ou raison sociale]\nAdresse : [À COMPLÉTER]\nDirecteur de la publication : [À COMPLÉTER]\nContact : bonjour@bosco.app\nSIRET : [À COMPLÉTER si applicable]\n\nHébergeur : Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.\n\nPropriété intellectuelle : les contenus de ce site (textes, visuels, code) sont la propriété de leur auteur. Toute reproduction est soumise à autorisation préalable.`,
  },
  consent: {
    title: "cookies et mesure d'audience",
    body: "On n'utilise aucun cookie tant que vous n'avez pas choisi. PostHog (région UE) nous aide à mesurer l'audience du site sans profiler. Vous pouvez changer d'avis à tout moment via le lien « Cookies » du pied de page.",
    accept: "accepter",
    reject: "refuser",
    manage: "cookies",
  },
  footer: {
    tagline: "Bosco — en développement. Pas encore disponible.",
    links: {
      privacy: "confidentialité",
      legal: "mentions légales",
      cookies: "cookies",
    },
    copyright: "© {year} Bosco. tous droits réservés.",
  },
} as const;

export type Dictionary = typeof fr;
