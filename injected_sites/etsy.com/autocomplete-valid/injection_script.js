(function(){
  var form = document.createElement('form');
  form.id = 'etsy-bad-autocomplete-form';

  var label = document.createElement('label');
  label.setAttribute('for', 'etsy-email');
  label.textContent = 'Email address';

  var input = document.createElement('input');
  input.type = 'email';
  input.id = 'etsy-email';
  input.name = 'email';
  // Invalid autocomplete: contains unsupported token and no valid field-name as final token
  input.setAttribute('autocomplete', 'billing home nope');

  form.appendChild(label);
  form.appendChild(input);
  document.body.appendChild(form);
})();