(function(){
  // Create an element using a DPUB-ARIA role on an unsupported host element (embedded content)
  var bad = document.createElement('img');
  bad.id = 'dpub-fallback-violation';
  bad.setAttribute('role', 'doc-chapter'); // DPUB role without appropriate implicit fallback on <img>
  bad.setAttribute('alt', 'Decorative image used improperly with doc-chapter role');
  bad.src = 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=='; // 1x1 gif to avoid external fetch
  bad.style.display = 'block';

  var target = document.querySelector('main') || document.body;
  target.appendChild(bad);
})();