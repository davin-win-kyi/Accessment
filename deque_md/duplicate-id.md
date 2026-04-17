---
{
  "rule_id": "duplicate-id",
  "title": "ID attribute values must be unique",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/duplicate-id",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": [
    "4.1.1",
    "WCAG 1.0",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# ID attribute values must be unique

Source: https://dequeuniversity.com/rules/axe/4.2/duplicate-id

# ID attribute values must be unique

Rule ID:
duplicate-id

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Start building more accessible experiences

     

Axe DevTools Pro helps development teams find and fix up to 80% of accessibility issues while coding. No experience required. Get started with your free trial today.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11yexperiences)

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
* ![](assets/images/icons/deafblind.png)Deafblind

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.1: MUST: Parsing

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.1: MUST: Parsing

## How to Fix the Problem

Rename any duplicate ID attributes values.

Duplicate IDs are common validation errors that may break the accessibility of
labels, e.g., form fields, table header cells.

To fix the problem, change an ID value if it is used more than once to be sure
each is unique. Unique `ID`'s differentiate each element from
another and prevent invalid markup, wherein only the first instance gets acted
upon by client-side scripting, or where assistive technologies typically only
reference the first one accurately.

Proper markup eliminates at least one possible source of accessibility
problems. WCAG 1.0 used to have a provision which explicitly required the use
of valid markup. WCAG 2.0 no longer requires valid markup. We mention it here
because valid markup is a quick path toward ensuring accessibility. There are
hundreds of ways a person can create invalid markup. Most of these ways are
usually inconsequential for accessibility such as un-encoded ampersands, for
instance. Others, however, are significant and may cause issues relating to
how assistive technology interacts with the page and renders the page to the
end user, such as subsequent instances of element attribute ID's being
ignored.

Submit markup code to the W3C validator at
<http://validator.w3.org> to the validity
of HTML markup in order to quickly identify reused attribute ID values.

## Why it Matters

The ID attribute uniquely identifies elements on a page. It does not make
sense to duplicate an ID.

Duplicate ID's can break the accessibility of labels for forms, table header
cells, etc., by the second instance being skipped by screen readers, or by
client-side scripts. They are common markup validation errors that can
eliminate possible sources of accessibility problems, when not breaking
accessibility.

Those experienced with client-side scripting know that when you re-use an id,
typically the only one that gets acted upon by the scripting is the first
instance of the use of that ID. Similarly, assistive technologies may, when
referencing an id, only reference the first one accurately.

## Rule Description

The value assigned to an ID attribute must be unique to prevent the second
instance from being overlooked by assistive technology. Put another way; ID
attributes may not be used more than once in the same document to
differentiate each element from another.

## The Algorithm (in simple terms)

Ensures that each element on the page with an id attribute has a unique
`id` attribute value.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Parsing and Validity
* Conflicts and duplicates

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* F77: Failure of Success Criterion 4.1.1 due to duplicate values of type ID

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