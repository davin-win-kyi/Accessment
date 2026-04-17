---
{
  "rule_id": "frame-tested",
  "title": "Frames must be tested with axe-core",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/frame-tested",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": []
}
---

# Frames must be tested with axe-core

Source: https://dequeuniversity.com/rules/axe/4.2/frame-tested

# Frames must be tested with axe-core

Rule ID:
frame-tested

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

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

Critical  
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

Ensure `iframe` and `frame` elements contain the
axe-core script.

The `after - function (optional)` check is the function that gets
called for checks that operate on a page-level basis, to process the results
from the `iframe` elements.

The `pageLevel` Ensures `iframe` and
`frame` elements contain the axe-core script rule, when set to
true, is only applied when the entire page is tested. Results from nodes on
different frames are combined into a single result.

## Why it Matters

Without the axe-core script, it is not possible for the tool to perform
violation checking on multiple levels of nested iframes.

## Rule Description

Frames must be tested with axe-core.

## The Algorithm (in simple terms)

The `iframes` property, when set to true, tells axe to run inside
iframes. This uses both frame and iframe selectors to check for the axe-core
script to return a "review item" result.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Iframes
* Automated Testing Tools
* Axe DevTools
* Types of Automated Testing

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* https://axe-core.org/
* aXe - Chrome Web Store

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