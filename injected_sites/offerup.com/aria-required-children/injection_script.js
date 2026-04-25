(function(){
  var container = document.createElement('div');
  container.id = 'injected-tablist-without-tabs';
  container.setAttribute('role','tablist');
  container.setAttribute('aria-label','Injected Tablist Without Tabs');

  // Add non-tab children to ensure required role="tab" is missing
  var b1 = document.createElement('button');
  b1.textContent = 'Not a tab 1';
  var b2 = document.createElement('button');
  b2.textContent = 'Not a tab 2';

  container.appendChild(b1);
  container.appendChild(b2);

  (document.getElementById('mainContent') || document.body).appendChild(container);
})();