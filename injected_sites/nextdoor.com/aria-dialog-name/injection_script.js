(function(){
  var d = document.createElement('div');
  d.setAttribute('role','dialog');
  d.id = 'albmissing';
  // Intentionally reference a non-existent label to ensure no accessible name
  d.setAttribute('aria-labelledby','nonexistent');
  // Add some arbitrary content that does not provide a name
  var inner = document.createElement('div');
  inner.textContent = 'Promotional content goes here';
  d.appendChild(inner);
  document.body.appendChild(d);
})();