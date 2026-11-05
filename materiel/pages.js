// Chapitre 48 : Matériel et entraînement distribué (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 48 · entraînement",
  "title": "Matériel et entraînement",
  "sub": "la mémoire avant tout",
  "body": "<p class=\"lede\">Entraîner un modèle 3D consomme beaucoup de mémoire GPU : les activations de millions de rayons ou de gaussiennes, les paramètres, les gradients et les états de l’optimiseur (Adam en garde deux par paramètre).</p>\n    <p>Une scène de gaussiennes de quelques millions de primitives occupe déjà plusieurs gigaoctets ; un générateur 3D de plusieurs milliards de paramètres s’entraîne sur des centaines de GPU.</p>",
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
  "lit": "prec",
  "look": {},
  "scene": "prec",
  "fig": ""
 },
 {
  "kicker": "48.1",
  "title": "Économiser la mémoire",
  "sub": "précision mixte, checkpointing",
  "body": "<ul class=\"rules\"><li><b>Précision mixte</b> : calculer en bfloat16 (même plage que FP32, moins de précision), garder une copie FP32 des poids.</li><li><b>FP8</b> sur les GPU récents (Hopper, Blackwell) pour les grands transformers 3D.</li><li><b>Gradient checkpointing</b> : ne pas garder toutes les activations, les recalculer pendant la rétropropagation.</li><li><b>Lots de rayons</b> : pour les NeRF, traiter les pixels par paquets plutôt que des images entières.</li><li>Structures éparses et élagage pour les gaussiennes.</li></ul>",
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
  "lit": "prec",
  "look": {},
  "scene": "prec",
  "fig": ""
 },
 {
  "kicker": "48.2",
  "title": "Compiler et écrire des noyaux",
  "sub": "CUDA, Triton, torch.compile",
  "body": "<p class=\"lede\">Les opérations 3D (rasteriser des gaussiennes, chercher des voisins, parcourir des grilles de hachage) ne sont pas des multiplications de matrices standard : on écrit des <b>noyaux</b> GPU spécialisés.</p>\n    <table class=\"data\"><tr><th>outil</th><th>usage</th></tr><tr><td>CUDA</td><td>noyaux sur mesure (3DGS, Instant-NGP, tiny-cuda-nn)</td></tr><tr><td>Triton</td><td>noyaux en Python, compilés pour le GPU</td></tr><tr><td>torch.compile</td><td>fusionner automatiquement les opérations</td></tr><tr><td>Warp, Taichi</td><td>simulation et géométrie différentiables</td></tr></table>\n    <p>La fusion d’opérations évite des allers-retours en mémoire, souvent le vrai goulot.</p>",
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
  "lit": "para",
  "look": {},
  "scene": "para",
  "fig": ""
 },
 {
  "kicker": "48.3",
  "title": "Distribuer",
  "sub": "plusieurs GPU, plusieurs machines",
  "body": "<p class=\"lede\">Pour les modèles de fondation 3D, on combine parallélisme de données (DDP), découpage des paramètres (FSDP) et parfois des couches (pipeline), sur des GPU reliés par NVLink et InfiniBand.</p>\n    <p>Pour une scène géante, on découpe l’espace (CityGaussian, Block-NeRF) : chaque GPU optimise un bloc avec ses photos, puis on assemble et l’on gère les transitions. Le coût dominant n’est souvent pas le calcul mais le chargement des images : il faut un stockage rapide.</p>",
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
  "lit": "para",
  "look": {},
  "scene": "para",
  "fig": ""
 }
];
export const PLATES = {
  prec: { text: "Chaque paramètre, gradient ou activation prend 4 octets en FP32, 2 en bfloat16 ou FP16, 1 en FP8. Passer de FP32 à bfloat16 divise par deux la mémoire des activations et accélère les calculs sur les cœurs tensoriels, presque sans perte de précision.", facts: () => [["FP32", "4 octets"], ["bf16", "2 octets, même plage que FP32"], ["FP8", "1 octet, GPU récents"]] },
  para: { text: "Le parallélisme de données copie le modèle sur chaque GPU et moyenne les gradients. FSDP découpe aussi les paramètres et les états de l’optimiseur entre GPU. Pour les très grandes scènes (une ville en gaussiennes), on découpe l’espace en blocs entraînés en parallèle puis fusionnés.", facts: () => [["DDP", "PyTorch"], ["FSDP", "modèles géants"], ["scènes", "découpage spatial"]] }
};
