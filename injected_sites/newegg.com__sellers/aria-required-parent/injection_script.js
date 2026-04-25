(function(){
  // Inject an ARIA child role that lacks its required parent
  var container = document.createElement('div');
  container.id = 'injected-aria-required-parent-violation';
  container.setAttribute('aria-label', 'Injected accessibility test region');

  var orphan = document.createElement('div');
  orphan.setAttribute('role', 'menuitem'); // requires a parent with role="menu" or "menubar"
  orphan.textContent = 'Standalone menu item with no menu parent';

  container.appendChild(orphan);
  document.body.appendChild(container);
})();