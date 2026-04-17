---
{
  "rule_id": "blink",
  "title": "<blink> elements are deprecated and must not be used",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/blink",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.2.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <blink> elements are deprecated and must not be used

Source: https://dequeuniversity.com/rules/axe/4.2/blink

# <blink> elements are deprecated and must not be used

Rule ID:
blink

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Start building more accessible experiences

     

Axe DevTools Pro helps development teams find and fix up to 80% of accessibility issues while coding. No experience required. Get started with your free trial today.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11yexperiences)

## Sign up for the Axe newsletter

Stay up to date on Axe features, updates, and events.

[Newsletter Sign-up](https://hubs.ly/H0gkTMZ0 "Newsletter Sign-up")

## Compliance Data & Impact

### User Impact

Serious  
▼

Minor

Critical

### Disabilities Affected

* Low Vision
* Mobility
* ![](assets/images/icons/brain_side.png)Cognitive

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 2.2.2: MUST: Pause, Stop, Hide

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.2.2: MUST: Pause, Stop, Hide

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (j): MUST: Pages shall be designed to avoid causing the screen to flicker with a frequency greater than 2 Hz and lower than 55 Hz.

## How to Fix the Problem

Remove all `blink` elements.

An example of a code snippet you should remove from an HTML file:

```
<p><blink>Moving Sale Thursday!</blink></p>
```

An example of a code snippet you should remove from a CSS file:

```
h1 {
  text-decoration: blink;
}
```

### Note:

A number of modern browsers do not support blinking text. It is entirely
possible that you will have the `blink` element in an HTML file,
but this won’t produce blinking text on the web page. For this reason, don’t
rely on the visual rendering of an HTML document to determine whether there
are `blink` tags in it; be sure to check the actual file
contents.

To fix both of the above code examples, remove the `blink` element
and/or `text-decoration: blink;` from your CSS. Replace this markup
to make the text stand out in some other way.

## Why it Matters

As the name suggests, `blink` tags cause content to flash. Though
you may like the effect, blinking text can be difficult to read, and blinking
objects (links, buttons, etc.) can be difficult to activate, especially for
users with imprecise or limited dexterity.

It can be very difficult for people with visual and cognitive disabilities to
see and understand text that blinks. Blinking text be distracting, especially
for users with cognitive disabilities. It can also be difficult for some
individuals to comprehend. For these reasons, the `blink` element
should never be used.

## Rule Description

This rule requires that no `blink` elements are present. Flashing
text can be difficult to read and blinking objects can be difficult to
activate. The associated automated check finds the presence of all
`blink` elements so that they can be removed.

## The Algorithm (in simple terms)

Checks to make sure that the `blink` element is never used.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Deprecated Markup
* Typography
* Multimedia, Animations, and Motion 2.0
* Seizure-Inducing Flashes

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* F47: Failure of Success Criterion 2.2.2 due to using the blink element

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