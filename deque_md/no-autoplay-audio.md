---
{
  "rule_id": "no-autoplay-audio",
  "title": "Audio must have controls that provide users with the ability to stop automatically played audio after three seconds",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/no-autoplay-audio",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": [
    "1.4.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Audio must have controls that provide users with the ability to stop automatically played audio after three seconds

Source: https://dequeuniversity.com/rules/axe/4.2/no-autoplay-audio

# Audio must have controls that provide users with the ability to stop automatically played audio after three seconds

Rule ID:
no-autoplay-audio

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

Guidelines:
WCAG 2.1 Experimental, WCAG 2.0 Experimental

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

## Sign up for the Axe newsletter

Stay up to date on Axe features, updates, and events.

[Newsletter Sign-up](https://hubs.ly/H0gkTMZ0 "Newsletter Sign-up")

## Compliance Data & Impact

### User Impact

Moderate  
▼

Minor

Critical

### Disabilities Affected

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* ![](assets/images/icons/brain_side.png)Cognitive

### Standard(s)

* WCAG 2.1 Experimental
* WCAG 2.0 Experimental

### WCAG Success Criteria [WCAG 2.1 Experimental]

* 1.4.2: MAY: Audio Control

### WCAG Success Criteria [WCAG 2.0 Experimental]

* 1.4.2: MAY: Audio Control

## How to Fix the Problem

Fix this issue by using ONE of the following techniques:

1. Only start audio by an action initiated by the user (strongly preferred).
2. Stop the auto-playing audio within three seconds.
3. Provide an easily located, accessible mechanism to stop, pause, mute, or
   adjust volume for audio that automatically plays for more than 3 seconds.

## Why it Matters

People who are blind or have low vision and use screen reading software can
find it hard to hear the screen reader's speech output if there is other audio
playing at the same time. If automatically playing audio lasts more than three
seconds, an easily located, accessible mechanism must be provided to pause or
stop the audio or control the audio volume. An audio control allows screen
reader users to hear the screen reader without other sounds playing.

### Note:

Playing audio automatically when landing on a page may affect a screen
reader user's ability to find the mechanism to stop it because they navigate
by listening and automatically started sounds might interfere with that
navigation. Therefore, we discourage the practice of automatically starting
sounds (especially if they last more than three seconds), and encourage that
the sound be started by an action initiated by the user after they reach the
page, rather than requiring that the sound be stopped by an action of the
user after they land on the page.

## Rule Description

Ensures <video> or <audio> elements do not autoplay audio for more
than three seconds without a control mechanism to stop or mute the audio.

## The Algorithm (in simple terms)

The algorithm for this rule returns:

* **Undefined** when <audio> has no source (duration
  cannot be interpreted).
* **Undefined** when <video> has no source (duration
  cannot be interpreted
* **False** when <audio> can autoplay and has no controls
  mechanism.
* **False** when <video> can autoplay and has no controls
  mechanism
* **False** when <audio> plays less than three seconds
  but loops.
* **True** when <video> can autoplay and duration is less
  than three seconds (by passing options).
* **True** when <video> can autoplay and duration is
  below allowed duration (by setting playback range).
* **True** when <audio> can autoplay but has controls
  mechanism.
* **True** when <video> can autoplay and has controls
  mechanism.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Background Audio on Web Pages

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