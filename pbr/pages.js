// Chapitre 9 : Le rendu physique (PBR) (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 9 · rendu",
  "title": "Le rendu physique",
  "sub": "PBR : physically based rendering",
  "body": "<p class=\"lede\">Avant le PBR, chaque artiste réglait des reflets « à l’œil » pour un éclairage donné. Changez la lumière, et tout sonne faux.</p>\n    <p>Le PBR décrit les matériaux par des grandeurs physiques (couleur, métal, rugosité) et calcule la lumière avec des lois qui <b>conservent l’énergie</b> : une surface ne renvoie jamais plus de lumière qu’elle n’en reçoit. Le même matériau reste crédible au soleil, dans une pièce ou dans une scène de réalité mixte éclairée par l’environnement réel.</p>",
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
  "lit": "brdf",
  "look": {},
  "scene": "brdf",
  "fig": ""
 },
 {
  "kicker": "9.1",
  "title": "L’équation du rendu",
  "sub": "Kajiya, 1986",
  "body": "<div class=\"eq\">L_o = L_e + ∫ f_r · L_i · (n·ω_i) dω_i</div>\n    <p class=\"lede\">La lumière qui part d’un point vers l’œil est la lumière émise, plus l’intégrale sur toutes les directions de la lumière reçue, pondérée par la <b>BRDF</b> f_r (comment le matériau renvoie la lumière) et par le cosinus de l’angle d’incidence.</p>\n    <p>Tout le rendu consiste à approcher cette intégrale : en temps réel avec quelques lumières et des cartes d’environnement, en lancer de rayons par échantillonnage (chapitre 10).</p>",
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
  "lit": "brdf",
  "look": {},
  "scene": "brdf",
  "fig": ""
 },
 {
  "kicker": "9.2",
  "title": "Les microfacettes",
  "sub": "Cook-Torrance",
  "body": "<p class=\"lede\">La partie spéculaire de la BRDF s’écrit :</p>\n    <div class=\"eq\">f_s = D · F · G / (4 (n·l)(n·v))</div>\n    <ul class=\"rules\"><li><b>D</b> (GGX) : plus la rugosité est grande, plus le reflet est large et terne.</li><li><b>F</b> (Fresnel, approximation de Schlick) : tout devient miroir sous un angle rasant, même le bois.</li><li><b>G</b> : les microfacettes se cachent les unes les autres, surtout aux angles rasants.</li></ul>\n    <p>Les <b>métaux</b> n’ont pas de diffus et colorent leurs reflets ; les <b>diélectriques</b> (plastique, bois, peau) reflètent environ 4 % en face et ont une couleur diffuse.</p>",
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
  "lit": "brdf",
  "look": {},
  "scene": "brdf",
  "fig": ""
 },
 {
  "kicker": "9.3",
  "title": "Éclairer par l’environnement",
  "sub": "IBL et sondes",
  "body": "<p class=\"lede\">Une scène est éclairée par tout ce qui l’entoure, pas seulement par des lampes. On capture l’environnement dans une image à 360° (HDRI) et on la <b>pré-filtre</b> par niveaux de rugosité : c’est l’éclairage par image (IBL).</p>\n    <p>En réalité augmentée, ARKit, ARCore et WebXR (Lighting Estimation) estiment l’éclairage réel depuis les caméras et fournissent une carte d’environnement : un objet virtuel posé sur une table reflète la pièce.</p>",
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
  "lit": "mat",
  "look": {},
  "scene": "mat",
  "fig": ""
 },
 {
  "kicker": "9.4",
  "title": "Les cartes d’un matériau",
  "sub": "ce que peint l’artiste",
  "body": "<table class=\"data\"><tr><th>carte</th><th>contenu</th></tr><tr><td>base color</td><td>couleur (sans ombre ni reflet)</td></tr><tr><td>metallic</td><td>métal ou non</td></tr><tr><td>roughness</td><td>rugosité</td></tr><tr><td>normal</td><td>relief fin, dans l’espace tangent</td></tr><tr><td>occlusion</td><td>creux qui reçoivent moins de lumière</td></tr><tr><td>emissive</td><td>lumière émise</td></tr></table>\n    <p class=\"lede\">Ces cartes se dessinent dans Substance Painter ou Blender, se capturent sur des objets réels (chapitre 36), ou se génèrent par IA. Elles sont empaquetées dans le glTF (chapitre 35).</p>",
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
  "lit": "mat",
  "look": {},
  "scene": "mat",
  "fig": ""
 }
];
export const PLATES = {
  brdf: { text: "Une surface rugueuse est vue comme des milliers de microfacettes miroir orientées au hasard. D dit combien sont tournées dans la bonne direction, F (Fresnel) dit combien de lumière elles réfléchissent selon l’angle, G compte celles qui se masquent entre elles. On ajoute une partie diffuse.", facts: () => [["D", "GGX en pratique"], ["F", "approximation de Schlick"], ["énergie", "conservée"]] },
  mat: { text: "Le flux « metallic-roughness » de glTF 2.0, Blender (Principled BSDF), Unreal et Unity utilise ces cartes. Un matériau peint dans Substance ou Blender rend donc pareil dans three.js ou un casque.", facts: () => [["format", "glTF 2.0"], ["Blender", "Principled BSDF"], ["textures", "par cartes"]] }
};
