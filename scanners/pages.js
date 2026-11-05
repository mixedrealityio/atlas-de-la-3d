// Chapitre 32 : Scanners optiques et LiDAR (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 32 · capture",
  "title": "Scanners et LiDAR",
  "sub": "la profondeur mesurée",
  "body": "<p class=\"lede\">La photogrammétrie calcule la profondeur ; les scanners la <b>mesurent</b> en projetant leur propre lumière. Ils marchent sur les surfaces sans texture et donnent l’échelle réelle.</p>\n    <p>Un scan produit un <b>nuage de points</b> (chapitre 4), souvent des millions de points avec intensité et couleur, qu’on aligne et qu’on maille ensuite.</p>",
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
  "lit": "methodes",
  "look": {},
  "scene": "methodes",
  "fig": ""
 },
 {
  "kicker": "32.1",
  "title": "Le LiDAR à temps de vol",
  "sub": "radar de lumière",
  "body": "<ul class=\"rules\"><li><b>Direct</b> (dToF) : une impulsion laser, un détecteur très rapide (SPAD), on chronomètre le retour. Portée de quelques mètres (téléphones) à des centaines (voitures, topographie).</li><li><b>Indirect</b> (iToF) : une lumière modulée, on mesure le déphasage du retour. Bonne résolution, portée courte (capteurs de profondeur des casques, Azure Kinect).</li><li>Balayage par miroirs tournants, MEMS, ou flash (toute la scène d’un coup).</li><li>Le LiDAR de l’iPhone Pro et de l’iPad Pro aide l’AR et la photogrammétrie ; HoloLens 2 et Magic Leap 2 ont un capteur de profondeur à temps de vol.</li></ul>",
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
  "lit": "methodes",
  "look": {},
  "scene": "methodes",
  "fig": ""
 },
 {
  "kicker": "32.2",
  "title": "Lumière structurée et triangulation",
  "sub": "la géométrie du regard de côté",
  "body": "<p class=\"lede\">Un projecteur envoie un motif (bandes, points) ; une caméra décalée le voit déformé par le relief. Connaissant la base entre projecteur et caméra, chaque point se triangule.</p>\n    <p>C’est le principe de Face ID (points infrarouges), des scanners de table et des scanners à main (Artec, Creaform, Shining 3D). La <b>triangulation laser</b>, avec une ligne laser balayée, atteint des précisions de quelques micromètres pour le contrôle de pièces industrielles (métrologie, chapitre 55).</p>",
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
  "lit": "methodes",
  "look": {},
  "scene": "methodes",
  "fig": ""
 },
 {
  "kicker": "32.3",
  "title": "Du nuage au modèle",
  "sub": "aligner, nettoyer, mailler",
  "body": "<ul class=\"rules\"><li><b>Recalage</b> : plusieurs scans sont alignés par ICP (iterative closest point) ou par cibles.</li><li><b>Nettoyage</b> : supprimer le bruit, les points aberrants, les objets parasites.</li><li><b>Maillage</b> : reconstruction de Poisson ou triangulation ; simplification pour l’usage temps réel.</li><li><b>Formats</b> : E57, LAS/LAZ pour les nuages ; OBJ, PLY, STL, glTF pour les maillages (chapitre 35).</li></ul>",
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
  "lit": "comparer",
  "look": {},
  "scene": "comparer",
  "fig": ""
 }
];
export const PLATES = {
  methodes: { text: "Le temps de vol mesure le temps mis par la lumière pour revenir (1 ns = 15 cm aller-retour). La lumière structurée et la triangulation laser observent depuis un autre point de vue la déformation d’un motif ou la position d’un point projeté, et en déduisent la profondeur par géométrie.", facts: () => [["ToF", "portée, vitesse"], ["structurée", "précision proche"], ["triangulation", "micro-mètres en métrologie"]] },
  comparer: { text: "Ordres de grandeur de la précision typique (en millimètres, échelle illustrative) des grandes familles de capteurs. Plus la portée est longue, plus la précision absolue diminue en général.", facts: () => [["métrologie", "< 0,1 mm"], ["téléphone", "≈ 1 cm"], ["LiDAR terrestre", "quelques mm à 100 m"]] }
};
