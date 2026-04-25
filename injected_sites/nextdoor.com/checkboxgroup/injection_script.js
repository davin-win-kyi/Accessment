(function(){
  var mount = document.querySelector('#nd-page-main') || document.querySelector('main') || document.body;
  if(!mount) return;

  var container = document.createElement('div');
  container.id = 'injected-checkboxgroup-violation';
  container.style.margin = '16px 0';

  var title = document.createElement('p');
  title.textContent = 'Choose your interests (no group wrapper):';
  container.appendChild(title);

  var options = ['Crime & Safety', 'Events', 'For Sale & Free'];
  options.forEach(function(txt, i){
    var id = 'inj_interest_' + i;
    var row = document.createElement('div');

    var cb = document.createElement('input');
    cb.type = 'checkbox';
    cb.name = 'nd_interests'; // same name across all checkboxes
    cb.id = id;

    var label = document.createElement('label');
    label.setAttribute('for', id);
    label.textContent = txt;

    row.appendChild(cb);
    row.appendChild(label);
    container.appendChild(row);
  });

  // Intentionally NOT wrapping in <fieldset> or role="group"
  mount.appendChild(container);
})();