(function(){
  var container = document.createElement('div');
  container.id = 'a11y-audio-defect';

  var audio = document.createElement('audio');
  audio.setAttribute('controls', '');
  audio.setAttribute('aria-label', 'Product stories audio');

  var source = document.createElement('source');
  source.setAttribute('src', 'data:audio/mp3;base64,');
  source.setAttribute('type', 'audio/mpeg');

  // Intentionally add a non-caption track to ensure failure
  var nonCaptionTrack = document.createElement('track');
  nonCaptionTrack.setAttribute('kind', 'subtitles');
  nonCaptionTrack.setAttribute('srclang', 'en');
  nonCaptionTrack.setAttribute('label', 'English subtitles');
  nonCaptionTrack.setAttribute('src', 'data:text/vtt,WEBVTT');

  audio.appendChild(source);
  audio.appendChild(nonCaptionTrack);
  container.appendChild(audio);
  (document.body || document.documentElement).appendChild(container);
})();