// Chapitre 61 : Qu’est-ce que la 3D ? Une brève histoire (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 61 · mathématiques",
  "title": "Qu’est-ce que la 3D ?",
  "sub": "un monde indépendant du point de vue",
  "body": "<p class=\"lede\">Une image 2D est figée ; une scène 3D décrit un monde <b>indépendant de la vue</b>. La caméra se déplace librement et l’image est recalculée pour chaque point de vue.</p>\n    <p>C’est cette séparation entre le contenu et la vue qui permet le jeu vidéo, la VR (une vue par œil, recalculée à chaque mouvement de tête), la CAO et le cinéma d’animation.</p>",
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
  "lit": "espaces",
  "look": {},
  "scene": "espaces",
  "fig": ""
 },
 {
  "kicker": "61.1",
  "title": "Repères et conventions",
  "sub": "la cause n° 1 des erreurs d’import",
  "body": "<ul class=\"rules\"><li><b>Main droite ou main gauche</b> : l’orientation de l’axe de profondeur change selon les logiciels.</li><li><b>Axe vertical</b> : Z dans Blender et Unreal, Y dans Unity, three.js et glTF.</li><li><b>Unités</b> : mètres dans Blender et glTF, centimètres dans Unreal.</li><li><b>Sens des rotations</b> et ordre des angles d’Euler (chapitre 2).</li></ul>\n    <p class=\"lede\">Un objet qui arrive couché, en miroir ou cent fois trop grand vient presque toujours de l’une de ces quatre conventions.</p>",
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
  "lit": "espaces",
  "look": {},
  "scene": "espaces",
  "fig": ""
 },
 {
  "kicker": "61.2",
  "title": "Une brève histoire",
  "sub": "des laboratoires au cinéma",
  "body": "<ul class=\"rules\"><li><b>1963</b> : Ivan Sutherland présente Sketchpad, le premier logiciel de dessin interactif.</li><li><b>Années 1970</b> : l’Université de l’Utah invente l’essentiel (élimination des faces cachées, ombrage de Gouraud et de Phong, la théière de Newell en 1975).</li><li><b>1986</b> : Kajiya formule l’équation du rendu (chapitre 9).</li><li><b>1995</b> : Toy Story, premier long métrage entièrement en images de synthèse (RenderMan).</li><li><b>1999</b> : la GeForce 256 est présentée comme le premier GPU ; les shaders programmables suivent au début des années 2000.</li></ul>",
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
  "lit": "frise",
  "look": {},
  "scene": "frise",
  "fig": ""
 },
 {
  "kicker": "61.3",
  "title": "Les trois vagues récentes",
  "sub": "XR, lancer de rayons, rendu neuronal",
  "body": "<ul class=\"rules\"><li><b>Les casques</b> : Oculus Rift et HTC Vive (2016), Quest autonome (2019), HoloLens 2 (2019), Vision Pro (2024), Android XR (2025).</li><li><b>Le lancer de rayons matériel</b> : NVIDIA RTX (2018), puis toutes les marques de GPU.</li><li><b>Le rendu neuronal</b> : DLSS (2020), NeRF (2020), Gaussian Splatting (2023), générateurs 3D (2024–2025).</li></ul>\n    <p class=\"lede\">La 3D n’est plus seulement un outil de spectacle : elle devient une interface (la réalité mixte), un capteur (la reconstruction du réel) et un espace de calcul pour l’IA.</p>",
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
  "lit": "frise",
  "look": {},
  "scene": "frise",
  "fig": ""
 }
];
export const PLATES = {
  frise: { text: "De Sketchpad (1963) à l’école de l’Université de l’Utah (ombrage de Phong, théière de Newell), puis l’industrialisation (Toy Story en 1995, le premier GPU grand public en 1999, les shaders programmables), et trois vagues récentes : les casques XR, le lancer de rayons matériel et le rendu neuronal.", facts: () => [["1963", "Sketchpad (Sutherland)"], ["1995", "Toy Story"], ["2020–2023", "NeRF, gaussiennes"]] },
  espaces: { text: "Toute donnée (une position, une normale, une lumière) vit dans un espace précis. Avant tout calcul, la première question est : dans quel repère suis-je ?", facts: () => [["main droite", "Blender, OpenGL, three.js"], ["main gauche", "Unity, DirectX, Unreal"], ["piège", "unités et axe vertical"]] }
};
