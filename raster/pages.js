// Chapitre 7 : Le pipeline de rasterisation (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 7 · rendu",
  "title": "Le pipeline de rasterisation",
  "sub": "la méthode du temps réel",
  "body": "<p class=\"lede\">La <b>rasterisation</b> part des triangles et cherche les pixels qu’ils couvrent. C’est l’inverse du lancer de rayons (chapitre 10), qui part des pixels et cherche les triangles.</p>\n    <p>Elle est extrêmement rapide parce que chaque triangle se traite indépendamment, en parallèle, avec des circuits spécialisés. Tous les jeux, les casques et les navigateurs (WebGL, WebGPU) l’utilisent ; le lancer de rayons vient en complément.</p>",
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
  "lit": "pipe",
  "look": {},
  "scene": "pipe",
  "fig": ""
 },
 {
  "kicker": "7.1",
  "title": "L’étage des sommets",
  "sub": "transformer et assembler",
  "body": "<p class=\"lede\">Le <b>vertex shader</b> reçoit chaque sommet et renvoie sa position dans l’espace de découpage (chapitre 1), plus des valeurs à transmettre (normale, UV).</p>\n    <p>Les sommets sont assemblés en triangles, puis <b>découpés</b> (clipping) contre le tronc de vue. Les triangles vus de dos peuvent être éliminés (<b>back-face culling</b>) : la moitié du travail disparaît pour un objet fermé. Enfin, la division par w et le viewport donnent des coordonnées en pixels.</p>",
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
  "lit": "pipe",
  "look": {},
  "scene": "pipe",
  "fig": ""
 },
 {
  "kicker": "7.2",
  "title": "Rasteriser",
  "sub": "quels pixels sont couverts",
  "body": "<p class=\"lede\">Pour chaque pixel, trois <b>fonctions d’arête</b> disent de quel côté de chaque bord il se trouve ; s’il est du bon côté des trois, il est couvert.</p>\n    <p>Les mêmes calculs donnent les <b>coordonnées barycentriques</b>, qui servent à interpoler la profondeur, les UV et les normales à l’intérieur du triangle (avec correction de perspective). Les règles de remplissage garantissent qu’un pixel sur une arête commune n’est dessiné qu’une fois.</p>",
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
  "lit": "zbuf",
  "look": {},
  "scene": "zbuf",
  "fig": ""
 },
 {
  "kicker": "7.3",
  "title": "Le Z-buffer",
  "sub": "qui est devant ?",
  "body": "<p class=\"lede\">Un tampon garde la profondeur du fragment le plus proche pour chaque pixel. Un nouveau fragment n’est écrit que s’il est plus proche.</p>\n    <ul class=\"rules\"><li>Les objets opaques peuvent être dessinés dans n’importe quel ordre.</li><li>Les objets <b>transparents</b>, eux, doivent être triés de l’arrière vers l’avant (ou traités par des techniques sans ordre).</li><li><b>Early-Z</b> : le GPU teste la profondeur avant le fragment shader, pour ne pas colorier un pixel caché. D’où l’intérêt de dessiner d’abord les objets proches, ou de faire une passe de profondeur seule (depth prepass).</li></ul>",
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
  "lit": "zbuf",
  "look": {},
  "scene": "zbuf",
  "fig": ""
 },
 {
  "kicker": "7.4",
  "title": "Éliminer avant de dessiner",
  "sub": "culling",
  "body": "<p class=\"lede\">Le pixel le plus rapide est celui qu’on ne dessine pas.</p>\n    <table class=\"data\"><tr><th>technique</th><th>élimine</th></tr><tr><td>frustum culling</td><td>objets hors du tronc de vue</td></tr><tr><td>back-face culling</td><td>faces tournées vers l’arrière</td></tr><tr><td>occlusion culling</td><td>objets cachés derrière d’autres</td></tr><tr><td>LOD</td><td>détails invisibles de loin (chapitre 51)</td></tr></table>\n    <p>L’occlusion se teste avec des requêtes GPU, des volumes simplifiés ou un Z-buffer hiérarchique (Hi-Z) en basse résolution. En VR, on dessine deux vues : ces économies comptent double.</p>",
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
  "lit": "pipe",
  "look": {},
  "scene": "pipe",
  "fig": ""
 }
];
export const PLATES = {
  pipe: { text: "Les étapes bleues sont programmables (shaders), les autres sont câblées dans le GPU. Les sommets sont transformés, assemblés en triangles, coupés au bord du tronc de vue, convertis en fragments (candidats pixels), coloriés, puis testés en profondeur avant d’être écrits dans l’image.", facts: () => [["programmable", "sommets, fragments"], ["fixe", "rasterisation, tests"], ["débit", "milliards de pixels/s"]] },
  zbuf: { text: "La grille est l’écran. On teste chaque pixel : est-il couvert par le triangle bleu ? par le rouge ? Là où les deux se recouvrent, le Z-buffer garde la profondeur la plus proche : ici le rouge, placé devant. Les GPU font ce test pour des blocs de pixels en parallèle.", facts: () => [["test", "fonctions d’arête"], ["profondeur", "un nombre par pixel"], ["gagnant", "le plus proche"]] }
};
