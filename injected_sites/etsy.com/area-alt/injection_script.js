(function(){
  var container = document.createElement('div');
  container.id = 'axe-area-alt-inject';
  var img = document.createElement('img');
  img.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==');
  img.setAttribute('alt', 'Etsy promotional image map');
  img.setAttribute('width', '600');
  img.setAttribute('height', '200');
  img.setAttribute('usemap', '#etsyMap');

  var map = document.createElement('map');
  map.setAttribute('name', 'etsyMap');

  // Active areas without alternate text (no alt/aria-label/aria-labelledby)
  var area1 = document.createElement('area');
  area1.setAttribute('shape', 'rect');
  area1.setAttribute('coords', '0,0,300,100');
  area1.setAttribute('href', '/sale');

  var area2 = document.createElement('area');
  area2.setAttribute('shape', 'rect');
  area2.setAttribute('coords', '300,0,600,100');
  area2.setAttribute('href', '/gifts');

  map.appendChild(area1);
  map.appendChild(area2);

  container.appendChild(img);
  container.appendChild(map);
  document.body.appendChild(container);
})();