---
{
  "rule_id": "button-name",
  "title": "Buttons must have discernible text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/button-name",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Buttons must have discernible text

Source: https://dequeuniversity.com/rules/axe/4.2/button-name

# Buttons must have discernible text

Rule ID:
button-name

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

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
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (a): MUST: A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content)

## How to Fix the Problem

### Correct markup solutions

The `button-name` rule has five markup patterns that pass test
criteria:

```
<button id="text">Name</button>

<button id="al" aria-label="Name"></button>

<button id="alb" aria-labelledby="labeldiv"></button>
<div id="labeldiv">Button label</div>

<button id="combo" aria-label="Aria Name">Name</button>

<button id="buttonTitle" title="Title"></button>
```

1. Ensure that each `button` element and elements with
   `role="button"` have one of the following characteristics:

   * Inner text that is discernible to screen reader users.
   * Non-empty `aria-label` attribute.
   * `aria-labelledby` pointing to element with text which is
     discernible to screen reader users.
   * `role="presentation"` or `role="none"` (ARIA 1.1)
     and is not in tab order (`tabindex="-1"`).

### Incorrect markup solutions

The `button-name` rule has six markup patterns that fail testing
criteria:

```
<button id="empty"></button>

<button id="val" value="Button Name"></button>

<button id="alempty" aria-label=""></button>

<button id="albmissing" aria-labelledby="nonexistent"></button>

<button id="albempty" aria-labelledby="emptydiv"></button>
<div id="emptydiv"></div>

<button id="buttonvalue" value="foo" tabindex="-1"></button>
```

## Why it Matters

Screen reader users are not able to discern the purpose of elements with
`role="link"`, `role="button"`, or
`role="menuitem"` that do not have an accessible name.

## Rule Description

Buttons must have discernible text that clearly describes the destination,
purpose, function, or action for screen reader users.

The `input-button-name` rule separates functionality from the
`button-name` rule to ensure that input buttons have discernible
text; advise relevant to input button names was incorrect for button elements.

## The Algorithm (in simple terms)

Checks all buttons to ensure that they have a discernable, accessible name.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Labels
* Group Labels
* Instructions and Other Helpful Info
* Instructions for Inputs

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