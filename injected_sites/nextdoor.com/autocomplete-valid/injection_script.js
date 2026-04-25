(() => {
  const container = document.createElement('div');
  container.id = 'a11y-inject-autocomplete-invalid';
  container.style.margin = '24px';

  const heading = document.createElement('h2');
  heading.textContent = 'Quick contact';
  heading.style.fontSize = '1.25rem';
  heading.style.marginBottom = '8px';

  const form = document.createElement('form');
  form.setAttribute('aria-label', 'Contact form');

  const label = document.createElement('label');
  label.setAttribute('for', 'bad-phone');
  label.textContent = 'Phone number';
  label.style.display = 'block';
  label.style.marginBottom = '4px';

  const input = document.createElement('input');
  input.type = 'tel';
  input.id = 'bad-phone';
  input.name = 'phone';
  input.placeholder = 'e.g., (555) 123-4567';
  input.style.padding = '8px';
  input.style.border = '1px solid #ccc';
  input.style.borderRadius = '4px';
  input.style.maxWidth = '320px';
  input.style.display = 'block';

  // Intentionally invalid autocomplete value to trigger axe-core autocomplete-valid
  // Spec-compliant value would be "tel"; using "phone" is invalid
  input.setAttribute('autocomplete', 'phone');

  form.appendChild(label);
  form.appendChild(input);
  container.appendChild(heading);
  container.appendChild(form);

  const mount = document.getElementById('nd-page-main') || document.body;
  mount.appendChild(container);
})();