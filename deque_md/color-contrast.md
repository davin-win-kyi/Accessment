---
{
  "rule_id": "color-contrast",
  "title": "Text elements must have sufficient color contrast against the background",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/color-contrast",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.4.3",
    "WCAG 2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Text elements must have sufficient color contrast against the background

Source: https://dequeuniversity.com/rules/axe/4.2/color-contrast

# Text elements must have sufficient color contrast against the background

Rule ID:
color-contrast

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (AA), WCAG 2.0 (AA)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQU_elearning.svg)

## Need accessibility training?

     

Deque University offers an extensive curriculum of self-paced online courses for every skill profile and experience level.

[Start learning today](https://dequeuniversity.com/curriculum/online-classes/?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=training_gen)

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

* WCAG 2.1 (AA)
* WCAG 2.0 (AA)

### WCAG Success Criteria [WCAG 2.1 (AA)]

* 1.4.3: MUST: Contrast (Minimum)

### WCAG Success Criteria [WCAG 2.0 (AA)]

* 1.4.3: MUST: Contrast (Minimum)

## How to Fix the Problem

Ensure all text elements have sufficient color contrast between the text in
the foreground and background color behind it.

**Success Criterion**: Ensure color contrast of at least 4.5:1
for small text or 3:1 for large text, even if text is part of an image. Large
text has been defined in the requirements as 18pt (24 CSS pixels) or 14pt bold
(19 CSS pixels). Note: Elements found to have a 1:1 ratio are considered
"incomplete" and require a manual review.

Use the color contrast analyzer below to find colors that pass the guidelines.

Image


–
+

Fit

Drag image here, or Upload an Image



**Color Contrast Analysis Tools**: Below are links to tools that
will analyze color contrast ratios against guidelines:

* [axe DevTools Browser Extensions](https://www.deque.com/axe/devtools/)
  — Deque's enterprise product, axe DevTools HTML, enables development
  groups to integrate accessibility testing into existing automated testing
  processes and is used by customers in conjunction with Deque's
  [axe Monitor](https://www.deque.com/axe/monitor/) accessibility
  monitoring and reporting product. In addition to providing a code library
  for integration in many programming languages, axe DevTools also includes
  web accessibility analysis extensions for Google Chrome and Mozilla Firefox,
  enabling enterprise front-end developers to run a quick accessibility test
  at any time. Analysis tools return detailed information on accessibility
  violations and instructions to fix issues with including links to more
  in-depth knowledge.
* [axe-core](https://www.deque.com/axe/) — The axe
  accessibility engine is an open-source JavaScript accessibility rules
  library that is fast, returns no false positive errors or duplicate results,
  and is available as a GitHub repository, browser plugin, or framework
  integration.

## Why it Matters

Some people with low vision experience low contrast, meaning that there aren't
very many bright or dark areas. Everything tends to appear about the same
brightness, which makes it hard to distinguish outlines, borders, edges, and
details. Text that is too close in luminance (brightness) to the background
can be hard to read.

There are nearly three times more individuals with low vision than those with
total blindness. One in twelve people cannot see the average full spectrum of
colors - about 8% of men and 0.4% of women in the US. A person with low vision
or color blindness is unable to distinguish text against a background without
sufficient contrast.

Color transparency and opacity is taken into account in the background.

Color transparency and opacity in the foreground is more difficult to detect
and account for due to:

* 1:1 colors in foreground and background.
* CSS background gradients.
* Background colors in CSS pseudo-elements.
* Background colors created with CSS borders.
* Overlap by another element in the foreground - this sometimes comes up with
  tricky positioning.
* Elements moved outside the viewport via CSS.

## Rule Description

All text elements must have sufficient contrast between text in the foreground
and background colors behind it in accordance with WCAG 2 AA contrast ratio
thresholds.

## The Algorithm (in simple terms)

Checks all text elements to ensure that the contrast between the foreground
text and the background colors meet the WCAG 2 AA contrast ratio thresholds.

### Note:

This rule will not report on text elements that have a
`background-image`, are obscured by other elements or are images
of text.

This also checks for child elements of disabled buttons so they can be ignored
to avoid a false value.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* SC 1.4.3 Contrast (Minimum)
* Color
* Contrast

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* G18: Ensuring that a contrast ratio of at least 4.5:1 exists between text (and images of text) and background behind the text
* W3C Understanding Success Criterion 1.4.3: Contrast (Minimum)

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