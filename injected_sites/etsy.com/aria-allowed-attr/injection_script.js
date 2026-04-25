(function(){
  var bad = document.createElement('div');
  bad.setAttribute('role', 'img');
  bad.setAttribute('aria-checked', 'true');
  bad.textContent = 'Sample graphic with invalid ARIA state';
  document.body.appendChild(bad);
})();