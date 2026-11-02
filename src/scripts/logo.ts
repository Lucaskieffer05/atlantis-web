import { gsap } from 'gsap';

// Armado del logo: el aro se dibuja como una brazada (de izquierda por arriba), el nadador sale del agua,
// se abre la estela detrás de él y suben las letras. Las medidas están en unidades del viewBox del SVG.
function buildLogo(svg: SVGSVGElement) {
  const ring = svg.querySelector<SVGPathElement>('[data-logo-ring]')!;
  const wake = svg.querySelector<SVGRectElement>('[data-logo-wake]')!;
  const length = ring.getTotalLength();
  const wakeX = Number(wake.getAttribute('x'));
  const wakeWidth = Number(wake.getAttribute('width'));
  const letters = [...new Set([...svg.querySelectorAll<SVGElement>('[data-logo-letter]')].map((el) => el.dataset.logoLetter))];

  const tl = gsap.timeline({ defaults: { ease: 'expo.out' } })
    .from(svg.querySelector('[data-logo-base]'), { scale: 0.6, autoAlpha: 0, transformOrigin: '50% 50%', duration: 0.7, ease: 'back.out(1.4)' })
    .fromTo(ring, { strokeDasharray: length, strokeDashoffset: length }, { strokeDashoffset: 0, duration: 1, ease: 'power2.inOut' }, 0.1)
    .from(svg.querySelector('[data-logo-water]'), { y: 560, duration: 1.1 }, 0.4)
    .from(wake, { attr: { x: wakeX + wakeWidth, width: 0 }, duration: 0.8, ease: 'power3.out' }, 0.8);

  // Cada letra tiene dos piezas (el borde blanco de fondo y la letra): suben juntas.
  letters.forEach((k, i) => {
    tl.from(svg.querySelectorAll(`[data-logo-letter="${k}"]`), { y: 90, autoAlpha: 0, duration: 0.6, ease: 'back.out(1.7)' }, 0.85 + i * 0.05);
  });

  return tl;
}

// Intro de la portada: el logo se arma en grande, el vector se cambia por la imagen original
// y esa imagen viaja hasta el logo del header (`target`), que toma su lugar.
// La etiqueta `handoff` marca el comienzo del viaje, para encadenar la portada.
export function logoIntro(layer: HTMLElement, target: HTMLElement) {
  const mark = layer.querySelector<HTMLElement>('[data-logo-mark]')!;
  const svg = mark.querySelector('svg')!;
  const img = mark.querySelector('img')!;
  // decode() deja la imagen lista para pintar: sin esto, el primer cuadro visible puede salir vacío.
  let decoded = false;
  img.decode().then(() => { decoded = true; }, () => {});
  const loaded = () => decoded;
  const offset = () => {
    const from = mark.getBoundingClientRect();
    const to = target.getBoundingClientRect();
    return { x: to.left - from.left, y: to.top - from.top, scale: to.width / from.width };
  };

  return gsap.timeline()
    .set(svg, { opacity: 1 })
    .add(buildLogo(svg), 0)
    // Si la imagen todavía no cargó, sigue el vector: nunca queda el hueco vacío.
    .to(img, { opacity: () => (loaded() ? 1 : 0), duration: 0.3, ease: 'none' }, '+=0.15')
    .to(svg, { opacity: () => (loaded() ? 0 : 1), duration: 0.3, ease: 'none' }, '<')
    .addLabel('handoff', '+=0.2')
    .to(mark, {
      x: () => offset().x,
      y: () => offset().y,
      scale: () => offset().scale,
      transformOrigin: '0 0',
      duration: 1,
      ease: 'power3.inOut',
    }, 'handoff')
    .set(target, { opacity: 1 })
    .set(layer, { display: 'none' });
}
