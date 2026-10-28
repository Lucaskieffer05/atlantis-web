# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Astro (salida estática) + GSAP. Elegido porque es un sitio de marca con mucha fotografía y varias secciones de contenido: Astro optimiza imágenes, entrega HTML liviano y permite islas interactivas solo donde hace falta; GSAP ya está instalado como skill del proyecto (`.claude/skills/gsap-*`) para la animación. Sin backend propio por ahora; el destino de deploy no está definido.

## Users

Público general de San Carlos Centro y alrededores que busca clases de natación: familias que quieren anotar a sus hijos y adultos que quieren aprender o entrenar. La escuela también forma nadadores que compiten en torneos.

**Abierto:** cuál de estos grupos es el prioritario para el sitio.

## Product Purpose

Atlantis Escuela de Natación es una escuela de natación privada, con pileta cubierta y climatizada, que ofrece clases y actividades acuáticas para todas las edades y niveles. El sitio presenta la escuela y lleva al visitante a consultar o inscribirse. Éxito = consultas e inscripciones iniciadas desde el sitio.

El dueño de la escuela es el usuario de este proyecto.

## Positioning

Lo confirmado hasta ahora:
- Pileta cubierta y climatizada: se nada todo el año.
- No es solo recreativa: lleva nadadores a torneos fiscalizados por la Federación Santafesina de Natación.
- Programas para todas las edades y niveles, con equipo de instructores.

**Abierto:** el diferencial en palabras del dueño, frente a otras piletas o clubes de la zona.

No confundir con el Club Atlantis de Mar del Plata, que aparece mucho en resultados de natación nacionales.

## Operating Context

- Dirección: Suchón 990, San Carlos Centro, Santa Fe (sobre la misma calle que el Hospital Suchón). Confirmada por el dueño el 2026-10-27; reemplaza el 845 que figuraba en directorios.
- Contacto: WhatsApp con Silvina (3404 435552) y Camila (3404 436889). Las dos atienden todas las consultas. El teléfono fijo 3404 42-2756 ya no se publica, por decisión del dueño.
- Instagram: @atlantisescueladenatacion. Facebook: facebook.com/atlantis.escueladenatacion.
- Sitio: publicado en Netlify (atlantis-natacion.netlify.app). Dominio propio https://atlantisnatacion.com.ar registrado en NIC Argentina el 2026-10-27 (vence el 27/10/2027, renovar antes), delegado a Netlify DNS y con HTTPS de Let's Encrypt (renovación automática). La dirección de Netlify redirige al dominio.
- El sitio lleva todas las consultas a WhatsApp: el visitante elige a quién escribirle y se abre WhatsApp Web en la computadora o la app en el celular, con un mensaje ya escrito según la clase.
- Idioma del sitio: español.
- La inscripción se inicia por WhatsApp; el sitio no tiene formulario. Cada consulta pasa por `/gracias` antes de abrir WhatsApp, para que Google Ads cuente las conversiones. La etiqueta se activa cargando el ID `AW-…` en `GOOGLE_ADS_ID` (src/data/site.ts); hasta entonces no se carga ninguna etiqueta.

## Capabilities and Constraints

- Sitio web de marca, no una app ni una tienda: no hay pago online.
- Servicios confirmados: clases grupales de natación para niños y adultos; gimnasia en el agua y rutinas para adultos; preparación y participación en torneos.
- Actividades confirmadas por el dueño (2026-10-26) y visibles en el Instagram: aguas abiertas en el río, con un circuito de 1 km y la mitad del recorrido contra la corriente, siempre con boya de arrastre (confirmado por el dueño el 2026-10-27); pelotero acuático e inflables; colonia de verano; juegos al aire libre; actividades de cocina con los chicos.
- **Abierto:** precios, horarios, niveles concretos, nombres de profesores, año de fundación, medidas de la pileta, y si hay otras propuestas (colonia de vacaciones, matronatación, aquagym, etc.). El dueño tiene esta información; no deducirla.

## Brand Commitments

- Nombre: **Atlantis Escuela de Natación** (San Carlos Centro).
- Logo definido, a respetar: óvalo azul con anillo blanco, silueta de nadador en brazada con tres olas blancas y la palabra ATLANTIS en mayúsculas contorneadas debajo. Dos colores: azul `#023497` (muestreado del archivo) y blanco.

## Evidence on Hand

- Logo: `assets/brand/logo-original.jpg` (lo que entregó el usuario: JPG con el damero de transparencia pegado como píxeles) y `assets/brand/logo.png` (versión con fondo transparente extraída de ese JPG; bordes aceptables, pero el original vectorial sería mejor si existe).
- Fotografías propias: el dueño entregó 22 capturas de su Instagram (originales en `assets/instagram/`). Además hay fotos del Facebook oficial en `assets/redes/`. Las usadas en el sitio, recortadas, están en `src/assets/photos/`. Todas son reales: ya no queda ninguna de stock. Muchas muestran menores: confirmar que las familias aceptan que aparezcan en el sitio.
- Videos: cuatro clips de 7 segundos grabados de reels del Instagram oficial (sin sonido, sin franjas negras) en `public/videos/`. Los originales sin recortar están en `assets/instagram/videos/`.
- Natación para bebés: confirmada por el dueño el 2026-10-27. El sitio la muestra solo en el video «Juegos en el agua» y todavía no la menciona en el texto. Un volante viejo hablaba de cupos limitados y de inscripción por otro número (3404 513415): no está confirmado que siga vigente.
- Datos vistos en las redes, a confirmar con el dueño antes de publicarlos: horarios libres y los 10 años de la escuela. En las publicaciones figuran celulares de contacto (3404 513415 para inscripciones a bebés, y otros de instructoras): ninguno está confirmado como el WhatsApp del sitio.
- Reseñas públicas: promedio 5/5 en 6 reseñas de directorios (OmarSport y similares, datos de unos dos años). Destacan las instalaciones, la profesionalidad de los instructores y el ambiente acogedor. Son pocas y viejas: usarlas solo con permiso del dueño y sin citar textuales que no se hayan verificado.
- Competencia: en octubre de 2024, "Atlantis San Carlos" fue una de las 14 instituciones del Torneo aniversario 30 años del Club Atlético San Jorge (176 deportistas, fiscalizado por la Federación Santafesina de Natación). Fuente: UNO Santa Fe. No hay resultados publicados de sus nadadores.
- Redes: 5.686 "me gusta" en Facebook, 1.871 seguidores en Instagram (cifras de octubre de 2026, cambian con el tiempo).
- No hay textos aprobados, precios, horarios, testimonios con nombre, premios ni resultados deportivos: no fabricar ninguno.

## Product Principles

1. Todo conduce a consultar o inscribirse: cada sección debe acercar al visitante a esa acción, con el contacto siempre a mano.
2. Se muestra la escuela real: su pileta, sus alumnos y su equipo con material propio, nunca con fotos genéricas ni pruebas inventadas.
3. Un padre o un adulto que llega sin contexto tiene que entender enseguida qué ofrece Atlantis, para quién es y cómo empezar.
4. Recreación y competencia conviven: el sitio tiene que dar lugar a quien aprende a nadar y a quien quiere competir, sin que una cosa tape a la otra.
