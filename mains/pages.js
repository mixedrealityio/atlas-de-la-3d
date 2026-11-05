// Chapitre 25 : Le suivi optique des mains (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 25 · interaction",
  "title": "Le suivi des mains",
  "sub": "les mains comme manettes",
  "body": "<p class=\"lede\">Les casques récents suivent les mains <b>sans gant ni manette</b>, avec les caméras qui servent déjà au SLAM.</p>\n    <p>C’est l’entrée la plus naturelle : pointer, saisir, pincer. Elle a ses limites : pas de bouton physique ni de retour haptique, fatigue des bras levés (« bras de gorille »), et les mains doivent rester dans le champ des caméras.</p>",
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
  "lit": "squelette",
  "look": {},
  "scene": "squelette",
  "fig": ""
 },
 {
  "kicker": "25.1",
  "title": "Le pipeline",
  "sub": "détection, points clés, modèle",
  "body": "<ul class=\"rules\"><li><b>Détection</b> : un réseau léger trouve les mains (boîte englobante), parfois une seule fois puis suivi.</li><li><b>Points clés</b> : un réseau convolutif ou un transformer prédit les 21 articulations en 2D et leur profondeur relative.</li><li><b>Modèle cinématique</b> : un squelette de main avec des longueurs d’os fixes et des limites d’angles est ajusté aux points (optimisation ou réseau).</li><li><b>Stéréo</b> : deux caméras donnent la vraie profondeur ; une seule caméra la déduit de la taille connue de la main.</li></ul>\n    <p class=\"lede\">Les réseaux sont entraînés sur des millions d’images de mains, souvent synthétiques (rendues avec des mains 3D variées) ou capturées avec des systèmes à marqueurs.</p>",
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
  "kicker": "25.2",
  "title": "La représentation OpenXR",
  "sub": "XR_EXT_hand_tracking",
  "body": "<p class=\"lede\">OpenXR fournit, pour chaque main, <b>26 articulations</b> avec pose, rayon et vitesse : paume, poignet, et pour chaque doigt métacarpe, phalanges et bout.</p>\n    <p>Le même format est exposé par WebXR (Hand Input), Unity (XR Hands) et Unreal. Les applications l’utilisent pour afficher une main virtuelle, détecter des gestes et faire de la physique (saisir un objet avec des collisionneurs sur les doigts).</p>",
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
  "lit": "squelette",
  "look": {},
  "scene": "squelette",
  "fig": ""
 },
 {
  "kicker": "25.3",
  "title": "Occlusions et robustesse",
  "sub": "quand ça décroche",
  "body": "<p class=\"lede\">Les difficultés : doigts qui se cachent entre eux, mains qui se croisent, mains qui tiennent un objet, contre-jour, gants.</p>\n    <p>Les réseaux récents prédisent même les doigts cachés à partir du reste de la main. La <b>latence</b> (30 à 50 ms) se sent sur les gestes rapides ; la prédiction et le lissage la réduisent, au prix d’un léger retard sur les changements brusques.</p>",
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
  "kicker": "25.4",
  "title": "Gants, EMG et corps entier",
  "sub": "au-delà des caméras",
  "body": "<table class=\"data\"><tr><th>capteur</th><th>principe</th><th>exemples</th></tr><tr><td>caméras</td><td>réseau sur les images, 21 points par main</td><td>Quest, Vision Pro, MediaPipe, Ultraleap</td></tr><tr><td>gants instrumentés</td><td>capteurs de flexion et IMU</td><td>Manus, StretchSense</td></tr><tr><td>EMG au poignet</td><td>lire les signaux des muscles et des nerfs</td><td>bracelet de Meta (Orion, 2024)</td></tr><tr><td>corps entier</td><td>estimation par caméra ou IA</td><td>BlazePose (33 points), OpenPose, suivi du corps Quest</td></tr></table>\n    <p class=\"lede\">L’EMG promet un contrôle discret, sans lever la main ni être vu par une caméra. Les standards de geste se fixent : pincer pour sélectionner, fermer le poing pour saisir, regard + geste pour lever les ambiguïtés.</p>",
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
  squelette: { text: "Le poignet et quatre points par doigt : 21 articulations (OpenXR en définit 26, en ajoutant la paume et les métacarpes). À chaque image, un réseau estime leurs positions 3D ; un modèle cinématique de la main garantit des longueurs d’os constantes et des angles plausibles. Ici, la main se ferme en pincement.", facts: () => [["articulations", "21 (MediaPipe), 26 (OpenXR)"], ["fréquence", "30 à 90 Hz"], ["précision", "≈ 1 cm"]] },
  chaine: { text: "Un premier réseau détecte les mains dans l’image. Une imagette de chaque main passe dans un second réseau qui prédit les articulations. Un modèle 3D de la main, ajusté à ces points (et à ceux de l’autre caméra), donne la pose finale, lissée dans le temps pour éviter les tremblements.", facts: () => [["exemples", "Quest, Vision Pro, HoloLens 2"], ["libre", "MediaPipe Hands"], ["modèle", "MANO (recherche)"]] }
};
