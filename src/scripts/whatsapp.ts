// Menús de WhatsApp: abrir/cerrar, uno a la vez, con Escape o clic afuera.
const choosers = [...document.querySelectorAll<HTMLElement>('[data-wa]')];

const close = (el: HTMLElement, focus = false) => {
  const toggle = el.querySelector<HTMLButtonElement>('[data-wa-toggle]')!;
  el.querySelector<HTMLElement>('[data-wa-menu]')!.hidden = true;
  toggle.setAttribute('aria-expanded', 'false');
  if (focus) toggle.focus();
};

for (const el of choosers) {
  const toggle = el.querySelector<HTMLButtonElement>('[data-wa-toggle]')!;
  const menu = el.querySelector<HTMLElement>('[data-wa-menu]')!;
  toggle.addEventListener('click', () => {
    const open = menu.hidden;
    choosers.forEach((other) => other !== el && close(other));
    menu.hidden = !open;
    toggle.setAttribute('aria-expanded', String(open));
    if (open) menu.querySelector<HTMLElement>('a')?.focus();
  });
  menu.addEventListener('click', (e) => { if ((e.target as Element).closest('a')) close(el); });
  // Si el foco sale del menú (por ejemplo con Tab), se cierra.
  el.addEventListener('focusout', (e) => { if (!el.contains(e.relatedTarget as Node | null)) close(el); });
}

document.addEventListener('click', (e) => {
  for (const el of choosers) if (!el.contains(e.target as Node)) close(el);
});
document.addEventListener('keydown', (e) => {
  if (e.key !== 'Escape') return;
  for (const el of choosers) if (!el.querySelector<HTMLElement>('[data-wa-menu]')!.hidden) close(el, true);
});
