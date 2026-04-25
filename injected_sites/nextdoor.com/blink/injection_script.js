(function(){
  var container = document.getElementById('nd-page-main') || document.body;
  var bl = document.createElement('blink');
  bl.id = 'nd-deprecated-blink';
  bl.textContent = 'Important: Neighborhood alert! Click to learn more.';
  bl.setAttribute('style','display:block;font-size:18px;color:#C90B11;margin:16px 0;');
  container.insertBefore(bl, container.firstChild || null);
})();