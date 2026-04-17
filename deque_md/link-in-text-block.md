---
{
  "rule_id": "link-in-text-block",
  "title": "Links must be distinguished from surrounding text in a way that does not rely on color",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/link-in-text-block",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.4.1",
    "1.4.3",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Links must be distinguished from surrounding text in a way that does not rely on color

Source: https://dequeuniversity.com/rules/axe/4.2/link-in-text-block

# Links must be distinguished from surrounding text in a way that does not rely on color

Rule ID:
link-in-text-block

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.1 Experimental, WCAG 2.0 (A), WCAG 2.0 Experimental

## Learn Web Accessibility

Subscribe to our extensive curriculum of online self-paced courses

[Learn More about Deque University](/online-courses/?adtag=dquOnline&adid=2019-01-25b&adref=dqu&adcontext=ruleHelp)

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
* ![](assets/images/icons/color_pallete.png)Colorblindness

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.1 Experimental
* WCAG 2.0 (A)
* WCAG 2.0 Experimental

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.4.1: SHOULD: Use of Color

### WCAG Success Criteria [WCAG 2.1 Experimental]

* 1.4.1: MUST: Use of Color

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.4.1: SHOULD: Use of Color

### WCAG Success Criteria [WCAG 2.0 Experimental]

* 1.4.1: MUST: Use of Color

## How to Fix the Problem

Ensure all links that appear in blocks of text have a color contrast
difference of at least 3:1 with the surrounding text to ensure that users who
cannot distinguish between the colors can still find the link.

When the link has no distinct style, and it has a contrast difference of 3:1
or higher, you must manually test to verify that the link gets distinct style
on focus and hover.

**Success Criterion**: Ensure color contrast of at least 3:1 for
link text.

Deque's open-source aXe and browser extensions (for WorldSpace Attest and
Comply) products are excellent, reliable tools to help you analyze the
contrast ratio of your colors and tell you if they pass the 3:1 ratio
guidelines or not.

* [WorldSpace Attest Browser Extension![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://www.deque.com/tools/worldspace-attest/)
* [aXe
  ![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://www.deque.com/axe/)

## Why it Matters

Some people with low vision experience low contrast, meaning that there aren't
very many bright or dark areas. Everything tends to appear about the same
brightness, which makes it hard to distinguish outlines, borders, edges, and
details. Text that is too close in luminance (brightness) to the background
can be hard to read.

There are nearly three times more individuals with low vision than those with
total blindness. One person in twelve has a color deficiency - about 8% of men
and 0.4% of women in the US. A person with low vision or color blindness is
unable to distinguish text against a background without sufficient contrast.

When a sufficient color contrast ratio of 3:1 is not present to distinguish
link text color from surrounding text color, users with low vision who
experience low contrast cannot detect visually that the text is intended to
function as a link.

## Rule Description

Ensures users who cannot distinguish between colors can tell when text is a
link by verifying the link has either a distinct style that does not rely on
color or has a contrast difference of greater than 3:1 (which alerts you that
manual testing is required).

## The Algorithm (in simple terms)

Checks all links that appear in blocks of text for a color contrast difference
of at least 3:1 with the surrounding text to ensure that users who cannot
distinguish between the colors can still find the link.

This rule looks at common ways to distinguish links from surrounding text,
including underline, font styling, border, and background. If the link has a
distinct style that does not rely on color, there is no violation (pass). If
the link has no distinct style and it has a contrast difference less than 3:1,
there is a violation (fail). When the link has no distinct style, and it has a
contrast difference of 3:1 or higher, you must verify that the link gets
distinct style on focus and hover (manual testing required), as this cannot be
automated reliably.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Color
* Contrast

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text
* W3C Understanding Success Criterion 1.4.3: Contrast (Minimum)
* Luminosity Colour Contrast Ratio Analyser

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