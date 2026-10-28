import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const mm = gsap.matchMedia();

mm.add('(prefers-reduced-motion: no-preference)', () => {
  // Entrada de la portada: la foto se asienta y el texto sube en cascada.
  gsap.timeline({ defaults: { ease: 'expo.out' } })
    .from('[data-hero-img]', { scale: 1.08, duration: 2.2 })
    .from('[data-hero-line]', { y: 28, autoAlpha: 0, duration: 1, stagger: 0.09, clearProps: 'transform' }, 0.15);

  // Solo las tarjetas de clases aparecen en escalera; el resto de la página queda quieto.
  ScrollTrigger.batch('[data-reveal]', {
    start: 'top 88%',
    once: true,
    onEnter: (items) =>
      gsap.from(items, { y: 32, autoAlpha: 0, duration: 0.9, ease: 'expo.out', stagger: 0.08, clearProps: 'transform' }),
  });
});
