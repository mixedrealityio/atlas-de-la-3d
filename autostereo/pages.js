// Chapitre 66 : Autostéréoscopie et écrans volumétriques (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 66 · affichage",
  "title": "L’autostéréoscopie",
  "sub": "le relief sans équipement",
  "body": "<ul class=\"rules\"><li><b>Barrière de parallaxe</b> : des fentes masquent des colonnes de pixels pour chaque œil (Nintendo 3DS).</li><li><b>Lentilles lenticulaires</b> : plus lumineuses, standard des écrans 3D et des cartes postales animées.</li><li><b>Suivi de la tête</b> : l’écran recalcule les deux vues pour la position réelle des yeux (Acer SpatialLabs, écrans de bureau).</li><li><b>Multi-vues</b> : des dizaines de vues pour plusieurs spectateurs (Looking Glass, chapitre 15).</li></ul>\n    <p class=\"lede\">Après l’échec des téléviseurs 3D des années 2010, la catégorie revit sur des niches : prévisualisation CAO et médicale, signalétique, vitrines. La synthèse de vues par IA, qui fabrique les angles intermédiaires, est la piste la plus prometteuse.</p>",
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
  "lit": "lenti",
  "look": {},
  "scene": "lenti",
  "fig": ""
 },
 {
  "kicker": "66.1",
  "title": "Les écrans volumétriques",
  "sub": "l’image dans l’espace",
  "body": "<p class=\"lede\">Un écran volumétrique place de la lumière dans un <b>vrai volume</b> : on tourne autour, chacun voit son point de vue, sans lunettes.</p>\n    <ul class=\"rules\"><li><b>Balayage</b> : un écran ou une hélice tourne très vite et s’allume au bon moment (Voxon Photonics).</li><li><b>Milieux diffusants</b> : projeter dans une brume ou un écran de particules.</li><li><b>Plasma laser</b> : des points lumineux focalisés dans l’air, encore au stade du laboratoire.</li></ul>\n    <p>Limites : résolution, taille, et surtout pas d’occlusion (on voit à travers l’objet).</p>",
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
  "lit": "volumes",
  "look": {},
  "scene": "volumes",
  "fig": ""
 },
 {
  "kicker": "66.2",
  "title": "Hologrammes de scène et téléprésence",
  "sub": "le mot « hologramme » au sens large",
  "body": "<p class=\"lede\">Le <b>reflet de Pepper</b> (une vitre inclinée reflète un écran caché) fait « apparaître » des artistes en concert ; les <b>ventilateurs LED</b> dessinent des images flottantes en vitrine. Ce sont des images plates, sans profondeur physique.</p>\n    <p>Les <b>cabines de téléprésence</b> (Proto) et les écrans à champ lumineux grand format cherchent à faire assister une personne distante à une réunion comme si elle était là ; la compression neuronale et la synthèse de vues réduisent le volume énorme de données nécessaire.</p>",
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
  "lit": "volumes",
  "look": {},
  "scene": "volumes",
  "fig": ""
 }
];
export const PLATES = {
  lenti: { text: "Des lentilles (ou une barrière de fentes) devant l’écran envoient des colonnes de pixels différentes vers chaque position de l’œil. Chaque œil reçoit son image : relief sans lunettes. Le prix : la résolution est partagée entre les vues.", facts: () => [["barrière", "fentes, moins lumineuse"], ["lenticulaire", "lentilles, plus lumineuse"], ["limite", "résolution ÷ nombre de vues"]] },
  volumes: { text: "Un vrai écran volumétrique allume des points dans un volume (plan rotatif, milieu diffusant, plasma laser) : parallaxe complète mais faible résolution et pas d’occlusion. Les « hologrammes » de scène (reflet de Pepper, ventilateurs LED) sont des images plates qui semblent flotter.", facts: () => [["vrai volume", "Voxon"], ["illusion", "Pepper’s ghost"], ["téléprésence", "cabines, light field"]] }
};
