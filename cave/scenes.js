export const SPECS = [
 {
  "key": "cave",
  "title": "Une CAVE",
  "sub": "Cave Automatic Virtual Environment",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Projecteurs",
    "s": "stéréo actifs, laser",
    "pal": "blue"
   },
   {
    "n": "Écrans",
    "s": "murs + sol"
   },
   {
    "n": "Lunettes",
    "s": "obturateurs synchronisés",
    "pal": "red"
   },
   {
    "n": "Suivi de tête",
    "s": "parallaxe correcte",
    "pal": "red"
   },
   {
    "n": "Rendu",
    "s": "une vue par mur",
    "pal": "blue"
   },
   {
    "n": "Groupe",
    "s": "plusieurs personnes"
   }
  ],
  "x0": 0
 },
 {
  "key": "calage",
  "title": "Caler plusieurs projecteurs",
  "sub": "warping et blending",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Mire",
    "s": "projetée"
   },
   {
    "n": "Caméra",
    "s": "mesure",
    "pal": "blue"
   },
   {
    "n": "Warping",
    "s": "déformer pour la surface",
    "pal": "red"
   },
   {
    "n": "Blending",
    "s": "fondre les recouvrements",
    "pal": "red"
   },
   {
    "n": "Photométrie",
    "s": "même luminosité et couleur",
    "pal": "blue"
   }
  ],
  "x0": 40
 }
];
