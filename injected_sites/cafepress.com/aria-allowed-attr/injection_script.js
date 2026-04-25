(function(){
  var bad = document.createElement('div');
  bad.id = 'bad-aria-allowed-attr';
  bad.setAttribute('role', 'tab');
  bad.setAttribute('aria-checked', 'true'); // invalid for role="tab"
  bad.setAttribute('tabindex', '0');
  bad.textContent = 'Deals & Offers';
  document.body.appendChild(bad);
})();