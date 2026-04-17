---
{
  "rule_id": "listitem",
  "title": "<li> elements must be contained in a <ul> or <ol>",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/listitem",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <li> elements must be contained in a <ul> or <ol>

Source: https://dequeuniversity.com/rules/axe/4.2/listitem

# <li> elements must be contained in a <ul> or <ol>

Rule ID:
listitem

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

Serious  
▼

Minor

Critical

### Disabilities Affected

* Blind
* Deaf
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: MUST: Info and Relationships

## How to Fix the Problem

Ensure that all list item `li` elements are wrapped inside of
`ul` or `ol` parent elements.

List items may be contained in either unordered (bullet) lists or ordered
(sequentially numbered) lists.

Screen readers notify users when they come to a list, and tell them how many
items are in a list. Announcing the number of list items and the current list
item helps listeners know what they are listening to, and what to expect as
they listen to it. Child list item elements must be contained within the
appropriate parent list elements enabling screen readers to inform the
listener that they are listening to a list.

### Bad example

```
<li>Coffee</li>
<li>Tea</li>
<li>Milk</li>
```

### Good example

```
<ul>
    <li>Coffee</li>
    <li>Tea</li>
    <li>Milk</li>
</ul>
```

## Why it Matters

For a list to be valid, it must have both parent and child elements. Parent
elements can either be a set of `ul` tags or a set of
`ol` tags. Child elements must be declared inside of these tags
using the `li` tag.

Screen readers notify users when they come to a list, and tell them how many
items are in a list. Announcing the number of items in a list and the current
list item helps listeners know what they are listening to, and what to expect
as they listen to it.

If you don't mark up a list using proper semantic markup in a hierarchy, list
items cannot inform the listener that they are listening to a list when no
parent is indicating the presence of a list and the type of list.

## Rule Description

All list items (`li`) must be contained within `ul` or
`ol` parent elements.

## The Algorithm (in simple terms)

Ensures `li` elements are used semantically.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Lists

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H48: Using ol, ul and dl for lists or groups of links

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