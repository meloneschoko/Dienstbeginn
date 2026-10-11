import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const source = readFileSync(new URL('../public/app.js', import.meta.url), 'utf8');
const data = source.slice(source.indexOf('const knots = ['), source.indexOf('const civilianEmergencyContacts'));
const knots = vm.runInNewContext(`${data}\nknots`);
const requested = ['doppelter-ankerstich', 'bulin-gelegt', 'bulin-gesteckt', 'paketknoten',
  'prusik-gelegt', 'prusik-gesteckt', 'sackstich', 'sackstich-gesteckt', 'sackstich-ringform',
  'mastwurf-gelegt', 'mastwurf', 'achter-gelegt', 'achter-gesteckt', 'doppelter-achterknoten'];
assert.equal(new Set(knots.map(knot => knot.id)).size, knots.length, 'Keine doppelten Routen');
for (const id of requested) {
  const knot = knots.find(item => item.id === id);
  assert.ok(knot, `${id}: vorhanden`);
  for (const key of ['name', 'material', 'check', 'videoPublisher', 'source', 'group']) {
    assert.ok(knot[key], `${id}: ${key}`);
  }
  assert.match(knot.video, /^[\w-]{11}$/);
  assert.ok(knot.steps.length >= 4, `${id}: vollständige Schrittfolge`);
  assert.ok(knot.errors.length >= 2, `${id}: typische Fehler`);
}
for (const [group, count] of [['Doppelter Bulin', 2], ['Prusikknoten', 2], ['Sackstichknoten', 3], ['Mastwurf', 2], ['Achterknoten', 4]]) {
  assert.equal(knots.filter(knot => knot.group === group).length, count, `${group}: Variantenanzahl`);
}
assert.equal(knots.filter(knot => knot.group === 'Ankerstich').length, 1);
assert.match(source, /route:'knoten\/' \+ knot.id/);
assert.match(source, /youtube-nocookie\.com\/embed\//);
assert.match(source, /Video direkt auf YouTube öffnen/);
assert.match(source, /Sicherheitsrelevante Knoten müssen praktisch unter fachkundiger Anleitung/);
console.log(`PASS: ${knots.length} eindeutige Knotenrouten; 14 angeforderte, fachlich zugeordnete Einträge; Gruppen, Pflichtfelder und Suchrouten.`);
