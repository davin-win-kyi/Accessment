---
{
  "rule_id": "frame-title",
  "title": "Frames must have title attribute",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/frame-title",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.4.1",
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Frames must have title attribute

Source: https://dequeuniversity.com/rules/axe/4.2/frame-title

# Frames must have title attribute

Rule ID:
frame-title

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
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 2.4.1: MUST: Bypass Blocks
* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.4.1: MUST: Bypass Blocks
* 4.1.2: MUST: Name, Role, Value

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (i): MUST: Frames shall be titled with text that facilitates frame identification and navigation.

## How to Fix the Problem

Ensure all `frame` and `iframe` elements have valid
title attribute values.

You can add a title attribute to a frame element as follows:

```
<iframe ... title="myFrame"> frame body </iframe>
```

Additionally, best practice is to give the enclosed document a
`title` element with content identical to the title attribute. Some
screen readers will replace the contents of the title attribute on the frame
with the contents of the `title` element inside the frame. As a
result, it’s safest and most accessible to have the same text in both
locations.

A good title is brief, clear, informative, and unique. Ensure that the
document's `title` contains short, descriptive text summarizing the
page's contents. To pass this rule, it’s not sufficient to simply have a
`title` element; the element must also contain meaningful text.

### Best practices when writing frame titles

* Replace placeholder titles such as `untitled page` with a more
  appropriate phrase
* Make each title unique - don’t duplicate titles across pages, even if they
  are similar.
* Put all unique information first. If you want to include the company’s name
  or brand in the title, this information should go after the unique content.
  Otherwise, users of screen readers will have to listen to this information
  over and over as they search for the page that interests them.
* Make the page title match the top heading (ideally labeled as
  `h1`) on your page. These don’t need to be identical, but it
  often makes sense to make them very similar, since the
  `title` and `h1` elements serve essentially the same
  purpose.

## Why it Matters

Screen reader users rely on a frame title to describe the contents of the
`frame`. Navigating through `frame` and
`iframe` elements quickly becomes difficult and confusing for users
of this technology if the markup does not contain a
`title` attribute.

Screen reader users have the option to pull up a list of titles for all frames
on a page. Adding descriptive, unique titles allows users to quickly find the
frame they need. If no titles are present, navigating through frames can
quickly become difficult and confusing. If no title is listed, screen readers
will instead give information like "frame," "JavaScript,"
the filename, or the URL. In most cases, this information won’t be very
helpful.

## Rule Description

All `frame` or `iframe` elements in the document must
have a title that is not empty to describe their contents to screen reader
users.

## The Algorithm (in simple terms)

Ensure that all `iframe` and `frame` elements contain a
unique and non-empty title attribute.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Frame titles
* Semantic structure across iframes
* Hiding iframes that don’t contain meaningful content

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H64: Using the title attribute of the frame and iframe elements

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