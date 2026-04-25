(function(){
  // Remove landmark roles that would satisfy bypass
  var landmarkRoles = ['banner','navigation','main','contentinfo','complementary','region','search'];
  landmarkRoles.forEach(function(r){
    document.querySelectorAll('[role="'+r+'"]').forEach(function(el){
      el.removeAttribute('role');
    });
  });

  // Helper to replace an element with a div, preserving attributes except role
  function replaceWithDiv(el){
    var div = document.createElement('div');
    Array.from(el.attributes || []).forEach(function(attr){
      if (attr.name.toLowerCase() !== 'role') div.setAttribute(attr.name, attr.value);
    });
    while (el.firstChild) div.appendChild(el.firstChild);
    if (el.parentNode) el.parentNode.replaceChild(div, el);
  }

  // Replace semantic landmark elements with divs to remove landmarks
  document.querySelectorAll('header, nav, main, footer, aside, section, article').forEach(replaceWithDiv);

  // Remove internal skip links (anchors pointing to IDs)
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    if (a.parentNode) a.parentNode.removeChild(a);
  });

  // Demote all headings to spans to remove heading structure
  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(function(h){
    var span = document.createElement('span');
    Array.from(h.attributes || []).forEach(function(attr){
      if (attr.name.toLowerCase() !== 'role') span.setAttribute(attr.name, attr.value);
    });
    span.innerHTML = h.innerHTML;
    if (h.parentNode) h.parentNode.replaceChild(span, h);
  });
})();