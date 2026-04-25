(() => {
  // Create a list container missing required listitem children
  const badList = document.createElement('div');
  badList.id = 'a11y-bad-list';
  badList.setAttribute('role', 'list');
  badList.setAttribute('aria-label', 'Top Categories');
  // Intentionally use generic divs without role="listitem"
  const item1 = document.createElement('div');
  item1.textContent = 'Trending';
  const item2 = document.createElement('div');
  item2.textContent = 'New Arrivals';
  badList.appendChild(item1);
  badList.appendChild(item2);

  // Insert near the top of body to avoid ancestors with aria-hidden="true"
  const ref = document.body.firstChild;
  document.body.insertBefore(badList, ref || null);
})();