(function(){
  var parent = document.getElementById('mainContent') || document.body;
  var container = document.createElement('div');
  container.id = 'a11y-checkboxgroup-demo';
  container.style.margin = '16px';

  var title = document.createElement('h2');
  title.textContent = 'Choose pickup options';
  container.appendChild(title);

  var options = [
    { id: 'pickup_opt1', text: 'Porch pickup' },
    { id: 'pickup_opt2', text: 'Meet at public place' },
    { id: 'pickup_opt3', text: 'Local delivery' }
  ];

  options.forEach(function(opt){
    var wrapper = document.createElement('div');

    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.name = 'pickupOption'; // same name across checkboxes, but no group
    cb.id = opt.id;

    var label = document.createElement('label');
    label.htmlFor = opt.id;
    label.textContent = opt.text;

    wrapper.appendChild(cb);
    wrapper.appendChild(label);
    container.appendChild(wrapper);
  });

  // Ensure no semantic grouping is applied
  container.removeAttribute('role');
  container.removeAttribute('aria-label');
  container.removeAttribute('aria-labelledby');

  parent.appendChild(container);
})();