export const SPECS = [
 {
  "key": "shadow",
  "title": "La shadow map",
  "sub": "voir la scène depuis la lumière",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Vue de la lumière",
    "s": "rendu de profondeur",
    "pal": "blue"
   },
   {
    "n": "Carte d’ombre",
    "s": "texture de profondeur",
    "pal": "blue"
   },
   {
    "n": "Vue caméra",
    "s": "chaque pixel"
   },
   {
    "n": "Comparer",
    "s": "plus loin que la carte ? ombre",
    "pal": "red"
   },
   {
    "n": "Filtrer",
    "s": "PCF, ombres douces"
   }
  ],
  "x0": 0
 },
 {
  "key": "gi",
  "title": "L’illumination globale",
  "sub": "la lumière qui rebondit",
  "kind": "pipeline",
  "per": 5,
  "bw": 1.9,
  "gap": 0.75,
  "y": 1.4,
  "stages": [
   {
    "n": "Lumière directe",
    "s": "lampes, soleil"
   },
   {
    "n": "Espace écran",
    "s": "SSAO, SSR",
    "pal": "blue"
   },
   {
    "n": "Sondes",
    "s": "lumière précalculée",
    "pal": "blue"
   },
   {
    "n": "Lumen",
    "s": "champs de distance + traçage",
    "pal": "red"
   },
   {
    "n": "ReSTIR",
    "s": "réutiliser les bons échantillons",
    "pal": "red"
   }
  ],
  "x0": 40
 }
];
