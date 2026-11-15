# Kuraness

Sitio de Kuraness construido con Astro y publicado en `kuraness.com` mediante GitHub Pages.

## Requisitos

Node 22.23.4 o superior. El proyecto fija la versión exacta en `.nvmrc`.

```bash
nvm use
npm install
```

## Comandos

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor local con recarga en `http://localhost:4321` |
| `npm run build` | Genera el sitio estático en `dist/` |
| `npm run preview` | Sirve `dist/` para revisar el resultado real |
| `npm test` | Compila y comprueba páginas, galería y dominio |

## Estructura

```
src/
  layouts/Base.astro            cabecera del documento, metadatos y estilos
  components/SiteHeader.astro   navegación
  components/SiteFooter.astro   pie
  pages/index.astro             portada con las tres secciones
  pages/general/index.astro     presentación y lista de proyectos
  pages/general/liminal/        colección visual
  styles/site.css               colores, tipografía y distribución
public/
  CNAME                         dominio propio, no borrar
  assets/liminal/               50 imágenes WebP
docs/                           decisiones, sistema visual y recursos
tests/build.test.mjs            comprobaciones sobre el resultado compilado
```

## Editar contenido

- **Añadir imágenes a Liminal:** deja los `.webp` en `public/assets/liminal/` con numeración de dos dígitos. La galería y los contadores se generan solos a partir de los archivos.
- **Cambiar textos:** edita la página correspondiente en `src/pages/`.
- **Añadir un proyecto:** de momento se duplica el bloque `<a class="project-card">` en `src/pages/general/index.astro`. Cuando haya varios proyectos reales se sustituirá por una colección de Markdown.

## Publicación

`main` se publica en `kuraness.com`. Los cambios se revisan en local con `npm run dev` antes de subirlos.
