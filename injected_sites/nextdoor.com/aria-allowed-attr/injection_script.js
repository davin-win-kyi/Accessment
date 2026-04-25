(function(){
  var target = document.getElementById('nd-page-main') || document.body;
  var el = document.createElement('div');
  el.id = 'nd-aria-allowed-attr-defect';
  el.setAttribute('role', 'button');
  // Invalid ARIA attributes for role="button"
  el.setAttribute('aria-level', '3');
  el.setAttribute('aria-checked', 'true');
  el.setAttribute('tabindex', '0');
  el.style.margin = '16px';
  el.style.padding = '8px';
  el.style.border = '1px dashed red';
  el.textContent = 'Example control';
  if (target) {
    target.insertBefore(el, target.firstChild);
  } else {
    document.body.appendChild(el);
  }
})();