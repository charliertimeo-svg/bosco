# Contexte pour les agents IA — Bosco

> Lis ce fichier **en entier** avant toute action sur le repo. Il décrit le projet, la méthode, les décisions et les règles non négociables.

## 1. Projet

**Bosco** : application mobile iOS + Android qui aide les plaisanciers (propriétaires et locataires) à **diagnostiquer et réparer leur bateau en mer, sans connexion**. Pack RAG hors-ligne + IA locale sur le téléphone. Chaque réponse cite ses sources. Garde-fous sécurité systématiques (gaz, 230 V, voie d'eau → pro ou secours).

Ce repo est le **site vitrine** qui mesure la demande avant de coder l'app : liste d'attente gratuite + PostHog + pages SEO/GEO en FR/EN/IT.

## 2. Stack

- Next.js 16 (App Router) + TypeScript strict
- Hébergement : Vercel (preview par PR, prod sur `main`)
- E-mails : Brevo (France)
- Analytics : PostHog région UE, proxy via `/ingest`
- Pas de base de données

## 3. Langues

Français (référence) + anglais + italien. Même structure, slugs traduits dans `src/i18n/routes.ts`. Dictionnaires `src/i18n/dictionaries/{fr,en,it}.ts`. `fr.ts` fournit le type `Dictionary`.

## 4. Décisions (ne pas remettre en question sans raison forte)

- **Nom : Bosco** — défini dans `src/config/site.ts` (source unique, ne jamais hardcoder « Bosco » ailleurs)
- **Domaine prévu : bosco.app** (achat + vérif INPI France + EUIPO UE classes 9 et 42 en attente)
- **Liste d'attente gratuite** — pas de pré-vente payante tant qu'il n'y a pas de produit
- **PostHog EU** — proxy `/ingest`, aucun appel avant consentement
- **RGPD** — bannière « Refuser » aussi simple que « Accepter », zéro traceur avant choix, choix modifiable via le lien « Cookies » du pied de page

## 5. Méthode de travail (stricte)

### Planning d'abord

Avant toute tâche non triviale :
1. lire `docs/PLAN.md`
2. ajouter la tâche au tableau « Lots de travail »
3. décrire en une phrase ce que tu vas faire
4. repérer ce qui peut être parallélisé entre sous-agents
5. **si > 3 fichiers touchés OU donnée personnelle OU tracking : attendre validation**

Détails : `.claude/skills/planning/SKILL.md`.

### Sous-agents en parallèle quand c'est possible

Dans `.claude/agents/` :
- `traducteur` — FR → EN + IT dès qu'un texte français change
- `redacteur-seo` — nouveau guide (requête → faits sourcés → page FR optimisée)
- `auditeur-seo` — audit SEO/GEO d'une page avant chaque PR (lecture seule)
- `relecteur-qa` — relecture PR avant merge (build, lint, types, honnêteté, RGPD, a11y)

### Code sur branche → PR → aperçu Vercel → merge

- **pas de commit direct sur `main`** (branche protégée)
- convention : `timeo/sujet` (ex. `timeo/page-guide-impeller`)
- CI : `typecheck`, `lint`, `build`
- preview Vercel par PR
- merge → Vercel pousse `main` en production

## 6. Règles automatiques

- toute nouvelle page = 3 langues + `routes.ts` + `llms.txt` + JSON-LD
- toute nouvelle donnée collectée = page Confidentialité mise à jour
- aucun appel PostHog hors consentement
- design : tokens de couleur **uniquement** dans `src/app/globals.css`, orange `#F25A1D` **réservé** aux boutons d'action, pas de majuscules pour titres/étiquettes
- typo : Archivo variable, titres `font-stretch: 118%`

## 7. Honnêteté du contenu (non négociable)

- l'app est **« en développement »** — jamais présentée comme disponible
- **pas de faux avis**, pas de note étoilée inventée, pas de nombre d'utilisateurs inventé
- infos concurrence : datées et sourcées, revérifiées tous les 3 mois (`src/config/site.ts` → `dates.competitorsCheckedOn`)
- conseils techniques : toujours renvoyer au manuel du constructeur ; gaz / 230 V / voie d'eau → pro ou secours (VHF 16, CROSS)
- comparatif : mentionne Bosco mais ne le classe pas, et le dit sur la page

## 8. Mesure (PostHog)

Entonnoir à surveiller :
`$pageview` → `waitlist_cta_clicked` (prop `from`) → `waitlist_submitted` (props `boat_type`, `role`, `locale`) → `waitlist_error` (prop `status`)

Suivre aussi la part du trafic venant des IA (chatgpt.com, perplexity.ai, claude.ai, gemini.google.com).

## 9. Variables d'environnement

Voir `.env.example`. En l'absence des variables Brevo, l'API waitlist écrit dans `.waitlist-dev.json` à la racine (dev uniquement).

## 10. Scripts

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # doit passer avant toute PR
npm run lint
npm run typecheck
```
