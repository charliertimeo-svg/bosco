---
name: seo-geo
description: checklist pour toute page destinée à Google et aux moteurs IA (ChatGPT, Perplexity, Claude, Gemini, AI Overviews).
---

# SEO + GEO — checklist page

Appliquer à chaque page avant la PR.

## Metadata

- `title` ≤ 60 caractères
- `description` ≤ 155 caractères
- `canonical` défini
- `hreflang` complet : `fr`, `en`, `it`, `x-default`
- `openGraph.images` : image 1200×630 dédiée (ou l'`og.svg` par défaut tant que le PNG n'est pas prêt)

## Structure

- un seul `<h1>` par page
- `h2` formulés en **questions** quand c'est pertinent (réponses rapides pour les moteurs IA)
- **réponse courte en tête** : premier paragraphe = résumé de la page en 2–3 phrases
- liens internes : au moins vers la page d'accueil et une page connexe

## Données structurées (JSON-LD)

À choisir selon le type :
- `Organization`, `WebSite` (déjà dans le layout)
- `MobileApplication` (accueil)
- `FAQPage` (si FAQ sur la page)
- `Article` (guide)
- `BreadcrumbList` (toute page non-accueil)
- `ItemList` (comparatif)

## llms.txt

- toute nouvelle page apparaît dans `public/llms.txt` avec son URL et une description d'une ligne

## Honnêteté

- pas de faux avis
- pas de note étoilée inventée
- affirmations sur les concurrents : datées + sourcées + revérifiées tous les 3 mois (`dates.competitorsCheckedOn`)
- app : statut « en développement »

## Vérification manuelle

- `npm run build` passe
- la page apparaît dans le `sitemap.xml` généré
- hreflang pointe vers les bonnes URLs dans les 3 langues
