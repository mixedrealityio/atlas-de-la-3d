// Chapitre 17 : Projection à fibre optique (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 17 · affichage",
  "title": "La projection à fibre optique",
  "sub": "le projecteur le plus petit",
  "body": "<p class=\"lede\">Un <b>FSD</b> (fiber scanned display) n’a pas d’écran : il trace l’image avec le bout d’une fibre optique de quelques dizaines de micromètres, qui vibre comme une baguette.</p>\n    <p>L’idée, issue de l’endoscopie (University of Washington), a été étudiée par Magic Leap au début de son développement. Elle promet des projecteurs de la taille d’un grain de riz, donc des lunettes très discrètes.</p>",
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
  "lit": "fsd",
  "look": {},
  "scene": "fsd",
  "fig": ""
 },
 {
  "kicker": "17.1",
  "title": "Le balayage en spirale",
  "sub": "résonance et modulation",
  "body": "<p class=\"lede\">Un tube piézoélectrique fait osciller la fibre à sa <b>fréquence de résonance</b> (plusieurs kilohertz). En faisant croître l’amplitude, l’extrémité décrit une spirale qui couvre un disque ; on la ramène au centre et on recommence.</p>\n    <p>La lumière laser rouge, verte et bleue qui traverse la fibre est <b>modulée</b> en intensité à chaque instant : chaque point de la spirale devient un pixel. Pour 60 images par seconde, il faut des milliers de tours de spirale par image.</p>",
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
  "lit": "fsd",
  "look": {},
  "scene": "fsd",
  "fig": ""
 },
 {
  "kicker": "17.2",
  "title": "Avantages et difficultés",
  "sub": "pourquoi ce n’est pas partout",
  "body": "<table class=\"data\"><tr><th>avantage</th><th>difficulté</th></tr><tr><td>taille et poids minuscules</td><td>non-linéarités de la vibration, à calibrer</td></tr><tr><td>lasers : couleurs saturées, luminosité</td><td>résolution limitée au centre et au bord de la spirale</td></tr><tr><td>pas de pixels morts ni d’effet grille</td><td>synchronisation très précise, tremblements</td></tr><tr><td>profondeur de mise au point possible (plusieurs fibres)</td><td>fabrication en série, chatoiement laser</td></tr></table>\n    <p class=\"lede\">Les produits actuels utilisent plutôt LCoS, micro-LED ou miroirs MEMS (chapitre 16). La fibre reste un axe de recherche, avec les réseaux de fibres pour l’imagerie et les afficheurs à champ lumineux.</p>",
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
  "kicker": "17.3",
  "title": "Fibres et guides d’ondes",
  "sub": "une chaîne optique complète",
  "body": "<p class=\"lede\">Comme tout projecteur pour AR, le FSD doit être couplé à un combineur : sa lumière est collimatée puis injectée dans un guide d’ondes (chapitre 16).</p>\n    <p>Avec plusieurs fibres en faisceau, chacune peut correspondre à une distance focale différente : c’était l’une des pistes pour des afficheurs à plusieurs plans de mise au point, qui réduisent le conflit vergence-accommodation (chapitre 21).</p>",
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
  "kicker": "17.4",
  "title": "Écrans à fibres et holographie",
  "sub": "d’autres pistes de laboratoire",
  "body": "<p class=\"lede\">Au-delà de la fibre qui balaie, des équipes universitaires étudient des <b>écrans à fibres</b> : la lumière de micro-LED est injectée dans des fibres de quelques micromètres, dont les extrémités, agencées en matrice, forment les pixels.</p>\n    <p>Promesses : une densité extrême et une grande souplesse mécanique (un écran courbé autour de l’œil). D’autres travaux combinent fibres et modulateurs de phase pour approcher de vrais hologrammes (chapitre 15). Ces pistes visent les afficheurs rétiniens et les casques ultra-compacts ; elles restent au stade de la recherche.</p>",
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
  fsd: { text: "Un actionneur piézoélectrique fait vibrer une fibre optique à sa fréquence de résonance. Son extrémité décrit une spirale de plus en plus large, et l’intensité du laser qui la traverse est modulée à chaque instant : la spirale dessine l’image, vue de face à droite.", facts: () => [["source", "laser RVB modulé"], ["mouvement", "résonance, spirale"], ["taille", "millimétrique"]] },
  chaine: { text: "Les pixels de l’image ne sont pas lus ligne par ligne mais dans l’ordre de la spirale. Le laser change d’intensité des millions de fois par seconde, au rythme du passage de la fibre. Une optique collimate la lumière, qui peut ensuite être injectée dans un guide d’ondes.", facts: () => [["modulation", "MHz"], ["synchronisation", "position ↔ pixel"], ["calibration", "mesurer la vraie trajectoire"]] }
};
