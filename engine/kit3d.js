// Figures de l'Atlas de la 3D : chaque « kind » construit une scène à partir d'un petit dictionnaire (S) donné par le chapitre.
// Conventions : plan x-y face à la caméra, temps t en secondes ; couleurs d'axes X rouge, Y vert, Z bleu.
import * as THREE from 'three';
import { part, box, cyl, lines, shadeMat, V, PALETTE } from './parts.js';
import { sizedBox, setBox, ball, rod, rodTo, liveCurve, fr } from './kit.js';

PALETTE.green = PALETTE.green || ['#93d6a4', '#4caf6a', '#367d4c'];
PALETTE.yellow = PALETTE.yellow || ['#f7dc7a', '#e9bd3a', '#b8911f'];
const setPal = (m, pal) => { if (m.userData.pal !== pal) { m.userData.pal = pal; m.material = shadeMat(pal); } };
const keep = (m, pal) => { m.userData.pal = pal; m.userData.home0 = pal; return m; };
const rnd = n => { const x = Math.sin(n * 12.9898 + 78.233) * 43758.5453; return x - Math.floor(x); };
const wave = (t, p, lo, hi) => lo + (hi - lo) * (0.5 - 0.5 * Math.cos(2 * Math.PI * t / p));
const clamp = (x, a = 0, b = 1) => Math.min(b, Math.max(a, x));
// sur téléphone, seules les étiquettes principales (t1) restent affichées
const wide = () => typeof innerWidth === 'undefined' || innerWidth > 900;
const slim = label => (cls, html, at, text) => (cls === 't1' ? label(cls, html, at, text) : label(cls, '', at, () => (wide() ? (text ? text() : html) : '')));
// segments de lignes mis à jour à chaque image
function dyn(g, n, color = '#57575a') {
  const l = lines(g, new Array(n * 6).fill(0), color); l.frustumCulled = false; const a = l.geometry.attributes.position;
  return { l, set(segs) { const r = a.array; let k = 0; for (const s of segs) { if (k >= r.length) break; for (const v of s) r[k++] = v; } while (k < r.length) r[k++] = 0; a.needsUpdate = true; } };
}
const seg = (a, b) => [a.x, a.y, a.z, b.x, b.y, b.z];
function along(pts, u) { // point à la fraction u d'une polyligne
  const L = []; let tot = 0; for (let i = 0; i < pts.length - 1; i++) { const d = pts[i].distanceTo(pts[i + 1]); L.push(d); tot += d; }
  let s = clamp(u) * tot; for (let i = 0; i < L.length; i++) { if (s <= L[i] || i === L.length - 1) return pts[i].clone().lerp(pts[i + 1], L[i] ? clamp(s / L[i]) : 0); s -= L[i]; }
  return pts[pts.length - 1].clone();
}
function photons(g, paths, { n = 3, pal = 'red', r = 0.08, period = 3, name = 'Lumière' } = {}) {
  const bs = []; paths.forEach((p, j) => { for (let i = 0; i < n; i++) bs.push({ m: ball(g, p.pal || pal, p.name || name, r), p, off: i / n + j * 0.13 }); });
  paths.forEach(p => { const c = []; for (let i = 0; i < p.pts.length - 1; i++) c.push(...seg(p.pts[i], p.pts[i + 1])); lines(g, c, p.color || '#b7b7b2'); });
  return t => bs.forEach(b => { b.m.position.copy(along(b.p.pts, ((t / (b.p.period || period)) + b.off) % 1)); });
}
function axes(g, label, o, L = 2.4, names = ['x', 'y', 'z']) {
  [[V(L, 0, 0), 'red'], [V(0, L, 0), 'green'], [V(0, 0, L), 'blue']].forEach(([d, p], i) => {
    const r = rod(g, { r: 0.035, pal: p, name: `Axe ${names[i]}` }); rodTo(r, o, o.clone().add(d));
    const tip = part(g, new THREE.ConeGeometry(0.09, 0.25, 16), { pal: p, tone: 'hi', name: `Axe ${names[i]}` }); tip.position.copy(o.clone().add(d));
    tip.quaternion.setFromUnitVectors(V(0, 1, 0), d.clone().normalize());
    label('vec' + (p === 'red' ? ' red' : p === 'blue' ? ' blue' : ''), names[i], () => o.clone().add(d.clone().multiplyScalar(1.12)));
  });
}
const discX = (g, r, pal, name, h = 0.08) => { const m = part(g, cyl(r, h, 40), { pal, tone: 'hi', name }); m.rotation.z = Math.PI / 2; return m; };
const discZ = (g, r, pal, name, h = 0.08) => { const m = part(g, cyl(r, h, 40), { pal, tone: 'hi', name }); m.rotation.x = Math.PI / 2; return m; };

// ------------------------------------------------------------------ 1. transformations 4×4
function xform({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 11; ext.h = 6.5; ext.cy = 2.6; ext.cx = 0.8;
  const o = V(x0 - 3, 0.6, 0); axes(g, label, o, 3.0);
  const grp = new THREE.Group(); g.add(grp); grp.matrixAutoUpdate = false;
  const cube = part(grp, box(1, 1, 1, 0.05), { pal: 'blue', tone: 'hi', name: 'Objet transformé par la matrice 4×4' });
  part(grp, box(0.5, 0.12, 0.12, 0.02), { pal: 'red', tone: 'hi', name: 'Repère local : x', pos: [0.75, 0, 0] });
  const ghost = part(g, box(1, 1, 1, 0.05), { pal: 'paper', tone: 'lo', name: 'Position de départ', pos: [o.x + 1, o.y + 0.5, 0] });
  const st = { M: new THREE.Matrix4(), ph: '' };
  label('mark', '', () => V(x0 + 3.2, 4.6, 0), () => { const e = st.M.elements, r = i => [0, 4, 8, 12].map(j => fr(e[i + j], 2)).join('  '); return `[ ${r(0)} ]<br>[ ${r(1)} ]<br>[ ${r(2)} ]<br>[ ${r(3)} ]`; });
  label('t1', 'matrice 4×4', () => V(x0 + 3.2, 5.6, 0));
  return { update: t => {
    const u = t % 12, T = new THREE.Matrix4(), R = new THREE.Matrix4(), Sc = new THREE.Matrix4();
    const a = clamp(u / 3), b = clamp((u - 3) / 3), c = clamp((u - 6) / 3), back = clamp((u - 9) / 3), k = 1 - back;
    T.makeTranslation(o.x + 1 + 2.6 * a * k, o.y + 0.5 + 1.4 * a * k, 0); R.makeRotationY(Math.PI / 2 * b * k); Sc.makeScale(1 + 0.6 * c * k, 1 + 0.6 * c * k, 1 + 0.6 * c * k);
    st.M.copy(T).multiply(R).multiply(Sc); grp.matrix.copy(st.M); grp.matrixWorldNeedsUpdate = true;
    st.ph = u < 3 ? 'translation' : u < 6 ? 'rotation' : u < 9 ? 'mise à l’échelle' : 'retour à l’identité';
  }, info: () => st.ph };
}

// ------------------------------------------------------------------ 2. cardan (Euler) et SLERP (quaternions)
function gimbal({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 9; ext.h = 7; ext.cy = 2.8;
  const c = V(x0, 2.8, 0), st = { y: 0, p: 0, r: 0 };
  if (S.mode === 'slerp') {
    const R = 2.4; for (const [ax, ay] of [[0, 0], [Math.PI / 2, 0], [0, Math.PI / 2]]) { const pts = []; for (let i = 0; i < 64; i++) { const a = i / 64 * 2 * Math.PI, b = (i + 1) / 64 * 2 * Math.PI; const p = new THREE.Vector3(Math.cos(a), Math.sin(a), 0), q = new THREE.Vector3(Math.cos(b), Math.sin(b), 0); const e = new THREE.Euler(ax, ay, 0); p.applyEuler(e); q.applyEuler(e); pts.push(c.x + R * p.x, c.y + R * p.y, R * p.z, c.x + R * q.x, c.y + R * q.y, R * q.z); } lines(g, pts, '#c9c9c4'); }
    const A = V(-0.9, -0.2, 0.4).normalize(), B = V(0.7, 0.6, 0.4).normalize();
    const pa = ball(g, 'ink', 'Orientation de départ q₁', 0.12), pb = ball(g, 'ink', 'Orientation d’arrivée q₂', 0.12); pa.position.copy(c.clone().add(A.clone().multiplyScalar(R))); pb.position.copy(c.clone().add(B.clone().multiplyScalar(R)));
    const s1 = ball(g, 'red', 'SLERP : vitesse constante sur la sphère', 0.14), s2 = ball(g, 'blue', 'Interpolation linéaire : coupe à travers la sphère', 0.12);
    const arc = []; const om = Math.acos(A.dot(B)); for (let i = 0; i < 40; i++) { const f = u => A.clone().multiplyScalar(Math.sin((1 - u) * om) / Math.sin(om)).add(B.clone().multiplyScalar(Math.sin(u * om) / Math.sin(om))).multiplyScalar(R).add(c); arc.push(...seg(f(i / 40), f((i + 1) / 40))); }
    lines(g, arc, '#e5484d'); lines(g, seg(pa.position, pb.position), '#5b86d6');
    label('vec red', 'slerp', () => c.clone().add(V(0.2, R + 0.3, 0))); label('vec blue', 'lerp', () => c.clone().add(V(0, 0.2, 1.2)));
    label('t1', 'q₁', () => pa.position.clone().add(V(-0.4, 0, 0))); label('t1', 'q₂', () => pb.position.clone().add(V(0.4, 0, 0)));
    return { update: t => { const u = wave(t, 6, 0, 1); s1.position.copy(c.clone().add(A.clone().multiplyScalar(Math.sin((1 - u) * om) / Math.sin(om)).add(B.clone().multiplyScalar(Math.sin(u * om) / Math.sin(om))).multiplyScalar(R)));
      s2.position.copy(c.clone().add(A.clone().lerp(B, u).multiplyScalar(R))); }, info: () => 'SLERP : vitesse constante' };
  }
  const gY = new THREE.Group(), gX = new THREE.Group(), gZ = new THREE.Group(); gY.position.copy(c); g.add(gY); gY.add(gX); gX.add(gZ);
  const ring = (grp, R, pal, n, rot) => { const m = part(grp, new THREE.TorusGeometry(R, 0.07, 10, 72), { pal, tone: 'hi', name: n }); m.rotation.set(...rot); return m; };
  ring(gY, 2.4, 'green', 'Anneau extérieur : lacet (yaw), autour de y', [0, 0, 0]);
  ring(gX, 2.0, 'red', 'Anneau du milieu : tangage (pitch), autour de x', [Math.PI / 2, 0, 0]);
  ring(gZ, 1.6, 'blue', 'Anneau intérieur : roulis (roll), autour de z', [0, Math.PI / 2, 0]);
  part(gZ, box(0.5, 0.25, 2.0, 0.08), { pal: 'paper', tone: 'hi', name: 'L’objet orienté' }); part(gZ, box(1.8, 0.08, 0.5, 0.03), { pal: 'paper', tone: 'hi', name: 'Ailes', pos: [0, 0, 0.1] });
  label('mark', '', () => V(x0, 6.1, 0), () => `lacet ${fr(st.y, 0)}° · tangage ${fr(st.p, 0)}° · roulis ${fr(st.r, 0)}°`);
  label('vec red', '', () => V(x0, -0.2, 0), () => (Math.abs(st.p) > 80 ? 'blocage de cardan : lacet et roulis tournent autour du même axe' : ''));
  return { update: t => { st.y = 40 * Math.sin(t * 0.7); st.r = 35 * Math.sin(t * 0.9 + 1); st.p = 90 * clamp(wave(t, 14, -0.2, 1.15));
    gY.rotation.y = st.y * Math.PI / 180; gX.rotation.x = st.p * Math.PI / 180; gZ.rotation.z = st.r * Math.PI / 180; }, info: () => (Math.abs(st.p) > 80 ? 'blocage de cardan' : 'angles d’Euler') };
}

// ------------------------------------------------------------------ 3. caméra, tronc de vue, projection
function frustum({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 13; ext.h = 6.5; ext.cy = 2.4; ext.cx = 0.5;
  const cy = 2.4, xc = x0 - 5.2, near = 1.2, far = 10, ortho = S.mode === 'ortho';
  part(g, box(0.9, 0.7, 0.7, 0.06), { pal: 'ink', tone: 'hi', name: 'La caméra', pos: [xc - 0.45, cy, 0] });
  const L = dyn(g, 12, '#3d63a8'), st = { f: 60 };
  const objs = [[x0 - 2.5, cy + 0.4, 0.3], [x0 + 0.5, cy - 1.6, -0.4], [x0 + 2.8, cy + 2.6, 0.2], [x0 + 3.6, cy - 0.2, 0]].map((p, i) => { const m = keep(part(g, box(0.8, 0.8, 0.8, 0.05), { pal: 'blue', tone: 'hi', name: `Objet ${i + 1}`, pos: p }), 'blue'); return m; });
  label('t2', 'plan proche', () => V(xc + near, cy - 1.5, 0)); label('t2', 'plan lointain', () => V(xc + far, cy - 3.2, 0));
  label('mark', '', () => V(x0, 5.7, 0), () => ortho ? 'projection orthographique : pas de perspective' : `champ de vision ${fr(st.f, 0)}°`);
  return { update: t => {
    st.f = ortho ? 0 : wave(t, 10, 30, 80); const th = Math.tan(st.f * Math.PI / 360), asp = 1.2;
    const hh = d => ortho ? 1.9 : th * d, s = [];
    const C = (d, sy, sz) => V(xc + d, cy + sy * hh(d), sz * hh(d) * asp * 0.5);
    const apex = V(xc, cy, 0);
    for (const [a, b] of [[1, 1], [1, -1], [-1, -1], [-1, 1]]) s.push(seg(ortho ? C(near, a, b) : apex, C(far, a, b)));
    for (const d of [near, far]) { const q = [C(d, 1, 1), C(d, 1, -1), C(d, -1, -1), C(d, -1, 1)]; for (let i = 0; i < 4; i++) s.push(seg(q[i], q[(i + 1) % 4])); }
    L.set(s);
    objs.forEach(m => { const d = m.position.x - xc, inside = d > near && d < far && Math.abs(m.position.y - cy) < hh(d) && Math.abs(m.position.z) < hh(d) * asp * 0.5; setPal(m, inside ? 'blue' : 'paper'); });
  }, info: () => 'bleu : visible · blanc : coupé' };
}

// ------------------------------------------------------------------ 4. représentations : maillage, points, voxels, octree
function reps({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 14; ext.h = 5; ext.cy = 2.2; ext.cx = 0;
  const cy = 2.2, xs = [-4.8, -1.6, 1.6, 4.8].map(x => x0 + x), grps = xs.map(x => { const q = new THREE.Group(); q.position.set(x, cy, 0); g.add(q); return q; });
  part(grps[0], new THREE.IcosahedronGeometry(1.2, 1), { pal: 'blue', tone: 'hi', name: 'Maillage : sommets reliés en triangles' });
  const P = []; for (let i = 0; i < 500; i++) { const u = rnd(i) * 2 - 1, a = rnd(i + 99) * 2 * Math.PI, r = Math.sqrt(1 - u * u); P.push(1.2 * r * Math.cos(a), 1.2 * u, 1.2 * r * Math.sin(a)); }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); grps[1].add(new THREE.Points(pg, new THREE.PointsMaterial({ color: '#3d63a8', size: 0.07 })));
  const vs = 0.3; for (let i = -4; i <= 4; i++) for (let j = -4; j <= 4; j++) for (let k = -4; k <= 4; k++) { const p = V(i, j, k).multiplyScalar(vs); if (p.length() < 1.2) { const m = sizedBox(grps[2], { pal: 'blue', tone: 'hi', name: 'Voxel : une case pleine de la grille' }); setBox(m, p.x - vs * 0.46, p.x + vs * 0.46, p.y - vs * 0.46, p.y + vs * 0.46, p.z - vs * 0.46, p.z + vs * 0.46); } }
  const oc = []; const cube = (c, h) => { const v = [[-1, -1, -1], [1, -1, -1], [1, 1, -1], [-1, 1, -1], [-1, -1, 1], [1, -1, 1], [1, 1, 1], [-1, 1, 1]].map(([a, b, d]) => V(c.x + a * h, c.y + b * h, c.z + d * h)); for (const [a, b] of [[0, 1], [1, 2], [2, 3], [3, 0], [4, 5], [5, 6], [6, 7], [7, 4], [0, 4], [1, 5], [2, 6], [3, 7]]) oc.push(...seg(v[a], v[b])); };
  const sub = (c, h, d) => { cube(c, h); if (d === 0) return; for (const a of [-1, 1]) for (const b of [-1, 1]) for (const e of [-1, 1]) { const cc = V(c.x + a * h / 2, c.y + b * h / 2, c.z + e * h / 2); const dist = cc.length(); if (Math.abs(dist - 1.1) < h * 0.9) sub(cc, h / 2, d - 1); } };
  sub(V(0, 0, 0), 1.3, 2); lines(grps[3], oc, '#3d63a8');
  ['maillage', 'nuage de points', 'voxels', 'octree'].forEach((n, i) => label('t1', n, () => V(xs[i], cy + 1.9, 0)));
  ['sommets + triangles', 'positions seules', 'grille de cases', 'cases subdivisées là où il y a de la matière'].forEach((n, i) => label('t2', n, () => V(xs[i], cy - 1.9, 0)));
  return { update: t => grps.forEach(q => { q.rotation.y = t * 0.3; }), info: () => 'la même sphère, quatre fois' };
}

// ------------------------------------------------------------------ 5. courbe de Bézier (de Casteljau)
function bezier({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 11; ext.h = 6; ext.cy = 2.6;
  const base = [V(x0 - 4, 0.8, 0), V(x0 - 2.2, 5, 0), V(x0 + 2.2, 5.2, 0), V(x0 + 4, 1.0, 0)];
  const cp = base.map((p, i) => ball(g, 'ink', `Point de contrôle P${i}`, 0.14)); base.forEach((p, i) => label('t1', `P${i}`, () => cp[i].position.clone().add(V(0, 0.4, 0))));
  const curve = liveCurve(g, { n: 120, r: 0.05, pal: 'red', name: 'La courbe de Bézier' }), L = dyn(g, 6, '#9c9ca2'), poly = dyn(g, 3, '#57575a');
  const mk = ball(g, 'red', 'Le point B(t) de la courbe', 0.16), st = { u: 0 };
  label('mark', '', () => V(x0, 6.1, 0), () => `t = ${fr(st.u, 2)}`);
  return { update: t => {
    const P = base.map((p, i) => p.clone().add(V(0, (i === 1 || i === 2) ? 0.8 * Math.sin(t * 0.6 + i) : 0, 0))); P.forEach((p, i) => cp[i].position.copy(p));
    const B = u => { let q = P.map(p => p.clone()); while (q.length > 1) { const n = []; for (let i = 0; i < q.length - 1; i++) n.push(q[i].clone().lerp(q[i + 1], u)); q = n; } return q[0]; };
    curve.set(Array.from({ length: 121 }, (_, i) => B(i / 120)));
    poly.set([seg(P[0], P[1]), seg(P[1], P[2]), seg(P[2], P[3])]);
    const u = st.u = wave(t, 8, 0, 1), a = P.slice(0, 3).map((p, i) => p.clone().lerp(P[i + 1], u)), b = [a[0].clone().lerp(a[1], u), a[1].clone().lerp(a[2], u)];
    L.set([seg(a[0], a[1]), seg(a[1], a[2]), seg(b[0], b[1])]); mk.position.copy(b[0].clone().lerp(b[1], u));
  }, info: () => 'de Casteljau' };
}

// ------------------------------------------------------------------ 6. SDF et lancer de sphères (sphere tracing)
function sdf({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 12; ext.h = 6; ext.cy = 2.6;
  const C = V(x0 + 2.2, 3.4, 0), Rc = 1.1, Bc = V(x0 + 3.0, 1.0, 0), Bh = [1.0, 0.5];
  const d = p => { const dc = p.distanceTo(C) - Rc; const qx = Math.abs(p.x - Bc.x) - Bh[0], qy = Math.abs(p.y - Bc.y) - Bh[1]; const db = Math.hypot(Math.max(qx, 0), Math.max(qy, 0)) + Math.min(Math.max(qx, qy), 0); return Math.min(dc, db); };
  const sc = discZ(g, Rc, 'blue', 'Sphère : d(p) = |p − c| − r', 0.4); sc.position.copy(C);
  const bx = sizedBox(g, { pal: 'blue', tone: 'hi', name: 'Boîte : sa distance se calcule aussi en une formule' }); setBox(bx, Bc.x - Bh[0], Bc.x + Bh[0], Bc.y - Bh[1], Bc.y + Bh[1], -0.2, 0.2);
  const O = V(x0 - 5, 4.6, 0), D = V(1, -0.33, 0).normalize(), N = 16, steps = []; let p = O.clone();
  for (let i = 0; i < N; i++) { const r = d(p); steps.push({ p: p.clone(), r }); if (r < 0.02) break; p = p.clone().add(D.clone().multiplyScalar(r)); }
  const balls = steps.map((s, i) => ball(g, i === steps.length - 1 ? 'red' : 'ink', `Pas ${i + 1} : on avance de d(p) = ${fr(s.r, 2)}`, 0.08));
  const circ = dyn(g, steps.length * 40, '#9c9ca2'), ray = dyn(g, 1, '#e5484d');
  part(g, box(0.6, 0.5, 0.4, 0.05), { pal: 'ink', tone: 'hi', name: 'La caméra', pos: [O.x - 0.4, O.y, 0] });
  const st = { k: 0 };
  label('mark', '', () => V(x0, 5.8, 0), () => `pas ${st.k} / ${steps.length}`);
  return { update: t => {
    st.k = Math.min(steps.length, Math.floor((t * 1.6) % (steps.length + 4)) + 1); const s = [];
    steps.forEach((q, i) => { balls[i].visible = i < st.k; balls[i].position.copy(q.p); if (i < st.k) for (let j = 0; j < 40; j++) { const a = j / 40 * 2 * Math.PI, b = (j + 1) / 40 * 2 * Math.PI; s.push([q.p.x + q.r * Math.cos(a), q.p.y + q.r * Math.sin(a), 0, q.p.x + q.r * Math.cos(b), q.p.y + q.r * Math.sin(b), 0]); } });
    circ.set(s); const last = steps[st.k - 1].p; ray.set([seg(O, last)]);
  }, info: () => `pas ${st.k} / ${steps.length}` };
}

// ------------------------------------------------------------------ 7. rasterisation et Z-buffer
function raster({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 10; ext.h = 6.5; ext.cy = 2.8;
  const W = 18, H = 12, c = 0.42, ox = x0 - W * c / 2, oy = 0.4;
  const A = [[2, 1], [14, 3], [5, 11]], B = [[8, 2], [17, 8], [6, 9]], zA = 0.6, zB = 0.3;
  const inside = (T, x, y) => { const s = (a, b, p) => (b[0] - a[0]) * (p[1] - a[1]) - (b[1] - a[1]) * (p[0] - a[0]); const p = [x, y]; const d1 = s(T[0], T[1], p), d2 = s(T[1], T[2], p), d3 = s(T[2], T[0], p); return !((d1 < 0 || d2 < 0 || d3 < 0) && (d1 > 0 || d2 > 0 || d3 > 0)); };
  const px = []; for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) { const m = keep(sizedBox(g, { pal: 'paper', tone: 'hi', name: `Pixel (${i}, ${j})` }), 'paper'); setBox(m, ox + i * c, ox + i * c + c - 0.05, oy + j * c, oy + j * c + c - 0.05, -0.05, 0.05);
    const a = inside(A, i + 0.5, j + 0.5), b = inside(B, i + 0.5, j + 0.5); px.push({ m, f: b && (!a || zB < zA) ? 'red' : a ? 'blue' : 'paper', both: a && b }); }
  for (const [T, col, z] of [[A, '#3d63a8', 0.2], [B, '#b8343a', 0.25]]) { const s = []; for (let k = 0; k < 3; k++) { const p = T[k], q = T[(k + 1) % 3]; s.push(ox + p[0] * c, oy + p[1] * c, z, ox + q[0] * c, oy + q[1] * c, z); } lines(g, s, col); }
  const st = { k: 0, n: 0 };
  label('mark', '', () => V(x0, oy + H * c + 0.6, 0), () => `${st.k} / ${W * H} pixels testés · ${st.n} recouverts deux fois : le Z-buffer garde le plus proche (rouge)`);
  return { update: t => { st.k = Math.min(W * H, Math.floor((t * 40) % (W * H + 80))); st.n = 0; px.forEach((p, i) => { const on = i < st.k; setPal(p.m, on ? p.f : 'paper'); if (on && p.both) st.n++; }); },
    info: () => `${st.k} pixels testés` };
}

// ------------------------------------------------------------------ 8. BVH : hiérarchie de boîtes englobantes
function bvh({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 12; ext.h = 6.5; ext.cy = 2.8;
  const prims = [[-3.2, 4.2], [-2.4, 3.6], [-3.0, 3.0], [-1.8, 4.4], [-2.6, 1.4], [-1.6, 0.9], [2.0, 4.6], [2.8, 4.0], [3.4, 4.8], [1.8, 1.2], [2.8, 0.8], [3.6, 1.6]].map(([x, y]) => V(x0 + x, y, 0));
  const pm = prims.map((p, i) => { const m = keep(part(g, box(0.5, 0.5, 0.5, 0.05), { pal: 'paper', tone: 'hi', name: `Triangle / objet n° ${i + 1}` }), 'paper'); m.position.copy(p); return m; });
  const groups = [[0, 1, 2, 3], [4, 5], [6, 7, 8], [9, 10, 11]], parents = [[0, 1], [2, 3]];
  const aabb = idx => { const xs = idx.map(i => prims[i].x), ys = idx.map(i => prims[i].y); return [Math.min(...xs) - 0.45, Math.min(...ys) - 0.45, Math.max(...xs) + 0.45, Math.max(...ys) + 0.45]; };
  const rect = (b, z, col) => lines(g, [b[0], b[1], z, b[2], b[1], z, b[2], b[1], z, b[2], b[3], z, b[2], b[3], z, b[0], b[3], z, b[0], b[3], z, b[0], b[1], z], col);
  const leafB = groups.map(gr => aabb(gr)), midB = parents.map(pp => aabb(pp.flatMap(k => groups[k]))), rootB = aabb(prims.map((_, i) => i));
  rect(rootB.map((v, i) => v + (i < 2 ? -0.25 : 0.25)), 0.3, '#57575a'); midB.forEach(b => rect(b.map((v, i) => v + (i < 2 ? -0.12 : 0.12)), 0.3, '#3d63a8')); leafB.forEach(b => rect(b, 0.3, '#9c9ca2'));
  const O = V(x0 - 5.6, 2.6, 0), ray = rod(g, { r: 0.025, pal: 'red', name: 'Le rayon' }), st = { nb: 0, np: 0 };
  const hit = (b, o, d) => { let t0 = -1e9, t1 = 1e9; for (const [a, lo, hi] of [['x', b[0], b[2]], ['y', b[1], b[3]]]) { if (Math.abs(d[a]) < 1e-9) { if (o[a] < lo || o[a] > hi) return false; continue; } let u = (lo - o[a]) / d[a], v = (hi - o[a]) / d[a]; if (u > v) [u, v] = [v, u]; t0 = Math.max(t0, u); t1 = Math.min(t1, v); } return t1 >= Math.max(t0, 0); };
  label('mark', '', () => V(x0, 6.0, 0), () => `boîtes testées : ${st.nb} · objets testés : ${st.np} sur 12`);
  return { update: t => {
    const ang = wave(t, 10, -0.45, 0.45), d = V(Math.cos(ang), Math.sin(ang), 0); rodTo(ray, O, O.clone().add(d.clone().multiplyScalar(11)));
    st.nb = 1; st.np = 0; pm.forEach(m => setPal(m, 'paper'));
    if (hit(rootB, O, d)) parents.forEach((pp, i) => { st.nb++; if (hit(midB[i], O, d)) pp.forEach(k => { st.nb++; if (hit(leafB[k], O, d)) groups[k].forEach(j => { st.np++; const b = [prims[j].x - 0.25, prims[j].y - 0.25, prims[j].x + 0.25, prims[j].y + 0.25]; setPal(pm[j], hit(b, O, d) ? 'red' : 'blue'); }); }); });
  }, info: () => `${st.np} objets testés sur 12` };
}

// ------------------------------------------------------------------ 9. casques : VST, OST (guide d'ondes), pancake, fibre, light field, holographie
function headset({ g, S, x0, label: l0, ext }) {
  const label = slim(l0), M = S.mode || 'vst'; ext.w = 14; ext.h = 6.5; ext.cy = 2.8; ext.cx = 0;
  const ey = 2.6, ex = x0 + 5.2, upd = [];
  const eye = ball(g, 'paper', 'L’œil', 0.6); eye.position.set(ex, ey, 0); const pu = discX(g, 0.22, 'ink', 'Pupille', 0.06); pu.position.set(ex - 0.58, ey, 0);
  label('t1', 'œil', () => V(ex, ey + 1.0, 0));
  const world = (x, y, n = 'Le monde réel') => { const m = part(g, box(0.9, 0.9, 0.9, 0.06), { pal: 'green', tone: 'hi', name: n, pos: [x, y, 0] }); label('t1', 'monde réel', () => V(x, y + 0.9, 0)); return m; };
  const P = (...a) => a.map(([x, y]) => V(x0 + x, y, 0));
  if (M === 'vst') {
    world(x0 - 6, ey); part(g, box(0.7, 0.6, 0.6, 0.05), { pal: 'ink', tone: 'hi', name: 'Caméras frontales (passthrough)', pos: [x0 - 2.6, ey, 0] });
    part(g, box(0.9, 0.9, 0.6, 0.05), { pal: 'dark', tone: 'hi', name: 'Puce : corrige, recompose, ajoute le virtuel', pos: [x0 - 0.8, ey + 1.6, 0] });
    part(g, box(0.15, 2.0, 1.4, 0.03), { pal: 'blue', tone: 'hi', name: 'Écran (micro-OLED ou LCD)', pos: [x0 + 1.4, ey, 0] }); discX(g, 1.1, 'paper', 'Lentille (pancake ou Fresnel)', 0.35).position.set(x0 + 3.0, ey, 0);
    ['caméras', 'calcul', 'écran', 'lentille'].forEach((n, i) => label('t2', n, () => V(x0 + [-2.6, -0.8, 1.4, 3.0][i], ey - [1.0, -2.3, 1.5, 1.5][i], 0)));
    upd.push(photons(g, [{ pts: P([-5.5, 2.6], [-2.95, 2.6]), pal: 'green', name: 'Lumière du monde, captée par les caméras' }, { pts: P([-2.6, 2.9], [-0.8, 4.2], [1.3, 2.9]), pal: 'dark', name: 'Image numérique' }, { pts: P([1.5, 2.6], [3.0, 2.6], [4.6, 2.6]), pal: 'red', name: 'Lumière de l’écran' }]));
  } else if (M === 'ost') {
    world(x0 - 6, ey);
    part(g, box(0.25, 4.4, 1.6, 0.03), { pal: 'blue', tone: 'hi', name: 'Guide d’ondes : une lame de verre transparente', pos: [x0 + 2.4, ey + 0.6, 0] });
    part(g, box(0.3, 0.5, 1.6, 0.02), { pal: 'red', tone: 'hi', name: 'Réseau d’entrée (couplage)', pos: [x0 + 2.4, ey + 2.5, 0] }); part(g, box(0.3, 1.1, 1.6, 0.02), { pal: 'red', tone: 'hi', name: 'Réseau de sortie : renvoie la lumière vers l’œil', pos: [x0 + 2.4, ey, 0] });
    part(g, box(1.0, 0.7, 0.8, 0.05), { pal: 'ink', tone: 'hi', name: 'Micro-projecteur (LCoS, micro-LED ou laser)', pos: [x0 + 0.9, ey + 2.5, 0] });
    label('t2', 'projecteur', () => V(x0 + 0.9, ey + 3.2, 0)); label('t2', 'guide d’ondes', () => V(x0 + 2.4, ey - 2.1, 0));
    const zz = [[1.4, 5.1], [2.33, 5.1], [2.47, 4.6], [2.33, 4.1], [2.47, 3.6], [2.33, 3.1], [2.45, 2.6], [4.6, 2.6]];
    upd.push(photons(g, [{ pts: P([-5.5, 2.6], [4.6, 2.6]), pal: 'green', name: 'Lumière du monde : traverse la lame' }, { pts: P(...zz), pal: 'red', name: 'Image virtuelle : réflexions totales internes, puis sortie vers l’œil' }]));
  } else if (M === 'pancake') {
    part(g, box(0.15, 2.2, 1.4, 0.03), { pal: 'blue', tone: 'hi', name: 'Écran (micro-OLED), lumière polarisée', pos: [x0 - 1.8, ey, 0] });
    discX(g, 1.3, 'paper', 'Lentille à demi-miroir (50 %)', 0.3).position.set(x0 - 0.2, ey, 0); discX(g, 1.3, 'yellow', 'Lame quart d’onde', 0.08).position.set(x0 + 1.1, ey, 0); discX(g, 1.3, 'red', 'Polariseur réfléchissant', 0.1).position.set(x0 + 1.6, ey, 0);
    ['écran', 'demi-miroir', 'quart d’onde', 'polariseur réfléchissant'].forEach((n, i) => label('t2', n, () => V(x0 + [-1.8, -0.2, 1.05, 1.75][i], ey - 1.6 - (i % 2) * 0.4, 0)));
    upd.push(photons(g, [{ pts: P([-1.7, 2.9], [1.55, 2.9], [-0.1, 2.9], [1.65, 2.9], [4.6, 2.6]), pal: 'red', name: 'Le trajet replié : aller, retour, aller' }], { period: 4 }));
    label('mark', 'le chemin optique est replié : casque plus mince', () => V(x0, ey + 2.2, 0));
  } else if (M === 'fsd') {
    const fb = rod(g, { r: 0.05, pal: 'blue', name: 'Fibre optique' }); part(g, cyl(0.22, 1.6, 24), { pal: 'dark', tone: 'hi', name: 'Actionneur piézoélectrique : fait vibrer la fibre', pos: [x0 - 4.6, ey, 0], rot: [0, 0, Math.PI / 2] });
    const tip = ball(g, 'red', 'Bout de la fibre : il décrit une spirale', 0.09), board = sizedBox(g, { pal: 'board', tone: 'lo', name: 'L’image formée, vue de face' }); setBox(board, x0 + 0.8, x0 + 4.4, ey - 1.8, ey + 1.8, -0.05, 0.0);
    const tr = dyn(g, 400, '#e5484d'); label('t2', 'vibration à la résonance', () => V(x0 - 4.6, ey - 0.8, 0)); label('t1', 'image vue de face', () => V(x0 + 2.6, ey + 2.2, 0));
    eye.visible = false; pu.visible = false;
    upd.push(t => { const u = (t % 5) / 5, r = 1.6 * u, a = u * 2 * Math.PI * 25; const y = ey + 0.6 * u * Math.sin(a); tip.position.set(x0 - 2.0, y, 0.6 * u * Math.cos(a)); rodTo(fb, V(x0 - 3.8, ey, 0), tip.position);
      const s = []; for (let i = 0; i < 400; i++) { const v = u * i / 400, w = u * (i + 1) / 400; s.push([x0 + 2.6 + 1.6 * v * Math.cos(v * 50 * Math.PI), ey + 1.6 * v * Math.sin(v * 50 * Math.PI), 0.05, x0 + 2.6 + 1.6 * w * Math.cos(w * 50 * Math.PI), ey + 1.6 * w * Math.sin(w * 50 * Math.PI), 0.05]); } tr.set(s); });
  } else if (M === 'lightfield') {
    part(g, box(0.15, 3.6, 1.4, 0.03), { pal: 'dark', tone: 'hi', name: 'Écran haute densité', pos: [x0 - 1.6, ey, 0] });
    for (let i = 0; i < 6; i++) { const m = discX(g, 0.28, 'blue', 'Microlentille : envoie chaque pixel dans une direction', 0.18); m.position.set(x0 - 1.1, ey - 1.5 + i * 0.6, 0); }
    eye.visible = false; pu.visible = false; const eyes = [[4.6, 4.4, 'red'], [4.6, 2.6, 'green'], [4.6, 0.8, 'blue']];
    eyes.forEach(([x, y, p], i) => { const e = ball(g, 'paper', `Position de l’œil n° ${i + 1}`, 0.4); e.position.set(x0 + x, y, 0); });
    label('t2', 'chaque position voit d’autres pixels : relief sans lunettes', () => V(x0 + 1.4, ey - 2.4, 0));
    const paths = []; for (let i = 0; i < 6; i++) eyes.forEach(([x, y, p]) => paths.push({ pts: P([-1.5, ey - 1.5 + i * 0.6 + (p === 'red' ? 0.12 : p === 'blue' ? -0.12 : 0)], [-1.1, ey - 1.5 + i * 0.6], [x - 0.4, y]), pal: p, name: 'Rayon d’un pixel vers une position de l’œil' }));
    upd.push(photons(g, paths, { n: 1, r: 0.06, period: 2.5 }));
  } else if (M === 'holo') {
    part(g, box(0.15, 3.0, 1.6, 0.03), { pal: 'dark', tone: 'hi', name: 'Modulateur spatial de lumière (SLM) : affiche l’hologramme calculé', pos: [x0 - 1.4, ey, 0] });
    part(g, box(1.0, 0.6, 0.6, 0.05), { pal: 'red', tone: 'hi', name: 'Laser (lumière cohérente)', pos: [x0 - 4.8, ey + 2.2, 0] });
    const pt = ball(g, 'red', 'Point 3D reconstruit, flottant devant le modulateur', 0.18); pt.position.set(x0 + 1.8, ey + 0.4, 0);
    label('t1', 'point flottant', () => V(x0 + 1.8, ey + 1.0, 0)); label('t2', 'modulateur (SLM)', () => V(x0 - 1.4, ey - 1.9, 0));
    const paths = [{ pts: P([-4.3, ey + 2.2], [-1.5, ey + 1.1]), name: 'Faisceau laser' }]; for (let i = 0; i < 6; i++) paths.push({ pts: P([-1.3, ey - 1.3 + i * 0.52], [1.8, ey + 0.4], [4.6, ey + 0.4 + (ey + 0.4 - (ey - 1.3 + i * 0.52)) * 0.9]), name: 'Onde diffractée : converge vers le point, puis vers l’œil' });
    upd.push(photons(g, paths, { n: 1, r: 0.06, period: 2.5 }));
  }
  return { update: t => upd.forEach(u => u(t)), info: () => S.info || '' };
}

// ------------------------------------------------------------------ 10. stéréoscopie, vergence et accommodation
function stereo({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 10; ext.h = 7.5; ext.cy = 3.3;
  const ipd = 1.3, ey = 0.4, EL = V(x0 - ipd / 2, ey, 0), ER = V(x0 + ipd / 2, ey, 0), yS = 3.0;
  [EL, ER].forEach((e, i) => { const m = ball(g, 'paper', i ? 'Œil droit' : 'Œil gauche', 0.32); m.position.copy(e); });
  const scr = sizedBox(g, { pal: 'board', tone: 'lo', name: 'Plan de l’image (là où l’œil fait la mise au point)' }); setBox(scr, x0 - 3.6, x0 + 3.6, yS - 0.04, yS + 0.04, -0.6, 0.6);
  const obj = part(g, box(0.5, 0.5, 0.5, 0.05), { pal: 'blue', tone: 'hi', name: 'Objet virtuel' }), L = dyn(g, 4, '#3d63a8'), pl = ball(g, 'red', 'Image de l’objet pour l’œil gauche', 0.09), pr = ball(g, 'green', 'Image de l’objet pour l’œil droit', 0.09);
  label('t2', 'écart interpupillaire (IPD)', () => V(x0, ey - 0.6, 0)); label('t2', S.mode === 'vac' ? 'accommodation : distance fixe' : 'écran / image virtuelle', () => V(x0 + 3.0, yS + 0.35, 0));
  const st = { d: 5 };
  label('mark', '', () => V(x0, 7.4, 0), () => (S.mode === 'vac' ? `vergence : ${fr(st.d - ey, 1)} · accommodation : ${fr(yS - ey, 1)}` : `disparité : ${fr(Math.abs(pr.position.x - pl.position.x), 2)}`));
  return { update: t => { st.d = wave(t, 9, 1.6, 7.2); const O = V(x0 + 0.6 * Math.sin(t * 0.4), st.d, 0); obj.position.copy(O);
    const hit = E => E.clone().lerp(O, (yS - E.y) / (O.y - E.y)); pl.position.copy(hit(EL)); pr.position.copy(hit(ER)); const far = (E, h) => (O.y > yS ? O : h); L.set([seg(EL, far(EL, pl.position)), seg(ER, far(ER, pr.position))]); },
    info: () => (S.mode === 'vac' ? 'vergence ≠ accommodation' : 'une image par œil') };
}

// ------------------------------------------------------------------ 11. la main : 21 articulations, pincement, rayon
function hand({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 10; ext.h = 7; ext.cy = 3.0; ext.cx = S.mode === 'ray' ? 1.5 : 0;
  const W0 = V(x0 - 0.5, 0.6, 0), fingers = [[-1.0, 0.5, 0.9, [0.55, 0.5, 0.45]], [-0.55, 1.6, 0.25, [0.75, 0.5, 0.4]], [-0.05, 1.75, 0.05, [0.8, 0.55, 0.42]], [0.45, 1.65, -0.12, [0.75, 0.5, 0.4]], [0.85, 1.4, -0.3, [0.6, 0.4, 0.35]]];
  const open = [W0.clone()], pinch = [W0.clone()];
  fingers.forEach(([bx, by, a, Ls], f) => { let p = W0.clone().add(V(bx, by, 0)); open.push(p.clone()); let q = p.clone(); pinch.push(q.clone()); let ang = Math.PI / 2 - a, angP = ang;
    for (let k = 0; k < 3; k++) { p = p.clone().add(V(Math.cos(ang), Math.sin(ang), 0).multiplyScalar(Ls[k])); open.push(p);
      angP -= f === 0 ? 0.55 : f === 1 ? 0.75 : 0.35; q = q.clone().add(V(Math.cos(angP), Math.sin(angP), 0.15 * k).multiplyScalar(Ls[k])); pinch.push(q); } });
  const tipT = pinch[4], tipI = pinch[8], mid = tipT.clone().lerp(tipI, 0.5); pinch[4] = mid.clone().add(V(-0.05, 0, 0)); pinch[8] = mid.clone().add(V(0.05, 0, 0));
  const J = open.map((p, i) => ball(g, i === 0 ? 'ink' : (i % 4 === 0 ? 'red' : 'blue'), i === 0 ? 'Poignet' : `Articulation n° ${i}`, i % 4 === 0 && i ? 0.11 : 0.09));
  const bones = []; for (let f = 0; f < 5; f++) { const b = 1 + 4 * f; bones.push([0, b], [b, b + 1], [b + 1, b + 2], [b + 2, b + 3]); }
  const R = bones.map(() => rod(g, { r: 0.04, pal: 'dark', name: 'Os (segment du squelette)' })); const st = { p: 0 };
  label('t2', '21 articulations', () => V(x0 - 0.5, 0.0, 0)); label('t2', 'bouts des doigts (rouge)', () => V(x0 - 2.6, 3.6, 0));
  let ray, tgt; if (S.mode === 'ray') { ray = rod(g, { r: 0.02, pal: 'red', name: 'Rayon de pointage (de l’épaule à travers la main)' }); tgt = keep(part(g, box(0.15, 2.2, 1.6, 0.04), { pal: 'paper', tone: 'hi', name: 'Panneau virtuel', pos: [x0 + 5, 3.2, 0] }), 'paper'); label('t1', 'panneau', () => V(x0 + 5, 4.6, 0)); }
  label('mark', '', () => V(x0, 6.3, 0), () => (st.p > 0.85 ? 'pincement détecté : distance pouce-index < 1,5 cm' : 'main ouverte'));
  return { update: t => { st.p = clamp(wave(t, 5, -0.2, 1.3)); J.forEach((m, i) => m.position.copy(open[i].clone().lerp(pinch[i], st.p))); bones.forEach(([a, b], k) => rodTo(R[k], J[a].position, J[b].position));
    if (ray) { const sh = V(x0 - 4, 5.2, 1.5), dir = J[5].position.clone().sub(sh).normalize(); rodTo(ray, J[5].position, J[5].position.clone().add(dir.multiplyScalar(6))); setPal(tgt, st.p > 0.85 ? 'red' : 'blue'); } },
    info: () => (st.p > 0.85 ? 'pincement' : 'main ouverte') };
}

// ------------------------------------------------------------------ 12. eye tracking et rendu fovéal
function eye({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 13; ext.h = 6; ext.cy = 2.6;
  const ec = V(x0 - 3.6, 2.6, 0), scl = discZ(g, 1.7, 'paper', 'Le blanc de l’œil', 0.2); scl.position.copy(ec);
  const iris = discZ(g, 0.75, 'blue', 'Iris', 0.24), pup = discZ(g, 0.32, 'ink', 'Pupille (son centre est suivi)', 0.28);
  const leds = Array.from({ length: 8 }, (_, i) => { const a = i / 8 * 2 * Math.PI, m = ball(g, 'red', 'Diode infrarouge (invisible pour l’œil)', 0.09); m.position.set(ec.x + 2.2 * Math.cos(a), ec.y + 2.2 * Math.sin(a), 0.2); return m; });
  const glints = Array.from({ length: 8 }, (_, i) => ball(g, 'paper', 'Reflet sur la cornée (glint)', 0.05));
  label('t1', 'œil filmé en infrarouge', () => V(ec.x, ec.y + 2.7, 0));
  const W = 14, H = 9, c = 0.36, ox = x0 + 0.2, oy = 1.0, tiles = []; for (let j = 0; j < H; j++) for (let i = 0; i < W; i++) { const m = keep(sizedBox(g, { pal: 'paper', tone: 'hi', name: 'Tuile de l’image' }), 'paper'); setBox(m, ox + i * c, ox + i * c + c - 0.04, oy + j * c, oy + j * c + c - 0.04, -0.04, 0.04); tiles.push({ m, i, j }); }
  label('t1', 'image rendue', () => V(ox + W * c / 2, oy + H * c + 0.5, 0)); label('t2', 'rouge : pleine résolution · bleu : moitié · blanc : quart', () => V(ox + W * c / 2, oy - 0.4, 0));
  const gz = ball(g, 'ink', 'Point regardé', 0.1), st = { f: 0 };
  return { update: t => { const gx = 0.5 + 0.38 * Math.sin(t * 0.5), gy = 0.5 + 0.35 * Math.sin(t * 0.8 + 1); const off = V((gx - 0.5) * 1.6, (gy - 0.5) * 1.6, 0);
    iris.position.copy(ec.clone().add(off).add(V(0, 0, 0.05))); pup.position.copy(ec.clone().add(off).add(V(0, 0, 0.08)));
    glints.forEach((m, i) => { const a = i / 8 * 2 * Math.PI; m.position.set(ec.x + 0.35 * Math.cos(a) + off.x * 0.35, ec.y + 0.35 * Math.sin(a) + off.y * 0.35, 0.3); });
    const px = gx * W, py = gy * H; gz.position.set(ox + px * c, oy + py * c, 0.15); let n = 0;
    tiles.forEach(T => { const d = Math.hypot(T.i + 0.5 - px, T.j + 0.5 - py), p = d < 2.2 ? 'red' : d < 4.5 ? 'blue' : 'paper'; if (p === 'red') n++; setPal(T.m, p); }); st.f = n / tiles.length; },
    info: () => `pleine résolution : ${Math.round(100 * st.f)} %` };
}

// ------------------------------------------------------------------ 13. SLAM et ancres spatiales
function slam({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 13; ext.h = 7; ext.cy = 2.8;
  const F = Array.from({ length: 70 }, (_, i) => V(x0 + (rnd(i) * 2 - 1) * 5.6, 0.3 + rnd(i + 50) * 5.0, (rnd(i + 90) * 2 - 1) * 2.0));
  const fm = F.map((p, i) => { const m = keep(ball(g, 'paper', 'Point d’intérêt (coin, texture)', 0.07), 'paper'); m.position.copy(p); return m; });
  const cam = part(g, box(0.6, 0.45, 0.45, 0.05), { pal: 'ink', tone: 'hi', name: 'Le casque (caméras + centrale inertielle)' }), L = dyn(g, 16, '#5b86d6');
  const kfs = Array.from({ length: 10 }, (_, i) => { const m = part(g, box(0.3, 0.22, 0.22, 0.04), { pal: 'dark', tone: 'hi', name: 'Image clé (keyframe) gardée dans la carte' }); m.visible = false; return m; });
  const anchors = S.mode === 'anchor' ? [V(x0 - 3.5, 1.2, 0.8), V(x0 + 3.2, 3.6, -0.5)].map((p, i) => { const grp = new THREE.Group(); grp.position.copy(p); g.add(grp); part(grp, box(0.6, 0.6, 0.6, 0.05), { pal: 'blue', tone: 'hi', name: `Ancre spatiale n° ${i + 1} : un repère attaché aux points voisins` }); axes(grp, () => {}, V(0, 0, 0), 0.9); label('t1', `ancre ${i + 1}`, () => p.clone().add(V(0, 0.8, 0))); return grp; }) : [];
  const path = u => V(x0 + 3.6 * Math.cos(u * 2 * Math.PI), 2.6 + 0.5 * Math.sin(u * 4 * Math.PI), 1.6 * Math.sin(u * 2 * Math.PI)), st = { n: 0 };
  label('mark', '', () => V(x0, 6.6, 0), () => `${st.n} points cartographiés`);
  return { update: t => { const u = (t / 16) % 1, p = path(u), q = path(u + 0.01); cam.position.copy(p); cam.lookAt(q.x, q.y, q.z);
    const d = q.clone().sub(p).normalize(), vis = F.map((f, i) => [i, f.clone().sub(p)]).filter(([i, v]) => v.length() < 4.5 && v.normalize().dot(d) > 0.2).slice(0, 16);
    L.set(vis.map(([i]) => seg(p, F[i]))); vis.forEach(([i]) => { fm[i].userData.seen = true; }); st.n = 0; fm.forEach(m => { if (m.userData.seen) { st.n++; setPal(m, 'blue'); } });
    if (u < 0.02) fm.forEach(m => { m.userData.seen = false; setPal(m, 'paper'); }); kfs.forEach((k, i) => { k.visible = u > i / 10; k.position.copy(path(i / 10)); }); },
    info: () => `${st.n} points cartographiés` };
}

// ------------------------------------------------------------------ 14. QR code / marqueur : détection, coins, PnP, pose, ancrage
function marker({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 12; ext.h = 7; ext.cy = 2.9;
  const N = 21, c = 0.15, ox = x0 + 0.4, oy = 1.4, mods = [];
  const fin = (i, j) => { for (const [a, b] of [[0, 0], [N - 7, 0], [0, N - 7]]) { const x = i - a, y = j - b; if (x >= 0 && x < 7 && y >= 0 && y < 7) return x === 0 || x === 6 || y === 0 || y === 6 || (x >= 2 && x <= 4 && y >= 2 && y <= 4) ? 1 : 0; } return -1; };
  const bd = sizedBox(g, { pal: 'paper', tone: 'lo', name: 'Le QR code imprimé' }); setBox(bd, ox - 0.3, ox + N * c + 0.3, oy - 0.3, oy + N * c + 0.3, -0.06, -0.01);
  for (let j = 0; j < N; j++) for (let i = 0; i < N; i++) { const f = fin(i, j), on = f === -1 ? rnd(i * 31 + j * 7) > 0.52 : f === 1; if (!on) continue; const m = keep(sizedBox(g, { pal: 'ink', tone: 'hi', name: f === 1 ? 'Motif de repérage (coin)' : 'Module du QR code' }), 'ink'); setBox(m, ox + i * c, ox + i * c + c, oy + (N - 1 - j) * c, oy + (N - j) * c, -0.01, 0.03); mods.push({ m, f }); }
  const C = [[0, 0], [N, 0], [N, N], [0, N]].map(([i, j]) => V(ox + i * c, oy + j * c, 0.05)), cam = V(x0 - 4.8, 2.0, 2.4);
  part(g, box(0.8, 0.6, 0.6, 0.05), { pal: 'dark', tone: 'hi', name: 'Caméra du casque', pos: cam.toArray() });
  const corners = C.map((p, i) => { const m = ball(g, 'red', `Coin n° ${i + 1} détecté`, 0.09); m.position.copy(p); return m; }), rays = dyn(g, 4, '#e5484d');
  const pose = new THREE.Group(); pose.position.set(ox + N * c / 2, oy + N * c / 2, 0.06); g.add(pose); axes(pose, () => {}, V(0, 0, 0), 1.3);
  const holo = part(g, box(0.9, 0.9, 0.9, 0.06), { pal: 'blue', tone: 'hi', name: 'Hologramme ancré sur le QR code', pos: [ox + N * c / 2, oy + N * c + 1.2, 0.6] });
  const PH = ['image capturée', 'motifs de repérage trouvés', '4 coins localisés au pixel près', 'PnP : position et orientation du code (6DoF)', 'hologramme posé sur le code'], st = { k: 0 };
  label('mark', '', () => V(x0, 6.4, 0), () => `${st.k + 1}. ${PH[st.k]}`); label('t2', 'taille réelle connue (ex. 10 cm)', () => V(ox + N * c / 2, oy - 0.6, 0));
  return { update: t => { st.k = Math.floor((t / 2) % 5); mods.forEach(({ m, f }) => setPal(m, st.k === 1 && f === 1 ? 'red' : 'ink'));
    corners.forEach(m => { m.visible = st.k >= 2; }); rays.set(st.k >= 3 ? C.map(p => seg(cam, p)) : []); pose.visible = st.k >= 3; holo.visible = st.k >= 4; },
    info: () => PH[st.k] };
}

// ------------------------------------------------------------------ 15. chronologie en millisecondes (latence)
function timing({ g, S, x0, label: l0, ext }) {
  const label = slim(l0), segs = S.segs, tot = segs.reduce((a, s) => a + s.ms, 0), Wd = 11, k = Wd / tot, y = 2.2;
  ext.w = Wd + 2; ext.h = 4.5; ext.cy = 2.4; let x = x0 - Wd / 2; const bs = [];
  segs.forEach((s, i) => { const m = keep(sizedBox(g, { pal: s.pal || 'paper', tone: 'hi', name: `${s.n} : ${fr(s.ms, s.ms < 10 ? 1 : 0)} ms` }), s.pal || 'paper'); setBox(m, x, x + s.ms * k - 0.05, y - 0.4, y + 0.4, -0.4, 0.4);
    const cx = x + s.ms * k / 2; label('t1', s.n, () => V(cx, y + 0.75 + (i % 2) * 0.45, 0)); label('t2', fr(s.ms, s.ms < 10 ? 1 : 0) + ' ms', () => V(cx, y - 0.75, 0)); bs.push(m); x += s.ms * k; });
  const cur = ball(g, 'ink', 'Le temps qui passe', 0.12); label('mark', '', () => V(x0, y + 2.0, 0), () => `total : ${fr(tot, 1)} ms` + (S.note ? ' · ' + S.note : ''));
  return { update: t => { const u = (t % 5) / 5; cur.position.set(x0 - Wd / 2 + u * Wd, y - 0.0, 0.6); }, info: () => S.info || '' };
}

// ------------------------------------------------------------------ 16. NeRF : un rayon, des échantillons, une couleur
function nerf({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 13; ext.h = 6; ext.cy = 2.6;
  const C = V(x0 + 1.8, 2.6, 0), P = []; for (let i = 0; i < 900; i++) { const u = rnd(i) * 2 - 1, a = rnd(i + 7) * 2 * Math.PI, r = 1.5 * Math.cbrt(rnd(i + 13)), s = Math.sqrt(1 - u * u); P.push(C.x + r * s * Math.cos(a), C.y + r * u, r * s * Math.sin(a)); }
  const pg = new THREE.BufferGeometry(); pg.setAttribute('position', new THREE.Float32BufferAttribute(P, 3)); g.add(new THREE.Points(pg, new THREE.PointsMaterial({ color: '#e5484d', size: 0.05, transparent: true, opacity: 0.5 })));
  const O = V(x0 - 5.2, 2.6, 0); part(g, box(0.8, 0.6, 0.6, 0.05), { pal: 'ink', tone: 'hi', name: 'Caméra', pos: [O.x - 0.4, O.y, 0] });
  const img = sizedBox(g, { pal: 'board', tone: 'lo', name: 'Image : un rayon par pixel' }); setBox(img, O.x + 0.9, O.x + 1.0, O.y - 1.0, O.y + 1.0, -0.8, 0.8);
  const D = V(1, 0.05, 0).normalize(), N = 18, smp = Array.from({ length: N }, (_, i) => { const p = O.clone().add(D.clone().multiplyScalar(2.2 + i * 0.5)); const dens = Math.max(0, 1 - p.distanceTo(C) / 1.6); const m = keep(ball(g, 'paper', `Échantillon n° ${i + 1} : le réseau donne (couleur, densité ${fr(dens, 2)})`, 0.1), 'paper'); m.position.copy(p); return { m, dens }; });
  lines(g, seg(O, O.clone().add(D.clone().multiplyScalar(11))), '#57575a');
  const acc = sizedBox(g, { pal: 'red', tone: 'hi', name: 'Couleur accumulée du pixel' }), st = { k: 0, T: 1 };
  label('t1', 'pixel', () => V(x0 + 6.2, 4.4, 0)); label('mark', '', () => V(x0, 5.6, 0), () => `échantillon ${st.k} / ${N} · lumière restante ${Math.round(100 * st.T)} %`);
  return { update: t => { st.k = Math.floor((t * 3) % (N + 6)); let T = 1, a = 0; smp.forEach((s, i) => { const on = i < st.k; setPal(s.m, on ? (s.dens > 0.4 ? 'red' : s.dens > 0 ? 'blue' : 'dark') : 'paper'); if (on) { const al = 1 - Math.exp(-s.dens * 2.2); a += T * al; T *= 1 - al; } });
    st.T = T; setBox(acc, x0 + 5.8, x0 + 6.6, 2.0, 2.0 + 2.0 * Math.min(1, a), -0.4, 0.4); }, info: () => `échantillon ${st.k} / ${N}` };
}

// ------------------------------------------------------------------ 17. PointNet : MLP partagé puis max-pooling
function pointnet({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 13; ext.h = 6; ext.cy = 2.6;
  const N = 14, pts = Array.from({ length: N }, (_, i) => V(x0 - 5.2 + (rnd(i) - 0.5) * 2.2, 2.6 + (rnd(i + 30) - 0.5) * 3.2, (rnd(i + 60) - 0.5) * 1.6));
  const pm = pts.map((p, i) => { const m = keep(ball(g, 'blue', `Point n° ${i + 1} (x, y, z)`, 0.1), 'blue'); m.position.copy(p); return m; });
  part(g, box(1.2, 4.0, 1.0, 0.06), { pal: 'dark', tone: 'hi', name: 'MLP partagé : la même petite fonction appliquée à chaque point', pos: [x0 - 2.4, 2.6, 0] });
  const F = 8, feat = [], fx = x0 + 0.2; for (let i = 0; i < N; i++) for (let k = 0; k < F; k++) { const m = keep(sizedBox(g, { pal: 'paper', tone: 'hi', name: `Caractéristique ${k + 1} du point ${i + 1}` }), 'paper'); const v = rnd(i * 17 + k * 3); setBox(m, fx + k * 0.32, fx + k * 0.32 + 0.26, 0.8 + i * 0.27, 0.8 + i * 0.27 + 0.22, -0.1, 0.1); feat.push({ m, i, k, v }); }
  const mx = Array.from({ length: F }, (_, k) => Math.max(...feat.filter(f => f.k === k).map(f => f.v)));
  const gv = Array.from({ length: F }, (_, k) => { const m = keep(sizedBox(g, { pal: 'red', tone: 'hi', name: `Max de la caractéristique ${k + 1} sur tous les points` }), 'red'); setBox(m, x0 + 4.4, x0 + 4.4 + 0.3 + 0.9 * mx[k], 1.2 + k * 0.4, 1.2 + k * 0.4 + 0.3, -0.1, 0.1); return m; });
  label('t1', 'points', () => V(x0 - 5.2, 5.0, 0)); label('t1', 'MLP partagé', () => V(x0 - 2.4, 5.0, 0)); label('t1', 'caractéristiques', () => V(fx + 1.2, 5.0, 0)); label('t1', 'max', () => V(x0 + 5.0, 5.0, 0));
  label('t2', 'l’ordre des points ne change rien', () => V(x0 + 5.0, 0.7, 0));
  return { update: t => { const k = Math.floor(t * 1.2) % F; feat.forEach(f => setPal(f.m, f.k === k ? (f.v === mx[k] ? 'red' : 'blue') : 'paper')); gv.forEach((m, j) => setPal(m, j === k ? 'ink' : 'red')); },
    info: () => 'MLP partagé, puis max' };
}

// ------------------------------------------------------------------ 18. cinématique inverse (FABRIK) ou directe
function ik({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 10; ext.h = 7; ext.cy = 3.0;
  const Ls = [1.6, 1.4, 1.2, 0.9], base = V(x0 - 1.5, 0.6, 0); let P = [base.clone()]; Ls.forEach(l => P.push(P[P.length - 1].clone().add(V(0, l, 0))));
  part(g, box(1.2, 0.3, 1.0, 0.05), { pal: 'dark', tone: 'hi', name: 'Base fixe (épaule, hanche)', pos: [base.x, base.y - 0.15, 0] });
  const J = P.map((p, i) => ball(g, i === P.length - 1 ? 'red' : 'ink', i === 0 ? 'Racine' : i === P.length - 1 ? 'Effecteur (main, pied)' : `Articulation ${i}`, 0.14));
  const B = Ls.map(() => rod(g, { r: 0.08, pal: 'blue', name: 'Os' })), T = ball(g, 'green', 'Cible', 0.16), fk = S.mode === 'fk';
  label('mark', '', () => V(x0, 6.6, 0), () => (fk ? 'cinématique directe : on donne les angles, on obtient la position' : 'cinématique inverse : on donne la cible, on obtient les angles'));
  return { update: t => {
    if (fk) { let p = base.clone(), a = Math.PI / 2; P = [p.clone()]; Ls.forEach((l, i) => { a += 0.6 * Math.sin(t * 0.8 + i); p = p.clone().add(V(Math.cos(a), Math.sin(a), 0).multiplyScalar(l)); P.push(p); }); T.position.copy(P[P.length - 1]); }
    else { const tg = V(x0 + 1.2 + 1.8 * Math.cos(t * 0.6), 3.0 + 1.6 * Math.sin(t * 0.9), 0); T.position.copy(tg);
      for (let it = 0; it < 8; it++) { P[P.length - 1] = tg.clone(); for (let i = P.length - 2; i >= 0; i--) P[i] = P[i + 1].clone().add(P[i].clone().sub(P[i + 1]).normalize().multiplyScalar(Ls[i])); P[0] = base.clone(); for (let i = 1; i < P.length; i++) P[i] = P[i - 1].clone().add(P[i].clone().sub(P[i - 1]).normalize().multiplyScalar(Ls[i - 1])); } }
    J.forEach((m, i) => m.position.copy(P[i])); B.forEach((r, i) => rodTo(r, P[i], P[i + 1])); },
    info: () => (fk ? 'angles → position' : 'cible → angles') };
}

// ------------------------------------------------------------------ 19. niveaux de détail (LOD)
function lod({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 13; ext.h = 5; ext.cy = 2.3;
  part(g, box(0.8, 0.6, 0.6, 0.05), { pal: 'ink', tone: 'hi', name: 'Caméra', pos: [x0 - 5.6, 2.3, 0] });
  const lv = [[48, 'LOD 0'], [14, 'LOD 1'], [5, 'LOD 2']].map(([s, n]) => { const geo = new THREE.SphereGeometry(1.1, s, Math.max(3, Math.round(s / 2))); const m = part(g, geo, { pal: 'blue', tone: 'hi', name: `${n} : ${geo.index.count / 3} triangles` }); m.userData.tri = geo.index.count / 3; m.userData.n = n; return m; });
  const st = { i: 0, x: 0 }; [-1.5, 1.5].forEach((d, i) => lines(g, [x0 + d, 0.6, 0, x0 + d, 4.0, 0], '#c9c9c4'));
  label('t2', 'seuil 1', () => V(x0 - 1.5, 0.3, 0)); label('t2', 'seuil 2', () => V(x0 + 1.5, 0.3, 0));
  label('mark', '', () => V(x0, 4.6, 0), () => `${lv[st.i].userData.n} · ${lv[st.i].userData.tri} triangles`);
  return { update: t => { st.x = x0 + wave(t, 8, -4, 4.6); st.i = st.x < x0 - 1.5 ? 0 : st.x < x0 + 1.5 ? 1 : 2; lv.forEach((m, i) => { m.visible = i === st.i; m.position.set(st.x, 2.3, 0); }); },
    info: () => `${lv[st.i].userData.n}` };
}

// ------------------------------------------------------------------ 20. bruit et terrain procédural
function noise({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 10; ext.h = 6; ext.cy = 1.2;
  const n = 64, geo = new THREE.PlaneGeometry(8, 8, n, n); geo.rotateX(-Math.PI / 2); const m = part(g, geo, { pal: 'green', tone: 'mid', name: 'Terrain généré par du bruit' }); m.position.set(x0, 0.4, 0);
  const pos = geo.attributes.position, base = pos.array.slice(), st = { o: 1, last: -1 };
  const vn = (x, y) => { const xi = Math.floor(x), yi = Math.floor(y), f = v => v * v * (3 - 2 * v), u = f(x - xi), v = f(y - yi), h = (a, b) => rnd(a * 57 + b * 131 + 7); return (h(xi, yi) * (1 - u) + h(xi + 1, yi) * u) * (1 - v) + (h(xi, yi + 1) * (1 - u) + h(xi + 1, yi + 1) * u) * v; };
  label('mark', '', () => V(x0, 4.2, 0), () => `${st.o} octave${st.o > 1 ? 's' : ''} : chaque octave ajoute des détails deux fois plus fins, deux fois moins hauts`);
  return { update: t => { st.o = 1 + Math.floor(t / 2.5) % 6; if (st.o === st.last) return; st.last = st.o;
    for (let i = 0; i < pos.count; i++) { const x = base[3 * i], z = base[3 * i + 2]; let h = 0, a = 1.6, f = 0.35; for (let o = 0; o < st.o; o++) { h += a * vn(x * f + 10, z * f + 10); a /= 2; f *= 2; } pos.array[3 * i + 1] = h; }
    pos.needsUpdate = true; geo.computeVertexNormals(); }, info: () => `${st.o} octave(s)` };
}

// ------------------------------------------------------------------ 21. collisions : phase large (AABB) puis phase fine
function collide({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 10; ext.h = 5; ext.cy = 2.4;
  const A = keep(part(g, box(1.6, 1.6, 1.6, 0.05), { pal: 'paper', tone: 'hi', name: 'Boîte' }), 'paper'), B = keep(part(g, new THREE.SphereGeometry(0.9, 32, 20), { pal: 'paper', tone: 'hi', name: 'Sphère' }), 'paper');
  const L = dyn(g, 8, '#9c9ca2'), st = { s: '' };
  label('mark', '', () => V(x0, 4.6, 0), () => st.s);
  return { update: t => { const s = wave(t, 6, 0, 1); A.position.set(x0 - 3 + 2.0 * s, 2.4, 0); A.rotation.z = 0.785 * s; B.position.set(x0 + 3 - 2.0 * s, 2.4 + 1.1 * s, 0);
    const ha = 0.8 * (Math.abs(Math.cos(A.rotation.z)) + Math.abs(Math.sin(A.rotation.z))), a = [A.position.x - ha, A.position.y - ha, A.position.x + ha, A.position.y + ha], b = [B.position.x - 0.9, B.position.y - 0.9, B.position.x + 0.9, B.position.y + 0.9];
    const r = q => [[q[0], q[1], 0.9, q[2], q[1], 0.9], [q[2], q[1], 0.9, q[2], q[3], 0.9], [q[2], q[3], 0.9, q[0], q[3], 0.9], [q[0], q[3], 0.9, q[0], q[1], 0.9]]; L.set([...r(a), ...r(b)]);
    const ov = a[0] < b[2] && b[0] < a[2] && a[1] < b[3] && b[1] < a[3];
    const loc = B.position.clone().sub(A.position).applyAxisAngle(V(0, 0, 1), -A.rotation.z), q = V(Math.max(-0.8, Math.min(0.8, loc.x)), Math.max(-0.8, Math.min(0.8, loc.y)), 0), hitc = loc.clone().setZ(0).distanceTo(q) < 0.9;
    const p = hitc ? 'red' : ov ? 'blue' : 'paper'; setPal(A, p); setPal(B, p); st.s = hitc ? 'contact : phase fine confirmée' : ov ? 'boîtes englobantes qui se chevauchent : test précis lancé' : 'boîtes séparées : aucun calcul précis'; },
    info: () => st.s.split(' :')[0] };
}

// ------------------------------------------------------------------ 22. gizmo de Blender : G, R, S contraints à un axe
function gizmo({ g, S, x0, label: l0, ext }) {
  const label = slim(l0); ext.w = 10; ext.h = 6.5; ext.cy = 2.8;
  const grp = new THREE.Group(); grp.position.set(x0, 2.6, 0); g.add(grp);
  const cube = part(grp, box(1.2, 1.2, 1.2, 0.04), { pal: 'paper', tone: 'hi', name: 'Objet sélectionné' });
  const gz = new THREE.Group(); grp.add(gz); const ar = [], rg = [];
  [[V(1, 0, 0), 'red', 'X'], [V(0, 1, 0), 'green', 'Y'], [V(0, 0, 1), 'blue', 'Z']].forEach(([d, p, n]) => {
    const r = rod(gz, { r: 0.035, pal: p, name: `Flèche ${n} : déplacer le long de ${n}` }); rodTo(r, V(0, 0, 0), d.clone().multiplyScalar(2.0));
    const c = part(gz, new THREE.ConeGeometry(0.11, 0.3, 16), { pal: p, tone: 'hi', name: `Poignée ${n}` }); c.position.copy(d.clone().multiplyScalar(2.1)); c.quaternion.setFromUnitVectors(V(0, 1, 0), d);
    const t = part(gz, new THREE.TorusGeometry(1.5, 0.03, 8, 64), { pal: p, tone: 'hi', name: `Anneau ${n} : tourner autour de ${n}` }); t.quaternion.setFromUnitVectors(V(0, 0, 1), d); t.userData.pal0 = p;
    ar.push([r, c, p]); rg.push(t); label('vec' + (p === 'red' ? ' red' : p === 'blue' ? ' blue' : ''), n, () => grp.position.clone().add(d.clone().multiplyScalar(2.5)));
  });
  const OPS = [['G puis X', 'déplacer le long de X'], ['R puis Z', 'tourner autour de Z'], ['S puis Y', 'mettre à l’échelle selon Y'], ['G puis Maj+Z', 'déplacer dans le plan XY']], st = { k: 0 };
  label('t1', '', () => V(x0, 6.0, 0), () => `<kbd>${OPS[st.k][0]}</kbd>`); label('mark', '', () => V(x0, 5.5, 0), () => OPS[st.k][1]);
  return { update: t => { st.k = Math.floor(t / 3) % 4; const u = wave(t, 3, 0, 1); cube.position.set(0, 0, 0); cube.rotation.set(0, 0, 0); cube.scale.set(1, 1, 1);
    if (st.k === 0) cube.position.x = 1.6 * u; if (st.k === 1) cube.rotation.z = u * Math.PI / 2; if (st.k === 2) cube.scale.y = 1 + 0.8 * u; if (st.k === 3) { cube.position.x = 1.2 * u; cube.position.y = 0.8 * u; }
    ar.forEach(([r, c, p], i) => { const on = (st.k === 0 && i === 0) || (st.k === 2 && i === 1) || (st.k === 3 && i < 2); setPal(r, on ? 'ink' : p); setPal(c, on ? 'ink' : p); }); rg.forEach((r, i) => setPal(r, st.k === 1 && i === 2 ? 'ink' : r.userData.pal0)); },
    info: () => OPS[st.k][0] };
}

// ------------------------------------------------------------------ 23. empilement de couches (écrans, optiques) traversé par la lumière
function stack({ g, S, x0, label: l0, ext }) {
  const label = slim(l0), Ls = S.layers, gap = S.gap ?? 0.35, Wt = Ls.reduce((a, l) => a + (l.w || 0.3) + gap, 0), y = 2.4, H = S.h || 3.0;
  ext.w = Wt + 3; ext.h = H + 3; ext.cy = y + 0.3; let x = x0 - Wt / 2; const xs = [];
  Ls.forEach((l, i) => { const w = l.w || 0.3, m = keep(sizedBox(g, { pal: l.pal || 'paper', tone: 'hi', name: l.n + (l.s ? ' : ' + l.s : '') }), l.pal || 'paper'); setBox(m, x, x + w, y - H / 2, y + H / 2, -1.0, 1.0);
    const cx = x + w / 2; xs.push(cx); label('t1', l.n, () => V(cx, y + H / 2 + 0.4 + (i % 2) * 0.45, 0)); if (l.s) label('t2', l.s, () => V(cx, y - H / 2 - 0.4 - (i % 2) * 0.45, 0)); x += w + gap; });
  const from = S.from ?? 0, P = [V(xs[from], y, 0), V(x0 + Wt / 2 + 1.2, y, 0)];
  const ph = photons(g, [{ pts: P, pal: S.pal || 'red', name: 'La lumière' }, { pts: [V(xs[from], y + 0.6, 0), V(x0 + Wt / 2 + 1.2, y + 0.6, 0)], pal: S.pal2 || 'green', name: 'La lumière' }], { n: 2, period: 2.5 });
  label('t2', S.out || 'vers l’œil', () => V(x0 + Wt / 2 + 1.2, y - 0.6, 0));
  return { update: ph, info: () => S.info || '' };
}

// ------------------------------------------------------------------ 24. barres de comparaison : S.bars = [{ n, v, pal, s, k }]
function cbars({ g, S, x0, label: l0, ext }) {
  const label = slim(l0), B = S.bars, n = B.length, sp = S.sp || 2.6, H = S.h || 5.0, y0 = 0.6, mx = S.max || Math.max(...B.map(b => b.v)), st = { gr: 0 };
  ext.w = n * sp + 2; ext.h = H + 3; ext.cy = y0 + H / 2 + 0.3; ext.cx = (n - 1) * sp / 2;
  const ms = B.map(b => keep(sizedBox(g, { pal: b.pal || 'paper', tone: 'hi', name: `${b.n} : ${b.s}` }), b.pal || 'paper'));
  B.forEach((b, i) => { const x = x0 + i * sp; label('t1', b.s, () => V(x, y0 + H * b.v / mx * st.gr + 0.35, 0)); label('t2', b.n, () => V(x, y0 - 0.35, 0)); if (b.k) label('mark', b.k, () => V(x, y0 - 0.8, 0)); });
  return { update: t => { st.gr = Math.min(1, 0.15 + t / 2); ms.forEach((m, i) => { const x = x0 + i * sp; setBox(m, x - 0.6, x + 0.6, y0, y0 + Math.max(0.03, H * B[i].v / mx * st.gr), -0.6, 0.6); }); }, info: () => S.info || '' };
}

export const KINDS3D = { xform, gimbal, frustum, reps, bezier, sdf, raster, bvh, headset, stereo, hand, eye, slam, marker, timing, nerf, pointnet, ik, lod, noise, collide, gizmo, stack, cbars };
