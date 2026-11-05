// Chapitre 65 : Rendu hors ligne et production VFX (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 65 · rendu",
  "title": "Le rendu hors ligne",
  "sub": "le temps contre la qualité",
  "body": "<p class=\"lede\">Pour un film, une image peut prendre des minutes ou des heures à calculer, sur des <b>fermes de rendu</b> de milliers de cœurs. Le path tracing Monte-Carlo y règne (chapitre 10).</p>\n    <ul class=\"rules\"><li><b>Échantillonnage adaptatif</b> : plus de rayons là où l’image est bruitée.</li><li><b>Débruitage par IA</b> (OptiX, OpenImageDenoise) : temps de rendu divisés par plusieurs fois.</li><li><b>Rendu en nuage</b> : louer des milliers de cœurs pour un pic de production.</li></ul>",
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
  "lit": "vfx",
  "look": {},
  "scene": "vfx",
  "fig": ""
 },
 {
  "kicker": "65.1",
  "title": "Passes et compositing",
  "sub": "AOV et deep compositing",
  "body": "<p class=\"lede\">On ne rend pas une image unique mais des <b>passes</b> (AOV, arbitrary output variables) : diffus, spéculaire, ombres, profondeur, identifiants d’objets.</p>\n    <p>Le compositeur peut ainsi corriger un reflet sans tout recalculer. Le <b>deep compositing</b> garde plusieurs profondeurs par pixel, pour insérer proprement un personnage dans de la fumée ou des cheveux.</p>",
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
  "lit": "vfx",
  "look": {},
  "scene": "vfx",
  "fig": ""
 },
 {
  "kicker": "65.2",
  "title": "Le temps réel au plateau",
  "sub": "previz et production virtuelle",
  "body": "<p class=\"lede\">Le temps réel ne remplace pas ce pipeline, il en déplace la frontière : <b>prévisualisation</b> fidèle, éclairage sur plateau, et <b>production virtuelle</b> où les décors s’affichent sur des murs de LED filmés directement (chapitre 67).</p>\n    <p>Le rendu final reste hors ligne pour les plans les plus exigeants ; les moteurs temps réel (Unreal) livrent déjà des séries entières.</p>",
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
  "lit": "vfx",
  "look": {},
  "scene": "vfx",
  "fig": ""
 }
];
export const PLATES = {
  vfx: { text: "La scène est éclairée puis rendue par path tracing sur une ferme de serveurs, en plusieurs passes séparées (AOV). Le compositing les assemble avec la prise de vue réelle dans Nuke, où l’on corrige et intègre. Les outils de pipeline gèrent versions et dépendances de milliers d’éléments.", facts: () => [["moteurs", "RenderMan, Arnold, V-Ray, Cycles"], ["compositing", "Nuke"], ["temps", "minutes à heures par image"]] }
};
