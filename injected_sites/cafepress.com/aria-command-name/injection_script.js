(() => {
  const btn = document.createElement('div');
  btn.setAttribute('role', 'button');
  btn.setAttribute('aria-label', ''); // empty accessible name
  btn.id = 'invisible-name-aria-button';
  btn.style.cssText = 'position:fixed; bottom:20px; right:20px; width:48px; height:48px; background:#e0e0e0; border:1px solid #bbb; z-index:99999;';
  document.body.appendChild(btn);
})();