// Chapitre 63 : Couleur, HDR et espaces colorimétriques (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 63 · rendu",
  "title": "Couleur et HDR",
  "sub": "la couleur est un calcul",
  "body": "<p class=\"lede\">Une couleur numérique n’a de sens que dans un <b>espace de couleur</b> : des primaires, un point blanc et une courbe de transfert.</p>\n    <p>Le <b>sRGB</b>, standard des écrans, applique une courbe gamma qui compresse les nuances sombres pour suivre la perception humaine. Mais la lumière s’additionne en <b>linéaire</b> : mélanger directement des valeurs sRGB donne des dégradés et des éclairages faux.</p>",
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
  "kicker": "63.1",
  "title": "Rendre en linéaire, afficher en sRGB",
  "sub": "la règle d’or",
  "body": "<ul class=\"rules\"><li>Les textures de <b>couleur</b> (base color) sont en sRGB : on les décode en linéaire à la lecture.</li><li>Les textures de <b>données</b> (normales, rugosité, métallicité) sont déjà linéaires : ne pas les décoder.</li><li>Tout l’éclairage se calcule en linéaire, en virgule flottante.</li><li>La sortie est réencodée pour l’écran ; en WebGL et three.js, c’est le rôle de outputColorSpace.</li></ul>\n    <p class=\"lede\">Une erreur classique : une normal map marquée « sRGB » dans Blender ou Unity donne un relief faux.</p>",
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
  "kicker": "63.2",
  "title": "Le HDR",
  "sub": "au-delà de 1,0",
  "body": "<p class=\"lede\">Le monde réel couvre une dynamique immense. Le rendu <b>HDR</b> garde des valeurs supérieures à 1,0 en virgule flottante (formats EXR, HDR), puis le <b>tone mapping</b> (Reinhard, ACES, AgX) les ramène dans la plage de l’écran (chapitre 12).</p>\n    <p>Les images panoramiques <b>HDRI</b> servent à la fois de fond et de source d’éclairage (chapitre 9). Les espaces larges (Display P3, Rec.2020) et les écrans HDR10 élargissent ce que l’on peut afficher.</p>",
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
  "lit": "gamuts",
  "look": {},
  "scene": "gamuts",
  "fig": ""
 },
 {
  "kicker": "63.3",
  "title": "La couleur en XR",
  "sub": "caméras, écrans, casques",
  "body": "<p class=\"lede\">En réalité mixte, la chaîne s’allonge : le passthrough doit rendre le réel avec la bonne <b>balance des blancs</b> et la bonne exposition, pour que le monde paraisse continu à travers les écrans (chapitre 68).</p>\n    <p>Deux casques de marques différentes n’affichent pas la même scène de la même façon. Les studios travaillent dans un espace de référence documenté (<b>ACES</b>) et vérifient sur plusieurs appareils.</p>",
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
  "lit": "gamuts",
  "look": {},
  "scene": "gamuts",
  "fig": ""
 }
];
export const PLATES = {
  chaine: { text: "Les images sont stockées avec une courbe gamma (sRGB) qui donne plus de précision aux tons sombres. Le moteur les décode en linéaire, calcule l’éclairage en linéaire et en haute dynamique, puis compresse vers l’écran (tone mapping) et réencode selon son espace de couleur.", facts: () => [["calcul", "linéaire"], ["stockage", "sRGB"], ["référence", "ACES"]] },
  gamuts: { text: "Proportion approximative des couleurs perceptibles couvertes par les principaux espaces (diagramme CIE 1931). Plus l’espace est large, plus les couleurs saturées sont reproductibles. Ordres de grandeur.", facts: () => [["sRGB", "écrans courants"], ["Display P3", "Apple, casques récents"], ["Rec.2020", "HDR, cible future"]] }
};
