(() => {
  const btn = document.createElement('button');
  btn.id = 'nd-empty-button-a11y-test';
  // Intentionally provide no discernible name
  btn.setAttribute('aria-label', '');
  // Make sure it is in the DOM and not hidden
  btn.type = 'button';
  btn.style.display = 'inline-block';
  btn.style.margin = '16px';
  btn.style.padding = '12px';
  // Optional icon-only look to mimic common mistake
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('width', '16');
  svg.setAttribute('height', '16');
  svg.setAttribute('viewBox', '0 0 16 16');
  svg.setAttribute('aria-hidden', 'true');
  const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  circle.setAttribute('cx', '8');
  circle.setAttribute('cy', '8');
  circle.setAttribute('r', '7');
  circle.setAttribute('fill', '#999');
  svg.appendChild(circle);
  btn.appendChild(svg);
  document.body.appendChild(btn);
})();