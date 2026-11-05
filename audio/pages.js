// Chapitre 29 : L’audio spatial et binaural (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 29 · interaction",
  "title": "L’audio spatial",
  "sub": "l’autre moitié de l’immersion",
  "body": "<p class=\"lede\">Un son qui vient du bon endroit ancre un objet dans l’espace aussi bien qu’une image, et guide le regard vers ce qui est hors du champ de vision.</p>\n    <p>L’audio <b>spatial</b> place des sources dans la scène ; l’audio <b>binaural</b> les restitue sur deux oreilles en recréant ce que la tête et les oreilles font naturellement.</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "29.1",
  "title": "Les HRTF",
  "sub": "fonctions de transfert relatives à la tête",
  "body": "<p class=\"lede\">Une <b>HRTF</b> décrit, pour chaque direction, comment un son est modifié avant d’atteindre chaque tympan : par la tête, les épaules et surtout le pavillon de l’oreille.</p>\n    <p>On la mesure en chambre anéchoïque avec des micros dans les oreilles et des haut-parleurs tout autour. Chacun a sa HRTF ; une HRTF générique fonctionne mal pour certains (sons « dans la tête », confusions devant-derrière). Les systèmes récents personnalisent la HRTF à partir d’un scan de l’oreille par la caméra d’un téléphone (Apple, Sony).</p>",
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
  "lit": "indices",
  "look": {},
  "scene": "indices",
  "fig": ""
 },
 {
  "kicker": "29.2",
  "title": "La pièce",
  "sub": "réverbération et occlusion",
  "body": "<ul class=\"rules\"><li><b>Réverbération</b> : réflexions précoces (murs proches) puis traîne diffuse ; elle dit la taille et la matière de la pièce.</li><li><b>Occlusion</b> : un mur entre la source et l’oreille atténue surtout les aigus.</li><li><b>Propagation</b> : le son contourne les obstacles par les portes ; les moteurs (Steam Audio, Meta XR Audio, Resonance) tracent des rayons acoustiques dans la géométrie.</li><li>En réalité mixte, on peut adapter la réverbération à la pièce réelle à partir de son maillage (chapitre 23).</li></ul>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 },
 {
  "kicker": "29.3",
  "title": "Formats et outils",
  "sub": "objets, ambisonie, moteurs",
  "body": "<table class=\"data\"><tr><th>format</th><th>principe</th></tr><tr><td>sources objets</td><td>chaque son a une position ; rendu en temps réel</td></tr><tr><td>ambisonique</td><td>champ sonore complet autour d’un point (vidéos 360°)</td></tr><tr><td>binaural pré-rendu</td><td>enregistré avec une tête artificielle</td></tr></table>\n    <p class=\"lede\">Dans le web, la Web Audio API a un nœud de panoramique 3D (PannerNode, modèle HRTF) ; three.js et Babylon.js l’exposent avec des sons attachés aux objets (chapitre 56).</p>",
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
  "lit": "chaine",
  "look": {},
  "scene": "chaine",
  "fig": ""
 }
];
export const PLATES = {
  chaine: { text: "Chaque son virtuel est atténué selon sa distance, filtré s’il passe derrière un obstacle, puis convolué avec une HRTF : la réponse de la tête et des oreilles pour sa direction. La réverbération ajoute la signature de la pièce. Le résultat est joué en binaural sur les deux oreilles.", facts: () => [["indices", "temps, intensité, spectre"], ["HRTF", "mesurée ou générique"], ["format", "binaural, ambisonique"]] },
  indices: { text: "Un son à droite arrive un peu plus tôt (jusqu’à environ 0,7 ms) et plus fort à l’oreille droite. Mais ces indices ne disent pas s’il est devant ou derrière, en haut ou en bas : c’est la forme du pavillon de l’oreille qui colore différemment le spectre selon la direction. Tourner la tête lève les ambiguïtés, d’où l’importance du suivi de la tête.", facts: () => [["ITD max", "≈ 0,7 ms"], ["devant/derrière", "pavillon + mouvement"], ["distance", "niveau + réverbération"]] }
};
