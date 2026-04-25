(function(){
  // Remove skip links (common bypass mechanism)
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    var t = (a.textContent || '').toLowerCase();
    if (t.includes('skip')) {
      a.remove();
    }
  });
  // Also remove any explicit SkipToContent components
  document.querySelectorAll('[class*="SkipToContent"]').forEach(function(el){ el.remove(); });

  // Replace all <main> landmarks with non-landmark <div>
  Array.from(document.getElementsByTagName('main')).forEach(function(main){
    var div = document.createElement('div');
    // Copy non-semantic attributes to preserve layout
    Array.from(main.attributes).forEach(function(attr){ if (attr.name.toLowerCase() !== 'role') div.setAttribute(attr.name, attr.value); });
    while (main.firstChild) div.appendChild(main.firstChild);
    if (main.parentNode) main.parentNode.replaceChild(div, main);
  });

  // Demote all headings to spans to remove heading-based bypass
  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(function(h){
    var span = document.createElement('span');
    Array.from(h.attributes).forEach(function(attr){ span.setAttribute(attr.name, attr.value); });
    while (h.firstChild) span.appendChild(h.firstChild);
    if (h.parentNode) h.parentNode.replaceChild(span, h);
  });

  // Strip remaining landmark roles or convert structural landmarks to divs
  document.querySelectorAll('[role="main"],[role="navigation"],[role="banner"],[role="contentinfo"],header,footer,nav').forEach(function(el){
    var tag = el.tagName;
    if (tag === 'HEADER' || tag === 'FOOTER' || tag === 'NAV') {
      var div = document.createElement('div');
      Array.from(el.attributes).forEach(function(attr){ if (attr.name.toLowerCase() !== 'role') div.setAttribute(attr.name, attr.value); });
      while (el.firstChild) div.appendChild(el.firstChild);
      if (el.parentNode) el.parentNode.replaceChild(div, el);
    } else if (el.hasAttribute('role')) {
      el.removeAttribute('role');
    }
  });
})();