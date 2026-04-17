---
{
  "rule_id": "presentation-role-conflict",
  "title": "Elements whose role is none or presentation must not conflict with other roles",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/presentation-role-conflict",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": []
}
---

# Elements whose role is none or presentation must not conflict with other roles

Source: https://dequeuniversity.com/rules/axe/4.2/presentation-role-conflict

# Elements whose role is none or presentation must not conflict with other roles

Rule ID:
presentation-role-conflict

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

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

Minor  
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

The `presentation-role-conflict` rule has two markup patterns
that pass test criteria:

```
<li role="none"></li>

<li role="presentation"></li>
```

1. Ensure that each element with `role="none"` or
   `role="presentation"` does not have one of the following
   characteristics:

   * A
     [global ARIA attribute](https://www.w3.org/TR/wai-aria-1.1/#global_states)
   * Is focusable (either natively or using `tabindex`)

### Incorrect markup solutions

The `presentation-role-conflict` rule has three markup patterns
that fail testing criteria:

```
<li role="none" id="global-attr" aria-hidden="true"></li>

<button id="natively-focusable" role="none"></button>

<li role="presentation" id="tabindex" tabindex="0"></li>
```

## Why it Matters

There are certain cases where the semantic role of an element with
`role="none"` or `role="presentation"` does not resolve
to none or presentation (respectively). When this happens, the element is not
removed from the accessibility tree (as expected) and screen readers are able
to interact with it.

To ensure the element remains removed from the accessibility tree, you should
not add any global ARIA attributes to the element or make if focusable.

## Rule Description

Ensures elements which are marked to be removed from the accessibility tree
are in fact removed.

## The Algorithm (in simple terms)

Checks all elements with `role=“none”` or
`role=“presentation”` to ensure they do not have a global ARIA
attribute and are not focusable.

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