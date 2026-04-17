---
{
  "rule_id": "aria-required-children",
  "title": "Certain ARIA roles must contain particular children",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-required-children",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Certain ARIA roles must contain particular children

Source: https://dequeuniversity.com/rules/axe/4.2/aria-required-children

# Certain ARIA roles must contain particular children

Rule ID:
aria-required-children

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

Ensure elements including explicit or implicit ARIA roles include required
children elements.

The following attribute values indicate relationships between element that
cannot be readily determined from the document structure. The relationships
are linked to characteristics tables that list explicit and implicit
`role` attribute values as well as `role` attribute
values inherited by nested children elements.

* [`aria-activedescendant`](https://www.w3.org/TR/wai-aria-1.1/#aria-activedescendant)
* [`aria-controls`](https://www.w3.org/TR/wai-aria-1.1/#aria-controls)
* [`aria-describedby`](https://www.w3.org/TR/wai-aria-1.1/#aria-describedby)
* [`aria-flowto`](https://www.w3.org/TR/wai-aria-1.1/#aria-flowto)
* [`aria-labelledby`](https://www.w3.org/TR/wai-aria-1.1/#aria-labelledby)
* [`aria-owns`](https://www.w3.org/TR/wai-aria-1.1/#aria-owns)
* [`aria-posinset`](https://www.w3.org/TR/wai-aria-1.1/#aria-posinset)
* [`aria-setsize`](https://www.w3.org/TR/wai-aria-1.1/#aria-setsize)
* [`role="combobox"`](https://www.w3.org/TR/wai-aria-1.1/#combobox)

For similar (opposite) information, refer to
[Certain ARIA roles must be contained by particular parents](https://dequeuniversity.com/rules/axe/3.4/aria-required-parent).

## Why it Matters

For each role, WAI-ARIA explicitly defines which child and parent roles are
allowable and/or required. ARIA `role`s missing required child
`role`s will not be able to perform the accessibility functions
intended by the developer.

Assistive technology needs to convey the context to the user. For example, in
a `treeitem`, it is important to know the parent (container), item,
or siblings in the folder. This can be done in two ways:

1. **Code order or DOM:** The necessary context is often clear
   from the code order or DOM.
2. **ARIA:** ARIA (such as `aria-owns`) can be used
   provide the relationships when the hierarchy is not the same as the code
   structure or DOM tree.

## Rule Description

Some ARIA parent `role` values applied to elements must contain
specific child elements and `role` values to perform intended
accessibility function.

## The Algorithm (in simple terms)

Checks all elements that contain a WAI-ARIA role to ensure that all required
children roles are present.

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

* Accessible Rich Internet Applications (WAI-ARIA) 1.1 - The Roles Model

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