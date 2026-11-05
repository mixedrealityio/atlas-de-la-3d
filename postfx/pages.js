// Chapitre 12 : Post-traitement et anticrénelage (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 12 · rendu",
  "title": "Post-traitement",
  "sub": "l’image après le rendu",
  "body": "<p class=\"lede\">Le moteur dessine d’abord une image brute, souvent en haute précision, puis lui applique une série de passes plein écran.</p>\n    <p>Ces passes imitent la caméra et l’œil (halos, profondeur de champ), corrigent les défauts d’échantillonnage (anticrénelage) et adaptent l’image à l’écran (tone mapping).</p>",
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
  "kicker": "12.1",
  "title": "L’anticrénelage",
  "sub": "combattre les escaliers",
  "body": "<ul class=\"rules\"><li><b>MSAA</b> : plusieurs échantillons de couverture et de profondeur par pixel, un seul calcul de couleur. Efficace sur les bords géométriques.</li><li><b>FXAA, SMAA</b> : repèrent les bords dans l’image finale et les flouent intelligemment. Très bon marché.</li><li><b>TAA</b> : la caméra tremble d’un sous-pixel à chaque image, et l’on mélange avec l’image précédente reprojetée. Traite tout, mais peut créer du flou et des traînées.</li><li><b>Super-résolution</b> (DLSS, FSR, XeSS, MetalFX) : rendre en basse résolution et reconstruire, souvent par réseau de neurones.</li></ul>",
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
  "lit": "aa",
  "look": {},
  "scene": "aa",
  "fig": ""
 },
 {
  "kicker": "12.2",
  "title": "Le tone mapping",
  "sub": "de la scène à l’écran",
  "body": "<p class=\"lede\">Une scène réelle va de l’ombre profonde au soleil, des millions de fois plus lumineux. Le rendu garde ces valeurs (HDR) ; l’écran n’affiche qu’une plage limitée.</p>\n    <p>Le <b>tone mapping</b> (ACES, AgX dans Blender, Khronos PBR Neutral) compresse les hautes lumières sans écraser le contraste. Puis la conversion vers l’espace de couleur de l’écran (sRGB, Display P3, HDR10) applique la courbe gamma.</p>",
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
  "kicker": "12.3",
  "title": "Bloom, flous et autres effets",
  "sub": "imiter l’optique",
  "body": "<table class=\"data\"><tr><th>effet</th><th>principe</th><th>en VR</th></tr><tr><td>bloom</td><td>flouter et ajouter les zones très claires</td><td>léger</td></tr><tr><td>flou de mouvement</td><td>étaler selon la vitesse des pixels</td><td>à éviter</td></tr><tr><td>profondeur de champ</td><td>flouter selon la distance au plan net</td><td>à éviter, ou avec eye tracking</td></tr><tr><td>vignettage</td><td>assombrir les bords</td><td>parfois pour réduire le mal des transports</td></tr></table>\n    <p class=\"lede\">En VR et en AR, l’œil fait déjà la mise au point et perçoit le mouvement : les effets de caméra sont réduits au minimum.</p>",
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
  chaine: { text: "Le rendu produit une image à grande dynamique (HDR). On la lisse, on ajoute les effets d’optique (halos, flous), puis on la ramène à la plage de l’écran par le tone mapping et l’étalonnage. En VR, certains effets (flou de mouvement, grain) sont évités : ils rendent malade ou gênent.", facts: () => [["entrée", "HDR linéaire"], ["sortie", "sRGB ou HDR10"], ["VR", "TAA prudent, pas de flou"]] },
  aa: { text: "Le crénelage (escaliers sur les bords) vient de l’échantillonnage d’une scène continue par une grille de pixels. Le MSAA est le choix des casques autonomes (il est presque gratuit sur les GPU mobiles à tuiles). Le TAA réutilise les images précédentes en décalant légèrement la caméra.", facts: () => [["casques mobiles", "MSAA ×4"], ["PC", "TAA, DLSS"], ["défaut TAA", "flou, traînées"]] }
};
