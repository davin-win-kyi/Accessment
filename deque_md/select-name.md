---
{
  "rule_id": "select-name",
  "title": "select element must have an accessible name",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/select-name",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# select element must have an accessible name

Source: https://dequeuniversity.com/rules/axe/4.2/select-name

# select element must have an accessible name

Rule ID:
select-name

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

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
* Low Vision
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (n): MUST: When electronic forms are designed to be completed on-line, the form shall allow people using assistive technology to access the information, field elements, and functionality required for completion and submission of the form, including all directions and cues.

## How to Fix the Problem

Programmatically associate labels with select elements. The recommended method
for most circumstances is to use the `label` element and an
explicit association using the `for` and
`id` attributes. The examples here are ordered from the most common
acceptable solution to the least common acceptable solution.

```
<label for="state">State:</label> <select id="state"></select>
```

The label can also be *implicit* by wrapping the
`<label>` element around the select:

```
<label>State: <select></select></label>
```

If the select is already labeled visually some other way, it may be acceptable
to use `aria-label` to create an invisible text label for screen
readers to read.

```
<select aria-label="State"></select>
```

An alternative method (sometimes used when adding a
`<label>` tag would break functionality or styles, or when
multiple labels apply to the same select), is to use
`aria-labelledby` instead:

```
<div id="state">State:</div> <select aria-labelledby="state"></select>
```

Also ensure that all `id` elements are unique on each page, and
that the label text makes sense to someone listening to them with a screen
reader.

When adding labels, be sure to avoid the following:

```
State: <select></select>
```

This markup renders to produce a textbox with the words "State:"
next to it. Sighted users have no problem associating the text with the select
field. Nevertheless, this connection is not as clear for non-sighted users,
especially as forms grow longer and more complex. This ambiguity can make
errors more likely, especially when the information required is more complex
than a State.

For detailed instructions on how to implement these various labelling methods,
see the Automated Checks that run as a part of this rule.

Finally, ensure that each `select` element has only one label.

## Why it Matters

Effective form labels are required to make forms accessible. The purpose of
form elements such as checkboxes, radio buttons, input fields, etcetera, is
often apparent to sighted users, even if the form element is not
programmatically labeled. Screen readers users require useful form labels to
identify form fields. Adding a label to all form elements eliminates ambiguity
and contributes to a more accessible product.

When labels for form elements are absent, screen reader users do not know the
input data expectations. Screen readers cannot programmatically determine
information about input objects without an established label relationship (or
redundant text serving as a label).

## Rule Description

Each select element must have a programmatically associated label element.

## The Algorithm (in simple terms)

Ensures that every select element has a programmatically associated label.

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