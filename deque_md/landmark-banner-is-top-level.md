---
{
  "rule_id": "landmark-banner-is-top-level",
  "title": "Banner landmark must not be contained in another landmark",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/landmark-banner-is-top-level",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Banner landmark must not be contained in another landmark

Source: https://dequeuniversity.com/rules/axe/4.2/landmark-banner-is-top-level

# Banner landmark must not be contained in another landmark

Rule ID:
landmark-banner-is-top-level

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

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

Moderate  
▼

Minor

Critical

### Disabilities Affected

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure each banner landmark is not contained in another landmark.

For each element on the page that uses the `role="banner"` ARIA
landmark, ensure that it is not contained within another ARIA landmark, even
though HTML5 allows multiple instances of the equivalent
`<header>` landmark. It is appropriate in most web designs to
have only one each of these landmarks, whether they are specified using ARIA
or HTML5, and further, that they are not nested within one or more other
landmarks.

## Why it Matters

If the banner landmark is not the top-level landmark (and is contained within
another landmark), it does not effectively designate the pre-defined header
portion of the layout in the design and therefore prevents screen reader users
from being able to easily find their way around the layout.

### Note

Landmarks are used to designate sections of the overall page design and
layout. Headings are used to designate sections within the content.

## Rule Description

Banner landmark must not be contained in another landmark.

## The Algorithm (in simple terms)

This rule finds (banner/contentinfo) landmarks and walks up the document
structure verifying that no other landmark roles are encountered before
reaching the body.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmarks
* Test for Landmarks

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

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