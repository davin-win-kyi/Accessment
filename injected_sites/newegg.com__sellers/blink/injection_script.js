(function(){
  var target = document.body || document.documentElement;
  var banner = document.createElement('div');
  banner.id = 'injected-blink-banner';
  banner.setAttribute('role','banner');
  banner.style.cssText = 'padding:10px;background:#fffbcc;color:#d40000;font-weight:bold;text-align:center;font-size:16px;';

  var bl = document.createElement('blink');
  bl.id = 'axe-blink-defect';
  bl.textContent = 'Limited time seller promotion! Apply now — ends soon.';

  banner.appendChild(bl);
  if (target.firstChild) {
    target.insertBefore(banner, target.firstChild);
  } else {
    target.appendChild(banner);
  }
})();