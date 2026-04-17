---
{
  "rule_id": "aria-dpub-role-fallback",
  "title": "Unsupported DPUB ARIA roles should be used on elements with implicit fallback roles",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-dpub-role-fallback",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Unsupported DPUB ARIA roles should be used on elements with implicit fallback roles

Source: https://dequeuniversity.com/rules/axe/4.2/aria-dpub-role-fallback

# Unsupported DPUB ARIA roles should be used on elements with implicit fallback roles

Rule ID:
aria-dpub-role-fallback

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQU_elearning.svg)

## Need accessibility training?

     

Deque University offers an extensive curriculum of self-paced online courses for every skill profile and experience level.

[Start learning today](https://dequeuniversity.com/curriculum/online-classes/?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=training_gen)

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
* Low Vision
* ![](assets/images/icons/deafblind.png)Deafblind

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: SHOULD: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: SHOULD: Info and Relationships

## How to Fix the Problem

Ensure all unsupported DPUB roles are only used on elements with implicit
fallback roles.

Supported ARIA DPUB roles are to be applied to
[Sectioning Content](https://www.w3.org/TR/html/dom.html#kinds-of-content-sectioning-content),
[Grouping Content](https://www.w3.org/TR/html/grouping-content.html#grouping-content),
[Heading Content](https://www.w3.org/TR/html/dom.html#kinds-of-content-heading-content),
[Phrasing Content](https://www.w3.org/TR/html/dom.html#kinds-of-content-phrasing-content), `<aside>` and `<body>` elements where
required with appropriate associated
[epub:type structural semantics values](https://idpf.github.io/epub-vocabs/structure/).

For related information about DPUB roles, see
[W3 DPUB-ARIA 1.0 Roles](https://www.w3.org/TR/dpub-aria-1.0/#roles).

## Why it Matters

When a Digital Publishing Role that is not supported is conveyed via a role
attribute value, semantic information can only be conveyed to screen reader
users via native HTML elements that have similar semantics for fallback.

Proposed or recommended specifications such as WAI-ARIA DPUB roles are subject
to becoming obsolete or remaining preliminary prototypes when not supported.

When there is no fallback role specified, assistive technologies such as
screen readers may not be able to convey missing semantic and interaction
information intended by the author to users.

## Rule Description

When a Digital Publishing Role that is not supported is conveyed via a role
attribute value, semantic information can only be conveyed to screen reader
users via native HTML elements that have similar semantics for fallback.

## The Algorithm (in simple terms)

Finds elements with one of the targeted DPUB roles that does not have an
implicit fallback role.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Custom JavaScript/ARIA Widgets (2025)
* Role

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* W3 Digital Publishing WAI-ARIA Module 1.0

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