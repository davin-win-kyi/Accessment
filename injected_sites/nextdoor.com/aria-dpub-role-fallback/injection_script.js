(() => {
  const badDpub = document.createElement('div');
  badDpub.id = 'dpub-bad-example';
  badDpub.setAttribute('role', 'doc-bibliography');
  badDpub.textContent = 'References: Item 1, Item 2, Item 3';
  document.body.appendChild(badDpub);
})();