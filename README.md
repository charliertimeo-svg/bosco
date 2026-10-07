# Bosco — site vitrine

Site vitrine [bosco.app](https://bosco.app) : liste d'attente, comparatif, guides SEO/GEO. Mesure la demande avant qu'on code l'app.

## Lancement en local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000). La racine redirige vers `/fr`, `/en` ou `/it` selon l'`Accept-Language` du navigateur.

En l'absence des variables Brevo, l'API `/api/waitlist` écrit dans `.waitlist-dev.json` à la racine (dev uniquement, fichier ignoré par git).

## Variables d'environnement

Copier `.env.example` vers `.env.local` puis renseigner :

| Variable | Rôle |
|---|---|
| `NEXT_PUBLIC_SITE_URL` | URL publique (ex. `https://bosco.app`) |
| `NEXT_PUBLIC_POSTHOG_KEY` | clé projet PostHog (laisse vide tant que PostHog n'est pas configuré) |
| `NEXT_PUBLIC_POSTHOG_HOST` | `https://eu.i.posthog.com` (région UE) |
| `BREVO_API_KEY` | clé API Brevo (SMTP & API → clés API → créer) |
| `BREVO_LIST_ID` | ID numérique de la liste « Liste d'attente » |
| `BREVO_DOI_TEMPLATE_ID` | ID du modèle d'e-mail de double opt-in (facultatif mais recommandé) |

## Mise en ligne

### Vercel

1. Add New Project → importer le repo
2. Framework : Next.js (auto-détecté)
3. Variables d'environnement : coller celles de `.env.example` (Production **et** Preview)
4. Déployer
5. Settings → Domains → ajouter `bosco.app` et `www.bosco.app`

### Brevo

1. Contacts → Listes → créer « Liste d'attente », noter l'ID
2. Paramètres → Attributs : créer `BATEAU`, `PROFIL`, `LANGUE`, `PROBLEME` (type texte)
3. SMTP & API → Clés API → en créer une
4. Modèles d'e-mail → créer un modèle de confirmation (double opt-in), noter son ID
5. Reporter `BREVO_API_KEY`, `BREVO_LIST_ID`, `BREVO_DOI_TEMPLATE_ID` dans Vercel

### PostHog

1. Créer un compte sur [eu.posthog.com](https://eu.posthog.com) (région UE)
2. Créer un projet, récupérer la Project API Key
3. La mettre dans Vercel : `NEXT_PUBLIC_POSTHOG_KEY`
4. La bannière cookies apparaîtra ; l'init ne se fait qu'après consentement
5. Activer Heatmaps et Session Replay (les champs du formulaire sont masqués côté client)

### Référencement

- Google Search Console + Bing Webmaster Tools : ajouter le domaine, soumettre `/sitemap.xml`

## Scripts

```bash
npm run dev          # serveur de développement
npm run build        # build production (doit passer avant toute PR)
npm run start        # servir le build production
npm run lint
npm run typecheck
```

## Structure

```
src/
├── config/site.ts              ← SOURCE UNIQUE (nom, URL, langues, dates)
├── i18n/                       ← dictionnaires + routes traduites
├── content/competitors.ts      ← comparatif, sourcé et daté
├── lib/                        ← seo, analytics, waitlist-store
├── components/                 ← header, footer, waitlist, consent, etc.
├── app/
│   ├── [locale]/               ← layout + pages
│   ├── api/waitlist/           ← POST inscription
│   ├── globals.css             ← tokens design carte marine
│   ├── sitemap.ts
│   └── robots.ts
└── proxy.ts                    ← Next 16, redirige / → /fr /en /it
```

## Contribuer

Voir [CONTRIBUTING.md](./CONTRIBUTING.md). Les agents IA lisent [CLAUDE.md](./CLAUDE.md) en premier.
