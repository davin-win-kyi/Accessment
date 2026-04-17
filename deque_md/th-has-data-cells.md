---
{
  "rule_id": "th-has-data-cells",
  "title": "All <th> elements and elements with role=\"columnheader\" or role=\"rowheader\" must have data cells they describe",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/th-has-data-cells",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# All <th> elements and elements with role="columnheader" or role="rowheader" must have data cells they describe

Source: https://dequeuniversity.com/rules/axe/4.2/th-has-data-cells

# All <th> elements and elements with role="columnheader" or role="rowheader" must have data cells they describe

Rule ID:
th-has-data-cells

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

## Learn Web Accessibility

Subscribe to our extensive curriculum of online self-paced courses

[Learn More about Deque University](/online-courses/?adtag=dquOnline&adid=2019-01-25b&adref=dqu&adcontext=ruleHelp)

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
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: MUST: Info and Relationships

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (g): MUST: Row and column headers shall be identified for data tables.” and “(h) Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.

## How to Fix the Problem

Ensure that each table header in a data table refers to data cells so that
each header cell that is used is actually a header of something.

In other words, the `th` element must have associated data cells.

If `header` attributes exist, ensure that they reference elements
with text available to screen readers.

* The `th` element must not use the `headers` attribute
* `th` elements should only be used when there is a single row and
  single column of headers
* `th` elements must use the `scope` attribute

### Bad Example: `<th>` with set to `scope="row"` instead of `scope="col"`

Notice the `<th>` elements are scoped to
`row` when they should be scoped to `col` in the
following table:

Teddy bear collectors:

| Last Name | First Name | City |
| Phoenix | Imari | Henry |
| Zeki | Rome | Min |
| Apirka | Kelly | Brynn |

```
<table>
  <caption>Teddy bear collectors:</caption>
 <tr> 
    <th scope="row">Last Name</th>
    <th scope="row">First Name</th>
    <th scope="row">City</th>
  </tr>
  <tr>
    <td>Phoenix</td>
    <td>Imari</td>
    <td>Henry</td>
  </tr>
  <tr>
    <td>Zeki</td>
    <td>Rome</td>
    <td>Min</td>
  </tr>
  <tr>
    <td>Apirka</td>
    <td>Kelly</td>
    <td>Brynn</td>
  </tr>
</table>
```

Following is the corrected code for associating column headers with table
content in the previous example:

```
...
<th scope="col">Last Name</th>
<th scope="col">First Name</th>
<th scope="col">City</th>
...
```

## Why it Matters

Screen readers have a specific way of announcing tables. When tables are not
properly marked up, this creates the opportunity for confusing or inaccurate
screen reader output.

When tables are not marked up semantically and do not have the correct header
structure, screen reader users cannot correctly perceive the relationships
between the cells and their contents visually.

## Rule Description

Data table markup can be tedious and confusing. Markup tables semantically and
with the correct header structure. Screen readers have features to ease table
navigation, but tables must be marked up accurately for these features to work
correctly.

## The Algorithm (in simple terms)

Checks data tables markup, ensuring each header cell is referenced as a header
of a column or row.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Table caption/name
* Table Headers
* Grouped Header Associations
* Complex Header Associations

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Tables Concepts
* H43: Using id and headers attributes to associate data cells with header cells in data tables
* H51: Using table markup to present tabular information
* H63: Using the scope attribute to associate header cells and data cells in data tables
* H73: Using the summary attribute of the table element to give an overview of data tables

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