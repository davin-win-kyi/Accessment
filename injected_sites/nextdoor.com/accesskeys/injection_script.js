(function(){
  var targets = [];
  var selectors = ['#google-button', '#apple-button', '[data-testid="header-log-in"]'];
  selectors.forEach(function(s){
    var el = document.querySelector(s);
    if (el) targets.push(el);
  });
  // Fallback: create extra interactive elements if fewer than 2 were found
  while (targets.length < 2) {
    var btn = document.createElement('button');
    btn.type = 'button';
    btn.textContent = 'Extra shortcut';
    document.body.appendChild(btn);
    targets.push(btn);
  }
  // Assign the same accesskey to multiple elements to create duplicates
  targets.forEach(function(el){
    try { el.setAttribute('accesskey', 'n'); } catch(e) {}
  });
})();