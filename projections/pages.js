// Chapitre 3 : Projections et caméras (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 3 · mathématiques",
  "title": "Projections et caméras",
  "sub": "de la 3D à l’image",
  "body": "<p class=\"lede\">Une caméra virtuelle se décrit par sa <b>position</b>, son <b>orientation</b> (la matrice vue) et sa <b>projection</b>.</p>\n    <p>La projection dit comment l’espace 3D est aplati : en <b>perspective</b> (les objets lointains rapetissent, comme pour l’œil) ou <b>orthographique</b> (pas de rapetissement). Elle fixe aussi ce qui est visible : le tronc de vue.</p>",
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
  "lit": "tronc",
  "look": {},
  "scene": "tronc",
  "fig": ""
 },
 {
  "kicker": "3.1",
  "title": "La perspective",
  "sub": "diviser par la profondeur",
  "body": "<p class=\"lede\">Un point à la distance z apparaît à la position x/z sur l’image : deux fois plus loin, deux fois plus petit.</p>\n    <div class=\"eq\">x_écran = f · x / z</div>\n    <p>La matrice de projection prépare cette division : elle range z dans la coordonnée w, puis le GPU divise tout par w (division perspective). La <b>focale</b> f est liée au champ de vision : f = 1 / tan(FOV / 2).</p>",
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
  "lit": "tronc",
  "look": {},
  "scene": "tronc",
  "fig": ""
 },
 {
  "kicker": "3.2",
  "title": "Champ de vision et plans de coupe",
  "sub": "FOV, near, far",
  "body": "<ul class=\"rules\"><li><b>Champ de vision</b> (FOV) : 50 à 70° sur écran, environ 90 à 110° dans un casque VR, 30 à 70° en AR optique.</li><li><b>Plan proche</b> (near) : rien n’est dessiné plus près. Trop proche, la précision de profondeur s’effondre au loin.</li><li><b>Plan lointain</b> (far) : rien n’est dessiné plus loin.</li></ul>\n    <p class=\"lede\">La profondeur est stockée de façon non linéaire (précise près de la caméra). Astuce courante : le <b>Z inversé</b> (reverse-Z) en virgule flottante, qui répartit mieux la précision et évite le scintillement des surfaces proches (z-fighting).</p>",
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
  "lit": "tronc",
  "look": {},
  "scene": "tronc",
  "fig": ""
 },
 {
  "kicker": "3.3",
  "title": "L’orthographique",
  "sub": "mesurer, pas regarder",
  "body": "<p class=\"lede\">Sans division par la profondeur, les longueurs se lisent directement : c’est la projection des plans d’architecte, des vues de CAO, des jeux isométriques et des interfaces 2D dessinées par un moteur 3D.</p>\n    <p>Dans Blender, le pavé numérique 1, 3 et 7 donne les vues de face, de côté et de dessus, et 5 bascule entre perspective et orthographique.</p>",
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
  "lit": "ortho",
  "look": {},
  "scene": "ortho",
  "fig": ""
 },
 {
  "kicker": "3.4",
  "title": "Les caméras d’un casque",
  "sub": "deux projections asymétriques",
  "body": "<p class=\"lede\">En VR, chaque œil a sa propre caméra virtuelle, décalée de l’écart interpupillaire (chapitre 20).</p>\n    <p>Leurs troncs sont <b>asymétriques</b> : l’œil n’est pas au centre de la lentille, le champ de vision est plus grand vers l’extérieur que vers le nez. OpenXR fournit à chaque image les quatre angles (gauche, droite, haut, bas) de chaque œil ; le moteur en déduit la matrice de projection. En AR optique, ces angles viennent de la calibration de l’afficheur (chapitre 24).</p>",
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
  "lit": "tronc",
  "look": {},
  "scene": "tronc",
  "fig": ""
 }
];
export const PLATES = {
  tronc: { text: "La pyramide bleue est le tronc de vue (frustum) : entre le plan proche et le plan lointain, dans l’angle du champ de vision. Seuls les objets dedans sont dessinés (bleu). Le champ de vision s’ouvre et se ferme : un angle plus large montre plus de scène, avec plus de déformation sur les bords.", facts: () => [["champ de vision", "angle vertical, ex. 60°"], ["plans de coupe", "proche et lointain"], ["hors du tronc", "éliminé (culling)"]] },
  ortho: { text: "En projection orthographique, le volume de vue est une boîte : la taille d’un objet ne dépend plus de sa distance. C’est le mode des vues de face, de côté et de dessus en CAO et dans Blender (touches du pavé numérique).", facts: () => [["volume", "une boîte"], ["usage", "CAO, plans, interfaces"], ["Blender", "pavé numérique 5"]] }
};
