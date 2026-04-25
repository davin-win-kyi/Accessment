(function(){
  var container = document.body || document.documentElement;

  // Create a map with active areas missing alt text
  var map = document.createElement('map');
  map.setAttribute('name', 'hnmap_bad');

  var area1 = document.createElement('area');
  area1.setAttribute('shape', 'rect');
  area1.setAttribute('coords', '10,10,90,40');
  area1.setAttribute('href', 'https://news.ycombinator.com/newest');
  // Intentionally no alt/aria-label/aria-labelledby

  var area2 = document.createElement('area');
  area2.setAttribute('shape', 'circle');
  area2.setAttribute('coords', '150,60,20');
  area2.setAttribute('href', 'https://news.ycombinator.com/jobs');
  // Intentionally no alt/aria-label/aria-labelledby

  map.appendChild(area1);
  map.appendChild(area2);

  // Create image that references the map
  var img = document.createElement('img');
  img.setAttribute('src', 'y18.svg');
  img.setAttribute('alt', 'Hacker News image map');
  img.setAttribute('width', '200');
  img.setAttribute('height', '100');
  img.setAttribute('usemap', '#hnmap_bad');

  // Insert into the document (map first for robustness)
  container.appendChild(map);
  container.appendChild(img);
})();