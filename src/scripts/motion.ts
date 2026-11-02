import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { logoIntro } from './logo';

gsap.registerPlugin(ScrollTrigger);

declare global {
  interface Window { logoIntroFallback?: number }
}

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // La clase la pone el Header antes de pintar la portada; la intro solo corre si la página arrancó arriba.
  const root = document.documentElement;
  const layer = document.querySelector<HTMLElement>('[data-logo-intro]');
  const target = document.querySelector<HTMLElement>('[data-logo-target]');
  const intro = root.classList.contains('logo-intro-on') && scrollY < 80 && layer && target;
  clearTimeout(window.logoIntroFallback);
  if (!intro) root.classList.remove('logo-intro-on');

  // Entrada de la portada: (si hay intro, primero el logo en grande) la foto se asienta y el texto sube en cascada.
  const tl = gsap.timeline({ defaults: { ease: 'expo.out' }, onComplete: () => root.classList.remove('logo-intro-on') });
  let at = 0;
  if (intro) {
    const logo = logoIntro(layer!, target!);
    tl.add(logo, 0);
    at = logo.labels.handoff;
    tl.to('[data-hero-media]', { opacity: 1, duration: 1.4, ease: 'power2.out' }, at);
  }
  tl.fromTo('[data-hero-img]', { scale: 1.08 }, { scale: 1, duration: 2.2 }, at)
    .fromTo('[data-hero-line]', { y: 28, autoAlpha: 0 }, { y: 0, autoAlpha: 1, duration: 1, stagger: 0.09, clearProps: 'transform' }, at + (intro ? 0.5 : 0.15));

  // Solo las tarjetas de clases aparecen en escalera; el resto de la página queda quieto.
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (items) =>
      gsap.from(items, { y: 32, autoAlpha: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08, clearProps: 'transform' }),
  });
});
