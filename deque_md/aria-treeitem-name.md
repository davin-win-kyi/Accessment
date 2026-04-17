---
{
  "rule_id": "aria-treeitem-name",
  "title": "ARIA treeitem must have an accessible name",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-treeitem-name",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": []
}
---

# ARIA treeitem must have an accessible name

Source: https://dequeuniversity.com/rules/axe/4.2/aria-treeitem-name

# ARIA treeitem must have an accessible name

Rule ID:
aria-treeitem-name

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

Serious  
▼

Minor

Critical

### Disabilities Affected

* Blind
* Low Vision
* Mobility

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

### Correct markup solutions

The `aria-treeitem-name` rule has four markup patterns that pass
test criteria:

```
<div role="treeitem" id="al" aria-label="Name"></div>

<div role="treeitem" id="alb" aria-labelledby="labeldiv"></div>

<div role="treeitem" id="combo" aria-label="Aria Name">Name</div>

<div role="treeitem" id="title" title="Title"></div>
```

1. Ensure that each element with `role="treeitem"` has one of the
   following characteristics:

   * Inner text that is discernible to screen reader users.
   * Non-empty `aria-label` attribute.
   * `aria-labelledby` pointing to element with text which is
     discernible to screen reader users.

### Incorrect markup solutions

The `aria-treeitem-name` rule has four markup patterns that fail
testing criteria:

```
<div role="treeitem" id="empty"></div>

<div role="treeitem" id="alempty" aria-label=""></div>

<div role="treeitem" id="albmissing" aria-labelledby="nonexistent"></div>

<div role="treeitem" id="albempty" aria-labelledby="emptydiv"></div>
<div id="emptydiv"></div>
```

## Why it Matters

Screen reader users are not able to discern the purpose of elements with
`role="treeitem"` that do not have an accessible name.

## Rule Description

Aria treeitem elements must have discernible text that clearly describes the
destination, purpose, function, or action for screen reader users.

## The Algorithm (in simple terms)

Checks all elements with `role="treeitem"` to ensure that they have
a discernable, accessible name.

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