---
{
  "rule_id": "meta-viewport-large",
  "title": "Users should be able to zoom and scale the text up to 500%",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/meta-viewport-large",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": [
    "1.4.4"
  ]
}
---

# Users should be able to zoom and scale the text up to 500%

Source: https://dequeuniversity.com/rules/axe/4.2/meta-viewport-large

# Users should be able to zoom and scale the text up to 500%

Rule ID:
meta-viewport-large

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

Guidelines:
Deque Best Practice

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

## Sign up for the Axe newsletter

Stay up to date on Axe features, updates, and events.

[Newsletter Sign-up](https://hubs.ly/H0gkTMZ0 "Newsletter Sign-up")

## Compliance Data & Impact

### User Impact

Minor  
▼

Minor

Critical

### Disabilities Affected

* Low Vision

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Remove the `user-scalable="no"` parameter from the
`content` attribute of the
`<meta name="viewport">` element in order to allow zooming
and ensure the `maximum-scale` parameter is not less than 5.

A meta viewport element tells the browser how to control the page's dimensions
and to scale, but the ability to zoom can be disabled as a result of its use.

### Note:

The browser's viewport focus does not affect the programmatic focus, but
when the window is small, the area will only include a small part of the
page, and the programmable focus will not follow the viewport.

Remove the `user-scalable="no"` parameter from the
`content` attribute of the
`<meta name="viewport">` element in order to allow zooming.

## Why it Matters

The `user-scalable="no"` parameter inside the
`content` attribute of
`<meta name="viewport">` element disables zooming on a page.
The `maximum-scale` parameter limits the amount the user can zoom.
This is problematic for people with low vision who rely on screen magnifiers
to properly see the contents of a web page.

Users with partial vision and low vision often choose to enlarge the fonts on
their browser to make text on the web easier to read. The browser's viewport
focus is everything visible in the browser window at a given moment. If the
user maximizes the browser to full size on a high-resolution monitor, the
viewport focus area is large and may include the entire web page.

If the browser window is small, the viewport focus area includes only a small
part of the web page. The browser's viewport focus does not affect the
programmatic focus. Users can scroll up and down the web page, but the
programmatic focus does not follow the viewport. The Web Content Accessibility
Guidelines calls for developers to design pages so that they support resize up
to 200%; however, it is a best practice to require 5x zoom.

## Rule Description

The document must not use the `user-scalable="no"` parameter in the
`<meta name="viewport">` element because it disables text
scaling and zooming which is essential to users with low vision.

## The Algorithm (in simple terms)

Ensures that the `user-scalable="no"` parameter is not present in
the `<meta name="viewport">` element and the
`maximum-scale` parameter is not less than 500%.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Allowing Mobile Zoom
* Text Resize/Zoom

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* W3C Understanding Success Criterion 1.4.4: Resize text

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