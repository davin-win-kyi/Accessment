---
{
  "rule_id": "focus-order-semantics",
  "title": "Elements in the focus order need a role appropriate for interactive content",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/focus-order-semantics",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": []
}
---

# Elements in the focus order need a role appropriate for interactive content

Source: https://dequeuniversity.com/rules/axe/4.2/focus-order-semantics

# Elements in the focus order need a role appropriate for interactive content

Rule ID:
focus-order-semantics

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

Guidelines:
Deque Best Practice

## Learn Web Accessibility

Subscribe to our extensive curriculum of online self-paced courses

[Learn More about Deque University](/online-courses/?adtag=dquOnline&adid=2019-01-25b&adref=dqu&adcontext=ruleHelp)

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
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure all elements in the focus order have an appropriate
`role` attribute value, and if the element is a custom widget, that
correspond to valid ARIA role attribute values are applied.

Ensure all device-independent user input methods have appropriate roles to
enable interaction with form content.

When no role exists at all, when focusing on the element, the screen reader
will not announce anything.

When an inappropriate role like paragraph is used for an interactive element,
the element will not receive focus, and the screen reader will not announce
anything.

If the role matches a list of roles that could be an interactive element (for
example, button, text input, radio option, checkbox, etc.), if native HTML, no
extra roles are required, but if it is a custom widget you need an aria role
that makes sense, such as `role="button"`.

If a screen reader user lands on the element and it has text, it will read the
text, but the user will not know what the element is without an appropriate
role.

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
  textbox, checkbox, columnheader, combobox, contentinfo, form, grid,
  gridcell, heading, img, link, listbox, listitem, option, radio, radiogroup,
  row, rowgroup, rowheader, scrollbar, textbox
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

Elements in the focus order need a role appropriate for interactive content so
that screen reader technology can communicate that information to users.

If interactive content elements do not have appropriate roles, the role will
not be able to perform the accessibility function intended by the developer.

When screen readers and other assistive technologies do not know the
appropriate role of each element on the web page, they are not able to
interact with it intelligently, nor are they able to communicate the role to
the user. When the value for a role is not valid, there is no way the HTML
element's set of features, properties, and methods of conveying information to
and/or from the user can be communicated via assistive technologies.

## Rule Description

User input elements must have appropriate roles, whether native HTML or a
custom widget, to convey to screen reader users their meaning when landed on
and given focus. If a custom widget, appropriate ARIA `role` values
must be used instead of abstract roles to correctly expose the purpose of the
element.

## The Algorithm (in simple terms)

Checks all interactive elements in the focus order to ensure that the role
attribute value is valid and appropriate, whether native HTML or a custom ARIA
widget.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Role
* Widget Roles
* Pseudo HTML Roles
* Abstract Roles

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

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