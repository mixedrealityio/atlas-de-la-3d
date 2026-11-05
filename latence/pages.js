// Chapitre 18 : Performances d’affichage et latence (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 18 · affichage",
  "title": "Performances et latence",
  "sub": "le temps est l’ennemi",
  "body": "<p class=\"lede\">Quand on tourne la tête, le monde virtuel doit rester immobile. S’il suit avec retard, il « glisse », et le système vestibulaire contredit la vue : c’est une source majeure de <b>cybercinétose</b> (mal des transports virtuel).</p>\n    <p>La <b>latence motion-to-photon</b>, du mouvement à la lumière, doit rester sous environ 20 ms. En AR optique, c’est encore plus critique : le réel, lui, n’a aucun retard, et un hologramme en retard se décolle visiblement.</p>",
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
  "lit": "m2p",
  "look": {},
  "scene": "m2p",
  "fig": ""
 },
 {
  "kicker": "18.1",
  "title": "La faible persistance",
  "sub": "allumer brièvement",
  "body": "<p class=\"lede\">Sur un écran classique, chaque image reste affichée toute sa durée. Quand l’œil suit un objet pendant que la tête tourne, l’image fixe s’étale sur la rétine : c’est le <b>flou de persistance</b>.</p>\n    <p>Les casques allument les pixels seulement une petite partie de l’image (1 à 3 ms) : c’est la <b>faible persistance</b>. OLED et rétroéclairages stroboscopiques le permettent ; en échange, il faut des écrans plus lumineux et une fréquence assez haute pour éviter le scintillement.</p>",
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
  "lit": "m2p",
  "look": {},
  "scene": "m2p",
  "fig": ""
 },
 {
  "kicker": "18.2",
  "title": "Timewarp et spacewarp",
  "sub": "corriger après le rendu",
  "body": "<ul class=\"rules\"><li><b>Prédiction</b> : les capteurs inertiels mesurent la vitesse de la tête ; on rend pour la pose prévue à l’instant de l’affichage.</li><li><b>Timewarp</b> asynchrone : juste avant l’affichage, le compositeur fait tourner l’image selon la pose réelle. Il tourne sur un thread prioritaire, même si l’application est en retard.</li><li><b>Reprojection positionnelle</b> : avec la profondeur, on corrige aussi les translations de la tête.</li><li><b>Spacewarp</b> : l’application rend à 45 ou 60 images par seconde, le système synthétise une image sur deux à partir des vecteurs de mouvement.</li></ul>\n    <p class=\"lede\">Ces mécanismes sont fournis par le runtime OpenXR : l’application soumet ses images avec la pose utilisée, le compositeur fait le reste.</p>",
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
  "lit": "warp",
  "look": {},
  "scene": "warp",
  "fig": ""
 },
 {
  "kicker": "18.3",
  "title": "Rafraîchissement variable et synchronisation",
  "sub": "tenir la cadence",
  "body": "<p class=\"lede\">Un casque ne tolère pas une image manquée : on garde une fréquence fixe et l’on adapte la charge (résolution dynamique, rendu fovéal, niveaux de détail).</p>\n    <p>Les outils : <b>résolution dynamique</b> (baisser la résolution quand le GPU est en retard), <b>fréquence adaptative</b> (72, 90 ou 120 Hz choisis par l’application), et pipelines qui commencent l’image suivante pendant que la précédente s’affiche. Les profileurs (OVR Metrics, RenderDoc, PIX) montrent où partent les millisecondes.</p>",
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
  "lit": "warp",
  "look": {},
  "scene": "warp",
  "fig": ""
 },
 {
  "kicker": "18.4",
  "title": "La stabilité avant tout",
  "sub": "gigue, encodage, sans-fil",
  "body": "<ul class=\"rules\"><li>Une cadence <b>stable</b> compte plus qu’une moyenne élevée : la gigue (images irrégulières) est plus nauséeuse qu’une baisse ponctuelle de résolution, d’où la résolution dynamique.</li><li>Les centrales inertielles sont lues à environ 1 000 Hz et fusionnées avec les caméras.</li><li>Pour un casque relié sans fil à un PC (Air Link, Virtual Desktop, Steam Link), l’encodage et le décodage vidéo ajoutent environ 10 ms, compensés par la reprojection locale.</li><li>Wi-Fi 6/6E dédié ou câble DisplayPort pour réduire le délai.</li></ul>",
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
  "lit": "m2p",
  "look": {},
  "scene": "m2p",
  "fig": ""
 }
];
export const PLATES = {
  m2p: { text: "Du mouvement de la tête à la lumière qui atteint l’œil : lecture des capteurs, prédiction de la pose, rendu par l’application, reprojection par le compositeur juste avant l’affichage, envoi des pixels à l’écran. Valeurs indicatives ; la prédiction de pose compense une partie du retard.", facts: () => [["cible", "< 20 ms"], ["dans l’idéal", "< 10 ms perçus"], ["astuce", "prédire, puis corriger"]] },
  warp: { text: "Le moteur rend l’image pour la pose de la tête prédite. Juste avant l’affichage, le compositeur lit la pose réelle et fait tourner l’image en conséquence (timewarp). Si l’application n’arrive pas à suivre, le spacewarp fabrique une image intermédiaire à partir des vecteurs de mouvement et de la profondeur.", facts: () => [["ATW", "rotation"], ["positionnel", "rotation + translation (profondeur)"], ["ASW / AppSW", "image synthétisée"]] }
};
