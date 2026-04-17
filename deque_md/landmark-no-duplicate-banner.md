---
{
  "rule_id": "landmark-no-duplicate-banner",
  "title": "Page must not have more than one banner landmark",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/landmark-no-duplicate-banner",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Page must not have more than one banner landmark

Source: https://dequeuniversity.com/rules/axe/4.2/landmark-no-duplicate-banner

# Page must not have more than one banner landmark

Rule ID:
landmark-no-duplicate-banner

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

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

Moderate  
▼

Minor

Critical

### Disabilities Affected

* Sighted Keyboard Users
* Blind
* ![](assets/images/icons/deafblind.png)Deafblind

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure that individual HTML pages have only banner landmark.

Decide which banner landmark you want to keep and remove any other banner
landmarks.

The `role="banner"` ARIA landmark should only appear once on an
element that is unique to the HTML document even though the HMTL5
specification allows multiple instances of an equivalent
`header` landmark value. It is appropriate in most web designs to
have only one banner landmark whether it is specified using ARIA or HTML5.

## Why it Matters

Landmarks allow blind users to navigate and find content quickly. Missing
landmarks require screen reader users to sort through too much extra
information to find anything.

JAWS, NVDA, and VoiceOver support the ability to navigate to sections of a web
page using ARIA landmarks. Landmarks provide a more elegant solution to the
problem of providing a way for users to skip to the main content of the web
page. There is no visible alteration to the web design, making it unobtrusive
and invisible. Of course, the fact that this technique is invisible is fine
for blind screen reader users, but not so fine for sighted keyboard users or
screen enlarger users with low vision. In this sense, HTML 5 regions and ARIA
landmarks cannot yet replace the old-fashioned "skip navigation"
links. Browsers still do not have a built-in way to notify users that HTML 5
regions or ARIA landmarks are present. Screen reader users are the only ones
who can take advantage of them. There is a
[Firefox ARIA landmark extension
![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://github.com/davidtodd/landmarks)
available, which adds the ability to navigate by landmarks in Firefox, but
this is not a native feature of the browser.

## Rule Description

Ensures the page has at most one banner landmark.

## The Algorithm (in simple terms)

This rule finds all banner landmarks, filters out any landmarks that do not
map their role, and verifies that there is no more than one.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmarks
* Best Practices for Landmarks
* Navigating Landmarks with Screen Readers
* Role

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* WebAIM - ARIA Landmark Roles
* WC3 Banner Landmark: ARIA Landmarks Example
* W3 ARIA - Banner Role

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