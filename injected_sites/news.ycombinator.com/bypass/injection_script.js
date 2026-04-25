(function(){
  // Remove any internal skip links (anchors pointing to in-page targets)
  document.querySelectorAll('a[href^="#"]').forEach(function(a){ a.remove(); });

  // Downgrade all headings to non-heading elements to eliminate heading-based bypass
  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(function(h){
    var div = document.createElement('div');
    Array.from(h.attributes).forEach(function(attr){
      if (attr.name.toLowerCase() !== 'role' && attr.name.toLowerCase() !== 'aria-level') {
        div.setAttribute(attr.name, attr.value);
      }
    });
    while (h.firstChild) div.appendChild(h.firstChild);
    h.parentNode && h.parentNode.replaceChild(div, h);
  });

  // Replace native landmark elements with divs to remove landmark regions
  ['main','header','nav','footer','aside','section','article'].forEach(function(tag){
    Array.from(document.getElementsByTagName(tag)).forEach(function(el){
      var div = document.createElement('div');
      Array.from(el.attributes).forEach(function(attr){
        if (attr.name.toLowerCase() !== 'role') {
          div.setAttribute(attr.name, attr.value);
        }
      });
      while (el.firstChild) div.appendChild(el.firstChild);
      el.parentNode && el.parentNode.replaceChild(div, el);
    });
  });

  // Strip ARIA landmark roles from any element
  ['banner','complementary','contentinfo','form','main','navigation','region','search'].forEach(function(role){
    document.querySelectorAll('[role="'+role+'"]').forEach(function(el){
      el.removeAttribute('role');
    });
  });
})();