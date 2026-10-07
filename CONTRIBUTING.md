# Contribuer à Bosco

Merci de respecter ce cycle pour toute contribution.

## 1. Avant d'écrire une ligne de code

1. Lis [`CLAUDE.md`](./CLAUDE.md).
2. Ouvre [`docs/PLAN.md`](./docs/PLAN.md) et ajoute ta tâche au tableau « Lots de travail ».
3. Si la tâche touche plus de 3 fichiers, de la donnée personnelle ou du tracking, attends la validation de Timéo.

## 2. Branche

- une branche par sujet
- convention : `prenom/sujet` (ex. `timeo/page-guide-impeller`)
- pas de commit direct sur `main` (branche protégée)

## 3. Qualité

Avant de pousser :

```bash
npm run typecheck
npm run lint
npm run build
```

Les trois doivent passer. La CI les relance sur GitHub Actions (Node 22).

## 4. Pull request

- utilise le [template de PR](./.github/pull_request_template.md)
- vérifie les cases de la checklist
- joint une capture desktop + mobile si visuel
- un reviewer humain ou l'agent `relecteur-qa` relit avant merge

## 5. Contenu

- toute modification de texte français propage une mise à jour EN + IT (dictionnaires `src/i18n/dictionaries/`)
- toute nouvelle page crée aussi ses 3 slugs dans `src/i18n/routes.ts` et sa mention dans `public/llms.txt`
- toute nouvelle donnée collectée met à jour la page Confidentialité
- aucun appel PostHog hors consentement
- pas de faux avis, pas d'affirmation non sourcée sur les concurrents

## 6. Design

- tokens de couleur **uniquement** dans `src/app/globals.css`
- orange `#F25A1D` **réservé aux CTA**
- pas de majuscules pour titres ou étiquettes
- police Archivo variable, titres `font-stretch: 118%`
