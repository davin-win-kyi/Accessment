---
{
  "rule_id": "frame-title-unique",
  "title": "Frames must have a unique title attribute",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/frame-title-unique",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": []
}
---

# Frames must have a unique title attribute

Source: https://dequeuniversity.com/rules/axe/4.2/frame-title-unique

# Frames must have a unique title attribute

Rule ID:
frame-title-unique

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
Deque Best Practice

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

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure all `frame` and `iframe` elements have titles
that are not repeated.

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

* Replace placeholder titles such as "untitled page" with a more
  appropriate phrase
* Make each title unique - don’t duplicate titles across pages, even if they
  are similar.
* Put all unique information first. If you want to include the company’s name
  or brand in the title, this information should go after the unique content.
  Otherwise, users of screen readers will have to listen to this information
  over and over as they search for the page that interests them.
* Make the page title match the top heading (ideally labelled as h1) on your
  page. These don’t need to be identical, but it often makes sense to make
  them very similar, since the `title` and `h1` elements
  serve essentially the same purpose.

## Why it Matters

Screen reader users rely on a frame title to describe the contents of the
`frame`. Navigating through frames and iframes can quickly become
difficult and confusing for users of this technology if the frames are not
marked with a `title` attribute.

Screen reader users have the option to pull up a list of titles for all frames
on a page. Adding descriptive, unique titles allows users to quickly find the
frame they need. If no titles are present, navigating through frames can
quickly become difficult and confusing. If no title is listed, screen readers
will instead give information like "frame," "javascript,"
the filename, or the URL. In most cases, this information won’t be very
helpful.

## Rule Description

All `frame` or `iframe` elements in the document must
have a unique title to describe their contents to screen reader users.

## The Algorithm (in simple terms)

Ensure that all `iframe` and `frame` elements contain a
unique and non-empty title attribute.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Frame titles
* Page Title Within an Iframe
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