// Chapitre 22 : Suivi spatial et fusion de capteurs (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 22 · VR et AR",
  "title": "Suivi spatial",
  "sub": "la pose, mille fois par seconde",
  "body": "<p class=\"lede\">La <b>pose</b> d’un objet est sa position et son orientation : 6 nombres (ou une position et un quaternion). Un casque doit connaître la pose de la tête, des yeux, des mains et des manettes, avec une précision millimétrique et une latence minimale.</p>\n    <p>Les approches : <b>outside-in</b> (des capteurs fixes dans la pièce regardent le casque : stations Lighthouse de Valve, caméras OptiTrack) ou <b>inside-out</b> (le casque regarde la pièce avec ses propres caméras : tous les casques autonomes).</p>",
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
  "lit": "ddl",
  "look": {},
  "scene": "ddl",
  "fig": ""
 },
 {
  "kicker": "22.1",
  "title": "La centrale inertielle",
  "sub": "IMU",
  "body": "<ul class=\"rules\"><li>Le <b>gyroscope</b> mesure la vitesse de rotation : intégrée, elle donne l’orientation, qui dérive lentement.</li><li>L’<b>accéléromètre</b> mesure la gravité et l’accélération : il corrige l’inclinaison (où est le bas), pas le cap.</li><li>Le <b>magnétomètre</b>, quand il existe, corrige le cap, mais il est perturbé par les objets métalliques.</li><li>Fréquence : 500 à 2 000 mesures par seconde ; c’est ce qui permet la prédiction de pose (chapitre 18).</li></ul>",
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
  "lit": "fusion",
  "look": {},
  "scene": "fusion",
  "fig": ""
 },
 {
  "kicker": "22.2",
  "title": "Fusionner",
  "sub": "filtres et optimisation",
  "body": "<p class=\"lede\">Le <b>filtre complémentaire</b> fait confiance au gyroscope à court terme et à l’accéléromètre à long terme. Le <b>filtre de Kalman étendu</b> (EKF) estime aussi les biais des capteurs et l’incertitude de chaque mesure.</p>\n    <p>Les systèmes visuels-inertiels modernes (chapitre 23) optimisent la trajectoire sur une fenêtre glissante d’images et de mesures inertielles : c’est plus précis et plus robuste aux mouvements rapides.</p>",
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
  "lit": "fusion",
  "look": {},
  "scene": "fusion",
  "fig": ""
 },
 {
  "kicker": "22.3",
  "title": "Les manettes et les autres objets",
  "sub": "LED, anneaux, suivi optique",
  "body": "<p class=\"lede\">Les manettes ont leur propre centrale inertielle et des <b>LED infrarouges</b> (anneau ou boîtier) que les caméras du casque repèrent ; la fusion donne leur pose 6DoF. Les manettes Quest Pro et certaines manettes récentes se suivent elles-mêmes avec leurs caméras.</p>\n    <p>D’autres objets se suivent par <b>marqueurs</b> (QR codes, ArUco, chapitre 24), par <b>suivi d’objet</b> à partir d’un modèle 3D (Vuforia, ARKit Object Tracking), ou par des traqueurs dédiés (Vive Tracker).</p>",
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
  "lit": "fusion",
  "look": {},
  "scene": "fusion",
  "fig": ""
 }
];
export const PLATES = {
  fusion: { text: "La centrale inertielle donne le mouvement très vite mais dérive : intégrer une accélération deux fois accumule les erreurs en quelques secondes. Les caméras donnent une position absolue, plus lentement. Un filtre (de Kalman étendu, ou une optimisation) combine les deux : la vitesse de l’une, la stabilité des autres.", facts: () => [["IMU", "rapide, dérive"], ["caméras", "lentes, stables"], ["sortie", "pose à 500–1 000 Hz"]] },
  ddl: { text: "Un suivi 3DoF ne mesure que les trois rotations (bleu) : on peut regarder autour de soi mais pas se déplacer. Le 6DoF ajoute les trois translations (rouge) : on peut se pencher, marcher, s’approcher d’un objet. Le 6DoF est indispensable au confort et à la réalité mixte.", facts: () => [["3DoF", "rotations seules"], ["6DoF", "rotations + translations"], ["mains", "6DoF + 26 articulations"]] }
};
