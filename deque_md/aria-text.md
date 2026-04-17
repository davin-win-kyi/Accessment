---
{
  "rule_id": "aria-text",
  "title": "Ensures role=\"text\" is used on elements with no focusable descendants",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-text",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": []
}
---

# Ensures role="text" is used on elements with no focusable descendants

Source: https://dequeuniversity.com/rules/axe/4.2/aria-text

# Ensures role="text" is used on elements with no focusable descendants

Rule ID:
aria-text

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
Deque Best Practice

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
* Mobility

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

### Correct markup solutions

The `role="text"` attribute should be put on an element with no
focusable descendants.

```
<h1><span role="text">Hello <br/>World</span></h1>
```

### Incorrect markup solutions

```
<span role="text">
  <a href="/site.html">Not announced as link</a>
</span>
```

## Why it Matters

When a text node is split by markup (e.g.
`<h1>Hello <span>World</span></h1>`)
VoiceOver will treat it as two separate phrases instead of just one. Adding
`role="text"` around the elements solves the problem. However, it
also overrides the role of the element and all descendants and treats them all
as text nodes. If one of the descendant elements is also focusable it would
create an empty tab stop. That is, you could tab to the element but VoiceOver
would not announce its name, role, or value.

## Rule Description

Elements with `role="text"` must not have focusable descendants.

## The Algorithm (in simple terms)

Checks all elements with `role="text"` to ensure that they do not
have focusable descendants.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

No related course information available.

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

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