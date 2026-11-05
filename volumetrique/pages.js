// Chapitre 34 : Vidéo volumétrique et capture de performance (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 34 · capture",
  "title": "La vidéo volumétrique",
  "sub": "une personne filmée en 3D",
  "body": "<p class=\"lede\">La vidéo volumétrique capture une performance (un acteur, un danseur, un conférencier) pour qu’on puisse la regarder de n’importe quel point de vue, en VR ou en AR, comme si la personne était là.</p>\n    <p>Usages : spectacles et clips immersifs, formation (geste d’un expert vu sous tous les angles), patrimoine, communication à distance (téléprésence volumétrique).</p>",
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
  "kicker": "34.1",
  "title": "Le rig de capture",
  "sub": "synchroniser des dizaines de caméras",
  "body": "<ul class=\"rules\"><li>Caméras à <b>synchronisation matérielle</b> (genlock) : toutes déclenchent au même instant.</li><li><b>Éclairage uniforme</b> et fond neutre ou vert pour faciliter la segmentation.</li><li>Caméras couleur et parfois de profondeur ; calibration géométrique de tout le dôme avec une mire.</li><li>Débit énorme : des téraoctets par heure, traités sur des fermes de calcul.</li></ul>",
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
  "kicker": "34.2",
  "title": "La reconstruction 4D",
  "sub": "cohérente dans le temps",
  "body": "<p class=\"lede\">Reconstruire chaque image séparément donne des maillages qui « bouillonnent » d’une image à l’autre. On suit donc la surface dans le temps : un maillage de référence est déformé pour coller à chaque instant, et l’on n’en recrée un que lors des changements de topologie (une veste qu’on enlève).</p>\n    <p>Les approches neuronales (gaussiennes 4D, avatars neuronaux) apprennent directement une représentation qui varie avec le temps.</p>",
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
  "lit": "repr",
  "look": {},
  "scene": "repr",
  "fig": ""
 },
 {
  "kicker": "34.3",
  "title": "Diffuser",
  "sub": "compression et lecture",
  "body": "<p class=\"lede\">Une minute de vidéo volumétrique brute pèse des gigaoctets. On compresse la géométrie (chapitre 57), la texture comme une vidéo, et l’on adapte le niveau de détail.</p>\n    <p>La norme MPEG V3C (V-PCC, MIV) compresse nuages de points et vidéos immersives en réutilisant les codecs vidéo ; la lecture se fait dans des moteurs (Unity, Unreal) ou des lecteurs web.</p>",
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
  "lit": "repr",
  "look": {},
  "scene": "repr",
  "fig": ""
 }
];
export const PLATES = {
  chaine: { text: "Des dizaines à des centaines de caméras synchronisées filment l’acteur sous tous les angles. Chaque instant est reconstruit en 3D ; un suivi temporel rend le maillage cohérent d’une image à l’autre pour pouvoir le compresser. Le résultat se lit comme une vidéo, mais en 3D.", facts: () => [["caméras", "30 à 100 +"], ["sortie", "maillage 4D ou gaussiennes"], ["débit", "dizaines de Mbit/s"]] },
  repr: { text: "Les premières vidéos volumétriques stockaient un maillage complet par image, très lourd. Les méthodes suivantes déforment un maillage de topologie fixe. Les gaussiennes 4D et les champs neuronaux dynamiques donnent un rendu plus réaliste (cheveux, vêtements) pour un poids raisonnable.", facts: () => [["lourd", "un maillage par image"], ["léger", "déformation"], ["réaliste", "gaussiennes 4D"]] }
};
