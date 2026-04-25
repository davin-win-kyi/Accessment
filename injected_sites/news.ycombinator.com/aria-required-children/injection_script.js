(function(){
  var container = document.createElement('div');
  container.id = 'hn-faux-tabs';
  container.setAttribute('role','tablist');
  container.setAttribute('aria-label','Sections');
  container.style.padding = '6px';
  container.style.background = '#ffd';
  container.style.margin = '8px 0';

  var labels = ['Top', 'New', 'Comments'];
  labels.forEach(function(label){
    var btn = document.createElement('button');
    btn.textContent = label;
    btn.setAttribute('role','button'); // intentionally not role="tab"
    btn.style.marginRight = '6px';
    container.appendChild(btn);
  });

  document.body.appendChild(container);
})();