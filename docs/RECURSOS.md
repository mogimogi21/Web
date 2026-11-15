# Recursos

Librerías y referencias evaluadas, con estado real a 15 de noviembre de 2026. Solo se instala lo que resuelve un problema concreto; esta lista no es un plan de instalación.

## En uso

| Recurso | Versión | Licencia | Para qué |
| --- | --- | --- | --- |
| [astro](https://github.com/withastro/astro) | 7.4.12 | MIT | Generador del sitio |

## Candidatos, por orden de utilidad previsto

| Recurso | Licencia | Para qué | Cuándo |
| --- | --- | --- | --- |
| [lenis](https://github.com/darkroomengineering/lenis) | MIT | Scroll suave con inercia | Cuando haya scroll largo y se note duro |
| [GSAP](https://github.com/greensock/GSAP) | Licencia estándar GSAP | Timelines y animación ligada al scroll | Secciones con secuencia compleja |
| [motion](https://github.com/motiondivision/motion) | MIT | Microinteracciones en islas React | Solo si aparece React |
| [OGL](https://github.com/oframe/ogl) | MIT | WebGL mínimo, shaders sobre imagen | Efecto sobre la imagen de portada |
| [p5.js](https://github.com/processing/p5.js) | LGPL-2.1 | Fondo generativo | Si se quiere arte procedural |

Nota: GSAP no es MIT. Antes de usarlo en producción hay que leer su licencia estándar y confirmarlo.

## Referencias visuales y de código

| Recurso | Para qué |
| --- | --- |
| [react-bits](https://github.com/DavidHDev/react-bits) | Efectos ya resueltos, útiles como referencia aunque no se instalen |
| [magicui](https://github.com/magicuidesign/magicui) | Componentes animados copiables |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | Solo si hacen falta formularios o diálogos accesibles |

## Descartados

| Recurso | Motivo |
| --- | --- |
| Three.js / react-three-fiber | Excesivo para arte 2D; la web no necesita escenas 3D por ahora |
| Tailwind | La estética es editorial y a medida; ver `DECISIONES.md` |
| Barba.js | Astro ya resuelve navegación y transiciones |
| Theatre.js | Sin mantenimiento desde 2024; solo tendría sentido como herramienta de autoría |
