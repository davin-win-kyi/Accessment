(function(){
  var body = document.body || document.documentElement;
  var menu = document.createElement('div');
  menu.setAttribute('role', 'menu');
  menu.setAttribute('aria-label', 'Account actions');
  menu.id = 'injected-etsy-bad-menu';

  var link1 = document.createElement('a');
  link1.href = '#';
  link1.textContent = 'Profile';

  var link2 = document.createElement('a');
  link2.href = '#';
  link2.textContent = 'Orders';

  var btn = document.createElement('button');
  btn.textContent = 'Settings';

  menu.appendChild(link1);
  menu.appendChild(link2);
  menu.appendChild(btn);

  body.insertBefore(menu, body.firstChild);
})();