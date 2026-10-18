/* =========================================================================
   Portail CISSP Zéro to Hero — données de référence
   Tout est local. Aucune donnée n'est transmise à un serveur.
   ========================================================================= */
'use strict';

const APP_VERSION = '1.0.0';
const STORAGE_KEY = 'cissp-z2h-state-v1';

/* Pondération officielle : plan d'examen CISSP ISC2 en vigueur depuis le 15 avril 2024
   (toujours applicable en octobre 2026). Autoévaluation initiale déclarée par le candidat. */
const DOMAINS = [
  { id: 1, code: 'D1', en: 'Security and Risk Management', fr: 'Sécurité et gestion des risques', weight: 16, self: 2 },
  { id: 2, code: 'D2', en: 'Asset Security', fr: 'Sécurité des actifs', weight: 10, self: 1 },
  { id: 3, code: 'D3', en: 'Security Architecture and Engineering', fr: 'Architecture et ingénierie de sécurité', weight: 13, self: 2 },
  { id: 4, code: 'D4', en: 'Communication and Network Security', fr: 'Sécurité des communications et des réseaux', weight: 13, self: 2 },
  { id: 5, code: 'D5', en: 'Identity and Access Management (IAM)', fr: 'Gestion des identités et des accès', weight: 13, self: 3 },
  { id: 6, code: 'D6', en: 'Security Assessment and Testing', fr: 'Évaluation et tests de sécurité', weight: 12, self: 3 },
  { id: 7, code: 'D7', en: 'Security Operations', fr: 'Opérations de sécurité', weight: 13, self: 3 },
  { id: 8, code: 'D8', en: 'Software Development Security', fr: 'Sécurité du développement logiciel', weight: 10, self: 4 },
];
const WEIGHT_SOURCE = "Plan d'examen CISSP ISC2 (Exam Outline) en vigueur depuis le 15 avril 2024";
const SELF_EXTRA = [
  { label: 'Analyse et prise de décision', v: 3 },
  { label: "Préparation à l'examen", v: 2 },
];
const SELF_AVG = 2.5;

/* Résultats de référence DÉCLARÉS, obtenus hors du portail. Ils ne sont jamais
   mélangés aux sessions du portail ni aux examens blancs. */
const BASELINE = [
  { date: '2026-10-16', label: 'Quiz du 16 octobre', n: 16, score: 88, type: 'Quiz court' },
  { date: '2026-10-17', label: 'Quiz du 17 octobre', n: 32, score: 81, type: 'Quiz court' },
  { date: '2026-10-17', label: 'Autoévaluation transversale V2', n: null, score: 75, type: 'Autoévaluation' },
  { date: '2026-10-18', label: 'Test D1 (38/40)', n: 40, score: 95, type: 'Test de domaine D1', note: 'durée ≈ 1 h 30' },
];

const DEFAULT_SETTINGS = {
  targetDate: '2026-11-30',
  fallbackDate: '2026-12-07',
  lang: 'fr',                 // fr | en | bi
  theme: 'system',            // system | light | dark
  format: 'standard',         // express | standard | deep
  dailyCap: 30,               // plafond de questions par jour
  consolidationDay: 0,        // 0 = dimanche … 6 = samedi ; -1 = aucun
  minutesPerDay: 30,
  daysPerWeek: 6,
  intervals: { fail: 1, failAgain: 1, recover: 3, steps: [7, 14, 30] },
};

const FORMATS = {
  express: { n: 5, label: 'Express', time: '≈ 10 min' },
  standard: { n: 10, label: 'Standard', time: '20 à 25 min' },
  deep: { n: 20, label: 'Approfondissement', time: '40 à 45 min' },
};

const ROADMAP = [
  { n: 1, start: '2026-10-19', end: '2026-10-25', focus: [1, 5, 7, 8],
    title: 'Diagnostic ciblé',
    items: ['D1 : ISC2 Code of Ethics, NIST RMF, gestion des risques', 'D5 : IAM, RBAC, ABAC, DAC, MAC, SAML, OAuth, OIDC et MFA', 'D7 : Incident Response, BCP, DRP, RTO et RPO', 'D8 : Secure SDLC, SAST, DAST, SCA et vulnérabilités'],
    goal: 'Diagnostiquer les lacunes et viser au moins 80 % sur les quiz ciblés.' },
  { n: 2, start: '2026-10-26', end: '2026-11-01', focus: [2, 3, 4],
    title: 'Consolidation D2 · D3 · D4',
    items: ['Consolider D2, D3 et D4', 'Revoir les erreurs D1 et D5', 'Commencer les quiz transversaux en anglais', 'Mesurer les progrès par domaine'],
    goal: 'Au moins 75 % sur D2, D3 et D4 ; premiers quiz en anglais.' },
  { n: 3, start: '2026-11-02', end: '2026-11-08', focus: [6, 7, 8],
    title: 'Consolidation D6 · D7 · D8',
    items: ['Consolider D6, D7 et D8', 'Travailler les scénarios interdomaines', 'Vérifier la compréhension des concepts mal maîtrisés'],
    goal: 'Au moins 80 % sur D6, D7 et D8 ; erreurs anciennes consolidées.' },
  { n: 4, start: '2026-11-09', end: '2026-11-15', focus: [1, 2, 3, 4, 5, 6, 7, 8],
    title: 'Raisonnement d’examen',
    items: ['Questions BEST, FIRST, MOST et NEXT', 'Scénarios de gouvernance et de gestion des risques', 'Sessions chronométrées et correction approfondie'],
    goal: 'Au moins 80 % sur les questions qualifiées (FIRST/BEST/MOST/NEXT).' },
  { n: 5, start: '2026-11-16', end: '2026-11-22', focus: [1, 2, 3, 4, 5, 6, 7, 8], mock: true,
    title: 'Premier examen blanc',
    items: ['Premier examen blanc complet', 'Analyse des erreurs par domaine', 'Révision ciblée des points faibles', "Évaluation de la compréhension de l'anglais technique"],
    goal: 'Examen blanc ≥ 80 %, aucun domaine sous 70 %.' },
  { n: 6, start: '2026-11-23', end: '2026-11-29', focus: [1, 2, 3, 4, 5, 6, 7, 8], mock: true,
    title: 'Second examen blanc et décision',
    items: ['Deuxième examen blanc complet sur des questions différentes', 'Comparaison des résultats', 'Décision provisoire Go/No-Go', 'Révisions ciblées et réduction progressive de la charge'],
    goal: 'Deux examens blancs consécutifs ≥ 80 % ; décision Go/No-Go.' },
  { n: 7, start: '2026-11-30', end: '2026-12-07', focus: [1, 2, 3, 4, 5, 6, 7, 8], repli: true,
    title: 'Semaine de repli',
    items: ['Utilisée seulement si les critères ne sont pas atteints', 'Révisions ciblées sur les domaines sous 70 %', 'Nouvel examen blanc si nécessaire'],
    goal: 'Atteindre les critères avant le 7 décembre, sinon reporter plus tard.' },
];

const ERR_CATS = [
  'Lacune de connaissance', 'Mauvaise interprétation', 'Confusion de concepts', 'Erreur de raisonnement',
  'Erreur de vocabulaire anglais', 'Mauvaise gestion du temps', 'Mauvaise interprétation de FIRST, BEST, MOST ou NEXT', 'Réponse précipitée',
];

const STATUSES = ['Non évalué', 'À diagnostiquer', 'Faible', 'En progression', 'À consolider', 'Maîtrisé', 'À revoir'];

const QUALIFIER_HINT = {
  FIRST: 'FIRST : cherchez l’action qui doit logiquement précéder toutes les autres (souvent : comprendre, évaluer, protéger les personnes ou contenir).',
  NEXT: 'NEXT : repérez l’étape déjà réalisée dans l’énoncé, puis choisissez celle qui vient immédiatement après dans le processus.',
  BEST: 'BEST : plusieurs réponses sont possibles ; retenez celle qui traite la cause, au meilleur rapport risque/coût, avec une vision de manager.',
  MOST: 'MOST : comparez les options sur leur effet le plus direct et le plus complet sur le problème posé.',
};

const RELATED = { 1: [2, 7], 2: [1, 3], 3: [2, 4], 4: [3, 7], 5: [1, 4], 6: [7, 8], 7: [1, 6], 8: [3, 6] };

/* Glossaire anglais-français. Les 11 premiers termes sont le vocabulaire indispensable. */
const GLOSSARY = [
  { en: 'Risk Owner', fr: 'Propriétaire du risque', d: 1, def: 'Personne ayant l’autorité et la redevabilité pour décider du traitement d’un risque, y compris l’acceptation du risque résiduel.', ex: 'Le directeur commercial accepte formellement le risque résiduel du CRM après avis du RSSI.', q: 'Le RSSI peut-il accepter un risque à la place du propriétaire métier ?', a: 'Non, sauf délégation explicite : le RSSI conseille, le propriétaire décide.' },
  { en: 'Due Care', fr: 'Diligence raisonnable (agir)', d: 1, def: 'Agir comme le ferait une personne prudente pour protéger les actifs : appliquer les contrôles attendus.', ex: 'Appliquer les correctifs critiques dans les délais fixés par la politique.', q: 'Appliquer un correctif connu relève-t-il du due care ou de la due diligence ?', a: 'Du due care (passer à l’action).' },
  { en: 'Due Diligence', fr: 'Vérification préalable (savoir)', d: 1, def: 'Rechercher, évaluer et comprendre les risques avant de décider ou d’agir.', ex: 'Évaluer la sécurité d’un fournisseur avant de signer le contrat.', q: 'Auditer un fournisseur avant contrat : due care ou due diligence ?', a: 'Due diligence.' },
  { en: 'Least Privilege', fr: 'Moindre privilège', d: 3, def: 'N’accorder que les droits strictement nécessaires, pour la durée nécessaire.', ex: 'Un compte de service en lecture seule sur une seule base.', q: 'Un administrateur doit-il lire ses courriels avec son compte d’administrateur ?', a: 'Non : compte standard au quotidien, élévation ponctuelle.' },
  { en: 'Residual Risk', fr: 'Risque résiduel', d: 1, def: 'Risque qui subsiste après la mise en œuvre des contrôles.', ex: 'Après MFA et segmentation, il reste un risque de compromission d’un poste administrateur.', q: 'Peut-on ramener le risque résiduel à zéro ?', a: 'Non. On le réduit à un niveau acceptable, puis il est accepté formellement.' },
  { en: 'Business Impact Analysis', fr: 'Analyse d’impact sur l’activité (BIA)', d: 1, def: 'Analyse qui identifie les processus critiques, leurs dépendances et l’impact de leur interruption dans le temps (MTD, RTO, RPO).', ex: 'Le BIA montre que la paie tolère 48 h d’arrêt, la facturation 4 h.', q: 'Le BIA analyse-t-il la probabilité des menaces ?', a: 'Non, il analyse l’impact de l’interruption ; la probabilité relève de l’analyse de risque.' },
  { en: 'Incident Response', fr: 'Réponse aux incidents', d: 7, def: 'Processus structuré : préparation, détection et analyse, confinement, éradication, rétablissement, retour d’expérience.', ex: 'Isoler un poste infecté avant de le réinstaller.', q: 'Faut-il éradiquer avant de contenir ?', a: 'Non : on contient d’abord pour limiter la propagation.' },
  { en: 'Chain of Custody', fr: 'Chaîne de possession', d: 7, def: 'Traçabilité continue de qui a détenu une preuve, quand, où et pourquoi.', ex: 'Le disque saisi est scellé, étiqueté et chaque transfert est signé.', q: 'Que risque-t-on si la chaîne est interrompue ?', a: 'Que la preuve soit jugée irrecevable.' },
  { en: 'Security Assessment', fr: 'Évaluation de sécurité', d: 6, def: 'Ensemble d’activités (tests, revues, audits) qui mesurent l’efficacité des contrôles.', ex: 'Un scan authentifié trimestriel complété par un pentest annuel.', q: 'Un scan de vulnérabilités est-il un audit ?', a: 'Non : un audit compare à des critères avec indépendance et preuves.' },
  { en: 'Access Control', fr: 'Contrôle d’accès', d: 5, def: 'Mécanismes qui déterminent qui peut accéder à quoi et comment (identification, authentification, autorisation, traçabilité).', ex: 'Le RBAC accorde l’accès au module paie aux seuls gestionnaires RH.', q: 'Saisir son identifiant, est-ce s’authentifier ?', a: 'Non, c’est s’identifier ; l’authentification prouve l’identité.' },
  { en: 'Preventive, Detective, Corrective Controls', fr: 'Contrôles préventifs, détectifs, correctifs', d: 1, def: 'Préventif : empêche. Détectif : repère. Correctif : rétablit après un incident.', ex: 'Pare-feu (préventif), IDS (détectif), restauration de sauvegarde (correctif).', q: 'Un IDS est-il préventif ?', a: 'Non, détectif. L’IPS en ligne peut bloquer.' },
  { en: 'Compensating Control', fr: 'Contrôle compensatoire', d: 1, def: 'Contrôle alternatif qui apporte une protection comparable lorsqu’un contrôle requis ne peut pas être mis en œuvre.', ex: 'Isolement réseau et surveillance renforcée d’une application qui ne supporte pas la MFA.', q: 'Un contrôle compensatoire répare-t-il un incident ?', a: 'Non, c’est le rôle du contrôle correctif.' },
  { en: 'Inherent Risk', fr: 'Risque inhérent', d: 1, def: 'Niveau de risque avant toute mesure de sécurité.', ex: 'Un portail exposé à Internet sans aucune protection.', q: 'Inhérent ou résiduel : lequel est mesuré après contrôles ?', a: 'Le résiduel.' },
  { en: 'Risk Appetite', fr: 'Appétence au risque', d: 1, def: 'Niveau global de risque qu’une organisation accepte pour atteindre ses objectifs.', ex: 'La direction accepte un risque modéré pour lancer rapidement un nouveau service.', q: 'Qui fixe l’appétence au risque ?', a: 'La direction / le conseil.' },
  { en: 'Risk Tolerance', fr: 'Tolérance au risque', d: 1, def: 'Écart acceptable, mesurable, autour d’un objectif précis.', ex: 'Pas plus de 4 h d’indisponibilité cumulée par trimestre.', q: 'Appétence ou tolérance : laquelle est la plus opérationnelle ?', a: 'La tolérance.' },
  { en: 'Annualized Loss Expectancy (ALE)', fr: 'Espérance de perte annuelle', d: 1, def: 'ALE = SLE × ARO ; SLE = valeur de l’actif × facteur d’exposition.', ex: 'SLE 200 000 € × ARO 0,25 = ALE 50 000 €.', q: 'Un incident tous les 4 ans : quel ARO ?', a: '0,25.' },
  { en: 'Recovery Time Objective (RTO)', fr: 'Durée maximale de rétablissement visée', d: 7, def: 'Délai cible pour rétablir un processus ou un système après interruption ; doit être ≤ MTD.', ex: 'RTO de 4 h pour la facturation.', q: 'Le RTO mesure-t-il la perte de données ?', a: 'Non, c’est le RPO.' },
  { en: 'Recovery Point Objective (RPO)', fr: 'Perte de données maximale admissible', d: 7, def: 'Point dans le temps jusqu’auquel les données doivent pouvoir être restaurées.', ex: 'RPO de 15 min : réplication des journaux toutes les 15 min.', q: 'Sauvegarde toutes les 4 h, RPO de 2 h : conforme ?', a: 'Non.' },
  { en: 'Data Owner', fr: 'Propriétaire des données', d: 2, def: 'Responsable métier qui classifie les données, définit les accès et en reste redevable.', ex: 'Le DRH pour les dossiers du personnel.', q: 'L’équipe IT qui héberge la base en est-elle propriétaire ?', a: 'Non, elle est dépositaire (custodian).' },
  { en: 'Data Custodian', fr: 'Dépositaire des données', d: 2, def: 'Rôle qui met en œuvre et exploite les protections décidées par le propriétaire.', ex: 'L’administrateur de sauvegarde.', q: 'Le dépositaire fixe-t-il la classification ?', a: 'Non.' },
  { en: 'Data Remanence', fr: 'Rémanence des données', d: 2, def: 'Données résiduelles récupérables après effacement ou formatage.', ex: 'Un disque formaté rapidement reste lisible avec des outils de récupération.', q: 'La démagnétisation fonctionne-t-elle sur un SSD ?', a: 'Non.' },
  { en: 'Separation of Duties', fr: 'Séparation des tâches', d: 1, def: 'Répartir une tâche sensible entre plusieurs personnes pour imposer la collusion.', ex: 'Créer un fournisseur et approuver son paiement sont deux rôles distincts.', q: 'Préventif ou détectif ?', a: 'Préventif.' },
  { en: 'Job Rotation', fr: 'Rotation des postes', d: 7, def: 'Faire tourner les personnes sur les postes sensibles pour détecter les fraudes et répartir les compétences.', ex: 'Un remplaçant découvre des écritures anormales.', q: 'Préventif ou détectif ?', a: 'Surtout détectif.' },
  { en: 'Defense in Depth', fr: 'Défense en profondeur', d: 3, def: 'Superposition de contrôles indépendants et de natures différentes.', ex: 'Badge, pare-feu, MFA, chiffrement et journalisation pour un même actif.', q: 'Trois pare-feu identiques en série font-ils une défense en profondeur ?', a: 'Pas vraiment : les couches doivent être diverses.' },
  { en: 'Reference Monitor', fr: 'Moniteur de référence', d: 3, def: 'Concept qui arbitre chaque accès ; inviolable, toujours invoqué, vérifiable.', ex: 'Le noyau de sécurité d’un OS en est l’implémentation.', q: 'Moniteur de référence ou noyau de sécurité : lequel est le concept ?', a: 'Le moniteur de référence.' },
  { en: 'Zero Trust', fr: 'Confiance zéro', d: 4, def: 'Aucune confiance implicite liée à la localisation réseau ; chaque accès est vérifié selon l’identité et le contexte.', ex: 'Accès à une application via un proxy d’identité, avec contrôle de l’état du poste.', q: 'Un VPN donnant accès à tout le réseau est-il conforme au Zero Trust ?', a: 'Non.' },
  { en: 'Man-in-the-Middle (MITM)', fr: 'Homme du milieu', d: 4, def: 'Attaquant qui s’interpose dans une communication pour l’intercepter ou la modifier.', ex: 'Un faux point d’accès Wi-Fi présente un certificat non valide.', q: 'Quel signal utilisateur doit alerter ?', a: 'Un avertissement de certificat.' },
  { en: 'Federation', fr: 'Fédération d’identités', d: 5, def: 'Relation de confiance permettant à une identité gérée par un IdP d’accéder aux services d’un autre domaine.', ex: 'SSO SAML vers une application SaaS.', q: 'Les mots de passe sont-ils partagés avec le fournisseur de service ?', a: 'Non, seules des assertions signées circulent.' },
  { en: 'Privileged Access Management (PAM)', fr: 'Gestion des accès à privilèges', d: 5, def: 'Coffre, élévation juste-à-temps, enregistrement des sessions et rotation des secrets privilégiés.', ex: 'Un administrateur emprunte un compte root pour 1 h, la session est enregistrée.', q: 'Faut-il des privilèges permanents ?', a: 'Non, préférer le juste-à-temps.' },
  { en: 'Penetration Testing', fr: 'Test d’intrusion', d: 6, def: 'Test autorisé qui tente d’exploiter des vulnérabilités pour démontrer l’impact réel.', ex: 'Démontrer l’accès à la base RH depuis Internet.', q: 'Que faut-il avant de commencer ?', a: 'Une autorisation écrite et des règles d’engagement.' },
  { en: 'Audit Evidence', fr: 'Preuve d’audit', d: 6, def: 'Information pertinente, fiable, suffisante et traçable qui fonde une conclusion d’audit.', ex: 'Rapprochement de la liste RH des départs avec l’annuaire.', q: 'Une déclaration orale est-elle une preuve forte ?', a: 'Non, faible : elle doit être corroborée.' },
  { en: 'Order of Volatility', fr: 'Ordre de volatilité', d: 7, def: 'Collecter d’abord les preuves qui disparaissent le plus vite (registres, RAM, état réseau) avant le disque.', ex: 'Capturer la RAM avant d’éteindre la machine.', q: 'Disque ou RAM en premier ?', a: 'La RAM.' },
  { en: 'Threat Modeling', fr: 'Modélisation des menaces', d: 8, def: 'Identification structurée des menaces sur une architecture (ex. STRIDE sur un diagramme de flux).', ex: 'Atelier STRIDE en phase de conception d’une API.', q: 'Quand est-elle la plus utile ?', a: 'En conception, puis à chaque changement majeur.' },
  { en: 'Secure SDLC', fr: 'Cycle de développement sécurisé', d: 8, def: 'Intégration de la sécurité à chaque phase : exigences, conception, code, tests, exploitation, retrait.', ex: 'SAST et SCA bloquants dans la chaîne CI.', q: 'Où commence la sécurité dans le SDLC ?', a: 'Aux exigences.' },
  { en: 'Software Bill of Materials (SBOM)', fr: 'Nomenclature logicielle', d: 8, def: 'Inventaire des composants et dépendances d’un logiciel.', ex: 'Identifier en minutes les produits touchés par une faille de bibliothèque.', q: 'Quel outil produit souvent un SBOM ?', a: 'Un outil SCA.' },
  { en: 'Data Minimization', fr: 'Minimisation des données', d: 2, def: 'Ne collecter et conserver que les données nécessaires à la finalité.', ex: 'Collecter la ville au lieu de la position GPS précise.', q: 'Minimisation ou rétention : laquelle concerne la durée ?', a: 'La rétention.' },
  { en: 'Legal Hold', fr: 'Gel juridique', d: 2, def: 'Suspension de la destruction de données pertinentes pour un litige prévisible.', ex: 'Arrêter la purge automatique des courriels d’un service mis en cause.', q: 'Prime-t-il sur la politique de rétention ?', a: 'Oui.' },
  { en: 'Authorizing Official', fr: 'Autorité d’homologation', d: 1, def: 'Dirigeant habilité à accepter le risque et à autoriser l’exploitation d’un système (NIST RMF).', ex: 'Le directeur des opérations signe l’autorisation d’exploitation.', q: 'L’évaluateur des contrôles peut-il autoriser ?', a: 'Non.' },
  { en: 'Tokenization', fr: 'Tokenisation', d: 2, def: 'Remplacement d’une donnée par un jeton sans lien mathématique, la correspondance étant gardée dans un coffre.', ex: 'Les numéros de carte remplacés par des jetons dans le CRM.', q: 'Un jeton se déchiffre-t-il avec une clé ?', a: 'Non, il se résout via le coffre.' },
  { en: 'Fail Secure', fr: 'Défaillance sécurisée', d: 3, def: 'En cas de panne, le système passe dans un état qui protège les actifs (fermé).', ex: 'Un pare-feu en panne bloque tout le trafic.', q: 'Une porte d’issue de secours doit-elle être fail secure ?', a: 'Non, fail safe : la vie humaine prime.' },
];

/* Référentiel personnalisé des 72 points (catégories initiales = hypothèse pédagogique) */
const POINTS = [
{
"id": "F01",
"cat": "faible",
"domain": 1,
"label": "ISC2 Code of Ethics : ordre des canons et protection du public"
},
{
"id": "F02",
"cat": "faible",
"domain": 1,
"label": "NIST Risk Management Framework : étapes et objectifs"
},
{
"id": "F03",
"cat": "faible",
"domain": 1,
"label": "FIRST vs NEXT"
},
{
"id": "F04",
"cat": "faible",
"domain": 1,
"label": "BEST vs MOST appropriate"
},
{
"id": "F05",
"cat": "faible",
"domain": 1,
"label": "Inherent Risk vs Residual Risk"
},
{
"id": "F06",
"cat": "faible",
"domain": 1,
"label": "Threat vs Vulnerability"
},
{
"id": "F07",
"cat": "faible",
"domain": 1,
"label": "Risk vs Impact"
},
{
"id": "F08",
"cat": "faible",
"domain": 1,
"label": "Prevention vs Detection"
},
{
"id": "F09",
"cat": "faible",
"domain": 1,
"label": "Separation of Duties vs Job Rotation"
},
{
"id": "F10",
"cat": "faible",
"domain": 1,
"label": "RTO vs RPO"
},
{
"id": "F11",
"cat": "faible",
"domain": 1,
"label": "BIA vs Risk Assessment"
},
{
"id": "F12",
"cat": "faible",
"domain": 1,
"label": "BCP vs DRP"
},
{
"id": "F13",
"cat": "faible",
"domain": 1,
"label": "Audit vs Technical Assessment"
},
{
"id": "F14",
"cat": "faible",
"domain": 1,
"label": "Policy vs Standard vs Procedure vs Guideline"
},
{
"id": "F15",
"cat": "faible",
"domain": 1,
"label": "Compensating Control vs Corrective Control"
},
{
"id": "F16",
"cat": "faible",
"domain": 1,
"label": "Confidentiality vs Integrity vs Availability"
},
{
"id": "F17",
"cat": "faible",
"domain": 1,
"label": "Gouvernance, responsabilité managériale et exécution technique"
},
{
"id": "F18",
"cat": "faible",
"domain": 2,
"label": "Data Classification"
},
{
"id": "F19",
"cat": "faible",
"domain": 2,
"label": "Data Owner vs Data Custodian"
},
{
"id": "F20",
"cat": "faible",
"domain": 2,
"label": "Data Lifecycle"
},
{
"id": "F21",
"cat": "faible",
"domain": 2,
"label": "Data Remanence"
},
{
"id": "F22",
"cat": "faible",
"domain": 2,
"label": "Data Retention vs Data Minimization"
},
{
"id": "F23",
"cat": "faible",
"domain": 3,
"label": "Bell-LaPadula, Biba et Clark-Wilson"
},
{
"id": "F24",
"cat": "faible",
"domain": 3,
"label": "Defense in Depth"
},
{
"id": "F25",
"cat": "faible",
"domain": 3,
"label": "Least Privilege, Fail Securely et Complete Mediation"
},
{
"id": "F26",
"cat": "faible",
"domain": 3,
"label": "Chiffrement, hachage, signature numérique et échange de clés"
},
{
"id": "F27",
"cat": "faible",
"domain": 3,
"label": "Symmetric vs Asymmetric Encryption"
},
{
"id": "F28",
"cat": "faible",
"domain": 3,
"label": "Key Management : génération, distribution, rotation, révocation et protection"
},
{
"id": "F29",
"cat": "faible",
"domain": 4,
"label": "OSI Model : couches, protocoles et équipements"
},
{
"id": "F30",
"cat": "faible",
"domain": 4,
"label": "Network Segmentation"
},
{
"id": "F31",
"cat": "faible",
"domain": 4,
"label": "Firewalls vs IDS vs IPS"
},
{
"id": "F32",
"cat": "faible",
"domain": 4,
"label": "TLS, IPsec, SSH et protocoles non sécurisés"
},
{
"id": "F33",
"cat": "faible",
"domain": 4,
"label": "Zero Trust"
},
{
"id": "F34",
"cat": "faible",
"domain": 4,
"label": "Spoofing, MITM, DoS et détournement de session"
},
{
"id": "F35",
"cat": "faible",
"domain": 5,
"label": "DAC vs MAC vs RBAC vs ABAC"
},
{
"id": "F36",
"cat": "faible",
"domain": 5,
"label": "Authentication vs Authorization vs Accounting"
},
{
"id": "F37",
"cat": "faible",
"domain": 5,
"label": "SAML vs OAuth 2.0 vs OpenID Connect"
},
{
"id": "F38",
"cat": "faible",
"domain": 5,
"label": "MFA vs Passwordless"
},
{
"id": "F39",
"cat": "faible",
"domain": 5,
"label": "Privileged Access Management (PAM)"
},
{
"id": "F40",
"cat": "faible",
"domain": 5,
"label": "Identity Lifecycle : Joiner, Mover, Leaver, révocation et recertification"
},
{
"id": "I01",
"cat": "intermediaire",
"domain": 1,
"label": "Risk Appetite vs Risk Tolerance"
},
{
"id": "I02",
"cat": "intermediaire",
"domain": 1,
"label": "Quantitative Risk Analysis : SLE, ARO et ALE"
},
{
"id": "I03",
"cat": "intermediaire",
"domain": 1,
"label": "Risk Treatment : Avoid, Mitigate, Transfer et Accept"
},
{
"id": "I04",
"cat": "intermediaire",
"domain": 1,
"label": "Due Care vs Due Diligence"
},
{
"id": "I05",
"cat": "intermediaire",
"domain": 2,
"label": "Privacy by Design"
},
{
"id": "I06",
"cat": "intermediaire",
"domain": 2,
"label": "Data Masking, Tokenization et Anonymization"
},
{
"id": "I07",
"cat": "intermediaire",
"domain": 3,
"label": "Trusted Computing Base et Reference Monitor"
},
{
"id": "I08",
"cat": "intermediaire",
"domain": 3,
"label": "Security Evaluation Criteria"
},
{
"id": "I09",
"cat": "intermediaire",
"domain": 3,
"label": "Physical Security et défense en profondeur"
},
{
"id": "I10",
"cat": "intermediaire",
"domain": 4,
"label": "VPN, NAC et segmentation"
},
{
"id": "I11",
"cat": "intermediaire",
"domain": 4,
"label": "Wireless Security"
},
{
"id": "I12",
"cat": "intermediaire",
"domain": 4,
"label": "Network Monitoring et analyse des alertes"
},
{
"id": "I13",
"cat": "intermediaire",
"domain": 5,
"label": "Access Reviews et Recertification"
},
{
"id": "I14",
"cat": "intermediaire",
"domain": 5,
"label": "Federation and Trust"
},
{
"id": "I15",
"cat": "intermediaire",
"domain": 6,
"label": "SAST vs DAST vs IAST vs Penetration Testing"
},
{
"id": "I16",
"cat": "intermediaire",
"domain": 6,
"label": "Vulnerability Assessment vs Penetration Testing"
},
{
"id": "I17",
"cat": "intermediaire",
"domain": 6,
"label": "Audit Evidence : qualité, pertinence et traçabilité"
},
{
"id": "I18",
"cat": "intermediaire",
"domain": 7,
"label": "Incident Response : préparation, détection, confinement, éradication et rétablissement"
},
{
"id": "I19",
"cat": "intermediaire",
"domain": 7,
"label": "Digital Forensics et Chain of Custody"
},
{
"id": "I20",
"cat": "intermediaire",
"domain": 7,
"label": "Backup, Recovery et Resilience"
},
{
"id": "I21",
"cat": "intermediaire",
"domain": 8,
"label": "Secure SDLC : exigences, conception, développement, tests et maintenance"
},
{
"id": "P01",
"cat": "fort",
"domain": 1,
"label": "Protection de la propriété intellectuelle et des secrets"
},
{
"id": "P02",
"cat": "fort",
"domain": 1,
"label": "Notification des violations de données"
},
{
"id": "P03",
"cat": "fort",
"domain": 1,
"label": "Acceptation du risque résiduel et rôle du Risk Owner"
},
{
"id": "P04",
"cat": "fort",
"domain": 1,
"label": "Gouvernance et alignement stratégique"
},
{
"id": "P05",
"cat": "fort",
"domain": 1,
"label": "Sécurité du personnel et contrôles préalables"
},
{
"id": "P06",
"cat": "fort",
"domain": 1,
"label": "Gestion des fournisseurs, contrats et assurances"
},
{
"id": "P07",
"cat": "fort",
"domain": 1,
"label": "Continuité d'activité et Business Impact Analysis"
},
{
"id": "P08",
"cat": "fort",
"domain": 1,
"label": "Sensibilisation et facteur humain"
},
{
"id": "P09",
"cat": "fort",
"domain": 1,
"label": "Modélisation des menaces et identification des risques"
},
{
"id": "P10",
"cat": "fort",
"domain": 1,
"label": "Types de contrôles de sécurité et défense en profondeur"
},
{
"id": "P11",
"cat": "fort",
"domain": 1,
"label": "Calculs de risque et analyse coût-bénéfice"
}
];
const POINT_BY_ID = Object.fromEntries(POINTS.map((p) => [p.id, p]));

/* =========================================================================
   Moteur : dates, état, banque, répétition espacée, sélection, analyses,
   tendances et décision Go/No-Go. Fonctions pures testables (Node).
   ========================================================================= */

const Clock = { now: () => (globalThis.__CISSP_NOW__ ? new Date(globalThis.__CISSP_NOW__) : new Date()) };
const pad2 = (n) => String(n).padStart(2, '0');
function dayKey(d) { d = d || Clock.now(); return d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()); }
function parseDay(s) { const [y, m, d] = String(s).split('-').map(Number); return new Date(y, (m || 1) - 1, d || 1); }
function addDays(s, n) { const d = parseDay(s); d.setDate(d.getDate() + n); return dayKey(d); }
function diffDays(a, b) { return Math.round((parseDay(b) - parseDay(a)) / 86400000); }
function mondayOf(s) { const d = parseDay(s); d.setDate(d.getDate() - ((d.getDay() + 6) % 7)); return dayKey(d); }
function isDay(s) { return typeof s === 'string' && /^\d{4}-\d{2}-\d{2}$/.test(s) && !isNaN(parseDay(s)); }
const clone = (o) => JSON.parse(JSON.stringify(o));
const pct = (ok, n) => (n ? Math.round((ok / n) * 100) : null);

/* Générateur pseudo-aléatoire déterministe (liste du jour stable) */
function seededRng(seedStr) {
  let h = 1779033703 ^ seedStr.length;
  for (let i = 0; i < seedStr.length; i++) { h = Math.imul(h ^ seedStr.charCodeAt(i), 3432918353); h = (h << 13) | (h >>> 19); }
  return function () { h = Math.imul(h ^ (h >>> 16), 2246822507); h = Math.imul(h ^ (h >>> 13), 3266489909); h ^= h >>> 16; return (h >>> 0) / 4294967296; };
}
function shuffle(arr, rng) { const a = arr.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rng() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; }

/* ----------------------------- État ----------------------------------- */
function freshState() {
  return { version: 1, created: dayKey(), settings: clone(DEFAULT_SETTINGS), qstats: {}, sessions: [], errors: [], snapshots: [], flash: {}, customQuestions: [] };
}

/* Valide et normalise un état (chargement ou import). Lève une erreur explicite si la structure est inutilisable. */
function normalizeState(raw) {
  if (!raw || typeof raw !== 'object' || Array.isArray(raw)) throw new Error('Le fichier ne contient pas un objet JSON de sauvegarde.');
  if (raw.app && raw.app !== 'cissp-z2h') throw new Error('Ce fichier ne provient pas du Portail CISSP Zéro to Hero.');
  const s = freshState();
  const st = raw.settings || {};
  const S = s.settings;
  if (isDay(st.targetDate)) S.targetDate = st.targetDate;
  if (isDay(st.fallbackDate)) S.fallbackDate = st.fallbackDate;
  if (['fr', 'en', 'bi'].includes(st.lang)) S.lang = st.lang;
  if (['system', 'light', 'dark'].includes(st.theme)) S.theme = st.theme;
  if (FORMATS[st.format]) S.format = st.format;
  const num = (v, lo, hi, def) => (Number.isFinite(+v) && +v >= lo && +v <= hi ? Math.round(+v) : def);
  S.dailyCap = num(st.dailyCap, 5, 200, S.dailyCap);
  S.consolidationDay = num(st.consolidationDay, -1, 6, S.consolidationDay);
  S.minutesPerDay = num(st.minutesPerDay, 5, 300, S.minutesPerDay);
  S.daysPerWeek = num(st.daysPerWeek, 1, 7, S.daysPerWeek);
  const iv = st.intervals || {};
  S.intervals.fail = num(iv.fail, 1, 2, 1);
  S.intervals.failAgain = num(iv.failAgain, 1, 2, 1);
  S.intervals.recover = num(iv.recover, 1, 7, 3);
  if (Array.isArray(iv.steps) && iv.steps.length && iv.steps.every((x) => Number.isFinite(+x) && +x >= 1 && +x <= 180)) S.intervals.steps = iv.steps.map((x) => Math.round(+x));

  if (raw.qstats && typeof raw.qstats === 'object') {
    for (const [id, q] of Object.entries(raw.qstats)) {
      if (!q || typeof q !== 'object') continue;
      s.qstats[id] = {
        seen: num(q.seen, 0, 1e6, 0), correct: num(q.correct, 0, 1e6, 0), wrong: num(q.wrong, 0, 1e6, 0),
        level: num(q.level, 0, 20, 0), lapses: num(q.lapses, 0, 1e6, 0),
        last: typeof q.last === 'boolean' ? q.last : null, lastDay: isDay(q.lastDay) ? q.lastDay : null,
        due: isDay(q.due) ? q.due : null, interval: num(q.interval, 0, 365, 0), flag: !!q.flag, understood: !!q.understood,
      };
    }
  }
  if (Array.isArray(raw.sessions)) {
    for (const se of raw.sessions) {
      if (!se || !Array.isArray(se.items) || typeof se.id !== 'string') continue;
      const items = se.items.filter((it) => it && typeof it.qid === 'string' && typeof it.ok === 'boolean' && isDay(it.day)).map((it) => ({
        qid: it.qid, ok: it.ok, day: it.day, ts: String(it.ts || it.day), t: num(it.t, 0, 86400, 0), lang: ['fr', 'en', 'bi'].includes(it.lang) ? it.lang : 'fr', first: !!it.first, cat: typeof it.cat === 'string' ? it.cat : null, skip: !!it.skip,
      }));
      s.sessions.push({ id: se.id, mode: String(se.mode || 'daily'), kind: se.kind === 'mock' ? 'mock' : 'quiz', label: String(se.label || ''), start: String(se.start || ''), end: String(se.end || ''), day: isDay(se.day) ? se.day : (items[0] && items[0].day) || dayKey(), planned: num(se.planned, 0, 500, items.length), limitSec: num(se.limitSec, 0, 1e6, 0), completed: !!se.completed, items });
    }
  }
  if (Array.isArray(raw.errors)) {
    for (const e of raw.errors) {
      if (!e || typeof e.qid !== 'string') continue;
      s.errors.push({ id: String(e.id || 'E' + Math.random().toString(36).slice(2, 9)), qid: e.qid, points: Array.isArray(e.points) ? e.points.filter((p) => typeof p === 'string') : [], domain: num(e.domain, 1, 8, 1), ts: String(e.ts || ''), day: isDay(e.day) ? e.day : dayKey(), lastTs: String(e.lastTs || e.ts || ''), count: num(e.count, 1, 1e6, 1), cat: ERR_CATS.includes(e.cat) ? e.cat : null, understood: !!e.understood, consolidatedOn: isDay(e.consolidatedOn) ? e.consolidatedOn : null, consolidatedBy: typeof e.consolidatedBy === 'string' ? e.consolidatedBy : null });
    }
  }
  if (Array.isArray(raw.snapshots)) s.snapshots = raw.snapshots.filter((x) => x && isDay(x.day) && Number.isFinite(+x.open)).map((x) => ({ day: x.day, open: +x.open }));
  if (raw.flash && typeof raw.flash === 'object') for (const [k, v] of Object.entries(raw.flash)) if (v && typeof v === 'object') s.flash[k] = { ok: num(v.ok, 0, 1e6, 0), ko: num(v.ko, 0, 1e6, 0), last: isDay(v.last) ? v.last : null };
  if (Array.isArray(raw.customQuestions)) {
    const ids = new Set();
    for (const q of raw.customQuestions) if (validateQuestion(q, ids).length === 0) { ids.add(q.id); s.customQuestions.push(q); }
  }
  if (isDay(raw.created)) s.created = raw.created;
  return s;
}

/* ----------------------------- Banque --------------------------------- */
const Q_TYPES = ['single', 'multi', 'scenario', 'order', 'calc'];
function validateQuestion(q, existingIds) {
  const err = [];
  if (!q || typeof q !== 'object') return ['objet manquant'];
  if (typeof q.id !== 'string' || !q.id.trim()) err.push('id manquant');
  else if (existingIds && existingIds.has(q.id)) err.push('id déjà utilisé : ' + q.id);
  if (!(Number.isInteger(q.domain) && q.domain >= 1 && q.domain <= 8)) err.push('domaine 1 à 8 attendu');
  if (!Q_TYPES.includes(q.type)) err.push('type invalide');
  if (!q.fr || typeof q.fr.question !== 'string' || !Array.isArray(q.fr.options) || q.fr.options.length < 2) err.push('énoncé ou options FR manquants');
  const n = q.fr && Array.isArray(q.fr.options) ? q.fr.options.length : 0;
  if (!Array.isArray(q.answer) || !q.answer.length || q.answer.some((i) => !Number.isInteger(i) || i < 0 || i >= n)) err.push('réponse invalide');
  if (q.en && (!Array.isArray(q.en.options) || q.en.options.length !== n)) err.push('options EN incohérentes');
  if (q.type === 'order' && Array.isArray(q.answer) && q.answer.length !== n) err.push('un classement doit ordonner toutes les options');
  if (q.type === 'multi' && Array.isArray(q.answer) && q.answer.length < 2) err.push('choix multiple : au moins 2 réponses');
  if (q.points && !Array.isArray(q.points)) err.push('points doit être une liste');
  return err;
}
function buildBank(base, custom) {
  const list = [];
  const byId = {};
  for (const q of [...(base || []), ...(custom || [])]) {
    if (byId[q.id]) continue;
    const qq = Object.assign({ points: [], difficulty: 2, subdomain: 'Général', qualifier: null, keywords: [], explanation: '', distractors: '', trap: '', principle: '', source: null, confidence: 'non évaluée' }, q);
    if (!qq.en) qq.en = qq.fr;
    qq.points = (qq.points || []).filter((p) => POINT_BY_ID[p]);
    list.push(qq); byId[qq.id] = qq;
  }
  const byPoint = {}; const byDomain = {};
  for (const p of POINTS) byPoint[p.id] = [];
  for (let d = 1; d <= 8; d++) byDomain[d] = [];
  for (const q of list) { q.points.forEach((p) => byPoint[p].push(q)); byDomain[q.domain].push(q); }
  return { list, byId, byPoint, byDomain };
}
function isCorrect(q, choice) {
  if (!Array.isArray(choice)) return false;
  if (q.type === 'order') return choice.length === q.answer.length && choice.every((v, i) => v === q.answer[i]);
  const a = [...q.answer].sort(); const c = [...new Set(choice)].sort();
  return a.length === c.length && a.every((v, i) => v === c[i]);
}

/* ------------------------ Répétition espacée -------------------------- */
function qstat(state, id) {
  return state.qstats[id] || (state.qstats[id] = { seen: 0, correct: 0, wrong: 0, level: 0, lapses: 0, last: null, lastDay: null, due: null, interval: 0, flag: false, understood: false });
}
/* Applique une réponse : intervalles, registre d'erreurs, consolidation. ctx = { day, ts } */
function applyAnswer(state, q, ok, ctx) {
  const st = qstat(state, q.id);
  const iv = state.settings.intervals;
  const first = st.seen === 0;
  let interval;
  if (ok) {
    if (st.last === false) { st.level = 0; interval = iv.recover; }
    else { st.level = Math.min(st.level + 1, iv.steps.length); interval = iv.steps[st.level - 1]; }
    st.correct++; st.flag = false;
  } else {
    interval = st.lapses >= 1 ? iv.failAgain : iv.fail;
    st.level = 0; st.lapses++; st.wrong++; st.understood = false;
  }
  st.seen++; st.last = ok; st.lastDay = ctx.day; st.interval = interval; st.due = addDays(ctx.day, interval);

  if (!ok) {
    const open = state.errors.find((e) => e.qid === q.id && !e.consolidatedOn);
    if (open) { open.count++; open.lastTs = ctx.ts; open.understood = false; }
    else state.errors.push({ id: 'E' + ctx.ts.replace(/\D/g, '').slice(-12) + q.id.replace(/\W/g, ''), qid: q.id, points: q.points.slice(), domain: q.domain, ts: ctx.ts, day: ctx.day, lastTs: ctx.ts, count: 1, cat: null, understood: false, consolidatedOn: null, consolidatedBy: null });
  } else if (first) {
    // Seule une réussite sur une question NOUVELLE du même point consolide une erreur.
    for (const e of state.errors) {
      if (!e.consolidatedOn && e.qid !== q.id && e.lastTs < ctx.ts && e.points.some((p) => q.points.includes(p))) { e.consolidatedOn = ctx.day; e.consolidatedBy = q.id; }
    }
  }
  return { first, interval };
}
function markForReview(state, qid, day) { const st = qstat(state, qid); st.flag = true; st.due = addDays(day, 1); }
function markUnderstood(state, qid) {
  const st = qstat(state, qid); st.understood = true;
  const e = state.errors.find((x) => x.qid === qid && !x.consolidatedOn); if (e) e.understood = true; // n'efface pas l'erreur
}
function snapshotErrors(state, day) {
  const open = state.errors.filter((e) => !e.consolidatedOn).length;
  const s = state.snapshots.find((x) => x.day === day);
  if (s) s.open = open; else state.snapshots.push({ day, open });
  state.snapshots.sort((a, b) => (a.day < b.day ? -1 : 1));
}

/* ----------------------------- Analyses ------------------------------- */
function mastery(atts) {
  const last = atts.slice(-8); if (!last.length) return null;
  let w = 0, s = 0; last.forEach((a, i) => { const k = i + 1; w += k; s += a.ok ? k : 0; });
  return Math.round((s / w) * 100);
}
function pointStatus(cat, atts) {
  if (!atts.length) return cat === 'fort' ? 'Non évalué' : 'À diagnostiquer';
  const n = atts.length; const last = atts[n - 1]; const score = mastery(atts); const prev = atts.slice(0, -1);
  if (!last.ok && prev.length >= 3 && mastery(prev) >= 70) return 'À revoir';
  const last3 = atts.slice(-3);
  const distinctOk = new Set(atts.filter((a) => a.ok).map((a) => a.qid)).size;
  const okDays = new Set(atts.filter((a) => a.ok).map((a) => a.day)).size;
  if (n >= 4 && distinctOk >= 3 && last3.length === 3 && last3.every((a) => a.ok) && score >= 85 && okDays >= 2) return 'Maîtrisé';
  if (n >= 2 && score >= 70) return 'À consolider';
  if (score >= 50 || (n >= 2 && last.ok)) return 'En progression';
  return 'Faible';
}
function pointClass(cat, atts) { if (atts.length < 3) return cat; const m = mastery(atts); return m >= 80 ? 'fort' : m >= 60 ? 'intermediaire' : 'faible'; }
function pointPriority(status, cat) {
  if (status === 'Faible' || status === 'À revoir' || (status === 'À diagnostiquer' && cat === 'faible')) return { level: 1, label: 'Haute' };
  if (status === 'En progression' || status === 'À diagnostiquer') return { level: 2, label: 'Moyenne' };
  if (status === 'À consolider' || status === 'Non évalué') return { level: 3, label: 'Normale' };
  return { level: 4, label: 'Entretien' };
}

function allAttempts(state) {
  const out = [];
  for (const s of state.sessions) for (const it of s.items) if (!it.skip) out.push(Object.assign({ sid: s.id, kind: s.kind, mode: s.mode }, it));
  out.sort((a, b) => (a.ts < b.ts ? -1 : a.ts > b.ts ? 1 : 0));
  return out;
}
function sessionScore(s) { return pct(s.items.filter((i) => i.ok).length, s.items.length); }

function analyze(state, bank) {
  const today = dayKey();
  const attempts = allAttempts(state).filter((a) => bank.byId[a.qid]);
  const A = { today, attempts, bank };

  // Points
  const perPoint = {}; POINTS.forEach((p) => (perPoint[p.id] = []));
  for (const a of attempts) for (const p of bank.byId[a.qid].points) perPoint[p].push(a);
  A.points = {};
  for (const p of POINTS) {
    const atts = perPoint[p.id];
    const status = pointStatus(p.cat, atts);
    const qs = bank.byPoint[p.id] || [];
    const dues = qs.map((q) => state.qstats[q.id]).filter((s) => s && s.seen && s.due).map((s) => s.due).sort();
    let next = dues[0] || null;
    if (!next && ['Faible', 'À revoir', 'À diagnostiquer'].includes(status)) next = today;
    const prior = atts.slice(-8, -3);
    const trendDown = atts.length >= 5 && mastery(atts.slice(-3)) < mastery(prior) - 10;
    A.points[p.id] = {
      p, atts, n: atts.length, ok: atts.filter((a) => a.ok).length, score: mastery(atts), status, cls: pointClass(p.cat, atts),
      priority: pointPriority(status, p.cat), next, trendDown, qCount: qs.length, unseen: qs.filter((q) => !(state.qstats[q.id] && state.qstats[q.id].seen)).length,
    };
  }
  A.statusCount = {}; STATUSES.forEach((s) => (A.statusCount[s] = 0));
  Object.values(A.points).forEach((x) => A.statusCount[x.status]++);

  // Domaines
  const since30 = addDays(today, -30);
  A.domains = {};
  for (const d of DOMAINS) A.domains[d.id] = { n: 0, ok: 0, n30: 0, ok30: 0, seenQ: 0, total: (bank.byDomain[d.id] || []).length };
  for (const a of attempts) { const x = A.domains[bank.byId[a.qid].domain]; x.n++; if (a.ok) x.ok++; if (a.day >= since30) { x.n30++; if (a.ok) x.ok30++; } }
  for (const q of bank.list) if (state.qstats[q.id] && state.qstats[q.id].seen) A.domains[q.domain].seenQ++;
  for (const d of DOMAINS) { const x = A.domains[d.id]; x.acc = pct(x.ok, x.n); x.acc30 = pct(x.ok30, x.n30); }

  // Sessions
  const done = state.sessions.filter((s) => s.items.length > 0);
  A.quizSessions = done.filter((s) => s.kind === 'quiz');
  A.mocks = done.filter((s) => s.kind === 'mock' && s.completed && s.items.length >= 100);
  A.lastSession = done[done.length - 1] || null;
  A.lastScore = A.lastSession ? sessionScore(A.lastSession) : null;
  const last5 = done.slice(-5);
  A.avg5 = last5.length >= 5 ? Math.round(last5.reduce((t, s) => t + sessionScore(s), 0) / 5) : null;
  A.avgLast = last5.length ? Math.round(last5.reduce((t, s) => t + sessionScore(s), 0) / last5.length) : null;
  A.totalAnswered = attempts.length;
  A.distinctSeen = bank.list.filter((q) => state.qstats[q.id] && state.qstats[q.id].seen).length;
  A.answeredToday = attempts.filter((a) => a.day === today).length;

  // Révisions dues et erreurs
  A.due = bank.list.filter((q) => { const s = state.qstats[q.id]; return s && s.seen && s.due && s.due <= today; });
  A.openErrors = state.errors.filter((e) => !e.consolidatedOn && bank.byId[e.qid]);
  A.consolidated = state.errors.filter((e) => e.consolidatedOn);

  // Fatigue : trois séances en baisse continue et la dernière sous 60 %, ou plafond atteint
  const qs = A.quizSessions.filter((s) => s.items.length >= 5).slice(-3).map(sessionScore);
  A.decline = qs.length === 3 && qs[0] > qs[1] && qs[1] > qs[2] && qs[2] < 60;
  A.capReached = A.answeredToday >= state.settings.dailyCap;
  A.fatigue = A.decline || A.capReached;

  A.weeks = weeklyStats(state, bank, attempts);
  A.projection = projectTrend(A.weeks);
  A.roadmap = roadmapStatus(state, bank, attempts, A);
  A.gonogo = goNoGo(state, bank, A);
  return A;
}

/* ------------------------- Sélection des questions -------------------- */
function domainFocus(A) { return A && A.roadmap ? A.roadmap.activeFocus : [1, 5, 7, 8]; }

function selectQuestions(state, bank, A, opts) {
  const n = Math.max(1, opts.n || 10);
  const today = A.today;
  const rng = seededRng((opts.seed || today) + ':' + opts.mode + ':' + (opts.domain || '') + ':' + (opts.point || '') + ':' + A.totalAnswered);
  const S = (q) => state.qstats[q.id] || { seen: 0, lapses: 0 };
  const inScope = (q) => (!opts.domain || q.domain === opts.domain) && (!opts.point || q.points.includes(opts.point)) && (!opts.maxDifficulty || q.difficulty <= opts.maxDifficulty);
  const pool = bank.list.filter(inScope);
  const picks = []; const used = new Set(); const perDom = {};
  const targeted = !!(opts.domain || opts.point);
  const maxPerDom = targeted ? n : Math.max(3, Math.ceil(n * 0.4));
  const seenCap = Math.ceil(n * 0.6);
  const seenCount = () => picks.filter((x) => x.seen).length;
  const add = (q, reason, opt = {}) => {
    if (!q || used.has(q.id) || picks.length >= n) return false;
    const seen = S(q).seen > 0;
    if (!opt.force && (perDom[q.domain] || 0) >= maxPerDom) return false;
    if (!opt.force && seen && seenCount() >= seenCap) return false;
    used.add(q.id); perDom[q.domain] = (perDom[q.domain] || 0) + 1; picks.push({ q, reason, seen });
    return true;
  };
  const unseenOf = (qs) => shuffle(qs.filter((q) => inScope(q) && !S(q).seen && !used.has(q.id)), rng).sort((a, b) => a.difficulty - b.difficulty);

  if (opts.mode === 'mock' || opts.mode === 'transversal') {
    const counts = weightedCounts(n);
    for (const d of DOMAINS) {
      const dq = pool.filter((q) => q.domain === d.id);
      const unseen = shuffle(dq.filter((q) => !S(q).seen), rng);
      const seen = shuffle(dq.filter((q) => S(q).seen), rng).sort((a, b) => (S(a).lastDay || '') < (S(b).lastDay || '') ? -1 : 1);
      [...unseen, ...seen].slice(0, counts[d.id]).forEach((q) => add(q, opts.mode === 'mock' ? 'Examen blanc' : 'Transversal pondéré ' + d.code, { force: true }));
    }
    fillRest(); return shuffle(picks, rng);
  }

  if (opts.mode === 'spaced') {
    A.due.filter(inScope).sort((a, b) => (S(a).due < S(b).due ? -1 : 1) || S(b).lapses - S(a).lapses).forEach((q) => add(q, 'Révision programmée (échéance ' + fmtDay(S(q).due) + ')', { force: true }));
    return picks;
  }

  if (opts.mode === 'errors') {
    const errs = A.openErrors.slice().sort((a, b) => b.count - a.count);
    for (const e of errs) {
      const q = bank.byId[e.qid]; if (!inScope(q)) continue;
      add(q, e.count > 1 ? 'Erreur récurrente (×' + e.count + ')' : 'Erreur à reprendre', { force: true });
      const sib = e.points.flatMap((p) => unseenOf(bank.byPoint[p] || []))[0];
      if (sib) add(sib, 'Nouvelle question pour confirmer la consolidation de ' + e.points.join(', '), { force: true });
    }
    bank.list.filter((q) => S(q).flag && inScope(q)).forEach((q) => add(q, 'Marquée « À revoir »', { force: true }));
    return picks;
  }

  // Mode quotidien / ciblé / adaptatif
  const consolidationDay = opts.mode === 'daily' && state.settings.consolidationDay === parseDay(today).getDay();
  // 1. Erreurs récurrentes
  pool.filter((q) => S(q).seen && (S(q).lapses >= 2 || S(q).flag) && (S(q).flag || S(q).due <= today)).sort((a, b) => S(b).lapses - S(a).lapses)
    .forEach((q) => add(q, S(q).flag ? 'Marquée « À revoir »' : 'Erreur récurrente (×' + S(q).lapses + ')'));
  // 2. Points faibles confirmés : erreurs à reprendre + question nouvelle
  pool.filter((q) => S(q).seen && S(q).last === false && S(q).due <= today).forEach((q) => add(q, 'Erreur à reprendre'));
  const weak = Object.values(A.points).filter((x) => (x.status === 'Faible' || x.status === 'À revoir') && (!opts.point || x.p.id === opts.point)).sort((a, b) => a.score - b.score);
  for (const x of weak) { const q = unseenOf(bank.byPoint[x.p.id])[0]; if (q) add(q, 'Point faible confirmé ' + x.p.id); }
  // 3. Points intermédiaires dont le score baisse
  for (const x of Object.values(A.points).filter((x) => x.cls === 'intermediaire' && x.trendDown)) { const q = unseenOf(bank.byPoint[x.p.id])[0]; if (q) add(q, 'Score en baisse ' + x.p.id); }
  // 4. Concepts à réviser aujourd'hui
  pool.filter((q) => S(q).seen && S(q).due && S(q).due <= today).sort((a, b) => (S(a).due < S(b).due ? -1 : 1)).forEach((q) => add(q, 'Révision programmée'));
  if (consolidationDay) { fillRest(true); return picks; }
  // 5. Points forts à entretenir
  for (const x of Object.values(A.points).filter((x) => x.cls === 'fort' && x.n > 0 && diffDays(x.atts[x.atts.length - 1].day, today) >= 7)) {
    const q = unseenOf(bank.byPoint[x.p.id])[0]; if (q) add(q, 'Entretien du point fort ' + x.p.id);
  }
  // 6. Nouvelles questions de diagnostic, orientées par la feuille de route et les priorités initiales
  const focus = domainFocus(A);
  const rank = (q) => {
    const best = Math.min(4, ...q.points.map((p) => A.points[p].priority.level));
    return (focus.includes(q.domain) ? 0 : 10) + best * 2 + (q.difficulty - 1) * 0.5 - DOMAINS[q.domain - 1].weight / 100 + rng() * 1.5;
  };
  const fresh = pool.filter((q) => !S(q).seen).map((q) => [rank(q), q]).sort((a, b) => a[0] - b[0]).map((x) => x[1]);
  for (const q of fresh) {
    const pid = q.points.find((p) => A.points[p].status === 'À diagnostiquer' || A.points[p].status === 'Non évalué');
    add(q, pid ? 'Diagnostic du point ' + pid : 'Nouvelle question — vérification de la compréhension');
  }
  fillRest();
  return picks;

  function fillRest(onlySeen) {
    if (picks.length >= n) return;
    const rest = shuffle(pool.filter((q) => !used.has(q.id) && (!onlySeen || S(q).seen)), rng)
      .sort((a, b) => (S(a).seen ? 1 : 0) - (S(b).seen ? 1 : 0));
    for (const q of rest) { if (picks.length >= n) break; add(q, S(q).seen ? 'Révision complémentaire' : 'Question complémentaire', { force: true }); }
  }
}
function weightedCounts(n) {
  const raw = DOMAINS.map((d) => ({ id: d.id, v: (n * d.weight) / 100 }));
  const out = {}; let total = 0;
  raw.forEach((r) => { out[r.id] = Math.floor(r.v); total += out[r.id]; });
  raw.sort((a, b) => (b.v % 1) - (a.v % 1)).forEach((r) => { if (total < n) { out[r.id]++; total++; } });
  return out;
}

/* ------------------------- Tendance hebdomadaire ---------------------- */
function weeklyStats(state, bank, attempts) {
  const map = {};
  for (const a of attempts) {
    const w = mondayOf(a.day);
    const x = map[w] || (map[w] = { week: w, n: 0, ok: 0, modes: new Set(), wrongByPoint: {}, mockScores: [] });
    x.n++; if (a.ok) x.ok++;
    x.modes.add(a.kind === 'mock' ? 'Examen blanc' : MODE_LABEL[a.mode] || a.mode);
    if (!a.ok) for (const p of bank.byId[a.qid].points) x.wrongByPoint[p] = (x.wrongByPoint[p] || 0) + 1;
  }
  for (const s of state.sessions) if (s.kind === 'mock' && s.completed && s.items.length >= 100) { const w = mondayOf(s.day); if (map[w]) map[w].mockScores.push(sessionScore(s)); }
  const weeks = Object.values(map).sort((a, b) => (a.week < b.week ? -1 : 1));
  let prev = null;
  for (const w of weeks) {
    w.score = pct(w.ok, w.n);
    w.types = [...w.modes];
    w.delta = prev && prev.score !== null ? w.score - prev.score : null;
    w.gaps = Object.entries(w.wrongByPoint).sort((a, b) => b[1] - a[1]).slice(0, 3).map(([p, c]) => ({ p, c }));
    w.actions = [];
    w.gaps.forEach((g) => w.actions.push('Retravailler ' + g.p + ' — ' + POINT_BY_ID[g.p].label));
    if (w.score !== null && w.score < 70) w.actions.push('Privilégier des séances courtes sur les fondamentaux avant d’ajouter des notions.');
    if (w.n < 30) w.actions.push('Volume faible : viser au moins 30 questions sur la semaine pour une mesure fiable.');
    if (!w.actions.length) w.actions.push('Maintenir le rythme et passer aux scénarios transversaux.');
    prev = w;
  }
  return weeks;
}
function projectTrend(weeks) {
  const usable = weeks.filter((w) => w.n >= 30);
  const total = usable.reduce((t, w) => t + w.n, 0);
  if (usable.length < 3) return { ok: false, reason: 'Données insuffisantes pour estimer une tendance fiable', need: '3 semaines d’au moins 30 questions chacune (actuellement ' + usable.length + ').' };
  const x0 = parseDay(usable[0].week);
  const pts = usable.map((w) => ({ x: Math.round((parseDay(w.week) - x0) / 604800000), y: w.score }));
  const mx = pts.reduce((t, p) => t + p.x, 0) / pts.length; const my = pts.reduce((t, p) => t + p.y, 0) / pts.length;
  const sxx = pts.reduce((t, p) => t + (p.x - mx) ** 2, 0) || 1;
  const slope = pts.reduce((t, p) => t + (p.x - mx) * (p.y - my), 0) / sxx;
  const icpt = my - slope * mx;
  const sd = Math.sqrt(pts.reduce((t, p) => t + (p.y - (icpt + slope * p.x)) ** 2, 0) / Math.max(1, pts.length - 2));
  const half = Math.max(5, Math.round(1.5 * sd + 2));
  const lastX = pts[pts.length - 1].x;
  const future = [1, 2].map((k) => {
    const c = Math.round(icpt + slope * (lastX + k));
    return { week: addDays(usable[usable.length - 1].week, 7 * k), mid: clamp(c), lo: clamp(c - half), hi: clamp(c + half) };
  });
  let confidence = 'faible';
  if (usable.length >= 4 && total >= 200) confidence = 'modérée';
  if (usable.length >= 5 && total >= 400) confidence = 'élevée';
  return { ok: true, slope: Math.round(slope * 10) / 10, future, confidence, weeksUsed: usable.length, total };
  function clamp(v) { return Math.max(0, Math.min(100, v)); }
}

/* --------------------------- Feuille de route -------------------------- */
function roadmapStatus(state, bank, attempts, A) {
  const today = dayKey();
  const qPerDay = Math.min(state.settings.dailyCap, Math.max(1, Math.floor(state.settings.minutesPerDay / 2.2)));
  const capacity = qPerDay * state.settings.daysPerWeek;
  const carry = new Set();
  let current = null;
  const weeks = ROADMAP.map((w) => {
    const atts = attempts.filter((a) => a.day >= w.start && a.day <= w.end);
    const phase = today > w.end ? 'passée' : today >= w.start ? 'en cours' : 'à venir';
    const focusStats = w.focus.map((d) => { const xs = atts.filter((a) => bank.byId[a.qid].domain === d); return { d, n: xs.length, acc: pct(xs.filter((a) => a.ok).length, xs.length) }; });
    const fa = atts.filter((a) => w.focus.includes(bank.byId[a.qid].domain));
    const focusAcc = pct(fa.filter((a) => a.ok).length, fa.length);
    const mocks = state.sessions.filter((s) => s.kind === 'mock' && s.completed && s.day >= w.start && s.day <= w.end);
    let verdict = phase === 'à venir' ? 'À venir' : phase === 'en cours' ? 'En cours' : atts.length === 0 ? 'Non réalisée' : (focusAcc !== null && focusAcc >= 80 && fa.length >= 10) ? 'Objectif atteint' : 'Objectif non atteint';
    if (w.mock && phase === 'passée' && !mocks.length) verdict = 'Examen blanc non réalisé';
    if (phase === 'passée' && !w.repli) for (const f of focusStats) {
      const dom = A.domains[f.d];
      if ((f.n < 5 || (f.acc !== null && f.acc < 80)) && (dom.acc === null || dom.acc < 80 || dom.n < 10)) carry.add(f.d);
    }
    const res = Object.assign({}, w, { phase, answered: atts.length, focusStats, focusAcc, mocks: mocks.map(sessionScore), verdict });
    if (phase === 'en cours') current = res;
    return res;
  });
  if (!current) current = weeks.find((w) => w.phase === 'à venir') || weeks[weeks.length - 1];
  const activeFocus = [...new Set([...current.focus, ...carry])];
  return { weeks, current, carry: [...carry], activeFocus, capacity, qPerDay };
}

/* ------------------------------ Go / No-Go ---------------------------- */
function goNoGo(state, bank, A) {
  const today = A.today; const S = state.settings;
  const crit = [];
  const recent = A.attempts.filter((a) => a.day >= addDays(today, -21));
  const mk = (id, label, status, value, detail) => crit.push({ id, label, status, value, detail });

  // 1. Deux examens blancs consécutifs ≥ 80 %
  const m = A.mocks;
  if (m.length < 2) mk('mocks', 'Deux examens blancs complets consécutifs ≥ 80 %', 'insuffisant', m.length + ' examen(s) blanc(s) complet(s)', 'Il faut deux examens blancs d’au moins 100 questions.');
  else { const s1 = sessionScore(m[m.length - 2]), s2 = sessionScore(m[m.length - 1]); mk('mocks', 'Deux examens blancs complets consécutifs ≥ 80 %', s1 >= 80 && s2 >= 80 ? 'ok' : 'ko', s1 + ' % puis ' + s2 + ' %', ''); }

  // 2. Aucun domaine sous 70 %
  let domSrc, domItems;
  if (m.length >= 1) { domItems = m.slice(-2).flatMap((s) => s.items); domSrc = 'derniers examens blancs'; }
  else { domItems = recent; domSrc = '21 derniers jours'; }
  const per = DOMAINS.map((d) => { const xs = domItems.filter((a) => bank.byId[a.qid] && bank.byId[a.qid].domain === d.id); return { d, n: xs.length, acc: pct(xs.filter((a) => a.ok).length, xs.length) }; });
  const thin = per.filter((x) => x.n < (m.length ? 8 : 10));
  const minDom = per.filter((x) => x.acc !== null).sort((a, b) => a.acc - b.acc)[0];
  if (thin.length) mk('domains', 'Aucun domaine sous 70 %', 'insuffisant', thin.map((x) => x.d.code).join(', ') + ' : trop peu de réponses', 'Source : ' + domSrc + '.');
  else mk('domains', 'Aucun domaine sous 70 %', minDom.acc >= 70 ? 'ok' : 'ko', 'Minimum : ' + minDom.d.code + ' à ' + minDom.acc + ' %', 'Source : ' + domSrc + '.');

  // 3. Résultats confirmés sur de nouvelles questions
  const fresh = recent.filter((a) => a.first);
  if (fresh.length < 60) mk('fresh', 'Résultats confirmés sur de nouvelles questions (≥ 75 %)', 'insuffisant', fresh.length + ' question(s) nouvelle(s) sur 21 jours', 'Il en faut au moins 60.');
  else { const v = pct(fresh.filter((a) => a.ok).length, fresh.length); mk('fresh', 'Résultats confirmés sur de nouvelles questions (≥ 75 %)', v >= 75 ? 'ok' : 'ko', v + ' % sur ' + fresh.length + ' questions nouvelles', ''); }

  // 4. Scénarios en anglais
  const en = recent.filter((a) => a.lang === 'en' || a.lang === 'bi');
  if (en.length < 40) mk('english', 'Bonne compréhension des scénarios en anglais (≥ 75 %)', 'insuffisant', en.length + ' réponse(s) en anglais sur 21 jours', 'Il en faut au moins 40, en mode anglais ou bilingue.');
  else { const v = pct(en.filter((a) => a.ok).length, en.length); mk('english', 'Bonne compréhension des scénarios en anglais (≥ 75 %)', v >= 75 ? 'ok' : 'ko', v + ' % sur ' + en.length + ' réponses', ''); }

  // 5. Gestion du temps (examen CAT : 3 h pour 100 à 150 questions, soit 72 s par question au plus)
  if (!m.length) mk('time', 'Gestion du temps validée (≤ 72 s par question en examen blanc)', 'insuffisant', 'Aucun examen blanc', '');
  else { const s = m[m.length - 1]; const avg = Math.round(s.items.reduce((t, i) => t + i.t, 0) / s.items.length); const over = s.limitSec && s.items.reduce((t, i) => t + i.t, 0) > s.limitSec; mk('time', 'Gestion du temps validée (≤ 72 s par question en examen blanc)', avg <= 72 && !over ? 'ok' : 'ko', avg + ' s par question en moyenne', over ? 'Temps limite dépassé.' : ''); }

  // 6. Réduction des erreurs récurrentes
  const open = A.openErrors.length;
  const ref = state.snapshots.filter((s) => s.day <= addDays(today, -14)).slice(-1)[0];
  if (!ref) mk('errors', 'Réduction des erreurs non consolidées', 'insuffisant', open + ' erreur(s) ouverte(s)', 'Comparaison possible après 14 jours d’historique.');
  else mk('errors', 'Réduction des erreurs non consolidées', (open <= ref.open && open <= 20) || open <= 10 ? 'ok' : 'ko', open + ' aujourd’hui contre ' + ref.open + ' le ' + fmtDay(ref.day), 'Seuil : 10 au plus, ou en baisse et 20 au plus.');

  // 7. Charge soutenable
  const last7 = A.attempts.filter((a) => a.day > addDays(today, -7));
  const days = {}; last7.forEach((a) => (days[a.day] = (days[a.day] || 0) + 1));
  const over = Object.values(days).filter((v) => v > S.dailyCap).length;
  if (!last7.length) mk('load', 'Charge de révision soutenable', 'insuffisant', 'Aucune séance sur 7 jours', '');
  else mk('load', 'Charge de révision soutenable', !A.decline && over <= 1 ? 'ok' : 'ko', Object.keys(days).length + ' jour(s) actifs, ' + over + ' dépassement(s) du plafond', A.decline ? 'Trois séances en baisse continue : signe de fatigue.' : '');

  const okN = crit.filter((c) => c.status === 'ok').length;
  const failing = crit.filter((c) => c.status !== 'ok');
  const mocksOk = crit[0].status === 'ok';
  const domMin = minDom && !thin.length ? minDom.acc : null;
  let decision;
  if (okN === crit.length) decision = 'GO';
  else if (mocksOk && failing.length <= 2 && domMin !== null && domMin >= 60) decision = 'GO SOUS SURVEILLANCE';
  else decision = 'NO-GO';

  const daysToTarget = diffDays(today, S.targetDate);
  const decisionDay = addDays(S.targetDate, -1);
  let nextDate, dateNote;
  const insufficient = crit.filter((c) => c.status === 'insuffisant').length;
  if (decision === 'GO') { nextDate = S.targetDate; dateNote = 'Maintenir la date après vérification des disponibilités officielles auprès d’ISC2 / Pearson VUE.'; }
  else if (decision === 'GO SOUS SURVEILLANCE') {
    if (daysToTarget >= 7) { nextDate = S.targetDate; dateNote = 'Date maintenue sous condition : corriger les points fragiles et revalider avant le ' + fmtDay(decisionDay) + '.'; }
    else { nextDate = S.fallbackDate; dateNote = 'Délai trop court pour corriger : viser la date de repli.'; }
  } else if (today < '2026-11-23' && insufficient > 0) {
    nextDate = S.targetDate; dateNote = 'Décision prématurée : la plupart des critères ne peuvent pas encore être mesurés. La date cible reste un objectif de travail ; point de décision le ' + fmtDay(decisionDay) + ', après le second examen blanc.';
  } else {
    const lastMock = m.length ? sessionScore(m[m.length - 1]) : null;
    if (lastMock !== null && lastMock >= 75 && failing.length <= 3 && diffDays(today, S.fallbackDate) >= 5) { nextDate = S.fallbackDate; dateNote = 'Reporter à la date de repli et concentrer l’effort sur les critères non atteints.'; }
    else { nextDate = addDays(today > S.fallbackDate ? today : S.fallbackDate, 21); dateNote = 'Reporter au-delà du ' + fmtDay(S.fallbackDate) + ' : date indicative à confirmer après deux examens blancs consécutifs ≥ 80 %.'; }
  }
  const risks = failing.map((c) => c.label + (c.status === 'insuffisant' ? ' — non mesurable pour l’instant' : ' — non atteint (' + c.value + ')'));
  const actions = [];
  for (const c of failing) actions.push(ACTION_FOR[c.id]);
  return { decision, crit, okN, nextDate, dateNote, risks, actions: [...new Set(actions)], daysToTarget };
}
const ACTION_FOR = {
  mocks: 'Planifier un examen blanc complet (100 à 150 questions) en semaine 5, puis un second en semaine 6.',
  domains: 'Cibler le ou les domaines les plus bas avec des quiz de 10 questions jusqu’à dépasser 70 % puis 80 %.',
  fresh: 'Répondre à davantage de questions jamais vues pour confirmer la compréhension réelle.',
  english: 'Passer au moins une séance sur deux en mode anglais ou bilingue.',
  time: 'Faire des séances chronométrées et viser 60 à 70 s par question.',
  errors: 'Faire la révision des erreurs avant d’ajouter de nouvelles notions.',
  load: 'Réduire la charge : séances express, jour de consolidation, respect du plafond quotidien.',
};
const MODE_LABEL = { daily: 'Quiz du jour', targeted: 'Quiz ciblé', adaptive20: 'Quiz de 20', transversal: 'Quiz transversal', mock: 'Examen blanc', errors: 'Révision des erreurs', spaced: 'Répétition espacée', light: 'Séance légère' };

function fmtDay(s, long) {
  if (!isDay(s)) return '—';
  const d = parseDay(s);
  const m = ['janv.', 'févr.', 'mars', 'avr.', 'mai', 'juin', 'juil.', 'août', 'sept.', 'oct.', 'nov.', 'déc.'];
  const ml = ['janvier', 'février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'];
  return d.getDate() + (d.getDate() === 1 ? 'er' : '') + ' ' + (long ? ml : m)[d.getMonth()] + (long ? ' ' + d.getFullYear() : '');
}

/* CSV des résultats */
function toCSV(state, bank) {
  const esc = (v) => '"' + String(v === null || v === undefined ? '' : v).replace(/"/g, '""') + '"';
  const rows = [['date', 'horodatage', 'session', 'mode', 'type_session', 'question', 'domaine', 'sous_domaine', 'points', 'correct', 'temps_s', 'langue', 'nouvelle_question', 'categorie_erreur']];
  for (const s of state.sessions) for (const it of s.items) {
    const q = bank.byId[it.qid];
    rows.push([it.day, it.ts, s.id, MODE_LABEL[s.mode] || s.mode, s.kind === 'mock' ? 'examen blanc' : 'quiz', it.qid, q ? 'D' + q.domain : '', q ? q.subdomain : '', q ? q.points.join(' ') : '', it.ok ? 1 : 0, it.t, it.lang, it.first ? 1 : 0, it.cat || '']);
  }
  return rows.map((r) => r.map(esc).join(';')).join('\r\n');
}

/* =========================================================================
   Interface : routage, vues, quiz, graphiques SVG, paramètres.
   ========================================================================= */
let STATE = null; let BANK = null; let BASE_QUESTIONS = []; let RUN = null; let LAST_SUMMARY = null;
let TIMER = null; let SAVE_T = null; let STORAGE_OK = true;
const UI = { filters: {}, flash: null, exportText: '', toast: null, openPoint: null, explorer: { d: 0, sub: '', diff: 0, hist: 'all', text: '' } };

const $ = (sel, root = document) => root.querySelector(sel);
const esc = (s) => String(s === null || s === undefined ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const L = 'ABCDEFGHIJ';
const dom = (id) => DOMAINS[id - 1];
const STATUS_TONE = { 'Non évalué': 'none', 'À diagnostiquer': 'none', 'Faible': 'crit', 'À revoir': 'crit', 'En progression': 'warn', 'À consolider': 'info', 'Maîtrisé': 'good' };
const CAT_LABEL = { faible: 'Point faible', intermediaire: 'Point intermédiaire', fort: 'Point fort' };

/* ------------------------------- Stockage ----------------------------- */
function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    STATE = raw ? normalizeState(JSON.parse(raw)) : freshState();
  } catch (e) { STORAGE_OK = false; STATE = STATE || freshState(); }
}
function save(now) {
  clearTimeout(SAVE_T);
  const doSave = () => { try { localStorage.setItem(STORAGE_KEY, JSON.stringify(Object.assign({ app: 'cissp-z2h', appVersion: APP_VERSION, savedAt: new Date().toISOString() }, STATE))); STORAGE_OK = true; } catch (e) { STORAGE_OK = false; } paintSaveState(); };
  if (now) doSave(); else SAVE_T = setTimeout(doSave, 250);
}
function paintSaveState() {
  const el = $('#save-state'); if (!el) return;
  el.textContent = STORAGE_OK ? 'Sauvegarde locale active' : 'Sauvegarde locale indisponible — exportez vos données';
  el.dataset.ok = STORAGE_OK ? '1' : '0';
}
function rebuildBank() { BANK = buildBank(BASE_QUESTIONS, STATE.customQuestions); }

/* ------------------------------- Démarrage ---------------------------- */
async function boot() {
  loadState();
  applyTheme();
  try {
    const inline = document.getElementById('qbank');
    if (inline && inline.textContent.trim().length > 10) BASE_QUESTIONS = JSON.parse(inline.textContent).questions;
    else { const r = await fetch('questions.json', { cache: 'no-store' }); if (!r.ok) throw new Error('HTTP ' + r.status); BASE_QUESTIONS = (await r.json()).questions; }
  } catch (e) {
    BASE_QUESTIONS = [];
    UI.bankError = 'La banque questions.json n’a pas pu être chargée (' + e.message + '). Ouvrez la version autonome cissp-portail.html, servez le dossier avec un petit serveur local, ou importez questions.json dans Paramètres.';
  }
  rebuildBank();
  document.addEventListener('click', onClick);
  document.addEventListener('change', onChange);
  document.addEventListener('input', onInput);
  document.addEventListener('keydown', onKey);
  document.addEventListener('submit', onSubmit);
  window.addEventListener('hashchange', render);
  paintSaveState();
  render();
}

function applyTheme() {
  const t = STATE.settings.theme; const root = document.documentElement;
  if (t === 'system') root.removeAttribute('data-theme'); else root.setAttribute('data-theme', t);
}

/* ------------------------------- Routage ------------------------------ */
const VIEWS = [
  ['dashboard', 'Tableau de bord'], ['programme', 'Programme des 8 domaines'], ['faibles', 'Mes 40 points faibles'], ['ameliorer', 'Mes 21 points à améliorer'], ['forts', 'Mes 11 points forts'],
  ['quiz', 'Quiz du jour'], ['erreurs', 'Révision des erreurs'], ['flashcards', 'Flashcards'], ['glossaire', 'Glossaire EN–FR'], ['examens', 'Examens blancs'], ['stats', 'Statistiques et tendances'], ['feuille', 'Feuille de route et décision'], ['parametres', 'Paramètres et sauvegardes'],
];
function currentView() { const h = (location.hash || '').replace('#', ''); return VIEWS.some((v) => v[0] === h) ? h : 'dashboard'; }

function render() {
  const view = currentView();
  if (RUN && view !== 'quiz') pauseTimer();
  const A = analyze(STATE, BANK);
  // navigation
  const nav = $('#nav');
  nav.innerHTML = VIEWS.map(([id, label]) => {
    let badge = '';
    if (id === 'quiz') badge = RUN ? '<span class="nb">en cours</span>' : '';
    if (id === 'erreurs' && A.openErrors.length) badge = '<span class="nb">' + A.openErrors.length + '</span>';
    return '<a href="#' + id + '" class="' + (id === view ? 'on' : '') + '"' + (id === view ? ' aria-current="page"' : '') + '>' + esc(label) + badge + '</a>';
  }).join('');
  const days = diffDays(A.today, STATE.settings.targetDate);
  $('#countdown').innerHTML = '<span class="cd-n">' + (days >= 0 ? 'J−' + days : 'J+' + -days) + '</span><span class="cd-l">examen visé le ' + esc(fmtDay(STATE.settings.targetDate, true)) + '</span>';
  document.querySelectorAll('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', b.dataset.lang === STATE.settings.lang ? 'true' : 'false'));
  const main = $('#view');
  const fn = View[view];
  main.innerHTML = (UI.bankError ? '<div class="alert crit" role="alert">' + esc(UI.bankError) + '</div>' : '') + fn(A);
  if (view === 'quiz' && RUN && RUN.kind === 'mock' && !RUN.answered) startTimer();
  document.title = 'Portail CISSP Zéro to Hero';
  if (UI.focusMain) { main.focus({ preventScroll: true }); UI.focusMain = false; }
}

/* ------------------------------ Fragments ----------------------------- */
const chip = (txt, tone) => '<span class="chip ' + (tone || '') + '">' + esc(txt) + '</span>';
const statusChip = (s) => chip(s, 'st-' + STATUS_TONE[s]);
const domChip = (d) => '<span class="dchip d' + d + '" title="' + esc(dom(d).en) + '">' + 'D' + d + '</span>';
const btn = (label, act, arg, cls) => '<button type="button" class="btn ' + (cls || '') + '" data-act="' + act + '"' + (arg !== undefined ? ' data-arg="' + esc(arg) + '"' : '') + '>' + label + '</button>';
const kpi = (label, value, sub, tone) => '<div class="kpi ' + (tone || '') + '"><div class="kpi-l">' + label + '</div><div class="kpi-v">' + value + '</div>' + (sub ? '<div class="kpi-s">' + sub + '</div>' : '') + '</div>';
const pctTxt = (v) => (v === null || v === undefined ? '—' : v + ' %');
const sectionHead = (title, sub) => '<header class="vh"><h1>' + title + '</h1>' + (sub ? '<p class="lede">' + sub + '</p>' : '') + '</header>';
function decisionBadge(d) { const t = d === 'GO' ? 'good' : d === 'NO-GO' ? 'crit' : 'warn'; return '<span class="decision ' + t + '">' + esc(d) + '</span>'; }
function scoreTone(v) { return v === null ? '' : v >= 80 ? 'good' : v >= 70 ? 'info' : v >= 60 ? 'warn' : 'crit'; }
function glossFor(q) {
  const kws = (q.keywords || []).map((k) => k.toLowerCase());
  return GLOSSARY.filter((g) => kws.some((k) => g.en.toLowerCase().includes(k) || k.includes(g.en.toLowerCase().replace(/ \(.*\)/, ''))));
}

/* ================================ VUES ================================ */
const View = {};

View.dashboard = function (A) {
  const S = STATE.settings; const g = A.gonogo;
  const daily = selectQuestions(STATE, BANK, A, { mode: 'daily', n: FORMATS[S.format].n });
  const mastered = A.statusCount['Maîtrisé'];
  const order = ['Maîtrisé', 'À consolider', 'En progression', 'Faible', 'À revoir', 'À diagnostiquer', 'Non évalué'];
  const bar = order.map((s) => A.statusCount[s] ? '<span class="seg st-' + STATUS_TONE[s] + '" style="flex:' + A.statusCount[s] + '" title="' + esc(s) + ' : ' + A.statusCount[s] + '"></span>' : '').join('');
  const legend = order.map((s) => '<li><i class="sw st-' + STATUS_TONE[s] + '"></i>' + esc(s) + ' <b>' + A.statusCount[s] + '</b></li>').join('');
  const word = GLOSSARY[Math.max(0, diffDays('2026-10-18', A.today)) % GLOSSARY.length];
  const rec = recommendation(A, daily);
  return sectionHead('Tableau de bord', 'Où vous en êtes aujourd’hui, ce qu’il faut faire maintenant et pourquoi.') +
  '<section class="hero card">' +
    '<div class="hero-main"><div class="eyebrow">Recommandation du jour</div><h2>' + esc(rec.title) + '</h2><p>' + esc(rec.text) + '</p>' +
      '<div class="row">' + btn(rec.cta, rec.act, rec.arg, 'primary') + btn('Voir mes 10 questions', 'go', 'quiz', 'ghost') + '</div></div>' +
    '<div class="hero-side"><div class="eyebrow">Décision d’examen</div>' + decisionBadge(g.decision) +
      '<p class="small">' + esc(g.okN) + ' critère(s) sur 7 validé(s). Date indicative : <b>' + esc(fmtDay(g.nextDate, true)) + '</b>.</p>' + btn('Comprendre la décision', 'go', 'feuille', 'link') + '</div>' +
  '</section>' +
  '<section class="kpis">' +
    kpi('Dernière séance', pctTxt(A.lastScore), A.lastSession ? esc(MODE_LABEL[A.lastSession.mode] || '') + ' · ' + A.lastSession.items.length + ' q.' : 'Aucune séance dans le portail', scoreTone(A.lastScore)) +
    kpi('Moyenne des 5 dernières', A.avg5 === null ? '—' : A.avg5 + ' %', A.avg5 === null ? 'Disponible après 5 séances (' + (A.quizSessions.length + A.mocks.length) + '/5)' : 'séances du portail', scoreTone(A.avg5)) +
    kpi('Questions réalisées', A.totalAnswered, A.distinctSeen + ' questions distinctes sur ' + BANK.list.length) +
    kpi('Révisions dues', A.due.length, 'aujourd’hui ou en retard', A.due.length ? 'warn' : '') +
    kpi('Erreurs non consolidées', A.openErrors.length, A.consolidated.length + ' consolidée(s) au total', A.openErrors.length ? 'crit' : '') +
    kpi('Points maîtrisés', mastered + ' / 72', 'confirmés sur plusieurs questions et plusieurs jours', mastered ? 'good' : '') +
  '</section>' +
  '<section class="card"><div class="card-h"><h2>Progression des 72 points</h2>' + btn('Voir les points faibles', 'go', 'faibles', 'link') + '</div>' +
    '<div class="stack" role="img" aria-label="Répartition des 72 points par statut">' + bar + '</div><ul class="legend">' + legend + '</ul>' +
    '<p class="small muted">Les trois catégories initiales (40 faibles, 21 intermédiaires, 11 forts) sont une hypothèse de départ. Un point n’est déclaré maîtrisé qu’après au moins 4 réponses, 3 questions différentes réussies, sur 2 jours au moins.</p></section>' +
  '<section class="grid2">' +
    '<div class="card">' + briefing(A, daily) + '</div>' +
    '<div class="card"><div class="card-h"><h2>Résultats par domaine</h2>' + btn('Programme', 'go', 'programme', 'link') + '</div>' + domainBars(A) + '</div>' +
  '</section>' +
  '<section class="grid2">' +
    '<div class="card"><div class="card-h"><h2>Résultats de référence déclarés</h2></div>' + baselineTable() + '<p class="small muted">Obtenus hors du portail, avant le 19 octobre. Ils ne sont ni mélangés aux séances du portail, ni convertis en score officiel.</p></div>' +
    '<div class="card word"><div class="eyebrow">Vocabulaire anglais du jour</div><h2 lang="en">' + esc(word.en) + '</h2><p class="muted">' + esc(word.fr) + '</p><p>' + esc(word.def) + '</p><p class="small"><b>Exemple :</b> ' + esc(word.ex) + '</p>' +
      '<details><summary>' + esc(word.q) + '</summary><p>' + esc(word.a) + '</p></details>' + btn('Ouvrir le glossaire', 'go', 'glossaire', 'link') + '</div>' +
  '</section>';
};

function recommendation(A, daily) {
  const S = STATE.settings;
  if (!BANK.list.length) return { title: 'Charger la banque de questions', text: 'Aucune question n’est disponible pour le moment.', cta: 'Aller aux paramètres', act: 'go', arg: 'parametres' };
  if (A.capReached) return { title: 'Plafond quotidien atteint', text: 'Vous avez déjà répondu à ' + A.answeredToday + ' questions aujourd’hui (plafond : ' + S.dailyCap + '). Faites une pause ou relisez vos erreurs sans ajouter de questions.', cta: 'Relire mes erreurs', act: 'go', arg: 'erreurs' };
  if (A.decline) return { title: 'Séance légère conseillée', text: 'Vos trois dernières séances sont en baisse continue. Une séance express sur les fondamentaux est plus utile qu’une séance longue.', cta: 'Lancer une séance légère (5 questions)', act: 'start', arg: 'light' };
  if (A.openErrors.length >= 8) return { title: 'Consolider avant d’avancer', text: A.openErrors.length + ' erreurs ne sont pas encore consolidées. Une révision des erreurs passe avant de nouvelles notions.', cta: 'Réviser mes erreurs', act: 'start', arg: 'errors' };
  const cons = S.consolidationDay === parseDay(A.today).getDay();
  const groups = [['Erreur récurrente', 'erreur(s) récurrente(s)'], ['Marquée', 'question(s) marquée(s) à revoir'], ['Erreur à reprendre', 'erreur(s) à reprendre'], ['Point faible', 'question(s) sur des points faibles confirmés'], ['Score en baisse', 'question(s) sur des scores en baisse'], ['Révision', 'révision(s) programmée(s)'], ['Entretien', 'entretien(s) de points forts'], ['Diagnostic', 'nouvelle(s) question(s) de diagnostic'], ['', 'nouvelle(s) question(s) de vérification']];
  const reasons = {}; daily.forEach((x) => { const g = groups.find(([k]) => x.reason.startsWith(k)); reasons[g[1]] = (reasons[g[1]] || 0) + 1; });
  const why = Object.entries(reasons).map(([k, v]) => v + ' ' + k).join(', ');
  return { title: (cons ? 'Jour de consolidation : vos ' : 'Vos ') + daily.length + ' questions du jour sont prêtes', text: 'Composition : ' + why + '. Durée visée : ' + FORMATS[S.format].time + '. Focus actuel : ' + A.roadmap.activeFocus.map((d) => 'D' + d).join(', ') + '.', cta: 'Lancer mes ' + daily.length + ' questions du jour', act: 'start', arg: 'daily' };
}

function briefing(A, daily) {
  const g = A.gonogo;
  const doms = DOMAINS.map((d) => ({ d, x: A.domains[d.id] })).filter((o) => o.x.n >= 5).sort((a, b) => a.x.acc - b.x.acc);
  let domTxt;
  if (doms.length && doms[0].x.acc < 80) domTxt = doms[0].d.code + ' (' + doms[0].x.acc + ' % sur ' + doms[0].x.n + ' réponses).';
  else if (doms.length) { const f = A.roadmap.activeFocus.map((id) => ({ id, s: A.domains[id].seenQ / A.domains[id].total })).sort((a, b) => a.s - b.s)[0]; domTxt = 'D' + f.id + ' : le moins exploré du focus de la semaine (tous les domaines mesurés sont ≥ 80 %).'; }
  else domTxt = 'Pas encore de mesure : suivez le focus de la semaine (' + A.roadmap.activeFocus.map((d) => 'D' + d).join(', ') + '). L’autoévaluation signale D2 (1/5) comme le plus fragile.';
  const last = A.quizSessions.concat(A.mocks).sort((a, b) => (a.start < b.start ? -1 : 1)).slice(-5).map(sessionScore);
  let prog;
  if (last.length < 3) prog = 'Données insuffisantes (' + last.length + ' séance(s)) : au moins 3 séances sont nécessaires.';
  else { const d = last[last.length - 1] - last[0]; prog = 'Sur les ' + last.length + ' dernières séances : ' + last.join(' → ') + ' % (' + (d >= 0 ? '+' : '') + d + ' pts).'; }
  const pr = A.projection;
  const trend = pr.ok ? 'Fourchette indicative pour la semaine prochaine : ' + pr.future[0].lo + ' à ' + pr.future[0].hi + ' % (confiance ' + pr.confidence + ').' : pr.reason + '.';
  const realistic = g.decision === 'GO' ? 'Oui, les 7 critères sont validés.' : g.decision === 'GO SOUS SURVEILLANCE' ? 'Probablement, sous réserve de corriger ' + (7 - g.okN) + ' critère(s).' : 'Pas encore démontré : ' + g.okN + ' critère(s) sur 7 validé(s).';
  const items = [
    ['Quelles sont mes dix questions prioritaires aujourd’hui ?', daily.length + ' questions prêtes. ' + '<a href="#quiz">Voir la liste</a>'],
    ['Quelles erreurs dois-je corriger ?', A.openErrors.length ? A.openErrors.length + ' erreur(s) ouverte(s), dont ' + A.openErrors.filter((e) => e.count > 1).length + ' récurrente(s). <a href="#erreurs">Les revoir</a>' : 'Aucune erreur ouverte pour le moment.'],
    ['Quel domaine dois-je travailler ?', esc(domTxt)],
    ['Quels points sont réellement maîtrisés ?', A.statusCount['Maîtrisé'] + ' sur 72. ' + (A.statusCount['Maîtrisé'] ? '' : 'Aucun ne l’est encore : la maîtrise se démontre dans le temps.')],
    ['Mes résultats progressent-ils régulièrement ?', esc(prog)],
    ['Quelle est la tendance des prochaines semaines ?', esc(trend)],
    ['La date du ' + fmtDay(STATE.settings.targetDate) + ' reste-t-elle réaliste ?', esc(realistic)],
    ['Dois-je maintenir ou reporter l’examen ?', decisionBadge(g.decision) + ' ' + esc(g.dateNote)],
    ['Pourquoi cette décision ?', g.risks.length ? esc(g.risks.slice(0, 3).join(' · ')) + (g.risks.length > 3 ? ' …' : '') + ' <a href="#feuille">Détail</a>' : 'Tous les critères personnels sont atteints.'],
  ];
  return '<div class="card-h"><h2>Votre point du jour</h2></div><dl class="brief">' + items.map(([q, a]) => '<div><dt>' + esc(q) + '</dt><dd>' + a + '</dd></div>').join('') + '</dl>';
}

function baselineTable() {
  return '<div class="tw"><table class="t"><thead><tr><th>Évaluation</th><th>Type</th><th class="num">Questions</th><th class="num">Résultat</th></tr></thead><tbody>' +
    BASELINE.map((b) => '<tr><td>' + esc(b.label) + '<div class="small muted">' + esc(fmtDay(b.date, true)) + (b.note ? ' · ' + esc(b.note) : '') + '</div></td><td>' + esc(b.type) + '</td><td class="num">' + (b.n || '—') + '</td><td class="num"><b>' + b.score + ' %</b></td></tr>').join('') +
    '</tbody></table></div>' +
    '<p class="small">Autoévaluation initiale : ' + DOMAINS.map((d) => d.code + ' ' + d.self + '/5').join(' · ') + ' · ' + SELF_EXTRA.map((x) => x.label + ' ' + x.v + '/5').join(' · ') + ' · moyenne ' + String(SELF_AVG).replace('.', ',') + '/5.</p>';
}

function domainBars(A) {
  const W = 600, rowH = 34, top = 18, left = 44, right = 96, H = top + rowH * 8 + 24;
  const x = (v) => left + ((W - left - right) * v) / 100;
  let s = '<svg viewBox="0 0 ' + W + ' ' + H + '" class="chart" role="img" aria-label="Taux de réussite par domaine">';
  [0, 50, 70, 80, 100].forEach((v) => { s += '<line x1="' + x(v) + '" x2="' + x(v) + '" y1="' + (top - 6) + '" y2="' + (H - 20) + '" class="' + (v === 70 || v === 80 ? 'thr' : 'grid') + '"/><text x="' + x(v) + '" y="' + (H - 6) + '" class="ax" text-anchor="middle">' + v + ' %</text>'; });
  DOMAINS.forEach((d, i) => {
    const y = top + i * rowH; const st = A.domains[d.id];
    s += '<text x="' + (left - 8) + '" y="' + (y + 15) + '" class="lab" text-anchor="end">' + d.code + '</text>';
    s += '<rect x="' + x(0) + '" y="' + (y + 4) + '" width="' + (x(100) - x(0)) + '" height="16" rx="4" class="track"/>';
    if (st.acc !== null) s += '<rect x="' + x(0) + '" y="' + (y + 4) + '" width="' + Math.max(4, x(st.acc) - x(0)) + '" height="16" rx="4" class="bar ' + scoreTone(st.acc) + '"><title>' + d.code + ' : ' + st.acc + ' % sur ' + st.n + ' réponses</title></rect>';
    const selfX = x(d.self * 20);
    s += '<path d="M' + selfX + ' ' + (y + 1) + ' l4 -5 h-8z" class="self"><title>Autoévaluation ' + d.self + '/5</title></path>';
    s += '<text x="' + (W - right + 8) + '" y="' + (y + 15) + '" class="val">' + (st.acc === null ? 'non mesuré' : st.acc + ' % · ' + st.n) + '</text>';
  });
  s += '</svg>';
  return '<div class="tw">' + s + '</div><p class="small muted">Barre : réussite observée dans le portail (nombre de réponses). Triangle : autoévaluation initiale ramenée sur 100 (1/5 = 20). Lignes repères : 70 % et 80 %. Pondération officielle : ' + DOMAINS.map((d) => d.code + ' ' + d.weight + ' %').join(', ') + '.</p>';
}

/* ------------------------------ Programme ----------------------------- */
View.programme = function (A) {
  const cards = DOMAINS.map((d) => {
    const st = A.domains[d.id];
    const pts = POINTS.filter((p) => p.domain === d.id);
    const subs = {}; (BANK.byDomain[d.id] || []).forEach((q) => (subs[q.subdomain] = (subs[q.subdomain] || 0) + 1));
    return '<article class="card dom">' +
      '<div class="dom-h">' + domChip(d.id) + '<div><h2 lang="en">' + esc(d.en) + '</h2><p class="muted small">' + esc(d.fr) + '</p></div></div>' +
      '<div class="dom-m"><div><span class="eyebrow">Poids examen</span><b>' + d.weight + ' %</b></div><div><span class="eyebrow">Autoévaluation</span><b>' + d.self + '/5</b></div><div><span class="eyebrow">Réussite</span><b class="' + scoreTone(st.acc) + '">' + pctTxt(st.acc) + '</b></div><div><span class="eyebrow">Couverture</span><b>' + st.seenQ + '/' + st.total + '</b></div></div>' +
      '<div class="small"><span class="eyebrow">Points du référentiel</span><div class="chips">' + (pts.length ? pts.map((p) => '<button type="button" class="pchip st-' + STATUS_TONE[A.points[p.id].status] + '" data-act="point" data-arg="' + p.id + '" title="' + esc(p.label + ' — ' + A.points[p.id].status) + '">' + p.id + '</button>').join('') : '<span class="muted">Couvert par des points transversaux.</span>') + '</div></div>' +
      '<details class="small"><summary>Sous-domaines (' + Object.keys(subs).length + ')</summary><ul class="subs">' + Object.entries(subs).map(([k, v]) => '<li>' + esc(k) + ' <span class="muted">' + v + '</span></li>').join('') + '</ul></details>' +
      '<div class="row">' + btn('Quiz de 10 — ' + d.code, 'startDomain', d.id, 'primary sm') + btn('Explorer les questions', 'explore', d.id, 'ghost sm') + '</div>' +
    '</article>';
  }).join('');
  return sectionHead('Programme des huit domaines', 'Pondération : ' + esc(WEIGHT_SOURCE) + '. Cliquez sur un point pour son détail, ou explorez la banque par domaine, sous-domaine, difficulté et historique.') +
    '<section class="domgrid">' + cards + '</section>' + explorer(A);
};

function explorer(A) {
  const E = UI.explorer;
  const subs = [...new Set(BANK.list.filter((q) => !E.d || q.domain === E.d).map((q) => q.subdomain))].sort();
  let list = BANK.list.filter((q) => (!E.d || q.domain === E.d) && (!E.sub || q.subdomain === E.sub) && (!E.diff || q.difficulty === E.diff));
  list = list.filter((q) => { const s = STATE.qstats[q.id]; if (E.hist === 'new') return !s || !s.seen; if (E.hist === 'ok') return s && s.seen && s.last === true; if (E.hist === 'ko') return s && s.wrong > 0; return true; });
  if (E.text) { const t = E.text.toLowerCase(); list = list.filter((q) => (q.fr.question + ' ' + q.en.question + ' ' + q.keywords.join(' ') + ' ' + q.points.join(' ')).toLowerCase().includes(t)); }
  const shown = list.slice(0, 40);
  return '<section class="card" id="explorer"><div class="card-h"><h2>Explorer la banque de questions</h2><span class="muted small">' + list.length + ' question(s)' + (list.length > 40 ? ', 40 affichées' : '') + '</span></div>' +
    '<div class="filters">' +
      sel('ex-d', 'Domaine', [[0, 'Tous']].concat(DOMAINS.map((d) => [d.id, d.code + ' — ' + d.fr])), E.d) +
      sel('ex-sub', 'Sous-domaine', [['', 'Tous']].concat(subs.map((s) => [s, s])), E.sub) +
      sel('ex-diff', 'Difficulté', [[0, 'Toutes'], [1, '1 — base'], [2, '2 — intermédiaire'], [3, '3 — avancé']], E.diff) +
      sel('ex-hist', 'Historique', [['all', 'Toutes'], ['new', 'Jamais vues'], ['ok', 'Réussies la dernière fois'], ['ko', 'Déjà ratées']], E.hist) +
      '<label class="f"><span>Concept ou mot-clé</span><input id="ex-text" type="search" value="' + esc(E.text) + '" placeholder="ex. RPO, SAML, F21"></label>' +
    '</div>' +
    '<p class="small muted">Consulter une question ici ne compte pas comme une réponse et ne modifie pas vos statistiques.</p>' +
    '<div class="qlist">' + shown.map((q) => studyCard(q)).join('') + '</div></section>';
}
function studyCard(q) {
  const s = STATE.qstats[q.id];
  const hist = s && s.seen ? (s.correct + ' ✓ / ' + s.wrong + ' ✗') : 'jamais vue';
  return '<details class="study"><summary>' + domChip(q.domain) + '<span class="qid">' + q.id + '</span><span class="qs">' + esc(q.fr.question) + '</span><span class="muted small">' + esc(q.subdomain) + ' · niv. ' + q.difficulty + ' · ' + hist + '</span></summary>' +
    '<div class="study-b"><ol class="opts-ro" type="A">' + q.fr.options.map((o, i) => '<li class="' + (q.answer.includes(i) ? 'good' : '') + '">' + esc(o) + '</li>').join('') + '</ol>' +
    (q.type === 'order' ? '<p><b>Ordre attendu :</b> ' + q.answer.map((i) => L[i]).join(' → ') + '</p>' : '') +
    '<p>' + esc(q.explanation) + '</p><p class="small"><b>À retenir :</b> ' + esc(q.principle) + '</p><p class="small muted" lang="en">' + esc(q.en.question) + '</p>' +
    '<div class="row">' + btn('M’entraîner sur cette question', 'startOne', q.id, 'ghost sm') + '</div></div></details>';
}
function sel(id, label, opts, val) {
  return '<label class="f"><span>' + label + '</span><select id="' + id + '">' + opts.map(([v, t]) => '<option value="' + esc(v) + '"' + (String(v) === String(val) ? ' selected' : '') + '>' + esc(t) + '</option>').join('') + '</select></label>';
}

/* ------------------------------- Points ------------------------------- */
function pointsView(A, cat, title, sub) {
  const F = UI.filters[cat] || (UI.filters[cat] = { d: 0, st: '', pr: 0, sort: 'priority' });
  let rows = POINTS.filter((p) => p.cat === cat).map((p) => A.points[p.id]);
  if (F.d) rows = rows.filter((x) => x.p.domain === F.d);
  if (F.st) rows = rows.filter((x) => x.status === F.st);
  if (F.pr) rows = rows.filter((x) => x.priority.level === F.pr);
  rows.sort((a, b) => F.sort === 'id' ? (a.p.id < b.p.id ? -1 : 1) : F.sort === 'score' ? (a.score ?? -1) - (b.score ?? -1) : a.priority.level - b.priority.level || (a.score ?? -1) - (b.score ?? -1));
  const all = POINTS.filter((p) => p.cat === cat).map((p) => A.points[p.id]);
  const moved = { faible: 0, intermediaire: 0, fort: 0 }; all.forEach((x) => moved[x.cls]++);
  const doms = [...new Set(POINTS.filter((p) => p.cat === cat).map((p) => p.domain))];
  return sectionHead(title, sub) +
    '<section class="card"><div class="filters">' +
      sel('pf-d', 'Domaine', [[0, 'Tous']].concat(doms.map((d) => [d, 'D' + d + ' — ' + dom(d).fr])), F.d) +
      sel('pf-st', 'Statut', [['', 'Tous']].concat(STATUSES.map((s) => [s, s])), F.st) +
      sel('pf-pr', 'Priorité', [[0, 'Toutes'], [1, 'Haute'], [2, 'Moyenne'], [3, 'Normale'], [4, 'Entretien']], F.pr) +
      sel('pf-sort', 'Trier par', [['priority', 'Priorité'], ['score', 'Score de maîtrise'], ['id', 'Identifiant']], F.sort) +
    '</div><p class="small">Reclassement actuel d’après vos résultats (à partir de 3 réponses) : <b>' + moved.faible + '</b> faible(s), <b>' + moved.intermediaire + '</b> intermédiaire(s), <b>' + moved.fort + '</b> fort(s).</p>' +
    '<div class="tw"><table class="t pts"><thead><tr><th>Point</th><th>Domaine</th><th>Statut</th><th>Priorité</th><th class="num">Maîtrise</th><th class="num">Réponses</th><th>Prochaine révision</th><th></th></tr></thead><tbody>' +
    rows.map((x) => '<tr class="' + (UI.openPoint === x.p.id ? 'open' : '') + '"><td><button type="button" class="linkish" data-act="point" data-arg="' + x.p.id + '"><span class="qid">' + x.p.id + '</span> ' + esc(x.p.label) + '</button>' + (x.cls !== cat && x.n >= 3 ? '<div class="small muted">Reclassé : ' + esc(CAT_LABEL[x.cls].toLowerCase()) + '</div>' : '') + '</td><td>' + domChip(x.p.domain) + '</td><td>' + statusChip(x.status) + '</td><td>' + esc(x.priority.label) + '</td><td class="num">' + (x.score === null ? '—' : x.score + ' %') + '</td><td class="num">' + x.n + '</td><td>' + (x.next ? esc(fmtDay(x.next)) : '—') + '</td><td>' + btn('S’entraîner', 'startPoint', x.p.id, 'ghost sm') + '</td></tr>' +
      (UI.openPoint === x.p.id ? '<tr class="detail"><td colspan="8">' + pointDetail(x) + '</td></tr>' : '')).join('') +
    '</tbody></table></div>' + (rows.length ? '' : '<p class="empty">Aucun point ne correspond à ces filtres.</p>') + '</section>';
}
function pointDetail(x) {
  const h = x.atts.slice(-12).reverse();
  return '<div class="pd"><div><p><b>Catégorie initiale :</b> ' + esc(CAT_LABEL[x.p.cat]) + ' (hypothèse de départ) · <b>Classement actuel :</b> ' + esc(CAT_LABEL[x.cls]) + '</p>' +
    '<p><b>Questions disponibles :</b> ' + x.qCount + ' dont ' + x.unseen + ' jamais vue(s).' + (x.trendDown ? ' <span class="chip st-warn">score en baisse</span>' : '') + '</p></div>' +
    (h.length ? '<div class="tw"><table class="t mini"><thead><tr><th>Date</th><th>Question</th><th>Résultat</th><th>Langue</th></tr></thead><tbody>' + h.map((a) => '<tr><td>' + esc(fmtDay(a.day)) + '</td><td class="qid">' + a.qid + (a.first ? ' <span class="muted small">nouvelle</span>' : '') + '</td><td>' + (a.ok ? '<span class="ok">Réussie</span>' : '<span class="ko">Ratée</span>') + '</td><td>' + a.lang.toUpperCase() + '</td></tr>').join('') + '</tbody></table></div>' : '<p class="muted">Aucune réponse enregistrée pour ce point.</p>') + '</div>';
}
View.faibles = (A) => pointsView(A, 'faible', 'Mes 40 points faibles prioritaires', 'Hypothèse pédagogique initiale construite à partir des premiers résultats et de l’autoévaluation : ce ne sont pas 40 erreurs démontrées. Chaque point est reclassé selon vos réponses réelles.');
View.ameliorer = (A) => pointsView(A, 'intermediaire', 'Mes 21 points à améliorer', 'Points intermédiaires à faire progresser. Un score en baisse les fait remonter dans la sélection quotidienne.');
View.forts = (A) => pointsView(A, 'fort', 'Mes 11 points forts à consolider', 'Thèmes à valider, et non compétences démontrées. Ils reviennent en entretien tous les 7 jours environ.');

/* -------------------------------- Quiz -------------------------------- */
View.quiz = function (A) {
  if (RUN) return RUN.done ? summaryView(A) : runView(A);
  const S = STATE.settings; const f = FORMATS[S.format];
  const daily = selectQuestions(STATE, BANK, A, { mode: 'daily', n: f.n });
  const cons = S.consolidationDay === parseDay(A.today).getDay();
  return sectionHead('Mes ' + daily.length + ' révisions du jour', 'Sélection adaptée à vos résultats : erreurs récurrentes, points faibles confirmés, scores en baisse, révisions dues, entretien des points forts, puis nouvelles questions de diagnostic.') +
    (cons ? '<div class="alert info">Jour de consolidation : la séance du jour reprend vos erreurs et révisions sans nouvelles notions.</div>' : '') +
    (A.fatigue ? '<div class="alert warn">' + (A.capReached ? 'Plafond quotidien atteint (' + A.answeredToday + '/' + S.dailyCap + '). ' : 'Vos dernières séances sont en baisse continue. ') + 'La charge n’est pas augmentée : une séance légère ou une pause est préférable. ' + btn('Séance légère', 'start', 'light', 'sm') + '</div>' : '') +
    '<section class="card"><div class="card-h"><h2>Format</h2></div><div class="seg-ctl" role="group" aria-label="Format de séance">' +
      Object.entries(FORMATS).map(([k, v]) => '<button type="button" data-act="format" data-arg="' + k + '" aria-pressed="' + (S.format === k) + '">' + v.label + '<span>' + v.n + ' q. · ' + v.time + '</span></button>').join('') + '</div>' +
      '<ol class="daily">' + daily.map((x) => '<li>' + domChip(x.q.domain) + '<span class="qid">' + x.q.id + '</span><span class="dq">' + esc(x.q.subdomain) + (x.q.qualifier ? ' · <b>' + x.q.qualifier + '</b>' : '') + '</span><span class="reason">' + esc(x.reason) + '</span></li>').join('') + '</ol>' +
      '<div class="row">' + btn('Commencer la séance', 'start', 'daily', 'primary') + langPicker() + '</div></section>' +
    '<section class="card"><div class="card-h"><h2>Autres modes</h2></div><div class="modes">' +
      modeCard('Quiz ciblé', 'Un domaine ou un point précis, 10 ou 20 questions.', '<div class="row">' + sel('tg-d', 'Domaine', DOMAINS.map((d) => [d.id, d.code + ' — ' + d.fr]), UI.tgd || 1) + '</div><div class="row">' + btn('10 questions', 'startTarget', 10, 'sm') + btn('20 questions', 'startTarget', 20, 'sm ghost') + '</div>') +
      modeCard('Quiz adaptatif de 20', 'Même logique que le quotidien, sur 20 questions.', btn('Lancer', 'start', 'adaptive20', 'sm')) +
      modeCard('Quiz transversal', 'Tous les domaines, pondérés comme à l’examen.', '<div class="row">' + btn('20 questions', 'startTrans', 20, 'sm') + btn('40 questions', 'startTrans', 40, 'sm ghost') + '</div>') +
      modeCard('Révision des erreurs', A.openErrors.length + ' erreur(s) ouverte(s), avec une question nouvelle par point pour confirmer.', btn('Lancer', 'start', 'errors', 'sm')) +
      modeCard('Répétition espacée', A.due.length + ' révision(s) due(s) aujourd’hui.', btn('Lancer', 'start', 'spaced', 'sm')) +
      modeCard('Simulation longue', '100 à 150 questions chronométrées.', btn('Examens blancs', 'go', 'examens', 'sm')) +
    '</div></section>';
};
const modeCard = (t, d, actions) => '<div class="mode"><h3>' + t + '</h3><p class="small muted">' + d + '</p>' + actions + '</div>';
function langPicker() {
  const l = STATE.settings.lang;
  return '<div class="seg-ctl mini" role="group" aria-label="Langue des questions">' + [['fr', 'Français'], ['en', 'English'], ['bi', 'Bilingue']].map(([k, t]) => '<button type="button" data-lang="' + k + '" data-act="lang" data-arg="' + k + '" aria-pressed="' + (l === k) + '">' + t + '</button>').join('') + '</div>';
}

function startSession(mode, opts = {}) {
  if (!BANK.list.length) return toast('Aucune question disponible.');
  const A = analyze(STATE, BANK); const S = STATE.settings;
  let n = opts.n || FORMATS[S.format].n; let label = MODE_LABEL[mode] || mode; let kind = 'quiz'; let limitSec = 0;
  let sel;
  if (mode === 'light') { n = 5; sel = selectQuestions(STATE, BANK, A, { mode: 'daily', n, maxDifficulty: 2 }); }
  else if (mode === 'one') { const q = BANK.byId[opts.qid]; sel = [{ q, reason: 'Question choisie' }]; label = 'Question ' + opts.qid; }
  else if (mode === 'mock') { kind = 'mock'; limitSec = n * 72; sel = selectQuestions(STATE, BANK, A, { mode: 'mock', n }); label = 'Examen blanc de ' + n + ' questions'; }
  else sel = selectQuestions(STATE, BANK, A, Object.assign({ mode: mode === 'adaptive20' ? 'daily' : mode, n: mode === 'adaptive20' ? 20 : n }, opts));
  if (mode === 'adaptive20') n = 20;
  if (!sel.length) return toast(mode === 'errors' ? 'Aucune erreur à réviser.' : mode === 'spaced' ? 'Aucune révision due aujourd’hui.' : 'Aucune question ne correspond.');
  const iso = new Date(Clock.now()).toISOString();
  const id = 'S' + iso.replace(/\D/g, '').slice(0, 14) + Math.floor(Math.random() * 1000);
  const rec = { id, mode: mode === 'one' ? 'targeted' : mode, kind, label, start: iso, end: iso, day: dayKey(), planned: sel.length, limitSec, completed: false, items: [] };
  STATE.sessions.push(rec); save();
  RUN = { rec, kind, label, items: sel, i: 0, lang: S.lang, choice: [], answered: false, qStart: Date.now(), startMs: Date.now(), elapsedBefore: 0, results: [], done: false };
  location.hash = '#quiz'; render();
}

function runView() {
  const x = RUN.items[RUN.i]; const q = x.q; const lang = RUN.lang;
  const T = lang === 'fr' ? q.fr : q.en;
  const mock = RUN.kind === 'mock';
  const head = '<div class="qbar"><div class="prog"><span>' + (mock ? 'Examen blanc · ' : '') + 'Question <b>' + (RUN.i + 1) + '</b> / ' + RUN.items.length + '</span><div class="pbar"><i style="width:' + ((RUN.i / RUN.items.length) * 100) + '%"></i></div></div>' +
    (mock ? '<div id="timer" class="timer" aria-live="off"></div>' : '<div class="row">' + langPicker() + '</div>') + '</div>';
  const meta = '<div class="qmeta">' + domChip(q.domain) + '<span class="qid">' + q.id + '</span><span class="muted small">' + esc(q.subdomain) + ' · niveau ' + q.difficulty + '</span>' + (q.qualifier ? chip(q.qualifier, 'qual') : '') + (!mock ? '<span class="reason">' + esc(x.reason) + '</span>' : '') + '</div>';
  const hint = q.type === 'multi' ? (lang === 'fr' ? 'Sélectionnez ' + q.answer.length + ' réponses.' : 'Choose ' + q.answer.length + '.') : q.type === 'order' ? (lang === 'fr' ? 'Cliquez les étapes dans l’ordre correct. Cliquez à nouveau pour retirer.' : 'Click the steps in the correct order. Click again to remove.') : '';
  const opts = T.options.map((o, i) => {
    const picked = RUN.choice.indexOf(i);
    let cls = 'opt';
    if (picked >= 0) cls += ' picked';
    if (RUN.answered) { if (q.type === 'order') cls += RUN.choice[picked] === q.answer[picked] && picked >= 0 ? ' right' : ' wrong-o'; else { if (q.answer.includes(i)) cls += ' right'; else if (picked >= 0) cls += ' wrong'; } }
    const mark = q.type === 'order' && picked >= 0 ? '<span class="ord">' + (picked + 1) + '</span>' : '<span class="let">' + L[i] + '</span>';
    const tr = lang === 'bi' && RUN.showTr ? '<span class="tr">' + esc(q.fr.options[i]) + '</span>' : '';
    return '<button type="button" class="' + cls + '" data-act="pick" data-arg="' + i + '"' + (RUN.answered ? ' disabled' : '') + ' role="' + (q.type === 'multi' || q.type === 'order' ? 'checkbox' : 'radio') + '" aria-checked="' + (picked >= 0) + '">' + mark + '<span class="ot"' + (lang !== 'fr' ? ' lang="en"' : '') + '>' + esc(o) + '</span>' + tr + '</button>';
  }).join('');
  const valid = q.type === 'multi' ? RUN.choice.length === q.answer.length : q.type === 'order' ? RUN.choice.length === q.answer.length : RUN.choice.length === 1;
  let actions;
  if (mock) actions = '<div class="row">' + btn(RUN.i + 1 < RUN.items.length ? 'Valider et continuer' : 'Valider et terminer', 'submit', '', 'primary' + (valid ? '' : ' disabled')) + btn('Terminer l’examen maintenant', 'finishMock', '', 'ghost') + '</div>';
  else if (!RUN.answered) actions = '<div class="row">' + btn('Valider ma réponse', 'submit', '', 'primary' + (valid ? '' : ' disabled')) + (q.type === 'order' && RUN.choice.length ? btn('Recommencer le classement', 'resetOrder', '', 'ghost') : '') + btn('Arrêter la séance', 'abort', '', 'link') + '</div>';
  else actions = '';
  return '<section class="quiz card">' + head + meta +
    '<h2 class="stem"' + (lang !== 'fr' ? ' lang="en"' : '') + '>' + esc(T.question) + '</h2>' +
    (lang === 'bi' ? '<div class="tr-stem">' + btn(RUN.showTr ? 'Masquer la traduction' : 'Afficher la traduction française', 'toggleTr', '', 'link') + (RUN.showTr ? '<p>' + esc(q.fr.question) + '</p>' : '') + '</div>' : '') +
    (hint ? '<p class="hint">' + esc(hint) + '</p>' : '') +
    '<div class="opts">' + opts + '</div>' + actions + (RUN.answered && !mock ? feedback(q) : '') + '</section>';
}

function feedback(q) {
  const r = RUN.results[RUN.i]; const ok = r.ok;
  const ans = q.type === 'order' ? q.answer.map((i) => L[i] + '. ' + esc(q.fr.options[i])).join('<br>') : q.answer.map((i) => '<b>' + L[i] + '.</b> ' + esc(q.fr.options[i])).join('<br>');
  const reasoning = q.qualifier ? QUALIFIER_HINT[q.qualifier] : q.type === 'calc' ? 'Posez la formule, remplacez les valeurs avec leurs unités, puis vérifiez l’ordre de grandeur du résultat.' : q.type === 'order' ? 'Identifiez la première et la dernière étape, puis placez les étapes intermédiaires selon leurs dépendances.' : q.type === 'multi' ? 'Évaluez chaque proposition indépendamment : vraie ou fausse pour la question posée.' : q.type === 'scenario' ? 'Repérez votre rôle dans le scénario et ce qui est déjà fait, puis choisissez l’action d’un manager sécurité responsable.' : 'Identifiez le concept testé (' + q.subdomain + '), puis éliminez les options qui relèvent d’un autre concept.';
  const gl = glossFor(q);
  const linked = [...new Set(q.points.map((p) => POINT_BY_ID[p].domain).filter((d) => d !== q.domain).concat(RELATED[q.domain] || []))];
  const cats = ERR_CATS.map((c) => '<button type="button" class="chip-b" data-act="errcat" data-arg="' + esc(c) + '" aria-pressed="' + (r.cat === c) + '">' + esc(c) + '</button>').join('');
  return '<div class="fb ' + (ok ? 'fb-ok' : 'fb-ko') + '" role="status">' +
    '<div class="fb-h"><span class="verdict">' + (ok ? 'Correct' : 'Incorrect') + '</span><span class="muted small">' + r.t + ' s</span></div>' +
    '<div class="fb-g">' +
      '<div><h3>Bonne réponse</h3><p>' + ans + '</p></div>' +
      '<div><h3>Explication</h3><p>' + esc(q.explanation) + '</p></div>' +
      '<div><h3>Raisonnement attendu à l’examen</h3><p>' + esc(reasoning) + '</p></div>' +
      '<div><h3>Principe à retenir</h3><p class="principle">' + esc(q.principle) + '</p></div>' +
      '<div><h3>Pourquoi les autres choix sont moins appropriés</h3><p>' + esc(q.distractors) + '</p></div>' +
      '<div><h3>Piège à éviter</h3><p>' + esc(q.trap) + '</p></div>' +
      '<div><h3>Vocabulaire anglais</h3><p class="chips" lang="en">' + q.keywords.map((k) => chip(k, 'kw')).join('') + '</p>' + (gl.length ? '<p class="small">' + gl.map((g) => '<b lang="en">' + esc(g.en) + '</b> : ' + esc(g.fr)).join(' · ') + '</p>' : '') + '</div>' +
      (gl.length ? '<div><h3>Exemple professionnel</h3><p>' + esc(gl[0].ex) + '</p></div>' : '') +
      '<div><h3>Liens avec les autres domaines</h3><p>' + (q.points.length ? 'Points : ' + q.points.map((p) => '<span class="qid">' + p + '</span> ' + esc(POINT_BY_ID[p].label)).join(' · ') + '. ' : '') + 'Domaines liés : ' + linked.map((d) => 'D' + d + ' ' + esc(dom(d).fr)).join(', ') + '.</p></div>' +
      '<div class="small muted">Source : ' + esc(q.source || 'non précisée') + ' · confiance dans la correction : ' + esc(q.confidence) + '</div>' +
    '</div>' +
    (!ok ? '<div class="errcat"><h3>Pourquoi vous êtes-vous trompé ?</h3><div class="chips">' + cats + '</div></div>' : '') +
    '<div class="row">' + btn('J’ai compris', 'understood', '', 'ghost' + (r.understood ? ' on' : '')) + btn('À revoir', 'review', '', 'ghost' + (r.review ? ' on' : '')) + btn(RUN.i + 1 < RUN.items.length ? 'Question suivante' : 'Voir le bilan', 'next', '', 'primary') + '</div>' +
    (r.understood && !ok ? '<p class="small muted">L’erreur reste ouverte : elle sera consolidée quand vous réussirez une question nouvelle sur le même point.</p>' : '') +
  '</div>';
}

function suggestCat(q, t) {
  if (t < 12) return 'Réponse précipitée';
  if (q.qualifier) return 'Mauvaise interprétation de FIRST, BEST, MOST ou NEXT';
  if (RUN.lang !== 'fr') return 'Erreur de vocabulaire anglais';
  return 'Lacune de connaissance';
}

function submitAnswer() {
  const x = RUN.items[RUN.i]; const q = x.q;
  const valid = q.type === 'multi' || q.type === 'order' ? RUN.choice.length === q.answer.length : RUN.choice.length === 1;
  if (!valid || RUN.answered) return;
  const t = Math.max(1, Math.round((Date.now() - RUN.qStart) / 1000));
  const ok = isCorrect(q, RUN.choice);
  const ts = new Date(Clock.now()).toISOString(); const day = dayKey();
  const res = applyAnswer(STATE, q, ok, { ts, day });
  const cat = ok ? null : suggestCat(q, t);
  const item = { qid: q.id, ok, day, ts, t, lang: RUN.lang, first: res.first, cat, choice: RUN.choice.slice() };
  RUN.rec.items.push(item); RUN.rec.end = ts;
  if (!ok) { const e = STATE.errors.find((er) => er.qid === q.id && !er.consolidatedOn); if (e && !e.cat) e.cat = cat; }
  RUN.results[RUN.i] = { ok, t, cat, item, understood: false, review: false };
  if (RUN.kind === 'mock') { nextQuestion(); save(); return; }
  RUN.answered = true; save(); render();
}
function nextQuestion() {
  if (RUN.i + 1 >= RUN.items.length) return finishSession();
  RUN.i++; RUN.choice = []; RUN.answered = false; RUN.showTr = false; RUN.qStart = Date.now(); render(); window.scrollTo({ top: 0 });
}
function finishSession(timeout) {
  stopTimer();
  if (RUN.kind === 'mock' && RUN.rec.items.length < RUN.items.length) {
    for (let k = RUN.rec.items.length; k < RUN.items.length; k++) RUN.rec.items.push({ qid: RUN.items[k].q.id, ok: false, day: dayKey(), ts: new Date(Clock.now()).toISOString(), t: 0, lang: RUN.lang, first: false, cat: null, skip: true });
  }
  RUN.rec.completed = RUN.kind === 'mock' ? true : RUN.rec.items.length === RUN.items.length;
  RUN.rec.end = new Date(Clock.now()).toISOString();
  RUN.timeout = !!timeout;
  snapshotErrors(STATE, dayKey()); save(true);
  RUN.done = true; render(); window.scrollTo({ top: 0 });
}

function summaryView(A) {
  const rec = RUN.rec; const items = rec.items; const n = items.length; const ok = items.filter((i) => i.ok).length;
  const dur = Math.round((new Date(rec.end) - new Date(rec.start)) / 1000);
  const score = pct(ok, n);
  const wrong = items.filter((i) => !i.ok && !i.skip);
  const touched = [...new Set(items.flatMap((i) => (BANK.byId[i.qid] ? BANK.byId[i.qid].points : [])))];
  const weak = touched.filter((p) => ['Faible', 'À revoir', 'En progression'].includes(A.points[p].status));
  const mastered = touched.filter((p) => A.points[p].status === 'Maîtrisé' || A.points[p].status === 'À consolider');
  const tom = addDays(A.today, 1);
  const dueTomorrow = BANK.list.filter((q) => { const s = STATE.qstats[q.id]; return s && s.seen && s.due && s.due <= tom; }).length;
  const due7 = BANK.list.filter((q) => { const s = STATE.qstats[q.id]; return s && s.seen && s.due && s.due <= addDays(A.today, 7); }).length;
  const perDom = DOMAINS.map((d) => { const xs = items.filter((i) => BANK.byId[i.qid] && BANK.byId[i.qid].domain === d.id); return { d, n: xs.length, acc: pct(xs.filter((i) => i.ok).length, xs.length) }; }).filter((x) => x.n);
  const avgT = n ? Math.round(items.reduce((t, i) => t + i.t, 0) / n) : 0;
  const mock = rec.kind === 'mock';
  return sectionHead('Bilan de la séance', esc(rec.label) + ' · ' + esc(fmtDay(rec.day, true))) +
    '<section class="kpis">' + kpi('Score', ok + ' / ' + n, pctTxt(score), scoreTone(score)) + kpi('Durée', fmtDur(dur), avgT + ' s par question en moyenne' + (mock ? ' (cible ≤ 72 s)' : '')) + kpi('Erreurs', wrong.length + (mock ? ' + ' + items.filter((i) => i.skip).length + ' sans réponse' : ''), wrong.length ? 'ajoutées à la révision' : 'aucune') + kpi('Prochaines révisions', dueTomorrow, 'dues d’ici demain · ' + due7 + ' sur 7 jours') + '</section>' +
    (mock ? '<div class="alert info">Score d’entraînement en pourcentage. Il n’est pas converti en score officiel CISSP sur 1 000 et n’indique aucune probabilité de réussite.' + (RUN.timeout ? ' Temps écoulé : les questions restantes sont comptées sans réponse.' : '') + '</div>' : '') +
    '<section class="grid2"><div class="card"><div class="card-h"><h2>Par domaine</h2></div><div class="tw"><table class="t"><tbody>' + perDom.map((x) => '<tr><td>' + domChip(x.d.id) + ' ' + esc(x.d.fr) + '</td><td class="num">' + x.n + ' q.</td><td class="num"><b class="' + scoreTone(x.acc) + '">' + x.acc + ' %</b></td></tr>').join('') + '</tbody></table></div></div>' +
    '<div class="card"><div class="card-h"><h2>Points</h2></div><p><b>Points à travailler :</b> ' + (weak.length ? weak.map((p) => '<button type="button" class="pchip st-' + STATUS_TONE[A.points[p].status] + '" data-act="point" data-arg="' + p + '">' + p + '</button>').join(' ') : 'aucun') + '</p><p><b>Concepts consolidés ou maîtrisés :</b> ' + (mastered.length ? mastered.map((p) => '<span class="qid">' + p + '</span>').join(' ') : 'aucun pour l’instant') + '</p></div></section>' +
    (wrong.length ? '<section class="card"><div class="card-h"><h2>Erreurs de la séance</h2></div><ul class="errs">' + wrong.map((i) => { const q = BANK.byId[i.qid]; return '<li>' + domChip(q.domain) + '<span class="qid">' + q.id + '</span><span>' + esc(q.fr.question) + '</span><span class="muted small">' + esc(i.cat || '') + ' · bonne réponse : ' + q.answer.map((a) => L[a]).join(', ') + '</span></li>'; }).join('') + '</ul></section>' : '') +
    '<div class="row">' + btn('Retour au tableau de bord', 'endRun', 'dashboard', 'primary') + btn('Nouvelle séance', 'endRun', 'quiz', 'ghost') + (wrong.length ? btn('Réviser ces erreurs', 'endErrors', '', 'ghost') : '') + '</div>';
}
function fmtDur(s) { const m = Math.floor(s / 60); return m >= 60 ? Math.floor(m / 60) + ' h ' + pad2(m % 60) : m + ' min ' + pad2(s % 60) + ' s'; }

/* Chronomètre de l'examen blanc */
function startTimer() {
  stopTimer();
  const tick = () => {
    const el = $('#timer'); if (!RUN || RUN.kind !== 'mock') return stopTimer();
    const used = RUN.elapsedBefore + (Date.now() - RUN.startMs) / 1000; const left = Math.max(0, RUN.rec.limitSec - used);
    if (el) { el.textContent = 'Temps restant ' + fmtClock(left); el.dataset.low = left < 600 ? '1' : '0'; }
    if (left <= 0) finishSession(true);
  };
  RUN.startMs = Date.now(); tick(); TIMER = setInterval(tick, 1000);
}
function pauseTimer() { if (TIMER && RUN) { RUN.elapsedBefore += (Date.now() - RUN.startMs) / 1000; } stopTimer(); }
function stopTimer() { if (TIMER) clearInterval(TIMER); TIMER = null; }
function fmtClock(s) { s = Math.round(s); return Math.floor(s / 3600) + ':' + pad2(Math.floor((s % 3600) / 60)) + ':' + pad2(s % 60); }

/* ------------------------------- Erreurs ------------------------------ */
View.erreurs = function (A) {
  const F = UI.filters.err || (UI.filters.err = { cat: '', d: 0 });
  let list = A.openErrors.slice().sort((a, b) => b.count - a.count || (a.lastTs < b.lastTs ? 1 : -1));
  if (F.cat) list = list.filter((e) => (e.cat || 'Non catégorisée') === F.cat);
  if (F.d) list = list.filter((e) => e.domain === F.d);
  const byCat = {}; A.openErrors.forEach((e) => { const c = e.cat || 'Non catégorisée'; byCat[c] = (byCat[c] || 0) + 1; });
  return sectionHead('Révision des erreurs', 'Une erreur reste ouverte tant que vous n’avez pas réussi une question nouvelle sur le même point. « J’ai compris » ne la ferme pas.') +
    '<section class="kpis">' + kpi('Erreurs ouvertes', A.openErrors.length, 'non consolidées', A.openErrors.length ? 'crit' : '') + kpi('Récurrentes', A.openErrors.filter((e) => e.count > 1).length, 'ratées au moins deux fois') + kpi('Consolidées', A.consolidated.length, 'confirmées par une question nouvelle', 'good') + kpi('Marquées « À revoir »', BANK.list.filter((q) => STATE.qstats[q.id] && STATE.qstats[q.id].flag).length, 'reviennent demain') + '</section>' +
    '<section class="card"><div class="card-h"><h2>Répartition par cause</h2></div><div class="chips">' + (Object.keys(byCat).length ? Object.entries(byCat).sort((a, b) => b[1] - a[1]).map(([c, v]) => chip(c + ' · ' + v)).join('') : '<span class="muted">Aucune erreur ouverte.</span>') + '</div>' +
      '<div class="filters">' + sel('er-cat', 'Cause', [['', 'Toutes']].concat(ERR_CATS.concat(['Non catégorisée']).map((c) => [c, c])), F.cat) + sel('er-d', 'Domaine', [[0, 'Tous']].concat(DOMAINS.map((d) => [d.id, d.code])), F.d) + '</div>' +
      '<div class="row">' + btn('Lancer la révision des erreurs', 'start', 'errors', 'primary') + '</div>' +
      (list.length ? '<ul class="errs">' + list.map((e) => { const q = BANK.byId[e.qid]; return '<li>' + domChip(q.domain) + '<span class="qid">' + q.id + '</span><span>' + esc(q.fr.question) + '<span class="small muted"> · ratée ' + e.count + ' fois · dernière le ' + esc(fmtDay(e.lastTs.slice(0, 10))) + (e.understood ? ' · marquée comprise' : '') + ' · points ' + e.points.join(', ') + '</span></span>' +
        '<span class="erow">' + '<select data-err="' + esc(e.id) + '" aria-label="Cause de l’erreur">' + ['<option value="">Cause…</option>'].concat(ERR_CATS.map((c) => '<option' + (e.cat === c ? ' selected' : '') + '>' + esc(c) + '</option>')).join('') + '</select>' + btn('Refaire', 'startOne', q.id, 'ghost sm') + '</span></li>'; }).join('') + '</ul>' : '<p class="empty">' + (A.openErrors.length ? 'Aucune erreur pour ces filtres.' : 'Aucune erreur ouverte. Les erreurs apparaîtront ici après vos premières séances.') + '</p>') +
    '</section>';
};

/* ------------------------------ Flashcards ---------------------------- */
View.flashcards = function () {
  const F = UI.filters.fc || (UI.filters.fc = { src: 'all', d: 0 });
  const deck = flashDeck(F);
  if (!UI.flash || UI.flash.key !== F.src + F.d) UI.flash = { key: F.src + F.d, order: shuffle(deck.map((c) => c.id), seededRng(dayKey() + F.src)).sort((a, b) => fcWeight(b) - fcWeight(a)), i: 0, flip: false };
  const card = deck.find((c) => c.id === UI.flash.order[UI.flash.i]);
  return sectionHead('Flashcards', 'Termes anglais et principes à retenir. Les cartes marquées « À revoir » reviennent en premier.') +
    '<section class="card"><div class="filters">' + sel('fc-src', 'Paquet', [['all', 'Glossaire et principes'], ['gloss', 'Glossaire anglais–français'], ['prin', 'Principes des questions']], F.src) + sel('fc-d', 'Domaine', [[0, 'Tous']].concat(DOMAINS.map((d) => [d.id, d.code])), F.d) + '</div>' +
    (card ? '<div class="fc-wrap"><button type="button" class="fcard' + (UI.flash.flip ? ' flip' : '') + '" data-act="flip" aria-label="Retourner la carte"><div class="fc-front"><span class="eyebrow">' + esc(card.kind) + ' · ' + domChip(card.d) + '</span><div class="fc-t"' + (card.kind === 'Glossaire' ? ' lang="en"' : '') + '>' + esc(card.front) + '</div><span class="small muted">Cliquer pour voir la réponse</span></div><div class="fc-back"><div>' + card.back + '</div></div></button>' +
      '<div class="row center"><span class="muted small">Carte ' + (UI.flash.i + 1) + ' / ' + deck.length + '</span>' + btn('Je savais', 'fcok', card.id, 'ghost') + btn('À revoir', 'fcko', card.id, 'ghost') + btn('Suivante', 'fcnext', '', 'primary') + '</div></div>' : '<p class="empty">Aucune carte pour ce filtre.</p>') + '</section>';
};
function flashDeck(F) {
  const cards = [];
  if (F.src !== 'prin') GLOSSARY.forEach((g, i) => cards.push({ id: 'g' + i, kind: 'Glossaire', d: g.d, front: g.en, back: '<p><b>' + esc(g.fr) + '</b></p><p>' + esc(g.def) + '</p><p class="small">' + esc(g.ex) + '</p>' }));
  if (F.src !== 'gloss') BANK.list.forEach((q) => cards.push({ id: 'p' + q.id, kind: 'Principe', d: q.domain, front: q.subdomain + ' — ' + (q.keywords[0] || ''), back: '<p><b>' + esc(q.principle) + '</b></p><p class="small">Piège : ' + esc(q.trap) + '</p>' }));
  return cards.filter((c) => !F.d || c.d === F.d);
}
function fcWeight(id) { const f = STATE.flash[id]; return f ? f.ko * 2 - f.ok : 0.5; }

/* ------------------------------ Glossaire ----------------------------- */
View.glossaire = function () {
  const F = UI.filters.gl || (UI.filters.gl = { t: '', d: 0 });
  const t = F.t.toLowerCase();
  const list = GLOSSARY.filter((g) => (!F.d || g.d === F.d) && (!t || (g.en + g.fr + g.def).toLowerCase().includes(t)));
  return sectionHead('Glossaire anglais–français', 'L’examen se passe en anglais (format CAT). Apprenez les termes dans leur langue d’origine, avec une définition, un exemple et une question de vérification.') +
    '<section class="card"><div class="filters"><label class="f"><span>Rechercher</span><input id="gl-t" type="search" value="' + esc(F.t) + '" placeholder="Terme anglais ou français"></label>' + sel('gl-d', 'Domaine', [[0, 'Tous']].concat(DOMAINS.map((d) => [d.id, d.code])), F.d) + '</div>' +
    '<div class="gloss">' + list.map((g, i) => '<article class="g">' + '<div class="g-h"><h3 lang="en">' + esc(g.en) + '</h3>' + domChip(g.d) + (GLOSSARY.indexOf(g) < 11 ? chip('indispensable', 'kw') : '') + '</div><p class="muted">' + esc(g.fr) + '</p><p>' + esc(g.def) + '</p><p class="small"><b>Exemple :</b> ' + esc(g.ex) + '</p><details><summary><b>Vérification :</b> ' + esc(g.q) + '</summary><p>' + esc(g.a) + '</p></details></article>').join('') + '</div>' +
    (list.length ? '' : '<p class="empty">Aucun terme trouvé.</p>') + '</section>';
};

/* --------------------------- Examens blancs --------------------------- */
View.examens = function (A) {
  const unseen = BANK.list.filter((q) => !(STATE.qstats[q.id] && STATE.qstats[q.id].seen)).length;
  const mocks = STATE.sessions.filter((s) => s.kind === 'mock' && s.items.length);
  const rows = mocks.map((s) => { const per = DOMAINS.map((d) => { const xs = s.items.filter((i) => BANK.byId[i.qid] && BANK.byId[i.qid].domain === d.id); return pct(xs.filter((i) => i.ok).length, xs.length); }); const fresh = s.items.filter((i) => i.first).length; return '<tr><td>' + esc(fmtDay(s.day, true)) + '</td><td class="num">' + s.items.length + '</td><td class="num"><b class="' + scoreTone(sessionScore(s)) + '">' + sessionScore(s) + ' %</b></td>' + per.map((v) => '<td class="num ' + scoreTone(v) + '">' + (v === null ? '—' : v) + '</td>').join('') + '<td class="num">' + Math.round(s.items.reduce((t, i) => t + i.t, 0) / s.items.length) + ' s</td><td class="num">' + fresh + '</td></tr>'; }).join('');
  return sectionHead('Examens blancs', 'Simulations longues, chronométrées, pondérées comme le plan d’examen officiel, sans correction pendant l’épreuve.') +
    '<section class="grid2"><div class="card"><div class="card-h"><h2>Lancer une simulation</h2></div>' +
      '<p>Format CISSP en anglais : examen adaptatif (CAT) de 100 à 150 questions en 3 heures. Le portail applique 72 s par question au plus.</p>' +
      '<div class="row">' + btn('100 questions · 2 h', 'startMock', 100, 'primary') + btn('125 questions · 2 h 30', 'startMock', 125, 'ghost') + btn('150 questions · 3 h', 'startMock', 150, 'ghost') + '</div>' +
      '<p class="small">Questions jamais vues disponibles : <b>' + unseen + '</b> sur ' + BANK.list.length + '. ' + (unseen < 100 ? '<span class="ko">Moins de 100 questions nouvelles : un nouvel examen blanc réutilisera des questions déjà vues et surestimera votre niveau. Ajoutez des questions (Paramètres) avant le second examen blanc.</span>' : 'Deux examens blancs de 100 questions sur des questions différentes demandent 200 questions jamais vues.') + '</p>' +
      '<p class="small muted">Conseil : choisissez la langue anglaise pour vous placer dans les conditions réelles. Langue actuelle : ' + ({ fr: 'français', en: 'anglais', bi: 'bilingue' })[STATE.settings.lang] + '.</p>' + langPicker() + '</div>' +
    '<div class="card"><div class="card-h"><h2>Ce que mesure un examen blanc</h2></div><ul class="plain"><li>Le score est un pourcentage d’entraînement, jamais un score officiel sur 1 000.</li><li>Aucune probabilité de réussite n’est calculée.</li><li>Le CAT officiel adapte la difficulté et peut s’arrêter dès 100 questions ; une simulation linéaire ne le reproduit pas exactement.</li><li>La tendance globale se lit sur des examens blancs comparables ; les quiz courts mesurent des compétences ciblées.</li></ul></div></section>' +
    '<section class="card"><div class="card-h"><h2>Historique</h2></div>' + (mocks.length ? '<div class="tw"><table class="t"><thead><tr><th>Date</th><th class="num">Q.</th><th class="num">Score</th>' + DOMAINS.map((d) => '<th class="num">' + d.code + '</th>').join('') + '<th class="num">Temps/q.</th><th class="num">Nouvelles</th></tr></thead><tbody>' + rows + '</tbody></table></div>' : '<p class="empty">Aucun examen blanc réalisé. Le premier est prévu en semaine 5 (16 au 22 novembre).</p>') + '</section>';
};

/* ------------------------ Statistiques et tendances ------------------- */
View.stats = function (A) {
  const W = A.weeks; const P = A.projection;
  const table = W.length ? '<div class="tw"><table class="t"><thead><tr><th>Semaine du</th><th class="num">Score observé</th><th class="num">Questions</th><th>Types</th><th class="num">Évolution</th><th>Principales lacunes</th><th>Actions recommandées</th></tr></thead><tbody>' +
    W.map((w) => '<tr><td>' + esc(fmtDay(w.week)) + '</td><td class="num"><b class="' + scoreTone(w.score) + '">' + w.score + ' %</b></td><td class="num">' + w.n + '</td><td>' + esc(w.types.join(', ')) + (w.mockScores.length ? '<div class="small">Examen blanc : ' + w.mockScores.join(' %, ') + ' %</div>' : '') + '</td><td class="num">' + (w.delta === null ? '—' : (w.delta >= 0 ? '+' : '') + w.delta + ' pts') + '</td><td>' + (w.gaps.length ? w.gaps.map((g) => '<span class="qid">' + g.p + '</span> ×' + g.c).join(', ') : '—') + '</td><td class="small">' + esc(w.actions.join(' ')) + '</td></tr>').join('') +
    '</tbody></table></div>' : '<p class="empty">Aucune séance enregistrée dans le portail.</p>';
  const proj = P.ok ? '<div class="alert info"><b>Projection indicative, non officielle</b>, qui dépend de la qualité et de la difficulté des questions. Semaine du ' + esc(fmtDay(P.future[0].week)) + ' : ' + P.future[0].lo + ' à ' + P.future[0].hi + ' % ; semaine du ' + esc(fmtDay(P.future[1].week)) + ' : ' + P.future[1].lo + ' à ' + P.future[1].hi + ' %. Pente : ' + (P.slope >= 0 ? '+' : '') + P.slope + ' pt/semaine. Niveau de confiance : <b>' + P.confidence + '</b> (' + P.weeksUsed + ' semaines, ' + P.total + ' réponses).</div>' : '<div class="alert warn"><b>' + esc(P.reason) + '.</b> ' + esc(P.need) + '</div>';
  const mocks = A.mocks.map(sessionScore);
  const mockTrend = mocks.length >= 2 ? 'Examens blancs comparables : ' + mocks.join(' % → ') + ' %.' : 'Tendance des examens blancs : données insuffisantes pour estimer une tendance fiable (' + mocks.length + ' examen(s) blanc(s) complet(s)).';
  return sectionHead('Statistiques et tendances', 'Résultats réels du portail d’un côté, projections indicatives de l’autre. Aucun pourcentage n’est converti en score officiel, et aucune probabilité de réussite n’est calculée.') +
    '<section class="card"><div class="card-h"><h2>Évolution des scores par semaine</h2></div>' + chartWeekly(W, P) + proj + '<p class="small">' + esc(mockTrend) + '</p></section>' +
    '<section class="card"><div class="card-h"><h2>Détail hebdomadaire</h2></div>' + table + '</section>' +
    '<section class="grid2"><div class="card"><div class="card-h"><h2>Comparaison des huit domaines</h2></div>' + domainBars(A) + '</div>' +
    '<div class="card"><div class="card-h"><h2>Erreurs non consolidées</h2></div>' + chartErrors(STATE.snapshots) + '</div></section>' +
    '<section class="card"><div class="card-h"><h2>Résultats de référence (hors portail)</h2></div>' + baselineTable() + '</section>';
};

function chartWeekly(W, P) {
  const obs = W.map((w) => ({ label: fmtDay(w.week), y: w.score, n: w.n }));
  const fut = P.ok ? P.future.map((f) => ({ label: fmtDay(f.week), y: f.mid, lo: f.lo, hi: f.hi })) : [];
  const all = obs.concat(fut);
  if (!obs.length) return '<div class="chart-empty">Aucune donnée : le graphique se remplira après vos premières séances.</div>';
  const w = 640, h = 260, l = 40, r = 16, t = 14, b = 34;
  const xs = (i) => l + (all.length === 1 ? (w - l - r) / 2 : (i * (w - l - r)) / (all.length - 1));
  const ys = (v) => t + ((100 - v) * (h - t - b)) / 100;
  let s = '<svg viewBox="0 0 ' + w + ' ' + h + '" class="chart" role="img" aria-label="Scores hebdomadaires observés' + (fut.length ? ' et projection' : '') + '">';
  [0, 25, 50, 75, 100].forEach((v) => (s += '<line x1="' + l + '" x2="' + (w - r) + '" y1="' + ys(v) + '" y2="' + ys(v) + '" class="grid"/><text x="' + (l - 6) + '" y="' + (ys(v) + 4) + '" class="ax" text-anchor="end">' + v + '</text>'));
  s += '<line x1="' + l + '" x2="' + (w - r) + '" y1="' + ys(80) + '" y2="' + ys(80) + '" class="thr"/><text x="' + (w - r) + '" y="' + (ys(80) - 4) + '" class="ax" text-anchor="end">objectif 80 %</text>';
  if (fut.length) {
    const lastO = obs.length - 1;
    const band = [{ x: xs(lastO), y: ys(obs[lastO].y) }].concat(fut.map((f, k) => ({ x: xs(obs.length + k), y: ys(f.hi) }))).concat(fut.slice().reverse().map((f, k) => ({ x: xs(obs.length + fut.length - 1 - k), y: ys(f.lo) }))).concat([{ x: xs(lastO), y: ys(obs[lastO].y) }]);
    s += '<path d="M' + band.map((p) => p.x + ' ' + p.y).join(' L') + 'Z" class="band"/>';
    s += '<path d="M' + xs(lastO) + ' ' + ys(obs[lastO].y) + fut.map((f, k) => ' L' + xs(obs.length + k) + ' ' + ys(f.y)).join('') + '" class="proj"/>';
  }
  s += '<path d="M' + obs.map((p, i) => xs(i) + ' ' + ys(p.y)).join(' L') + '" class="line"/>';
  obs.forEach((p, i) => (s += '<circle cx="' + xs(i) + '" cy="' + ys(p.y) + '" r="' + (i === obs.length - 1 ? 5 : 4) + '" class="dot"><title>' + p.label + ' : ' + p.y + ' % sur ' + p.n + ' réponses (observé)</title></circle>'));
  fut.forEach((f, k) => (s += '<circle cx="' + xs(obs.length + k) + '" cy="' + ys(f.y) + '" r="4" class="pdot"><title>' + f.label + ' : ' + f.lo + '–' + f.hi + ' % (projection indicative)</title></circle>'));
  all.forEach((p, i) => (s += '<text x="' + xs(i) + '" y="' + (h - 12) + '" class="ax" text-anchor="middle">' + esc(p.label) + '</text>'));
  s += '</svg>';
  return '<div class="tw">' + s + '</div><ul class="legend"><li><i class="sw line-sw"></i>Score observé (résultats réels)</li>' + (fut.length ? '<li><i class="sw proj-sw"></i>Projection indicative et fourchette</li>' : '') + '<li><i class="sw thr-sw"></i>Objectif personnel 80 %</li></ul>';
}
function chartErrors(snaps) {
  if (!snaps.length) return '<div class="chart-empty">Aucun relevé : il sera enregistré à la fin de chaque séance.</div>';
  const w = 560, h = 220, l = 36, r = 16, t = 14, b = 30;
  const max = Math.max(5, ...snaps.map((s) => s.open));
  const xs = (i) => l + (snaps.length === 1 ? (w - l - r) / 2 : (i * (w - l - r)) / (snaps.length - 1));
  const ys = (v) => t + ((max - v) * (h - t - b)) / max;
  let s = '<svg viewBox="0 0 ' + w + ' ' + h + '" class="chart" role="img" aria-label="Évolution des erreurs non consolidées">';
  const step = Math.max(1, Math.ceil(max / 4));
  for (let v = 0; v <= max; v += step) s += '<line x1="' + l + '" x2="' + (w - r) + '" y1="' + ys(v) + '" y2="' + ys(v) + '" class="grid"/><text x="' + (l - 6) + '" y="' + (ys(v) + 4) + '" class="ax" text-anchor="end">' + v + '</text>';
  s += '<path d="M' + snaps.map((p, i) => xs(i) + ' ' + ys(p.open)).join(' L') + '" class="line err"/>';
  snaps.forEach((p, i) => (s += '<circle cx="' + xs(i) + '" cy="' + ys(p.open) + '" r="4" class="dot err"><title>' + fmtDay(p.day) + ' : ' + p.open + ' erreur(s) ouverte(s)</title></circle>'));
  const every = Math.ceil(snaps.length / 6);
  snaps.forEach((p, i) => { if (i % every === 0 || i === snaps.length - 1) s += '<text x="' + xs(i) + '" y="' + (h - 10) + '" class="ax" text-anchor="middle">' + esc(fmtDay(p.day)) + '</text>'; });
  return '<div class="tw">' + s + '</svg></div><p class="small muted">Relevé en fin de séance. L’objectif est une courbe qui baisse.</p>';
}

/* -------------------- Feuille de route et décision --------------------- */
View.feuille = function (A) {
  const g = A.gonogo; const R = A.roadmap;
  const icon = { ok: '<span class="ci good" aria-label="validé">✓</span>', ko: '<span class="ci crit" aria-label="non atteint">✗</span>', insuffisant: '<span class="ci none" aria-label="non mesurable">…</span>' };
  const crit = '<ul class="crit">' + g.crit.map((c) => '<li>' + icon[c.status] + '<div><b>' + esc(c.label) + '</b><div class="small">' + esc(c.value) + (c.detail ? ' · ' + esc(c.detail) : '') + '</div></div></li>').join('') + '</ul>';
  const weeks = R.weeks.map((w) => '<article class="wk ' + (w.phase === 'en cours' ? 'now' : '') + (w.repli ? ' repli' : '') + '">' +
    '<div class="wk-h"><span class="wk-n">' + (w.repli ? 'Repli' : 'Semaine ' + w.n) + '</span><span class="small muted">' + esc(fmtDay(w.start)) + ' – ' + esc(fmtDay(w.end)) + '</span>' + chip(w.verdict, w.verdict === 'Objectif atteint' ? 'st-good' : w.verdict.startsWith('Objectif non') || w.verdict.includes('non réalisé') || w.verdict === 'Non réalisée' ? 'st-crit' : w.phase === 'en cours' ? 'st-info' : '') + '</div>' +
    '<h3>' + esc(w.title) + '</h3><ul class="plain small">' + w.items.map((i) => '<li>' + esc(i) + '</li>').join('') + '</ul><p class="small"><b>Objectif :</b> ' + esc(w.goal) + '</p>' +
    (w.phase !== 'à venir' ? '<p class="small muted">Mesuré : ' + w.answered + ' réponse(s) · focus ' + (w.focusAcc === null ? '—' : w.focusAcc + ' %') + (w.mocks.length ? ' · examen blanc ' + w.mocks.join(' %, ') + ' %' : '') + '</p>' : '') +
  '</article>').join('');
  return sectionHead('Feuille de route et décision d’examen', 'Du 19 octobre au 7 décembre 2026. Le focus se recalcule selon vos résultats : un domaine non atteint est reporté sur la semaine suivante.') +
    '<section class="card decision-card"><div class="card-h"><h2>Décision Go / No-Go</h2>' + decisionBadge(g.decision) + '</div>' +
      '<div class="grid2 tight"><div><h3>Critères personnels (' + g.okN + '/7)</h3>' + crit + '</div>' +
      '<div><h3>Date indicative suivante</h3><p class="big">' + esc(fmtDay(g.nextDate, true)) + '</p><p>' + esc(g.dateNote) + '</p>' +
      '<h3>Risques restants</h3>' + (g.risks.length ? '<ul class="plain small">' + g.risks.map((r) => '<li>' + esc(r) + '</li>').join('') + '</ul>' : '<p class="small">Aucun.</p>') +
      '<h3>Actions correctives</h3>' + (g.actions.length ? '<ul class="plain small">' + g.actions.map((r) => '<li>' + esc(r) + '</li>').join('') + '</ul>' : '<p class="small">Maintenir le rythme et réduire progressivement la charge.</p>') + '</div></div>' +
      '<p class="small muted">Ces seuils sont des garde-fous pédagogiques personnels : ce ne sont pas des critères officiels ISC2 ni une garantie de réussite. Le portail ne réserve jamais l’examen. Avant toute réservation, vérifiez les disponibilités et les langues sur isc2.org : le CISSP n’est pas proposé en français (langues listées par ISC2 : anglais, allemand, chinois simplifié, espagnol, japonais).</p></section>' +
    '<section class="card"><div class="card-h"><h2>Focus de la période</h2></div><p>Semaine de référence : <b>' + esc(R.current.repli ? 'repli' : 'semaine ' + R.current.n) + '</b>. Domaines prioritaires : ' + R.activeFocus.map((d) => domChip(d)).join(' ') + (R.carry.length ? ' · reportés : ' + R.carry.map((d) => 'D' + d).join(', ') : '') + '.</p>' +
      '<p class="small">Capacité estimée selon vos disponibilités (' + STATE.settings.minutesPerDay + ' min/jour, ' + STATE.settings.daysPerWeek + ' jours/semaine, ≈ 2 min par question corrigée) : <b>' + R.qPerDay + ' questions par jour</b>, soit environ ' + R.capacity + ' par semaine, sous le plafond de ' + STATE.settings.dailyCap + '/jour. Modifiable dans Paramètres.</p></section>' +
    '<section class="weeks">' + weeks + '</section>';
};

/* ------------------------------ Paramètres ---------------------------- */
View.parametres = function () {
  const S = STATE.settings;
  const dayNames = ['dimanche', 'lundi', 'mardi', 'mercredi', 'jeudi', 'vendredi', 'samedi'];
  return sectionHead('Paramètres et sauvegardes', 'Vos données restent dans ce navigateur. Rien n’est envoyé à un serveur.') +
    '<section class="grid2"><form class="card form" id="settings-form"><div class="card-h"><h2>Préparation</h2></div>' +
      '<label class="f"><span>Date cible de l’examen</span><input id="s-target" type="date" value="' + S.targetDate + '"></label>' +
      '<label class="f"><span>Date de repli</span><input id="s-fallback" type="date" value="' + S.fallbackDate + '"></label>' +
      sel('s-format', 'Format quotidien par défaut', Object.entries(FORMATS).map(([k, v]) => [k, v.label + ' — ' + v.n + ' questions']), S.format) +
      '<label class="f"><span>Plafond quotidien de questions</span><input id="s-cap" type="number" min="5" max="200" value="' + S.dailyCap + '"></label>' +
      sel('s-cons', 'Jour de consolidation hebdomadaire', [[-1, 'Aucun']].concat(dayNames.map((n, i) => [i, n])), S.consolidationDay) +
      '<label class="f"><span>Minutes disponibles par jour</span><input id="s-min" type="number" min="5" max="300" value="' + S.minutesPerDay + '"></label>' +
      '<label class="f"><span>Jours de révision par semaine</span><input id="s-days" type="number" min="1" max="7" value="' + S.daysPerWeek + '"></label>' +
      sel('s-lang', 'Langue des questions', [['fr', 'Français'], ['en', 'Anglais'], ['bi', 'Bilingue (anglais, traduction à la demande)']], S.lang) +
      sel('s-theme', 'Thème', [['system', 'Selon le système'], ['light', 'Clair'], ['dark', 'Sombre']], S.theme) +
      '<h3>Répétition espacée (jours)</h3><div class="row">' +
      '<label class="f sm"><span>1re erreur</span><input id="s-i-fail" type="number" min="1" max="2" value="' + S.intervals.fail + '"></label>' +
      '<label class="f sm"><span>Nouvelle erreur</span><input id="s-i-again" type="number" min="1" max="2" value="' + S.intervals.failAgain + '"></label>' +
      '<label class="f sm"><span>Réussite après erreur</span><input id="s-i-rec" type="number" min="1" max="7" value="' + S.intervals.recover + '"></label>' +
      '<label class="f sm"><span>Réussites répétées</span><input id="s-i-steps" type="text" value="' + S.intervals.steps.join(', ') + '"></label></div>' +
      '<div class="row">' + '<button type="submit" class="btn primary">Enregistrer les paramètres</button></div></form>' +
    '<div class="card"><div class="card-h"><h2>Sauvegardes</h2></div>' +
      '<p class="small">Exportez régulièrement : effacer les données du navigateur efface aussi votre progression.</p>' +
      '<div class="row">' + btn('Exporter la sauvegarde (JSON)', 'export', 'json', 'primary sm') + btn('Exporter les résultats (CSV)', 'export', 'csv', 'ghost sm') + '</div>' +
      (UI.exportText ? '<label class="f"><span>' + esc(UI.exportLabel) + ' — si le téléchargement est bloqué, copiez ce texte</span><textarea id="export-area" rows="6" readonly>' + esc(UI.exportText) + '</textarea></label><div class="row">' + btn('Copier', 'copyExport', '', 'ghost sm') + '</div>' : '') +
      '<h3>Importer une sauvegarde</h3><p class="small">Remplace l’état actuel après validation du fichier.</p><input id="imp-file" type="file" accept=".json,application/json"><details class="small"><summary>Ou coller le contenu JSON</summary><textarea id="imp-text" rows="4"></textarea>' + btn('Importer le texte collé', 'importText', '', 'ghost sm') + '</details>' +
      '<h3>Ajouter des questions</h3><p class="small">Fichier JSON au format de questions.json (objet avec « questions » ou tableau). Chaque question est validée ; les identifiants doivent être uniques.</p><input id="imp-q" type="file" accept=".json,application/json">' +
      '<p class="small">Banque actuelle : <b>' + BASE_QUESTIONS.length + '</b> questions de base + <b>' + STATE.customQuestions.length + '</b> ajoutée(s).' + (STATE.customQuestions.length ? ' ' + btn('Retirer les questions ajoutées', 'clearCustom', '', 'link') : '') + '</p>' +
      (!BASE_QUESTIONS.length ? '<h3>Charger questions.json</h3><input id="imp-bank" type="file" accept=".json,application/json">' : '') +
      '<h3>Réinitialiser</h3><p class="small">Efface toutes vos séances, statistiques et paramètres. Tapez <b>RÉINITIALISER</b> pour confirmer.</p><div class="row"><input id="reset-confirm" type="text" autocomplete="off" aria-label="Confirmation de réinitialisation">' + btn('Tout réinitialiser', 'reset', '', 'danger sm') + '</div>' +
      '<p class="small muted">Version ' + APP_VERSION + ' · ' + BANK.list.length + ' questions · pondération : ' + esc(WEIGHT_SOURCE) + '.</p></div></section>';
};

/* ------------------------------ Événements ---------------------------- */
function onClick(ev) {
  const el = ev.target.closest('[data-act]');
  if (!el) return;
  const act = el.dataset.act; const arg = el.dataset.arg;
  const H = Actions[act]; if (H) { ev.preventDefault(); H(arg, el); }
}
const Actions = {
  go: (v) => { location.hash = '#' + v; UI.focusMain = true; },
  start: (m) => startSession(m),
  startDomain: (d) => startSession('targeted', { domain: +d, n: 10 }),
  startPoint: (p) => startSession('targeted', { point: p, n: Math.min(10, (BANK.byPoint[p] || []).length) }),
  startOne: (id) => startSession('one', { qid: id }),
  startTarget: (n) => startSession('targeted', { domain: +($('#tg-d') ? $('#tg-d').value : 1), n: +n }),
  startTrans: (n) => startSession('transversal', { n: +n }),
  startMock: (n) => startSession('mock', { n: +n }),
  format: (f) => { STATE.settings.format = f; save(); render(); },
  lang: (l) => { STATE.settings.lang = l; if (RUN && !RUN.answered && !RUN.done) RUN.lang = l; save(); render(); },
  theme: () => { const order = ['system', 'light', 'dark']; STATE.settings.theme = order[(order.indexOf(STATE.settings.theme) + 1) % 3]; applyTheme(); save(); toast('Thème : ' + ({ system: 'selon le système', light: 'clair', dark: 'sombre' })[STATE.settings.theme]); },
  pick: (i) => {
    if (!RUN || RUN.answered) return; i = +i; const q = RUN.items[RUN.i].q; const c = RUN.choice; const k = c.indexOf(i);
    if (q.type === 'multi' || q.type === 'order') { if (k >= 0) c.splice(k, 1); else if (q.type === 'order' || c.length < q.answer.length) c.push(i); }
    else RUN.choice = [i];
    render();
  },
  resetOrder: () => { RUN.choice = []; render(); },
  toggleTr: () => { RUN.showTr = !RUN.showTr; render(); },
  submit: (a, el) => { if (el.classList.contains('disabled')) return; submitAnswer(); },
  next: () => nextQuestion(),
  abort: () => { if (RUN.rec.items.length === 0) STATE.sessions = STATE.sessions.filter((s) => s !== RUN.rec); else snapshotErrors(STATE, dayKey()); save(true); RUN = null; stopTimer(); location.hash = '#quiz'; render(); },
  finishMock: () => finishSession(false),
  endRun: (v) => { RUN = null; location.hash = '#' + v; render(); },
  endErrors: () => { RUN = null; startSession('errors'); },
  understood: () => { const r = RUN.results[RUN.i]; r.understood = !r.understood; if (r.understood) markUnderstood(STATE, RUN.items[RUN.i].q.id); save(); render(); },
  review: () => { const r = RUN.results[RUN.i]; r.review = true; markForReview(STATE, RUN.items[RUN.i].q.id, dayKey()); save(); render(); toast('Question programmée pour demain.'); },
  errcat: (c) => { const r = RUN.results[RUN.i]; r.cat = c; r.item.cat = c; const e = STATE.errors.find((x) => x.qid === RUN.items[RUN.i].q.id && !x.consolidatedOn); if (e) e.cat = c; save(); render(); },
  point: (p) => { const cat = POINT_BY_ID[p].cat; UI.openPoint = UI.openPoint === p ? null : p; const v = cat === 'faible' ? 'faibles' : cat === 'intermediaire' ? 'ameliorer' : 'forts'; if (currentView() !== v) location.hash = '#' + v; else render(); },
  explore: (d) => { UI.explorer.d = +d; UI.explorer.sub = ''; render(); const x = $('#explorer'); if (x) x.scrollIntoView({ behavior: 'smooth' }); },
  flip: () => { UI.flash.flip = !UI.flash.flip; render(); },
  fcok: (id) => { const f = STATE.flash[id] || (STATE.flash[id] = { ok: 0, ko: 0, last: null }); f.ok++; f.last = dayKey(); save(); Actions.fcnext(); },
  fcko: (id) => { const f = STATE.flash[id] || (STATE.flash[id] = { ok: 0, ko: 0, last: null }); f.ko++; f.last = dayKey(); save(); Actions.fcnext(); },
  fcnext: () => { UI.flash.i = (UI.flash.i + 1) % UI.flash.order.length; UI.flash.flip = false; render(); },
  export: (kind) => {
    const stamp = dayKey();
    if (kind === 'json') { UI.exportText = JSON.stringify(Object.assign({ app: 'cissp-z2h', appVersion: APP_VERSION, exportedAt: new Date().toISOString() }, STATE), null, 1); UI.exportLabel = 'Sauvegarde JSON'; download('cissp-sauvegarde-' + stamp + '.json', UI.exportText, 'application/json'); }
    else { UI.exportText = toCSV(STATE, BANK); UI.exportLabel = 'Résultats CSV'; download('cissp-resultats-' + stamp + '.csv', '﻿' + UI.exportText, 'text/csv'); }
    render();
  },
  copyExport: () => { const t = $('#export-area'); const done = () => toast('Copié.'); try { navigator.clipboard.writeText(t.value).then(done, () => { t.select(); toast('Texte sélectionné : copiez-le avec Ctrl+C.'); }); } catch (e) { t.select(); toast('Texte sélectionné : copiez-le avec Ctrl+C.'); } },
  importText: () => importStateText($('#imp-text').value),
  clearCustom: () => { STATE.customQuestions = []; rebuildBank(); save(true); render(); toast('Questions ajoutées retirées.'); },
  reset: () => {
    const v = ($('#reset-confirm') || {}).value || '';
    if (v.trim().toUpperCase() !== 'RÉINITIALISER') return toast('Tapez RÉINITIALISER pour confirmer.');
    STATE = freshState(); RUN = null; UI.exportText = ''; rebuildBank(); applyTheme(); save(true); location.hash = '#dashboard'; render(); toast('Portail réinitialisé.');
  },
};
function onChange(ev) {
  const t = ev.target; const id = t.id;
  const map = {
    'ex-d': () => { UI.explorer.d = +t.value; UI.explorer.sub = ''; }, 'ex-sub': () => (UI.explorer.sub = t.value), 'ex-diff': () => (UI.explorer.diff = +t.value), 'ex-hist': () => (UI.explorer.hist = t.value),
    'pf-d': () => (pf().d = +t.value), 'pf-st': () => (pf().st = t.value), 'pf-pr': () => (pf().pr = +t.value), 'pf-sort': () => (pf().sort = t.value),
    'er-cat': () => (UI.filters.err.cat = t.value), 'er-d': () => (UI.filters.err.d = +t.value),
    'fc-src': () => (UI.filters.fc.src = t.value), 'fc-d': () => (UI.filters.fc.d = +t.value),
    'gl-d': () => (UI.filters.gl.d = +t.value), 'tg-d': () => (UI.tgd = +t.value),
  };
  if (map[id]) { map[id](); if (id !== 'tg-d') render(); return; }
  if (t.dataset.err) { const e = STATE.errors.find((x) => x.id === t.dataset.err); if (e) { e.cat = t.value || null; save(); toast('Cause enregistrée.'); } return; }
  if (id === 'imp-file' || id === 'imp-q' || id === 'imp-bank') {
    const f = t.files && t.files[0]; if (!f) return;
    const rd = new FileReader();
    rd.onload = () => { if (id === 'imp-file') importStateText(rd.result); else if (id === 'imp-q') importQuestions(rd.result); else importBank(rd.result); t.value = ''; };
    rd.onerror = () => toast('Lecture du fichier impossible.');
    rd.readAsText(f);
  }
}
function pf() { const v = currentView(); const cat = v === 'faibles' ? 'faible' : v === 'ameliorer' ? 'intermediaire' : 'fort'; return UI.filters[cat]; }
function onInput(ev) {
  const t = ev.target;
  if (t.id === 'ex-text' || t.id === 'gl-t') {
    if (t.id === 'ex-text') UI.explorer.text = t.value; else UI.filters.gl.t = t.value;
    clearTimeout(UI.inputT); UI.inputT = setTimeout(() => { const pos = t.selectionStart; render(); const n = document.getElementById(t.id); if (n) { n.focus(); n.setSelectionRange(pos, pos); } }, 200);
  }
}
function onSubmit(ev) {
  if (ev.target.id !== 'settings-form') return; ev.preventDefault();
  const v = (id) => document.getElementById(id).value;
  const raw = clone(STATE.settings);
  Object.assign(raw, { targetDate: v('s-target'), fallbackDate: v('s-fallback'), format: v('s-format'), dailyCap: v('s-cap'), consolidationDay: v('s-cons'), minutesPerDay: v('s-min'), daysPerWeek: v('s-days'), lang: v('s-lang'), theme: v('s-theme') });
  raw.intervals = { fail: v('s-i-fail'), failAgain: v('s-i-again'), recover: v('s-i-rec'), steps: v('s-i-steps').split(/[,; ]+/).filter(Boolean).map(Number) };
  if (raw.fallbackDate < raw.targetDate) return toast('La date de repli doit suivre la date cible.');
  const norm = normalizeState({ settings: raw }).settings;
  STATE.settings = norm; applyTheme(); save(true); render(); toast('Paramètres enregistrés.');
}
function onKey(ev) {
  if (!RUN || RUN.done || currentView() !== 'quiz' || /input|textarea|select/i.test(ev.target.tagName)) return;
  const q = RUN.items[RUN.i].q;
  const k = ev.key.toUpperCase();
  if (!RUN.answered && L.slice(0, q.fr.options.length).includes(k) && k.length === 1) { Actions.pick(L.indexOf(k)); }
  else if (ev.key === 'Enter' && !/button|a|summary/i.test(ev.target.tagName)) { if (!RUN.answered) submitAnswer(); else nextQuestion(); }
}

function importStateText(txt) {
  try { const raw = JSON.parse(txt); const s = normalizeState(raw); STATE = s; RUN = null; rebuildBank(); applyTheme(); save(true); render(); toast('Sauvegarde importée : ' + s.sessions.length + ' séance(s).'); }
  catch (e) { toast('Import refusé : ' + e.message); }
}
function importQuestions(txt) {
  try {
    const raw = JSON.parse(txt); const list = Array.isArray(raw) ? raw : raw.questions;
    if (!Array.isArray(list)) throw new Error('aucune liste de questions trouvée');
    const ids = new Set(BANK.list.map((q) => q.id)); const okq = []; const bad = [];
    list.forEach((q, i) => { const e = validateQuestion(q, ids); if (e.length) bad.push((q && q.id) || '#' + (i + 1)); else { ids.add(q.id); okq.push(q); } });
    STATE.customQuestions = STATE.customQuestions.concat(okq); rebuildBank(); save(true); render();
    toast(okq.length + ' question(s) ajoutée(s)' + (bad.length ? ', ' + bad.length + ' refusée(s) : ' + bad.slice(0, 5).join(', ') : '') + '.');
  } catch (e) { toast('Import refusé : ' + e.message); }
}
function importBank(txt) {
  try { const raw = JSON.parse(txt); const list = Array.isArray(raw) ? raw : raw.questions; const ids = new Set(); const okq = list.filter((q) => { const e = validateQuestion(q, ids); if (!e.length) ids.add(q.id); return !e.length; }); if (!okq.length) throw new Error('aucune question valide'); BASE_QUESTIONS = okq; UI.bankError = null; rebuildBank(); render(); toast(okq.length + ' questions chargées pour cette visite.'); }
  catch (e) { toast('Chargement refusé : ' + e.message); }
}
function download(name, text, type) {
  try { const a = document.createElement('a'); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); } catch (e) { /* le texte reste affiché pour copie */ }
}
function toast(msg) {
  const t = $('#toast'); if (!t) return; t.textContent = msg; t.hidden = false; clearTimeout(UI.toastT); UI.toastT = setTimeout(() => (t.hidden = true), 3800);
}

if (typeof window !== 'undefined' && typeof document !== 'undefined' && !globalThis.__CISSP_NO_BOOT__) {
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();
}
