---
name: front-end
description: design system carte marine Bosco + règles d'accessibilité à appliquer à chaque composant.
---

# Front-end — design system « carte marine »

## Tokens

**Uniquement** dans `src/app/globals.css`. Jamais de couleur en dur ailleurs.

| Token | Rôle |
|---|---|
| `--paper` | fond de page |
| `--paper-sunk` | fond des cartes |
| `--ink` | texte principal |
| `--ink-soft` | texte secondaire |
| `--sea` | isobathes, détails bleus |
| `--sea-shallow` | surfaces d'arrière-plan douces |
| `--signal` | **CTA uniquement**, orange sécurité `#F25A1D` |
| `--signal-ink` | texte sur `--signal` |
| `--rule`, `--rule-strong` | filets, séparateurs |

Mode sombre : déjà géré via `prefers-color-scheme` + `data-theme="dark"`.

## Typographie

- police : Archivo variable (axes largeur + poids)
- titres : `font-stretch: 118%`, `font-weight: 500`
- **pas de majuscules** pour les titres ou les étiquettes
- corps : largeur normale, 17 px, line-height 1.55

## Composants

- bouton primaire : `btn btn-primary` (seul usage du `--signal`)
- bouton secondaire : `btn`
- carte : `card`
- conteneur : `container` (max 1120 px, gutter 20 px)

## Accessibilité

- cible tactile ≥ 44 × 44 px
- contraste texte / fond ≥ 4,5 : 1 en mode clair **et** sombre
- focus visible (`:focus-visible` outline `--signal`)
- lien d'évitement « aller au contenu » en haut du `body`
- champs de formulaire : `<label>` associé, messages d'erreur `role="alert"`
- images décoratives : `aria-hidden="true"`

## Responsive

- mobile first
- breakpoints indicatifs : 520 px, 720 px, 820 px
- jamais de scroll horizontal
