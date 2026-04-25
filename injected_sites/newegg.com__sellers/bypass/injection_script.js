(function(){
  function replaceTag(el, newTag){
    if(!el || !el.parentNode) return null;
    var ne = document.createElement(newTag);
    // copy attributes
    if (el.attributes) {
      for (var i=0; i<el.attributes.length; i++) {
        var attr = el.attributes[i];
        if (attr && attr.name) ne.setAttribute(attr.name, attr.value);
      }
    }
    ne.innerHTML = el.innerHTML;
    el.parentNode.replaceChild(ne, el);
    return ne;
  }

  // 1) Remove/neutralize skip links
  try {
    var anchors = Array.prototype.slice.call(document.querySelectorAll('a[href^="#"]'));
    anchors.forEach(function(a){
      var cls = (a.className || '');
      var txt = (a.textContent || '');
      if (/skip/i.test(cls) || /skip/i.test(txt) || a.classList.contains('nectar-skip-to-content')) {
        if (a.parentNode) a.parentNode.removeChild(a);
      }
    });
  } catch(e) {}

  // 2) Remove all headings semantics
  try {
    Array.prototype.slice.call(document.querySelectorAll('h1,h2,h3,h4,h5,h6')).forEach(function(h){
      replaceTag(h, 'div');
    });
    Array.prototype.slice.call(document.querySelectorAll('[role="heading"]')).forEach(function(el){
      el.removeAttribute('role');
      el.removeAttribute('aria-level');
    });
  } catch(e) {}

  // 3) Remove/neutralize landmark regions
  try {
    // Remove ARIA landmark roles
    Array.prototype.slice.call(document.querySelectorAll('[role="main"], [role="navigation"], [role="region"], [role="banner"], [role="contentinfo"], [role="search"], [role="complementary"]')).forEach(function(el){
      el.removeAttribute('role');
      el.removeAttribute('aria-label');
      el.removeAttribute('aria-labelledby');
    });

    // Replace native landmark elements with divs to strip native semantics
    Array.prototype.slice.call(document.querySelectorAll('header, nav, main, aside, section, footer')).forEach(function(el){
      replaceTag(el, 'div');
    });
  } catch(e) {}
})();