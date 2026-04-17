---
{
  "rule_id": "label-title-only",
  "title": "Form <input> elements should have a visible label",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/label-title-only",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": []
}
---

# Form <input> elements should have a visible label

Source: https://dequeuniversity.com/rules/axe/4.2/label-title-only

# Form <input> elements should have a visible label

Rule ID:
label-title-only

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

Serious  
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

Provide every form control a label using `aria-label`,
`aria-labelledby`, implicit `<label>` or explicit
`<label>`.

### Using `aria-label` and `aria-labelledby`

Most of the time it is best to use standard form labels using the
`<label>` tag. The `<label>` tag is by far
the most useful and most widely-supported method of labeling form elements,
especially among older browsers and older screen readers. There are, however,
certain circumstances that require more flexible methods of labeling objects.
One limitation of the `<label>` tag is that it can be
associated with only one form element. If circumstances require a more complex
labeling structure, the `<label>` tag is insufficient. This
is where `aria-label` and `aria-labelledby` come in.

The `aria-label` attribute allows you to add a label directly to
pretty much any HTML element, including form elements, paragraphs, tables, and
more.

#### Example: `aria-label`

The label is applied directly to the element, and is completely invisible,
which is a huge disadvantage for all sighted users, but screen readers will
read the label.

```
 <input type="text" aria-label="Search">
```

**Note:** This method should NOT be used unless there is a
compelling reason to use it. The regular `<label>` is
always preferable whenever possible.

The `aria-labelledby` attribute allows you to refer to a text label
elsewhere on the web page. Multiple objects can refer to the same text label
using `aria-labelledby`, making this method quite useful for
complex labeling situations.

#### Example: `aria-labelledby`

**Note:** As with `aria-label`, this method should
NOT be used unless there is a compelling reason to use it. This example is
overly-simplistic, just to show `aria-labelledby` works on a
technical level. Using `aria-labelledby` in such a
straightforward circumstance is inappropriate. A more standard
`<label>` tag would be better.

```
<p id="search">Search</p>
<input type="text" aria-labelledby="search">
```

Search

### Explicit Labels

Create an **explicit** association by giving the
`label` element a `for` attribute with the same value as
the form control's `id` attribute. This provides a one-to-one
mapping between the label and the element. This is the best approach for
labeling as it is supported by all modern browsers and all major assistive
technologies for all form elements.

#### Example: Explicit Label

Explicit labels make the association unambiguous for assistive technologies.

First Name:
  
Last Name:

```
<label for="fname">First Name:</label> <input type="text" name="fname" id="fname"><br>
<label for="lname">Last Name:</label> <input type="text" name="lname" id="lname">
```

### Implicit Labels

Even though we recommend creating explicit labels, create an
**implicit** association by putting the form control inside the
`label` element. This approach has inconsistent support among
assistive technologies. For instance, when this approach is used on a text
input, JAWS will read the label as intended, but when this approach is used in
a `select` menu, it won't be read.

#### Example: Implicit Label

Implicit labels allowable, but are not as broadly applicable or as reliable
as explicit labels.

First Name:   
Last Name: 

```
<label>First Name: <input type="text" name="fname"></label><br>  
<label>Last Name: <input type="text" name="lname"></label>
```

## Why it Matters

The `title` and `aria-describedby` attributes are used
to provide additional information such as a hint. Hints are exposed to
accessibility APIs differently than labels and as such, this can cause
problems with assistive technologies.

When form inputs such as text entry fields, radio buttons, check boxes, and
select menus contain no labels other than `title` and
`aria-describedby` attribute values, screen readers interpret the
content as advisory information only. Labels created by the
`title` and `aria-describedby` values are not sufficient
to create a true label that can be determined programmatically from the code
to convey the purpose of the input form element.

## Rule Description

Form `<input>` elements may be given a title using the
`title` or `aria-describedby` attributes (but not both).
These attributes are used to provide additional information such as a hint.

## The Algorithm (in simple terms)

Ensures that every `<input>` that requires a label is has a
label other than the `title` or
`aria-describedby` attributes.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Visibility of Labels
* Visibility of Group Labels

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