export const SPECS = [
 {
  "key": "hangar",
  "title": "Un hangar difficile",
  "sub": "fuselage lisse, mur uni, sol brillant",
  "kind": "hangar",
  "x0": 0
 },
 {
  "key": "hangarfix",
  "title": "Le même hangar, aménagé",
  "sub": "panneaux texturés, tapis, QR codes relevés",
  "kind": "hangar",
  "mode": "fix",
  "x0": 40
 },
 {
  "key": "plans",
  "title": "Une pièce faite de plusieurs plans",
  "sub": "gabarit d’assemblage : ce que voit le maillage",
  "kind": "planes",
  "x0": 80
 },
 {
  "key": "plansqr",
  "title": "Où poser les QR codes",
  "sub": "un par plan, plans non parallèles, loin des arêtes",
  "kind": "planes",
  "only": 3,
  "x0": 120
 },
 {
  "key": "courbe",
  "title": "Recaler plutôt que subir",
  "sub": "erreur de position au fil du travail (illustratif)",
  "kind": "drift",
  "tol": 0.45,
  "per": 0.25,
  "x0": 160
 }
];
