(function(){
  var container = document.querySelector('#ajax-content-wrap') || document.body;

  // Failing example 1: aria-roledescription used on a <p> (no implicit or explicit role)
  var p = document.createElement('p');
  p.id = 'fail1-aria-roledescription';
  p.setAttribute('aria-roledescription', 'custom paragraph');
  p.textContent = 'This paragraph incorrectly uses aria-roledescription.';
  container.appendChild(p);

  // Failing example 2: aria-roledescription used on a <div> (no implicit or explicit role)
  var div = document.createElement('div');
  div.id = 'fail2-aria-roledescription';
  div.setAttribute('aria-roledescription', 'custom region');
  div.textContent = 'This div incorrectly uses aria-roledescription.';
  container.appendChild(div);
})();