// Chapitre 24 : La réalité augmentée optique et sa calibration (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 24 · VR et AR",
  "title": "La réalité augmentée optique",
  "sub": "OST : les défis",
  "body": "<p class=\"lede\">Voir le réel à travers le verre est confortable et sûr, mais pose quatre problèmes propres.</p>\n    <ul class=\"rules\"><li><b>Transparence</b> : le guide d’ondes laisse passer 50 à 85 % de la lumière ; il assombrit un peu le monde.</li><li><b>Contraste en plein jour</b> : le virtuel s’ajoute à un fond qui peut faire 10 000 nits ; d’où des visières teintées et la gradation dynamique (Magic Leap 2 assombrit localement le verre).</li><li><b>Occlusion</b> : un vrai objet doit cacher l’hologramme (on ne dessine pas ce qui est derrière le maillage de la pièce), mais un hologramme ne peut pas cacher le réel.</li><li><b>Calage</b> : l’hologramme doit coller au réel, à quelques millimètres près.</li></ul>",
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
  "lit": "qr",
  "look": {},
  "scene": "qr",
  "fig": ""
 },
 {
  "kicker": "24.1",
  "title": "Le calage géométrique",
  "sub": "registration",
  "body": "<p class=\"lede\">Une erreur de 1° de rotation fait un écart de 1,7 cm à un mètre. Pour une aide au montage, au perçage ou à la chirurgie, il faut quelques millimètres.</p>\n    <p>Sources d’erreur : calibration de la caméra, dérive du SLAM, latence (l’hologramme traîne quand on tourne la tête), et position de l’œil par rapport à l’afficheur : si l’œil bouge derrière le verre, l’hologramme semble glisser. Les casques avec eye tracking (HoloLens 2, Magic Leap 2) corrigent le rendu selon la position réelle de la pupille.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "24.2",
  "title": "Calibrer avec un QR code",
  "sub": "repère absolu, hors ligne",
  "body": "<ul class=\"rules\"><li><b>Détection</b> : trouver les motifs de repérage dans l’image (seuillage, contours).</li><li><b>Coins</b> : affiner les quatre coins au sous-pixel.</li><li><b>PnP</b> : connaissant la taille réelle du code et les paramètres de la caméra, calculer la rotation et la translation (cv::solvePnP, méthode IPPE pour les carrés).</li><li><b>Filtrer</b> dans le temps et fusionner avec le SLAM, puis créer une ancre.</li></ul>\n    <p class=\"lede\">HoloLens 2 détecte les QR codes en natif (API Microsoft.MixedReality.QR, extension OpenXR XR_MSFT_scene_marker), sans réseau. Sur Quest, Android XR ou un PC, on peut faire la même chose avec OpenCV ou les marqueurs ArUco et AprilTag, plus robustes à distance.</p>",
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
  "lit": "qr",
  "look": {},
  "scene": "qr",
  "fig": ""
 },
 {
  "kicker": "24.3",
  "title": "La vision par ordinateur hors ligne",
  "sub": "sans nuage, sans IA si besoin",
  "body": "<p class=\"lede\">Beaucoup de sites industriels interdisent les services en ligne. Tout peut se faire sur l’appareil :</p>\n    <table class=\"data\"><tr><th>besoin</th><th>méthode hors ligne</th></tr><tr><td>repère commun</td><td>QR code, ArUco, AprilTag + PnP</td></tr><tr><td>objet connu</td><td>suivi par modèle 3D (contours, Vuforia Model Targets, appariement de points)</td></tr><tr><td>caméra</td><td>calibration par damier (OpenCV calibrateCamera)</td></tr><tr><td>vérification</td><td>mire de points à pointer, erreur mesurée</td></tr></table>\n    <p>Sur HoloLens 2, on accède aux caméras par le mode recherche (Research Mode) ou les API Media Capture, et l’on fait tourner OpenCV compilé pour ARM64. Les modèles d’IA locaux (chapitre 38) complètent pour les objets sans marqueur.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "24.4",
  "title": "Calibrer l’œil et l’afficheur",
  "sub": "SPAAM et eye tracking",
  "body": "<p class=\"lede\">En optical see-through, ce que voit l’œil dépend de sa position derrière le verre : la caméra du casque ne le voit pas.</p>\n    <p>La méthode <b>SPAAM</b> (single point active alignment) demande à l’utilisateur d’aligner plusieurs fois une croix affichée sur un point réel connu ; on en déduit la projection œil-afficheur. Les casques avec eye tracking font une calibration automatique de la position des yeux au démarrage et la mettent à jour en continu.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 }
];
export const PLATES = {
  qr: { text: "La caméra du casque filme un QR code de taille connue. On repère ses trois motifs de coin, on localise ses quatre coins au pixel près, puis un algorithme PnP (perspective-n-point) calcule la position et l’orientation du code par rapport à la caméra. L’hologramme est posé dans ce repère.", facts: () => [["entrée", "image + taille du code"], ["calcul", "PnP (solvePnP d’OpenCV)"], ["sortie", "pose 6DoF"]] },
  chaine: { text: "Pour qu’un hologramme tombe exactement sur un objet réel, il faut connaître toute la chaîne : les paramètres internes de la caméra, sa position sur le casque, la pose du casque dans le monde (SLAM ou marqueur), et, en optical see-through, la position de l’œil par rapport à l’afficheur.", facts: () => [["outils", "OpenCV, Kalibr"], ["OST", "dépend de l’œil"], ["cible", "quelques mm à 1 m"]] }
};
