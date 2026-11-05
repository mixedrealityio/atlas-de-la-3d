// Chapitre 70 : Le mal des transports virtuel (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 70 · VR et AR",
  "title": "Le mal des transports virtuel",
  "sub": "cybercinétose",
  "body": "<p class=\"lede\">Une partie des utilisateurs ressent, parfois en quelques minutes, gêne oculaire, sueurs, vertiges ou nausées : c’est la <b>cybercinétose</b> (cybersickness), cousine du mal des transports.</p>\n    <p>La cause principale est le <b>conflit visuo-vestibulaire</b> : en avançant au joystick, les yeux voient un mouvement que l’oreille interne ne ressent pas. La sensibilité varie beaucoup d’une personne à l’autre ; une habituation progressive est possible, jamais forcée.</p>",
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
  "lit": "causes",
  "look": {},
  "scene": "causes",
  "fig": ""
 },
 {
  "kicker": "70.1",
  "title": "Concevoir pour le confort",
  "sub": "le trio standard",
  "body": "<ul class=\"rules\"><li><b>Téléportation</b> : se déplacer instantanément d’un point à un autre.</li><li><b>Vignette</b> : le champ de vision se rétrécit pendant un déplacement continu, la périphérie (très sensible au mouvement) ne voit plus le défilement.</li><li><b>Rotation par crans</b> (snap turn) plutôt que rotation continue.</li><li>Éviter les accélérations, les secousses, les caméras qui bougent sans l’utilisateur ; ancrer dans un cockpit ou un véhicule.</li></ul>\n    <p class=\"lede\">Donner le choix : les joueurs habitués préfèrent le déplacement continu.</p>",
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
  "lit": "parades",
  "look": {},
  "scene": "parades",
  "fig": ""
 },
 {
  "kicker": "70.2",
  "title": "Le rôle de la technique",
  "sub": "latence et cadence d’abord",
  "body": "<p class=\"lede\">La fluidité est le premier médicament : 90 Hz ou plus, une latence motion-to-photon sous 20 ms et, surtout, <b>aucune image manquée</b> (chapitre 18). Une saccade d’image est plus nauséeuse qu’une baisse ponctuelle de résolution.</p>\n    <p>La recherche explore d’autres pistes : stimulation galvanique de l’oreille interne, afficheurs varifocaux (chapitre 21), champ de vision dynamique piloté par l’eye tracking. Côté usage : sessions courtes au début, pause dès les premiers signes, pièce aérée.</p>",
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
  "lit": "parades",
  "look": {},
  "scene": "parades",
  "fig": ""
 }
];
export const PLATES = {
  causes: { text: "La théorie dominante est le conflit visuo-vestibulaire : la vue annonce un mouvement que l’oreille interne ne ressent pas. La théorie posturale ajoute que le corps peine à garder son équilibre quand l’image le déstabilise. La latence, les saccades d’image et l’accélération aggravent tout.", facts: () => [["population", "sensibilité très variable"], ["aggravants", "latence, accélérations"], ["habituation", "possible, progressive"]] },
  parades: { text: "Les applications proposent plusieurs modes de déplacement : téléportation, déplacement continu avec vignette qui rétrécit le champ, rotation par crans. Un cockpit ou un horizon stable donne un repère. Et surtout : une image fluide et une latence minimale.", facts: () => [["meilleur remède", "la fluidité"], ["options", "au choix de l’utilisateur"], ["tests", "sur des publics variés"]] }
};
