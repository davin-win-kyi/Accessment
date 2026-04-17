---
{
  "rule_id": "dlitem",
  "title": "<dt> and <dd> elements must be contained by a <dl>",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/dlitem",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <dt> and <dd> elements must be contained by a <dl>

Source: https://dequeuniversity.com/rules/axe/4.2/dlitem

# <dt> and <dd> elements must be contained by a <dl>

Rule ID:
dlitem

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
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: MUST: Info and Relationships

## How to Fix the Problem

Wrap the list item in parent `dl` elements to ensure the list
follows the proper hierarchy. Furthermore, make sure that the
`dt` and `dd` elements are in the proper order.

This rule checks for the valid hierarchical use of definition list elements to
help screen reader users know what they are listening to, and what to expect
as they listen to definition lists with regard to the organizational
relationship of parent and child items.

For example, if you have the following code causing an error:

```
<dt>Coffee</dt>
  <dd>Black hot drink</dd>
<dt>Milk</dt>
  <dd>White cold drink</dd>
```

Wrap it in the <dl> element:

```
<dl>
  <dt>Coffee</dt>
    <dd>Black hot drink</dd>
  <dt>Milk</dt>
    <dd>White cold drink</dd>
</dl>
```

## Why it Matters

A definition list item must be wrapped in parent `dl` elements,
otherwise it will be invalid.

A definition list must follow a specific hierarchy. A list is defined using
the `dl` element. What follows are alternating sets of
`dt` and `dd` elements, starting with the
`dt` element. `dt` elements define a term while
`dd` elements denote a term's description. Each set of
`dt` elements must have a corresponding set of
`dd` elements. Only `dt` and `dd` elements
are allowed in definition list. If this hierarchy is not followed, the list
will be invalid.

## Rule Description

Definition list items (`dt` and/or `dd`) must be wrapped
in parent `dl` elements to be valid. This enables screen reader
users to understand the proper hierarchy of information in the list.

## The Algorithm (in simple terms)

Ensures that all child `dd` and `dt` elements have a
`dl` as a parent.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Semantic Markup for Lists

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H40: Using description lists
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