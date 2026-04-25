(function(){
  // Insert a DPUB role on an element without an implicit fallback role (div)
  var badDpub = document.createElement('div');
  badDpub.id = 'bad-dpub-role';
  badDpub.setAttribute('role', 'doc-chapter');
  badDpub.textContent = 'Chapter 1: Unique Finds on Etsy';
  document.body.appendChild(badDpub);
})();