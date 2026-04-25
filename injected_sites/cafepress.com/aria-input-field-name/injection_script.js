(function(){
  // Create an ARIA input widget lacking an accessible name
  var badCombo = document.createElement('div');
  badCombo.id = 'axe-aria-input-field-name-fail';
  badCombo.setAttribute('role','combobox');
  badCombo.setAttribute('aria-expanded','false');
  // No aria-label or aria-labelledby provided (intentional)
  badCombo.textContent = 'England';
  badCombo.style.margin = '16px';
  badCombo.style.padding = '8px';
  badCombo.style.border = '1px solid #ccc';
  badCombo.style.background = '#fff';

  // Ensure it's not inside any aria-hidden container
  document.body.appendChild(badCombo);
})();