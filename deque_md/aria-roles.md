---
{
  "rule_id": "aria-roles",
  "title": "ARIA roles used must conform to valid values",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-roles",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# ARIA roles used must conform to valid values

Source: https://dequeuniversity.com/rules/axe/4.2/aria-roles

# ARIA roles used must conform to valid values

Rule ID:
aria-roles

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

Ensure all values assigned to `role=""` correspond to valid ARIA
roles.

Available roles by type are:

* **Landmark**: article, banner, complementary, main, navigation,
  region, search, contentinfo
* **Widget**: alert, alertdialog, application, dialog, group,
  log, marquee, menu, menubar, menuitem, menuitemcheckbox, menuitemradio,
  progressbar, separator, slider, spinbutton, status, tab, tablist, tabpanel,
  timer, toolbar, tooltip, tree, treegrid, treeitem
* **Pseudo HTML**: button, button, checkbox, columnheader,
  combobox, contentinfo, form, grid, gridcell, heading, img, link, listbox,
  listitem, option, radio, radiogroup, row, rowgroup, rowheader, scrollbar,
  textbox
* **Document**: document (when creating a document region inside
  an other type of region)
* **Application**: application (only around a widget to enable
  normal keyboard shortcuts for page content)
* **Presentation**: presentation (to cancel the native role of
  the element)
* **Other Semantic**: math, definition, note, directory
* **Abstract**: command, composite, input, landmark, range,
  section, sectionhead, select, structure, widget

## Why it Matters

Elements assigned invalid ARIA role values are not interpreted by assistive
technology as intended by the developer.

When screen readers and other assistive technologies do not know the role of
each element on the web page, they are not able to interact with it
intelligently, nor are they able to communicate the role to the user. An
element's features, properties, and methods of conveying information to and/or
from the user can't be communicated via assistive technologies when a role
value is invalid.

## Rule Description

Values assigned to ARIA role values must be valid. Role values must be spelled
correctly, correspond to existing ARIA `role` values, and must not
be abstract roles to correctly expose the purpose of the element.

## The Algorithm (in simple terms)

Checks all elements that contain the WAI-ARIA role attribute to ensure that
the role value is valid

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

* WAI-ARIA Roles
* Accessibility Support: HTML role attribute test suite

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