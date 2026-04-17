---
{
  "rule_id": "checkboxgroup",
  "title": "Checkbox inputs with the same name attribute value must be part of a group",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/checkboxgroup",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": []
}
---

# Checkbox inputs with the same name attribute value must be part of a group

Source: https://dequeuniversity.com/rules/axe/4.2/checkboxgroup

# Checkbox inputs with the same name attribute value must be part of a group

Rule ID:
checkboxgroup

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

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure all related checkboxes are grouped together using one of the following
methods:

* `fieldset` and `legend` tags
* ARIA groups `role="group"` and `aria-label` or
  `aria-labelledby`
* `aria-labelledby` that points to the same element for every
  checkbox in the group

Associate the labels for checkboxes by assigning an id to the
`input` element and referencing that ID in the
`label` element. Also group checkboxes with the
`fieldset` and appropriate `legend` elements. The
`legend` element acts as a label for the group as a whole.

### Note:

VoiceOver for macOS currently has a bug in which the
`legend` element content is not read when the fields within the
`fieldset` element receive focus. Older versions of VoiceOver did
not have this bug; we assume this is a temporary glitch that Apple will fix
soon.

### Example

```
      <fieldset>
<legend>Select one or more colors</legend>
<input type="checkbox" name="r" id="r" value="red"> <label for="r">Red</label>
<input type="checkbox" name="b" id="b" value="blue"> <label for="b">Blue</label>
<input type="checkbox" name="y" id="y" value="yellow"> <label for="y">Yellow</label></fieldset>
```

Select one or more colors

Red

Blue

Yellow

## Why it Matters

It is often easy for sighted users to understand the purpose of a group of
checkboxes based on context. This is not, however, always the case for screen
reader users. Grouping checkboxes together programmatically under a clear,
descriptive name eliminates the ambiguity screen reader users experience to
create a more accessible product.

One limitation of the `label` tag is that it can be associated with
only one form element. If circumstances require a more complex labeling
structure, the `label` tag is insufficient. This is where
`aria-label` and `aria-labelledby` come in. Grouping
related form input elements such as checkboxes by placing a box around them
visually does not group them programmatically so that screen readers can read
a group label when screen reader users arrive at the group.

## Rule Description

All checkbox groups must have either a proper
`aria-labelledby` value for all group members, or a proper
containing `fieldset` or ARIA group to associate them
programmatically for screen reader users.

## The Algorithm (in simple terms)

Ensures that all checkbox groups have a `group` element and that
that the group designation is consistent.

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