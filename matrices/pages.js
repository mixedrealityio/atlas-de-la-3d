// Chapitre 1 : Géométrie dans l’espace et algèbre linéaire (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 1 · mathématiques",
  "title": "Géométrie dans l’espace",
  "sub": "le langage commun de toute la 3D",
  "body": "<p class=\"lede\">Un moteur 3D, un casque de réalité mixte ou Blender manipulent tous les mêmes objets : des <b>vecteurs</b> et des <b>matrices</b>.</p>\n    <p>Un point de l’espace est un triplet (x, y, z) dans un <b>repère</b> : une origine et trois axes perpendiculaires. Déplacer, tourner, agrandir un objet revient à appliquer la même opération à tous ses sommets, c’est-à-dire à multiplier chacun par une matrice.</p>\n    <p>Ce module pose ces outils ; tous les autres chapitres s’en servent.</p>",
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
  "lit": "trs",
  "look": {},
  "scene": "trs",
  "fig": ""
 },
 {
  "kicker": "1.1",
  "title": "Vecteurs",
  "sub": "addition, produit scalaire, produit vectoriel",
  "body": "<p class=\"lede\">Trois opérations suffisent à presque tout.</p>\n    <ul class=\"rules\"><li><b>Addition</b> : déplacer un point d’un vecteur.</li><li><b>Produit scalaire</b> a·b = |a||b| cos θ : mesure l’alignement ; sert à l’éclairage (angle entre la normale et la lumière) et aux projections.</li><li><b>Produit vectoriel</b> a × b : un vecteur perpendiculaire aux deux ; sert à calculer la normale d’un triangle.</li><li><b>Normaliser</b> : ramener à une longueur 1, pour ne garder que la direction.</li></ul>\n    <p>Attention au sens des repères : OpenGL, three.js et Blender sont <b>main droite</b> (z vers soi ou vers le haut selon l’outil), DirectX et Unity <b>main gauche</b>. Un export mal converti donne des objets en miroir.</p>",
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
  "lit": "trs",
  "look": {},
  "scene": "trs",
  "fig": ""
 },
 {
  "kicker": "1.2",
  "title": "Coordonnées homogènes",
  "sub": "un quatrième nombre qui change tout",
  "body": "<p class=\"lede\">Une matrice 3×3 sait tourner et mettre à l’échelle, mais pas <b>déplacer</b>. On ajoute donc une quatrième coordonnée w.</p>\n    <div class=\"eq\">(x, y, z) → (x, y, z, 1)</div>\n    <p>Avec w = 1, la dernière colonne de la matrice 4×4 ajoute une translation. Avec w = 0, on décrit une <b>direction</b> (une normale, une vitesse) que les translations n’affectent pas. Les projections en perspective utilisent aussi w : après la projection, on divise x, y et z par w.</p>\n    <p>Ces matrices s’appellent <b>affines</b> quand elles conservent les droites parallèles (translation, rotation, échelle, cisaillement).</p>",
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
  "lit": "trs",
  "look": {},
  "scene": "trs",
  "fig": ""
 },
 {
  "kicker": "1.3",
  "title": "Composer les transformations",
  "sub": "l’ordre compte",
  "body": "<p class=\"lede\">Appliquer une échelle, puis une rotation, puis une translation s’écrit M = T · R · S : la matrice la plus à droite agit en premier.</p>\n    <div class=\"eq\">M · p = T · (R · (S · p))</div>\n    <ul class=\"rules\"><li>Tourner puis déplacer ≠ déplacer puis tourner : dans le second cas, l’objet tourne autour de l’origine du monde, pas autour de lui-même.</li><li>Une hiérarchie (bras → avant-bras → main) multiplie les matrices des parents : c’est le <b>graphe de scène</b> (chapitre 49).</li><li>Inverser une matrice annule la transformation : la matrice vue est l’inverse de la position de la caméra.</li></ul>",
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
  "lit": "trs",
  "look": {},
  "scene": "trs",
  "fig": ""
 },
 {
  "kicker": "1.4",
  "title": "La chaîne des repères",
  "sub": "du modèle à l’écran",
  "body": "<p class=\"lede\">Un sommet passe par six repères avant de devenir un pixel.</p>\n    <p>Le <b>vertex shader</b> (chapitre 8) fait cette multiplication pour chaque sommet, des millions de fois par image : c’est l’opération la plus répétée de toute la 3D temps réel, d’où des cartes graphiques conçues pour les produits matrice-vecteur.</p>\n    <p>En réalité mixte, on ajoute un repère de plus : celui du <b>monde réel</b> mesuré par le casque (chapitre 23), dans lequel on ancre les hologrammes.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 }
];
export const PLATES = {
  trs: { text: "Le cube bleu est déplacé, tourné puis agrandi, et la matrice 4×4 correspondante s’affiche à droite. La translation vit dans la dernière colonne, la rotation et l’échelle dans le bloc 3×3 en haut à gauche. Axes : x en rouge, y en vert, z en bleu.", facts: () => [["point", "(x, y, z, 1)"], ["direction", "(x, y, z, 0)"], ["composer", "M = T · R · S"]] },
  chaine: { text: "Chaque sommet traverse une suite de repères : local, monde, caméra, découpage, coordonnées normalisées, écran. Les trois premières étapes sont des multiplications par des matrices 4×4, souvent fusionnées en une seule (MVP). La division par w crée la perspective.", facts: () => [["MVP", "projection · vue · modèle"], ["NDC", "cube [−1, 1]³"], ["écran", "viewport"]] }
};
