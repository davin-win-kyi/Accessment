(function(){
  var t = document.createElement('div');
  t.id = 'axe-bad-tooltip';
  t.setAttribute('role','tooltip');
  // Reference a non-existent label to ensure no accessible name is computed
  t.setAttribute('aria-labelledby','nonexistent-tooltip-label');
  // Intentionally no innerText, no aria-label, and no title
  // Ensure it renders and is not hidden
  t.style.position = 'fixed';
  t.style.bottom = '10px';
  t.style.right = '10px';
  t.style.width = '160px';
  t.style.height = '40px';
  t.style.background = '#296E70';
  t.style.padding = '6px';
  t.style.boxSizing = 'border-box';
  document.body.appendChild(t);
})();