(function(){
  var badDiv = document.createElement('div');
  badDiv.id = 'aria-roledescription-fail';
  badDiv.setAttribute('aria-roledescription', 'custom box');
  badDiv.textContent = 'Accessibility test: div with aria-roledescription but no role.';
  document.body.appendChild(badDiv);
})();