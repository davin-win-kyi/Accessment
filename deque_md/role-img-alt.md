---
{
  "rule_id": "role-img-alt",
  "title": "Elements containing role=\"img\" have an alternative text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/role-img-alt",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Elements containing role="img" have an alternative text

Source: https://dequeuniversity.com/rules/axe/4.2/role-img-alt

# Elements containing role="img" have an alternative text

Rule ID:
role-img-alt

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

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

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.1.1: MUST: Non-text Content

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.1.1: MUST: Non-text Content

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (a): MUST: A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content)

## How to Fix the Problem

### Correct markup solutions

The following four markup examples all pass because each example contains
markup rendered as alternative text:

```
<div id="match">Bananas</div>
<div role="img" aria-labelledby="match" id="pass2"></div>
 
<div id="hidden-match" style="display:none">Banana bombs</div>
<div role="img" aria-labelledby="hidden-match" id="pass3"></div>
 
<div role="img" aria-label="blah" id="pass1"></div>
 
<div role="img" title="title" id="pass4"></div>
```

### Incorrect markup solutions

The following five examples fail the `role-img-alt` rule because
the markup contains no corresponding and meaningful alternative text:

```
<div role="img" id="violation1"></div>
 
<div role="img" aria-label="" id="violation2"></div>
 
<div role="img" alt="blah" id="violation3"></div>
 
<div role="img" aria-labelledby="no-match" id="violation4"></div>
 
<div role="img" title="" id="violation5"></div>
```

## Why it Matters

Screen readers have no way of translating an image into words that gets read
to the user, even if the image only consists of text. As a result, it's
necessary for images to have short, descriptive and accessible alternative
text so screen reader users clearly understand the image's contents and
purpose.

If you can't see, all types of visual information, including images, are
completely useless unless an accessible text alternative is provided which
screen readers can convert into either sound or braille. People with low
vision or color-blindness disabilities also require accessible alternative
text to varying degrees.

Screen readers cannot convert visual image information to speech or braille in
the absence of an accessible text alternative associated with the image.

## Rule Description

Ensures elements marked `role="img"` elements have alternate text.

## The Algorithm (in simple terms)

Elements with the `role="img"` attribute value must also contain
markup specifying accessible alternative text describing the image.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Advanced Alt Text and Extended Descriptions
* Image Alt Text
* Labels
* Group Labels

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* A Simple Alt Text Decision Tree (HTML5 Specification)
* F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"
* H37: Using alt attributes on img elements
* H67: Using null alt text and no title attribute on img elements for images that AT should ignore
* ARIA10: Using aria-labelledby to provide a text alternative for non-text content

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