// Chapitre 36 : Capturer les matériaux (SVBRDF) (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 36 · capture",
  "title": "Capturer les matériaux",
  "sub": "au-delà de la couleur",
  "body": "<p class=\"lede\">Une photo donne la couleur sous un éclairage, mais pas le matériau : est-il mat ou brillant ? métallique ? quel est son relief fin ?</p>\n    <p>Capturer un matériau, c’est mesurer sa <b>SVBRDF</b> (spatially varying BRDF) : la façon dont chaque point renvoie la lumière selon les directions d’arrivée et de départ (chapitre 9). Le résultat est un jeu de cartes PBR utilisables dans Blender, un moteur ou un casque.</p>",
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
  "kicker": "36.1",
  "title": "Polarisation et stéréo photométrique",
  "sub": "les deux outils de base",
  "body": "<ul class=\"rules\"><li>La <b>polarisation croisée</b> isole la couleur diffuse, sans reflet : la base color.</li><li>La <b>stéréo photométrique</b> : avec au moins trois éclairages connus, la luminosité d’un pixel donne sa normale. On en tire la normal map et le relief fin.</li><li>La largeur du reflet spéculaire selon les éclairages donne la rugosité.</li><li>Les dômes de LED (Light Stage pour les visages) automatisent des centaines d’éclairages en quelques secondes.</li></ul>",
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
  "lit": "stack",
  "look": {},
  "scene": "stack",
  "fig": ""
 },
 {
  "kicker": "36.2",
  "title": "Multispectral et cas difficiles",
  "sub": "au-delà du RVB",
  "body": "<p class=\"lede\">Trois canaux de couleur ne suffisent pas toujours : deux matériaux peuvent paraître identiques sous une lumière et différents sous une autre (métamérisme). Les caméras <b>multispectrales</b> mesurent des dizaines de bandes, pour l’industrie automobile, le textile, l’art.</p>\n    <p>Restent difficiles : les matériaux transparents, la diffusion sous la surface (peau, marbre, lait), les tissus (BTF), les surfaces anisotropes (métal brossé, cheveux).</p>",
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
  "kicker": "36.3",
  "title": "Avec l’IA",
  "sub": "un matériau en une photo",
  "body": "<p class=\"lede\">Des réseaux de neurones estiment désormais une SVBRDF à partir d’une seule photo prise au flash d’un téléphone, ou génèrent des matériaux à partir d’un texte. Ils s’entraînent sur des matériaux synthétiques rendus avec un moteur différentiable (chapitre 47).</p>\n    <p>Les bibliothèques de matériaux mesurés (Adobe Substance, Poly Haven, Quixel Megascans) restent la référence pour la production.</p>",
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
 }
];
export const PLATES = {
  chaine: { text: "On photographie une surface sous de nombreux éclairages. Des filtres polarisants séparent la réflexion spéculaire (qui garde la polarisation) de la diffuse (qui la perd). La stéréo photométrique déduit la normale de chaque pixel de la façon dont sa luminosité change avec la direction de la lumière. On ajuste enfin une BRDF par pixel : c’est une SVBRDF.", facts: () => [["SVBRDF", "BRDF qui varie par point"], ["matériel", "dôme de LED, scanner à plat"], ["IA", "une seule photo possible"]] },
  stack: { text: "Une lumière polarisée éclaire la surface. La réflexion spéculaire, en surface, garde sa polarisation ; la lumière diffuse, qui a pénétré dans le matériau, ressort dépolarisée. Avec un filtre croisé devant l’objectif, on ne voit plus que la diffuse ; avec un filtre parallèle, les deux.", facts: () => [["croisé", "diffus seul"], ["parallèle", "diffus + spéculaire"], ["différence", "spéculaire seul"]] }
};
