// Controller for the inline in-text translation-language dropdown
// (InlineLangTrigger + InlineLangMenu): opens and positions the menu and
// reloads the page's ReaderDemo on selection. The learn pages' FeaturesSlider
// keeps its own variant because its dropdown also rewrites the page copy.
export function initInlineLangPicker(scope: HTMLElement): void {
  const trigger = scope.querySelector<HTMLElement>('.ilp-trigger');
  const menu = scope.querySelector<HTMLElement>('.ilp-menu');
  const nameEl = scope.querySelector<HTMLElement>('.ilp-name');
  // The menu is absolutely positioned against its parent element.
  const container = menu ? menu.parentElement : null;
  if (!trigger || !menu || !nameEl || !container) return;

  function positionMenu() {
    const tr = trigger!.getBoundingClientRect();
    const cr = container!.getBoundingClientRect();
    menu!.style.top = `${tr.bottom - cr.top + 8}px`;
    menu!.style.left = `${tr.left - cr.left}px`;
  }

  function openMenu() {
    positionMenu();
    menu!.hidden = false;
    trigger!.setAttribute('aria-expanded', 'true');
    const selected = menu!.querySelector('li.is-selected');
    if (selected) selected.scrollIntoView({ block: 'nearest' });
  }

  function closeMenu() {
    menu!.hidden = true;
    trigger!.setAttribute('aria-expanded', 'false');
  }

  window.addEventListener('resize', () => {
    if (!menu.hidden) positionMenu();
  });
  window.addEventListener(
    'scroll',
    () => {
      if (!menu.hidden) positionMenu();
    },
    { passive: true }
  );

  trigger.addEventListener('click', (e) => {
    e.stopPropagation();
    if (menu.hidden) openMenu();
    else closeMenu();
  });

  document.addEventListener('click', (e) => {
    if (menu.hidden) return;
    const t = e.target as Node;
    if (trigger.contains(t) || menu.contains(t)) return;
    closeMenu();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !menu.hidden) {
      closeMenu();
      trigger.focus();
    }
  });

  menu.addEventListener('click', (e) => {
    const li = (e.target as HTMLElement).closest('li[data-code]');
    if (!li) return;
    const code = li.getAttribute('data-code');
    if (code) {
      nameEl.textContent = (li.textContent || '').trim();
      const items = menu.querySelectorAll('li[data-code]');
      for (let i = 0; i < items.length; i++) {
        items[i].classList.toggle('is-selected', items[i] === li);
      }
      const reload = (window as unknown as { __lingoseven_reloadReader?: (code: string) => void })
        .__lingoseven_reloadReader;
      if (typeof reload === 'function') reload(code);
    }
    closeMenu();
    trigger.focus();
  });
}
