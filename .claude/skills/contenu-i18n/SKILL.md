---
name: contenu-i18n
description: ton, vocabulaire nautique FR/EN/IT, règles de traduction pour les dictionnaires de Bosco.
---

# Contenu et i18n

## Ton

- direct, phrases courtes, pas de blabla
- vouvoiement en FR (plaisanciers que l'on ne connaît pas), politesse neutre en EN, tutoiement amical en IT
- pas de majuscules pour les titres ou les étiquettes de boutons
- jamais présenter l'app comme disponible : toujours « en développement » ou « in development » / « in sviluppo »

## Vocabulaire nautique (FR / EN / IT)

| FR | EN | IT |
|---|---|---|
| bateau | boat | barca |
| voilier | sailboat | barca a vela |
| bateau à moteur | motorboat | barca a motore |
| multicoque | multihull | multiscafo |
| appareiller | to cast off | salpare |
| en mer | at sea | in mare |
| hors ligne / sans réseau | offline / without a signal | offline / senza rete |
| moteur inboard / hors-bord | inboard / outboard engine | motore entrobordo / fuoribordo |
| circuit eau | water circuit | circuito acqua |
| 230 V | 230 V | 230 V |
| voie d'eau | water ingress | falla d'acqua |
| plaque signalétique | nameplate | targhetta |
| manuel du constructeur | builder's manual | manuale del costruttore |
| VHF canal 16 | VHF channel 16 | VHF canale 16 |
| CROSS (France) | Coast Guard (générique en EN) | Guardia Costiera |

## Règles de traduction

- `src/i18n/dictionaries/fr.ts` est la **référence** et porte le type `Dictionary`
- `en.ts` et `it.ts` l'implémentent et doivent **couvrir toutes les clés**
- jamais de clé supplémentaire en EN ou IT qui n'existerait pas en FR
- une variable `{nom}` dans un texte FR doit rester `{nom}` dans les 3 langues et passer par `tpl()`
- quand un texte FR change, **mettre à jour EN + IT dans la même PR** (ou laisser l'agent `traducteur` le faire)

## Longueurs

- `metaTitle` : ≤ 60 caractères dans chaque langue
- `metaDescription` : ≤ 155 caractères dans chaque langue
- titres de carte : ≤ 40 caractères, pour tenir sur une ligne en mobile
