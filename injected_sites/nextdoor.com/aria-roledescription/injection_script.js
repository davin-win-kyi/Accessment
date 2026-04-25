(function(){
  var mount = document.getElementById('nd-page-main') || document.body;
  var container = document.createElement('section');
  container.id = 'injected-aria-roledescription-violations';
  container.style.padding = '16px';
  container.style.background = 'transparent';

  var title = document.createElement('h2');
  title.textContent = 'Neighborhood highlights';
  container.appendChild(title);

  // Violation 1: aria-roledescription used on a div without any implicit or explicit role
  var badDiv = document.createElement('div');
  badDiv.setAttribute('aria-roledescription', 'custom panel');
  badDiv.textContent = 'Injected content block (should not use aria-roledescription on div).';
  container.appendChild(badDiv);

  // Violation 2: aria-roledescription used on a p without any implicit or explicit role
  var badP = document.createElement('p');
  badP.setAttribute('aria-roledescription', 'descriptive text');
  badP.textContent = 'Injected paragraph (should not use aria-roledescription on p).';
  container.appendChild(badP);

  mount.appendChild(container);
})();