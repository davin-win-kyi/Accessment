(function(){
  var target = document.querySelector('main') || document.body;
  if(!target) return;
  var badUl = document.createElement('ul');
  badUl.id = 'aria-allowed-role-violation';
  badUl.setAttribute('role', 'button');
  badUl.textContent = 'This list is incorrectly assigned role=button';
  // Add at least one list item so it looks like a real list
  var li = document.createElement('li');
  li.textContent = 'Item 1';
  badUl.appendChild(li);
  target.appendChild(badUl);
})();