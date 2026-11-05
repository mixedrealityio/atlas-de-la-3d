// Chapitre 33 : La capture de mouvement (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 33 · capture",
  "title": "La capture de mouvement",
  "sub": "mocap",
  "body": "<p class=\"lede\">Animer un personnage à la main prend des jours par minute ; la mocap enregistre un acteur réel en quelques secondes. Elle sert aux films, aux jeux, au sport, à la médecine (analyse de la marche) et à l’entraînement des robots et des modèles d’IA.</p>\n    <p>La sortie est un <b>squelette animé</b> : la position de la racine et la rotation de chaque articulation à chaque image.</p>",
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
  "lit": "familles",
  "look": {},
  "scene": "familles",
  "fig": ""
 },
 {
  "kicker": "33.1",
  "title": "L’optique à marqueurs",
  "sub": "Vicon, OptiTrack",
  "body": "<p class=\"lede\">Des dizaines de caméras infrarouges filment des boules rétroréfléchissantes collées sur l’acteur. Chaque marqueur vu par au moins deux caméras est triangulé.</p>\n    <p>Le logiciel reconnaît les marqueurs, comble les occlusions et ajuste un squelette. Précision inférieure au millimètre, très faible latence : c’est aussi la référence pour mesurer la précision des casques VR et le suivi en temps réel des plateaux de production virtuelle.</p>",
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
  "lit": "familles",
  "look": {},
  "scene": "familles",
  "fig": ""
 },
 {
  "kicker": "33.2",
  "title": "Inertielle et sans marqueurs",
  "sub": "hors du studio",
  "body": "<ul class=\"rules\"><li><b>Inertielle</b> : une centrale par segment du corps (17 environ) ; les orientations sont fusionnées sur un modèle du squelette. Pas d’occlusions, mais dérive de la position globale.</li><li><b>Sans marqueurs</b> : des réseaux estiment la pose 2D ou 3D dans des vidéos (OpenPose, MediaPipe Pose, ViTPose, puis modèles 3D comme SMPL).</li><li><b>Corps entier en VR</b> : le casque ne voit que la tête et les mains ; des modèles d’IA prédisent les jambes plausibles.</li></ul>",
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
  "lit": "familles",
  "look": {},
  "scene": "familles",
  "fig": ""
 },
 {
  "kicker": "33.3",
  "title": "Du mouvement au personnage",
  "sub": "retargeting et nettoyage",
  "body": "<p class=\"lede\">Les proportions de l’acteur diffèrent de celles du personnage : le <b>retargeting</b> transfère les angles en corrigeant les contacts (pieds qui glissent, mains qui doivent toucher un objet) par cinématique inverse (chapitre 52).</p>\n    <p>On nettoie les bruits et les trous, on boucle les cycles (marche, course) et l’on mélange les clips dans un graphe d’animation. Les formats d’échange sont BVH, FBX et glTF.</p>",
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
  chaine: { text: "La capture de mouvement enregistre, image par image, les angles des articulations d’un acteur. Rejoués sur un squelette, ces angles reproduisent le mouvement : c’est de la cinématique directe (chapitre 52). La chaîne dessinée ici pourrait être un bras ou une jambe.", facts: () => [["sortie", "angles par articulation"], ["fréquence", "120 à 240 Hz"], ["format", "BVH, FBX"]] },
  familles: { text: "Les studios utilisent des caméras infrarouges qui voient des marqueurs réfléchissants (Vicon, OptiTrack) : la référence en précision. Les combinaisons inertielles (Xsens, Rokoko) marchent partout, sans caméras, mais dérivent. Les méthodes sans marqueurs estiment la pose à partir de vidéos ordinaires.", facts: () => [["optique", "sub-millimétrique"], ["inertielle", "portable, dérive"], ["vidéo", "bon marché, moins précise"]] }
};
