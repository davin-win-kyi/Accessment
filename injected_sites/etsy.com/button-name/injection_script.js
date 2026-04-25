(function(){
  // Insert a button without any accessible name
  var btn = document.createElement('button');
  btn.type = 'button';
  btn.id = 'unnamed-action';
  // No textContent, no aria-label, no aria-labelledby, no title
  document.body.appendChild(btn);
})();