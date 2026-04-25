(function(){
  var map = document.createElement('map');
  var mapName = 'a11yMapNoAlt';
  map.setAttribute('name', mapName);
  map.id = mapName;

  // Active area without any alternative text (accessibility defect)
  var badArea = document.createElement('area');
  badArea.setAttribute('shape', 'rect');
  badArea.setAttribute('coords', '0,0,100,100');
  badArea.setAttribute('href', '#target-no-alt');
  // intentionally no alt/aria-label/aria-labelledby

  // A second area with proper alt to ensure the map is valid but still triggers on the bad one
  var goodArea = document.createElement('area');
  goodArea.setAttribute('shape', 'rect');
  goodArea.setAttribute('coords', '100,0,200,100');
  goodArea.setAttribute('href', '#target-with-alt');
  goodArea.setAttribute('alt', 'Learn more');

  map.appendChild(badArea);
  map.appendChild(goodArea);

  var img = document.createElement('img');
  img.setAttribute('src', 'data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==');
  img.setAttribute('usemap', '#' + mapName);
  img.setAttribute('alt', 'Promotional image map');
  img.setAttribute('width', '200');
  img.setAttribute('height', '100');

  var container = document.createElement('div');
  container.id = 'axe-fixture-area-alt';
  container.style.position = 'absolute';
  container.style.left = '-9999px';
  container.appendChild(img);
  container.appendChild(map);

  (document.body || document.documentElement).appendChild(container);
})();