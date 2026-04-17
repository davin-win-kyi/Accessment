---
{
  "rule_id": "audio-caption",
  "title": "<audio> elements must have a captions <track>",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/audio-caption",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": []
}
---

# <audio> elements must have a captions <track>

Source: https://dequeuniversity.com/rules/axe/4.2/audio-caption

# <audio> elements must have a captions <track>

Rule ID:
audio-caption

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
Deque Best Practice

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Start building more accessible experiences

     

Axe DevTools Pro helps development teams find and fix up to 80% of accessibility issues while coding. No experience required. Get started with your free trial today.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11yexperiences)

## Sign up for the Axe newsletter

Stay up to date on Axe features, updates, and events.

[Newsletter Sign-up](https://hubs.ly/H0gkTMZ0 "Newsletter Sign-up")

## Compliance Data & Impact

### User Impact

Critical  
▼

Minor

Critical

### Disabilities Affected

* ![](assets/images/icons/deafblind.png)Deafblind
* Deaf

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure the `kind` attribute of the `track` element
contains the value "captions". Ensure the caption text content
conveys all meaningful information in the `audio` element such as
who is speaking, a transcript of the dialogue, musical cues, and sound
effects.

The following code shows how to add two different tracks - one in English and
one in Spanish:

```
<audio>
   <source src="mySpeech.mp3" type="audio/mp3">
   <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions">
   <track src="captions_es.vtt" kind="captions" srclang="es" label="spanish_captions">
</audio>
```

### Note:

Captions and subtitles are not the same thing. Captions are necessary for
deaf viewers to understand the content. Captions include a text description
of all important background noises and other sounds, in addition to the text
of all dialog and narration. Subtitles are generally language translations,
to help listeners understand content presented in a language they don't
understand. A Spanish audio file could contain English subtitles, for
example. Subtitles generally include only dialog and narration.

Given these differences, you should specify `kind="captions"` for
deaf access, and not `kind="subtitles"`.

The `src` attribute gives the name of the track file. The
`kind` attribute describes the contents of the file. The
`srclang` attribute specifies the language of the track file using
the appropriate HTML language code. The `label` attribute provides
a name for the track. None of these attributes, aside from `src`,
are required. Nevertheless, they are highly recommended since they increase
clarity.

## Why it Matters

Without a caption for an audio file, deaf users are not able to know the
meaningful information that the audio conveys such as identifying who is
speaking, its dialogue, and non-speech information conveyed through sound such
as musical cues or sound effects. Captions provide the part of the content
that is available via the audio track.

A lot happens in a video aside from dialogue. While a blind person has no
problem hearing the dialogue in a movie, the person will miss out on important
visual aspects of the video. Visual aspects can be made accessible using audio
descriptions supplementing a video’s audio. In an audio description, the
narrator speaks when there are gaps in speech and gives the context necessary
to understand what is going on.

An HTML5 audio element (e.g. `<audio>`) must have a caption
provided using the `<track>` attribute. To be most effective,
the caption should convey all meaningful information that the audio conveys
including dialogue, musical cues, sound effects, and other relevant
information.

## Rule Description

The `track` element must be present for each HTML5
`audio` element, with `kind="captions"` set as
a property. Captions are text—synchronized with the audio file—of
the dialog, narration, and any important auditory information, for the benefit
of deaf users.

## The Algorithm (in simple terms)

Checks the use of all HTML5 `<audio>` elements to ensure each
contains a `<track>` element with the
`kind` attribute value `"captions"`.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

No related course information available.

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

Refer to the [complete list of axe 4.2 rules](/rules/axe/4.2).

## Was this information helpful?

You have already given your feedback, thank you..

### Your response was as follows:

**Was this information helpful?**   

**Date/Time feedback was submitted:**

Edit your response

Customer Feeddback

Yes

No

### Improvement feedback (see below)::