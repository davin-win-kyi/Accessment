(function(){
  if (document.getElementById('axe-treeitem-name-inject')) return;
  var container = document.createElement('div');
  container.id = 'axe-treeitem-name-inject';
  var tree = document.createElement('ul');
  tree.setAttribute('role','tree');

  // Failing treeitem: no inner text, no label
  var ti1 = document.createElement('li');
  ti1.setAttribute('role','treeitem');
  ti1.id = 'treeitem-empty';

  // Failing treeitem: empty aria-label
  var ti2 = document.createElement('li');
  ti2.setAttribute('role','treeitem');
  ti2.id = 'treeitem-alempty';
  ti2.setAttribute('aria-label','');

  // Failing treeitem: aria-labelledby points to nonexistent id
  var ti3 = document.createElement('li');
  ti3.setAttribute('role','treeitem');
  ti3.id = 'treeitem-albmissing';
  ti3.setAttribute('aria-labelledby','nonexistent');

  tree.appendChild(ti1);
  tree.appendChild(ti2);
  tree.appendChild(ti3);
  container.appendChild(tree);
  document.body.appendChild(container);
})();