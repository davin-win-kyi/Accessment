(() => {
  const el = document.createElement('div');
  el.id = 'invalid-aria-role-test';
  el.setAttribute('role', 'navigtion'); // invalid ARIA role (misspelled)
  el.setAttribute('aria-label', 'Main site navigation');
  el.textContent = 'Navigation';
  el.style.padding = '1px';
  const target = document.body || document.documentElement;
  if (target.firstChild) {
    target.insertBefore(el, target.firstChild);
  } else {
    target.appendChild(el);
  }
})();