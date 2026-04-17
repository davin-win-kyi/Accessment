---
{
  "rule_id": "duplicate-id-active",
  "title": "ID attribute value must be unique",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/duplicate-id-active",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.1",
    "WCAG 1.0",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# ID attribute value must be unique

Source: https://dequeuniversity.com/rules/axe/4.2/duplicate-id-active

# ID attribute value must be unique

Rule ID:
duplicate-id-active

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

## Learn Web Accessibility

Subscribe to our extensive curriculum of online self-paced courses

[Learn More about Deque University](/online-courses/?adtag=dquOnline&adid=2019-01-25b&adref=dqu&adcontext=ruleHelp)

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

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.1: MUST: Parsing

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.1: MUST: Parsing

## How to Fix the Problem

Rename attributes that reuse an ID on active, focusable elements.

Duplicate active IDs are common validation errors that can break the
accessibility of labels for focusable elements, forms, table header cells,
etc.

To fix the problem, change the duplicate ID value to ensure each ID is unique.
Unique ID values differentiate each focusable element from another and prevent
invalid markup and the active ID instance is acted upon by client-side
scripting, or where assistive technologies typically only reference the active
ID of repeated elements.

Good markup eliminates at least one possible source of accessibility problems.
WCAG 1.0 used to have a provision which explicitly required the use of valid
markup. That requirement has been taken out of WCAG 2.0. We mention it here
because valid markup is a quick path toward ensuring accessibility. Most
validation issues are usually inconsequential for accessibility (e.g.,
un-encoded ampersands). Other ID validation errors are very important and may
cause issues relating to how assistive technology interacts with the page and
renders the page to the end user.

One way to test the validity of HTML markup in order to quickly identify
reused attribute ID values is to submit the code through the W3C validator at
<http://validator.w3.org>.

## Why it Matters

The ID attribute uniquely identifies focusable elements on a page. It does not
make sense to duplicate an active ID.

Duplicate active ID values break the accessibility of focusable elements
including labels for forms, table header cells, etc., Screen readers and
client-side scripts will skip any duplication other than the first instance.
Validating HTML files help prevent and eliminate possible sources of
accessibility problems, when not breaking accessibility.

Those experienced with client-side scripting know that when you re-use an
active ID, typically the only one that gets acted upon by the scripting is the
first instance of the use of that active ID. Similarly, assistive technologies
may, when referencing an active ID, only reference the first one accurately.

## Rule Description

The value assigned to active ID attributes on focusable elements must be
unique to prevent the second instance from being overlooked by assistive
technology. Put another way, active ID attributes may not be used more than
once on focusable elements in the same document; focusable active elements
require unique IDs for assistive technology to distinguish one element from
another.

## The Algorithm (in simple terms)

Ensures that each focusable element on the page with an active ID has a unique
value.

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