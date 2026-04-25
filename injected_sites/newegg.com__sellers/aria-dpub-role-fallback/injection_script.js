(function(){
  // Insert a DPUB role on an element without an appropriate implicit fallback role
  // Using a <table> (not sectioning, grouping, heading, phrasing, aside, or body)
  var bad = document.createElement('table');
  bad.id = 'dpub-bad-table';
  bad.setAttribute('role','doc-footnote');
  var cap = document.createElement('caption');
  cap.textContent = 'References';
  var tr = document.createElement('tr');
  var td = document.createElement('td');
  td.textContent = 'Example footnote content placed in a table.';
  tr.appendChild(td);
  bad.appendChild(cap);
  bad.appendChild(tr);
  (document.body || document.documentElement).appendChild(bad);
})();