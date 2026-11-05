// Chapitre 5 : Courbes et géométrie paramétrique (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 5 · mathématiques",
  "title": "Courbes et géométrie paramétrique",
  "sub": "des formes définies par une formule",
  "body": "<p class=\"lede\">Une courbe paramétrique est une fonction t ↦ (x(t), y(t), z(t)). Quelques <b>points de contrôle</b> suffisent à décrire une forme lisse, que l’on peut ensuite découper en autant de segments que nécessaire.</p>\n    <p>Ce sont les outils du design industriel, des polices de caractères (TrueType, PostScript), des trajectoires de caméra et des chemins d’animation.</p>",
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
  "lit": "casteljau",
  "look": {},
  "scene": "casteljau",
  "fig": ""
 },
 {
  "kicker": "5.1",
  "title": "Les courbes de Bézier",
  "sub": "Bernstein et de Casteljau",
  "body": "<div class=\"eq\">B(t) = (1−t)³P0 + 3t(1−t)²P1 + 3t²(1−t)P2 + t³P3</div>\n    <ul class=\"rules\"><li>La courbe passe par le premier et le dernier point, et y est tangente au polygone de contrôle.</li><li>Elle reste dans l’enveloppe convexe de ses points : pratique pour les tests de collision.</li><li>L’algorithme de <b>de Casteljau</b> (figure) la calcule par interpolations successives, de façon stable.</li><li>Défaut : bouger un point modifie toute la courbe.</li></ul>",
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
  "lit": "casteljau",
  "look": {},
  "scene": "casteljau",
  "fig": ""
 },
 {
  "kicker": "5.2",
  "title": "B-splines et NURBS",
  "sub": "contrôle local et formes exactes",
  "body": "<p class=\"lede\">Une <b>B-spline</b> enchaîne des morceaux de courbes de degré fixe : chaque point de contrôle n’influence qu’une partie, selon un vecteur de nœuds.</p>\n    <p>Une <b>NURBS</b> (B-spline rationnelle non uniforme) ajoute un <b>poids</b> à chaque point : elle peut représenter exactement des cercles et des coniques. C’est le standard de la CAO (formats STEP, IGES) et de Rhino. Les <b>surfaces</b> NURBS sont le produit de deux familles de courbes, avec des paramètres (u, v).</p>\n    <p>Pour l’affichage, tout est converti en triangles (tessellation), sur le CPU ou par les étages de tessellation du GPU.</p>",
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
  "lit": "casteljau",
  "look": {},
  "scene": "casteljau",
  "fig": ""
 },
 {
  "kicker": "5.3",
  "title": "La géométrie constructive",
  "sub": "CSG : penser en volumes",
  "body": "<p class=\"lede\">Au lieu de dessiner la surface, on décrit des <b>opérations</b> : un cube moins un cylindre fait une pièce percée.</p>\n    <p>La CAO paramétrique (FreeCAD, Fusion, SolidWorks) garde l’<b>historique</b> de ces opérations : on modifie une cote et tout se recalcule. Les booléens sur maillages sont délicats (précision numérique, maillages non étanches) ; ils sont exacts et simples sur les représentations implicites (chapitre 6).</p>",
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
  "lit": "csg",
  "look": {},
  "scene": "csg",
  "fig": ""
 },
 {
  "kicker": "5.4",
  "title": "Courbes, temps et subdivision",
  "sub": "Bézier dans l’animation",
  "body": "<p class=\"lede\">Les courbes de Bézier sont nées dans l’automobile française des années 1960 : Pierre Bézier chez Renault, Paul de Casteljau chez Citroën.</p>\n    <ul class=\"rules\"><li>En animation, les courbes de Bézier décrivent le <b>temps</b> : dans l’éditeur de graphes de Blender ou d’Unreal, leurs poignées règlent l’accélération, l’amortissement et le rebond entre deux images clés.</li><li>Les <b>surfaces de subdivision</b> complètent les NURBS : partir d’un maillage de contrôle et le raffiner. Ce sont les standards des personnages et des formes organiques, les NURBS restant ceux des pièces mécaniques.</li><li>En procédural, les courbes guident routes, câbles et tuyaux générés par Geometry Nodes (chapitre 53).</li></ul>",
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
  "lit": "casteljau",
  "look": {},
  "scene": "casteljau",
  "fig": ""
 }
];
export const PLATES = {
  casteljau: { text: "Quatre points de contrôle P0 à P3. Pour une valeur t entre 0 et 1, on interpole chaque segment du polygone de contrôle, puis on recommence sur les nouveaux points, jusqu’à n’en garder qu’un : il est sur la courbe. Quand t parcourt [0, 1], ce point trace la courbe.", facts: () => [["degré", "nombre de points − 1"], ["passe par", "P0 et P3"], ["tangentes", "vers P1 et P2"]] },
  csg: { text: "La géométrie constructive des solides décrit un objet comme un arbre d’opérations booléennes sur des formes simples. Les logiciels de CAO et le modificateur Booléen de Blender l’utilisent ; le résultat doit être recalculé en maillage pour l’affichage.", facts: () => [["opérations", "union, différence, intersection"], ["structure", "un arbre"], ["Blender", "modificateur Booléen"]] }
};
