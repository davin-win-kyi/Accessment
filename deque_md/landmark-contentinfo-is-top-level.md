---
{
  "rule_id": "landmark-contentinfo-is-top-level",
  "title": "Contentinfo landmark must not be contained in another landmark",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/landmark-contentinfo-is-top-level",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Contentinfo landmark must not be contained in another landmark

Source: https://dequeuniversity.com/rules/axe/4.2/landmark-contentinfo-is-top-level

# Contentinfo landmark must not be contained in another landmark

Rule ID:
landmark-contentinfo-is-top-level

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

* Sighted Keyboard Users
* Blind
* ![](assets/images/icons/deafblind.png)Deafblind

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure any `contentinfo` landmark is not be contained in another
landmark.

Text content should be contained within a landmark region, the
`role="contentinfo"` ARIA landmark should be used on an element
that is outside of other landmarks used on the page, since footer information
is generally separated from the header and main body content.

## Why it Matters

The purpose of the `contentinfo` landmark can be defeated when
placed within another landmark, as it can prevent blind screen reader users
from being able to quickly find and navigate to the appropriate landmark.

When screen reader users have to sort through too much extra information to
find what they're looking for, such as not being able to quickly figure out
which landmark contains the content information they're looking for negates
the purpose of an existing `contentinfo` landmark.

## Rule Description

Contentinfo landmark must be at top level.

## The Algorithm (in simple terms)

This rule finds the elements for the footer:not([role]) and
`[role="contentinfo"]` selectors, then checks to see if
the landmark has a body context.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmarks
* Best Practices for Landmarks
* Navigating Landmarks with Screen Readers
* Role

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* W3C ARIA Landmark Examples - Contentinfo

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