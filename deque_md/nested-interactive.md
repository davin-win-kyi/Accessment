---
{
  "rule_id": "nested-interactive",
  "title": "Nested interactive controls are not announced by screen readers",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/nested-interactive",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Nested interactive controls are not announced by screen readers

Source: https://dequeuniversity.com/rules/axe/4.2/nested-interactive

# Nested interactive controls are not announced by screen readers

Rule ID:
nested-interactive

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

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
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

## How to Fix the Problem

### Correct markup solutions

Interactive control elements must not have focusable descendants.

```
<button>Submit</button>
```

### Incorrect markup solutions

```
<button>
  Save
  <a href="rules/axe/html#">More options</a>
</button>

<div role="button">
  Search
  <a href="rules/axe/html#">Settings</a>
</div>
```

## Why it Matters

Focusable elements with an interactive control ancestor (any element that
accepts user input such as button or anchor elements) are not announced by
screen readers and create an empty tab stop. That is, you could tab to the
element but the screen reader will not announce its name, role, or state.

## Rule Description

Nested interactive controls are not announced by screen readers

## The Algorithm (in simple terms)

Checks all interactive controls and ensures they do not contain focusable
child elements.

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