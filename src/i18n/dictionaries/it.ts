import type { Dictionary } from "./fr";

export const it: Dictionary = {
  nav: {
    home: "home",
    compare: "confronto",
    checklist: "checklist pre-stagione",
    waitlistCta: "entra nella lista",
  },
  home: {
    metaTitle: "Bosco — diagnosi barca offline",
    metaDescription:
      "Bosco, l'app mobile che ti aiuta a diagnosticare e riparare la tua barca in mare, senza rete. In sviluppo.",
    heroEyebrow: "in sviluppo",
    heroTitle: "quando qualcosa si rompe in mare, Bosco risponde a bordo",
    heroLead:
      "Prima di salpare, l'app scarica sul telefono i manuali dei tuoi equipaggiamenti, i guasti conosciuti e le soluzioni verificate. Un'IA locale legge le tue foto, propone le cause dalla più semplice alla più rara e cita le fonti.",
    heroPrimaryCta: "entra nella lista d'attesa",
    heroSecondaryCta: "vedi il confronto",
    heroDisclaimer: "lista gratuita — non vendiamo nulla finché non abbiamo un prodotto.",
    pillarsTitle: "cosa fa Bosco",
    pillars: [
      {
        title: "scan della targhetta",
        body: "fotografa la targhetta del motore, della pompa o del salpa-ancore: Bosco identifica marca, modello, matricola e recupera la documentazione.",
      },
      {
        title: "biblioteca offline",
        body: "i manuali dei tuoi equipaggiamenti di bordo, consultabili senza rete, indicizzati e ricercabili.",
      },
      {
        title: "piano di manutenzione",
        body: "le operazioni da fare per ore motore e per stagione, personalizzate sulla tua barca.",
      },
      {
        title: "diagnosi fotografica",
        body: "mostra il guasto: l'IA elenca le cause probabili, dalla più facile da verificare alla più rara.",
      },
      {
        title: "fonti incrociate",
        body: "ogni risposta cita le fonti (manuale + feedback dei proprietari) con un livello di confidenza.",
      },
      {
        title: "sicurezza prima di tutto",
        body: "gas, 230 V, falla d'acqua: Bosco ti indirizza prima a un professionista o ai soccorsi (VHF canale 16, Guardia Costiera).",
      },
    ],
    howTitle: "come funziona",
    how: [
      "prima di partire, prepari il pack della tua barca: equipaggiamenti, manuali, storico.",
      "in mare, senza rete, l'IA locale legge il guasto e propone cause documentate.",
      "al ritorno online, Bosco può andare oltre tramite un modello cloud, se vuoi.",
    ],
    faqTitle: "domande frequenti",
    faq: [
      {
        q: "funziona davvero senza rete?",
        a: "sì. Il pack della barca e l'IA girano sul tuo telefono. La connessione si usa solo se vuoi andare oltre.",
      },
      {
        q: "quali barche sono coperte?",
        a: "l'MVP punta prima sui motori diesel entrobordo, i circuiti acqua e l'elettrica di bordo. Allarghiamo dopo i primi riscontri sul campo.",
      },
      {
        q: "quando uscite?",
        a: "nessuna data finché il perimetro non è validato con dei diportisti. Iscriviti alla lista: ti avvisiamo quando apriamo i primi test.",
      },
      {
        q: "è a pagamento?",
        a: "la lista d'attesa è gratuita. Il prezzo verrà fissato dopo la fase di test. Non incassiamo nulla finché non c'è un prodotto.",
      },
    ],
  },
  waitlist: {
    title: "entra nella lista d'attesa",
    lead:
      "Ti scriviamo solo per le tappe che ti riguardano: apertura dei test, uscita, grande aggiornamento. Niente di più.",
    emailLabel: "la tua e-mail",
    emailPlaceholder: "capitano@esempio.com",
    boatTypeLabel: "la tua barca",
    boatTypeOptions: {
      sail: "barca a vela",
      motor: "barca a motore",
      multihull: "multiscafo",
      other: "altro",
    },
    roleLabel: "il tuo profilo",
    roleOptions: {
      owner: "proprietario",
      renter: "noleggiatore",
      pro: "professionista nautico",
    },
    problemLabel: "un guasto che vorresti vedere coperto (facoltativo)",
    consentLabel:
      "accetto che la mia e-mail sia usata per informarmi del lancio di Bosco. Posso disiscrivermi in qualsiasi momento.",
    submit: "iscrivimi",
    submitting: "invio…",
    successTitle: "preso nota.",
    successBody:
      "una e-mail di conferma sta arrivando. Clicca il link per convalidare l'iscrizione.",
    errorGeneric: "si è verificato un errore. Riprova tra un attimo.",
    errorInvalidEmail: "questa e-mail non sembra valida.",
    errorConsent: "il consenso è obbligatorio per continuare.",
    errorRateLimit: "troppi tentativi. Riprova tra qualche minuto.",
  },
  compare: {
    metaTitle: "migliori app di manutenzione barca — confronto 2026",
    metaDescription:
      "Confronto datato e documentato delle principali app di manutenzione barca: Ready4Sea, Skipper'n, Eloyot. Elenchiamo anche Bosco (in sviluppo) senza classificarlo.",
    title: "migliori app di manutenzione barca",
    lead:
      "Confrontiamo qui le principali app sul mercato. Elenchiamo Bosco, in sviluppo, ma non lo classifichiamo: non è ancora utilizzabile. Aggiorniamo le informazioni ogni tre mesi.",
    disclosure:
      "trasparenza: Bosco è dell'autore di questo sito. Lo citiamo per informazione, non per promuoverlo nella classifica.",
    columns: {
      app: "app",
      logbook: "logbook",
      ai: "IA",
      photo: "diagnosi fotografica",
      offline: "offline",
      price: "prezzo",
      platforms: "piattaforme",
    },
  },
  checklist: {
    metaTitle: "checklist di manutenzione barca a inizio stagione",
    metaDescription:
      "I controlli da fare prima della prima uscita: motore, circuiti, sicurezza, scafo. Da seguire e spuntare.",
    title: "checklist di manutenzione barca a inizio stagione",
    lead:
      "I controlli da fare prima della prima uscita. Non sostituisce il manuale del costruttore né il parere di un professionista.",
  },
  privacy: {
    metaTitle: "privacy",
    metaDescription: "Come Bosco tratta i tuoi dati personali.",
    title: "privacy",
    body: `Ultimo aggiornamento: 2026-10-06.\n\nBosco tratta i tuoi dati personali in modo minimo e solo per le finalità descritte qui.\n\nFinalità: informarti del lancio dell'app (lista d'attesa), misurare l'audience di questo sito in modo anonimo (tramite PostHog, regione UE), rispondere ai tuoi messaggi se ci contatti.\n\nBase giuridica: il tuo consenso.\n\nDati raccolti: la tua e-mail, il tipo di barca e il tuo profilo (solo se compili il modulo). Misurazione audience: pagine viste, sorgente del traffico, eventi aggregati — nulla di nominativo finché non ti iscrivi.\n\nHosting: Vercel (UE ed equivalenti). E-mail: Brevo (Francia). Analytics: PostHog regione UE.\n\nConservazione: fino al lancio + 12 mesi per le e-mail legate alla lista d'attesa, poi cancellazione.\n\nI tuoi diritti: accesso, rettifica, cancellazione, portabilità, opposizione. Scrivi a bonjour@bosco.app.\n\nCookie: nessun tracciante viene attivato finché non accetti il banner. Puoi modificare la tua scelta in qualsiasi momento tramite il link "Cookie" in fondo alla pagina.`,
  },
  legal: {
    metaTitle: "note legali",
    metaDescription: "Informazioni legali del sito Bosco.",
    title: "note legali",
    body: `Editore del sito: [DA COMPLETARE — nome o ragione sociale]\nIndirizzo: [DA COMPLETARE]\nDirettore della pubblicazione: [DA COMPLETARE]\nContatto: bonjour@bosco.app\nIdentificativo aziendale: [DA COMPLETARE se applicabile]\n\nHost: Vercel Inc., 440 N Barranca Ave #4133, Covina, CA 91723, USA.\n\nProprietà intellettuale: i contenuti di questo sito (testi, immagini, codice) sono di proprietà del loro autore. Qualsiasi riproduzione è soggetta ad autorizzazione preventiva.`,
  },
  consent: {
    title: "cookie e misurazione del traffico",
    body: "Non usiamo alcun cookie finché non scegli. PostHog (regione UE) ci aiuta a misurare il traffico del sito senza profilare. Puoi cambiare idea in qualsiasi momento tramite il link \"Cookie\" nel footer.",
    accept: "accetta",
    reject: "rifiuta",
    manage: "cookie",
  },
  footer: {
    tagline: "Bosco — in sviluppo. Non ancora disponibile.",
    links: {
      privacy: "privacy",
      legal: "note legali",
      cookies: "cookie",
    },
    copyright: "© {year} Bosco. tutti i diritti riservati.",
  },
};
