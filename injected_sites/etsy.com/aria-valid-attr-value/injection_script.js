(function(){
  var bad = document.createElement('div');
  bad.id = 'bad-aria-hidden';
  bad.setAttribute('aria-hidden', 'rtue'); // invalid token; must be "true" or "false"
  bad.textContent = 'This element has an invalid ARIA value.';
  document.body.appendChild(bad);
})();