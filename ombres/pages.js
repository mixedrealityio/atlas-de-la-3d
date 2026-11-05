// Chapitre 11 : Ombres et illumination globale (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 11 · rendu",
  "title": "Ombres et illumination globale",
  "sub": "direct et indirect",
  "body": "<p class=\"lede\">La lumière <b>directe</b> va de la source à la surface ; la lumière <b>indirecte</b> a rebondi ailleurs avant. Sans elle, les zones à l’ombre sont noires et l’image paraît artificielle.</p>\n    <p>Le path tracing calcule tout (chapitre 10) mais coûte cher ; le temps réel combine plusieurs approximations.</p>",
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
  "lit": "shadow",
  "look": {},
  "scene": "shadow",
  "fig": ""
 },
 {
  "kicker": "11.1",
  "title": "Les shadow maps",
  "sub": "la technique standard",
  "body": "<ul class=\"rules\"><li>Pour le soleil : <b>cascaded shadow maps</b>, plusieurs cartes de plus en plus grandes avec la distance.</li><li>Pour les lampes ponctuelles : six cartes (une par face d’un cube).</li><li><b>Acné d’ombre</b> : une surface s’ombre elle-même par manque de précision ; on ajoute un léger décalage (bias).</li><li><b>Ombres douces</b> : filtrer plusieurs échantillons (PCF) ou estimer la taille de la pénombre (PCSS).</li></ul>\n    <p class=\"lede\">Les ombres en lancer de rayons (chapitre 10) évitent ces artefacts quand le matériel le permet. En AR, une ombre virtuelle portée sur le sol réel ancre fortement l’hologramme dans la scène.</p>",
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
  "lit": "shadow",
  "look": {},
  "scene": "shadow",
  "fig": ""
 },
 {
  "kicker": "11.2",
  "title": "SSAO et SSR",
  "sub": "l’espace écran",
  "body": "<p class=\"lede\">La <b>SSAO</b> (occlusion ambiante en espace écran) assombrit les creux en regardant, dans le tampon de profondeur, combien de voisins sont plus proches de la caméra. La <b>SSR</b> trace des rayons de reflet dans l’image déjà calculée.</p>\n    <p>Rapides, elles ont une limite commune : ce qui n’est pas à l’écran n’existe pas. Un objet qui sort du cadre disparaît des reflets ; on complète par des cartes d’environnement.</p>",
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
  "lit": "gi",
  "look": {},
  "scene": "gi",
  "fig": ""
 },
 {
  "kicker": "11.3",
  "title": "La GI dynamique",
  "sub": "Lumen, sondes, ReSTIR",
  "body": "<ul class=\"rules\"><li><b>Lightmaps</b> : lumière précalculée dans des textures ; parfait pour les scènes fixes.</li><li><b>Sondes</b> (DDGI) : une grille de points qui mesurent la lumière autour d’eux et se mettent à jour.</li><li><b>Lumen</b> (Unreal Engine 5) : traçage dans des champs de distance et un cache des surfaces, mise à jour au fil des images.</li><li><b>ReSTIR</b> : rééchantillonnage spatio-temporel ; quelques rayons suffisent pour des milliers de lumières.</li></ul>",
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
  "lit": "gi",
  "look": {},
  "scene": "gi",
  "fig": ""
 }
];
export const PLATES = {
  shadow: { text: "On dessine la scène depuis la lumière en ne gardant que la profondeur. Pour chaque pixel vu par la caméra, on calcule sa distance à la lumière et on la compare à la carte : s’il est plus loin que ce que la lumière voit, il est dans l’ombre. Les cascades découpent le tronc de la caméra en tranches, chacune avec sa carte.", facts: () => [["cascades", "3 ou 4 tranches"], ["artefacts", "acné, aliasing"], ["douceur", "PCF, PCSS"]] },
  gi: { text: "Les techniques en espace écran (SSAO, SSR) sont rapides mais ne voient que ce qui est à l’écran. Les sondes et les lightmaps précalculent la lumière. Lumen (Unreal Engine 5) trace des rayons dans des champs de distance et des caches de surface. ReSTIR réutilise d’un pixel à l’autre et d’une image à l’autre les échantillons de lumière les plus utiles.", facts: () => [["SSAO", "creux assombris"], ["SSR", "reflets visibles à l’écran"], ["dynamique", "Lumen, ReSTIR"]] }
};
