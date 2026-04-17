---
{
  "rule_id": "aria-required-attr",
  "title": "Required ARIA attributes must be provided",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-required-attr",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Required ARIA attributes must be provided

Source: https://dequeuniversity.com/rules/axe/4.2/aria-required-attr

# Required ARIA attributes must be provided

Rule ID:
aria-required-attr

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

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

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

## How to Fix the Problem

Add the missing ARIA state or property to the given element.

For more information about which ARIA role, state, and property attributes are
allowed by role, see
[Accessible Rich Internet Applications (WAI-ARIA) 1.1 - Supported States and
Properties](https://www.w3.org/TR/wai-aria-1.1/#states_and_properties).

Whether widget roles are mapped to platform accessibility API states, for
access by assistive technologies, or are meant to be accessed directly from
the DOM, any property or state attributes they require must be specified so
that assistive technologies can convey the purpose of the element to users.

These properties and states apply to user interface objects like alert,
alertdialog, menu, progressbar, tooltip, and other widgets.

* **Properties** 
  + aria-autocomplete
  + aria-haspopup
  + aria-label
  + aria-level
  + aria-multiline
  + aria-multiselectable
  + aria-orientation
  + aria-readonly
  + aria-required
  + aria-sort
  + aria-valuemax
  + aria-valuemin
  + aria-valuenow
  + aria-valuetext
* **States** 
  + aria-checked
  + aria-disabled
  + aria-expanded
  + aria-hidden
  + aria-invalid
  + aria-pressed
  + aria-selected

  For more information, see W3C WAI-ARIA 1.1
  [Required States and Properties](https://www.w3.org/TR/wai-aria-1.1/#requiredState)
  in Characteristics of Roles.

## Why it Matters

ARIA widget roles require additional attributes that describe the state of the
widget. The state of the widget is not communicated to screen reader users if
a required attribute is omitted.

Certain roles act as composite user interface widgets. As such, they typically
act as containers that manage other, contained widgets. When an object
inherits from multiple ancestors and one ancestor indicates support for one
property while another ancestor indicates that the same property is required,
the property becomes required on the inheriting object. In some cases, default
values are sufficient to meet ARIA attribute requirements.

When required state and property attributes for specific roles (and subclass
roles) are not present, screen readers may not be able to convey the
definition of what the element's role is to the users.

## Rule Description

ARIA widget roles must have appropriate attributes describing the state or
properties of the widget.

## The Algorithm (in simple terms)

Checks all elements with the `role` attribute to ensure required
attributes are defined.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Overview
* Value

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* WAI-ARIA States and Properties Taxonomy

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