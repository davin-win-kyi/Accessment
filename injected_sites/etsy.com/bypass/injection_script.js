(function(){
  function replaceWithDiv(el){
    var div=document.createElement('div');
    while(el.firstChild){div.appendChild(el.firstChild);} 
    if(el.parentNode){el.parentNode.replaceChild(div,el);} 
  }

  // Remove skip links
  document.querySelectorAll('a[href^="#"]').forEach(function(a){a.remove();});

  // Remove headings
  document.querySelectorAll('h1,h2,h3,h4,h5,h6').forEach(function(h){h.remove();});

  // Neutralize main landmarks
  document.querySelectorAll('main,[role="main"]').forEach(replaceWithDiv);

  // Neutralize common landmark regions
  document.querySelectorAll('header,nav,footer,aside,[role="banner"],[role="navigation"],[role="contentinfo"],[role="complementary"],[role="region"],[role="search"]').forEach(replaceWithDiv);

  // Insert a large, repeated block of links without providing any bypass
  var top=document.createElement('div');
  top.id='global-links';
  top.setAttribute('role','none');
  var list=document.createElement('div');
  for(var i=1;i<=40;i++){
    var link=document.createElement('a');
    link.href='/category-'+i;
    link.textContent='Category '+i;
    link.style.marginRight='12px';
    list.appendChild(link);
  }
  top.appendChild(list);

  // Non-semantic content area without headings or main landmark
  var content=document.createElement('div');
  content.id='content-area';
  var p=document.createElement('p');
  p.textContent='Welcome to our catalog. Browse items below.';
  content.appendChild(p);
  for(var j=0;j<5;j++){
    var item=document.createElement('div');
    var name=document.createElement('span');
    name.textContent='Item '+(j+1);
    var btn=document.createElement('button');
    btn.textContent='View';
    item.appendChild(name);
    item.appendChild(document.createTextNode(' '));
    item.appendChild(btn);
    content.appendChild(item);
  }

  var body=document.body||document.documentElement;
  if(body.firstChild){
    body.insertBefore(top,body.firstChild);
    body.insertBefore(content,top.nextSibling);
  }else{
    body.appendChild(top);
    body.appendChild(content);
  }

  // As a final safeguard, strip any remaining landmark roles that might exist
  var landmarkRoles=['banner','navigation','main','contentinfo','complementary','region','search'];
  var sel=landmarkRoles.map(function(r){return '[role="'+r+'"]';}).join(',');
  if(sel){
    document.querySelectorAll(sel).forEach(function(el){el.removeAttribute('role');});
  }
})();