---
{
  "rule_id": "aria-required-parent",
  "title": "Certain ARIA roles must be contained by particular parent elements",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-required-parent",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Certain ARIA roles must be contained by particular parent elements

Source: https://dequeuniversity.com/rules/axe/4.2/aria-required-parent

# Certain ARIA roles must be contained by particular parent elements

Rule ID:
aria-required-parent

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Start building more accessible experiences

     

Axe DevTools Pro helps development teams find and fix up to 80% of accessibility issues while coding. No experience required. Get started with your free trial today.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11yexperiences)

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

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: MUST: Info and Relationships

## How to Fix the Problem

Ensure all ARIA roles are contained by their required parent element, if any.

The **relationship properties available in ARIA** are the
following:

* aria-activedescendant
* aria-controls (used primarily by elements where the role is group, region,
  or widget)
* aria-describedby
* aria-flowto (used primarily to provide alternate reading/tab order to skip
  past ads or complementary regions)
* aria-labelledby
* aria-owns (used primarily to identify which elements belong to the group)
* aria-posinset
* aria-setsize

ARIA allows you to communicate relationship information to screen readers,
which specifies relationships between items (for example,
`aria-owns`, `aria-controls`, both of which describe a
kind of parent-child relationship where one item owns or controls another).

## Why it Matters

For each role, WAI-ARIA explicitly defines which child and parent roles are
allowable and/or required. Elements containing ARIA `role` values
missing required parent element `role` values will not enable
assistive technology to function as intended by the developer.

When it is necessary to convey context to the user of assistive technology in
the form of hierarchy (for example, the importance of a parent container, item
or sibling in a folder tree), and the hierarchy is not the same as the code
structure or DOM tree, there is no way to provide the relationship information
without the use of ARIA role parent elements.

## Rule Description

Certain ARIA roles must be contained by particular parent `role`s
in order to perform the intended accessibility functions.

## The Algorithm (in simple terms)

Checks all elements that contain a WAI-ARIA role to ensure that all required
parent roles are present

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* ARIA Concepts
* Role
* ARIA Widget Examples

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* WAI-ARIA Roles

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