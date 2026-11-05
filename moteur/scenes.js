export const SPECS = [
 {
  "key": "boucle",
  "title": "La boucle de jeu",
  "sub": "une image, encore et encore",
  "kind": "cycle",
  "nodes": [
   {
    "n": "Entrées",
    "pal": "blue"
   },
   {
    "n": "Logique",
    "pal": null
   },
   {
    "n": "Physique",
    "pal": "red"
   },
   {
    "n": "Animation",
    "pal": null
   },
   {
    "n": "Culling",
    "pal": "blue"
   },
   {
    "n": "Rendu",
    "pal": "red"
   }
  ],
  "unit": "image",
  "speed": 0.5,
  "x0": 0
 },
 {
  "key": "ecs",
  "title": "Entités, composants, systèmes",
  "sub": "le data-oriented design",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Entité",
    "s": "un identifiant"
   },
   {
    "n": "Composants",
    "s": "données pures : position, vitesse",
    "pal": "blue"
   },
   {
    "n": "Archétypes",
    "s": "tableaux contigus",
    "pal": "blue"
   },
   {
    "n": "Systèmes",
    "s": "parcourent les tableaux",
    "pal": "red"
   },
   {
    "n": "Job system",
    "s": "répartis sur les cœurs",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
