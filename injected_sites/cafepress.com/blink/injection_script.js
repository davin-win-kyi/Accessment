(function(){
  var body = document.body || (function(){ var b = document.createElement('body'); document.documentElement.appendChild(b); return b; })();
  var container = document.createElement('div');
  container.id = 'a11y-blink-container';
  container.setAttribute('role', 'region');
  container.setAttribute('aria-label', 'Promotional notice');

  var blinkEl = document.createElement('blink');
  blinkEl.id = 'injected-blink';
  blinkEl.textContent = 'Flash sale: 30% OFF today only!';

  container.appendChild(blinkEl);
  body.insertBefore(container, body.firstChild || null);
})();