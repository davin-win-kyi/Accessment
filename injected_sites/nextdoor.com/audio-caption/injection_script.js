(function(){
  var target = document.querySelector('#nd-page-main, main, body') || document.body;
  var section = document.createElement('section');
  section.id = 'a11y-audio-test';
  section.setAttribute('aria-labelledby', 'a11y-audio-heading');

  var heading = document.createElement('h2');
  heading.id = 'a11y-audio-heading';
  heading.textContent = 'Neighborhood audio updates';
  section.appendChild(heading);

  var p1 = document.createElement('p');
  p1.textContent = 'Listen to our welcome message:';
  section.appendChild(p1);

  // Audio without any <track> element (no captions)
  var audioNoTrack = document.createElement('audio');
  audioNoTrack.controls = true;
  audioNoTrack.setAttribute('data-a11y-test', 'no-caption-track');
  var s1 = document.createElement('source');
  s1.src = 'data:audio/mp3;base64,'; // placeholder, no external fetch
  s1.type = 'audio/mpeg';
  audioNoTrack.appendChild(s1);
  section.appendChild(audioNoTrack);

  var p2 = document.createElement('p');
  p2.textContent = 'Daily update:';
  section.appendChild(p2);

  // Audio with a <track> that is not kind="captions" (still violates rule)
  var audioWrongKind = document.createElement('audio');
  audioWrongKind.controls = true;
  audioWrongKind.setAttribute('data-a11y-test', 'wrong-track-kind');
  var s2 = document.createElement('source');
  s2.src = 'data:audio/mp3;base64,'; // placeholder
  s2.type = 'audio/mpeg';
  audioWrongKind.appendChild(s2);
  var tr = document.createElement('track');
  tr.kind = 'subtitles'; // incorrect kind; should be "captions"
  tr.srclang = 'en';
  tr.label = 'English';
  tr.src = 'data:text/vtt,WEBVTT'; // inline VTT, no external fetch
  audioWrongKind.appendChild(tr);
  section.appendChild(audioWrongKind);

  target.appendChild(section);
})();