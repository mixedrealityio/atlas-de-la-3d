# Atlas de la 3D

Un manuel interactif en 3D, en français, pour comprendre la 3D de bout en bout : mathématiques, rendu, écrans et optiques, réalité virtuelle et augmentée, interaction, capture du réel, intelligence artificielle 3D et son entraînement, moteurs temps réel, web 3D et standards. 80 chapitres et 362 pages ; chaque page a une figure animée (three.js) que l’on peut tourner et décomposer, et beaucoup ont un exercice.

Ouvrir `index.html` dans un serveur web local (par exemple `python3 -m http.server`) : les modules JavaScript ne se chargent pas depuis `file://`.

| N° | Chapitre | Contenu |
|---|---|---|
| 1 | Géométrie dans l’espace et algèbre linéaire | vecteurs, matrices 4×4, coordonnées homogènes |
| 2 | Représenter les rotations | angles d’Euler, matrices, quaternions |
| 3 | Projections et caméras | orthographique, perspective, champ de vision, plans de coupe |
| 4 | Représenter surfaces et volumes | maillages, nuages de points, voxels, octrees |
| 5 | Courbes et géométrie paramétrique | Bézier, B-splines, NURBS, CSG |
| 6 | Représentations implicites et champs de distance | SDF, raymarching, surfaces de niveau |
| 7 | Le pipeline de rasterisation | sommets, pixels, Z-buffer, élimination |
| 8 | Les shaders et le pipeline programmable | vertex, fragment, compute, mesh shaders ; Vulkan, DirectX 12, WebGPU |
| 9 | Le rendu physique (PBR) | microfacettes, BRDF de Cook-Torrance, équation du rendu |
| 10 | Lancer de rayons et path tracing | Kajiya, BVH, temps réel RTX et DXR |
| 11 | Ombres et illumination globale | shadow maps, cascades, SSAO, SSR, Lumen, ReSTIR |
| 12 | Post-traitement et anticrénelage | TAA, MSAA, FXAA, tone mapping, bloom, flou |
| 13 | Physique des écrans plats | LCD, OLED, micro-LED, Fast-LCD, 90 à 144 Hz |
| 14 | Micro-OLED et optiques de casque | densité (PPI, PPD), lentilles, distorsion, chromaticité |
| 15 | Affichages holographiques et light-field | champ lumineux, autostéréoscopie, holographie numérique (CGH) |
| 16 | Les guides d’ondes | réfractifs, diffractifs (SRG, VHG), et optiques pancake |
| 17 | Projection à fibre optique | fiber scanned displays (FSD), miniaturisation |
| 18 | Performances d’affichage et latence | motion-to-photon, persistance, timewarp, spacewarp |
| 19 | Anatomie des casques VR et AR | vidéo see-through (VST) et optical see-through (OST) |
| 20 | Le rendu stéréoscopique | écart interpupillaire, disparité, convergence |
| 21 | Le conflit vergence-accommodation | fatigue visuelle, focale variable, multifocal |
| 22 | Suivi spatial et fusion de capteurs | 3DoF et 6DoF, centrales inertielles, filtres |
| 23 | SLAM et ancrage spatial | VIO, points d’intérêt, images clés, cartes, ancres |
| 24 | La réalité augmentée optique et sa calibration | transparence, contraste, occlusion, QR codes, vision hors ligne |
| 25 | Le suivi optique des mains | pose 3D de la main, articulations, squelette |
| 26 | Interaction directe et gestuelle 3D | pincement, raycasting, interfaces spatiales |
| 27 | Eye tracking et rendu fovéal | reflet cornéen, calibration, fovéal fixe et dynamique |
| 28 | Manettes et retours haptiques | manettes 6DoF, LRA, gants à retour de force, ultrasons |
| 29 | L’audio spatial et binaural | HRTF, réverbération, occlusion acoustique |
| 30 | Interagir avec la 3D dans Blender | gizmos, navigation, raccourcis, modes, nœuds, Python, VR |
| 31 | La photogrammétrie multi-vues | structure from motion, appariement, triangulation, MVS |
| 32 | Scanners optiques et LiDAR | temps de vol, lumière structurée, triangulation laser |
| 33 | La capture de mouvement | optique à marqueurs, inertielle, sans marqueurs par apprentissage |
| 34 | Vidéo volumétrique et capture de performance | rigs synchronisés, maillages dynamiques, 4D |
| 35 | Formats et fichiers 3D | USD, glTF 2.0, FBX, OBJ, Alembic |
| 36 | Capturer les matériaux (SVBRDF) | polarisation, photométrie, multispectral |
| 37 | Comprendre la 3D par la vision | CNN 3D, PointNet, PointNet++, réseaux de graphes |
| 38 | Détection d’objets et pose 6DoF | boîtes 3D, VoteNet, PVNet, IA locale sur HoloLens 2 et compute pack |
| 39 | Les champs de radiance neuronaux (NeRF) | MLP, encodage positionnel, raymarching différentiable |
| 40 | Le Gaussian Splatting 3D | gaussiennes anisotropes, rasterisation, optimisation, élagage |
| 41 | Large Spatial Models et transformers 3D | jetons spatiaux, 3D-VAE, modèles de fondation |
| 42 | IA générative text-to-3D et image-to-3D | SDS, multi-vues, LGM, InstantMesh, générateurs natifs |
| 43 | Jeux de données 3D | ShapeNet, Objaverse, ScanNet, KITTI, CO3D |
| 44 | Augmentation et prétraitement des données 3D | normalisation, rotations, bruit, sous-échantillonnage |
| 45 | Les fonctions de perte géométriques | Chamfer, Earth Mover, IoU 3D, régularisation laplacienne |
| 46 | Les représentations pour l’apprentissage 3D | voxels, points, SDF et implicites, maillages, gaussiennes |
| 47 | Le rendu différentiable | PyTorch3D, Kaolin, nvdiffrast, gsplat |
| 48 | Matériel et entraînement distribué | mémoire GPU, bfloat16, FP8, Triton, CUDA, multi-GPU |
| 49 | L’architecture d’un moteur temps réel | boucle de jeu, graphe de scène, threads, ECS |
| 50 | Physique temps réel et collisions | phase large et fine, GJK, EPA, corps rigides, souples, fluides |
| 51 | Flux de géométrie et niveaux de détail | LOD, LOD continu, Nanite, tessellation |
| 52 | Animations et squelettes | cinématique directe et inverse, skinning, blendshapes |
| 53 | La génération procédurale | bruit de Perlin, WFC, L-systèmes, Geometry Nodes, Houdini |
| 54 | Les moteurs de génération IA en temps réel | modèles légers, rendu hybride, raffinement génératif, IA locale |
| 55 | Jumeaux numériques et simulation industrielle | OpenUSD, Omniverse, BIM et IFC, métrologie |
| 56 | Le web 3D et le spatial web | WebGL, WebGPU, three.js, Babylon.js, WebXR |
| 57 | Compression et transmission 3D | Draco, meshopt, Corto, ASTC, BC7, Basis, streaming, rendu à distance |
| 58 | Standards et écosystème XR | Khronos : OpenXR, Vulkan, OpenCL ; Android XR |
| 59 | Éthique, sécurité et confidentialité | biométrie spatiale, regard, gestes, sécurité en AR |
| 60 | L’avenir de la 3D et du spatial computing | interfaces invisibles, affichage rétinien, IA et monde physique |
| 61 | Qu’est-ce que la 3D ? Une brève histoire | espaces, repères, de Sketchpad aux gaussiennes |
| 62 | Textures et dépliage UV | coordonnées UV, mipmaps, filtrage, atlas, canaux packés |
| 63 | Couleur, HDR et espaces colorimétriques | sRGB, linéaire, Display P3, Rec.2020, ACES |
| 64 | Optimiser le rendu temps réel | budget en ms, draw calls, forward, deferred, clustered |
| 65 | Rendu hors ligne et production VFX | fermes de rendu, AOV, compositing, débruitage |
| 66 | Autostéréoscopie et écrans volumétriques | barrières, lenticulaires, suivi de tête, volumes, Pepper’s ghost |
| 67 | Projection, CAVE et dômes | salles immersives, warping, murs de LED, production virtuelle |
| 68 | Luminance, confort et comparatif des écrans XR | nits à l’œil, HDR, scintillement, OLED, micro-OLED, micro-LED, laser |
| 69 | Le spectre de Milgram et l’AR mobile | continuum réel-virtuel, ARKit, ARCore, WebAR, filtres |
| 70 | Le mal des transports virtuel | conflit visuo-vestibulaire, téléportation, vignettes, rotation par crans |
| 71 | Les casques du marché | Quest, Index, PSVR2, Vision Pro, Galaxy XR, HoloLens 2, Magic Leap 2, Varjo |
| 72 | Estimer la profondeur par l’IA | profondeur monoculaire, stéréo apprise, du pixel au point 3D |
| 73 | Panorama des moteurs 3D | Unreal, Unity, Godot, Blender, moteurs maison, web |
| 74 | La VR et l’AR au travail | formation, santé, montage, téléassistance, chirurgie |
| 75 | L’AR grand public | filtres, essayage, meubles à l’échelle, jeux, navigation |
| 76 | VR sociale et métavers | avatars, co-présence, mondes persistants, standards |
| 77 | Les limites actuelles de la VR et de l’AR | champ, résolution, poids, autonomie, usages, vie privée |
| 78 | Glossaire | les termes essentiels de la 3D, du rendu et de la XR |
| 79 | Les QR codes de positionnement sur HoloLens | taille, zone de silence, modules, distance, précision |
| 80 | Éviter la dérive en environnement brillant ou monotone | reflets, surfaces uniformes, hangars, aéronautique |

Moteur de pages et de figures repris de l’Atlas de l’IA (lui-même dérivé d’Atlas of Physics, licence MIT, voir `LICENSE`) ; figures propres à la 3D dans `engine/kit3d.js`.
