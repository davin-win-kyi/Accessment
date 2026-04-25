(function(){
  var badUl = document.createElement('ul');
  badUl.id = 'bad-ul-role-button';
  badUl.setAttribute('role', 'button');
  badUl.setAttribute('aria-label', 'This UL incorrectly has role button');
  badUl.style.margin = '20px';
  var li1 = document.createElement('li'); li1.textContent = 'Example item 1';
  var li2 = document.createElement('li'); li2.textContent = 'Example item 2';
  badUl.appendChild(li1);
  badUl.appendChild(li2);
  (document.querySelector('main') || document.body).appendChild(badUl);
})();