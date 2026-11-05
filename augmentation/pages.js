// Chapitre 44 : Augmentation et prétraitement des données 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 44 · entraînement",
  "title": "Prétraiter et augmenter",
  "sub": "pourquoi c’est indispensable",
  "body": "<p class=\"lede\">Les données 3D arrivent dans des unités, des positions et des orientations arbitraires, avec des densités variables. Un réseau entraîné tel quel apprend ces accidents au lieu des formes.</p>\n    <p>Le <b>prétraitement</b> met tout dans un cadre commun ; l’<b>augmentation</b> crée à chaque époque des variantes aléatoires, ce qui multiplie la taille effective du jeu de données et réduit le surapprentissage.</p>",
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
  "lit": "aug",
  "look": {},
  "scene": "aug",
  "fig": ""
 },
 {
  "kicker": "44.1",
  "title": "Normalisation spatiale",
  "sub": "centrer, mettre à l’échelle, orienter",
  "body": "<ul class=\"rules\"><li><b>Centrer</b> sur le barycentre (ou le centre de la boîte englobante).</li><li><b>Mettre à l’échelle</b> dans la sphère ou le cube unité.</li><li><b>Orienter</b> : aligner sur des axes canoniques (analyse en composantes principales), ou laisser le réseau apprendre l’invariance.</li><li>Pour les scènes : garder l’échelle réelle (en mètres) et l’axe vertical, qui ont un sens.</li></ul>",
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
  "lit": "normal",
  "look": {},
  "scene": "normal",
  "fig": ""
 },
 {
  "kicker": "44.2",
  "title": "Les augmentations",
  "sub": "transformer au hasard",
  "body": "<table class=\"data\"><tr><th>augmentation</th><th>ce qu’elle apprend au modèle</th></tr><tr><td>rotation aléatoire</td><td>ignorer l’orientation</td></tr><tr><td>échelle ± 10 à 20 %</td><td>ignorer la taille exacte</td></tr><tr><td>bruit sur les coordonnées</td><td>résister au bruit des capteurs</td></tr><tr><td>sous-échantillonnage</td><td>résister aux densités variables</td></tr><tr><td>retrait de zones</td><td>résister aux occlusions</td></tr><tr><td>mélange de scènes</td><td>plus de contextes (Mix3D)</td></tr></table>\n    <p class=\"lede\">Pour les maillages : simplification aléatoire, déformations douces. Pour le rendu (NeRF, gaussiennes) : variations d’exposition et de couleur des photos.</p>",
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
  "lit": "aug",
  "look": {},
  "scene": "aug",
  "fig": ""
 },
 {
  "kicker": "44.3",
  "title": "Simplifier et rééchantillonner",
  "sub": "garder l’essentiel",
  "body": "<p class=\"lede\">Les maillages bruts ont parfois des millions de triangles. On les <b>simplifie</b> (fusion d’arêtes par métrique d’erreur quadrique), on en <b>tire des points</b> sur la surface proportionnellement à l’aire des triangles, ou on les <b>voxelise</b>.</p>\n    <p>Le <b>farthest point sampling</b> (chapitre 37) donne des points bien répartis ; le sous-échantillonnage sur grille de voxels homogénéise la densité des scans LiDAR.</p>",
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
  "lit": "aug",
  "look": {},
  "scene": "aug",
  "fig": ""
 }
];
export const PLATES = {
  aug: { text: "On centre et normalise chaque nuage pour stabiliser les gradients, puis on applique des transformations aléatoires différentes à chaque passage : rotations, petites variations d’échelle, bruit sur les coordonnées, tirage d’un nombre fixe de points, suppression de morceaux. Le modèle apprend ainsi à ignorer ce qui ne compte pas.", facts: () => [["normaliser", "centre + rayon 1"], ["rotation", "souvent autour de z"], ["bruit", "σ ≈ 0,01"]] },
  normal: { text: "La normalisation est une transformation affine (chapitre 1) : une translation qui ramène le barycentre à l’origine, puis une mise à l’échelle qui ramène le point le plus éloigné à une distance de 1. Pour une rotation aléatoire, on multiplie par une matrice de rotation tirée au hasard.", facts: () => [["centrer", "p − barycentre"], ["échelle", "÷ max |p|"], ["rotation", "R aléatoire"]] }
};
