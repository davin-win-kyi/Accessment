(function(){
  var body = document.body || document.documentElement;
  if (!body) return;

  // Create a visible container not hidden by aria-hidden ancestors
  var container = document.createElement('div');
  container.id = 'axe-area-alt-defect';
  container.style.padding = '8px';

  // Minimal inline image (1x1 gif) to avoid external fetches
  var img = document.createElement('img');
  img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==';
  img.width = 200;
  img.height = 100;
  img.alt = 'Demo image map';
  img.setAttribute('usemap', '#hotspots');

  // Define the image map
  var map = document.createElement('map');
  map.name = 'hotspots';

  // Create active <area> elements WITHOUT alt/aria labels (accessibility defect)
  var area1 = document.createElement('area');
  area1.shape = 'rect';
  area1.coords = '10,10,90,45';
  area1.href = '#section1';

  var area2 = document.createElement('area');
  area2.shape = 'rect';
  area2.coords = '110,10,190,45';
  area2.href = '#section2';

  // Append areas to map
  map.appendChild(area1);
  map.appendChild(area2);

  // Assemble and insert into DOM early to avoid aria-hidden containers on the page
  container.appendChild(img);
  container.appendChild(map);
  body.insertBefore(container, body.firstChild);
})();