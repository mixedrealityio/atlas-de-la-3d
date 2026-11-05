// Chapitre 20 : Le rendu stéréoscopique (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 20 · VR et AR",
  "title": "Le rendu stéréoscopique",
  "sub": "deux yeux, deux images",
  "body": "<p class=\"lede\">Nos yeux sont écartés d’environ 6 cm : chacun voit la scène sous un angle un peu différent. Le cerveau fusionne les deux images et en tire la profondeur : c’est la <b>stéréopsie</b>.</p>\n    <p>Un casque affiche donc une image différente devant chaque œil, rendue par deux caméras virtuelles placées exactement à la position des yeux.</p>",
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
  "lit": "disp",
  "look": {},
  "scene": "disp",
  "fig": ""
 },
 {
  "kicker": "20.1",
  "title": "L’écart interpupillaire",
  "sub": "IPD",
  "body": "<p class=\"lede\">L’<b>IPD</b> varie d’environ 54 à 74 mm selon les personnes (moyenne ≈ 63 mm).</p>\n    <ul class=\"rules\"><li>Il fixe l’écart des deux caméras virtuelles : un IPD faux rend le monde trop grand ou trop petit.</li><li>Il doit aussi correspondre à l’écart des lentilles, sinon l’œil regarde à travers le bord de la lentille (flou, distorsion).</li><li>Réglage manuel par molette, par crans, motorisé, ou mesuré par l’eye tracking.</li><li>OpenXR fournit à chaque image la pose de chaque œil : l’application n’a pas à gérer l’IPD elle-même.</li></ul>",
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
  "lit": "disp",
  "look": {},
  "scene": "disp",
  "fig": ""
 },
 {
  "kicker": "20.2",
  "title": "Disparité et profondeur",
  "sub": "ce que mesure le cerveau",
  "body": "<div class=\"eq\">disparité ≈ IPD × (1/d − 1/d_écran)</div>\n    <p class=\"lede\">La disparité est forte pour les objets proches et tend vers zéro au loin : au-delà d’une dizaine de mètres, la stéréo n’aide presque plus et la profondeur vient d’autres indices (taille, perspective, parallaxe de mouvement, ombres). C’est pourquoi le suivi de la tête (6DoF, chapitre 22) compte autant que la stéréo.</p>",
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
  "lit": "disp",
  "look": {},
  "scene": "disp",
  "fig": ""
 },
 {
  "kicker": "20.3",
  "title": "Rendre deux vues efficacement",
  "sub": "multiview et instanciation",
  "body": "<p class=\"lede\">Les moteurs évitent de tout faire deux fois : la culling, les animations, les ombres sont calculées une fois pour les deux yeux, puis la géométrie est dessinée dans les deux vues en un seul passage (<b>multiview</b>).</p>\n    <p>Les deux troncs de vue se recouvrent largement ; certains moteurs utilisent un tronc combiné pour l’élimination. Le compositeur reçoit ensuite les deux images, souvent dans une texture à deux couches (texture array).</p>",
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
  "lit": "rendu",
  "look": {},
  "scene": "rendu",
  "fig": ""
 }
];
export const PLATES = {
  disp: { text: "Chaque œil voit l’objet sous un angle différent : sur le plan de l’image, ses deux projections (rouge pour l’œil gauche, verte pour le droit) sont décalées. Ce décalage, la disparité, diminue quand l’objet s’éloigne. Le cerveau le convertit en profondeur.", facts: () => [["IPD moyen", "≈ 63 mm"], ["disparité", "↓ avec la distance"], ["au-delà de ~10 m", "presque nulle"]] },
  rendu: { text: "Dessiner deux fois la scène double le travail. Les extensions multiview (OpenGL ES, Vulkan, WebXR) envoient une seule fois chaque objet au GPU, qui le dessine dans deux couches d’une texture, une par œil.", facts: () => [["Unity", "Single Pass Instanced"], ["WebXR", "OCULUS_multiview"], ["gain", "≈ 30 % de CPU en moins"]] }
};
