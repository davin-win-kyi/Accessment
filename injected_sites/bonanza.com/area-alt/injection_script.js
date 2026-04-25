(function(){
  // Create an image that uses a client-side image map
  var img = document.createElement('img');
  img.alt = 'Promotional banner with clickable regions';
  img.useMap = '#defectiveMap';
  img.width = 600;
  img.height = 120;
  // Inline SVG to avoid external fetches
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="600" height="120"><rect width="600" height="120" fill="#e0e0e0"/><text x="20" y="70" font-size="24" fill="#333">Clickable areas (one missing alt)</text></svg>';
  img.src = 'data:image/svg+xml;charset=utf-8,' + encodeURIComponent(svg);

  // Create the map with at least one active area missing alt/aria
  var map = document.createElement('map');
  map.name = 'defectiveMap';
  map.id = 'defectiveMap';

  // Defective area: active (has href) but missing any alternate text attributes
  var badArea = document.createElement('area');
  badArea.shape = 'rect';
  badArea.coords = '10,10,290,110';
  badArea.href = '/items/search?q%5Bfilter_category_id%5D=159136';
  // Intentionally no alt, aria-label, or aria-labelledby

  // Add a second, valid area to ensure the map is recognized but only the first triggers the rule
  var goodArea = document.createElement('area');
  goodArea.shape = 'rect';
  goodArea.coords = '310,10,590,110';
  goodArea.href = '/coupons';
  goodArea.alt = 'View coupons';

  map.appendChild(badArea);
  map.appendChild(goodArea);

  // Insert into the document
  var container = document.querySelector('main') || document.body;
  container.appendChild(img);
  container.appendChild(map);
})();