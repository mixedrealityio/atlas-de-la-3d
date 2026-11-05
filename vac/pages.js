// Chapitre 21 : Le conflit vergence-accommodation (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 21 · VR et AR",
  "title": "Le conflit vergence-accommodation",
  "sub": "VAC",
  "body": "<p class=\"lede\">Regarder un objet proche demande deux réflexes liés : <b>converger</b> (les yeux tournent l’un vers l’autre) et <b>accommoder</b> (le cristallin se bombe pour faire la mise au point).</p>\n    <p>Dans un casque, la vergence suit l’objet virtuel mais l’accommodation reste bloquée sur le plan focal de l’optique. Le cerveau reçoit des signaux contradictoires : fatigue, maux de tête, difficulté à lire de près, parfois vision double.</p>",
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
  "lit": "conflit",
  "look": {},
  "scene": "conflit",
  "fig": ""
 },
 {
  "kicker": "21.1",
  "title": "Les effets",
  "sub": "qui est concerné, quand",
  "body": "<ul class=\"rules\"><li>Le conflit est surtout gênant pour les objets <b>proches</b> (moins de 50 cm) : outils dans la main, texte tenu près du visage.</li><li>Il dépend des personnes et de l’âge : après 45 ans, l’accommodation diminue naturellement (presbytie), et le conflit gêne moins.</li><li>Il est différent du mal des transports, qui vient de la latence et des mouvements visuels non ressentis (chapitre 18).</li><li>Conseils de conception : placer les interfaces vers 1 à 2 m, éviter les objets qui viennent coller au visage.</li></ul>",
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
  "lit": "conflit",
  "look": {},
  "scene": "conflit",
  "fig": ""
 },
 {
  "kicker": "21.2",
  "title": "Varifocal et multifocal",
  "sub": "rendre l’accommodation",
  "body": "<p class=\"lede\">Un afficheur <b>varifocal</b> mesure où l’on regarde (eye tracking), calcule la distance de vergence, et ajuste le plan focal : écran mobile, lentille liquide ou à cristaux liquides. Le flou naturel hors du point regardé est ensuite simulé par le rendu.</p>\n    <p>Un afficheur <b>multifocal</b> présente plusieurs plans à des distances fixes (empilement, ou alternance rapide), et répartit chaque objet entre les plans. Les afficheurs à champ lumineux et holographiques (chapitre 15) visent la solution complète.</p>",
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
  "lit": "solutions",
  "look": {},
  "scene": "solutions",
  "fig": ""
 },
 {
  "kicker": "21.3",
  "title": "En réalité augmentée",
  "sub": "un conflit avec le réel",
  "body": "<p class=\"lede\">En AR optique, l’hologramme est net à la distance focale du guide d’ondes (souvent 1,5 à 2 m) alors que le vrai objet sur lequel il est posé est à une autre distance : l’œil ne peut pas voir les deux nets en même temps.</p>\n    <p>C’est pourquoi les instructions de maintenance sur HoloLens sont plus confortables à environ un mètre ou plus. Des guides d’ondes à deux plans focaux et des lentilles accordables sont étudiés pour les lunettes futures.</p>",
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
  "lit": "conflit",
  "look": {},
  "scene": "conflit",
  "fig": ""
 }
];
export const PLATES = {
  conflit: { text: "Les yeux tournent pour converger sur l’objet virtuel (lignes bleues) : c’est la vergence. Mais l’image vient d’un écran placé optiquement à une distance fixe (environ 1,3 à 2 m) : le cristallin fait la mise au point là, pas sur l’objet. Dans la vie réelle, les deux distances sont toujours égales.", facts: () => [["vergence", "suit l’objet"], ["accommodation", "fixe (plan focal)"], ["zone de confort", "≈ 0,5 à 5 m"]] },
  solutions: { text: "La solution courante est de placer le plan focal à une distance de compromis et de garder les objets proches à distance raisonnable. Les prototypes varifocaux déplacent l’écran ou changent la puissance de la lentille selon le regard. Les afficheurs multiplans, à champ lumineux ou holographiques produisent une vraie profondeur focale.", facts: () => [["produit", "focale fixe"], ["prototypes", "Half Dome (Meta), Butterscotch"], ["nécessite", "eye tracking pour le varifocal"]] }
};
