---
{
  "rule_id": "image-alt",
  "title": "Images must have alternate text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/image-alt",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "1.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Images must have alternate text

Source: https://dequeuniversity.com/rules/axe/4.2/image-alt

# Images must have alternate text

Rule ID:
image-alt

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

## Learn Web Accessibility

Subscribe to our extensive curriculum of online self-paced courses

[Learn More about Deque University](/online-courses/?adtag=dquOnline&adid=2019-01-25b&adref=dqu&adcontext=ruleHelp)

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

Ensure all informative `<img>` elements have short,
descriptive alternate text and all decorative
`<img>` elements have empty alt attributes (e.g.
`alt=""`).

There are three main ways to add alternate text to an image:

* Using an `alt` attribute i.e.
  `<img alt="drawing of a cat" src="...">`
* Using an `aria-label` i.e.
  `<img aria-label="drawing of a cat" src="...">`
* Using an `aria-labelledby` attribute i.e.
  `<img arialabelledby="someID" src="...">`

### Alt Text Writing Tips

When writing alt text, keep in mind that its purpose is to relay information
to blind users about the image’s contents and purpose - blind users should be
able to get as much information from alt text as a sighted user gets from the
image itself. Alt text should give the intent, purpose, and meaning of the
image.

When writing alt text, it is helpful to keep the following questions in mind:

* Why is the non-text content here?
* What information is it presenting?
* What purpose does it fulfill?
* If I could not use the non-text content, what words would I use to convey
  the same information or function?

Be sure that all text contained in the attribute is useful. Words like
"chart," "image," "diagram," or image file names
tend not to be very useful and thus should not be used in alt text.

### Decorative Elements

Provide "null" `alt` attributes (using
`alt=""`) for images which do not provide information or do not
require alternative text because the image is described in the page content.
Some developers will mistakenly leave off the `alt` attribute
altogether on images which they deem do not need alternatives. This is not
helpful to assistive technology users because the assistive technology, such
as screen reader, will often read the source attribute (i.e., file name) as
the alternative text. To tell assistive technology to ignore an image, use a
"blank alternative text" attribute: `alt=""`.

#### Example:

```
<img src="line.jpg" alt="">
```

## Why it Matters

Screen readers have no way of translating an image into words that gets read
to the user, even if the image only consists of text. As a result, it's
necessary for images to have short, descriptive `alt` text so
screen reader users clearly understand the image's contents and purpose.

If you can't see, all types of visual information, such as images, are
completely useless unless a digital text alternative is provided so that
screen readers can convert that text into either sound or braille. The same is
true in varying degrees for people with low vision or color-blindness.

When you do not provide an acceptable alternative that works for their
available sensory modalities, such as making an image accessible by providing
a digital text description, screen readers cannot convert it into speech or
braille to make it available by sound or touch.

## Rule Description

All images must have alternate text to convey their purpose and meaning to
screen reader users.

## The Algorithm (in simple terms)

Ensures that every `<img>` element has alternative text and
either `role="presentation"` or `role="none"` (ARIA
1.1).

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