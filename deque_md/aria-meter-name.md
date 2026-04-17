---
{
  "rule_id": "aria-meter-name",
  "title": "ARIA meter must have an accessible name",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-meter-name",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# ARIA meter must have an accessible name

Source: https://dequeuniversity.com/rules/axe/4.2/aria-meter-name

# ARIA meter must have an accessible name

Rule ID:
aria-meter-name

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

Serious  
▼

Minor

Critical

### Disabilities Affected

* Blind
* Low Vision
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.1.1: MUST: Non-text Content

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.1.1: MUST: Non-text Content

## How to Fix the Problem

### Correct markup solutions

The `aria-meter-name` rule has three markup patterns that pass
test criteria:

```
<div role="meter" id="alb" aria-labelledby="labeldiv"></div>

<div role="meter" id="combo" aria-label="Aria Name">Name</div>

<div role="meter" id="title" title="Title"></div>
```

1. Ensure that each element with `role="meter"` has one of the
   following characteristics:

   * Non-empty `aria-label` attribute.
   * `aria-labelledby` pointing to element with text which is
     discernible to screen reader users.

### Incorrect markup solutions

The `aria-meter-name` rule has four markup patterns that fail
testing criteria:

```
<div role="meter" id="empty"></div>

<div role="meter" id="alempty" aria-label=""></div>

<div role="meter" id="albmissing" aria-labelledby="nonexistent"></div>

<div role="meter" id="albempty" aria-labelledby="emptydiv"></div>
<div id="emptydiv"></div>
```

## Why it Matters

Screen reader users are not able to discern the purpose of elements with
`role="meter"` that do not have an accessible name.

## Rule Description

Aria meter elements must have discernible text that clearly describes the
destination, purpose, function, or action for screen reader users.

## The Algorithm (in simple terms)

Checks all elements with `role="meter"` to ensure that they have a
discernable, accessible name.

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