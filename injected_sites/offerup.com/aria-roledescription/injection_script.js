(() => {
  const bad = document.createElement('div');
  bad.id = 'bad-aria-roledesc';
  bad.setAttribute('aria-roledescription', 'custom container');
  bad.textContent = 'Demo: aria-roledescription used without any explicit or implicit role.';
  const target = document.getElementById('page-content') || document.body;
  target.insertBefore(bad, target.firstChild);
})();