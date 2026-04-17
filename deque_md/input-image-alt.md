---
{
  "rule_id": "input-image-alt",
  "title": "Image buttons must have alternate text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/input-image-alt",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "1.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Image buttons must have alternate text

Source: https://dequeuniversity.com/rules/axe/4.2/input-image-alt

# Image buttons must have alternate text

Rule ID:
input-image-alt

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

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

Critical  
▼

Minor

Critical

### Disabilities Affected

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

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

Check that the `<input type="image">` has a non-empty
`alt`, `aria-label` or
`aria-labelledby` attribute.

Image buttons use the `alt` attribute as the label. The
`alt` attribute value must be provided, and it must be clear and
concise and representative of the action performed when the button is
activated by the user (not a description of the image itself).

### Image Button Example

```
<input type="image" src="submit.png" name="submit"
  height="36" width="113" alt="Submit">
```

Check that all images used as buttons have accessible alternate text.

### How to add alt text to an image

* Using an `alt` attribute i.e.
  `<input type="image" alt="submit button">`
* Using an `aria-label` i.e.
  `<input type="image" aria-label="submit button">`
* Using an `aria-labelledby` attribute i.e.
  `<input type="image" aria-labelledby="someElementID">`

If you are using an `alt` attribute or an `aria-label`,
ensure it is not empty. If you are using an
`aria-labelledby` attribute, ensure that the ID to which it points
exists and is accessible to a screen reader (i.e. is not hidden using CSS with
`display: none` or `aria-hidden="true"`).

### Tips on writing alt text

When writing the `alt` text, keep in mind that the purpose of the
`alt` text is to relay information to blind users about the image’s
contents and purpose - blind users should be able to get as much information
from `alt` text as a sighted user gets from the image itself.
`alt` text should give the intent, purpose, and meaning of the
image.

When writing `alt` text, it is helpful to keep the following
questions in mind:

* Why is the non-text content here?
* What information is it presenting?
* What purpose does it fulfill?
* If I could not use the non-text content, what words would I use to convey
  the same information or function?

Be sure that all text contained in the `alt` attribute is useful.
Words like "chart," "image," "diagram," or image
file names tend not to be very useful and thus should not be used in
`alt` text.

## Why it Matters

An `<input type="image">` button must have
alternate text, otherwise screen reader users will not know the button's
purpose. Even if the image contains only text, it still requires alternate
text, since a screen reader cannot translate images of words into output.

**Text Alone Is Not A Label**: Just typing text next to the form
element is not sufficient to create a true label. Assistive technologies like
screen readers require labels in code that can be determined programmatically.
Some screen readers are programmed to guess what the label should be, based on
the surrounding text, but this method is not fool-proof and can lead to
confusion if the screen reader guesses wrong.

## Rule Description

Ensures `<input type="image">` elements have alternate text.

## The Algorithm (in simple terms)

Ensures that every `<input type="image">` has an accessible
name.

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

* F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"
* H36: Using alt attributes on images used as submit buttons

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