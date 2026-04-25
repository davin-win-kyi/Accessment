(function(){
  // Neutralize landmark regions so no landmarks are exposed to AT
  var landmarkSelectors = [
    'header','nav','main','aside','footer',
    '[role="banner"]','[role="navigation"]','[role="main"]','[role="contentinfo"]','[role="region"]','[role="complementary"]'
  ];
  document.querySelectorAll(landmarkSelectors.join(',')).forEach(function(el){
    el.setAttribute('role','none');
    el.setAttribute('aria-hidden','true');
  });

  // Neutralize all headings so they are not exposed as headings
  document.querySelectorAll('h1,h2,h3,h4,h5,h6,[role="heading"]').forEach(function(h){
    h.setAttribute('role','none');
    h.setAttribute('aria-hidden','true');
  });

  // Remove any internal skip links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){
    if (a && a.parentNode) a.parentNode.removeChild(a);
  });
})();