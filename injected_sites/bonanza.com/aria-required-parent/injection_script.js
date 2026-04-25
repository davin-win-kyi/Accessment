(function(){
  var container = document.createElement('div');
  container.id = 'a11y-defect-aria-required-parent';
  container.setAttribute('style','position:relative;padding:8px;margin:16px;border:1px dashed #d33;');
  var title = document.createElement('h2');
  title.textContent = 'Quick actions';
  container.appendChild(title);
  // Create an element with a role that requires a specific parent role, but omit that parent
  var orphan = document.createElement('span');
  orphan.setAttribute('role','menuitem'); // requires parent role="menu" or "menubar"
  orphan.setAttribute('tabindex','0');
  orphan.textContent = 'Orphan menu item (no required parent)';
  container.appendChild(orphan);

  var target = document.querySelector('main') || document.body;
  target.insertBefore(container, target.firstChild || null);
})();