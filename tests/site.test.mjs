import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile, readdir } from 'node:fs/promises';

const root = new URL('../', import.meta.url);
const html = (path) => readFile(new URL(path, root), 'utf8');

test('the published pages link through the requested journey', async () => {
  const [home, general, liminal] = await Promise.all([
    html('index.html'),
    html('general/index.html'),
    html('general/liminal/index.html'),
  ]);

  assert.match(home, /href="\/general\/"/);
  assert.equal((home.match(/href="\/general\/"/g) ?? []).length, 1);
  assert.match(general, /href="\/general\/liminal\/"/);
  assert.match(liminal, /https:\/\/www\.instagram\.com\/kkuranes21\//);
  assert.match(liminal, /href="\/general\/"/);
});

test('the gallery includes every supplied image as a local optimized asset', async () => {
  const liminal = await html('general/liminal/index.html');
  const sources = [...liminal.matchAll(/src="(\/assets\/liminal\/[^\"]+\.webp)"/g)].map((match) => match[1]);
  assert.equal(sources.length, 50);
  assert.equal(new Set(sources).size, 50);
  const files = await readdir(new URL('assets/liminal/', root));
  for (const source of sources) assert.ok(files.includes(source.split('/').at(-1)), source);
});

test('the custom domain remains configured', async () => {
  assert.equal((await html('CNAME')).trim(), 'kuraness.com');
});
