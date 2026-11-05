export const SPECS = [
 {
  "key": "brdf",
  "title": "Une BRDF de microfacettes",
  "sub": "Cook-Torrance",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "D",
    "s": "distribution des microfacettes (rugosité)",
    "pal": "blue"
   },
   {
    "n": "F",
    "s": "Fresnel : reflet rasant",
    "pal": "red"
   },
   {
    "n": "G",
    "s": "ombrage entre microfacettes",
    "pal": "blue"
   },
   {
    "n": "Diffus",
    "s": "lumière qui ressort du matériau"
   },
   {
    "n": "Résultat",
    "s": "spéculaire + diffus",
    "pal": "red"
   }
  ],
  "x0": 0
 },
 {
  "key": "mat",
  "title": "Les paramètres d’un matériau",
  "sub": "le flux metallic-roughness",
  "kind": "pipeline",
  "per": 3,
  "bw": 2.2,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Couleur de base",
    "s": "albedo",
    "pal": "blue"
   },
   {
    "n": "Métallique",
    "s": "0 ou 1",
    "pal": "red"
   },
   {
    "n": "Rugosité",
    "s": "0 lisse, 1 mat",
    "pal": "blue"
   },
   {
    "n": "Normales",
    "s": "relief fin"
   },
   {
    "n": "Occlusion",
    "s": "creux"
   },
   {
    "n": "Émission",
    "s": "lumière propre",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
