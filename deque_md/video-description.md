---
{
  "rule_id": "video-description",
  "title": "<video> elements must have an audio description <track>",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/video-description",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": []
}
---

# <video> elements must have an audio description <track>

Source: https://dequeuniversity.com/rules/axe/4.2/video-description

# <video> elements must have an audio description <track>

Rule ID:
video-description

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
Deque Best Practice

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

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

* Blind

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

The purpose of audio description is to fill gaps in dialogue with a narrator
describing what is happening visually. The soundtrack containing the audio
description of the visual information can be an alternate soundtrack that the
user can choose, or it can be the standard sound track that everyone hears.

Ensure that all `video` elements have audio descriptions that
provide all relevant information that dialogue cannot. Examples of relevant
information aside from dialogue include facial expressions and scenes.

The following code shows how to add two different audio descriptions - one in
English and one in Spanish:

```
<video width="300" height="200">
    <source src="myVideo.mp4" type="video/mp4">
    <track src="audio_desc_en.vtt" kind="descriptions" srclang="en" label="english_description">
    <track src="audio_desc_es.vtt" kind="descriptions" srclang="es" label="spanish_description">
</video>
```

The `src` attribute gives the name of the audio description file.
The `kind` attribute describes the contents of the file. The
`srclang` attribute specifies the language of the file using the
appropriate HTML language code. The `label` attribute provides a
name for the audio description. None of these attributes, aside from
`src`, are required. Nevertheless, they are highly recommended
because they increase clarity.

## Why it Matters

While blind people can hear the audio content of videos with no issue, they
miss visual aspects of films such as facial expressions and scenes. Many
things happen in movies that are completely visual, with no auditory
component. For example, a person can make a facial expression, but not say any
words. The camera can show a mountain scene, but no one in the movie says
"this is a mountain scene." There is much visual information that
blind people miss completely without audio. Audio descriptions are the
solution to make visual information in movies accessible to blind people.

If there is no accompanying narration or dialog to explain the visual
activity, blind people don't know what's happening. To make that kind of video
accessible to a blind person, you need to provide a version of the video with
audio descriptions. Audio descriptions are a recording of a person explaining
the visual aspects of the video that isn't in the video's original dialog or
narration. Audio description works best when users can turn it on or off, or
when there is a separate version of the video with audio descriptions for
blind users, in addition to the original version without audio descriptions.

## Rule Description

The HTML5 `video` element must have an audio description track to
provide blind users with information the dialogue does not.

## The Algorithm (in simple terms)

Ensures `video` elements have audio descriptions.

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