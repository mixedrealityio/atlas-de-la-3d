// Chapitre 78 : Glossaire (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 78 · aller plus loin",
  "title": "Glossaire (1/4)",
  "sub": "6DoF à eyebox",
  "body": "<table class=\"data\"><tr><th>terme</th><th>définition</th></tr><tr><td>6DoF</td><td>position et orientation : six degrés de liberté (22)</td></tr><tr><td>AO</td><td>occlusion ambiante : assombrir les creux (11)</td></tr><tr><td>ASTC, BC7</td><td>formats de textures compressées lus par le GPU (57)</td></tr><tr><td>BVH</td><td>hiérarchie de boîtes englobantes qui accélère les rayons (10)</td></tr><tr><td>Mipmaps</td><td>versions réduites d’une texture (62)</td></tr><tr><td>CAVE</td><td>salle immersive à écrans projetés (67)</td></tr><tr><td>Draw call</td><td>appel de dessin envoyé au GPU (64)</td></tr><tr><td>ECS</td><td>entités, composants, systèmes (49)</td></tr><tr><td>Eyebox</td><td>zone où l’œil voit l’image à travers l’optique (16)</td></tr></table>",
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
  "lit": "reps",
  "look": {},
  "scene": "reps",
  "fig": ""
 },
 {
  "kicker": "78.1",
  "title": "Glossaire (2/4)",
  "sub": "FOV à NDC",
  "body": "<table class=\"data\"><tr><th>terme</th><th>définition</th></tr><tr><td>FOV</td><td>champ de vision, en degrés (3)</td></tr><tr><td>Fovéal</td><td>rendu net seulement là où l’on regarde (27)</td></tr><tr><td>Frustum</td><td>tronc de vue de la caméra (3)</td></tr><tr><td>Gaussian Splatting</td><td>scène en millions de gaussiennes 3D (40)</td></tr><tr><td>Gimbal lock</td><td>blocage de cardan des angles d’Euler (2)</td></tr><tr><td>glTF</td><td>format 3D de diffusion du Khronos Group (35)</td></tr><tr><td>HRTF</td><td>filtre de la tête et des oreilles pour l’audio 3D (29)</td></tr><tr><td>IBL</td><td>éclairage par une image d’environnement (9)</td></tr><tr><td>IPD</td><td>écart interpupillaire, ≈ 63 mm (20)</td></tr><tr><td>LOD</td><td>niveaux de détail (51)</td></tr><tr><td>Manifold</td><td>surface étanche, chaque arête partagée par deux faces (4)</td></tr><tr><td>NDC</td><td>coordonnées normalisées après projection (1)</td></tr></table>",
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
  "lit": "reps",
  "look": {},
  "scene": "reps",
  "fig": ""
 },
 {
  "kicker": "78.2",
  "title": "Glossaire (3/4)",
  "sub": "NeRF à SDF",
  "body": "<table class=\"data\"><tr><th>terme</th><th>définition</th></tr><tr><td>NeRF</td><td>scène dans un réseau, rendue par intégration volumétrique (39)</td></tr><tr><td>NURBS</td><td>courbes rationnelles, standard de la CAO (5)</td></tr><tr><td>OpenXR</td><td>API commune des casques (58)</td></tr><tr><td>OST, VST</td><td>voir le réel à travers le verre ou en vidéo (19)</td></tr><tr><td>PBR</td><td>rendu physique : couleur, métal, rugosité (9)</td></tr><tr><td>PCCR</td><td>suivi du regard par reflets cornéens (27)</td></tr><tr><td>PnP</td><td>pose d’une caméra à partir de points connus (24)</td></tr><tr><td>PPD</td><td>pixels par degré ; l’œil ≈ 60 (14)</td></tr><tr><td>Quaternion</td><td>rotation sans blocage, interpolable (2)</td></tr><tr><td>SDF</td><td>fonction de distance signée (6)</td></tr></table>",
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
  "lit": "reps",
  "look": {},
  "scene": "reps",
  "fig": ""
 },
 {
  "kicker": "78.3",
  "title": "Glossaire (4/4)",
  "sub": "SfM à XR",
  "body": "<table class=\"data\"><tr><th>terme</th><th>définition</th></tr><tr><td>SfM, MVS</td><td>poses et nuage épars, puis nuage dense (31)</td></tr><tr><td>Shadow map</td><td>carte de profondeur vue de la lumière (11)</td></tr><tr><td>SLAM</td><td>se localiser en cartographiant (23)</td></tr><tr><td>SLERP</td><td>interpolation sphérique de quaternions (2)</td></tr><tr><td>Timewarp</td><td>reprojection tardive de l’image (18)</td></tr><tr><td>Tone mapping</td><td>du HDR à l’écran (63)</td></tr><tr><td>UV</td><td>coordonnées de texture (62)</td></tr><tr><td>VAC</td><td>conflit vergence-accommodation (21)</td></tr><tr><td>Waveguide</td><td>guide d’ondes des lunettes AR (16)</td></tr><tr><td>WebXR</td><td>API de la VR et de l’AR dans le navigateur (56)</td></tr><tr><td>XR</td><td>terme qui couvre VR, AR et MR (69)</td></tr></table>",
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
  "lit": "reps",
  "look": {},
  "scene": "reps",
  "fig": ""
 }
];
export const PLATES = {
  reps: { text: "Chaque domaine de la 3D a son vocabulaire : maillage, nuage de points, voxel, octree… Ce glossaire rassemble les termes de l’atlas avec le chapitre où ils sont expliqués.", facts: () => [["termes", "≈ 70"], ["classement", "alphabétique"], ["renvois", "numéros de chapitre"]] }
};
