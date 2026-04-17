---
{
  "rule_id": "empty-table-header",
  "title": "Ensures table headers have discernible text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/empty-table-header",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Ensures table headers have discernible text

Source: https://dequeuniversity.com/rules/axe/4.2/empty-table-header

# Ensures table headers have discernible text

Rule ID:
empty-table-header

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

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

Minor  
▼

Minor

Critical

### Disabilities Affected

* Blind
* Low Vision

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: SHOULD: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: SHOULD: Info and Relationships

## How to Fix the Problem

### Correct markup solutions

Table header elements (those marked with `<th>` or
`role="rowheader"` or `role="columnheader"`) should
have visible text that describes its purpose.

```
<table><tr><th>Student Name</th></tr></table>
```

### Incorrect markup solutions

```
<table><tr><th></th></tr></table>

<table><tr><th aria-label="Student Name"></th></tr></table>
```

## Why it Matters

Table header elements should have visible text that describes the purpose of
the row or column to both sighted users and screen reader users.

## Rule Description

Table header elements should have visible text. Ensure that the table header
can be used by screen reader users. If the element is not a header, marking it
up with a `td` is more appropriate.

## The Algorithm (in simple terms)

Checks all table header elements to ensure that they have a visible text.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

No related course information available.

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