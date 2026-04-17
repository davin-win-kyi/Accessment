---
{
  "rule_id": "label-content-name-mismatch",
  "title": "Label and name from content mismatch",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/label-content-name-mismatch",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.5.3",
    "4.1.2",
    "WCAG 2.1"
  ]
}
---

# Label and name from content mismatch

Source: https://dequeuniversity.com/rules/axe/4.2/label-content-name-mismatch

# Label and name from content mismatch

Rule ID:
label-content-name-mismatch

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), Section 508

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

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
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 2.5.3: MUST: Label in Name

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (n): MUST: When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.

## How to Fix the Problem

Fix this issue by ensuring that the accessible name — such as the
`aria-label` — contains the text of the visible label in the
same order in which it appears. While it is not necessary that the visible
label and accessible name match exactly, it is a best practice to have the
accessible name begin with the visible text.

The following examples **pass** the Label and name from content
mismatch rule:

* Visible label and accessible name matches when trailing white spaces are
  removed:

  ```
  <div role="link" aria-label="next page ">next page</div>
  ```
* Character insensitivity between visible label and accessible name.

  ```
  <div role="link" aria-label="Next Page">next page</div>
  ```
* Full visible label is contained in the accessible name.

  ```
  <button name="link" aria-label="Next Page in the list">Next Page</button>
  ```

The following examples **fail** the Label and name from content
mismatch rule:

* Visible label doesn’t match accessible name.

  ```
  <div role="link" aria-label="OK">Next</div>
  ```
* Not all of visible label is included in accessible name.

  ```
  <button name="link" aria-label="the full">The full label</button>
  ```

## Why it Matters

This rule applies to any element that has:

* a semantic role that is a widget that supports name from content, and
* visible text content, and
* an `aria-label` or `aria-labelledby` attribute.

**Note:** widget roles that supports name from content are:
button, checkbox, gridcell, link, menuitem, menuitemcheckbox, menuitemradio,
option, radio, searchbox, switch, tab, treeitem.

### Expectation

The complete visible text content of the target element either matches or is
contained within its accessible name.

**Note:** Leading and trailing whitespace and difference in case
sensitivity should be ignored.

Speech input users can interact with a webpage by speaking the visible text
labels of menus, links, and buttons that appear on the screen. It is confusing
to speech input users when they say a visible text label they see, but the
speech command does not work because the component's accessible (programmatic)
name does not match the visible label. When a user interface component has a
visible text label — whether it be real text or an image of text —
that text must also be found in the component's accessible (programmatic)
name. When the visible label and accessible (programmatic) name for
interactive components are in sync, speech input users can effectively
interact with those components.

## Rule Description

Interactive elements labeled through their content must have their visible
label as part of their accessible name

## The Algorithm (in simple terms)

For each user interface component that includes a visible text label, the
accessible name MUST match (or include) the visible text in the label.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

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

* Label in name
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