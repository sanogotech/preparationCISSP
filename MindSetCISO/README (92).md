# 🛡️ CISO Portail — Guide de révision CISSP

> **Le bon CISO pense comme un dirigeant, analyse comme un auditeur, anticipe comme un attaquant et agit comme un gestionnaire de crise.**

**Formation Certification CISSP** · SANOGO Souleymane, Consultant Formateur et Expert SI · Abidjan, octobre 2026

Ce document accompagne le **CISO Portail**, un site de révision de 10 pages HTML. Il réunit l'essentiel à relire : définitions, tableaux de synthèse, nuances, sagesses, checklists, focus de révision et **40 questions pièges corrigées**.

---

## 📑 Sommaire

1. [Contenu du portail](#1-contenu-du-portail)
2. [Démarrage rapide](#2-démarrage-rapide)
3. [L'examen CISSP en bref](#3-lexamen-cissp-en-bref)
4. [Les 12 réflexes du mindset CISO](#4-les-12-réflexes-du-mindset-ciso)
5. [Focus de révision par domaine](#5-focus-de-révision-par-domaine)
6. [Plan de révision sur 5 jours](#6-plan-de-révision-sur-5-jours)
7. [Tableaux de synthèse](#7-tableaux-de-synthèse)
8. [Définitions essentielles](#8-définitions-essentielles)
9. [Nuances à ne pas confondre](#9-nuances-à-ne-pas-confondre)
10. [Sagesses du CISO](#10-sagesses-du-ciso)
11. [Moyens mnémotechniques](#11-moyens-mnémotechniques)
12. [Top 40 des questions pièges et leurs réponses](#12-top-40-des-questions-pièges-et-leurs-réponses)
13. [Checklists de préparation](#13-checklists-de-préparation)
14. [Pièges à éviter](#14-pièges-à-éviter)

---

## 1. Contenu du portail

| Fichier | Contenu |
|---|---|
| `index.html` | **CISO Portail** : tableau de bord de progression, accès aux modules, plan sur 5 jours, examen blanc de 50 ou 100 questions, conseils pour le jour J |
| `mindset.html` | **Mindset CISO 150** : 150 principes en 10 catégories, avec flashcards, mode « par cœur », mnémotechniques et matrice domaines × cycle de vie |
| `d1.html` à `d8.html` | **Un module par domaine** : objectifs officiels, concepts clés, schémas, tableaux comparatifs, scénarios d'examen, quiz de 20 questions, glossaire anglais-français et checklist |

**Chiffres clés :** 150 principes · 160 questions de quiz · 51 scénarios · 114 termes de glossaire · 57 faits à connaître par cœur · 84 moyens mnémotechniques.

Chaque fiche du Mindset 150 contient : le principe, 2 exemples, un retour d'expérience, une sagesse, un tip d'examen, une nuance et, quand c'est utile, un mnémotechnique. Elle est rattachée à un domaine CISSP et à une fonction du NIST CSF 2.0.

---

## 2. Démarrage rapide

1. Décompresser le ZIP **CISO_Portail_CISSP.zip** dans un dossier.
2. Ouvrir **`index.html`** dans un navigateur récent (Chrome, Edge, Firefox, Safari). Aucune installation ni connexion Internet n'est nécessaire.
3. Naviguer entre les modules avec la barre du haut.
4. La progression (fiches maîtrisées, scores aux quiz, checklists, examen blanc) est **enregistrée dans le navigateur** de chaque personne. Elle ne passe pas d'un appareil à l'autre, et elle est perdue si l'on vide les données du navigateur.
5. Le bouton « Réinitialiser ma progression » se trouve en bas du portail.

---

## 3. L'examen CISSP en bref

| Élément | Détail |
|---|---|
| Format (anglais) | Adaptatif (CAT), **100 à 150 questions**, **3 heures** |
| Seuil de réussite | **700 / 1000** |
| Retour en arrière | **Impossible** : chaque réponse est définitive |
| Expérience requise | **5 ans** rémunérés dans au moins **2 des 8 domaines**. Un diplôme ou une certification reconnue dispense d'1 an |
| Sans l'expérience | Statut d'**Associate of (ISC)²** en attendant de l'acquérir |
| Après la réussite | **Endorsement** (validation) par un membre certifié dans les **9 mois** |
| Maintien | **120 CPE sur 3 ans** et une cotisation annuelle (AMF) |

### Poids des domaines (plan 2024)

| Domaine | Intitulé | Poids |
|---|---|---|
| D1 | Sécurité et gestion des risques | **16 %** |
| D2 | Sécurité des actifs | 10 % |
| D3 | Architecture et ingénierie de sécurité | 13 % |
| D4 | Sécurité des réseaux et communications | 13 % |
| D5 | Gestion des identités et des accès | 13 % |
| D6 | Évaluation et tests de sécurité | 12 % |
| D7 | Opérations de sécurité | 13 % |
| D8 | Sécurité du développement logiciel | 10 % |

---

## 4. Les 12 réflexes du mindset CISO

| # | Réflexe | À l'examen |
|---|---|---|
| 1 | **Les personnes d'abord** | Dès qu'une vie est en jeu, la réponse qui protège les personnes l'emporte |
| 2 | **Penser manager, pas technicien** | La réponse de gouvernance bat la réponse technique |
| 3 | **La direction décide et assume** | Le CISO conseille ; c'est la haute direction qui accepte le risque |
| 4 | **Pas de risque sans actif, menace et vulnérabilité** | Il faut identifier avant de traiter |
| 5 | **Comprendre avant d'agir** | « EN PREMIER » veut souvent dire évaluer, identifier ou informer |
| 6 | **Le coût du contrôle < la valeur protégée** | Un contrôle trop cher n'est jamais la bonne réponse |
| 7 | **People, Process, Technology** | L'outil vient en dernier |
| 8 | **Le risque zéro n'existe pas** | On réduit, transfère, évite ou accepte, mais on n'ignore jamais |
| 9 | **La conformité est un plancher** | Être conforme ne veut pas dire être sécurisé |
| 10 | **Défense en profondeur** | Plusieurs couches valent mieux qu'une seule barrière |
| 11 | **Assume breach** | On prévoit la détection, la réponse et la reprise |
| 12 | **L'éthique avant l'employeur** | La société passe avant les intérêts de l'organisation |

---

## 5. Focus de révision par domaine

| Domaine | Ce qu'il faut absolument maîtriser | Pièges fréquents |
|---|---|---|
| **D1** | Calculs SLE/ALE, traitements du risque, hiérarchie documentaire, éthique, due care et due diligence, BIA, droit pénal, civil et administratif, propriété intellectuelle, NIST RMF et CSF | Laisser le CISO accepter le risque, confondre politique et guide, oublier le soutien de la direction |
| **D2** | Rôles owner, custodian, controller et processor, classification, cycle de vie de la donnée, rémanence et destruction, états de la donnée, scoping et tailoring | Dégausser un SSD, laisser l'IT classer les données, oublier le legal hold |
| **D3** | Modèles BLP, Biba, Clark-Wilson et Brewer-Nash, cryptographie (clés, signature, modes), PKI, Common Criteria, attaques cryptanalytiques, sécurité physique, incendie et énergie | Inverser les règles de BLP et Biba, se tromper de clé pour signer, attribuer la non-répudiation au HMAC |
| **D4** | OSI et TCP/IP, ports, IPsec (AH/ESP, transport/tunnel), Wi-Fi, 802.1X, RADIUS et TACACS+, pare-feu, attaques réseau | Croire qu'AH ou DNSSEC chiffrent, confondre les couches |
| **D5** | IAAA, facteurs, FAR/FRR/CER, DAC/MAC/RBAC/ABAC, Kerberos, SAML/OAuth/OIDC, cycle JML, PAM | Compter mot de passe + PIN comme deux facteurs, prendre OAuth pour de l'authentification |
| **D6** | Types d'audit, scan ou pentest, boîtes noire/grise/blanche, SAST/DAST/fuzzing, SOC 1/2/3 Type I/II, KPI et KRI | Lancer un pentest sans autorisation écrite, accepter un SOC 2 Type I comme preuve d'efficacité |
| **D7** | Réponse aux incidents (7 étapes), preuves et volatilité, sauvegardes, sites, RAID, tests de PRA, changements, correctifs | Éteindre une machine compromise, prendre le RAID pour une sauvegarde, rapatrier le critique en premier |
| **D8** | SDLC, modèles de développement, CMM et SAMM, OWASP, ACID, failles (injection, XSS, CSRF, TOCTOU), SBOM, logiciels acquis | Valider les entrées côté client seulement, oublier le séquestre du code source |

**Priorité de révision :** D1 (le plus lourd et la base du raisonnement) → D3 et D7 (les plus vastes) → D4 et D5 → D6, D2 et D8.

---

## 6. Plan de révision sur 5 jours

| Jour | Thème | Domaines | Fiches Mindset | Activités |
|---|---|---|---|---|
| **Jour 1** | Gouverner le risque | D1 + D2 | Catégories 1 à 4 | Quiz D1 et D2, calculs de risque |
| **Jour 2** | Concevoir sûr | D3 | Catégorie 5 | Modèles, cryptographie et physique par cœur |
| **Jour 3** | Réseaux et identités | D4 + D5 | Catégories 6 et 7 | Ports, OSI, IPsec, Kerberos, fédération |
| **Jour 4** | Tester et opérer | D6 + D7 | Catégories 8 et 9 | Incidents, preuves, sauvegardes, PRA |
| **Jour 5** | Développer et s'entraîner | D8 | Catégorie 10 | **Examen blanc de 100 questions**, puis révision des erreurs |

**Méthode quotidienne :** lire le module → faire le quiz → réviser ses erreurs → passer les flashcards Mindset du domaine → cocher la checklist.

---

## 7. Tableaux de synthèse

### 7.1 Formules du risque

| Notion | Formule | Exemple |
|---|---|---|
| SLE (perte unitaire) | AV × EF | 100 M FCFA × 40 % = 40 M |
| ALE (perte annuelle) | SLE × ARO | 40 M × 0,5 = 20 M FCFA/an |
| Valeur d'un contrôle | ALE avant – ALE après – coût annuel | 20 – 4 – 8 = **8 M FCFA/an** |
| Risque | Menace × Vulnérabilité × Impact | — |
| Risque résiduel | Risque total – effet des contrôles | Accepté par la direction |
| Clés symétriques | n(n−1)/2 | 100 personnes → 4 950 |
| Clés asymétriques | 2n | 100 personnes → 200 |
| Continuité | MTD ≥ RTO + WRT | — |

### 7.2 Traitements du risque

| Traitement | Principe | Exemple |
|---|---|---|
| Réduire | Ajouter des contrôles | MFA, segmentation |
| Transférer | Faire porter l'impact financier par un tiers | Cyber-assurance |
| Éviter | Arrêter l'activité risquée | Ne plus stocker de cartes bancaires |
| Accepter | Décision documentée de la direction | Note signée, revue annuelle |
| ❌ Ignorer | **Jamais acceptable** | — |

### 7.3 Hiérarchie documentaire

| Document | Caractère | Exemple |
|---|---|---|
| Politique | Obligatoire, haut niveau | PSSI signée par le DG |
| Norme | Obligatoire, précise | Chiffrement AES-256 |
| Baseline | Niveau minimal obligatoire | CIS Benchmark Windows |
| Procédure | Étapes obligatoires | Création d'un compte |
| Guide | **Facultatif** | Bonnes pratiques de mots de passe |

### 7.4 Types de contrôles

| Type ↓ / Fonction → | Préventif | Détectif | Correctif | Dissuasif | Récupération |
|---|---|---|---|---|---|
| **Administratif** | Politique | Revue des accès | Procédure disciplinaire | Sanctions annoncées | PCA |
| **Technique** | Pare-feu, MFA | IDS, SIEM | Antivirus qui nettoie | Bannière de connexion | Sauvegardes |
| **Physique** | Serrure, clôture | Caméra, alarme | Extincteur | Panneau « sous surveillance » | Site de secours |

### 7.5 Droit et enquêtes

| Type | Parties | Niveau de preuve |
|---|---|---|
| Pénal | État contre individu | Au-delà du doute raisonnable |
| Civil | Personne contre personne | Prépondérance de la preuve |
| Administratif / réglementaire | Régulateur contre organisation | Selon le texte |

| Propriété intellectuelle | Protection |
|---|---|
| Brevet | Invention publiée, environ 20 ans |
| Droit d'auteur | Œuvre originale, automatique |
| Marque | Signe distinctif, renouvelable |
| Secret d'affaires | Tant qu'il reste secret (NDA, contrôles) |

### 7.6 Données

| Rôle | Responsabilité |
|---|---|
| Owner (propriétaire) | Classe, autorise, assume le risque |
| Custodian (dépositaire) | Protège au quotidien (sauvegardes, droits) |
| Steward | Qualité des données |
| Controller (responsable de traitement) | Décide des finalités et des moyens |
| Processor (sous-traitant) | Traite pour le compte du controller |

| Support | Dégaussage | Méthode recommandée |
|---|---|---|
| Disque magnétique | ✅ Efficace | Purge ou destruction |
| SSD / flash | ❌ Inefficace | Effacement cryptographique ou destruction |
| Optique | ❌ Inefficace | Broyage, incinération |

### 7.7 Modèles de sécurité

| Modèle | Protège | Règles |
|---|---|---|
| Bell-LaPadula | Confidentialité | No read up · No write down (*) |
| Biba | Intégrité | No read down · No write up |
| Clark-Wilson | Intégrité commerciale | Transactions bien formées, triplet sujet-programme-objet, séparation des tâches |
| Brewer-Nash | Conflits d'intérêts | Accès dynamique (muraille de Chine) |
| Graham-Denning | Gestion des droits | 8 règles sur sujets et objets |
| Take-Grant | Transfert de droits | Graphe take / grant / create / remove |

### 7.8 Cryptographie

| Besoin | Moyen |
|---|---|
| Confidentialité | Chiffrement (AES ; clé publique du destinataire) |
| Intégrité | Hachage (SHA-2, SHA-3) |
| Intégrité + origine entre deux parties | HMAC (sans non-répudiation) |
| Non-répudiation | Signature numérique (clé **privée** de l'émetteur) |
| Échange de clés | Diffie-Hellman / ECDHE |

| Algorithme | Type | Statut |
|---|---|---|
| DES (56 bits) | Symétrique | Cassé |
| 3DES | Symétrique | Obsolète |
| AES (128/192/256) | Symétrique | Standard |
| RC4 | Flux | Cassé |
| RSA ≥ 2048 | Asymétrique | Usuel |
| ECC 256 ≈ RSA 3072 | Asymétrique | Recommandé |
| MD5, SHA-1 | Hachage | Obsolètes |

| Mode | À retenir |
|---|---|
| ECB | ❌ À proscrire : il révèle les motifs |
| CBC | Chaînage avec IV |
| CTR | Compteur, parallélisable |
| GCM | Chiffrement authentifié (confidentialité + intégrité) |

### 7.9 Réseaux

| Couche OSI | Exemples |
|---|---|
| 7 Application | HTTP, DNS, SMTP · WAF |
| 6 Présentation | Formats, chiffrement |
| 5 Session | RPC, sessions |
| 4 Transport | TCP, UDP · ports |
| 3 Réseau | IP, ICMP, IPsec · routeur |
| 2 Liaison | Ethernet, ARP, 802.1X · switch |
| 1 Physique | Câbles, ondes, hub |

| Port | Protocole | Port | Protocole |
|---|---|---|---|
| 20/21 | FTP | 389 / 636 | LDAP / LDAPS |
| 22 | SSH, SFTP | 443 | HTTPS |
| 23 | Telnet | 445 | SMB |
| 25 | SMTP | 88 | Kerberos |
| 53 | DNS | 161/162 | SNMP |
| 80 | HTTP | 3389 | RDP |

| IPsec | Rôle |
|---|---|
| AH | Intégrité + authentification, **sans** confidentialité |
| ESP | Confidentialité (+ intégrité) |
| Mode transport | Charge utile seule (hôte à hôte) |
| Mode tunnel | Paquet entier (site à site) |

| Wi-Fi | Statut |
|---|---|
| WEP | Cassé (RC4) |
| WPA (TKIP) | Obsolète |
| WPA2 | AES-CCMP |
| WPA3 | SAE, recommandé |

### 7.10 Identités et accès

| Facteur | Exemple |
|---|---|
| Type 1 · ce que l'on sait | Mot de passe, PIN |
| Type 2 · ce que l'on possède | Carte, jeton, clé FIDO2 |
| Type 3 · ce que l'on est | Empreinte, iris, visage |

| Biométrie | Signification |
|---|---|
| FRR · Type I | Légitime rejeté (gênant) |
| FAR · Type II | Imposteur accepté (**le plus grave**) |
| CER / EER | FAR = FRR ; plus il est bas, mieux c'est |

| Modèle d'accès | Qui décide |
|---|---|
| DAC | Le propriétaire |
| MAC | Le système (étiquettes, habilitations) |
| RBAC | Le rôle |
| Rule-based | Des règles globales |
| ABAC | Les attributs et le contexte |

| Protocole | Fonction |
|---|---|
| SAML 2.0 | Authentification (assertions XML) |
| OAuth 2.0 | **Autorisation** déléguée |
| OpenID Connect | Authentification sur OAuth (JWT) |
| Kerberos | Tickets : AS → TGT → TGS → ticket de service |

### 7.11 Tests et audit

| Rapport | Contenu | Diffusion |
|---|---|---|
| SOC 1 | Contrôles financiers | Client et ses auditeurs |
| SOC 2 | Sécurité, disponibilité, intégrité, confidentialité, vie privée | Restreinte |
| SOC 3 | Résumé public | Publique |
| **Type I** | Conception à une date | — |
| **Type II** | Efficacité sur une période | — |

| Test | Connaissance du testeur |
|---|---|
| Boîte noire | Aucune |
| Boîte grise | Partielle |
| Boîte blanche | Complète |

### 7.12 Opérations et continuité

| Réponse aux incidents (ISC2) |
|---|
| 1. Détection → 2. Réponse → 3. Atténuation → 4. Rapport → 5. Reprise → 6. Remédiation → 7. Leçons apprises |

| Sauvegarde | Contenu | Restauration |
|---|---|---|
| Complète | Tout | La plus simple |
| Incrémentielle | Depuis la dernière sauvegarde | Complète + **toutes** les incrémentielles (la plus lente) |
| Différentielle | Depuis la dernière **complète** | Complète + **dernière** différentielle |

| Site | Délai | Coût |
|---|---|---|
| Chaud | Minutes à heures | Élevé |
| Tiède | Heures à jours | Moyen |
| Froid | Semaines | Faible |

| RAID | Principe | Tolérance |
|---|---|---|
| 0 | Agrégation | **Aucune** |
| 1 | Miroir | 1 disque |
| 5 | Parité (3 disques min.) | 1 disque |
| 6 | Double parité | 2 disques |
| 10 | Miroirs agrégés | 1 disque par miroir |

| Test de PRA (du plus léger au plus risqué) |
|---|
| Checklist → Walkthrough (sur table) → Simulation → Parallèle → Interruption complète |

| Indicateur | Signification |
|---|---|
| MTD | Durée maximale d'interruption tolérable |
| RTO | Délai de restauration du système |
| WRT | Temps de vérification avant reprise |
| RPO | Perte de données acceptable (fréquence des sauvegardes) |

### 7.13 Développement

| CMM | Niveau |
|---|---|
| 1 | Initial |
| 2 | Reproductible |
| 3 | Défini |
| 4 | Géré quantitativement |
| 5 | Optimisé |

| ACID | Signification |
|---|---|
| Atomicité | Tout ou rien |
| Cohérence | État valide |
| Isolation | Pas d'interférence entre transactions |
| Durabilité | Persiste après une panne |

| Faille | Parade |
|---|---|
| Injection SQL | Requêtes paramétrées |
| XSS | Encodage des sorties, CSP |
| CSRF | Jeton anti-CSRF, SameSite |
| Dépassement de tampon | Vérification des bornes, ASLR, DEP |
| TOCTOU | Opérations atomiques |
| IDOR / BOLA | Autorisation sur chaque objet |

### 7.14 NIST CSF 2.0 et cycle de vie

| Fonction | Rôle |
|---|---|
| **Govern** | Stratégie, rôles, politique, supervision |
| **Identify** | Actifs, risques, fournisseurs |
| **Protect** | Contrôles d'accès, formation, données |
| **Detect** | Surveillance, anomalies |
| **Respond** | Gestion, analyse, communication |
| **Recover** | Restauration, amélioration |

---

## 8. Définitions essentielles

### Gouvernance et risque (D1)

| Terme (EN) | Français | Définition |
|---|---|---|
| Asset | Actif | Tout ce qui a de la valeur pour l'organisation |
| Threat | Menace | Événement potentiel pouvant nuire à un actif |
| Threat agent | Agent de menace | Entité qui réalise la menace |
| Vulnerability | Vulnérabilité | Faiblesse exploitable |
| Risk | Risque | Probabilité qu'une menace exploite une vulnérabilité, avec un impact |
| Exposure | Exposition | Possibilité de subir une perte |
| Safeguard | Mesure préventive | Contrôle mis en place avant l'incident |
| Countermeasure | Contre-mesure | Contrôle mis en place en réponse à une menace |
| Residual risk | Risque résiduel | Risque restant après les contrôles |
| Risk appetite | Appétit pour le risque | Niveau de risque recherché ou accepté |
| Risk tolerance | Tolérance au risque | Écart acceptable autour de l'appétit |
| Due diligence | Diligence préalable | Connaître et évaluer ses risques |
| Due care | Diligence raisonnable | Agir prudemment pour les traiter |
| Governance | Gouvernance | Direction, objectifs, supervision |
| Senior management | Haute direction | Responsable final de la sécurité |
| Compliance | Conformité | Respect des lois, règlements et contrats |
| Exposure factor (EF) | Facteur d'exposition | Part de l'actif perdue lors d'un incident |
| ARO | Taux d'occurrence annuel | Nombre d'incidents attendus par an |
| BIA | Analyse d'impact sur l'activité | Mesure l'effet d'une interruption dans le temps |
| SCRM | Gestion des risques fournisseurs | Maîtrise de la chaîne d'approvisionnement |

### Actifs et données (D2)

| Terme (EN) | Français | Définition |
|---|---|---|
| Classification | Classification | Niveau de sensibilité attribué par le propriétaire |
| Categorization | Catégorisation | Regroupement selon l'impact sur la CIA (FIPS 199) |
| Data remanence | Rémanence | Données résiduelles après suppression |
| Clearing | Effacement | Réécriture résistant aux outils standards |
| Purging | Purge | Effacement résistant aux laboratoires |
| Crypto-shredding | Effacement cryptographique | Destruction des clés de chiffrement |
| Pseudonymization | Pseudonymisation | Remplacement réversible des identifiants |
| Anonymization | Anonymisation | Suppression irréversible du lien avec la personne |
| Tokenization | Tokenisation | Remplacement par un jeton stocké dans un coffre |
| Legal hold | Gel juridique | Suspension de la destruction pour un litige |
| Scoping / Tailoring | Délimitation / Adaptation | Sélection puis ajustement des contrôles |
| EOL / EOS | Fin de vie / fin de support | Fin de commercialisation / fin des correctifs |

### Architecture et cryptographie (D3)

| Terme (EN) | Français | Définition |
|---|---|---|
| Reference monitor | Moniteur de référence | Contrôle abstrait de tous les accès (toujours invoqué, inviolable, vérifiable) |
| TCB | Base informatique de confiance | Composants qui assurent la sécurité du système |
| Security kernel | Noyau de sécurité | Implémentation du moniteur de référence |
| Covert channel | Canal caché | Communication non prévue (temporelle ou de stockage) |
| Aggregation | Agrégation | Combinaison de données qui devient sensible |
| Inference | Inférence | Déduction d'une information cachée |
| Polyinstantiation | Polyinstanciation | Plusieurs versions d'un enregistrement selon le niveau |
| Kerckhoffs's principle | Principe de Kerckhoffs | Seule la clé doit rester secrète |
| Nonrepudiation | Non-répudiation | Impossibilité de nier une action |
| Key escrow | Séquestre de clés | Copie de clé confiée à un tiers |
| Work factor | Facteur de travail | Effort nécessaire pour casser un chiffrement |
| Side-channel attack | Attaque par canal auxiliaire | Exploite temps, énergie ou émissions |
| Certification / Accreditation | Certification / Accréditation | Évaluation technique / décision de la direction |
| CPTED | Prévention par l'aménagement | Sécurité par la conception de l'environnement |
| Fail secure / Fail safe | Défaillance sécurisée / sans danger | Protège les actifs / protège les personnes |

### Réseaux (D4)

| Terme (EN) | Français | Définition |
|---|---|---|
| Encapsulation | Encapsulation | Ajout des en-têtes à chaque couche |
| Stateful firewall | Pare-feu à états | Suit les connexions établies |
| Screened subnet / DMZ | Sous-réseau filtré | Zone pour les services exposés |
| Bastion host | Hôte bastion | Machine durcie exposée ou d'administration |
| Split tunneling | Tunnel partagé | Seul le trafic interne passe dans le VPN |
| NAC | Contrôle d'accès réseau | Vérifie identité et conformité avant connexion |
| Evil twin | Jumeau maléfique | Fausse borne Wi-Fi |
| MITM | Homme du milieu | Interception active d'une communication |
| SDN | Réseau défini par logiciel | Plan de contrôle séparé du plan de données |
| SASE | SASE | Réseau et sécurité livrés en service cloud |

### Identités et accès (D5)

| Terme (EN) | Français | Définition |
|---|---|---|
| Identification | Identification | Déclarer une identité |
| Authentication | Authentification | Prouver son identité |
| Authorization | Autorisation | Accorder des droits |
| Accountability | Imputabilité | Rattacher chaque action à une personne |
| Least privilege | Moindre privilège | Droits minimaux nécessaires |
| Need to know | Besoin d'en connaître | Accès limité aux informations utiles à la mission |
| Privilege creep | Accumulation de privilèges | Droits hérités de postes précédents |
| Provisioning | Approvisionnement | Création des accès |
| IdP / SP | Fournisseur d'identité / de service | Celui qui authentifie / celui qui fait confiance |
| TGT | Ticket d'octroi | Preuve d'authentification Kerberos |
| JIT access | Accès juste à temps | Privilège temporaire |
| Break-glass | Compte d'urgence | Accès exceptionnel en cas de crise |

### Tests et audit (D6)

| Terme (EN) | Français | Définition |
|---|---|---|
| Assessment | Évaluation | Examen d'un ensemble de contrôles |
| Audit | Audit | Vérification formelle et indépendante |
| Rules of engagement | Règles d'engagement | Cadre autorisé d'un test |
| Misuse case | Cas d'abus | Scénario d'attaquant |
| Code coverage | Couverture de code | Part du code exercée par les tests |
| Synthetic transaction | Transaction synthétique | Simulation scriptée d'un utilisateur |
| Clipping level | Seuil de bruit | Seuil avant alerte |
| KPI / KRI | Indicateur de performance / de risque | Performance des contrôles / alerte sur le risque |
| False negative | Faux négatif | Attaque non détectée (le plus dangereux) |

### Opérations (D7)

| Terme (EN) | Français | Définition |
|---|---|---|
| Event / Incident | Événement / Incident | Occurrence observable / atteinte à la sécurité |
| Chain of custody | Chaîne de possession | Traçabilité de chaque manipulation d'une preuve |
| Order of volatility | Ordre de volatilité | Collecter d'abord le plus éphémère |
| Containment | Confinement | Limiter l'extension d'un incident |
| Root cause analysis | Analyse des causes racines | Recherche de l'origine profonde |
| CAB | Comité des changements | Approuve les changements |
| Enticement / Entrapment | Incitation / Provocation | Légal / illégal |
| Duress | Contrainte | Personne agissant sous la menace |
| MTBF / MTTR | Temps moyen entre pannes / de réparation | Fiabilité / délai de remise en état |

### Développement (D8)

| Terme (EN) | Français | Définition |
|---|---|---|
| SDLC | Cycle de vie du développement | Étapes de fabrication d'un logiciel |
| Shift left | Décalage vers la gauche | Intégrer la sécurité plus tôt |
| SBOM | Nomenclature logicielle | Inventaire des composants |
| SCA | Analyse de composition | Vulnérabilités et licences des dépendances |
| Logic bomb | Bombe logique | Code déclenché par une condition |
| Maintenance hook | Porte de maintenance | Porte dérobée laissée par un développeur |
| TOCTOU | Condition de course | Écart entre vérification et usage |
| Cohesion / Coupling | Cohésion / Couplage | Forte cohésion et faible couplage = bonne conception |
| Source code escrow | Séquestre du code source | Code déposé chez un tiers |
| COTS | Logiciel du commerce | Produit acheté tel quel |

---

## 9. Nuances à ne pas confondre

| Notion A | Notion B | La différence |
|---|---|---|
| Due diligence | Due care | Connaître et évaluer **vs** agir et corriger |
| Gouvernance | Management | Fixer la direction **vs** exécuter |
| Politique | Guide | Obligatoire **vs** facultatif |
| Conformité | Sécurité | Respect d'un référentiel **vs** protection réelle face aux menaces |
| Transférer le risque | Transférer la responsabilité | Possible (financier) **vs** impossible |
| Owner | Custodian | Décide **vs** exécute |
| Controller | Processor | Fixe les finalités **vs** traite pour le compte d'autrui |
| Pseudonymisation | Anonymisation | Réversible, donnée personnelle **vs** irréversible, plus personnelle |
| Clearing | Purging | Résiste aux outils standards **vs** aux laboratoires |
| Fail safe | Fail secure | Protège les personnes **vs** protège les actifs |
| Bell-LaPadula | Biba | Confidentialité **vs** intégrité (règles inversées) |
| Hachage | HMAC | Intégrité seule **vs** intégrité + origine (clé partagée) |
| HMAC | Signature | Pas de non-répudiation **vs** non-répudiation |
| Certification | Accréditation | Évaluation technique **vs** décision de la direction |
| AH | ESP | Intégrité seule **vs** confidentialité |
| DNSSEC | DoH / DoT | Authenticité **vs** confidentialité des requêtes |
| IDS | IPS | Alerte **vs** bloque |
| Authentification | Autorisation | Qui je suis **vs** ce que je peux faire |
| OAuth | OpenID Connect | Autorisation **vs** authentification |
| Moindre privilège | Besoin d'en connaître | Droits **vs** informations |
| FRR (Type I) | FAR (Type II) | Gênant **vs** dangereux |
| Scan de vulnérabilités | Test d'intrusion | Recenser **vs** exploiter pour prouver |
| SOC 2 Type I | SOC 2 Type II | Photo à une date **vs** film sur une période |
| KPI | KRI | Performance passée **vs** signal de risque futur |
| Événement | Incident | Observable **vs** atteinte à la sécurité |
| Incrémentielle | Différentielle | Depuis la dernière sauvegarde **vs** depuis la dernière complète |
| RAID | Sauvegarde | Disponibilité **vs** récupération |
| PCA | PRA | Activités métier **vs** systèmes informatiques |
| RTO | RPO | Temps de reprise **vs** données perdues |
| Enticement | Entrapment | Légal **vs** illégal |
| Vulnérabilité | Exploit | Faiblesse **vs** moyen de l'utiliser |
| SAST | DAST | Code au repos **vs** application en fonctionnement |

---

## 10. Sagesses du CISO

1. *Le général ne tient pas le fusil : il choisit la bataille.*
2. *Les serveurs se reconstruisent, pas les vies.*
3. *Qui signe, assume.*
4. *La meilleure serrure est celle qu'on utilise.*
5. *Un outil sans méthode est un jouet coûteux.*
6. *Ce n'est pas « si », c'est « quand ».*
7. *La porte fermée invite à passer par la fenêtre.*
8. *Ce qu'on ignore finit par nous rattraper.*
9. *Savoir sans agir, c'est consentir.*
10. *Une règle sans contrôle n'est qu'un souhait.*
11. *Ce qui appartient à tous n'appartient à personne.*
12. *La chaîne casse au maillon le plus faible.*
13. *L'intégrité, c'est faire juste même quand personne ne regarde.*
14. *Le certificat ne fait pas le soldat.*
15. *Le berger compte ses moutons chaque soir.*
16. *Ce qu'on ne garde pas ne peut pas fuir.*
17. *Plusieurs murs valent mieux qu'un rempart.*
18. *La complexité est l'ennemie de la sécurité.*
19. *Faire confiance, c'est bien ; vérifier, c'est mieux.*
20. *Le coffre vaut ce que vaut sa clé.*
21. *Louer la maison ne dispense pas de fermer sa porte.*
22. *On cloisonne le navire pour qu'il ne coule pas.*
23. *On ne donne pas toutes les clés au gardien du portail.*
24. *Celui qui compte l'argent ne tient pas la caisse.*
25. *La permission écrite sépare l'auditeur du cambrioleur.*
26. *La sueur à l'entraînement épargne le sang au combat.*
27. *On creuse le puits avant d'avoir soif.*
28. *La sauvegarde est un espoir ; la restauration est une preuve.*
29. *Mesure deux fois, coupe une fois.*
30. *On ne pose pas les fondations après le toit.*

---

## 11. Moyens mnémotechniques

| Notion | Mnémotechnique |
|---|---|
| Traitements du risque | **TARE** : Transférer, Accepter, Réduire, Éviter… jamais ignorer |
| Due diligence / due care | Diligence = **D**écouvrir ; Care = **C**orriger |
| Calcul du risque | « **S**ans **L**ait, **A**vec **R**iz » : SLE → ARO → ALE |
| Code d'éthique | **PAPA** : Protéger, Agir, Prester, Avancer |
| Hiérarchie documentaire | « **P**our **N**ous, **B**ien **P**rotéger **G**agne » |
| NIST CSF 2.0 | **G-I-P-D-R-R** |
| NIST RMF | « **P**our **C**haque **S**ystème, **I**nstaller, **A**uditer, **A**utoriser, **M**onitorer » |
| Cycle de vie de la donnée | « **C**e **S**oir, **U**ne **P**etite **A**ssiette **D**orée » |
| Destruction | Clear < Purge < Destroy |
| Bell-LaPadula | Confidentialité : pas de lecture en haut, pas d'écriture en bas |
| Biba | **B**iba = **B**onne intégrité (règles inversées) |
| Signature | Je signe avec **MA** privée ; je chiffre avec **TA** publique |
| Kerckhoffs | Seule la **C**lé est secrète |
| OSI (1 → 7) | « **P**our **L**e **R**éseau, **T**out **S**e **P**asse **A**utomatiquement » |
| IPsec | AH = **A**uthentifie ; ESP = **E**ncapsule et **S**écurise |
| IDS / IPS | IDS **I**nforme ; IPS **I**nterdit |
| Messagerie | SPF **S**erveurs, DKIM **S**ignature, DMARC **D**écision |
| Biométrie | Type I = **I**gnoré (légitime rejeté) ; Type II = **I**ntrus admis |
| IAAA | « Je suis, je le prouve, j'ai le droit, je l'assume » |
| Accès | DAC **D**iscrétion, MAC **M**ilitaire, RBAC **R**ôle, ABAC **A**ttributs |
| JML | Joiner, Mover, Leaver |
| Kerberos | AS → TGT → TGS → ticket de service |
| Pentest | Pas de papier, pas de pentest |
| SOC | Type I = **I**nstantané ; Type II = **D**urée |
| Réponse aux incidents | « **D**es **R**ats **A**ttaquent, **R**apidement **R**attrapés, **R**epoussés, **L**eçon » |
| Sauvegardes | Différentielle = **D**epuis la **D**ernière complète |
| Sites | Chaud, Tiède, Froid = Heures, Jours, Semaines |
| RAID | RAID 0 = **Zéro** protection |
| Tests de PRA | « Lire, Marcher, Simuler, Doubler, Couper » |
| CMM | « **I**l **R**épète, **D**éfinit, **G**ère, **O**ptimise » |
| Enticement / Entrapment | **E**nvie / **E**mbuscade |
| Lecture des questions | **PMP** : Premier, Meilleur, Plus |

---

## 12. Top 40 des questions pièges et leurs réponses

> Essayez de répondre avant d'ouvrir la correction. Dans chaque cas, le piège est la réponse « évidente » d'un technicien.

### Mindset et gouvernance

**1. Un incendie se déclare dans la salle serveurs. Quelle est la PREMIÈRE action ?**
<details><summary>Réponse</summary>

**Évacuer le personnel.** Le piège est de couper les serveurs ou de lancer la sauvegarde : la vie humaine passe toujours en premier.
</details>

**2. Qui est responsable en dernier ressort de la sécurité de l'information ?**
<details><summary>Réponse</summary>

**La haute direction.** Le piège est de répondre le CISO : il conseille et pilote, mais il ne porte pas la responsabilité ultime.
</details>

**3. Une vulnérabilité ne peut pas être corrigée. Le CISO peut-il accepter le risque lui-même ?**
<details><summary>Réponse</summary>

**Non.** Le risque résiduel est accepté par le propriétaire de l'actif ou par la direction. Le CISO documente, propose des contrôles compensatoires et fait signer.
</details>

**4. Quel est le facteur de succès n°1 d'un programme de sécurité ?**
<details><summary>Réponse</summary>

**Le soutien de la haute direction.** Le piège est de répondre le budget ou la technologie : sans soutien de la direction, rien ne tient.
</details>

**5. Ignorer un risque connu est-il un traitement valable ?**
<details><summary>Réponse</summary>

**Non, jamais.** Les seules options sont réduire, transférer, éviter ou accepter formellement.
</details>

**6. Une cyber-assurance transfère-t-elle la responsabilité ?**
<details><summary>Réponse</summary>

**Non.** Elle transfère une partie de l'impact **financier**. La responsabilité légale et l'atteinte à l'image restent à l'organisation.
</details>

**7. La direction demande de taire une fuite dans le rapport au conseil. Que faire ?**
<details><summary>Réponse</summary>

**Refuser** et rapporter fidèlement, en rappelant les obligations de notification. Le code d'éthique place la société et l'honnêteté avant les intérêts de l'employeur.
</details>

**8. Une organisation certifiée conforme est-elle sécurisée ?**
<details><summary>Réponse</summary>

**Pas nécessairement.** La conformité prouve un minimum à une date donnée. C'est un plancher, pas une garantie.
</details>

**9. Quel document est facultatif : politique, norme, procédure ou guide ?**
<details><summary>Réponse</summary>

**Le guide.** Tous les autres sont obligatoires.
</details>

**10. Quelle est la toute première étape de la planification de la continuité d'activité ?**
<details><summary>Réponse</summary>

**Définir le périmètre et obtenir le soutien de la direction.** Le BIA vient ensuite : c'est la première **analyse**, pas la première étape. Le piège est de répondre directement « choisir un site de secours ».
</details>

**11. Un actif vaut 400 000 $, l'EF est de 25 % et l'ARO de 0,5. Quelle est l'ALE ?**
<details><summary>Réponse</summary>

**50 000 $.** SLE = 400 000 × 0,25 = 100 000 $ ; ALE = 100 000 × 0,5 = 50 000 $. Le piège est d'oublier l'EF ou de multiplier directement par la valeur de l'actif.
</details>

**12. Un contrôle coûte 60 000 $ par an pour réduire une ALE de 50 000 $ à 10 000 $. Faut-il l'acheter ?**
<details><summary>Réponse</summary>

**Non.** Sa valeur est de 50 000 – 10 000 – 60 000 = **–20 000 $**. Il coûte plus que ce qu'il protège.
</details>

### Actifs et données

**13. Qui décide de la classification d'une donnée ?**
<details><summary>Réponse</summary>

**Le propriétaire (owner)**, un responsable métier. Le piège est de répondre l'IT (custodian) ou le CISO.
</details>

**14. Le dégaussage efface-t-il un SSD ?**
<details><summary>Réponse</summary>

**Non.** Il n'agit que sur les supports magnétiques. Pour un SSD, on utilise l'effacement cryptographique ou la destruction physique.
</details>

**15. Une donnée pseudonymisée reste-t-elle une donnée personnelle ?**
<details><summary>Réponse</summary>

**Oui**, car la réidentification reste possible. Seule une anonymisation réelle fait sortir la donnée du champ des données personnelles.
</details>

**16. Un litige est annoncé alors que la destruction programmée des mails approche. Que faire ?**
<details><summary>Réponse</summary>

**Appliquer un legal hold** : suspendre la destruction des données concernées sur instruction du juridique.
</details>

### Architecture et cryptographie

**17. La propriété étoile (*) de Bell-LaPadula interdit :**
<details><summary>Réponse</summary>

**D'écrire vers un niveau inférieur (no write down).** Le piège est de la confondre avec « no read up », qui est la *simple security property*.
</details>

**18. Biba protège-t-il la confidentialité ?**
<details><summary>Réponse</summary>

**Non, l'intégrité.** Ses règles sont : no read down, no write up.
</details>

**19. Avec quelle clé signe-t-on un message ?**
<details><summary>Réponse</summary>

**Sa propre clé privée.** Le destinataire vérifie avec la clé publique de l'émetteur. Pour chiffrer, on utilise la clé publique du destinataire.
</details>

**20. Un HMAC fournit-il la non-répudiation ?**
<details><summary>Réponse</summary>

**Non.** La clé est partagée, donc les deux parties peuvent produire le HMAC. Seule la signature numérique apporte la non-répudiation.
</details>

**21. Un éditeur vante un algorithme « secret, donc plus sûr ». Que répondre ?**
<details><summary>Réponse</summary>

**Le refuser.** Selon le principe de Kerckhoffs, seule la clé doit rester secrète. La sécurité par l'obscurité n'est jamais la bonne réponse.
</details>

**22. Combien de clés symétriques faut-il pour 10 personnes ?**
<details><summary>Réponse</summary>

**45** : 10 × 9 / 2. En asymétrique, il en faudrait **20** (2n).
</details>

**23. En cas d'incendie, une porte d'issue de secours doit-elle rester verrouillée ?**
<details><summary>Réponse</summary>

**Non : elle doit s'ouvrir (fail-safe)** pour protéger les personnes. Le fail-secure, qui protège les actifs, ne s'applique pas quand des vies sont en jeu.
</details>

### Réseaux

**24. AH assure-t-il la confidentialité dans IPsec ?**
<details><summary>Réponse</summary>

**Non.** AH apporte l'intégrité et l'authentification. C'est **ESP** qui chiffre.
</details>

**25. DNSSEC chiffre-t-il les requêtes DNS ?**
<details><summary>Réponse</summary>

**Non.** Il signe les réponses pour garantir leur authenticité et leur intégrité. Pour la confidentialité, il faut DoH ou DoT.
</details>

**26. Masquer le SSID d'un réseau Wi-Fi est-il un contrôle de sécurité efficace ?**
<details><summary>Réponse</summary>

**Non.** Le SSID reste visible dans le trafic. Il faut WPA2 ou WPA3 Entreprise avec 802.1X.
</details>

### Identités et accès

**27. Mot de passe + code PIN : est-ce une authentification à deux facteurs ?**
<details><summary>Réponse</summary>

**Non.** Ce sont deux éléments du même type (« ce que l'on sait »), donc un seul facteur.
</details>

**28. Quelle erreur biométrique est la plus grave pour la sécurité ?**
<details><summary>Réponse</summary>

**Le FAR (Type II)** : un imposteur est accepté. Le FRR (Type I) n'est que gênant.
</details>

**29. OAuth 2.0 est-il un protocole d'authentification ?**
<details><summary>Réponse</summary>

**Non, d'autorisation déléguée.** C'est **OpenID Connect**, construit sur OAuth, qui authentifie.
</details>

**30. Quel est le principal problème des comptes partagés ?**
<details><summary>Réponse</summary>

**La perte d'imputabilité** : impossible de savoir qui a fait quoi. Le piège est de répondre « le mot de passe faible ».
</details>

**31. Quelle est la faiblesse résiduelle de la séparation des tâches ?**
<details><summary>Réponse</summary>

**La collusion** : deux personnes complices peuvent contourner le contrôle. La rotation des postes et les congés obligatoires aident à la détecter.
</details>

### Tests et audit

**32. Quelle est la PREMIÈRE étape d'un test d'intrusion ?**
<details><summary>Réponse</summary>

**Obtenir une autorisation écrite** de la direction, avec un périmètre et des règles d'engagement. Le piège est de répondre « la reconnaissance ».
</details>

**33. Un fournisseur fournit un rapport SOC 2 Type I. Prouve-t-il que ses contrôles fonctionnent ?**
<details><summary>Réponse</summary>

**Non.** Le Type I évalue la conception à une date. Seul le **Type II** prouve l'efficacité sur une période.
</details>

**34. Quel est le meilleur moyen de vérifier qu'une sauvegarde est valable ?**
<details><summary>Réponse</summary>

**Faire une restauration de test.** Le journal « sauvegarde réussie » ne prouve rien.
</details>

### Opérations

**35. Un poste est compromis. Faut-il l'éteindre immédiatement ?**
<details><summary>Réponse</summary>

**Non : il faut l'isoler du réseau.** L'éteindre détruit les preuves en mémoire vive, qui sont les plus volatiles.
</details>

**36. Lors d'une enquête, que collecte-t-on en premier ?**
<details><summary>Réponse</summary>

**La mémoire vive** (avec registres et cache), selon l'ordre de volatilité. Le piège est de répondre le disque dur.
</details>

**37. Le RAID 1 remplace-t-il une sauvegarde ?**
<details><summary>Réponse</summary>

**Non.** Le RAID assure la disponibilité. Une suppression ou un chiffrement par ransomware est répliqué immédiatement sur le miroir.
</details>

**38. Quelle stratégie de sauvegarde permet la restauration la plus rapide : complète + incrémentielles, ou complète + différentielles ?**
<details><summary>Réponse</summary>

**Complète + différentielles** : on restaure la complète puis **une seule** différentielle. Avec les incrémentielles, la sauvegarde est plus rapide, mais il faut les restaurer **toutes**.
</details>

**39. Après une bascule sur le site de secours, quelles applications rapatrier en premier sur le site principal ?**
<details><summary>Réponse</summary>

**Les moins critiques**, pour éprouver le site principal avant d'y ramener les activités vitales.
</details>

**40. Un correctif urgent doit être déployé ce soir. Peut-on contourner la gestion des changements ?**
<details><summary>Réponse</summary>

**Non.** On applique la procédure de **changement d'urgence** : approbation accélérée, déploiement, puis documentation et revue a posteriori. La traçabilité est conservée.
</details>

---

## 13. Checklists de préparation

### ✅ Je suis prêt sur le mindset

- [ ] Je choisis spontanément la réponse du manager plutôt que celle du technicien.
- [ ] Je repère les mots EN PREMIER, MEILLEUR, PLUS, MOINS et SAUF.
- [ ] Je sais que la sécurité des personnes prime toujours.
- [ ] Je sais qui décide (la direction) et qui conseille (le CISO).
- [ ] Je compare toujours le coût d'un contrôle à la valeur de ce qu'il protège.

### ✅ Je maîtrise les incontournables

- [ ] Je calcule SLE, ALE et la valeur d'un contrôle.
- [ ] Je récite les 4 canons du code d'éthique dans l'ordre.
- [ ] Je distingue owner, custodian, controller et processor.
- [ ] Je ne confonds plus Bell-LaPadula et Biba.
- [ ] Je sais quelle clé sert à signer, vérifier, chiffrer et déchiffrer.
- [ ] Je récite les 7 couches OSI et les ports essentiels.
- [ ] Je distingue AH et ESP, transport et tunnel.
- [ ] Je classe tout authentificateur dans le bon type de facteur.
- [ ] Je compare DAC, MAC, RBAC et ABAC, et SAML, OAuth et OIDC.
- [ ] Je distingue SOC 1, 2, 3 et Type I, II.
- [ ] Je cite les 7 étapes de la réponse aux incidents et l'ordre de volatilité.
- [ ] Je maîtrise les sauvegardes, les sites de secours, le RAID et les tests de PRA.
- [ ] Je connais MTD, RTO, RPO et WRT.
- [ ] Je cite les niveaux CMM et les propriétés ACID.
- [ ] Je connais les parades à l'injection, XSS, CSRF, TOCTOU et au dépassement de tampon.

### ✅ Mes indicateurs avant l'examen

- [ ] Au moins 120 fiches Mindset sur 150 marquées « maîtrisées ».
- [ ] Au moins 80 % à chacun des 8 quiz de domaine.
- [ ] Toutes les checklists de domaine validées.
- [ ] Au moins 75 % à deux examens blancs de 100 questions.
- [ ] Les 40 questions pièges de ce document réussies sans hésiter.

### ✅ Le jour J

- [ ] Pièce d'identité valide et convocation.
- [ ] Arriver 30 minutes en avance.
- [ ] Viser environ une minute par question et ne pas s'attarder.
- [ ] Faire les pauses proposées pour garder sa lucidité.
- [ ] En cas de doute : protéger les personnes, penser gouvernance, impliquer la direction.

---

## 14. Pièges à éviter

1. Choisir la réponse la plus technique au lieu de celle du manager du risque.
2. Oublier la sécurité des personnes dans un scénario de crise.
3. Se positionner comme le « Docteur Non » qui bloque tous les projets.
4. Dépenser plus pour un contrôle que la valeur de l'actif protégé.
5. Acheter des outils sans processus ni compétences pour les exploiter.
6. Confondre conformité et sécurité.
7. Accepter soi-même un risque au lieu de le faire accepter par la direction.
8. Lancer un test d'intrusion sans autorisation écrite.
9. Analyser l'original d'une preuve au lieu d'une copie.
10. Éteindre une machine compromise et perdre la mémoire vive.
11. Rédiger un plan de reprise avant d'avoir fait le BIA.
12. Ne jamais tester les plans de crise et de restauration.
13. Ignorer les risques liés aux tiers et au shadow IT.
14. Confondre RAID et sauvegarde.
15. Rattacher la sécurité à la DSI sans indépendance.

---

<sub>CISO Portail · Formation Certification CISSP · SANOGO Souleymane, Consultant Formateur et Expert SI, Abidjan. Support pédagogique de révision : il ne remplace pas le guide officiel de l'(ISC)². Les poids et le format de l'examen correspondent au plan en vigueur depuis 2024 ; vérifiez-les sur le site de l'(ISC)² avant de vous inscrire.</sub>
