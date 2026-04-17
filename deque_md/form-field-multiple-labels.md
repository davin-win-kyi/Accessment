---
{
  "rule_id": "form-field-multiple-labels",
  "title": "Form fields do not have duplicate labels",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/form-field-multiple-labels",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": [
    "3.3.2",
    "3.4.0",
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Form fields do not have duplicate labels

Source: https://dequeuniversity.com/rules/axe/4.2/form-field-multiple-labels

# Form fields do not have duplicate labels

Rule ID:
form-field-multiple-labels

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

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

Moderate  
▼

Minor

Critical

### Disabilities Affected

* Blind
* Low Vision
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 3.3.2: SHOULD: Labels or Instructions

### WCAG Success Criteria [WCAG 2.0 (A)]

* 3.3.2: SHOULD: Labels or Instructions

### Section 508 Guidelines

* 1194.22: SHOULD: Web based intranet and Internet Information & Applications
* 1194.22 (n): SHOULD: When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.

## How to Fix the Problem

Ensure that only one label is assigned to a form field.

### Correct markup solutions

The `form-field-multiple-labels` rule contains five markup
patterns that pass analysis:

```
<label for="pass1">Label</label>
<input type="text" id="pass1" />

<textarea id="pass2" title="Label"></textarea>

<label>First Name: <input type="text" id="pass3" /></label>

<label>Choose an option:
    <select id="pass4">
        <option selected="selected">Chosen</option>
        <option>Not Selected</option>
    </select>
</label>

<label>Enter your comments:
    <textarea id="pass5"></textarea>
</label>
```

### Caution: Screen Reader and Browser Combinations Inconsistently Support Multiple `form` Element Labels

The following markup examples work across the following screen reader and
browser combinations documented here as of the axe-core 3.4.0 release. See
[Multiple Labels on a Single Input](https://codepen.io/straker/pen/PvqONy)
for further information on screen reader and browser testing combinations.

```
<input type="checkbox" id="D" aria-labelledby="E"/>
    <label for="D" aria-hidden="true">Please</label>
    <label for="D" id="E">Excuse</label>

<input type="checkbox" id="F" aria-labelledby="G H"/>
    <label for="F" id="G" aria-hidden="true">Please</label>
    <label for="F" id="H">Excuse</label>

<input type="checkbox" id="I"/>
    <label for="I" style="display:none">Please</label>
    <label for="I">Excuse</label>
```

Confirm the existence of one visible label per form element. to achieve
correct functionality across most screen reader and browser combinations.
Using the `aria-hidden` attribute alone is not sufficient and you
need to hide additional labels using CSS.

### Incorrect markup examples

The `form-field-multiple-labels` rule contains nine markup
patterns that fail analysis:

```
<label for="fail1">Hi</label>
<label for="fail1">Foo</label>
<input type="text" id="fail1" />

<label for="fail2">label one</label>
<label for="fail2">label two</label>
<input type="checkbox" id="fail2" />

<label for="fail3" id="l1">label one</label>
<label for="fail3">label two</label>
<input type="checkbox" id="fail3" aria-labelledby="l1" />

<label for="fail4">First Name:</label>
<label>First Name:
    <input type="text" id="fail4" />
</label>

<label for="fail5">Choose an option:</label>
<label>Choose an option:
    <select id="fail5">
        <option selected="selected">Chosen</option>
        <option>Not Selected</option>
    </select>
</label>

<label for="fail6">Enter your comments:</label>
<label>Enter your comments:
    <textarea id="fail6"></textarea>
</label>

<label>Enter your comments:
    <label>Enter your comments:
        <textarea id="fail7"></textarea>
    </label>
</label>

<label>Enter your comments:
    <label>Enter your comments:
        <label>Enter your comments:
            <textarea id="fail8"></textarea>
        </label>
    </label>
</label>

<label for="fail9">Enter your comments:</label>
<label>Enter your comments:
    <label>Enter your comments:
        <label>Enter your comments:
            <textarea id="fail9"></textarea>
        </label>
    </label>
</label>
```

## Why it Matters

Assigning multiple labels to the same form field can cause problems for some
combinations of screen readers and browsers, and the results are inconsistent
from one combination to the next. Some combinations will read the first label.
Some will read the last label. Others will read both labels.

## Rule Description

Ensures form field does not have multiple labels.

## The Algorithm (in simple terms)

Ensures form field does not have multiple labels.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* SC 3.3.2 — Labels or Instructions
* 3.3.2.a Visible Labels
* Labels
* Group Labels
* Instructions and Other Helpful Info
* Dynamic Forms and Custom Widgets
* Name

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* 3.3.2 Labels or Instructions Level A
* Understanding Success Criterion 3.3.2: Labels or Instructions
* F68: Failure of Success Criterion 4.1.2 due to a user interface control not having a programmatically determined name
* H44: Using label elements to associate text labels with form controls
* ARIA16: Using aria-labelledby to provide a name for user interface controls
* ARIA14: Using aria-label to provide an invisible label where a visible label cannot be used
* H65: Using the title attribute to identify form controls when the label element cannot be used

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