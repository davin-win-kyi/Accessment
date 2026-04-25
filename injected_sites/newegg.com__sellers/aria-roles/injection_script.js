(function(){
  var bad = document.createElement('div');
  bad.id = 'invalid-aria-role-example';
  bad.setAttribute('role', 'buton'); // intentionally misspelled 'button' to be invalid
  bad.textContent = 'Apply Now';
  bad.style.padding = '8px';
  bad.style.margin = '10px';
  bad.style.background = '#ffd9d9';
  bad.style.display = 'block';
  if (document.body.firstChild) {
    document.body.insertBefore(bad, document.body.firstChild);
  } else {
    document.body.appendChild(bad);
  }
})();