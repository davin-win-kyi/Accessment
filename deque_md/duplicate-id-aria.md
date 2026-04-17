---
{
  "rule_id": "duplicate-id-aria",
  "title": "IDs used in ARIA and labels must be unique",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/duplicate-id-aria",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# IDs used in ARIA and labels must be unique

Source: https://dequeuniversity.com/rules/axe/4.2/duplicate-id-aria

# IDs used in ARIA and labels must be unique

Rule ID:
duplicate-id-aria

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

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

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.1: MUST: Parsing

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.1: MUST: Parsing

## How to Fix the Problem

Rename any duplicate ID values.

Duplicate IDs are common validation errors that may break the accessibility of
labels, e.g., form fields, table header cells.

To fix the problem, change an ID value if it is used more than once to be sure
each is unique. Unique ID's differentiate each element from another and
prevent invalid markup, wherein only the first instance gets acted upon by
client-side scripting, or where assistive technologies typically only
reference the first one accurately.

## Why it Matters

Duplicate IDs are common validation errors that may break the accessibility of
labels, e.g., ARIA elements, form fields, table header cells.

Unique ID's differentiate each element from another and prevent invalid
markup, wherein only the first instance gets acted upon by client-side
scripting, or where assistive technologies typically only reference the first
one accurately.

## Rule Description

The value assigned to an `id` attribute used in ARIA or in form
labels must be unique to prevent the second instance from being overlooked by
assistive technology. Put another way; ID values used in ARIA and in labels
may not be used more than once in the same document to differentiate each
element from another.

## The Algorithm (in simple terms)

Ensures every ID used in ARIA attributes and `for` attribute on a
label is unique

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Parsing and Validity
* Conflicts and duplicates

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID

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