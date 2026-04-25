(function(){
  // Create a UL with an ARIA role that is not allowed for this element
  var badUl = document.createElement('ul');
  badUl.id = 'bad-aria-role-ul';
  badUl.setAttribute('role', 'button'); // invalid role for <ul>
  badUl.setAttribute('aria-label', 'Invalid role example');

  // Populate with some items so it is a valid list structurally
  var li1 = document.createElement('li');
  li1.textContent = 'Item 1';
  var li2 = document.createElement('li');
  li2.textContent = 'Item 2';
  badUl.appendChild(li1);
  badUl.appendChild(li2);

  // Ensure it is not within an aria-hidden container
  document.body.appendChild(badUl);
})();