// Chapitre 68 : Luminance, confort et comparatif des écrans XR (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 68 · affichage",
  "title": "Luminance et confort",
  "sub": "les nits qui arrivent à l’œil",
  "body": "<p class=\"lede\">En XR, la luminosité décide de l’usage. Les fabricants donnent des <b>nits à l’œil</b> (nits-to-eye), qui intègrent les pertes de l’optique : une dalle de 5 000 nits peut n’offrir que quelques centaines de nits utiles derrière une optique pancake.</p>\n    <p>Un casque d’intérieur se contente de quelques centaines de nits ; des lunettes AR utilisables dehors en demandent des milliers (Magic Leap 2 annonce plus de 2 000 nits).</p>",
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
  "lit": "nits",
  "look": {},
  "scene": "nits",
  "fig": ""
 },
 {
  "kicker": "68.1",
  "title": "Le confort visuel",
  "sub": "scintillement, persistance, uniformité",
  "body": "<ul class=\"rules\"><li><b>Scintillement</b> : la modulation par impulsions (PWM) de certains écrans fatigue des personnes sensibles.</li><li><b>Temps de réponse</b> et traînées (ghosting), surtout sur les transitions sombres.</li><li><b>Persistance</b> : la durée d’allumage par image (chapitre 18).</li><li><b>Cohérence entre les yeux</b> : même luminosité et même couleur sur les deux écrans, calibrées en usine.</li><li><b>Passthrough</b> : dynamique, bruit en basse lumière et balance des blancs des caméras (chapitre 63).</li></ul>",
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
  "lit": "nits",
  "look": {},
  "scene": "nits",
  "fig": ""
 },
 {
  "kicker": "68.2",
  "title": "Le comparatif",
  "sub": "quelle technologie pour quel usage",
  "body": "<table class=\"data\"><tr><th>technologie</th><th>forces</th><th>limites</th><th>exemples</th></tr><tr><td>OLED (dalle)</td><td>contraste, noirs, réponse</td><td>densité, vieillissement</td><td>PSVR2, téléphones</td></tr><tr><td>micro-OLED</td><td>densité, compacité</td><td>luminance, coût du silicium</td><td>Vision Pro, Bigscreen Beyond</td></tr><tr><td>micro-LED</td><td>luminance, efficacité, durée</td><td>rendement RGB, transfert de masse</td><td>lunettes AR monochromes</td></tr><tr><td>balayage laser</td><td>netteté, compacité</td><td>sécurité, champ, couleur</td><td>afficheurs rétiniens</td></tr><tr><td>LCD + pancake</td><td>coût, luminance, maturité</td><td>contraste, perte de lumière</td><td>Quest 3, autonomes</td></tr></table>\n    <p class=\"lede\">Règle pragmatique : choisir la technologie disponible qui couvre l’usage visé (intérieur ou extérieur, lecture ou immersion, autonomie), et réévaluer à chaque génération.</p>",
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
 }
];
export const PLATES = {
  nits: { text: "Ce qui compte n’est pas la luminosité de la dalle mais celle qui arrive à l’œil, après les pertes de l’optique : une optique pancake peut ne laisser passer qu’environ 10 à 20 % de la lumière. En AR extérieure, il faut des milliers de nits pour rivaliser avec le jour.", facts: () => [["intérieur VR", "≈ 100 à 200 nits"], ["AR intérieure", "≈ 500 à 1 000"], ["AR en plein jour", "≥ 2 000 à 3 000"]] },
  familles: { text: "Chaque famille domine un critère : l’OLED le contraste à coût maîtrisé, le micro-OLED la densité, le micro-LED la luminance future, le balayage laser la compacité, le LCD le coût et la maturité.", facts: () => [["densité", "micro-OLED"], ["luminance", "micro-LED"], ["volume", "LCD"]] }
};
