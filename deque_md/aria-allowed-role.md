---
{
  "rule_id": "aria-allowed-role",
  "title": "ARIA role should be appropriate for the element",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-allowed-role",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": []
}
---

# ARIA role should be appropriate for the element

Source: https://dequeuniversity.com/rules/axe/4.2/aria-allowed-role

# ARIA role should be appropriate for the element

Rule ID:
aria-allowed-role

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

Guidelines:
Deque Best Practice

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

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

Ensure all HTML elements with a `role` attribute are allowed to be
assigned the role value. Refer to the
[HTML in ARIA specification
![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://www.w3.org/TR/html-aria/#docconformance)
to see which role values are allowed for a given HTML element and context.

### Correct markup solutions

```
<ul role="menu">
  <li role="none">
    <button role="menuitem">Start</button>
  </li>
</ul>
```

### Incorrect markup solutions

```
<ul role="button">Name</ul>

<button role="heading" aria-level="2">Welcome</button>
```

## Why it Matters

Using WAI-ARIA roles where they are not allowed can interfere with the
accessibility of the web page. Using an invalid HTML element and ARIA role
combination will, at best, result in no effect on the accessibility of the
application and, at worst, may trigger behavior that disables accessibility
for entire portions of an application.

When ARIA roles are used on HTML elements that are not in accordance with the
HTML in ARIA specification, they conflict with the semantics of the elements
which can cause assistive technology products to report nonsensical user
interface (UI) information that does not represent the actual UI.

## Rule Description

Not all WAI-ARIA role values are allowed on every HTML element. This Rule
checks that each HTML element with an assigned role is allowed to have that
role.

## The Algorithm (in simple terms)

Check all elements containing WAI-ARIA role attribute values to ensure that
the role value is allowed for the element.

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
* ARIA in HTML

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