---
{
  "rule_id": "aria-hidden-body",
  "title": "aria-hidden=\"true\" must not be present on the document <body>",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-hidden-body",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# aria-hidden="true" must not be present on the document <body>

Source: https://dequeuniversity.com/rules/axe/4.2/aria-hidden-body

# aria-hidden="true" must not be present on the document <body>

Rule ID:
aria-hidden-body

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

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

## How to Fix the Problem

Remove the `aria-hidden="true"` attribute from the
document `body` element.

### Caution:

`aria-hidden="false"` is known to work inconsistently
when used in conjunction with styles or attributes that have historically
prevented rendering in all modalities, such as `display: none`,
`visibility: hidden` in CSS, or the hidden attribute in HTML5.
Use caution and test thoroughly before relying on this approach.

Reconsider the location of the hidden content to determine whether you can
relocate it to an area of the page other than the `body` element.
Typically, content is hidden from screen readers to reduce the unnecessary
information that screen reader users would tend to skip (redundant or
extraneous content).

## Why it Matters

When `<body aria-hidden="true"`, content is not
accessible to assistive technology.

Applying `aria-hidden="true"` to otherwise accessible objects: A
web page is designed to be fully accessible, and it would be accessible if
elements do not contain the
`aria-hidden="true"` attribute value. Screen readers do
not read content marked with the
`aria-hidden="true"` attribute value. Users can still tab
to focusable elements in the hidden objects, but screen readers remain silent.

Any content or interface elements intentionally hidden from users — e.g.,
inactive dialogs, collapsed menus — must also be hidden from screen reader
users. When items are available to sighted users — such as when they activate
a button or expand a menu item — the same items must be available to screen
reader users. The goal is to provide screen reader users an equivalent user
experience to sighted users. If there is a compelling reason to hide content
from sighted users, there is usually a compelling reason also to hide that
content from blind users. Further, when content is made available to sighted
users, it makes sense to make it available to blind users as well.

## Rule Description

Document content is not accessible to assistive technology if
`<body aria-hidden="true">`.

## The Algorithm (in simple terms)

Checks for the presence of the
`aria-hidden="true"` attribute the document's
`body` element and alerts with a pass or fail message accordingly.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Custom JavaScript/ARIA Widgets (2025)
* ARIA Concepts

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* W3C WAI-ARIA 1.1 States and Properties - aria-hidden

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