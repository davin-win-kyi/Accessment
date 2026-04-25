(function(){
  var container = document.createElement('div');
  container.id = 'a11y-area-alt-demo';
  container.style.margin = '16px 0';

  // Create an image that references a client-side image map
  var img = document.createElement('img');
  img.setAttribute('usemap', '#ndmap');
  img.setAttribute('alt', 'Neighborhood overview');
  img.width = 150;
  img.height = 150;
  // 1x1 transparent GIF to avoid external fetches
  img.src = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

  // Create the map with active <area> elements lacking alternate text
  var map = document.createElement('map');
  map.name = 'ndmap';
  map.id = 'ndmap';

  var area1 = document.createElement('area');
  area1.shape = 'rect';
  area1.coords = '0,0,75,75';
  area1.href = '/about_us/';
  // Intentionally no alt/aria-label/aria-labelledby

  var area2 = document.createElement('area');
  area2.shape = 'circle';
  area2.coords = '110,110,30';
  area2.href = '/join';
  // Intentionally no alt/aria-label/aria-labelledby

  map.appendChild(area1);
  map.appendChild(area2);

  container.appendChild(img);
  container.appendChild(map);

  var insertPoint = document.querySelector('main') || document.body;
  if (insertPoint.firstChild) {
    insertPoint.insertBefore(container, insertPoint.firstChild);
  } else {
    insertPoint.appendChild(container);
  }
})();