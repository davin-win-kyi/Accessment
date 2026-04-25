(function(){
  var container = document.createElement('div');
  container.id = 'aria-hidden-focus-violation';
  container.setAttribute('aria-hidden', 'true');
  // Make sure it renders on the page so the focusables are clearly part of the DOM
  container.style.position = 'fixed';
  container.style.bottom = '12px';
  container.style.left = '12px';
  container.style.padding = '8px';
  container.style.background = '#f5f5f5';
  container.style.border = '1px solid #ccc';

  var info = document.createElement('p');
  info.textContent = 'ARIA-hidden region containing focusable elements:';

  var btn = document.createElement('button');
  btn.textContent = 'Focusable Button';

  var link = document.createElement('a');
  link.href = '#nd-page-main';
  link.textContent = 'Focusable Link';
  link.style.marginLeft = '8px';

  container.appendChild(info);
  container.appendChild(btn);
  container.appendChild(link);

  document.body.appendChild(container);
})();