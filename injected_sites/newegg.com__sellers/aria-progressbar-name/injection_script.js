(function(){
  // Create an ARIA progressbar without an accessible name
  var pb = document.createElement('div');
  pb.setAttribute('role', 'progressbar');
  pb.setAttribute('aria-valuemin', '0');
  pb.setAttribute('aria-valuemax', '100');
  pb.setAttribute('aria-valuenow', '60');
  // No aria-label, no aria-labelledby, no title => no accessible name

  // Give it some basic styling/structure so it is clearly a progress bar visually
  pb.style.width = '100%';
  pb.style.maxWidth = '400px';
  pb.style.height = '12px';
  pb.style.background = '#e0e0e0';
  pb.style.borderRadius = '6px';
  pb.style.overflow = 'hidden';
  pb.style.margin = '16px 0';

  var fill = document.createElement('div');
  fill.style.width = '60%';
  fill.style.height = '100%';
  fill.style.background = '#3b82f6';
  fill.style.borderRadius = '6px 0 0 6px';
  pb.appendChild(fill);

  var container = document.createElement('div');
  container.style.padding = '12px 0';
  container.style.display = 'block';
  // Add a visible heading that is not programmatically associated (still keeps the progressbar unnamed)
  var heading = document.createElement('div');
  heading.textContent = 'Loading account setup…';
  heading.style.fontFamily = 'sans-serif';
  heading.style.fontWeight = '600';
  heading.style.marginBottom = '8px';
  container.appendChild(heading);
  container.appendChild(pb);

  var target = document.querySelector('.container.main-content .row') || document.querySelector('#ajax-content-wrap') || document.body;
  target.insertBefore(container, target.firstChild);
})();