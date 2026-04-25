(function(){
  var mount = document.getElementById('main') || document.body;
  var wrapper = document.createElement('div');
  wrapper.id = 'aria-input-field-name-inject';
  wrapper.style.margin = '16px';

  // Create a visually labeled ARIA textbox with no programmatic accessible name
  var label = document.createElement('label');
  label.textContent = 'First name'; // Visible text only; not programmatically associated with ARIA widgets on div

  var textbox = document.createElement('div');
  textbox.setAttribute('role', 'textbox');
  textbox.setAttribute('tabindex', '0');
  textbox.setAttribute('contenteditable', 'true');
  textbox.style.display = 'inline-block';
  textbox.style.minWidth = '200px';
  textbox.style.minHeight = '24px';
  textbox.style.border = '1px solid #ccc';
  textbox.style.padding = '4px';

  // Append ARIA textbox inside label (implicit labeling not supported for div roles)
  label.appendChild(document.createTextNode(' '));
  label.appendChild(textbox);

  wrapper.appendChild(label);
  mount.appendChild(wrapper);
})();