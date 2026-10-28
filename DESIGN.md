---
name: Atlantis Escuela de Natación
description: Escuela de natación con pileta cubierta y climatizada en San Carlos Centro, Santa Fe.
colors:
  blue: "#023497"
  blue-deep: "#01226a"
  blue-ink: "#0a1a3f"
  aqua: "#22b8cf"
  aqua-soft: "#e6f6f9"
  sky: "#f2f7fb"
  white: "#ffffff"
  ink: "#0f1b33"
  ink-soft: "#44506a"
  line: "#d9e2ec"
  on-blue-soft: "#d3dff5"
  wa: "#25d366"
  wa-hover: "#1fc15b"
  wa-ink: "#05301a"
typography:
  display:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(3rem, 8.4vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(2.1rem, 4.6vw, 3.5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.75rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.025em"
  title-sm:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.375rem"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.015em"
  lead:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "clamp(1.0625rem, 1.6vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.6
  body:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.0625rem"
    fontWeight: 700
    lineHeight: 1.2
  body-lg:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 600
    lineHeight: 1.5
  caption:
    fontFamily: "'Figtree Variable', 'Helvetica Neue', Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 600
    lineHeight: 1.2
rounded:
  card: "16px"
  pill: "999px"
  circle: "50%"
spacing:
  gutter: "clamp(1rem, 4vw, 3rem)"
  section: "clamp(4.5rem, 10vw, 8rem)"
  container-max: "76rem"
  card-padding: "1.5rem"
components:
  button-contact-phone:
    backgroundColor: "{colors.aqua}"
    textColor: "{colors.blue-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "48px"
  button-contact-phone-lg:
    backgroundColor: "{colors.aqua}"
    textColor: "{colors.blue-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.75rem"
    height: "56px"
  button-contact-whatsapp:
    backgroundColor: "{colors.wa}"
    textColor: "{colors.wa-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.4rem"
    height: "48px"
  button-contact-whatsapp-hover:
    backgroundColor: "{colors.wa-hover}"
    textColor: "{colors.wa-ink}"
  button-ghost-on-photo:
    textColor: "{colors.white}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.5rem"
    height: "56px"
  chip-social:
    backgroundColor: "{colors.white}"
    textColor: "{colors.blue-ink}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "0 1.1rem"
    height: "44px"
  card-program:
    backgroundColor: "{colors.white}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.card}"
    padding: "1.5rem 1.5rem 1.75rem"
  nav-link:
    textColor: "{colors.blue-ink}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 0.9rem"
  fab-contact:
    backgroundColor: "{colors.aqua}"
    textColor: "{colors.blue-ink}"
    rounded: "{rounded.circle}"
    size: "60px"
  step-number:
    backgroundColor: "{colors.aqua-soft}"
    textColor: "{colors.blue}"
    rounded: "{rounded.circle}"
    size: "44px"
---

# Design System: Atlantis Escuela de Natación

## Overview

**Creative North Star: "El natatorio bien terminado"**

El sistema es el estándar del rubro hecho con oficio: foto real grande, mensaje claro y el contacto siempre a mano. No busca un truco conceptual; gana por claridad, calidez y terminación. La página es solo clara (`color-scheme: light`), pensada para familias de San Carlos Centro que la miran en el teléfono, con buena luz y apuro: todo se lee de un vistazo y el botón de contacto nunca queda lejos.

El mundo sale del logo: blanco limpio con el azul `blue` en franjas de sección y en el texto de acción, aguamarina como la luz del agua y una sola sans de trabajo, autoalojada, con display en peso alto. Las fotos son de la escuela real, en esquinas de 16px, y la ola es la única transición entre secciones de distinto fondo. La densidad es holgada: secciones con mucho aire vertical, columnas de texto angostas, una idea por bloque.

Todo el contacto es por WhatsApp. Cada botón abre un menú chico para elegir a quién escribirle (Silvina o Camila, definidas en `contacts` de `src/data/site.ts`), con un mensaje ya escrito según la clase.

**Key Characteristics:**
- Blanco de base, azul del logo en franjas completas y aguamarina como luz.
- Una sola familia tipográfica (Figtree Variable) con titulares en 800 y tracking negativo.
- Fotos reales de Atlantis en esquinas de 16px; la portada a sangre con velo azul desde la izquierda.
- Ola SVG como única transición entre fondos.
- Botones en píldora; el contacto lleva sombra azulada, el resto es plano.
- Movimiento corto con `expo.out`, siempre condicionado a `prefers-reduced-motion`.

## Colors

Una paleta de un solo azul de marca con su escala de profundidad, un aguamarina de apoyo y neutros fríos levemente azulados; el verde WhatsApp queda reservado a un único rol.

### Primary
- **Azul Atlantis** (`blue`): el azul muestreado del logo. Fondo de la franja de Competición, texto de enlaces de acción («Llamar para consultar», «Cómo llegar»), íconos de datos, números de los pasos, `accent-color` y `theme-color`.
- **Azul Profundo** (`blue-deep`): base de la portada detrás de la foto, parte oscura del velo y fondo de la foto mientras carga dentro de una franja azul.
- **Azul Tinta** (`blue-ink`): color de todos los titulares sobre fondo claro, tinta sobre aguamarina y fondo del pie de página.

### Secondary
- **Aguamarina** (`aqua`): la luz del agua. Anillo de foco, selección de texto y el filete de 2px que separa la nota en «La pileta».
- **Aguamarina Suave** (`aqua-soft`): fondo de los círculos numerados y relleno de los marcos de foto y mapa mientras cargan.

### Tertiary
- **Verde WhatsApp** (`wa`, hover `wa-hover`, tinta `wa-ink`): solo para los botones de contacto cuando hay número de WhatsApp. La tinta oscura sobre el verde reemplaza al blanco porque el blanco no alcanza contraste sobre `#25d366`.

### Neutral
- **Blanco** (`white`): fondo de página, de las tarjetas de clases y de los chips sociales; la ola de la portada es blanca.
- **Cielo** (`sky`): fondo alterno de secciones («La pileta», «Dónde estamos») y hover de la navegación sólida.
- **Tinta** (`ink`): texto de cuerpo por defecto.
- **Tinta Suave** (`ink-soft`): bajadas, textos de tarjeta y descripciones.
- **Línea** (`line`): filetes superiores de los pasos, bordes de chips y separadores del menú móvil.
- **Claro Sobre Azul** (`on-blue-soft`): el único tono para texto secundario sobre franjas azules (bajada de portada, dirección, párrafos de Competición, texto y legales del pie).

### Named Rules
**The Un Solo Verde Rule.** El verde WhatsApp existe solo en la acción de contacto (botones, botón flotante e íconos del menú de elección); nunca aparece como verde decorativo.

**The Franja Completa Rule.** El azul de marca ocupa franjas de ancho completo (portada, Competición, pie) o texto de acción; no se usa en recuadros sueltos ni en fondos de tarjeta.

**The Texto Claro Sobre Azul Rule.** Sobre franjas azules el texto es blanco o `on-blue-soft`, nunca otro tinte suelto; los titulares sobre fondo claro son siempre `blue-ink`, nunca `blue`.

## Typography

**Display Font:** Figtree Variable (con 'Helvetica Neue', Arial, sans-serif)
**Body Font:** Figtree Variable (misma familia)

**Character:** Una sans geométrica-humanista de trabajo, cálida y legible, que hace el trabajo de display subiendo a 800 y cerrando el tracking. Autoalojada vía `@fontsource-variable/figtree`.

### Hierarchy
- **Display** (800, `clamp(3rem, 8.4vw, 6rem)`, 0.98): solo el titular de la portada, en blanco, con `max-width: 11ch`.
- **Headline** (800, `clamp(2.1rem, 4.6vw, 3.5rem)`, 1.05): títulos de sección; en `blue-ink` sobre claro y en blanco sobre la franja azul.
- **Title** (800, 1.75rem, 1.05): título de cada tarjeta de clase.
- **Title Small** (800, 1.375rem, 1.05, -0.015em): títulos de los pasos y el nombre «Atlantis» en la barra.
- **Lead** (400, `clamp(1.0625rem, 1.6vw, 1.25rem)`, 1.6): bajadas debajo de los títulos de sección, hasta 38rem de ancho; también la bajada de portada y los párrafos de Competición.
- **Body** (400, 1.0625rem, 1.6): todo el texto corrido, con columnas de 22 a 46rem.
- **Label** (700, 1.0625rem): botones, enlaces de acción, chips. La navegación usa 600.
- **Body Large** (600, 1.125rem, 1.5): la nota destacada de «La pileta» y los números de los pasos (en 800).
- **Caption** (600, 0.875rem): segunda línea de la marca, dirección en la portada, accesos rápidos de clases en celular (700) y legales del pie (400).

### Named Rules
**The Una Familia Rule.** Todo el sitio va en Figtree Variable; la jerarquía se arma con peso (400 / 600 / 700 / 800) y tamaño, no con una segunda fuente.

**The Titular Apretado Rule.** Todo h1–h3 lleva tracking negativo (-0.015em a -0.035em), interlínea cerca de 1 y `text-wrap: balance`. Los párrafos llevan `text-wrap: pretty`.

## Layout

Un contenedor centrado de `min(100% - 2 * gutter, 76rem)`, con margen lateral fluido (`gutter`). Las secciones apilan con un ritmo vertical fluido (`section`), y las que llevan ola suman 2.5–3rem para que la curva no se coma el contenido.

Los fondos alternan en este orden: portada azul con foto → blanco (clases) → cielo (pileta) → franja azul (Competición, con ola arriba y abajo) → blanco (pasos) → cielo (ubicación) → pie en `blue-ink`.

Las secciones de dos columnas usan proporciones asimétricas (6fr / 5fr o 5fr / 6fr) con hueco de `clamp(2rem, 6vw, 5.5rem)`. Las grillas de tres (clases, pasos) colapsan a una columna. La portada cruza su ola con las tarjetas de clase: la lista sube `-9.5rem` en escritorio y `-3rem` en móvil.

Cortes observados: 400px (marca más chica), 640px (portada móvil: foto arriba de 27rem fundida a `blue-deep`, botón de contacto a ancho completo, chips Chicos / Adultos / Competición en lugar de «Ver clases»), 760px (pasos a una columna), 860px (navegación a menú hamburguesa, CTA de la barra oculto, aparece el botón flotante), 900px (secciones de dos columnas y clases a una columna). Los objetivos táctiles miden 44px como mínimo; los botones de contacto, 48 o 56px.

## Elevation & Depth

Híbrido: las secciones son planas y la profundidad viene del cambio de fondo y de la ola; las sombras son suaves, difusas y teñidas de azul marino, nunca negras ni duras. Solo levantan lo que flota o lo que se toca.

### Shadow Vocabulary
- **Contacto en reposo** (`box-shadow: 0 6px 18px -6px rgb(2 20 70 / 0.35)`): botones de contacto.
- **Contacto en hover** (`box-shadow: 0 10px 24px -8px rgb(2 20 70 / 0.45)`): el mismo botón al subir 1px.
- **Tarjeta** (`box-shadow: 0 18px 40px -24px rgb(10 26 63 / 0.45)`): tarjetas de clase que cruzan la ola.
- **Barra sólida** (`box-shadow: 0 6px 24px -14px rgb(10 26 63 / 0.35)`): la barra de navegación cuando se vuelve blanca.
- **Flotante** (`box-shadow: 0 10px 28px -8px rgb(2 20 70 / 0.5)`): botón de contacto flotante en móvil.

### Named Rules
**The Sombra Marina Rule.** Toda sombra es difusa, con spread negativo y teñida de `rgb(2 20 70)` o `rgb(10 26 63)`. Ni sombras negras ni sombras desplazadas sin desenfoque.

## Shapes

Dos geometrías y nada más: el rectángulo de esquinas de 16px (`rounded.card`) para todo lo que contiene imagen o contenido (fotos, tarjetas, mapa), y la píldora (`rounded.pill`) para todo lo que se toca (botones, chips, enlaces de navegación). Los elementos circulares (botón flotante, números de paso) usan `rounded.circle`.

La ola es la firma: un único trazado SVG (`M0 64c120 28 260 46 420 38s300-46 470-52 330 28 550 2v68H0Z`, viewBox 1440×120, `preserveAspectRatio="none"`) que se pinta con el color de la sección vecina y se invierte para el borde superior. Altura `clamp(48px, 8vw, 120px)` en la portada y `clamp(40px, 7vw, 100px)` entre secciones.

Los bordes son finos y funcionales: 1.5px en botones fantasma y chips, 2px en los filetes superiores de pasos y nota, 1px en separadores.

## Components

### Buttons
Botones de contacto con presencia y calidez, siempre en píldora.
- **Shape:** píldora (`rounded.pill`), alto mínimo 48px (`md`) o 56px (`lg`), ícono de 18 o 22px a la izquierda con 0.6rem de hueco.
- **Menú de elección:** tarjeta blanca `rounded.card` con sombra marina, el título «¿A quién le escribís?» en caption y una fila píldora por contacto (ícono WhatsApp en `wa-hover`, nombre en 700, número en caption tabular). Abre hacia abajo por defecto, hacia arriba en la portada y en las tarjetas de clases (`placement="up"`, para no quedar tapado), y hacia arriba alineado a la derecha en el botón flotante. Se cierra con Escape, con un clic afuera o al elegir. Cada opción abre en una pestaña nueva la página `/gracias` (no indexada): logo, «¡Gracias por escribirnos!», «Te estamos llevando al WhatsApp de …» y un botón verde de respaldo. A los 1,2 s se abre WhatsApp (WhatsApp Web en la computadora y `wa.me` en el celular). La visita a `/gracias` es la conversión de Google Ads.
- **Variantes del botón:** `button` (píldora verde), `link` (enlace de texto azul con flecha, en las tarjetas) y `fab` (círculo verde de 60px en móvil).
- **Contacto, modo WhatsApp:** fondo `wa`, texto `wa-ink`, glifo de WhatsApp, abre en pestaña nueva con mensaje precargado. Hover a `wa-hover`.
- **Hover / Active:** sube 1px y la sombra crece (ver Elevation); al presionar vuelve a 0 y escala a 0.98. Transiciones de 0.2s con `--ease-out`.
- **Fantasma sobre foto:** borde de 1.5px blanco al 70%, texto blanco, 56px; en hover fondo blanco al 12% y la flecha se corre 3px. Solo en la portada.
- **Enlace de acción:** texto `blue` en 700 con flecha que se corre 3px en hover y subrayado; cierra cada tarjeta de clase.

### Chips
- **Social:** píldora de 44px, fondo `white`, borde 1.5px `line`, texto `blue-ink` con ícono; en hover borde y texto pasan a `blue`.
- **Caminos de portada (móvil):** tres píldoras de 48px con borde blanco al 60% sobre la foto, repartidas en una fila.

### Cards / Containers
- **Corner Style:** 16px (`rounded.card`), con `overflow: hidden`.
- **Background:** `white`; la foto de arriba en 4:3 con relleno `aqua-soft` mientras carga.
- **Shadow Strategy:** sombra de tarjeta (ver Elevation).
- **Border:** ninguno.
- **Internal Padding:** 1.5rem 1.5rem 1.75rem; el enlace de acción se empuja al pie con `margin-top: auto`.
- **Hover:** la foto escala a 1.04 en 0.6s.

### Navigation
- **Style:** barra fija de 4.75rem, transparente con texto blanco sobre la portada; se vuelve blanca al 97% con texto `blue-ink` y sombra cuando la portada deja de estar detrás. El logo se achica a 0.9.
- **Links:** 600, píldora con padding 0.6rem 0.9rem; hover con fondo blanco al 16% sobre foto o `sky` sobre la barra sólida. El botón de contacto `md` cierra la barra a la derecha.
- **Mobile:** desde 860px, botón de menú de 48px que despliega un panel con enlaces en 700 a 1.25rem separados por filetes `line`; Escape cierra y devuelve el foco.
- **Logo:** `src/assets/logo-badge.png` en la barra (con un respaldo blanco calcado del contorno del logo, para que lea sobre foto y sobre blanco) y `src/assets/logo-solid.png` en el pie.

### Portada con velo
Foto real a sangre, `object-fit: cover` con `object-position` por foto, bajo un velo de dos gradientes: horizontal de `blue-deep` al 92% a azul al 10% de izquierda a derecha, y vertical oscuro arriba para leer la barra. En móvil la foto queda arriba y se funde hacia `blue-deep`. Entrada con GSAP: la foto se asienta desde escala 1.08 en 2.2s y las líneas suben 28px en cascada (0.09s).

### Pasos numerados
Tres columnas con filete superior de 2px `line`, número en círculo de 44px `aqua-soft` con cifra `blue` en 800 tabular, título `title-sm` y texto `ink-soft`.

### Botón flotante
Solo en móvil (desde 860px): círculo de 60px abajo a la derecha, respetando `safe-area-inset`, con el mismo color de canal que el contacto. Aparece cuando la portada sale de pantalla.

### Video en bucle
Clips reales de 7 s, mudos, sin franjas negras, en marcos `rounded.card` con `object-fit: cover` (4:5 en «Así se vive Atlantis», 9:5 en «La pileta»). Solo se reproducen cuando están en pantalla. Con «reducir movimiento» activado quedan quietos y muestran su póster. Un botón píldora («Pausar videos» / «Reproducir videos», con `aria-pressed`) controla todos a la vez. En móvil, la fila de clips se desliza de costado.

### Mosaicos de fotos
Los grupos de fotos usan una grilla con una pieza principal más grande y las demás chicas, todas con esquinas `rounded.card` y el mismo hueco (`clamp(0.75rem, 1.6vw, 1.25rem)`). Están en «Río» (1 grande + 2), en «Además de la pileta» (1 de 2×2 + 4, cada una con su rótulo en una píldora blanca) y en la tira de torneos dentro de la franja azul (4 iguales, 2 por fila en móvil).

### Carrusel «Más momentos»
Fila horizontal con `scroll-snap` que arranca alineada al contenedor y se sale por la derecha hasta el borde de la pantalla. Lleva botones circulares de 48px (anterior y siguiente), que se deshabilitan en los extremos. No avanza solo.

## Do's and Don'ts

### Do:
- **Do** usar `ContactButton` para toda acción de contacto, para que siempre ofrezca elegir entre Silvina y Camila; los números viven solo en `contacts` de `src/data/site.ts`.
- **Do** usar fotos reales de Atlantis en marcos de 16px, con `object-position` ajustado por foto.
- **Do** separar secciones de distinto fondo con la ola, pintada del color de la sección vecina.
- **Do** escribir los titulares en Figtree 800 con tracking negativo y `blue-ink` sobre claro.
- **Do** mantener píldora para lo táctil y 16px para lo que contiene, con objetivos de 44px como mínimo.
- **Do** condicionar toda animación a `prefers-reduced-motion: no-preference` y usar `expo.out` / `cubic-bezier(0.16, 1, 0.3, 1)`.
- **Do** mostrar el anillo de foco aguamarina de 3px con 3px de separación en todo elemento interactivo.

### Don't:
- **Don't** usar el verde WhatsApp fuera del botón de contacto, ni pintar de verde un botón que llama por teléfono.
- **Don't** usar fotos de stock: la de Adultos es provisoria y se reemplaza por una propia.
- **Don't** agregar modo oscuro: la página es solo clara.
- **Don't** usar sombras negras, duras o desplazadas sin desenfoque.
- **Don't** sumar una segunda familia tipográfica ni usar fuentes del sistema como display.
- **Don't** poner sobretítulos o etiquetas en mayúsculas encima de los títulos de sección.
- **Don't** usar degradés decorativos: el único degradé del sistema es el velo sobre la foto de portada.
