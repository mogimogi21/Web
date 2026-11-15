# Sistema visual

Extraído de `src/styles/site.css`, que es la única fuente de verdad. Esta página documenta el criterio, no lo sustituye.

## Color

| Variable | Valor | Uso |
| --- | --- | --- |
| `--black` | `#0c0b0a` | Fondo del documento |
| `--panel` | `#151411` | Paneles y tarjetas en reposo |
| `--ink` | `#ebe5d8` | Texto principal |
| `--muted` | `#9e988d` | Texto secundario y metadatos |
| `--gold` | `#b6a06d` | Acento, enlaces activos, filetes |
| `--line` | `#39352c` | Bordes y separadores |

El oro es acento, nunca color de párrafo. Se usa para: etiquetas superiores, cifras de sección, el punto final de los titulares, subrayados de enlace y el borde de la tarjeta al pasar el ratón.

## Tipografía

- Una sola familia: `Arial, Helvetica, sans-serif`. La personalidad viene del tamaño y del espaciado, no de la fuente.
- Titulares: `clamp()` con escala muy amplia y `letter-spacing` negativo (hasta `-.095em`). Los titulares se tocan casi entre sí; es intencionado.
- Micro-etiquetas: mayúsculas, `letter-spacing` de `.12em` a `.28em`, tamaño `.65`–`.7rem`, color oro o gris.
- El serif (Georgia) aparece solo en los glifos decorativos `?` y `G` de la portada.

## Ritmo

- Contenedor interior: `1280px`, con relleno lateral fluido `clamp(1.2rem, 5vw, 5rem)`.
- Secciones con filete inferior en `--line`; el aire se da con `clamp()` vertical, no con márgenes fijos.
- Numeración editorial en todos los bloques: `01 / Explora`, `Proyecto 01`, `01 — 50`.

## Comportamiento

- Transiciones cortas, `.2s`–`.45s`, solo en borde, color y escala de imagen.
- Foco visible siempre: contorno de `2px` en oro con `5px` de separación.
- `prefers-reduced-motion` desactiva transiciones y scroll suave.

## Reglas al añadir piezas nuevas

1. Ningún color fuera de las variables de `:root`.
2. Ninguna fuente nueva sin decisión registrada en `DECISIONES.md`.
3. Toda animación respeta `prefers-reduced-motion`.
4. Los metadatos van en micro-etiquetas; el texto corrido nunca se pone en mayúsculas.
