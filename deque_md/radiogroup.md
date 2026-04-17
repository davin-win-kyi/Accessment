---
{
  "rule_id": "radiogroup",
  "title": "Radio inputs with the same name attribute value must be part of a group",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/radiogroup",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": []
}
---

# Radio inputs with the same name attribute value must be part of a group

Source: https://dequeuniversity.com/rules/axe/4.2/radiogroup

# Radio inputs with the same name attribute value must be part of a group

Rule ID:
radiogroup

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
Deque Best Practice

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Start building more accessible experiences

     

Axe DevTools Pro helps development teams find and fix up to 80% of accessibility issues while coding. No experience required. Get started with your free trial today.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11yexperiences)

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

Ensure all related radio buttons are grouped together using:

* `fieldset` and `legend` elements
* ARIA groups `role="group"` or `role="radiogroup"` AND
  `aria-label` or `aria-labelledby`
* `aria-labelledby` that points to the same element for every radio
  button in the group

Use the following markup to ensure that all groups of radio buttons are
clustered together in a container using `fieldset` and
`legend` elements:

```
<fieldset>
    <legend>
        Form input group name
    </legend>
    Input element code
</fieldset>
```

The `fieldset` element visually groups form elements together by
placing a box around them. If you don’t like the appearance of the box, you
can easily change it using CSS. To remove the fieldset border, for example,
you could apply the following CSS:

```
fieldset{ border: none;}
```

It’s best to use the `fieldset` element for smaller number of
elements; to group larger numbers of elements, it may be more useful to use a
heading.

The `legend` element acts as the title for the group of radio
buttons. Like the `fieldset` element, if you don’t like the
appearance of the `legend` element, you can use CSS to style it in
a different manner, such as in the form of a heading, as in the following CSS
example:

```
legend {
    margin: 0;
    padding: 0;
    font-size: 1.3em;
    font-weight: bold;
}
```

It is also possible to style the `legend` element in a manner
similar to page headings. This creates greater consistency in page design
while also ensuring input group titles are announced appropriately (and not as
headings).

## Why it Matters

It is often easy for sighted users to understand the purpose of a group of
radio buttons based on context. Screen reader users require announcements and
explanations of the currently focused content. Grouping buttons together
programmatically under a descriptive name eliminates the ambiguity screen
reader users experience to create a more accessible product.

When screen reader users arrive at a set of radio buttons, that are related -
that is when they all submit values for a single named field - the individual
label associated with each radio control may not adequately convey the group's
descriptive context.

## Rule Description

Radio buttons that relate to each other must share a common label.

## The Algorithm (in simple terms)

Ensures that radio button groups have a common label.

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