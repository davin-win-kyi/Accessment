(function(){
  // Create a standalone container not within aria-hidden regions
  var host = document.createElement('div');
  host.id = 'injected-aria-tree-host';
  host.style.position = 'static';

  // Optional tree container for semantics
  var tree = document.createElement('div');
  tree.setAttribute('role', 'tree');
  tree.style.margin = '0';

  // Failing treeitem: no accessible name (aria-labelledby points to a non-existent id)
  var badTreeItem = document.createElement('div');
  badTreeItem.setAttribute('role', 'treeitem');
  badTreeItem.setAttribute('aria-labelledby', 'nonexistent_label_' + Date.now());
  // Ensure there's no fallback text or title
  badTreeItem.textContent = '';

  tree.appendChild(badTreeItem);
  host.appendChild(tree);
  document.body.appendChild(host);
})();