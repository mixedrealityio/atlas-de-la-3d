// Chapitre 27 : Eye tracking et rendu fovéal (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 27 · interaction",
  "title": "Eye tracking",
  "sub": "le regard comme entrée",
  "body": "<p class=\"lede\">Savoir où l’utilisateur regarde sert à trois choses : <b>interagir</b> (regarder puis pincer, sur visionOS), <b>rendre moins</b> (rendu fovéal) et <b>calibrer</b> l’affichage selon la position des yeux (chapitres 14 et 24).</p>\n    <p>C’est aussi une donnée très sensible : le regard révèle l’attention, l’intérêt, la fatigue, parfois l’état de santé (chapitre 59).</p>",
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
  "lit": "fovea",
  "look": {},
  "scene": "fovea",
  "fig": ""
 },
 {
  "kicker": "27.1",
  "title": "La méthode PCCR",
  "sub": "pupil center corneal reflection",
  "body": "<p class=\"lede\">La cornée agit comme un miroir convexe : les reflets des diodes infrarouges (glints) bougent peu quand l’œil tourne, alors que la pupille se déplace beaucoup.</p>\n    <p>Le vecteur entre le centre de la pupille et les reflets dépend donc surtout de la <b>rotation de l’œil</b>, et peu des petits glissements du casque. Avec plusieurs diodes et deux caméras, on reconstruit en 3D la cornée et l’axe du regard. Les méthodes récentes ajoutent des réseaux de neurones pour la segmentation.</p>",
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
  "kicker": "27.2",
  "title": "La calibration",
  "sub": "fixer des points",
  "body": "<p class=\"lede\">L’<b>axe visuel</b> (qui passe par la fovéa) diffère de l’axe optique de l’œil d’environ 5°, et cet écart varie selon les personnes.</p>\n    <p>On fait donc fixer quelques points à l’utilisateur au premier usage, et l’on apprend la correction. La précision obtenue est d’environ 0,5 à 1° au centre, moins bonne sur les bords. Lunettes de vue, lentilles et maquillage peuvent dégrader le suivi.</p>",
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
  "kicker": "27.3",
  "title": "Le rendu fovéal",
  "sub": "dépenser les pixels où l’œil regarde",
  "body": "<p class=\"lede\">L’œil ne voit net que dans un cône de quelques degrés : la <b>fovéa</b>. Au-delà, l’acuité chute vite.</p>\n    <ul class=\"rules\"><li><b>Fovéal fixe</b> : on réduit la résolution sur les bords de l’image, là où la lentille est moins nette de toute façon. Pas besoin d’eye tracking.</li><li><b>Fovéal dynamique</b> : la zone nette suit le regard. Gain de 2 à 3 fois en pixels calculés.</li><li>Techniques : variable rate shading (VRS), rendu multirésolution, rendu de deux couches (une étroite et nette, une large et floue).</li><li>Contrainte : la latence. Le regard saute (saccades) à plus de 500°/s ; la zone nette doit suivre en quelques millisecondes, ou être assez large.</li></ul>",
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
  "lit": "fovea",
  "look": {},
  "scene": "fovea",
  "fig": ""
 },
 {
  "kicker": "27.4",
  "title": "Fixations, saccades, poursuites",
  "sub": "le vocabulaire du regard",
  "body": "<ul class=\"rules\"><li><b>Fixations</b> : environ 200 à 300 ms, là où l’attention se pose.</li><li><b>Saccades</b> : sauts très rapides de 20 à 100 ms, pendant lesquels la vision est en partie coupée (suppression saccadique) ; certains moteurs en profitent pour corriger l’image sans que l’on s’en aperçoive.</li><li><b>Poursuites</b> : suivre un objet en mouvement.</li></ul>\n    <p class=\"lede\">Usages en XR : rendu fovéal et compression du flux ; <b>interaction</b> (regarder puis pincer, fixation prolongée) ; <b>avatars</b> dont les yeux vivent ; <b>analyse</b> (recherche UX, formation des pilotes, signatures oculaires étudiées pour certaines maladies neurologiques). La précision des casques (0,5 à 2°) suffit au rendu et à l’interaction ; les analyses fines demandent des appareils dédiés à 250 Hz ou plus.</p>",
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
  fovea: { text: "À gauche : l’œil filmé en infrarouge, avec les reflets des diodes sur la cornée. La position de la pupille par rapport aux reflets donne la direction du regard. À droite : l’image est rendue en pleine résolution seulement autour du point regardé (rouge), à résolution réduite autour (bleu) et en basse résolution sur les bords (blanc).", facts: () => [["méthode", "centre pupille + reflets cornéens"], ["précision", "≈ 0,5 à 1°"], ["gain", "×2 à ×3 de pixels"]] },
  chaine: { text: "Des diodes infrarouges éclairent l’œil, une petite caméra le filme. On segmente la pupille et les reflets, un modèle géométrique de l’œil (cornée sphérique, centre de rotation) en déduit l’axe optique. Une calibration personnelle corrige l’écart entre axe optique et axe visuel (la fovéa n’est pas dans l’axe).", facts: () => [["fréquence", "100 à 200 Hz"], ["calibration", "5 à 9 points"], ["exemples", "Vision Pro, Quest Pro, HoloLens 2"]] }
};
