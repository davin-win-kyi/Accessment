(function(){
  // Create a section to host the defective ARIA input
  var container = document.querySelector('main') || document.body;
  var wrapper = document.createElement('section');
  wrapper.id = 'aria-input-field-name-defect';

  // Add a visible heading that does NOT label the control
  var heading = document.createElement('h2');
  heading.textContent = 'Neighborhood selector';
  wrapper.appendChild(heading);

  // Create a role-based input (combobox) with no accessible name
  var badCombobox = document.createElement('div');
  badCombobox.id = 'bad-combobox-no-name';
  badCombobox.setAttribute('role', 'combobox');
  badCombobox.setAttribute('tabindex', '0');
  // Visual text that does not provide an accessible name for this role
  badCombobox.textContent = 'Select your neighborhood';

  wrapper.appendChild(badCombobox);
  if (container.firstChild) {
    container.insertBefore(wrapper, container.firstChild);
  } else {
    container.appendChild(wrapper);
  }
})();