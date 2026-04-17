---
{
  "rule_id": "aria-valid-attr",
  "title": "ARIA attributes must conform to valid names",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-valid-attr",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# ARIA attributes must conform to valid names

Source: https://dequeuniversity.com/rules/axe/4.2/aria-valid-attr

# ARIA attributes must conform to valid names

Rule ID:
aria-valid-attr

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
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

## How to Fix the Problem

This rule checks for the presence of an unrecognized ARIA attribute, which
prevents the attribute from functioning as intended.

Ensure all ARIA attributes (as opposed to the values inside of them) used are
spelled correctly and correspond to valid ARIA attribute names.

For example, `aria-hidden="true"` would pass, while
`aria-visible="rute"` would fail.

**Authoring Tools**: Using authoring and debugging tools that
compare attributes for widget roles, states, and properties to those supported
in WAI-ARIA may check the validity of ARIA attributes automatically during
development, but they cannot reliably eliminate the need for testing.

**Related WAI-ARIA 1.1 W3C Recommendation Sections**: To be
certain you are using recognized attribute names and that they are spelled
correctly, refer to the following sections for complete details of each ARIA
attribute:

* [Widget Attributes](http://www.w3.org/TR/wai-aria-1.1/#attrs_widgets)
* [Live Region Attributes](http://www.w3.org/TR/wai-aria-1.1/#attrs_liveregions)
* [Drag-and-Drop Attributes](http://www.w3.org/TR/wai-aria-1.1/#attrs_dragdrop)
* [Relationship Attributes](http://www.w3.org/TR/wai-aria-1.1/#attrs_relationships)
* [Definitions of States and Properties (all aria-\* attributes)](http://www.w3.org/TR/wai-aria-1.1/#state_prop_def)
* [Role Attribute](http://www.w3.org/TR/wai-aria-1.1/#host_general_role)
* [State and Property Attributes](http://www.w3.org/TR/wai-aria-1.1/#host_general_attrs)
* [State and Property Attribute Processing](http://www.w3.org/TR/wai-aria-1.1/#state_property_processing)
* [WAI-ARIA Attributes Module](http://www.w3.org/TR/wai-aria-1.1/#xhtml_mod)
* [WAI-ARIA Attributes XML Schema Module](http://www.w3.org/TR/wai-aria-1.1/#xhtml_schema_mod)

## Why it Matters

If the developer uses a non-existent or misspelled ARIA attribute, the
attribute will not be able to perform the accessibility function intended by
the developer.

In order to allow assistive technologies to convey appropriate information to
persons with disabilities, user interface elements intended to improve the
accessibility and interoperability of web and application content must conform
to properly spelled and current ARIA attributes.

When developers do not use attributes defined in the WAI-ARIA 1.1 W3C
Recommendation, they do not properly convey user interface behaviors and
structural information to assistive technologies in document-level markup.

## Rule Description

ARIA attributes starting with `aria-` must have valid names.
Referring to a misspelled attribute or to one that does not exist will result
in an invalid attribute and thus failure of this rule.

## The Algorithm (in simple terms)

Checks all elements that contain WAI-ARIA attributes to ensure that the
attributes are valid attributes.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmark Roles
* Widget Roles
* Pseudo HTML Roles
* The Document Role
* The Application Role
* The Presentation Role
* The Math Role
* The Definition Role
* The Note Role
* The Directory Role
* Abstract Roles

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Accessible Rich Internet Applications (WAI-ARIA) 1.1 - Supported States and Properties

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