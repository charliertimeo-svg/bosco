# Plan de travail — Bosco

Dernière mise à jour : 2026-10-06.

## Lots de travail

| Lot | État | Qui | Détail |
|---|---|---|---|
| v0 site vitrine | fait | Timéo + Claude | FR/EN/IT, waitlist, SEO/GEO, PostHog après consentement, Brevo |
| mentions légales + confidentialité | **à finir** | Timéo | compléter les `[À COMPLÉTER]` dans `src/i18n/dictionaries/{fr,en,it}.ts` → `legal` |
| marque Bosco | **bloquant** | Timéo | vérification INPI + EUIPO (classes 9 et 42) |
| domaine | **bloquant** | Timéo | achat `bosco.app` (+ `.com`, `.fr`, `.it` si dispo) + handles Instagram/YouTube/TikTok |
| déploiement Vercel | à faire | Timéo | importer le repo + variables Brevo/PostHog + domaine |
| Brevo | à faire | Timéo | liste + attributs + clé API + modèle DOI |
| Search Console + Bing | à faire | Timéo | ajouter domaine + soumettre sitemap |
| 20 entretiens terrain | à démarrer | Timéo | grille à écrire : `docs/entretiens/grille.md` |
| 1 guide SEO/semaine | récurrent | agent `redacteur-seo` | sujets à prioriser une fois le trafic analysé |

## Règles

- planning à mettre à jour **avant** toute tâche non triviale
- si > 3 fichiers touchés OU donnée personnelle OU tracking → validation de Timéo avant d'écrire
- toute nouvelle page = 3 langues + `routes.ts` + `llms.txt` + JSON-LD
- toute nouvelle donnée collectée = page Confidentialité mise à jour

## À suivre après lancement

- taux de conversion visiteur → inscrit (cible initiale : 5 %)
- 500 inscrits en 3 mois (hypothèse)
- part du trafic venant des IA (chatgpt.com, perplexity.ai, claude.ai, gemini.google.com)
- qualité du contenu : relecture `relecteur-qa` sur chaque PR, honnêteté du statut « en développement »

## Idées parkées

- v2 : assistant pour préparer un dossier de vente/achat de bateau
- intégration AIS ou météo pour prévenir d'une panne liée au contexte
