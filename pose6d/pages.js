// Chapitre 38 : Détection d’objets et pose 6DoF (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 38 · IA 3D",
  "title": "Détection et pose 6DoF",
  "sub": "où est l’objet, comment est-il tourné",
  "body": "<p class=\"lede\">Estimer la <b>pose 6DoF</b> d’un objet, c’est trouver sa position (x, y, z) et son orientation (roulis, tangage, lacet) par rapport à la caméra.</p>\n    <p>C’est indispensable à la robotique (saisir une pièce) et à la réalité augmentée industrielle : afficher la procédure de démontage exactement sur le moteur réel, sans QR code collé dessus (comparez avec le chapitre 24).</p>",
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
  "lit": "pose",
  "look": {},
  "scene": "pose",
  "fig": ""
 },
 {
  "kicker": "38.1",
  "title": "Boîtes englobantes 3D",
  "sub": "VoteNet et les détecteurs de scènes",
  "body": "<p class=\"lede\">Dans un nuage de points ou une image RGB-D, un détecteur 3D prédit des <b>boîtes orientées</b> : centre, dimensions, angle, classe.</p>\n    <ul class=\"rules\"><li><b>VoteNet</b> : chaque point de surface « vote » pour le centre de l’objet auquel il appartient (inspiré de la transformée de Hough) ; on regroupe les votes et l’on prédit une boîte par groupe.</li><li>Détecteurs LiDAR (PointPillars, CenterPoint) : voxels ou piliers, puis convolutions.</li><li>Détecteurs multi-caméras en vue de dessus (BEV) pour la voiture.</li><li>Jeux de données : ScanNet, SUN RGB-D, KITTI, nuScenes (chapitre 43).</li></ul>",
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
  "lit": "pose",
  "look": {},
  "scene": "pose",
  "fig": ""
 },
 {
  "kicker": "38.2",
  "title": "La pose d’un objet connu",
  "sub": "PVNet, correspondances, raffinement",
  "body": "<p class=\"lede\">Quand on connaît le modèle 3D de l’objet (CAO), on cherche des <b>correspondances</b> entre des points de l’image et des points du modèle.</p>\n    <b>PVNet</b> prédit, pour chaque pixel de l’objet, un vecteur unitaire vers chacun de quelques points clés ; un vote robuste (RANSAC) les localise même en partie cachés, puis un PnP donne la pose. D’autres méthodes régressent directement la pose ou les coordonnées 3D de chaque pixel. Les modèles de fondation récents (FoundationPose, MegaPose) généralisent à des objets jamais vus à l’entraînement, à partir de leur seul modèle CAO.",
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
  "lit": "pose",
  "look": {},
  "scene": "pose",
  "fig": ""
 },
 {
  "kicker": "38.3",
  "title": "L’IA locale sur HoloLens 2",
  "sub": "ce qui tient dans le casque",
  "body": "<p class=\"lede\">HoloLens 2 a un Snapdragon 850 et 4 Go de mémoire : peu, mais assez pour des modèles légers.</p>\n    <ul class=\"rules\"><li>Moteurs : <b>Windows ML</b> ou <b>ONNX Runtime</b> en UWP, <b>Unity Sentis</b> (ex-Barracuda) dans une application Unity.</li><li>Modèles adaptés : détecteurs compacts (YOLO en version nano, MobileNet-SSD), segmentation légère, estimation de points clés ; quantifiés en 8 bits.</li><li>Accès aux images : Media Capture, ou le <b>Research Mode</b> pour les caméras de suivi et la profondeur.</li><li>Cadence : quelques inférences par seconde ; le SLAM maintient la pose entre deux détections.</li><li>Au-delà : <b>Holographic Remoting</b> ou un service sur un PC du réseau local, sans nuage.</li></ul>",
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
  "lit": "local",
  "look": {},
  "scene": "local",
  "fig": ""
 },
 {
  "kicker": "38.4",
  "title": "Le compute pack et les autres casques",
  "sub": "plus de mémoire, plus de modèles",
  "body": "<table class=\"data\"><tr><th>appareil</th><th>calcul</th><th>inférence locale</th></tr><tr><td>Magic Leap 2</td><td>boîtier : AMD 4 cœurs Zen 2, GPU RDNA 2, 16 Go</td><td>ONNX Runtime, Unity Sentis ; modèles moyens</td></tr><tr><td>Quest 3 / 3S</td><td>Snapdragon XR2 Gen 2 avec NPU</td><td>LiteRT (TFLite), Qualcomm AI Engine, Sentis ; accès caméra depuis 2025</td></tr><tr><td>Android XR</td><td>Snapdragon XR2+ Gen 2</td><td>LiteRT, ML Kit ; caméras avec permission</td></tr><tr><td>Vision Pro</td><td>M2 / M5 + Neural Engine</td><td>Core ML, Vision ; accès caméra en entreprise</td></tr></table>\n    <p class=\"lede\">La règle : un modèle quantifié, une cadence réduite, et le SLAM pour lisser. Les petits modèles de langage et de vision peuvent aussi tourner localement pour décrire une scène ou guider un opérateur.</p>",
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
  "lit": "local",
  "look": {},
  "scene": "local",
  "fig": ""
 }
];
export const PLATES = {
  pose: { text: "On repère d’abord l’objet dans l’image, puis on prédit des points 2D correspondant à des points connus de son modèle 3D (PVNet prédit, pour chaque pixel, la direction vers ces points). Un PnP robuste donne la pose, affinée en comparant le rendu du modèle à l’image. Ensuite, un suivi rapide prend le relais.", facts: () => [["sortie", "R (3×3) + t (3)"], ["entrée", "RGB ou RGB-D"], ["référence", "BOP Challenge"]] },
  local: { text: "Le modèle est exporté en ONNX, quantifié pour tenir en mémoire, et exécuté par un moteur d’inférence embarqué. La détection n’a pas besoin de tourner à chaque image : on l’exécute quelques fois par seconde et le SLAM du casque maintient la pose entre deux. Pour les modèles lourds, un PC voisin fait le calcul.", facts: () => [["HoloLens 2", "Snapdragon 850, 4 Go"], ["Magic Leap 2", "AMD Zen 2 + RDNA 2, 16 Go"], ["format", "ONNX"]] }
};
