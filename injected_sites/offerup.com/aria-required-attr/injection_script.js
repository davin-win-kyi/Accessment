(function(){
  var container = document.querySelector('main') || document.body;
  var wrapper = document.createElement('div');
  wrapper.id = 'injected-aria-required-attr-defect';
  wrapper.style.margin = '16px';

  var heading = document.createElement('h2');
  heading.textContent = 'Preferences';
  heading.style.fontSize = '18px';

  var checkbox = document.createElement('div');
  checkbox.setAttribute('role', 'checkbox');
  checkbox.setAttribute('tabindex', '0');
  // Intentionally omit aria-checked to violate aria-required-attr
  checkbox.textContent = ' Receive email notifications';
  checkbox.style.padding = '8px';
  checkbox.style.border = '1px solid #ccc';
  checkbox.style.display = 'inline-block';
  checkbox.style.borderRadius = '4px';

  wrapper.appendChild(heading);
  wrapper.appendChild(checkbox);
  container.appendChild(wrapper);
})();