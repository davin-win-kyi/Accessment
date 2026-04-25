(() => {
  const bad = document.createElement('div');
  bad.setAttribute('role', 'progressbar');
  // aria-checked is not allowed on role=progressbar
  bad.setAttribute('aria-checked', 'true');
  bad.textContent = 'Loading…';
  bad.style.position = 'fixed';
  bad.style.bottom = '0';
  bad.style.left = '0';
  bad.style.width = '1px';
  bad.style.height = '1px';
  bad.style.opacity = '0.01';
  document.body.appendChild(bad);
})();