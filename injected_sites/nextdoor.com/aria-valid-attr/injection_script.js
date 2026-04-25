(function(){
  var container = document.querySelector('#nd-page-main') || document.body || document.documentElement;
  var bad = document.createElement('button');
  bad.id = 'aria-valid-attr-trigger';
  bad.textContent = 'Get started';
  // Invalid ARIA attribute name to trigger aria-valid-attr
  bad.setAttribute('aria-visible', 'true');
  container.prepend(bad);
})();