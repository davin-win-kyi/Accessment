(function(){
  var container = document.createElement('div');
  container.id = 'axe-button-name-defect';

  var btn = document.createElement('button');
  btn.id = 'cp-empty-button';
  // Point to a non-existent label so the accessible name is empty
  btn.setAttribute('aria-labelledby', 'nonexistent');
  // Make it present and focusable without providing any discernible text
  btn.style.position = 'fixed';
  btn.style.bottom = '10px';
  btn.style.left = '10px';
  btn.style.width = '24px';
  btn.style.height = '24px';

  container.appendChild(btn);
  document.body.appendChild(container);
})();