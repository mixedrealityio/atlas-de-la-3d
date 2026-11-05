// Chapitre 69 : Le spectre de Milgram et l’AR mobile (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 69 · VR et AR",
  "title": "Le spectre de Milgram",
  "sub": "AR, MR, XR : de quoi parle-t-on ?",
  "body": "<p class=\"lede\">Les mots changent selon les fabricants ; le continuum de Milgram reste la référence.</p>\n    <ul class=\"rules\"><li><b>AR</b> : des éléments virtuels ajoutés au réel (une flèche de navigation).</li><li><b>MR</b> : virtuel et réel coexistent et interagissent (un objet caché derrière une vraie table, éclairé par la pièce).</li><li><b>Virtualité augmentée</b> : du réel inséré dans le virtuel (ses mains filmées dans un jeu VR).</li><li><b>XR</b> : le terme qui couvre tout.</li></ul>\n    <p>Ce qui distingue la réalité mixte moderne des affichages tête haute des années 2010, c’est la <b>compréhension de la scène</b> : la pièce est reconstruite et étiquetée (chapitre 23).</p>",
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
  "lit": "continuum",
  "look": {},
  "scene": "continuum",
  "fig": ""
 },
 {
  "kicker": "69.1",
  "title": "Trois familles, trois compromis",
  "sub": "téléphone, casque vidéo, casque optique",
  "body": "<table class=\"data\"><tr><th>famille</th><th>maximise</th><th>exemples</th></tr><tr><td>AR mobile (écran)</td><td>l’audience</td><td>iPhone, Android</td></tr><tr><td>casque vidéo (VST)</td><td>le contrôle de l’image, l’occlusion, le champ</td><td>Quest 3, Vision Pro, Galaxy XR</td></tr><tr><td>casque optique (OST)</td><td>la transparence, le contact visuel</td><td>HoloLens 2, Magic Leap 2, lunettes AR</td></tr></table>\n    <p class=\"lede\">Le choix dépend de l’usage, pas de la technologie la plus avancée (chapitre 19).</p>",
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
  "lit": "continuum",
  "look": {},
  "scene": "continuum",
  "fig": ""
 },
 {
  "kicker": "69.2",
  "title": "L’AR mobile",
  "sub": "ARKit, ARCore et le LiDAR",
  "body": "<p class=\"lede\">Le téléphone est le premier appareil d’AR : caméra, centrale inertielle, puissance de calcul et écran réunis. Le <b>LiDAR</b> des modèles haut de gamme a changé la donne : occlusion réaliste, capture rapide d’une pièce (RoomPlan), mesures.</p>\n    <p>Limites : un petit écran (pas d’immersion), un bras qui fatigue, l’autonomie. Mais une audience de milliards d’appareils, et une distribution instantanée par un lien ou un QR code.</p>",
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
  "lit": "mobile",
  "look": {},
  "scene": "mobile",
  "fig": ""
 },
 {
  "kicker": "69.3",
  "title": "WebAR et filtres sociaux",
  "sub": "l’AR la plus utilisée au monde",
  "body": "<ul class=\"rules\"><li><b>WebXR</b> et les cadres WebAR (8th Wall, MindAR, Zappar) : l’AR dans le navigateur, sans installation (chapitre 56).</li><li><b>Filtres sociaux</b> : Snapchat (Lens Studio), Instagram et Facebook (Meta Spark, fermé en 2025), TikTok (Effect House) ; suivi du visage, segmentation, physique des cheveux.</li><li><b>Essayage virtuel</b> de lunettes, maquillage, chaussures (chapitre 75).</li></ul>\n    <p class=\"lede\">Pour beaucoup de marques et de musées, l’AR mobile est le premier, et souvent le seul, canal nécessaire ; pour d’autres, c’est le laboratoire avant le casque.</p>",
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
  "lit": "mobile",
  "look": {},
  "scene": "mobile",
  "fig": ""
 }
];
export const PLATES = {
  continuum: { text: "En 1994, Paul Milgram et Fumio Kishino décrivent un continuum allant de l’environnement réel au virtuel pur. Entre les deux : la réalité augmentée, la virtualité augmentée et, au milieu, la réalité mixte, où le virtuel est caché par le réel, éclairé comme lui et posé sur lui.", facts: () => [["XR", "terme parapluie"], ["MR", "compréhension de la scène"], ["VR", "remplace le réel"]] },
  mobile: { text: "ARKit (2017) et ARCore (2018) transforment les téléphones en systèmes SLAM : estimation de pose, détection de plans, profondeur (LiDAR sur les iPhone et iPad Pro), suivi d’images et de visages. L’AR atteint ainsi des milliards d’appareils, par application, par le web ou par les réseaux sociaux.", facts: () => [["Apple", "ARKit, RealityKit"], ["Google", "ARCore, Scene Semantics"], ["multiplateforme", "Unity AR Foundation"]] }
};
