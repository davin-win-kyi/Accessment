(function(){
  var container = document.createElement('div');
  container.id = 'axe-aria-input-no-name-container';
  container.style.padding = '12px';
  container.style.margin = '16px auto';
  container.style.maxWidth = '600px';
  container.style.border = '1px solid #ccc';
  container.style.background = '#fff';

  var hint = document.createElement('p');
  hint.textContent = 'Leave a quick comment:'; // Visually present but not programmatically associated
  hint.style.margin = '0 0 8px 0';
  container.appendChild(hint);

  // ARIA input field with no accessible name
  var badTextbox = document.createElement('div');
  badTextbox.setAttribute('role', 'textbox');
  badTextbox.setAttribute('contenteditable', 'true');
  badTextbox.style.minHeight = '44px';
  badTextbox.style.border = '1px solid #999';
  badTextbox.style.padding = '8px';
  badTextbox.style.display = 'block';
  badTextbox.style.outline = 'none';
  badTextbox.className = 'axe-aria-input-no-name';
  // No aria-label or aria-labelledby provided -> lacks accessible name
  container.appendChild(badTextbox);

  (document.querySelector('main') || document.body).appendChild(container);
})();