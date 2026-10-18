# Portail CISSP Zéro to Hero

Plateforme personnelle de révision, de diagnostic et de préparation à l'examen CISSP (ISC2).
Version 1.0.0 — référence : 18 octobre 2026 · date cible : 30 novembre 2026 · repli : 7 décembre 2026.

**Principe directeur : dix questions utiles par jour, des corrections de qualité, une progression mesurée honnêtement et une décision d'examen fondée sur des preuves.**

---

## 1. Démarrer

| Fichier | Usage |
|---|---|
| `cissp-portail.html` | **Version autonome** (un seul fichier, questions incluses). Double-cliquez : elle fonctionne hors ligne, sans installation. |
| `index.html` + `styles.css` + `app.js` + `questions.json` | Version multi-fichiers, pour modifier le code ou la banque. |
| `points.json` | Référentiel des 72 points (source utilisée à la construction). |

La version multi-fichiers charge `questions.json` avec `fetch`. Les navigateurs bloquent souvent cette lecture lorsqu'on ouvre la page depuis le disque (`file://`). Dans ce cas :

```bash
cd dossier-du-portail
python3 -m http.server 8000
# puis ouvrir http://localhost:8000
```

ou utilisez directement `cissp-portail.html`. La page indique aussi comment importer `questions.json` dans **Paramètres** si la banque n'est pas chargée.

Polices : IBM Plex Sans, IBM Plex Mono et Barlow Condensed via Google Fonts. Hors ligne, des polices système de repli sont utilisées.

## 2. Utilisation quotidienne

1. **Tableau de bord** : recommandation du jour, décision d'examen, indicateurs, progression des 72 points et « Votre point du jour », qui répond aux neuf questions clés (dix questions prioritaires, erreurs, domaine à travailler, points maîtrisés, régularité, tendance, réalisme de la date, maintien ou report, justification).
2. **Quiz du jour** : la liste « Mes 10 révisions du jour » affiche la raison de chaque question. Formats Express (5 q., ≈ 10 min), Standard (10 q., 20 à 25 min), Approfondissement (20 q., 40 à 45 min).
3. Après chaque réponse : correction complète, catégorie d'erreur, boutons **J'ai compris** et **À revoir**.
4. **Révision des erreurs** avant d'ajouter de nouvelles notions lorsque des erreurs s'accumulent.
5. Exporter la sauvegarde chaque semaine (**Paramètres**).

Raccourcis clavier pendant un quiz : `A` à `F` pour choisir, `Entrée` pour valider puis passer à la question suivante.

## 3. Ce que contient le portail

### Vues (13)
Tableau de bord · Programme des 8 domaines (avec explorateur par domaine, sous-domaine, difficulté, concept et historique d'erreurs) · Mes 40 points faibles · Mes 21 points à améliorer · Mes 11 points forts · Quiz du jour · Révision des erreurs · Flashcards · Glossaire EN–FR · Examens blancs · Statistiques et tendances · Feuille de route et décision Go/No-Go · Paramètres et sauvegardes.

### Modes de quiz
Quotidien adaptatif (10) · Quiz ciblé par domaine ou par point (10 ou 20) · Adaptatif de 20 · Transversal pondéré (20 ou 40) · Simulation longue (100, 125 ou 150, chronométrée, sans correction pendant l'épreuve) · Révision des erreurs · Répétition espacée · Séance légère (5, fondamentaux) · Langue : français, anglais ou bilingue (énoncé anglais, traduction française à la demande).

### Banque de questions
249 questions originales (36 D1, 30 D2, 31 D3, 30 D4, 31 D5, 30 D6, 31 D7, 30 D8), toutes reliées à au moins un des 72 points, les 72 points étant couverts.
Types : choix unique (175), scénarios (50), classement d'étapes (9), réponses multiples (7), calculs SLE/ARO/ALE/RPO (8). 54 questions portent un qualificatif FIRST, NEXT, BEST ou MOST ; plusieurs sont transversales.

Chaque question contient : identifiant, domaine, sous-domaine, difficulté (1 à 3), type, qualificatif, points liés, énoncé et propositions en français et en anglais, réponse attendue, explication, analyse des distracteurs, piège, principe à retenir, mots-clés anglais, source documentaire et niveau de confiance de la correction (« élevée » ou « modérée » quand la réponse dépend d'une convention ou d'une édition).

Ces questions sont rédigées pour l'entraînement. Aucune ne reproduit l'examen officiel.

## 4. Règles de fonctionnement

### Référentiel des 72 points
Les catégories initiales (40 faibles, 21 intermédiaires, 11 forts) sont une **hypothèse pédagogique** issue des premiers résultats et de l'autoévaluation. Chaque point possède un identifiant (F01–F40, I01–I21, P01–P11), un domaine, un statut, une priorité, un score de maîtrise (moyenne pondérée des 8 dernières réponses, les plus récentes comptant davantage), un historique et une prochaine date de révision.

| Statut | Règle |
|---|---|
| Non évalué / À diagnostiquer | Aucune réponse (point fort / autres points) |
| Faible | Score de maîtrise < 50 % |
| En progression | Score ≥ 50 %, ou dernière réponse réussie |
| À consolider | Au moins 2 réponses et score ≥ 70 % |
| Maîtrisé | ≥ 4 réponses, ≥ 3 questions différentes réussies, 3 dernières réussies, score ≥ 85 %, réussites sur ≥ 2 jours |
| À revoir | Nouvelle erreur sur un point qui était à ≥ 70 % |

Reclassement automatique (à partir de 3 réponses) : ≥ 80 % → fort, ≥ 60 % → intermédiaire, sinon faible.

### Erreurs
Une erreur reste **ouverte** jusqu'à la réussite d'une **question jamais vue** liée au même point. « J'ai compris » ne la ferme pas ; refaire la même question non plus. Catégories : lacune de connaissance, mauvaise interprétation, confusion de concepts, erreur de raisonnement, vocabulaire anglais, gestion du temps, FIRST/BEST/MOST/NEXT, réponse précipitée (une catégorie est proposée automatiquement et reste modifiable).

### Répétition espacée (configurable)
Erreur initiale : J+1 · nouvelle erreur : J+1 (1 ou 2) · réussite après erreur : J+3 · réussites répétées : J+7, J+14, puis J+30. Toute erreur ramène à un intervalle court. « À revoir » reprogramme au lendemain.

### Sélection des 10 questions du jour
Dans l'ordre : erreurs récurrentes et questions marquées → erreurs à reprendre et points faibles confirmés (question nouvelle) → points intermédiaires dont le score baisse → révisions dues → entretien des points forts (≥ 7 jours) → nouvelles questions de diagnostic orientées par le focus de la semaine et les priorités. Garde-fous : au plus 60 % de questions déjà vues, au plus 4 questions par domaine sur 10, liste stable dans la journée.

### Prévention de la fatigue
Plafond quotidien (30 par défaut), jour de consolidation hebdomadaire (dimanche par défaut : aucune nouvelle notion). Si les trois dernières séances baissent et que la dernière est sous 60 %, ou si le plafond est atteint, le portail propose une séance légère ou une pause ; il n'augmente jamais la charge.

### Tendances
Graphiques : scores par semaine, comparaison des 8 domaines, erreurs non consolidées. Pour chaque semaine : score observé, nombre de questions, types de séances, évolution, lacunes principales, actions recommandées. Une projection n'apparaît qu'avec **3 semaines d'au moins 30 questions** ; sinon le message « Données insuffisantes pour estimer une tendance fiable » s'affiche. Fourchette = régression linéaire ± 1,5 écart-type résiduel (au moins ± 5 points). Confiance : faible, modérée (≥ 4 semaines et 200 réponses), élevée (≥ 5 semaines et 400 réponses). Les projections sont tracées en pointillés et étiquetées comme indicatives. Aucun pourcentage n'est converti en score officiel sur 1 000 ; aucune probabilité de réussite n'est calculée.

### Feuille de route
Semaines 1 à 6 du 19 octobre au 29 novembre, puis semaine de repli jusqu'au 7 décembre. Le focus actif = domaines de la semaine + domaines d'une semaine passée non atteints (moins de 5 réponses ou moins de 80 %) et encore sous 80 % au global. La capacité hebdomadaire est estimée à partir des minutes disponibles (≈ 2,2 min par question corrigée).

### Décision Go/No-Go (garde-fous personnels, non officiels)
1. Deux examens blancs complets consécutifs (≥ 100 q.) à ≥ 80 %.
2. Aucun domaine sous 70 % (sur les derniers examens blancs).
3. ≥ 75 % sur au moins 60 questions nouvelles en 21 jours.
4. ≥ 75 % sur au moins 40 réponses en anglais ou bilingue en 21 jours.
5. ≤ 72 s par question en examen blanc, sans dépassement du temps.
6. Erreurs non consolidées : 10 au plus, ou en baisse sur 14 jours et 20 au plus.
7. Charge soutenable : pas de baisse continue, au plus un dépassement du plafond sur 7 jours.

**GO** : 7/7. **GO SOUS SURVEILLANCE** : examens blancs validés, au plus 2 autres critères manquants, aucun domaine sous 60 %. **NO-GO** : sinon. Avant le 23 novembre, un NO-GO dû à des critères non encore mesurables garde la date cible comme objectif de travail. Le portail ne réserve jamais l'examen.

## 5. Données et confidentialité

- Sauvegarde automatique dans `localStorage` du navigateur (clé `cissp-z2h-state-v1`). Aucune donnée n'est envoyée à un serveur.
- **Export JSON** (sauvegarde complète), **export CSV** (une ligne par réponse : date, séance, mode, question, domaine, points, résultat, temps, langue, question nouvelle, catégorie d'erreur). Si le téléchargement est bloqué, le contenu s'affiche pour être copié.
- **Import JSON** avec validation : fichier d'un autre programme refusé, champs inconnus ignorés, valeurs invalides remplacées par les valeurs par défaut.
- Réinitialisation protégée : il faut taper `RÉINITIALISER`.
- Les résultats de référence du 16 au 18 octobre (88 %, 81 %, 75 %, 95 %) et l'autoévaluation sont affichés à part. Ils ne sont jamais mélangés aux séances du portail. Aucune donnée de démonstration n'est préchargée.

## 6. Ajouter des questions

Paramètres → **Ajouter des questions** : un fichier JSON (tableau ou objet `{ "questions": [...] }`). Format minimal :

```json
{
  "id": "D2-101", "domain": 2, "subdomain": "Rémanence", "difficulty": 2,
  "type": "single", "qualifier": null, "points": ["F21"],
  "fr": { "question": "…", "options": ["…", "…", "…", "…"] },
  "en": { "question": "…", "options": ["…", "…", "…", "…"] },
  "answer": [1],
  "explanation": "…", "distractors": "…", "trap": "…", "principle": "…",
  "keywords": ["…"], "source": "…", "confidence": "élevée"
}
```

Types : `single`, `scenario`, `calc` (une réponse), `multi` (au moins 2 réponses), `order` (`answer` = ordre complet des indices). Les identifiants doivent être uniques.

Pour reconstruire la banque à partir des sources texte : `python3 build.py` (dossier de développement).

**Important** : deux examens blancs de 100 questions « sur des questions différentes » demandent au moins 200 questions jamais vues au moment des simulations. Avec 249 questions et 10 à 20 questions par jour, il en restera moins à partir de la mi-novembre. Ajoutez une banque complémentaire avant le second examen blanc ; le portail signale quand moins de 100 questions nouvelles restent disponibles.

## 7. Tests réalisés avant livraison

- `tests/engine.test.js` — 22 tests : validité des 249 questions, pondération, calcul des scores (unique, multiple, classement), sélection quotidienne, ciblée et d'examen blanc, priorité des erreurs, répétition espacée, consolidation des erreurs, statuts des 72 points, reclassement, import/export JSON, CSV, validation des questions ajoutées, tendance insuffisante puis projection, feuille de route et reports, décisions NO-GO, GO et GO SOUS SURVEILLANCE.
- `tests/dom.test.js` — 14 tests d'interface : 13 vues, séance complète de 10 questions avec correction et bilan, sauvegarde locale, mode bilingue, export/import, réinitialisation protégée, examen blanc chronométré, décision, flashcards, glossaire, absence d'erreur JavaScript.
- Vérification visuelle sur ordinateur (1366 px, thème clair) et mobile (390 px, thème sombre), sans débordement horizontal.

## 8. Références vérifiées

- Pondération des domaines : plan d'examen CISSP ISC2 en vigueur depuis le 15 avril 2024, toujours applicable en 2026 — D1 16 %, D2 10 %, D3 13 %, D4 13 %, D5 13 %, D6 12 %, D7 13 %, D8 10 %.
- Format : examen adaptatif (CAT) de 100 à 150 questions en 3 heures.
- Langues : la page ISC2 « Exam Language Availability » liste pour le CISSP l'anglais, l'allemand, le chinois simplifié, l'espagnol et le japonais. **Le français n'est pas proposé.** Vérifiez sur isc2.org avant de réserver.
- Références citées dans les questions : ISC2 Code of Ethics, NIST SP 800-37 Rév. 2, 800-30, 800-34, 800-61, 800-63, 800-86, 800-88, 800-207, 800-218 (SSDF), FIPS 199, ISO/IEC 27001, 27005, 15408, 19011, 22301, RGPD, OWASP, RFC citées.

Les seuils Go/No-Go sont des garde-fous pédagogiques personnels, ni des critères ISC2, ni une garantie de réussite.
