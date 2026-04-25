(function(){
  var badP = document.createElement('p');
  badP.id = 'aria-roledescription-fail';
  badP.setAttribute('aria-roledescription', 'promotional paragraph');
  badP.textContent = 'Etsy deals and promotions';
  document.body.insertBefore(badP, document.body.firstChild || null);
})();