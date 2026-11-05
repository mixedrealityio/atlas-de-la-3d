// Chapitre 55 : Jumeaux numériques et simulation industrielle (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 55 · industrie et web",
  "title": "Les jumeaux numériques",
  "sub": "le réel en 3D, en direct",
  "body": "<p class=\"lede\">Un <b>jumeau numérique</b> est une représentation 3D d’un objet ou d’un système réel, alimentée par ses données. Il sert à surveiller, prévoir, optimiser et former, sans arrêter la production.</p>\n    <p>Exemples : une chaîne de montage simulée avant d’être construite, un bâtiment dont on suit l’énergie pièce par pièce, une éolienne dont on prédit l’usure, un réseau d’eau d’une ville.</p>",
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
  "lit": "cycle",
  "look": {},
  "scene": "cycle",
  "fig": ""
 },
 {
  "kicker": "55.1",
  "title": "OpenUSD et Omniverse",
  "sub": "assembler des sources différentes",
  "body": "<p class=\"lede\">Une usine mêle la CAO des machines, le BIM du bâtiment, les scans des installations existantes et les robots. <b>OpenUSD</b> (chapitre 35) les compose en couches sans les fusionner : chaque équipe garde son fichier.</p>\n    <b>NVIDIA Omniverse</b> s’appuie sur OpenUSD pour la collaboration en temps réel, le rendu en lancer de rayons et la simulation physique (PhysX), notamment pour entraîner des robots en simulation avant de les déployer (Isaac Sim).",
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
  "lit": "pipeline",
  "look": {},
  "scene": "pipeline",
  "fig": ""
 },
 {
  "kicker": "55.2",
  "title": "BIM et IFC",
  "sub": "le bâtiment en données",
  "body": "<p class=\"lede\">Le <b>BIM</b> (building information modeling) décrit un bâtiment comme des objets intelligents (murs, portes, gaines) avec leurs propriétés, pas seulement leur forme. Le format ouvert <b>IFC</b> (ISO 16739) permet l’échange entre logiciels (Revit, ArchiCAD, Tekla).</p>\n    <p>En chantier, la réalité mixte superpose le BIM au bâtiment en construction pour vérifier les réservations et les réseaux ; l’ancrage se fait par QR codes ou points de référence topographiques (chapitres 23 et 24).</p>",
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
  "lit": "pipeline",
  "look": {},
  "scene": "pipeline",
  "fig": ""
 },
 {
  "kicker": "55.3",
  "title": "Métrologie et contrôle",
  "sub": "mesurer le réel contre le modèle",
  "body": "<ul class=\"rules\"><li>Scanner une pièce fabriquée (chapitre 32) et la comparer à sa CAO : une carte de couleurs montre les écarts au micromètre.</li><li>Inspecter un bâtiment par photogrammétrie de drone.</li><li>En AR : afficher les écarts directement sur la pièce, ou guider l’opérateur pour un contrôle.</li><li>Ces usages demandent une calibration rigoureuse et une incertitude connue (chapitre 24).</li></ul>",
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
  "lit": "pipeline",
  "look": {},
  "scene": "pipeline",
  "fig": ""
 }
];
export const PLATES = {
  cycle: { text: "Le jumeau numérique est un modèle 3D relié aux capteurs de l’objet réel. Il reçoit les données en continu, simule ce qui va se passer (pannes, flux, énergie), aide à décider, et l’action revient sur le réel. En réalité mixte, on voit les données du jumeau superposées à la vraie machine.", facts: () => [["données", "IoT, automates, ERP"], ["3D", "CAO, BIM, scans"], ["format", "OpenUSD, IFC"]] },
  pipeline: { text: "Les modèles CAO et BIM sont trop lourds et trop détaillés pour le temps réel : on les convertit, on les simplifie, on relie chaque objet aux données de ses capteurs, puis on les visualise et on les simule. OpenUSD sert de format commun pour assembler les sources.", facts: () => [["plateformes", "Omniverse, Unity, Unreal"], ["web", "three.js, Babylon, Cesium"], ["XR", "HoloLens, Quest, Vision Pro"]] }
};
