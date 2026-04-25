(function(){
  // Create a container for the injected test content
  var container = document.createElement('section');
  container.id = 'axe-aria-toggle-name-defect';

  var title = document.createElement('h2');
  title.textContent = 'Injected Toggle Controls';
  container.appendChild(title);

  // Inject a switch missing an accessible name (no aria-label/aria-labelledby/title)
  var badSwitch = document.createElement('div');
  badSwitch.setAttribute('role', 'switch');
  badSwitch.setAttribute('aria-checked', 'true');
  // Empty spans to mimic visual on/off UI without contributing to the accessible name
  var offSpan = document.createElement('span');
  var onSpan = document.createElement('span');
  badSwitch.appendChild(offSpan);
  badSwitch.appendChild(onSpan);

  container.appendChild(badSwitch);

  // Place in main if available, otherwise append to body
  var target = document.querySelector('main') || document.body;
  target.appendChild(container);
})();