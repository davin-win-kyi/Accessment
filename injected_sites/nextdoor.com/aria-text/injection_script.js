(function(){
  var target = document.getElementById('nd-page-main') || document.querySelector('main') || document.body;
  if(!target) target = document.body;

  var container = document.createElement('section');
  container.id = 'injected-aria-text-issue';
  container.style.margin = '16px';
  container.style.padding = '12px';
  container.style.background = 'var(--nd-color-bgPrimary, #fff)';

  var heading = document.createElement('h2');
  heading.textContent = 'Accessibility test snippet';

  var desc = document.createElement('p');
  desc.textContent = 'The element below incorrectly uses role="text" while containing a focusable descendant (link).';

  var roleText = document.createElement('span');
  roleText.setAttribute('role', 'text');
  roleText.style.display = 'inline-block';
  roleText.style.padding = '8px';
  roleText.style.border = '1px dashed #999';
  roleText.style.background = 'var(--nd-color-bgInlay, #f0f2f5)';

  roleText.appendChild(document.createTextNode('Visit this '));
  var link = document.createElement('a');
  link.href = '#';
  link.textContent = 'example link';
  link.style.color = 'var(--nd-color-fgBlue, #1197DE)';
  roleText.appendChild(link);
  roleText.appendChild(document.createTextNode(' for details.'));

  container.appendChild(heading);
  container.appendChild(desc);
  container.appendChild(roleText);
  target.appendChild(container);
})();