// Chapitre 2 : Représenter les rotations (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 2 · mathématiques",
  "title": "Représenter les rotations",
  "sub": "plusieurs écritures pour la même chose",
  "body": "<p class=\"lede\">Une rotation 3D a <b>trois degrés de liberté</b>, mais on peut l’écrire de plusieurs façons.</p>\n    <table class=\"data\"><tr><th>écriture</th><th>nombres</th><th>usage</th></tr><tr><td>angles d’Euler</td><td>3</td><td>interfaces, Blender, animation</td></tr><tr><td>matrice 3×3</td><td>9</td><td>calcul sur les sommets</td></tr><tr><td>axe-angle</td><td>4</td><td>physique, intuition</td></tr><tr><td>quaternion</td><td>4</td><td>moteurs, casques, interpolation</td></tr></table>\n    <p>Chaque écriture a ses forces : les angles se lisent, les matrices se composent et s’appliquent vite, les quaternions s’interpolent sans défaut.</p>",
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
  "lit": "cardan",
  "look": {},
  "scene": "cardan",
  "fig": ""
 },
 {
  "kicker": "2.1",
  "title": "Les angles d’Euler",
  "sub": "trois rotations successives",
  "body": "<p class=\"lede\">On tourne autour d’un axe, puis d’un autre, puis du dernier : <b>lacet</b> (yaw), <b>tangage</b> (pitch), <b>roulis</b> (roll).</p>\n    <p>Le résultat dépend de l’<b>ordre</b> : XYZ, YXZ, ZYX… donnent des orientations différentes pour les mêmes angles. Blender permet de choisir l’ordre de chaque objet ; un export vers un autre logiciel doit le respecter.</p>\n    <p>Les angles sont parfaits pour une interface (« tourner de 30° à gauche »), mauvais pour calculer : ils sautent de 359° à 0° et souffrent du blocage de cardan.</p>",
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
  "lit": "cardan",
  "look": {},
  "scene": "cardan",
  "fig": ""
 },
 {
  "kicker": "2.2",
  "title": "Le blocage de cardan",
  "sub": "gimbal lock",
  "body": "<p class=\"lede\">Quand la rotation du milieu atteint 90°, les axes de la première et de la troisième rotation s’alignent.</p>\n    <p>On ne peut plus tourner dans une des directions sans faire de grands mouvements sur les autres axes : une animation fait alors un tour inattendu, une caméra se met à vriller. Le problème n’est pas mécanique : il est dans l’écriture en trois angles.</p>\n    <p>Il est célèbre depuis Apollo 11 : la centrale inertielle avait trois anneaux réels, et les astronautes devaient éviter certaines orientations.</p>",
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
  "lit": "cardan",
  "look": {},
  "scene": "cardan",
  "fig": ""
 },
 {
  "kicker": "2.3",
  "title": "Les quaternions",
  "sub": "quatre nombres, aucune singularité",
  "body": "<p class=\"lede\">Un quaternion unitaire q = (w, x, y, z) code une rotation d’angle θ autour d’un axe unitaire u.</p>\n    <div class=\"eq\">q = (cos θ/2, sin θ/2 · u)</div>\n    <ul class=\"rules\"><li><b>Composer</b> deux rotations : multiplier les quaternions (16 multiplications, moins qu’une matrice).</li><li><b>Tourner un vecteur</b> : v′ = q v q⁻¹, ou convertir q en matrice 3×3 pour le GPU.</li><li><b>Pas de blocage</b> : toutes les orientations sont régulières.</li><li>q et −q donnent la même rotation : on choisit le plus court chemin en vérifiant le signe du produit scalaire.</li></ul>\n    <p>Les casques (OpenXR), three.js, Unity et les centrales inertielles transmettent tous leur orientation sous forme de quaternion.</p>",
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
  "lit": "slerp",
  "look": {},
  "scene": "slerp",
  "fig": ""
 },
 {
  "kicker": "2.4",
  "title": "Interpoler : la SLERP",
  "sub": "passer d’une orientation à une autre",
  "body": "<p class=\"lede\">Pour animer d’une orientation q₁ à q₂, on suit le grand cercle qui les relie sur la sphère : c’est la <b>SLERP</b> (spherical linear interpolation).</p>\n    <div class=\"eq\">slerp(q₁, q₂, t) = sin((1−t)Ω)/sin Ω · q₁ + sin(tΩ)/sin Ω · q₂</div>\n    <p>La vitesse angulaire est constante. Quand les orientations sont très proches, on utilise une interpolation linéaire renormalisée (NLERP), plus rapide et presque identique. Les animations à plusieurs étapes utilisent des courbes de quaternions (SQUAD).</p>",
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
  "lit": "slerp",
  "look": {},
  "scene": "slerp",
  "fig": ""
 }
];
export const PLATES = {
  cardan: { text: "Trois anneaux emboîtés : le vert tourne autour de y (lacet), le rouge autour de x (tangage), le bleu autour de z (roulis). Quand le tangage approche 90°, l’anneau bleu se retrouve dans le plan du vert : deux rotations font la même chose, une liberté est perdue. C’est le blocage de cardan.", facts: () => [["angles d’Euler", "3 nombres"], ["ordre", "à préciser (YXZ, XYZ…)"], ["défaut", "blocage de cardan"]] },
  slerp: { text: "Les orientations unitaires vivent sur une sphère (en 4 dimensions, ici dessinée en 3). La SLERP (rouge) suit l’arc à vitesse constante. L’interpolation linéaire (bleu) coupe à travers la sphère : il faut renormaliser et la vitesse n’est plus régulière.", facts: () => [["quaternion", "w + xi + yj + zk"], ["unitaire", "|q| = 1"], ["interpoler", "SLERP"]] }
};
