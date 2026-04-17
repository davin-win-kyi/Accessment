---
{
  "rule_id": "aria-roledescription",
  "title": "Use aria-roledescription on elements with a semantic role",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-roledescription",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Use aria-roledescription on elements with a semantic role

Source: https://dequeuniversity.com/rules/axe/4.2/aria-roledescription

# Use aria-roledescription on elements with a semantic role

Rule ID:
aria-roledescription

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

Serious  
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

ARIA explicitly defines which attributes are allowed for any given role and
for every attribute, where that attribute may be used. The detailed
information on each attribute can be found by looking at the documentation for
each role and/or each attribute.

The **aria-roledescription** rule includes two failing
conditions, three passing conditions, and two incomplete conditions.

**aria-roledescription failing conditions:**

**aria-roledescription** returns false for elements with no role
value on elements where a role value should be specified.

* `<p aria-roledescription="my paragraph"
  id="fail1">paragraph</p>`
* `<div aria-roledescription="my div" id="fail2">div</div>`

**aria-roledescription passing conditions:**

* **aria-roledescription** returns **true** for
  elements with an **explicitly** supported role.
* **aria-roledescription** returns **true** for
  elements with an **implicitly** supported role.

1. `<img aria-roledescription="my img" src="foo.png" id="pass1"
   />`
2. `<button aria-roledescription="my button"
   id="pass2">button</button>`
3. `<div role="combobox" aria-roledescription="my combobox"
   id="pass3"></div>`

**aria-roledescription incomplete conditions:**

**aria-roledescription** returns **undefined** for
elements with an unsupported role.

1. `<h1 aria-roledescription="my heading"
   id="incomplete1">heading</h1>`
2. `<div role="rowgroup" aria-roledescription="my row"
   id="incomplete2"></div>`

**Specific Reference:** For more information about which ARIA
attributes may or should not be used by HTML element, see
[ARIA in HTML - Document conformance requirements for use of ARIA attributes
in HTML
![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://www.w3.org/TR/html-aria/#docconformance). For more information about using the
`aria-roledescription` attribute, see
[ARIA in HTML - aria-roledescription (property)
![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://www.w3.org/TR/wai-aria-1.1/#aria-roledescription).

**General Reference:** For general ARIA information refer to the
following external resources. ARIA is primarily used by web developers and
programmers; implementing ARIA effectively usually requires JavaScript skills.
Learning ARIA can be a lengthy process due to programming logic complexities
and nuances in the specification requiring that ARIA `role` and
`aria-roledescription` combinations are valid.

* [WAI-ARIA Overview
  ![opens in a new window](/assets/images/template/courses2014/new-window.png)](http://www.w3.org/WAI/intro/aria.php)
* [WAI-ARIA 1.1
  ![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://www.w3.org/TR/wai-aria-1.1/)
* [WAI-ARIA Authoring Practices
  ![opens in a new window](/assets/images/template/courses2014/new-window.png)](http://www.w3.org/TR/wai-aria-practices/)

## Why it Matters

Inappropriate `aria-roledescription` attribute values that conflict
with an element's implied or explicit `role` value can interfere
with the accessibility of the web page. A conflicting
`aria-roledescription` attribute value may result in no effect on
the accessibility of the application and may trigger behavior that disables
accessibility for entire portions of an application.

When `aria-roledescription`> attributes are applied to HTML
elements not in accordance with WAI-ARIA 1.1, semantics conflict between the
`aria-roledescription` value and the implicit or explicit element
`role` value which may result in assistive technology products
reporting nonsensical user interface (UI) information that does not correctly
represent the intended UI experience.

## Rule Description

Ensures that the `aria-roledescription` attribute is only used on
elements with an implicit or explicit `role` values.

## The Algorithm (in simple terms)

Use `aria-roledescription` values to appropriately describe implied
or explicit element `role` values.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Creating Landmarks (HTML5, ARIA)
* Custom JavaScript/ARIA Widgets (2025)

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Accessible Rich Internet Applications (WAI-ARIA) 1.1 - Taxonomy of States and Properties
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