(function(){
  if (document.getElementById('a11y-test-checkboxgroup')) return;
  var container = document.createElement('div');
  container.id = 'a11y-test-checkboxgroup';
  container.setAttribute('style','padding:16px;border:1px dashed #ccc;margin:16px 0;');

  var title = document.createElement('h2');
  title.textContent = 'Choose your newsletter topics';
  container.appendChild(title);

  var form = document.createElement('form');
  form.setAttribute('action', '#');
  form.className = 'a11y-bad-form';

  var options = [
    ['nl_opt1', 'Deals'],
    ['nl_opt2', 'New arrivals'],
    ['nl_opt3', 'Events']
  ];

  for (var i = 0; i < options.length; i++) {
    var wrap = document.createElement('div');
    var input = document.createElement('input');
    input.type = 'checkbox';
    input.name = 'newsletter_topics'; // same name across all checkboxes
    input.id = options[i][0];
    input.value = options[i][1].toLowerCase().replace(/\s+/g, '_');

    var label = document.createElement('label');
    label.setAttribute('for', options[i][0]);
    label.textContent = options[i][1];

    wrap.appendChild(input);
    wrap.appendChild(label);
    form.appendChild(wrap);
  }

  // Intentionally do NOT group with a fieldset/legend or role="group"
  container.appendChild(form);

  var target = document.querySelector('main') || document.body;
  target.insertBefore(container, target.firstChild);
})();