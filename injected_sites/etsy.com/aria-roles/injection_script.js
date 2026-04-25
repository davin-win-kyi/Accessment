(function(){
  var bad = document.createElement('div');
  bad.id = 'bad-aria-role';
  bad.setAttribute('role', 'buton'); // misspelled 'button' -> invalid ARIA role
  bad.textContent = 'Add to cart';
  document.body.appendChild(bad);
})();