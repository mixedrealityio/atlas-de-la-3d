// Chapitre 13 : Physique des écrans plats (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 13 · affichage",
  "title": "Physique des écrans plats",
  "sub": "d’où vient la lumière",
  "body": "<p class=\"lede\">Il existe deux familles : les écrans qui <b>filtrent</b> une lumière (LCD) et ceux qui l’<b>émettent</b> pixel par pixel (OLED, micro-LED).</p>\n    <p>Pour un casque, les critères ne sont pas ceux d’une télévision : la <b>densité</b> de pixels (l’écran est vu à travers une loupe), la <b>vitesse</b> (un pixel lent laisse des traînées quand la tête tourne), la <b>persistance</b> (chapitre 18) et le poids.</p>",
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
  "lit": "lcd",
  "look": {},
  "scene": "lcd",
  "fig": ""
 },
 {
  "kicker": "13.1",
  "title": "Le LCD",
  "sub": "et le Fast-LCD des casques",
  "body": "<p class=\"lede\">Les cristaux liquides tournent la polarisation de la lumière : entre deux polariseurs croisés, ils laissent passer plus ou moins de lumière.</p>\n    <ul class=\"rules\"><li><b>Fast-LCD</b> : cristaux à réponse rapide (quelques millisecondes), utilisés dans la plupart des casques grand public (Quest 2, Quest 3).</li><li>Rétroéclairage <b>stroboscopique</b> : allumé seulement une fraction de l’image pour réduire le flou de mouvement.</li><li><b>Mini-LED</b> avec gradation locale : des centaines de zones de rétroéclairage pour améliorer le contraste.</li><li>Avantages : densité élevée, coût, luminosité ; défauts : noirs grisâtres, fuites de lumière.</li></ul>",
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
  "lit": "lcd",
  "look": {},
  "scene": "lcd",
  "fig": ""
 },
 {
  "kicker": "13.2",
  "title": "L’OLED",
  "sub": "émissif, rapide, contrasté",
  "body": "<p class=\"lede\">Chaque sous-pixel est une diode électroluminescente organique alimentée par son transistor (matrice active, AMOLED).</p>\n    <p>Noirs parfaits, réponse quasi instantanée, écran fin et souple. Défauts : luminosité plus limitée, <b>vieillissement</b> (les sous-pixels bleus faiblissent), effet de grille si la densité est faible, et parfois disposition des sous-pixels en PenTile (moins de sous-pixels qu’on croit). Les premiers casques (Oculus Rift, HTC Vive) et les casques haut de gamme en micro-OLED (chapitre 14) en utilisent.</p>",
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
  "lit": "oled",
  "look": {},
  "scene": "oled",
  "fig": ""
 },
 {
  "kicker": "13.3",
  "title": "La micro-LED",
  "sub": "l’émissif inorganique",
  "body": "<p class=\"lede\">Des LED inorganiques de quelques micromètres, une par sous-pixel : la luminosité et la durée de vie d’une LED, le contraste d’un OLED.</p>\n    <p>C’est la technologie visée pour la réalité augmentée optique, qui doit rivaliser avec le soleil (des centaines de milliers de nits sur la micro-dalle). La difficulté est la fabrication : transférer des millions de LED minuscules sans défaut, et obtenir un rouge efficace à cette taille. Des micro-projecteurs micro-LED monochromes ou couleur équipent déjà certaines lunettes AR.</p>",
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
  "lit": "oled",
  "look": {},
  "scene": "oled",
  "fig": ""
 },
 {
  "kicker": "13.4",
  "title": "Fréquence de rafraîchissement",
  "sub": "72, 90, 120, 144 Hz",
  "body": "<p class=\"lede\">Plus l’image est renouvelée souvent, plus le mouvement est fluide et plus la latence baisse.</p>\n    <table class=\"data\"><tr><th>fréquence</th><th>durée d’une image</th><th>usage</th></tr><tr><td>60 Hz</td><td>16,7 ms</td><td>écran de bureau, téléphone</td></tr><tr><td>72 Hz</td><td>13,9 ms</td><td>minimum des casques autonomes</td></tr><tr><td>90 Hz</td><td>11,1 ms</td><td>confort VR courant</td></tr><tr><td>120 Hz</td><td>8,3 ms</td><td>casques récents, jeux rapides</td></tr><tr><td>144 Hz</td><td>6,9 ms</td><td>PC VR haut de gamme</td></tr></table>\n    <p>Chaque hausse de fréquence réduit le temps de calcul disponible : à 120 Hz, le moteur a 8 ms pour dessiner deux vues.</p>",
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
  "lit": "lcd",
  "look": {},
  "scene": "lcd",
  "fig": ""
 }
];
export const PLATES = {
  lcd: { text: "Un rétroéclairage blanc traverse un polariseur, une couche de cristaux liquides qui tourne plus ou moins la polarisation selon la tension, des filtres de couleur, puis un second polariseur. Chaque sous-pixel est une vanne de lumière : le noir n’est jamais parfait, car un peu de lumière fuit.", facts: () => [["lumière", "rétroéclairage LED"], ["contraste", "≈ 1 000:1 (sans zones)"], ["temps de réponse", "quelques ms"]] },
  oled: { text: "Dans un OLED, chaque sous-pixel est une diode organique qui émet sa propre lumière quand un courant la traverse. Éteinte, elle est parfaitement noire. Pas de rétroéclairage : l’écran est plus fin, le contraste est infini, et le pixel s’allume en quelques microsecondes.", facts: () => [["noir", "pixel éteint"], ["réponse", "< 0,1 ms"], ["limites", "luminosité, vieillissement"]] }
};
