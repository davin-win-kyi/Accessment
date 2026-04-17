---
{
  "rule_id": "aria-hidden-focus",
  "title": "aria-hidden elements do not contain focusable elements",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-hidden-focus",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1",
    "WCAG21"
  ]
}
---

# aria-hidden elements do not contain focusable elements

Source: https://dequeuniversity.com/rules/axe/4.2/aria-hidden-focus

# aria-hidden elements do not contain focusable elements

Rule ID:
aria-hidden-focus

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (AA), WCAG 2.0 (AA)

## Learn Web Accessibility

Subscribe to our extensive curriculum of online self-paced courses

[Learn More about Deque University](/online-courses/?adtag=dquOnline&adid=2019-01-25b&adref=dqu&adcontext=ruleHelp)

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

* WCAG 2.1 (AA)
* WCAG 2.0 (AA)

### WCAG Success Criteria [WCAG 2.1 (AA)]

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (AA)]

* 4.1.2: MUST: Name, Role, Value

## How to Fix the Problem

Fix the issue by ensuring the value inside each attribute is spelled correctly
and corresponds to a valid value. Use appropriate ARIA roles, states, and
properties.

The following examples PASS the `aria-hidden="true"` elements do
not contain focusable elements rule:

* Content not focusable by default.

  ```
  <p aria-hidden="true">Some text</p>
  ```
* Content hidden through CSS.

  ```
  <div aria-hidden="true">
      <a href="/" style="display:none">Link</a>
  </div>
  ```
* Content made unfocusable through tabindex.

  ```
  <div aria-hidden="true">
  	<button tabindex="-1">Some button</button>
  </div>
  ```
* Content made unfocusable through disabled.

  ```
  <input disabled aria-hidden="true" />
  ```
* `aria-hidden` can’t be reset once set to true on an ancestor.

  ```
  <div aria-hidden="true">
      <div aria-hidden="false">
          <button tabindex="-1">Some button</button>
      </div>
  </div>
  ```

The following examples FAIL the `aria-hidden="true"` elements do
not contain focusable elements rule:

* Focusable off screen link.

  ```
  <div aria-hidden="true">
  	<a href="/" style="position:absolute; top:-999em">Link</a>
  </div>
  ```
* Focusable form field, incorrectly disabled.

  ```
  <div aria-hidden="true">
  	<input aria-disabled="true" />
  </div>
  ```
* `aria-hidden` can’t be reset once set to true on an ancestor.

  ```
  <div aria-hidden="true">
      <div aria-hidden="false">
          <button>Some button</button>
      </div>
  </div>
  ```
* Focusable content through `tabindex`.

  ```
  <p tabindex="0" aria-hidden="true">Some text</p>
  ```
* Focusable summary element.

  ```
  <details aria-hidden="true">
      <summary>Some button</summary>
      <p>Some details</p>
  </details>
  ```

## Why it Matters

Using the `aria-hidden="true"` attribute on an element removes the
element and ALL of its child nodes from the accessibility API making it
completely inaccessible to screen readers and other assistive technologies.
Aria-hidden may be used with extreme caution to hide visibly rendered content
from assistive technologies only if the act of hiding this content is intended
to improve the experience for users of assistive technologies by removing
redundant or extraneous content. If aria-hidden is used to hide visible
content from screen readers, the identical or equivalent meaning and
functionality must be exposed to assistive technologies.

**Note:** Using `aria-hidden="false"` on content that
is a descendent of an element that is hidden using
`aria-hidden="true"` will NOT expose that content to the
accessibility API and it will not be accessible to screen readers or other
assistive technologies.

The rule applies to any element with an
`aria-hidden="true"` attribute.

By adding `aria-hidden="true"` to an element, content authors
ensure that assistive technologies will ignore the element. This can be used
to hide decorative parts of a web page, such as icon fonts - that are not
meant to be read by assistive technologies.

A focusable element with `aria-hidden="true"` is ignored as part of
the reading order, but still part of the focus order, making it’s state of
visible or hidden unclear.

* <https://www.w3.org/WAI/WCAG21/Understanding/name-role-value.html>
* <https://www.w3.org/TR/wai-aria-1.1/#aria-hidden>
* <https://www.w3.org/TR/html/editing.html#can-be-focused>

## Rule Description

This rule checks `aria-hidden` elements do not contain focusable
elements.

## The Algorithm (in simple terms)

For all user interface components (including but not limited to: form
elements, links and components generated by scripts), the name and role can be
programmatically determined; states, properties, and values that can be set by
the user can be programmatically set; and notification of changes to these
items is available to user agents, including assistive technologies.

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