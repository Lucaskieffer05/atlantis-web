// Videos en bucle: solo corren en pantalla, respetan "reducir movimiento" y se pueden pausar todos juntos.
const videos = [...document.querySelectorAll<HTMLVideoElement>('[data-loop-video]')];
const toggles = [...document.querySelectorAll<HTMLButtonElement>('[data-video-toggle]')];
const reduce = window.matchMedia('(prefers-reduced-motion: reduce)');

let paused = reduce.matches;
const visible = new Set<HTMLVideoElement>();

const sync = () => {
  for (const v of videos) {
    if (!paused && visible.has(v)) {
      if (v.preload === 'none') v.preload = 'auto';
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }
  for (const t of toggles) {
    t.dataset.state = paused ? 'paused' : 'playing';
    t.querySelector('[data-video-toggle-label]')!.textContent = paused ? 'Reproducir videos' : 'Pausar videos';
  }
};

const io = new IntersectionObserver((entries) => {
  for (const e of entries) {
    const v = e.target as HTMLVideoElement;
    if (e.isIntersecting) visible.add(v); else visible.delete(v);
  }
  sync();
}, { threshold: 0.25 });
videos.forEach((v) => io.observe(v));

toggles.forEach((t) => t.addEventListener('click', () => { paused = !paused; sync(); }));
// Si el teléfono bloqueó la reproducción automática (p. ej. ahorro de batería), un toque la arranca.
videos.forEach((v) => v.addEventListener('click', () => { if (v.paused && !paused) v.play().catch(() => {}); }));
reduce.addEventListener('change', () => { paused = reduce.matches; sync(); });
sync();
