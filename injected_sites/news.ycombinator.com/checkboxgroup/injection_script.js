(function(){
  var container = document.createElement('div');
  container.id = 'a11y-checkboxgroup-defect';
  var form = document.createElement('form');
  form.id = 'hn-interests-form';
  form.setAttribute('action', '#');

  var intro = document.createElement('p');
  intro.textContent = 'Choose your interests:';
  form.appendChild(intro);

  var lbl1 = document.createElement('label');
  var cb1 = document.createElement('input');
  cb1.type = 'checkbox';
  cb1.name = 'interest';
  cb1.id = 'interest-tech';
  cb1.value = 'tech';
  lbl1.appendChild(cb1);
  lbl1.appendChild(document.createTextNode(' Tech'));

  var lbl2 = document.createElement('label');
  var cb2 = document.createElement('input');
  cb2.type = 'checkbox';
  cb2.name = 'interest';
  cb2.id = 'interest-science';
  cb2.value = 'science';
  lbl2.style.marginLeft = '12px';
  lbl2.appendChild(cb2);
  lbl2.appendChild(document.createTextNode(' Science'));

  var lbl3 = document.createElement('label');
  var cb3 = document.createElement('input');
  cb3.type = 'checkbox';
  cb3.name = 'interest';
  cb3.id = 'interest-art';
  cb3.value = 'art';
  lbl3.style.marginLeft = '12px';
  lbl3.appendChild(cb3);
  lbl3.appendChild(document.createTextNode(' Art'));

  // Intentionally NOT wrapping in fieldset/legend or role="group"
  form.appendChild(lbl1);
  form.appendChild(lbl2);
  form.appendChild(lbl3);
  container.appendChild(form);

  var target = document.querySelector('#hnmain');
  if (target && target.parentNode) {
    target.parentNode.insertBefore(container, target);
  } else if (document.body) {
    if (document.body.firstChild) {
      document.body.insertBefore(container, document.body.firstChild);
    } else {
      document.body.appendChild(container);
    }
  }
})();