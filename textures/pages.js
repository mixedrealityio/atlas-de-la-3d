// Chapitre 62 : Textures et dépliage UV (généré par build.py)
export const PAGES = [
 {
  "kicker": "Chapitre 62 · rendu",
  "title": "Textures et UV",
  "sub": "une image sur une surface",
  "body": "<p class=\"lede\">Une <b>texture</b> est une image échantillonnée sur une surface pour moduler sa couleur, sa rugosité, son relief ou son émission (chapitre 9).</p>\n    <p>Le lien entre la surface 3D et l’image 2D est le <b>dépliage UV</b> : chaque sommet reçoit des coordonnées (u, v) qui disent quelle partie de l’image lui correspond. Le rasteriseur interpole ces coordonnées dans chaque triangle (chapitre 7).</p>",
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
  "lit": "uv",
  "look": {},
  "scene": "uv",
  "fig": ""
 },
 {
  "kicker": "62.1",
  "title": "Bien déplier",
  "sub": "distorsion, coutures, densité",
  "body": "<ul class=\"rules\"><li><b>Coutures</b> : les placer là où on ne les voit pas (sous les bras, à l’arrière).</li><li><b>Distorsion</b> : un damier plaqué sur l’objet doit garder des cases carrées.</li><li><b>Densité de texels</b> : répartir la résolution selon l’importance visuelle, et de façon homogène entre objets.</li><li><b>Chevauchements</b> : à éviter, sauf volontairement (symétrie, tuiles répétées).</li><li>Dans Blender : marquer les coutures en mode édition, puis U → Unwrap ; Smart UV Project pour les objets techniques.</li></ul>",
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
  "lit": "uv",
  "look": {},
  "scene": "uv",
  "fig": ""
 },
 {
  "kicker": "62.2",
  "title": "Mipmaps et filtrage",
  "sub": "stable à toute distance",
  "body": "<p class=\"lede\">Quand une texture est vue de loin, plusieurs texels tombent dans un même pixel : sans précaution, l’image scintille (crénelage).</p>\n    <p>Les <b>mipmaps</b> précalculent des versions de plus en plus petites ; le GPU choisit le niveau adapté. Le <b>filtrage trilinéaire</b> mélange deux niveaux, le <b>filtrage anisotrope</b> garde la netteté des surfaces vues en biais (un sol au loin).</p>",
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
  "lit": "mip",
  "look": {},
  "scene": "mip",
  "fig": ""
 },
 {
  "kicker": "62.3",
  "title": "Le budget des textures",
  "sub": "atlas, canaux packés, compression",
  "body": "<p class=\"lede\">Les textures sont souvent ce qui pèse le plus dans une scène.</p>\n    <ul class=\"rules\"><li><b>Atlas</b> : regrouper les textures de plusieurs objets dans une seule image, pour moins de changements d’état.</li><li><b>Canaux packés</b> : rugosité, métallicité et occlusion dans les canaux R, V, B d’une seule image (c’est la convention glTF).</li><li><b>Compression GPU</b> : BC7 sur PC, ASTC sur casques et mobiles (chapitre 57).</li><li>En XR, l’image est rendue deux fois sur un grand champ : chaque mégaoctet économisé se traduit en fluidité et en autonomie.</li></ul>",
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
  "lit": "mip",
  "look": {},
  "scene": "mip",
  "fig": ""
 }
];
export const PLATES = {
  uv: { text: "Pour plaquer une image sur une surface, on la « déplie » comme un patron de couture : chaque sommet reçoit des coordonnées (u, v) dans l’image. Un bon dépliage limite les déformations et cache les coutures. Les mipmaps et le filtrage gardent l’image stable à toute distance.", facts: () => [["UV", "(u, v) entre 0 et 1"], ["Blender", "U : menu de dépliage"], ["mémoire", "atlas, compression"]] },
  mip: { text: "Chaque niveau de mipmap fait la moitié de la taille du précédent, donc un quart des pixels. Toute la pyramide ne coûte qu’un tiers de mémoire en plus, et évite le scintillement des textures lointaines. Valeurs pour une texture 2048 × 2048 non compressée (4 octets par pixel).", facts: () => [["niveau suivant", "÷ 4 pixels"], ["surcoût total", "+ 33 %"], ["filtrage", "trilinéaire, anisotrope"]] }
};
