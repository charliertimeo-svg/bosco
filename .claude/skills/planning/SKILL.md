---
name: planning
description: étape 1 obligatoire avant toute tâche non triviale sur Bosco — met à jour le tableau des lots et bloque si la portée dépasse l'autorisation permanente.
---

# Planning — étape 1 obligatoire

Toute tâche non triviale commence ici. « Non triviale » = plus que corriger une typo, plus que mettre à jour une constante isolée.

## Procédure

1. **Lire** `docs/PLAN.md`.
2. **Ajouter une ligne** au tableau « Lots de travail » avec : lot, état (`à faire`), qui, détail (une phrase).
3. **Décrire en une phrase** ce que la tâche va faire concrètement.
4. **Lister les fichiers** attendus.
5. **Repérer** ce qui peut être parallélisé entre sous-agents (`traducteur`, `redacteur-seo`, `auditeur-seo`).
6. **Bloquer si** :
   - plus de 3 fichiers touchés, **ou**
   - donnée personnelle (collecte, traitement, affichage) impliquée, **ou**
   - tracking (événement PostHog, cookie, pixel) ajouté ou modifié.
   Dans ce cas : demander la validation de Timéo avant d'écrire une ligne de code.

## Rappels

- toute nouvelle page = 3 langues + `routes.ts` + `llms.txt` + JSON-LD
- toute nouvelle donnée collectée = page Confidentialité mise à jour
- aucun appel PostHog hors consentement
- pas de commit direct sur `main` — branche + PR
