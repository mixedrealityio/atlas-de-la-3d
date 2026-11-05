// Chapitre 49 : L’architecture d’un moteur temps réel (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 49 · moteurs",
  "title": "Un moteur temps réel",
  "sub": "le chef d’orchestre",
  "body": "<p class=\"lede\">Un moteur 3D (Unity, Unreal Engine, Godot, Babylon.js et three.js dans le navigateur) réunit le rendu, la physique, l’animation, l’audio, les entrées, le réseau, le chargement des ressources et les outils d’édition.</p>\n    <p>Son cœur est une <b>boucle</b> qui produit une image à intervalle régulier. En VR et AR, la cadence est imposée par le casque : une image en retard se voit immédiatement (chapitre 18).</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "49.1",
  "title": "La boucle de jeu",
  "sub": "pas fixe et pas variable",
  "body": "<ul class=\"rules\"><li>La <b>logique</b> et le rendu suivent la fréquence de l’écran (pas variable, mesuré par Δt).</li><li>La <b>physique</b> avance par pas fixes (par exemple 1/90 s) pour rester stable et reproductible, éventuellement plusieurs fois par image.</li><li>Le <b>rendu</b> d’une image se prépare sur le CPU pendant que le GPU dessine la précédente.</li><li>En XR, le moteur demande au runtime OpenXR quand l’image sera affichée et pour quelle pose prédite (xrWaitFrame, xrLocateViews).</li></ul>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "49.2",
  "title": "Le graphe de scène",
  "sub": "une hiérarchie de transformations",
  "body": "<p class=\"lede\">Les objets sont organisés en <b>arbre</b> : une voiture contient ses roues, une main ses doigts. Chaque nœud a une transformation locale ; sa transformation monde est le produit des matrices de ses ancêtres (chapitre 1).</p>\n    <p>Le graphe sert aussi à l’élimination (une boîte englobante par branche), à la sérialisation des scènes et aux outils. Dans three.js, c’est la classe Object3D ; dans Unity, les GameObjects et Transforms ; dans USD, les prims (chapitre 35).</p>",
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
  "lit": "boucle",
  "look": {},
  "scene": "boucle",
  "fig": ""
 },
 {
  "kicker": "49.3",
  "title": "Threads et ECS",
  "sub": "utiliser tous les cœurs",
  "body": "<p class=\"lede\">Les processeurs ont 8 à 24 cœurs ; un moteur moderne découpe le travail en petites tâches (<b>jobs</b>) réparties par un ordonnanceur, avec des dépendances explicites.</p>\n    <p>Le <b>data-oriented design</b> range les données par type, de façon contiguë, pour exploiter les caches du processeur. L’architecture <b>ECS</b> en est l’application systématique ; elle permet de simuler des dizaines de milliers d’entités par image.</p>",
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
  "lit": "ecs",
  "look": {},
  "scene": "ecs",
  "fig": ""
 }
];
export const PLATES = {
  boucle: { text: "À chaque image, le moteur lit les entrées (pose de la tête, mains, manettes), met à jour la logique et la physique, anime les personnages, élimine ce qui est invisible, puis envoie le rendu au GPU. En VR, tout doit tenir en 11 ms à 90 Hz, pour deux vues.", facts: () => [["90 Hz", "11,1 ms par image"], ["physique", "pas fixe"], ["rendu", "en parallèle de l’image suivante"]] },
  ecs: { text: "Au lieu d’objets qui contiennent données et méthodes, l’ECS sépare les données (composants rangés dans des tableaux contigus) et les traitements (systèmes qui les parcourent). Le processeur lit la mémoire en continu, sans sauts : c’est beaucoup plus rapide pour des milliers d’objets, et facile à paralléliser.", facts: () => [["Unity", "DOTS / Entities"], ["Unreal", "Mass"], ["libre", "Bevy, Flecs, EnTT"]] }
};
