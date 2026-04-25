(function(){
  if (document.getElementById('injected-aria-hidden-focus')) return;
  var hidden = document.createElement('div');
  hidden.id = 'injected-aria-hidden-focus';
  hidden.setAttribute('aria-hidden', 'true');
  hidden.style.position = 'relative';
  hidden.style.padding = '8px';

  var link = document.createElement('a');
  link.href = '#';
  link.textContent = 'Hidden focusable link';
  link.id = 'hidden-focusable-link';

  hidden.appendChild(link);
  document.body.appendChild(hidden);
})();