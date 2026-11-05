// Chapitre 15 : Affichages holographiques et light-field (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 15 · affichage",
  "title": "Holographie et champ lumineux",
  "sub": "au-delà de la stéréoscopie",
  "body": "<p class=\"lede\">Un écran classique, même stéréoscopique, envoie une image plate à chaque œil. Un vrai objet, lui, renvoie de la lumière dans toutes les directions, à des distances différentes.</p>\n    <p>Le <b>champ lumineux</b> décrit la lumière en chaque point et dans chaque direction (4 dimensions pour un plan). Les afficheurs qui le reproduisent, même en partie, offrent parallaxe et profondeur de mise au point : ils répondent au conflit vergence-accommodation (chapitre 21).</p>",
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
  "lit": "champ",
  "look": {},
  "scene": "champ",
  "fig": ""
 },
 {
  "kicker": "15.1",
  "title": "L’autostéréoscopie",
  "sub": "du relief sans lunettes",
  "body": "<ul class=\"rules\"><li><b>Barrière de parallaxe</b> : une grille de fentes masque des colonnes de pixels pour chaque œil (Nintendo 3DS).</li><li><b>Lentilles lenticulaires</b> : des lentilles cylindriques dirigent les colonnes vers des directions différentes.</li><li><b>Écrans multi-vues</b> (Looking Glass) : 40 à 100 vues, plusieurs spectateurs à la fois.</li><li><b>Suivi de la tête</b> : on recalcule les deux vues pour la position réelle des yeux (écrans 3D de bureau, téléphones).</li></ul>\n    <p class=\"lede\">Le prix est toujours la résolution : elle est partagée entre les vues.</p>",
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
  "lit": "champ",
  "look": {},
  "scene": "champ",
  "fig": ""
 },
 {
  "kicker": "15.2",
  "title": "L’holographie numérique (CGH)",
  "sub": "calculer l’interférence",
  "body": "<p class=\"lede\">Un hologramme enregistre l’interférence entre la lumière d’un objet et une onde de référence. Éclairé, il <b>reconstruit</b> le front d’onde de l’objet.</p>\n    <p>En holographie numérique, on calcule ce motif pour une scène 3D et on l’affiche sur un SLM (cristaux liquides sur silicium, LCoS, ou micro-miroirs). Le calcul est énorme (chaque point de l’hologramme dépend de toute la scène) ; des réseaux de neurones accélèrent désormais la génération (holographie neuronale, travaux de Stanford, NVIDIA, Meta).</p>",
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
  "lit": "cgh",
  "look": {},
  "scene": "cgh",
  "fig": ""
 },
 {
  "kicker": "15.3",
  "title": "Hologrammes : le mot et la chose",
  "sub": "ce qu’on appelle hologramme",
  "body": "<p class=\"lede\">Dans l’industrie, « hologramme » désigne souvent tout objet virtuel affiché en réalité mixte (HoloLens), même s’il n’y a aucune holographie physique : l’image vient d’un écran ou d’un projecteur et d’un guide d’ondes.</p>\n    <p>En revanche, les guides d’ondes utilisent bien des <b>réseaux holographiques</b> (chapitre 16), et les prototypes de lunettes holographiques véritables existent en laboratoire. L’objectif : des lunettes fines, avec vraie mise au point et correction de vue intégrée.</p>",
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
  "lit": "cgh",
  "look": {},
  "scene": "cgh",
  "fig": ""
 }
];
export const PLATES = {
  champ: { text: "Des microlentilles devant un écran très dense envoient chaque pixel dans une direction précise. Chaque position de l’œil voit un sous-ensemble différent de pixels, donc une vue différente de la scène : relief et parallaxe sans lunettes.", facts: () => [["principe", "pixels → directions"], ["coût", "résolution divisée par le nombre de vues"], ["exemple", "écrans Looking Glass"]] },
  cgh: { text: "Un laser éclaire un modulateur spatial de lumière (SLM) qui affiche un motif d’interférence calculé : l’hologramme. La lumière diffractée converge vers des points de l’espace et repart comme si un objet était là : l’œil peut faire la mise au point sur lui.", facts: () => [["calcul", "hologramme généré par ordinateur"], ["avantage", "vraie profondeur focale"], ["limites", "champ, calcul, chatoiement"]] }
};
