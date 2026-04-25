(function(){
  // Create an element with a role that requires a specific parent role
  var orphan = document.createElement('div');
  orphan.setAttribute('role', 'menuitem'); // menuitem requires a parent with role="menu" or "menubar"
  orphan.textContent = 'Orphan menu item (no required menu/menubar parent)';
  orphan.id = 'orphan-menuitem-axe-test';
  document.body.appendChild(orphan);
})();