export const SPECS = [
 {
  "key": "pn",
  "title": "PointNet",
  "sub": "MLP partagé + max-pooling",
  "kind": "pointnet",
  "x0": 0
 },
 {
  "key": "pnpp",
  "title": "PointNet++ et les graphes",
  "sub": "capter le local",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Échantillonnage",
    "s": "farthest point sampling",
    "pal": "blue"
   },
   {
    "n": "Voisinage",
    "s": "k plus proches voisins, boule",
    "pal": "blue"
   },
   {
    "n": "Mini-PointNet",
    "s": "par voisinage",
    "pal": "red"
   },
   {
    "n": "Hiérarchie",
    "s": "de plus en plus grossier"
   },
   {
    "n": "GNN / DGCNN",
    "s": "arêtes entre voisins",
    "pal": "red"
   },
   {
    "n": "Maillages",
    "s": "convolution sur la surface"
   }
  ],
  "x0": 40
 }
];
