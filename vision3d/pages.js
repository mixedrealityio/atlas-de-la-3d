// Chapitre 37 : Comprendre la 3D par la vision (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 37 · IA 3D",
  "title": "Comprendre la 3D",
  "sub": "pourquoi c’est plus difficile que les images",
  "body": "<p class=\"lede\">Une image est une grille régulière : les réseaux convolutifs y glissent un filtre. Les données 3D sont <b>irrégulières</b> (nuages de points), <b>éparses</b> (l’espace est surtout vide) et sans ordre naturel.</p>\n    <p>Trois stratégies : ramener la 3D à une grille (voxels, CNN 3D), traiter les points directement (PointNet), ou utiliser la structure de surface (graphes, maillages). Les transformers 3D (chapitre 41) les complètent.</p>",
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
  "lit": "pn",
  "look": {},
  "scene": "pn",
  "fig": ""
 },
 {
  "kicker": "37.1",
  "title": "Voxels et CNN 3D",
  "sub": "la grille en volume",
  "body": "<p class=\"lede\">On voxelise la scène et l’on applique des convolutions 3D (ResNet 3D, VoxNet). Simple, mais la mémoire croît comme N³.</p>\n    <p>Les <b>convolutions éparses</b> (MinkowskiEngine, spconv, TorchSparse) ne calculent que sur les voxels occupés : c’est la base des détecteurs 3D pour la voiture autonome (VoxelNet, CenterPoint) et de la segmentation de scènes intérieures.</p>",
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
  "lit": "pn",
  "look": {},
  "scene": "pn",
  "fig": ""
 },
 {
  "kicker": "37.2",
  "title": "PointNet",
  "sub": "les points tels quels",
  "body": "<p class=\"lede\">PointNet (Qi et al., 2017) applique à chaque point le même perceptron multicouche, puis une <b>fonction symétrique</b> (max-pooling) qui rend le résultat indépendant de l’ordre des points.</p>\n    <div class=\"eq\">f({x₁ … xₙ}) = γ( max_i h(x_i) )</div>\n    <p>Un petit réseau auxiliaire (T-Net) apprend aussi à aligner le nuage, pour être robuste aux rotations. PointNet classe des objets et segmente chaque point, avec très peu de calcul.</p>",
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
  "lit": "pn",
  "look": {},
  "scene": "pn",
  "fig": ""
 },
 {
  "kicker": "37.3",
  "title": "PointNet++",
  "sub": "une hiérarchie locale",
  "body": "<ul class=\"rules\"><li><b>Farthest point sampling</b> : choisir des centres qui couvrent bien le nuage.</li><li><b>Regroupement</b> : pour chaque centre, ses voisins par k-NN ou dans une boule de rayon donné.</li><li><b>Mini-PointNet</b> sur chaque groupe, puis on recommence à une échelle plus grossière.</li><li>Regroupement <b>multi-échelles</b> pour s’adapter aux densités variables (un LiDAR voit dense près, épars loin).</li></ul>\n    <p class=\"lede\">Les successeurs (Point Transformer, PointNeXt) gardent cette structure avec de meilleurs blocs.</p>",
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
  "lit": "pnpp",
  "look": {},
  "scene": "pnpp",
  "fig": ""
 },
 {
  "kicker": "37.4",
  "title": "Graphes et maillages",
  "sub": "GNN",
  "body": "<p class=\"lede\">Un maillage est un graphe : sommets = nœuds, arêtes = connexions. Les <b>réseaux de neurones de graphes</b> font circuler l’information d’un sommet à ses voisins (passage de messages), ce qui suit la surface plutôt que la distance dans l’espace.</p>\n    <p>DGCNN recalcule le graphe des voisins dans l’espace des caractéristiques à chaque couche. MeshCNN opère sur les arêtes, DiffusionNet sur la surface par diffusion de chaleur. Usages : segmentation de pièces CAO, analyse de formes anatomiques, déformation de maillages.</p>",
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
  "lit": "pnpp",
  "look": {},
  "scene": "pnpp",
  "fig": ""
 }
];
export const PLATES = {
  pn: { text: "Chaque point (x, y, z) passe dans le même petit réseau (MLP partagé), qui en tire des caractéristiques. Pour chaque caractéristique, on garde le maximum sur tous les points : l’ordre des points n’a donc aucune importance. Le vecteur obtenu résume le nuage et sert à le classer ou à le segmenter.", facts: () => [["entrée", "N points (x, y, z)"], ["invariance", "permutation (max)"], ["année", "2017"]] },
  pnpp: { text: "PointNet voit chaque point isolément puis tout le nuage : il ignore les détails locaux. PointNet++ choisit des centres bien répartis, regroupe leurs voisins et applique un petit PointNet à chaque groupe, en plusieurs niveaux, comme les couches d’un réseau convolutif. Les réseaux de graphes relient explicitement les voisins.", facts: () => [["FPS", "points bien répartis"], ["k-NN", "voisinage"], ["DGCNN", "graphe recalculé"]] }
};
