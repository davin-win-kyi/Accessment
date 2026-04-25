(function(){
  var body = document.body || document.documentElement;
  var container = document.createElement('div');
  container.id = 'injected-meter-container';
  container.style.padding = '16px';
  container.style.background = '#fff';
  var meter = document.createElement('div');
  meter.id = 'meter-no-accessible-name';
  meter.setAttribute('role','meter');
  meter.setAttribute('aria-valuemin','0');
  meter.setAttribute('aria-valuemax','100');
  meter.setAttribute('aria-valuenow','65');
  meter.setAttribute('aria-label',''); // empty accessible name to trigger failure
  meter.textContent = '65%'; // visible text but not used for name on role="meter"
  meter.style.display = 'block';
  meter.style.width = '200px';
  meter.style.height = '20px';
  meter.style.border = '1px solid #ccc';
  meter.style.background = 'linear-gradient(90deg, #4caf50 65%, #e0e0e0 65%)';
  container.appendChild(meter);
  body.insertBefore(container, body.firstChild);
})();