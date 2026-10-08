# Kuraness

Sitio estático publicado con GitHub Pages en `kuraness.com`. No requiere instalar nada para editarlo.

## Páginas

- `index.html`: portada y tres secciones. Solo General tiene enlace.
- `general/index.html`: texto de presentación y proyectos.
- `general/liminal/index.html`: presentación de Liminal, Instagram y collage.
- `assets/site.css`: colores, tamaños y distribución.
- `assets/liminal/`: 50 imágenes optimizadas en WebP.
- `CNAME`: dominio propio. No borrarlo.

## Editar contenido

En GitHub, abre el archivo, pulsa el icono del lápiz y cambia el texto entre etiquetas HTML. Pulsa **Commit changes** para guardar. GitHub Pages suele publicar el cambio unos minutos después.

Para añadir otro proyecto en General, duplica el bloque `<a class="project-card">...</a>` de `general/index.html` y cambia el título, la descripción y el destino del enlace. Las secciones laterales de la portada son decorativas y no tienen enlace.

Para sustituir o añadir fotos en Liminal, sube archivos WebP a `assets/liminal/` y modifica las entradas `<figure>` en `general/liminal/index.html`. El texto `50 imágenes` y `01 — 50` también se debe actualizar.

El enlace de Instagram está en `general/liminal/index.html` y apunta a `https://www.instagram.com/kkuranes21/`.

## Comprobar localmente

Ejecuta `python3 -m http.server 8000` desde esta carpeta y visita `http://localhost:8000`. Ejecuta `node tests/site.test.mjs` para comprobar enlaces, imágenes y dominio.
