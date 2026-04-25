(function(){
  // Container to hold the injected test elements
  var holder = document.createElement('div');
  holder.id = 'injected-aria-command-name-defects';
  holder.style.padding = '8px';

  // ARIA button with an empty aria-label (fails: no accessible name)
  var badButton = document.createElement('div');
  badButton.id = 'bad-aria-button';
  badButton.setAttribute('role', 'button');
  badButton.setAttribute('aria-label', '');
  // Some visual size so it exists in layout but still no accessible name
  badButton.style.width = '40px';
  badButton.style.height = '24px';
  badButton.style.border = '1px solid #ccc';
  badButton.style.margin = '4px 0';

  // ARIA link with no name (no text, no aria-label/labelledby)
  var badLink = document.createElement('div');
  badLink.id = 'bad-aria-link';
  badLink.setAttribute('role', 'link');
  badLink.style.width = '40px';
  badLink.style.height = '16px';
  badLink.style.borderBottom = '1px solid #888';
  badLink.style.margin = '4px 0';

  holder.appendChild(badButton);
  holder.appendChild(badLink);
  document.body.appendChild(holder);
})();