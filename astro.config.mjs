import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kuraness.com',
  build: { format: 'directory' },
  trailingSlash: 'always',
});
