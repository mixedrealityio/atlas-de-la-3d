// Chapitre 28 : Manettes et retours haptiques (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 28 · interaction",
  "title": "Manettes et haptique",
  "sub": "toucher le virtuel",
  "body": "<p class=\"lede\">La vue et l’audio ne suffisent pas : sans <b>retour tactile</b>, saisir un objet virtuel reste étrange, et appuyer sur un bouton dans le vide manque de certitude.</p>\n    <p>Les manettes apportent ce qui manque aux mains nues : des boutons physiques, une précision de suivi supérieure, et une vibration qui confirme chaque action. Beaucoup d’applications professionnelles combinent mains et manettes.</p>",
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
  "lit": "manette",
  "look": {},
  "scene": "manette",
  "fig": ""
 },
 {
  "kicker": "28.1",
  "title": "Vibrations et formes d’onde",
  "sub": "ERM, LRA, voice coil",
  "body": "<ul class=\"rules\"><li><b>ERM</b> : un petit moteur avec un balourd, vibration grossière et lente à démarrer.</li><li><b>LRA</b> : une masse sur un ressort, excitée à sa résonance ; réponse rapide et nette, idéale pour des clics.</li><li><b>Voice coil</b> : une bobine comme un haut-parleur, large bande ; on joue des « sons » tactiles, des textures.</li><li>Les API (OpenXR haptics, Meta Haptics SDK, Core Haptics) envoient amplitude, fréquence et durée, ou des fichiers de formes d’onde.</li></ul>",
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
  "lit": "familles",
  "look": {},
  "scene": "familles",
  "fig": ""
 },
 {
  "kicker": "28.2",
  "title": "Le retour de force",
  "sub": "résister aux doigts",
  "body": "<p class=\"lede\">Pour sentir qu’un objet est dur, il faut que quelque chose <b>arrête</b> les doigts. Les gants à retour de force (HaptX, SenseGlove) utilisent des freins, des câbles ou des micro-fluides ; certains ajoutent des matrices de petits actionneurs sous la peau des doigts.</p>\n    <p>Ils servent surtout à la formation industrielle, médicale et à la recherche : ils sont chers, encombrants et demandent un suivi précis de la main. Les gâchettes adaptatives des manettes de jeu en sont une version simple.</p>",
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
  "lit": "familles",
  "look": {},
  "scene": "familles",
  "fig": ""
 },
 {
  "kicker": "28.3",
  "title": "L’haptique sans contact",
  "sub": "ultrasons et autres pistes",
  "body": "<p class=\"lede\">Des réseaux de haut-parleurs ultrasonores focalisent la pression acoustique en un point de l’air : la main y sent une légère vibration (Ultraleap). On peut dessiner des boutons et des formes perceptibles au-dessus d’une surface.</p>\n    <p>Autres pistes : stimulation électrique des muscles, retour thermique, accessoires passifs (un vrai objet physique placé là où se trouve l’objet virtuel, « haptique passive »), plateformes de mouvement pour la simulation.</p>",
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
  "lit": "familles",
  "look": {},
  "scene": "familles",
  "fig": ""
 },
 {
  "kicker": "28.4",
  "title": "Concevoir l’haptique",
  "sub": "une question d’expérience",
  "body": "<p class=\"lede\">Le retour haptique doit être calibré, synchronisé avec l’image et le son, et jamais envahissant. Les études montrent qu’un retour même approximatif améliore la précision des gestes et la présence lors des manipulations fines.</p>\n    <p>Pistes de recherche : <b>redirection haptique</b> (faire croire que la main touche un objet virtuel en la guidant vers un vrai objet), peau électronique, retour de chaleur, gants à micro-fluides.</p>",
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
  "lit": "familles",
  "look": {},
  "scene": "familles",
  "fig": ""
 }
];
export const PLATES = {
  familles: { text: "La plupart des manettes utilisent des actionneurs linéaires (LRA) ou des bobines (voice coil) capables de jouer des formes d’onde précises : clic, texture, choc. Les gants à retour de force freinent les doigts pour simuler un objet rigide ; les ultrasons focalisés créent des sensations sur la main nue.", facts: () => [["manettes", "LRA, voice coil"], ["force", "gants, exosquelettes"], ["sans contact", "ultrasons"]] },
  manette: { text: "Une manette combine suivi (LED infrarouges vues par le casque, ou caméras propres), centrale inertielle, boutons analogiques, capteurs capacitifs qui savent quels doigts sont posés, et un actionneur haptique.", facts: () => [["suivi", "6DoF"], ["latence", "quelques ms"], ["autonomie", "dizaines d’heures"]] }
};
