import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const dist = new URL('../dist/', import.meta.url);
const read = (path) => readFile(new URL(path, dist), 'utf8');

test('las tres páginas se generan con la estructura esperada', async () => {
  const [home, general, liminal] = await Promise.all([
    read('index.html'),
    read('general/index.html'),
    read('general/liminal/index.html'),
  ]);

  assert.match(home, /href="\/general\/"/);
  assert.equal((home.match(/href="\/general\/"/g) ?? []).length, 1);
  assert.match(general, /href="\/general\/liminal\/"/);
  assert.match(liminal, /href="\/general\/"/);
  assert.match(liminal, /https:\/\/www\.instagram\.com\/kkuranes21\//);
});

test('la galería incluye las 50 imágenes y existen en el build', async () => {
  const liminal = await read('general/liminal/index.html');
  const sources = [...liminal.matchAll(/src="(\/assets\/liminal\/[^"]+\.webp)"/g)].map((m) => m[1]);

  assert.equal(sources.length, 50);
  assert.equal(new Set(sources).size, 50);
  assert.equal((liminal.match(/<figure>/g) ?? []).length, 50);

  const files = await readdir(new URL('assets/liminal/', dist));
  for (const source of sources) assert.ok(files.includes(source.split('/').at(-1)), source);
});

test('el dominio propio viaja con el build', async () => {
  assert.equal((await read('CNAME')).trim(), 'kuraness.com');
});

test('no se envía JavaScript al navegador', async () => {
  const pages = ['index.html', 'general/index.html', 'general/liminal/index.html'];
  for (const page of pages) {
    const html = await read(page);
    assert.doesNotMatch(html, /<script[\s>]/, `${page} no debe incluir scripts`);
  }
});
