---
{
  "rule_id": "definition-list",
  "title": "<dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, or <template> elements",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/definition-list",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, or <template> elements

Source: https://dequeuniversity.com/rules/axe/4.2/definition-list

# <dl> elements must only directly contain properly-ordered <dt> and <dd> groups, <script>, or <template> elements

Rule ID:
definition-list

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

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: MUST: Info and Relationships

## How to Fix the Problem

Check that your definition list has only `dt` and
`dd` elements. Furthermore, make sure these are properly ordered,
`dt` should precede `dd` elements.

Definition list items require `dl` elements around the list,
`dt` elements for each term, and `dd` elements for each
definition. Each set of `dt` elements must be followed by one or
more `dd` elements. Ensure that your definition lists follow these
specifications and mimic the example below.

### Example

```
<dl>
 <dt>Coffee</dt>
  <dd>Black hot drink</dd>
 <div>
  <dt>Milk</dt>
   <dd>White cold drink</dd>
 </div>
</dl>
```

## Why it Matters

Screen readers have a specific way of announcing definition lists. When such
lists are not properly marked up, this creates the opportunity for confusing
or inaccurate screen reader output.

A definition list is used to provide the definitions of words or phrases. The
Definition List is marked up using the `dl` element. Within the
list, each term is put in a separate `dt` element, and its
definition goes in the `dd` element directly following it.

## Rule Description

Definition lists (`dl`) must contain only properly-ordered
`dt` and `dd` groups, `div`,
`script`, or `template` elements.

## The Algorithm (in simple terms)

Ensures that all `dl` elements are structured correctly.

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