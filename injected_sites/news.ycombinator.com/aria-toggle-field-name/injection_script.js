(function(){
  var defectContainer = document.createElement('div');
  defectContainer.id = 'injected-aria-toggle-defect';

  var toggle = document.createElement('div');
  toggle.setAttribute('role', 'switch');
  toggle.setAttribute('aria-checked', 'true');
  // Reference a non-existent label to ensure no accessible name
  toggle.setAttribute('aria-labelledby', 'hn_nonexistent_label_id');
  // Add empty children to avoid deriving a name from text content
  toggle.appendChild(document.createElement('span'));
  toggle.appendChild(document.createElement('span'));

  defectContainer.appendChild(toggle);
  (document.body || document.documentElement).appendChild(defectContainer);
})();