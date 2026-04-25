(function(){
  var bad = document.createElement('div');
  bad.id = 'invalid-aria-demo';
  bad.textContent = 'Exclusive offer banner';
  bad.setAttribute('tabindex','0');
  // Intentionally invalid/misspelled ARIA attributes to trigger aria-valid-attr
  bad.setAttribute('aria-visible','true');
  bad.setAttribute('aria-labledby','promo-title');

  // Add a heading to make it look legitimate (the misspelling above is what causes the failure)
  var h = document.createElement('h2');
  h.id = 'promo-title';
  h.textContent = 'Limited Time Offer';
  bad.appendChild(h);

  // Insert near the top of the body so it is easily discovered by scanners
  if (document.body.firstChild) {
    document.body.insertBefore(bad, document.body.firstChild);
  } else {
    document.body.appendChild(bad);
  }
})();