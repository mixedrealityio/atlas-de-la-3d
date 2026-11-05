// Chapitre 72 : Estimer la profondeur par l’IA (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 72 · IA 3D",
  "title": "Estimer la profondeur",
  "sub": "un problème mal posé",
  "body": "<p class=\"lede\">Une photo perd la profondeur. Pourtant, nous la devinons : taille habituelle des objets, perspective, occlusions, ombres, flou. Les réseaux de neurones apprennent ces mêmes indices.</p>\n    <p>La <b>profondeur monoculaire</b> (MiDaS, puis Depth Anything, Depth Pro, Metric3D) produit une carte dense à partir d’une seule image, avec une qualité qui a transformé les usages : flou d’arrière-plan calculé, AR sans capteur de profondeur, conversion de photos en 3D.</p>",
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
  "lit": "mono",
  "look": {},
  "scene": "mono",
  "fig": ""
 },
 {
  "kicker": "72.1",
  "title": "Relative ou métrique",
  "sub": "et la stéréo apprise",
  "body": "<ul class=\"rules\"><li><b>Relative</b> : on sait ce qui est devant ou derrière, pas à combien de mètres.</li><li><b>Métrique</b> : des modèles récents estiment des distances réelles, en connaissant ou en devinant la focale.</li><li><b>Stéréo apprise</b> (RAFT-Stereo, FoundationStereo) : deux vues donnent une profondeur métrique fiable.</li><li><b>Données</b> : beaucoup de rendus synthétiques (Hypersim, chapitre 43), où la profondeur est exacte.</li></ul>",
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
  "lit": "mono",
  "look": {},
  "scene": "mono",
  "fig": ""
 },
 {
  "kicker": "72.2",
  "title": "De la profondeur à la 3D",
  "sub": "rétroprojeter, fusionner",
  "body": "<p class=\"lede\">Avec la projection inverse, chaque pixel devient un point : une image devient un nuage de points (chapitre 4). En fusionnant plusieurs images, on reconstruit une pièce ; c’est ce que font les SLAM neuronaux et les modèles multi-vues (DUSt3R, VGGT, chapitre 41).</p>\n    <p>Le même principe sous-tend toute la reconstruction moderne : optimiser une scène 3D pour que ses rendus correspondent aux images observées (rendu différentiable, chapitre 47).</p>",
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
  "lit": "points",
  "look": {},
  "scene": "points",
  "fig": ""
 }
];
export const PLATES = {
  mono: { text: "Une seule image correspond à une infinité de scènes 3D : le problème est mal posé. Les réseaux l’apprennent statistiquement sur des millions d’images (taille habituelle des objets, perspective, flou, ombres). Avec les paramètres de la caméra, chaque pixel devient un point 3D.", facts: () => [["exemples", "MiDaS, Depth Anything, Depth Pro"], ["sortie", "relative ou métrique"], ["usages", "AR, effets photo, robotique"]] },
  points: { text: "Connaissant la profondeur d’un pixel et la projection de la caméra (chapitre 3), on le renvoie dans l’espace : x = (u − cₓ) · z / f. Une carte de profondeur devient ainsi un nuage de points, que l’on peut fusionner d’une image à l’autre.", facts: () => [["formule", "x = (u − cₓ) z / f"], ["entrée", "profondeur + intrinsèques"], ["sortie", "nuage de points"]] }
};
