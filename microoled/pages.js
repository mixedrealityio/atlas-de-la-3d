// Chapitre 14 : Micro-OLED et optiques de casque (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 14 · affichage",
  "title": "Micro-OLED et optiques",
  "sub": "l’écran sous la loupe",
  "body": "<p class=\"lede\">Un micro-OLED est un OLED fabriqué directement sur une puce de silicium : une dalle d’environ un pouce de diagonale, avec plus de 3 000 pixels par pouce.</p>\n    <p>Les transistors de silicium sont minuscules et rapides : on atteint des densités impossibles sur verre. Ces dalles équipent les viseurs d’appareils photo, l’Apple Vision Pro, des casques compacts et des lunettes vidéo. Leur petite taille impose une optique très grossissante.</p>",
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
  "lit": "pancake",
  "look": {},
  "scene": "pancake",
  "fig": ""
 },
 {
  "kicker": "14.1",
  "title": "PPI et PPD",
  "sub": "ce qui compte vraiment",
  "body": "<p class=\"lede\">Les <b>pixels par pouce</b> (PPI) décrivent l’écran ; les <b>pixels par degré</b> (PPD) décrivent ce que voit l’œil à travers la lentille.</p>\n    <div class=\"eq\">PPD ≈ pixels horizontaux / champ de vision horizontal (°)</div>\n    <p>L’acuité visuelle de 10/10 correspond à environ 60 PPD. Les casques actuels sont en dessous : on voit encore les pixels ou le texte flou. Doubler le PPD à champ de vision égal demande quatre fois plus de pixels, donc de calcul : d’où le rendu fovéal (chapitre 27).</p>",
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
  "lit": "ppd",
  "look": {},
  "scene": "ppd",
  "fig": ""
 },
 {
  "kicker": "14.2",
  "title": "Les lentilles",
  "sub": "Fresnel, asphériques, pancake",
  "body": "<ul class=\"rules\"><li><b>Fresnel</b> : une lentille découpée en anneaux, légère mais avec des halos (« god rays ») autour des contrastes forts.</li><li><b>Asphérique</b> : meilleure image, mais lourde et épaisse.</li><li><b>Pancake</b> (figure) : chemin replié par polarisation, casque mince et image nette jusqu’aux bords, au prix de beaucoup de lumière perdue, ce qui demande des écrans plus lumineux.</li><li>Réglage de l’écart des lentilles (IPD), manuel ou motorisé, pour aligner chaque lentille sur chaque pupille.</li></ul>",
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
  "lit": "pancake",
  "look": {},
  "scene": "pancake",
  "fig": ""
 },
 {
  "kicker": "14.3",
  "title": "Corriger la distorsion",
  "sub": "déformer l’image à l’avance",
  "body": "<p class=\"lede\">Une lentille grossissante déforme l’image en coussinet : les bords sont étirés.</p>\n    <p>Le compositeur du casque applique la déformation inverse (en <b>barillet</b>) à l’image rendue, par une grille de déformation ou un shader : après la lentille, les droites redeviennent droites. Le moteur rend donc une image plus grande que l’écran au centre, puis la compresse sur les bords. Avec l’eye tracking, la correction peut suivre la position de la pupille (distorsion dynamique).</p>",
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
  "lit": "pancake",
  "look": {},
  "scene": "pancake",
  "fig": ""
 },
 {
  "kicker": "14.4",
  "title": "L’aberration chromatique",
  "sub": "chaque couleur sa déviation",
  "body": "<p class=\"lede\">Le verre dévie davantage le bleu que le rouge : sans correction, des franges colorées apparaissent sur les bords.</p>\n    <p>Le compositeur déforme différemment les canaux rouge, vert et bleu, pour qu’ils se superposent après la lentille. Les fabricants calibrent aussi la <b>couleur</b> de chaque écran (uniformité, point blanc) et la luminosité selon la position dans le champ, pour corriger le vignettage des optiques.</p>",
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
  "lit": "pancake",
  "look": {},
  "scene": "pancake",
  "fig": ""
 }
];
export const PLATES = {
  pancake: { text: "La lumière polarisée de l’écran traverse un demi-miroir, est renvoyée par un polariseur réfléchissant, repart vers le demi-miroir, revient, puis traverse enfin vers l’œil grâce à une lame quart d’onde qui a tourné sa polarisation. Le chemin replié trois fois permet un casque bien plus mince qu’avec une lentille de Fresnel.", facts: () => [["épaisseur", "≈ deux fois moins"], ["prix", "perte de lumière (> 75 %)"], ["casques", "Quest 3, Vision Pro, Pico 4"]] },
  ppd: { text: "La netteté perçue dépend des pixels par degré de champ de vision (PPD), pas des pixels par pouce. L’œil humain distingue environ 60 PPD. Valeurs indicatives au centre de l’image.", facts: () => [["œil", "≈ 60 PPD"], ["casque grand public", "≈ 20 à 25"], ["haut de gamme", "≈ 35 à 40"]] }
};
