// Chapitre 40 : Le Gaussian Splatting 3D (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 40 · IA 3D",
  "title": "Le Gaussian Splatting",
  "sub": "Kerbl et al., 2023",
  "body": "<p class=\"lede\">Le <b>3D Gaussian Splatting</b> (3DGS) remplace le réseau du NeRF par des millions de primitives <b>explicites</b> : des gaussiennes 3D, comme de petites taches floues orientées.</p>\n    <p>Qualité comparable aux meilleurs NeRF, entraînement en quelques dizaines de minutes, et surtout <b>rendu en temps réel</b> (plus de 100 images par seconde) : il est devenu la méthode standard pour capturer des scènes réelles, y compris pour la VR.</p>",
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
  "lit": "nuage",
  "look": {},
  "scene": "nuage",
  "fig": ""
 },
 {
  "kicker": "40.1",
  "title": "Une gaussienne",
  "sub": "ce qu’elle contient",
  "body": "<ul class=\"rules\"><li>Un <b>centre</b> μ (x, y, z).</li><li>Une <b>covariance</b> Σ qui donne sa forme d’ellipsoïde : on la stocke comme une échelle (3 nombres) et une rotation (un quaternion, chapitre 2), pour qu’elle reste valide pendant l’optimisation : Σ = R S Sᵀ Rᵀ.</li><li>Une <b>opacité</b> α.</li><li>Une <b>couleur</b> qui dépend de la direction, en harmoniques sphériques (jusqu’à 48 nombres par gaussienne au degré 3).</li></ul>\n    <p class=\"lede\">Une scène compte de quelques centaines de milliers à plusieurs millions de gaussiennes : des centaines de mégaoctets avant compression.</p>",
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
  "lit": "rendu",
  "look": {},
  "scene": "rendu",
  "fig": ""
 },
 {
  "kicker": "40.2",
  "title": "La rasterisation par splats",
  "sub": "pourquoi c’est si rapide",
  "body": "<p class=\"lede\">Une gaussienne 3D projetée en perspective reste (approximativement) une gaussienne 2D : on calcule sa covariance à l’écran avec la jacobienne de la projection.</p>\n    <p>Le rendu est un tri suivi d’un mélange alpha, exactement ce que les GPU font vite. Ce rendu est aussi <b>différentiable</b> : on rétropropage l’erreur de couleur jusqu’aux paramètres de chaque gaussienne.</p>",
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
  "lit": "rendu",
  "look": {},
  "scene": "rendu",
  "fig": ""
 },
 {
  "kicker": "40.3",
  "title": "Optimiser et élaguer",
  "sub": "densification adaptative",
  "body": "<p class=\"lede\">L’optimisation alterne descente de gradient et contrôle de la densité :</p>\n    <ul class=\"rules\"><li><b>Cloner</b> les petites gaussiennes dans les zones sous-reconstruites (fort gradient).</li><li><b>Diviser</b> les grosses gaussiennes qui couvrent trop de détails.</li><li><b>Élaguer</b> les gaussiennes presque transparentes ou trop grandes.</li><li>Remettre périodiquement les opacités à zéro pour éliminer les flotteurs.</li></ul>\n    <p>Variantes : compression (quantification, élagage de 90 % des gaussiennes), gaussiennes 2D pour des surfaces nettes, gaussiennes 4D pour la vidéo (chapitre 34), rendu dans three.js, Babylon.js, Unity, Unreal et sur casques.</p>",
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
  "lit": "nuage",
  "look": {},
  "scene": "nuage",
  "fig": ""
 }
];
export const PLATES = {
  nuage: { text: "Au départ, les gaussiennes sont placées sur les points de la SfM (chapitre 31). L’optimisation ajuste la position, la taille, l’orientation, l’opacité et la couleur de chacune pour que le rendu ressemble aux photos. La figure rejoue ce resserrement.", facts: () => [["départ", "points SfM"], ["paramètres", "μ, Σ, α, couleur"], ["vitesse", "> 100 images/s"]] },
  rendu: { text: "Chaque gaussienne 3D est projetée analytiquement en une ellipse 2D. L’écran est découpé en tuiles ; pour chaque tuile, les gaussiennes qui la touchent sont triées par profondeur, puis mélangées de l’avant vers l’arrière. Pas de rayons, pas de réseau : seulement de la rasterisation, d’où la vitesse.", facts: () => [["tri", "radix sort GPU"], ["mélange", "alpha compositing"], ["dérivable", "pour l’entraînement"]] }
};
