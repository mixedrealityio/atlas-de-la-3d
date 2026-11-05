// Chapitre 60 : L’avenir de la 3D et du spatial computing (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 60 · industrie et web",
  "title": "L’avenir du spatial computing",
  "sub": "vers des interfaces invisibles",
  "body": "<p class=\"lede\">Le but affiché de l’industrie : des <b>lunettes</b> qui ressemblent à des lunettes, portées toute la journée, qui affichent l’information là où elle sert et comprennent ce qu’on regarde.</p>\n    <p>Les prototypes montrent le chemin (Meta Orion avec guides d’ondes en carbure de silicium et bracelet EMG, lunettes Android XR avec Gemini), mais il reste à résoudre la luminosité, l’autonomie, la chaleur, le champ de vision et le prix.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "tendances",
  "look": {},
  "scene": "tendances",
  "fig": ""
 },
 {
  "kicker": "60.1",
  "title": "Les affichages de demain",
  "sub": "rétinien, holographique, varifocal",
  "body": "<ul class=\"rules\"><li><b>Micro-LED</b> couleur à très haute luminosité pour l’AR en plein jour (chapitre 13).</li><li><b>Holographie</b> calculée par réseaux de neurones, avec vraie profondeur focale (chapitre 15).</li><li><b>Balayage rétinien</b> direct : dessiner l’image sur la rétine par un laser ou une fibre (chapitre 17), image toujours nette.</li><li><b>Varifocal</b> et correction de la vue intégrée (chapitre 21).</li><li>Écrans à champ lumineux pour la 3D sans lunettes au bureau.</li></ul>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "tendances",
  "look": {},
  "scene": "tendances",
  "fig": ""
 },
 {
  "kicker": "60.2",
  "title": "L’IA et le monde physique",
  "sub": "comprendre, générer, agir",
  "body": "<p class=\"lede\">L’IA spatiale relie tous les modules de cet atlas : capter le réel (module 6), le comprendre (module 7), l’entraîner (module 8), le générer et le simuler (module 9), l’afficher (modules 3 et 4) et interagir avec lui (module 5).</p>\n    <p>Les modèles du monde (chapitre 41) apprennent à prédire comment une scène évolue ; ils servent à la fois aux mondes virtuels générés, aux robots et aux assistants de réalité mixte. La 3D devient le langage commun entre les humains, les machines et l’IA.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "convergence",
  "look": {},
  "scene": "convergence",
  "fig": ""
 },
 {
  "kicker": "60.3",
  "title": "Pour aller plus loin",
  "sub": "par où commencer",
  "body": "<table class=\"data\"><tr><th>objectif</th><th>par où commencer</th></tr><tr><td>comprendre les maths</td><td>chapitres 1 à 6</td></tr><tr><td>faire du rendu</td><td>chapitres 7 à 12, puis three.js</td></tr><tr><td>développer en XR</td><td>chapitres 19 à 26, 56 et 58 ; WebXR ou Unity + OpenXR</td></tr><tr><td>calibrer et ancrer en AR</td><td>chapitres 22 à 24</td></tr><tr><td>modéliser</td><td>chapitres 30 et 53, Blender</td></tr><tr><td>IA 3D</td><td>chapitres 37 à 48</td></tr></table>\n    <p class=\"lede\">Chaque figure de cet atlas est une scène three.js : tournez-la, survolez les pièces, et cliquez pour les décomposer.</p>",
  "cam": {
   "target": [
    0,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "tendances",
  "look": {},
  "scene": "tendances",
  "fig": ""
 },
 {
  "kicker": "60.4",
  "title": "Les modèles du monde",
  "sub": "de la 3D implicite à la 3D explicite",
  "body": "<p class=\"lede\">Les générateurs vidéo (Sora et ses successeurs) montrent une compréhension implicite de la 3D : perspective, occlusion, parallaxe. Les modèles interactifs (Genie, agents incarnés) apprennent des environnements où l’on agit.</p>\n    <p>La question ouverte : ces représentations implicites deviendront-elles des scènes 3D <b>explicites</b>, éditables, utilisables dans les moteurs et les casques ? Trois chantiers sont déjà en marche : des <b>jumeaux numériques</b> vivants (capture, gaussiennes, capteurs), des <b>assistants visuels</b> dans des lunettes, et la <b>création augmentée</b>, du texte à la scène animée.</p>\n    <p>Plus la 3D devient automatique, plus comprendre ce qu’elle fait (où est la caméra, comment la lumière interagit, quelle latence le corps tolère) devient décisif pour la diriger.</p>",
  "cam": {
   "target": [
    40,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "convergence",
  "look": {},
  "scene": "convergence",
  "fig": ""
 }
];
export const PLATES = {
  tendances: { text: "Les afficheurs deviennent plus fins et plus lumineux, l’holographie promet une vraie mise au point, l’IA comprend et génère l’espace, les interfaces passent par des capteurs au poignet qui lisent l’intention des muscles, et des cartes 3D partagées du monde permettent d’y ancrer durablement des contenus.", facts: () => [["poids visé", "< 100 g"], ["entrée", "voix, regard, poignet"], ["cerveau", "un assistant qui voit"]] },
  convergence: { text: "Les mêmes modèles qui comprennent la 3D pour un casque servent aux robots : percevoir, raisonner, générer un plan, agir. Le casque devient un assistant qui voit ce que l’on voit ; le robot, un corps pour l’IA spatiale.", facts: () => [["casques", "assistants visuels"], ["robots", "mêmes modèles"], ["données", "simulation + capture"]] }
};
