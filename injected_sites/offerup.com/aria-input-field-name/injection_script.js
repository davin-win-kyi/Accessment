(function(){
  var container = document.getElementById('mainContent') || document.getElementById('page-content') || document.body;
  var slider = document.createElement('div');
  slider.id = 'injected-aria-slider-no-name';
  slider.setAttribute('role', 'slider');
  slider.setAttribute('aria-valuemin', '0');
  slider.setAttribute('aria-valuemax', '100');
  slider.setAttribute('aria-valuenow', '50');
  slider.tabIndex = 0; // keep it in the a11y tree
  slider.style.cssText = 'width:200px;height:20px;background:#eee;margin:16px;';
  container.appendChild(slider);
})();