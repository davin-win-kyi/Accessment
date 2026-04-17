---
{
  "rule_id": "object-alt",
  "title": "<object> elements must have alternate text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/object-alt",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <object> elements must have alternate text

Source: https://dequeuniversity.com/rules/axe/4.2/object-alt

# <object> elements must have alternate text

Rule ID:
object-alt

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

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

Add alternative text to all embedded `<object>` elements
using either inner text, `title` attributes,
`aria-label` or `aria-labelledby`.

### The `object-alt` rule has six examples that pass analysis:

```
<object id="pass1">This object has text.</object>
<object id="pass2" title="This object has text"></object>
<object id="pass3" aria-label="this object has text"></object>
<span id="label1">this object has text</span>
<object id="pass4" aria-labelledby="label1"></object>
<object id="pass5" role='presentation'></object>
<object id="pass6" role='none'></object>
```

### The `object-alt` rule has three examples that fail analysis:

```
<object id="violation1"></object>
<object id="violation2"><div> </div></object>
<object id="violation3"><p style="display: none;">This object has no text.</p></object>
```

## Why it Matters

Screen readers have no way of translating non-text content into text announced
to users. Instead, they read out alternative text. For screen reader users to
obtain the information contained in embedded `object` elements
which must contain short, descriptive alternative text.

The `object` element defines an embedded object within a document.
It is used to embed multimedia (audio, video, applets, etcetera.) or another
web page into the document. The object element needs a text alternative so
that users of screen readers know the contents of the object.

When writing a text alternative, keep in mind that the purpose of the
alternative text is to relay information to blind users about the image’s
contents and purpose - blind users should be able to get as much information
from alternative text as a sighted user gets from the image. Alternative text
should give the intent, purpose, and meaning of the image.

When writing alternative text, it’s helpful to keep the following questions in
mind:

* Why is the non-text content here?
* What information is it presenting?
* What purpose does it fulfill?
* If I could not use the non-text content, what words would I use to convey
  the same information or function?

Be sure that all text contained in this attribute is useful. Words like
"chart", "image", "diagram", or image file names
tend not to be very useful.

## Rule Description

All embedded objects must have text alternatives to be read out to screen
reader users.

## The Algorithm (in simple terms)

Ensures that every `object` element has a text alternative.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Advanced Alt Text and Extended Descriptions
* Image Alt Text
* What Does Accessible Mean?

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H53: Using the body of the object element

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