---
{
  "rule_id": "video-caption",
  "title": "<video> elements must have a <track> for captions",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/video-caption",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "1.2.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <video> elements must have a <track> for captions

Source: https://dequeuniversity.com/rules/axe/4.2/video-caption

# <video> elements must have a <track> for captions

Rule ID:
video-caption

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (AA), WCAG 2.0 (AA), Section 508

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

* Deaf

### Standard(s)

* WCAG 2.1 (AA)
* WCAG 2.0 (AA)
* Section 508

### WCAG Success Criteria [WCAG 2.1 (AA)]

* 1.2.2: MUST: Captions (Prerecorded)

### WCAG Success Criteria [WCAG 2.0 (AA)]

* 1.2.2: MUST: Captions (Prerecorded)

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (a): MUST: A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content)

## How to Fix the Problem

Ensure all `video` elements have a caption using the
`track` element with caption attribute. Ensure the caption conveys
all meaningful information in the `video` element; this includes,
but is not limited to, dialogue, musical cues, and sound effects.

Good captions not only include dialogue, but also identify who is speaking and
include non-speech information conveyed through sound, including meaningful
sound effects.

The following code shows how to add two different tracks - one in English and
one in Spanish:

```
<video width="300" height="200">
    <source src="myVideo.mp4" type="video/mp4">
    <track src="captions_en.vtt" kind="captions" srclang="en" label="english_captions">
    <track src="captions_es.vtt" kind="captions" srclang="es" label="spanish_captions">
</video>
```

### Note:

Captions and subtitles are not the same thing. Captions are necessary for
deaf viewers to understand the content. Captions include a text description
of all important background noises and other sounds, in addition to the text
of all dialog and narration. Subtitles are generally language translations,
to help listeners understand content presented in a language they don't
understand. A Spanish video file could contain English subtitles, for
example. Subtitles generally include only dialog and narration.

Given these differences, you should specify `kind="captions"` for
deaf access, and not `kind="subtitles"`.

The `src` attribute gives the name of the track file. The
`kind` attribute describes the contents of the file. The
`srclang` attribute specifies the language of the track file using
the appropriate HTML language code. The `label` attribute provides
a name for the track. None of these attributes, aside from `src`,
are required. Nevertheless, they are highly recommended because they increase
clarity.

Youtube offers automatic captioning as a somewhat experimental feature. The
automatic captions tend to be too inaccurate to use without some editing, but
it gets rid of quite a bit of work. Another useful feature offered by YouTube
is the ability to synchronize a transcript with the video automatically. You
type up a transcript, upload it to YouTube, and YouTube processes the video
and transcript together, using voice recognition to synchronize the transcript
with the video. This feature tends to be entirely accurate. In some cases, no
additional editing is necessary. In other cases, you need to tweak the timing
a bit, but at least you don't have to do all the work manually.

## Why it Matters

If a video has no caption, deaf users have limited or no access to the
information contained in it. Even if a captions track is available, ensure
that it contains all meaningful information in the video, not just dialogue.

Deaf viewers can see everything in the video but are not able to hear any of
it without captions. Without a caption track, deaf viewers do not have a way
of knowing the dialog, narration, or the essential sounds not spoken by
people, such as "dramatic instrumental music," applause, screams, or
other sounds that set the scene, provide context, or give meaning to the
video.

## Rule Description

An HTML5 `video` element must include a `track` element
with `kind="captions"` set as a property. The captions
should convey all meaningful auditory information in the video including
dialogue, musical cues, sound effects, and other relevant information for deaf
users.

## The Algorithm (in simple terms)

Ensures `video` elements have captions.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Open Captions versus Closed Captions
* Live Events
* Prerecorded Multimedia
* Visual Customizability
* What to Include in Captions
* Visual Presentation of Captions
* Caption File Format

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* G87: Providing closed captions
* G93: Providing open (always visible) captions

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