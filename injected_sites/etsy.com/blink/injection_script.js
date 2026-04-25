(function(){
  if (!document || !document.body) return;
  var b = document.createElement('blink');
  b.id = 'a11y-blink-defect';
  b.textContent = 'Limited-time Etsy deal!';
  document.body.insertBefore(b, document.body.firstChild || null);
})();