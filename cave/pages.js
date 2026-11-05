// Chapitre 67 : Projection, CAVE et dômes (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 67 · affichage",
  "title": "Projection et CAVE",
  "sub": "l’immersion avant les casques",
  "body": "<p class=\"lede\">Inventée à l’Université de l’Illinois à Chicago en 1992, la <b>CAVE</b> reste un outil de laboratoire et d’industrie : revue de design automobile à l’échelle 1, pétrochimie, recherche.</p>\n    <p>Ses atouts face aux casques : un champ de vision complet, le <b>partage</b> à plusieurs, et le confort (on voit son propre corps). Ses limites : le coût, la salle dédiée, et une perspective exacte pour une seule personne suivie.</p>",
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
  "lit": "cave",
  "look": {},
  "scene": "cave",
  "fig": ""
 },
 {
  "kicker": "67.1",
  "title": "Les technologies de projection",
  "sub": "laser, warping, blending",
  "body": "<ul class=\"rules\"><li>Sources <b>laser</b> (phosphore ou RVB pur) : luminosité, gamme de couleurs large, calibration stable.</li><li>Résolutions 4K par DLP ou LCoS (chapitre 16).</li><li><b>Warping</b> et <b>blending</b> logiciels pour les surfaces courbes et les mosaïques de projecteurs.</li><li><b>Mapping</b> vidéo : projeter sur des façades ou des objets en suivant leur géométrie 3D.</li></ul>",
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
  "lit": "calage",
  "look": {},
  "scene": "calage",
  "fig": ""
 },
 {
  "kicker": "67.2",
  "title": "Murs de LED et production virtuelle",
  "sub": "remplacer le fond vert",
  "body": "<p class=\"lede\">Les <b>murs de LED</b> sans couture remplacent peu à peu la projection là où la luminosité compte. En <b>production virtuelle</b> (popularisée par The Mandalorian), un décor rendu en temps réel par Unreal s’affiche sur un mur de LED derrière les acteurs ; la perspective suit la caméra de tournage, suivie en 6DoF.</p>\n    <p>Les reflets et la lumière du décor éclairent réellement les acteurs, ce que le fond vert ne permet pas.</p>",
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
  "lit": "calage",
  "look": {},
  "scene": "calage",
  "fig": ""
 },
 {
  "kicker": "67.3",
  "title": "Dômes et simulateurs",
  "sub": "l’immersion collective",
  "body": "<p class=\"lede\">Planétariums, simulateurs de vol et dômes de recherche utilisent des projections hémisphériques calibrées (optiques fisheye ou plusieurs projecteurs).</p>\n    <p>Formation à grande échelle, éducation scientifique, événementiel : la projection offre ce que les casques peinent à donner, le <b>partage social</b> de l’immersion, au prix d’une salle dédiée.</p>",
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
  "lit": "cave",
  "look": {},
  "scene": "cave",
  "fig": ""
 }
];
export const PLATES = {
  cave: { text: "Une CAVE entoure l’utilisateur d’écrans (murs, sol, parfois plafond) sur lesquels des projecteurs affichent la scène en stéréo. Ses lunettes actives et le suivi de sa tête donnent la bonne perspective. Plusieurs personnes partagent l’expérience ; seule celle qui est suivie voit la perspective parfaite.", facts: () => [["invention", "Chicago, 1992"], ["usages", "automobile, énergie, recherche"], ["atout", "échelle 1, collectif"]] },
  calage: { text: "Sur un mur courbe ou un dôme, chaque projecteur doit être déformé (warping) pour suivre la surface, et les zones où deux projecteurs se recouvrent sont fondues en douceur (blending). Une caméra mesure une mire projetée et calcule automatiquement ces corrections.", facts: () => [["dômes", "fisheye ou multi-projecteurs"], ["calibration", "par caméra"], ["murs LED", "pas de calage optique"]] }
};
