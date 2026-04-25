(function(){
  // Create an element with a role that requires a missing ARIA attribute
  var defect = document.createElement('div');
  defect.id = 'aria-required-attr-missing';
  defect.setAttribute('role', 'checkbox');
  // Intentionally omit the required aria-checked attribute
  defect.setAttribute('tabindex', '0');
  defect.textContent = 'Subscribe to updates';
  document.body.appendChild(defect);
})();