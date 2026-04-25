(function(){
  var container = document.querySelector('main') || document.body;
  if (!container) return;

  var tablist = document.createElement('div');
  tablist.id = 'injected-bad-tablist';
  tablist.setAttribute('role', 'tablist');
  tablist.setAttribute('aria-label', 'Featured sections');

  // Intentionally add interactive children without role="tab"
  ['Featured', 'Trending', 'Sale'].forEach(function(label){
    var link = document.createElement('a');
    link.href = '#';
    link.textContent = label;
    // No role="tab" on purpose to violate aria-required-children
    tablist.appendChild(link);
  });

  container.appendChild(tablist);
})();