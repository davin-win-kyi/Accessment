(function(){
  var container = document.createElement('section');
  container.id = 'injected-checkboxgroup';
  container.style.padding = '16px';
  container.style.borderTop = '1px solid #ccc';
  container.innerHTML = (
    '<form id="newsletter-prefs">' +
      '<h2 style="margin:0 0 8px 0; font-size:20px;">Newsletter preferences</h2>' +
      '<p style="margin:0 0 8px 0;">Select topics you like:</p>' +
      '<div><input type="checkbox" id="topic-deals" name="topics" value="deals">' +
        '<label for="topic-deals">Deals</label></div>' +
      '<div><input type="checkbox" id="topic-new" name="topics" value="new">' +
        '<label for="topic-new">New arrivals</label></div>' +
      '<div><input type="checkbox" id="topic-events" name="topics" value="events">' +
        '<label for="topic-events">Events</label></div>' +
    '</form>'
  );
  document.body.appendChild(container);
})();