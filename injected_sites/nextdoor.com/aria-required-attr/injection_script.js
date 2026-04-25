(function(){
  if (!document.getElementById('a11y-defect-heading')) {
    var defect = document.createElement('div');
    defect.id = 'a11y-defect-heading';
    defect.setAttribute('role', 'heading');
    // Missing required aria-level attribute to trigger aria-required-attr
    defect.textContent = 'Nextdoor: Accessibility test heading (missing aria-level)';
    document.body.appendChild(defect);
  }
})();