// Chapitre 6 : Représentations implicites et champs de distance (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 6 · mathématiques",
  "title": "Représentations implicites",
  "sub": "une forme = une fonction",
  "body": "<p class=\"lede\">Au lieu de lister des triangles, on donne une fonction f(x, y, z) : la surface est l’ensemble des points où f vaut 0 (une <b>surface de niveau</b>).</p>\n    <p>La forme a une résolution infinie, l’intérieur et l’extérieur sont toujours définis, et les opérations booléennes sont triviales. En contrepartie, l’affichage demande un algorithme particulier : le raymarching, ou l’extraction d’un maillage.</p>",
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
  "lit": "trace",
  "look": {},
  "scene": "trace",
  "fig": ""
 },
 {
  "kicker": "6.1",
  "title": "Les champs de distance signée",
  "sub": "SDF",
  "body": "<p class=\"lede\">Une SDF donne, en chaque point, la <b>distance à la surface</b>, négative à l’intérieur.</p>\n    <div class=\"eq\">sphère : d(p) = |p − c| − r</div>\n    <p>Il existe des formules pour les boîtes, cylindres, tores, et des opérations pour les répéter, les tordre, les arrondir. Les SDF servent aussi à la détection de collision, aux ombres douces, à l’occlusion ambiante et aux polices de caractères nettes à toute taille (MSDF).</p>",
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
  "lit": "trace",
  "look": {},
  "scene": "trace",
  "fig": ""
 },
 {
  "kicker": "6.2",
  "title": "Le raymarching",
  "sub": "avancer de la distance garantie",
  "body": "<p class=\"lede\">Pour chaque pixel, on avance le long du rayon d’un pas égal à d(p) : par définition, aucune surface n’est plus proche.</p>\n    <ul class=\"rules\"><li>En quelques dizaines de pas, on atteint la surface ou l’on sort de la scène.</li><li>La <b>normale</b> s’obtient par le gradient de d (différences finies).</li><li>Tout se fait dans un fragment shader : c’est la technique des démos Shadertoy.</li><li>Coût : proportionnel au nombre de pas par pixel ; les rayons rasants sont lents.</li></ul>",
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
  "lit": "trace",
  "look": {},
  "scene": "trace",
  "fig": ""
 },
 {
  "kicker": "6.3",
  "title": "Combiner, puis extraire",
  "sub": "booléens, marching cubes",
  "body": "<p class=\"lede\">Union, intersection et différence se calculent par min et max ; l’<b>union douce</b> crée des formes organiques.</p>\n    <p>Pour revenir à un maillage (impression, export), l’algorithme des <b>marching cubes</b> évalue la fonction sur une grille et place des triangles là où le signe change. Les représentations implicites neuronales (DeepSDF, NeRF, chapitre 39) reprennent la même idée : un réseau de neurones joue le rôle de f.</p>",
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
  "lit": "ops",
  "look": {},
  "scene": "ops",
  "fig": ""
 }
];
export const PLATES = {
  trace: { text: "Le rayon part de la caméra. À chaque pas, on calcule la distance à la surface la plus proche (le cercle gris) : on peut avancer d’autant sans rien traverser. Les pas raccourcissent près de la surface, et l’on s’arrête quand la distance devient minuscule (point rouge).", facts: () => [["SDF", "distance signée à la surface"], ["négatif", "à l’intérieur"], ["arrêt", "d(p) < ε"]] },
  ops: { text: "Avec des champs de distance, les opérations booléennes deviennent des fonctions simples : l’union est un minimum, l’intersection un maximum. L’union « douce » mélange les formes avec un congé arrondi, effet signature des démos en shader et des modeleurs à SDF.", facts: () => [["union", "min"], ["intersection", "max"], ["congé", "smooth min"]] }
};
