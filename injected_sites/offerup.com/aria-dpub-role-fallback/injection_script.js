(function(){
  // Create a table element (tabular content is not among allowed host types for DPUB roles)
  var tbl = document.createElement('table');
  tbl.id = 'bad-dpub-dpub-table';
  tbl.setAttribute('role', 'doc-chapter'); // Apply unsupported DPUB role without implicit fallback
  tbl.style.margin = '16px';
  tbl.innerHTML = '<tr><th>Chapter</th></tr><tr><td>Content</td></tr>';
  document.body.appendChild(tbl);
})();