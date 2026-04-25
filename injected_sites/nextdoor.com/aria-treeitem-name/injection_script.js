(() => {
  const tree = document.createElement('div');
  tree.setAttribute('role', 'tree');
  tree.setAttribute('aria-label', 'Sample tree');
  tree.style.margin = '16px';

  const badTreeItem = document.createElement('div');
  badTreeItem.setAttribute('role', 'treeitem');
  // Empty aria-label ensures missing accessible name
  badTreeItem.setAttribute('aria-label', '');
  // Make it focusable and present in the accessibility tree
  badTreeItem.setAttribute('tabindex', '0');
  badTreeItem.style.display = 'block';
  badTreeItem.style.width = '1px';
  badTreeItem.style.height = '1px';

  tree.appendChild(badTreeItem);
  document.body.appendChild(tree);
})();