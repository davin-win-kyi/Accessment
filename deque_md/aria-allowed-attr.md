---
{
  "rule_id": "aria-allowed-attr",
  "title": "Elements must only use allowed ARIA attributes",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-allowed-attr",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Elements must only use allowed ARIA attributes

Source: https://dequeuniversity.com/rules/axe/4.2/aria-allowed-attr

# Elements must only use allowed ARIA attributes

Rule ID:
aria-allowed-attr

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

ARIA explicitly defines which attributes are allowed for any given role and
for every attribute, where that attribute may be used. The detailed
information on each attribute can be found by looking at the documentation for
each role and/or each attribute.

**Specific Reference:** For more information about which ARIA
attributes may or should not be used by HTML element, see
[ARIA in HTML - Document conformance requirements for use of ARIA attributes
in HTML
![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://www.w3.org/TR/html-aria/#docconformance).

**General Reference:** For general information about what ARIA
can do, refer to the following external sources of information. ARIA is
primarily to be used by web developers and programmers, because implementing
ARIA usually requires JavaScript skills. Learning ARIA can also take a fair
amount of time because of the complexities of the programming logic and also
the nuances of ensuring that ARIA role-attribute combinations are valid.

* [WAI-ARIA Overview
  ![opens in a new window](/assets/images/template/courses2014/new-window.png)](http://www.w3.org/WAI/intro/aria.php)
* [WAI-ARIA 1.1
  ![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://www.w3.org/TR/wai-aria-1.1/)
* [WAI-ARIA Authoring Practices
  ![opens in a new window](/assets/images/template/courses2014/new-window.png)](http://www.w3.org/TR/wai-aria-practices/)

## Why it Matters

Using ARIA attributes in roles where they are not allowed can interfere with
the accessibility of the web page. Using an invalid role-attribute combination
will, at best, result in no effect on the accessibility of the application
and, at worst, may trigger behavior that disables accessibility for entire
portions of an application.

When ARIA attributes are used on HTML elements that are not in accordance with
WAI-ARIA 1.1, they conflict with the semantics of the elements which can cause
assistive technology products report nonsensical user interface (UI)
information that does not represent the actual UI of the document.

## Rule Description

Not all ARIA role-attribute combinations are valid. This Rule checks that each
role is supplied with allowed attributes.

## The Algorithm (in simple terms)

Checks that each element with an ARIA role uses only ARIA attributes allowed
for that role.

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