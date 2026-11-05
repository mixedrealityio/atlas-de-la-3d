// Chapitre 43 : Jeux de données 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 43 · entraînement",
  "title": "Les jeux de données 3D",
  "sub": "la matière première",
  "body": "<p class=\"lede\">Un modèle d’IA 3D n’est bon que si ses données le sont. Or la 3D est rare et chère : un modèle 3D de qualité demande des heures de travail, un scan demande du matériel.</p>\n    <p>On distingue les catalogues d’<b>objets</b> (souvent synthétiques, issus de CAO ou de bibliothèques d’artistes) et les captures de <b>scènes réelles</b> (intérieurs, rues), avec caméras calibrées, profondeur et annotations.</p>",
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
  "lit": "tailles",
  "look": {},
  "scene": "tailles",
  "fig": ""
 },
 {
  "kicker": "43.1",
  "title": "Les catalogues d’objets",
  "sub": "ShapeNet, Objaverse",
  "body": "<ul class=\"rules\"><li><b>ShapeNet</b> (2015) : environ 51 000 modèles CAO dans 55 catégories (ShapeNetCore), alignés et annotés ; la référence historique pour la classification et la reconstruction.</li><li><b>ModelNet</b> : 12 000 modèles, base des premiers tests de PointNet.</li><li><b>Objaverse</b> (2022) : plus de 800 000 objets variés avec textures, issus de Sketchfab ; <b>Objaverse-XL</b> : plus de 10 millions d’objets.</li><li>Licences variées : il faut les vérifier objet par objet pour un usage commercial.</li></ul>",
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
  "lit": "tailles",
  "look": {},
  "scene": "tailles",
  "fig": ""
 },
 {
  "kicker": "43.2",
  "title": "Les scènes réelles",
  "sub": "ScanNet, KITTI, CO3D",
  "body": "<table class=\"data\"><tr><th>jeu</th><th>contenu</th><th>usage</th></tr><tr><td>ScanNet</td><td>≈ 1 500 scans d’intérieurs RGB-D, maillages, segmentation</td><td>compréhension de scène</td></tr><tr><td>KITTI, nuScenes, Waymo</td><td>LiDAR + caméras en voiture</td><td>détection 3D, conduite</td></tr><tr><td>CO3D</td><td>≈ 19 000 vidéos d’objets courants, poses calibrées, masques</td><td>reconstruction, NeRF</td></tr><tr><td>ARKitScenes, ScanNet++</td><td>scans haute précision</td><td>AR, reconstruction</td></tr></table>\n    <p class=\"lede\">Ces jeux servent de bancs d’essai communs : chaque article publie ses scores dessus, ce qui permet de comparer les méthodes.</p>",
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
  "lit": "tailles",
  "look": {},
  "scene": "tailles",
  "fig": ""
 },
 {
  "kicker": "43.3",
  "title": "Préparer les données",
  "sub": "le travail invisible",
  "body": "<p class=\"lede\">La plus grande partie du travail est la préparation : convertir les formats, mettre à l’échelle, réorienter, éliminer les objets cassés ou de mauvaise qualité, rendre des vues et produire des légendes.</p>\n    <p>Les pipelines tournent souvent Blender sans interface (chapitre 30) sur des centaines de machines. Les <b>données synthétiques</b> (scènes générées procéduralement, chapitre 53) complètent les données réelles pour la robotique et la détection.</p>",
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
  "lit": "prep",
  "look": {},
  "scene": "prep",
  "fig": ""
 }
];
export const PLATES = {
  tailles: { text: "Nombre d’objets ou de scènes dans quelques jeux de données de référence, sur une échelle logarithmique (chaque barre = log₁₀ du nombre). Les jeux de scènes réelles sont bien plus petits que les catalogues d’objets synthétiques.", facts: () => [["synthétique", "ShapeNet, Objaverse"], ["réel", "ScanNet, CO3D, KITTI"], ["plus grand", "Objaverse-XL"]] },
  prep: { text: "Les objets bruts sont hétérogènes : unités, orientations et qualités variables, textures manquantes. On filtre, on normalise, on rend des vues sous des caméras connues, et l’on ajoute des légendes, souvent produites par un modèle vision-langage.", facts: () => [["légendes", "générées (Cap3D)"], ["rendus", "Blender sans interface"], ["filtrage", "qualité esthétique"]] }
};
