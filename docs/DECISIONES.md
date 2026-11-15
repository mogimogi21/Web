# Decisiones

Registro de por qué el sitio es como es. Si una decisión se cambia, se añade otra entrada en lugar de borrar la anterior.

## 2026-11-15 — Astro como generador

El sitio era HTML escrito a mano. Con un solo proyecto era viable; con un portfolio creciente obliga a duplicar bloques y actualizar contadores a mano.

Astro compila a HTML estático, así que el resultado es el mismo que antes (cero JavaScript enviado al navegador), pero el contenido se describe y las páginas se generan. Alternativa descartada: Next.js, por peso y complejidad innecesarios para un sitio de contenido con zonas aisladas de interactividad.

## 2026-11-15 — Migración fiel, sin rediseño

El primer paso no cambia ni un píxel. Criterio aplicado: las tres páginas compiladas tienen el mismo texto y capturas idénticas a las publicadas en escritorio y móvil. Rediseñar y migrar a la vez mezcla dos fuentes de error.

## 2026-11-15 — CSS escrito a mano

La estética es editorial y muy específica: oro sobre negro, micro-etiquetas en versalitas, titulares de escala enorme. Tailwind no aporta aquí; añade ruido en el marcado y no reduce el CSS propio. Se mantiene un único archivo de estilos con variables en `:root`.

## 2026-11-15 — Galería generada desde el sistema de archivos

`src/pages/general/liminal/index.astro` lee `public/assets/liminal/` en tiempo de compilación. Añadir o quitar imágenes no requiere tocar el HTML ni actualizar los textos "50 imágenes" y "01 — 50".

Las imágenes se quedan en `public/` en lugar de `src/assets/` para conservar exactamente las mismas rutas y no re-comprimir los originales. Se valorará optimización cuando el peso lo justifique.

## 2026-11-15 — Dominio en `public/CNAME`

El sitio usa dominio propio en la raíz, sin `base`. Si se migrara a una URL tipo `usuario.github.io/repo`, habría que añadir `base` en `astro.config.mjs`.

## 2026-11-15 — Sin `noindex`

Se dejó el comportamiento publicado tal cual. Añadir `noindex` mientras la web está en obras queda pendiente de decisión.
