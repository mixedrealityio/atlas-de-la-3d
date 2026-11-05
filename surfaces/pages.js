// Chapitre 4 : Représenter surfaces et volumes (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 4 · mathématiques",
  "title": "Représenter surfaces et volumes",
  "sub": "choisir sa structure",
  "body": "<p class=\"lede\">Une forme 3D peut être décrite par sa <b>surface</b> (maillage, points) ou par son <b>volume</b> (voxels, champs).</p>\n    <p>Le choix dépend de l’usage : afficher vite, capturer le réel, simuler, imprimer ou entraîner une IA (chapitre 46). On passe souvent de l’une à l’autre : un scan donne des points, on en reconstruit un maillage, on le voxelise pour une simulation.</p>",
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
  "lit": "quatre",
  "look": {},
  "scene": "quatre",
  "fig": ""
 },
 {
  "kicker": "4.1",
  "title": "Les maillages",
  "sub": "sommets, arêtes, faces",
  "body": "<p class=\"lede\">Le <b>maillage polygonal</b> est la représentation reine du temps réel : les GPU sont faits pour dessiner des triangles.</p>\n    <ul class=\"rules\"><li><b>Sommets</b> avec attributs : position, normale, coordonnées UV pour les textures, couleur, poids d’os (chapitre 52).</li><li><b>Faces</b> : des triangles (pour le GPU) ou des quadrilatères (pour la modélisation, Blender).</li><li><b>Topologie</b> : un maillage « étanche » (manifold) ferme un volume ; c’est nécessaire pour l’impression 3D et les opérations booléennes.</li><li>Structures d’édition : demi-arêtes (half-edge), BMesh dans Blender.</li></ul>",
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
  "lit": "buffers",
  "look": {},
  "scene": "buffers",
  "fig": ""
 },
 {
  "kicker": "4.2",
  "title": "Les nuages de points",
  "sub": "ce que mesurent les capteurs",
  "body": "<p class=\"lede\">Un nuage de points est une liste de positions, parfois avec couleur, normale et intensité. C’est la sortie brute d’un LiDAR, d’un capteur de profondeur ou d’une photogrammétrie (chapitres 31 et 32).</p>\n    <p>Léger et fidèle, il n’a pas de <b>topologie</b> : on ne sait pas quels points sont voisins sur la surface. Pour l’afficher on dessine des petits disques (splats) ; pour l’utiliser, on reconstruit une surface (Poisson) ou on l’analyse directement (PointNet, chapitre 37).</p>",
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
  "lit": "quatre",
  "look": {},
  "scene": "quatre",
  "fig": ""
 },
 {
  "kicker": "4.3",
  "title": "Voxels et octrees",
  "sub": "découper l’espace en cases",
  "body": "<p class=\"lede\">Un <b>voxel</b> est un pixel en volume. Une grille de voxels décrit l’intérieur et l’extérieur, idéale pour la simulation, l’imagerie médicale ou les mondes destructibles.</p>\n    <p>Défaut : la mémoire croît comme N³ (une grille de 1 024³ compte un milliard de cases). L’<b>octree</b> divise récursivement chaque cube en huit, mais seulement là où il y a de la matière : la mémoire suit la surface plutôt que le volume. Variantes : grilles éparses (OpenVDB), arbres pour le lancer de rayons (chapitre 10).</p>",
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
  "lit": "quatre",
  "look": {},
  "scene": "quatre",
  "fig": ""
 },
 {
  "kicker": "4.4",
  "title": "Comparer",
  "sub": "quel usage pour quelle structure",
  "body": "<table class=\"data\"><tr><th>structure</th><th>forces</th><th>faiblesses</th></tr><tr><td>maillage</td><td>rendu GPU, édition, UV</td><td>reconstruction depuis capteurs</td></tr><tr><td>points</td><td>capture directe, simple</td><td>pas de surface, trous</td></tr><tr><td>voxels</td><td>intérieur, booléens, simulation</td><td>mémoire N³, marches d’escalier</td></tr><tr><td>octree</td><td>mémoire adaptative</td><td>accès plus complexe</td></tr></table>\n    <p class=\"lede\">Les représentations implicites (chapitre 6) et les gaussiennes (chapitre 40) complètent ce tableau.</p>",
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
  "lit": "quatre",
  "look": {},
  "scene": "quatre",
  "fig": ""
 }
];
export const PLATES = {
  quatre: { text: "De gauche à droite : un maillage (sommets et triangles), un nuage de points (positions seules, comme une capture LiDAR), une grille de voxels (cases pleines) et un octree (cases subdivisées seulement là où il y a de la surface).", facts: () => [["maillage", "rendu rapide"], ["points", "capture brute"], ["voxels", "volume, simulation"], ["octree", "économie de mémoire"]] },
  buffers: { text: "Un maillage est envoyé au GPU sous forme de tampons : un tableau de sommets avec leurs attributs (position, normale, coordonnées de texture), et un tableau d’indices qui dit quels sommets forment chaque triangle. Un sommet partagé par six triangles n’est stocké qu’une fois.", facts: () => [["sommet", "≈ 32 octets"], ["indice", "2 ou 4 octets"], ["topologie", "triangles"]] }
};
