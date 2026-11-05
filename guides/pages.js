// Chapitre 16 : Les guides d’ondes (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 16 · affichage",
  "title": "Les guides d’ondes",
  "sub": "le cœur des lunettes AR",
  "body": "<p class=\"lede\">En réalité augmentée <b>optique</b> (chapitre 24), on regarde le monde à travers le verre. Il faut un <b>combineur</b> qui ajoute la lumière de l’image virtuelle sans boucher la vue.</p>\n    <p>Le guide d’ondes est une lame de verre de moins de deux millimètres, comme un verre de lunettes. Le projecteur est caché dans la monture ; l’image voyage dans le verre et en ressort devant l’œil.</p>",
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
  "lit": "ost",
  "look": {},
  "scene": "ost",
  "fig": ""
 },
 {
  "kicker": "16.1",
  "title": "La réflexion totale interne",
  "sub": "piéger la lumière dans le verre",
  "body": "<p class=\"lede\">Au-delà d’un angle critique, la lumière qui frappe la surface d’un verre ne sort pas : elle est entièrement réfléchie. C’est le principe des fibres optiques.</p>\n    <p>Le réseau d’<b>entrée</b> dévie l’image pour qu’elle dépasse cet angle et reste piégée. Le réseau de <b>sortie</b> extrait un peu de lumière à chaque rebond : l’image est dupliquée sur une grande zone, la <b>boîte à œil</b> (eyebox), ce qui tolère les mouvements des lunettes et les différents écarts entre les yeux.</p>",
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
  "lit": "ost",
  "look": {},
  "scene": "ost",
  "fig": ""
 },
 {
  "kicker": "16.2",
  "title": "Diffractifs : SRG et VHG",
  "sub": "graver ou enregistrer des réseaux",
  "body": "<ul class=\"rules\"><li><b>SRG</b> (surface relief grating) : des stries nanométriques gravées ou imprimées à la surface (HoloLens, Magic Leap). Fabrication par nano-impression.</li><li><b>VHG</b> (volume holographic grating) : des variations d’indice enregistrées dans un photopolymère, comme un hologramme.</li><li>Chaque longueur d’onde est déviée différemment : on empile souvent plusieurs guides (un par couleur ou par paire de couleurs).</li><li>Défauts : arcs-en-ciel parasites, perte de lumière, uniformité des couleurs, et une partie de l’image visible de l’extérieur.</li></ul>",
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
  "lit": "types",
  "look": {},
  "scene": "types",
  "fig": ""
 },
 {
  "kicker": "16.3",
  "title": "Le projecteur",
  "sub": "LCoS, micro-LED, laser",
  "body": "<table class=\"data\"><tr><th>source</th><th>principe</th><th>exemple</th></tr><tr><td>LCoS</td><td>cristaux liquides sur silicium, éclairés par des LED</td><td>Magic Leap 2</td></tr><tr><td>balayage laser (MEMS)</td><td>un miroir oscillant dessine l’image ligne à ligne</td><td>HoloLens 2</td></tr><tr><td>micro-LED</td><td>dalle émissive minuscule</td><td>lunettes AR récentes</td></tr><tr><td>DLP</td><td>micro-miroirs</td><td>certains prototypes</td></tr></table>\n    <p class=\"lede\">Le défi est la <b>luminosité</b> : seule une petite fraction de la lumière du projecteur atteint l’œil après le guide, et elle doit rester visible en plein jour.</p>",
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
  "lit": "ost",
  "look": {},
  "scene": "ost",
  "fig": ""
 },
 {
  "kicker": "16.4",
  "title": "Champ de vision et compromis",
  "sub": "pourquoi l’AR reste étroite",
  "body": "<p class=\"lede\">Le champ de vision d’un guide d’ondes est limité par l’indice de réfraction du verre : plus il est élevé, plus le guide accepte d’angles. Verres à haut indice ou carbure de silicium élargissent le champ.</p>\n    <p>Ordres de grandeur : HoloLens 2 environ 52° en diagonale, Magic Leap 2 environ 70°, contre plus de 100° pour un casque VR. Les lunettes grand public visent plutôt 30 à 50° pour rester fines et légères.</p>",
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
  "lit": "types",
  "look": {},
  "scene": "types",
  "fig": ""
 },
 {
  "kicker": "16.5",
  "title": "Toutes les optiques AR comparées",
  "sub": "guides diffractifs, géométriques, birdbath, rétinien",
  "body": "<table class=\"data\"><tr><th>technologie</th><th>atouts</th><th>limites</th><th>exemples</th></tr><tr><td>guide diffractif</td><td>lame fine, industrialisable</td><td>efficacité, arcs-en-ciel, coût</td><td>HoloLens 2, Magic Leap 2</td></tr><tr><td>guide géométrique (miroirs)</td><td>efficacité lumineuse, image nette</td><td>épaisseur, fabrication</td><td>Lumus, Epson Moverio</td></tr><tr><td>birdbath</td><td>bonne image, coût modéré</td><td>épaisseur, transparence moyenne</td><td>Xreal, lunettes vidéo</td></tr><tr><td>rétinien (balayage laser)</td><td>netteté, contraste</td><td>puissance, sécurité, champ</td><td>North Focals (arrêté)</td></tr><tr><td>passthrough vidéo</td><td>occlusion, champ large</td><td>pas de transparence, poids</td><td>Quest 3, Vision Pro</td></tr></table>\n    <p class=\"lede\">Aucune ne domine : le marché explore tout en même temps, selon quatre axes d’arbitrage : champ de vision, luminosité à l’œil (plusieurs milliers de nits pour l’extérieur), transparence et poids.</p>",
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
  "lit": "types",
  "look": {},
  "scene": "types",
  "fig": ""
 }
];
export const PLATES = {
  ost: { text: "Un micro-projecteur sur la branche injecte l’image dans une lame de verre par un réseau d’entrée. La lumière rebondit à l’intérieur par réflexion totale interne, puis un réseau de sortie en extrait une partie à chaque rebond, vers l’œil. La lumière du monde réel traverse la lame : on voit les deux à la fois.", facts: () => [["principe", "réflexion totale interne"], ["couplage", "réseaux de diffraction"], ["casques", "HoloLens 2, Magic Leap 2"]] },
  types: { text: "Le combineur mélange l’image virtuelle et la vue du réel. Les solutions à miroir (birdbath) sont simples et lumineuses mais épaisses. Les guides d’ondes réfractifs utilisent des miroirs partiels enfouis. Les guides diffractifs, gravés (SRG) ou holographiques (VHG), sont les plus fins.", facts: () => [["le plus fin", "diffractif"], ["le plus lumineux", "birdbath"], ["défaut diffractif", "arcs-en-ciel"]] }
};
