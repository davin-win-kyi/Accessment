(function(){
  if (document.getElementById('a11y-accesskey-dup')) return;
  var container = document.createElement('div');
  container.id = 'a11y-accesskey-dup';
  container.style.margin = '10px 0';

  var a1 = document.createElement('a');
  a1.href = '#';
  a1.textContent = 'Go to Help';
  a1.setAttribute('accesskey', 'g');

  var sep = document.createTextNode(' | ');

  var a2 = document.createElement('a');
  a2.href = '#';
  a2.textContent = 'Get Updates';
  a2.setAttribute('accesskey', 'g');

  container.appendChild(a1);
  container.appendChild(sep);
  container.appendChild(a2);

  (document.getElementById('footer-outer') || document.body).appendChild(container);
})();