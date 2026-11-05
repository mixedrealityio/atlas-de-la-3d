// Chapitre 47 : Le rendu différentiable (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 47 · entraînement",
  "title": "Le rendu différentiable",
  "sub": "relier la 3D aux images",
  "body": "<p class=\"lede\">Les photos sont abondantes, les modèles 3D rares. Pour apprendre la 3D avec des images, il faut pouvoir répondre à : « si je déplace ce sommet, comment change l’image ? »</p>\n    <p>Un <b>rendu différentiable</b> fournit ces dérivées. Il est au cœur des NeRF, des gaussiennes, de la génération par SDS (chapitre 42), de la capture de matériaux (chapitre 36) et de l’estimation de pose par rendu-comparaison.</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "47.1",
  "title": "Le problème des bords",
  "sub": "couvert ou pas couvert",
  "body": "<p class=\"lede\">En rasterisation classique, un pixel est couvert ou non par un triangle : la dérivée par rapport à la position du triangle est nulle presque partout, et infinie au bord.</p>\n    <ul class=\"rules\"><li><b>Soft rasterizer</b> : chaque triangle couvre les pixels avec une probabilité qui décroît en douceur hors du triangle.</li><li><b>Antialiasing analytique</b> (nvdiffrast) : on calcule le gradient à partir de la couverture partielle des pixels de bord.</li><li><b>Monte-Carlo</b> sur les bords (Mitsuba 3) pour le lancer de rayons différentiable physique.</li></ul>",
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
  "lit": "ray",
  "look": {},
  "scene": "ray",
  "fig": ""
 },
 {
  "kicker": "47.2",
  "title": "Les bibliothèques",
  "sub": "ce qu’on utilise",
  "body": "<table class=\"data\"><tr><th>bibliothèque</th><th>éditeur</th><th>spécialité</th></tr><tr><td>PyTorch3D</td><td>Meta</td><td>maillages, points, pertes 3D, caméras</td></tr><tr><td>Kaolin</td><td>NVIDIA</td><td>représentations variées, FlexiCubes, DMTet</td></tr><tr><td>nvdiffrast</td><td>NVIDIA</td><td>rasterisation très rapide, textures</td></tr><tr><td>gsplat</td><td>nerfstudio</td><td>gaussiennes différentiables</td></tr><tr><td>Mitsuba 3, Dr.Jit</td><td>EPFL</td><td>lancer de rayons physique différentiable</td></tr></table>\n    <p class=\"lede\">Toutes s’intègrent à PyTorch : la perte se rétropropage du rendu jusqu’aux paramètres 3D, et au-delà jusqu’aux poids d’un réseau qui les a prédits.</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "47.3",
  "title": "Applications",
  "sub": "ce que l’on optimise",
  "body": "<ul class=\"rules\"><li><b>Reconstruction</b> : un maillage, une texture ou des gaussiennes à partir de photos.</li><li><b>Pose</b> : faire coïncider le rendu d’un modèle CAO avec l’image (chapitre 38).</li><li><b>Matériaux et éclairage</b> : retrouver une SVBRDF ou l’éclairage d’une scène (rendu inverse).</li><li><b>Génération</b> : SDS et texturation par diffusion.</li><li><b>Apprentissage</b> : entraîner un réseau qui prédit la 3D en le supervisant seulement par des images.</li></ul>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 }
];
export const PLATES = {
  boucle: { text: "Un moteur de rendu différentiable calcule non seulement l’image, mais aussi comment chaque pixel change quand on bouge un sommet, une couleur ou une gaussienne. On peut alors optimiser la 3D par descente de gradient pour que ses rendus ressemblent aux photos.", facts: () => [["dérivée", "∂pixel / ∂paramètre"], ["difficulté", "bords et occlusions"], ["usages", "reconstruction, génération"]] },
  ray: { text: "Le rendu volumique (chapitre 39) est naturellement dérivable : c’est une somme pondérée des échantillons le long du rayon. La rasterisation de triangles, elle, a des sauts aux bords des objets (un pixel est couvert ou non) : il faut l’adoucir pour obtenir des gradients.", facts: () => [["volumique", "dérivable"], ["triangles", "bords à adoucir"], ["gaussiennes", "dérivables"]] }
};
