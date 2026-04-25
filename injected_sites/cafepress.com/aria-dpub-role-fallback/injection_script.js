(function(){
  var t = document.createElement('table');
  t.id = 'dpub-bad-example';
  // Apply a DPUB role to a non-allowed element type (table is not sectioning, grouping, heading, phrasing, aside, or body)
  t.setAttribute('role', 'doc-index');
  var caption = document.createElement('caption');
  caption.textContent = 'Site Index';
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = 'A – Accessories';
  tr.appendChild(td);
  t.appendChild(caption);
  t.appendChild(tr);
  document.body.appendChild(t);
})();