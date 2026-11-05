// Chapitre 52 : Animations et squelettes (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 52 · moteurs",
  "title": "Animer un personnage",
  "sub": "squelette, peau, mouvements",
  "body": "<p class=\"lede\">Un personnage animé a un <b>squelette</b> (une hiérarchie d’os, comme un graphe de scène, chapitre 49) et une <b>peau</b> (le maillage) attachée aux os. Animer, c’est changer les rotations des os au cours du temps.</p>\n    <p>Les animations viennent d’animateurs (images clés), de capture de mouvement (chapitre 33), de procédures (IK, physique) ou désormais de modèles d’IA qui génèrent des mouvements à partir d’un texte.</p>",
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
  "lit": "fk",
  "look": {},
  "scene": "fk",
  "fig": ""
 },
 {
  "kicker": "52.1",
  "title": "Cinématique directe et inverse",
  "sub": "FK et IK",
  "body": "<ul class=\"rules\"><li><b>FK</b> : on règle les angles depuis la racine ; naturel pour les mouvements amples.</li><li><b>IK</b> : on place la main ou le pied, les angles suivent ; indispensable pour poser un pied sur une marche, saisir une poignée, ou recoller les mains d’un avatar VR aux manettes.</li><li><b>FABRIK</b>, <b>CCD</b> : itératifs, rapides ; la méthode par <b>jacobienne</b> pour les chaînes complexes avec contraintes.</li><li>En VR, l’IK reconstruit coudes, épaules et parfois jambes à partir de la tête et des mains seulement.</li></ul>",
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
  "lit": "ik",
  "look": {},
  "scene": "ik",
  "fig": ""
 },
 {
  "kicker": "52.2",
  "title": "Le skinning",
  "sub": "LBS et quaternions duaux",
  "body": "<div class=\"eq\">v′ = Σ_i w_i · M_i · B_i⁻¹ · v</div>\n    <p class=\"lede\">Chaque sommet v est transformé par la matrice de ses os M_i (multipliée par l’inverse de leur pose de liaison B_i), et le résultat est pondéré par les poids w_i. Le <b>linear blend skinning</b> est rapide mais écrase le volume aux articulations très tordues (coude, poignet). Le <b>dual quaternion skinning</b> mélange des quaternions duaux et préserve le volume.</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "skin",
  "look": {},
  "scene": "skin",
  "fig": ""
 },
 {
  "kicker": "52.3",
  "title": "Blendshapes et mélange d’animations",
  "sub": "visage et transitions",
  "body": "<p class=\"lede\">Les <b>blendshapes</b> (morph targets) sont des versions sculptées du maillage (sourire, sourcils levés) que l’on mélange avec des poids. ARKit et le suivi du visage des casques fournissent 52 coefficients standard pour animer un avatar.</p>\n    <p>Les moteurs mélangent les clips d’animation par des <b>graphes d’états</b> et des <b>espaces de mélange</b> (marcher → courir selon la vitesse), complétés par l’IK et la physique (ragdoll).</p>",
  "cam": {
   "target": [
    80,
    1.8,
    0
   ],
   "az": 8,
   "el": 7,
   "dist": 26,
   "auto": true
  },
  "lit": "skin",
  "look": {},
  "scene": "skin",
  "fig": ""
 }
];
export const PLATES = {
  ik: { text: "On donne la position de la cible (verte) ; l’algorithme FABRIK trouve les angles des articulations. Il fait des allers-retours le long de la chaîne : on place la main sur la cible en remontant vers l’épaule, puis on recolle l’épaule à sa place en redescendant, en gardant la longueur des os.", facts: () => [["entrée", "cible"], ["sortie", "angles"], ["algorithmes", "FABRIK, CCD, jacobienne"]] },
  fk: { text: "En cinématique directe, on donne les angles de chaque articulation ; la position de la main en découle, par le produit des transformations le long de la chaîne (chapitre 1). C’est ainsi qu’on rejoue une animation ou une capture de mouvement.", facts: () => [["entrée", "angles"], ["sortie", "position"], ["calcul", "produit de matrices"]] },
  skin: { text: "Chaque sommet de la peau est attaché à quelques os avec des poids. Dans le vertex shader, on mélange les transformations de ces os : c’est le linear blend skinning. Les quaternions duaux évitent l’écrasement aux articulations tordues. Les blendshapes ajoutent des déformations sculptées (visage, muscles).", facts: () => [["LBS", "rapide, artefacts « tube »"], ["DQS", "volume préservé"], ["visage", "blendshapes ARKit (52)"]] }
};
