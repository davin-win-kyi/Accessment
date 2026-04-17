---
{
  "rule_id": "table-fake-caption",
  "title": "Data or header cells should not be used to give caption to a data table",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/table-fake-caption",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Data or header cells should not be used to give caption to a data table

Source: https://dequeuniversity.com/rules/axe/4.2/table-fake-caption

# Data or header cells should not be used to give caption to a data table

Rule ID:
table-fake-caption

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.1 Experimental, WCAG 2.0 (A), WCAG 2.0 Experimental, Section 508

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Start building more accessible experiences

     

Axe DevTools Pro helps development teams find and fix up to 80% of accessibility issues while coding. No experience required. Get started with your free trial today.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11yexperiences)

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
* WCAG 2.1 Experimental
* WCAG 2.0 (A)
* WCAG 2.0 Experimental
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: SHOULD: Info and Relationships

### WCAG Success Criteria [WCAG 2.1 Experimental]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: SHOULD: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 Experimental]

* 1.3.1: MUST: Info and Relationships

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (g): MUST: Row and column headers shall be identified for data tables.” and “(h) Markup shall be used to associate data cells and header cells for data tables that have two or more logical levels of row or column headers.

## How to Fix the Problem

To fix the problem, ensure the table uses an actual
`caption` element instead of cells with a
`colspan` element to visually indicate a caption.

To ensure screen reader users can make sense of tabular data, use the
`caption` element for an onscreen title.

### Example: Simple data table with a `caption` element

```
<table class="data">
    <caption>
      Greensprings Running Club Personal Bests
    </caption>
Greensprings Running Club Personal Bests
</caption>
    <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">1 mile</th>
      <th scope="col">5 km</th>
      <th scope="col">10 km</th>
    </tr>
    </thead>
    <tbody>
    <tr>
      <th scope="row">Mary</th>
      <td>8:32</td>
      <td>28:04</td>
      <td>1:01:16</td>
    </tr>
    <tr>
      <th scope="row">Betsy</th>
      <td>7:43</td>
      <td>26:47</td>
      <td>55:38</td>
    </tr>
    <tr>
      <th scope="row">Matt</th>
      <td>7:55</td>
      <td>27:29</td>
      <td>57:04</td>
    </tr>
    <tr>
      <th scope="row">Todd</th>
      <td>7:01</td>
      <td>24:21</td>
      <td>50:35</td>
    </tr>
    </tbody>
  </table>
```

## Why it Matters

Screen readers have a specific way of announcing tables. When tables are not
properly marked up, this creates the opportunity for confusing or inaccurate
screen reader output.

When tables are not marked up with an actual caption element instead of using
a `colspan` element on cells to visually indicate a caption, screen
reader users cannot correctly perceive the purpose of the table visually.

## Rule Description

Data table markup can be tedious and confusing. Screen readers have some
features to ease table navigation, but tables must be marked up accurately for
these features to work correctly. Some tables use cells with a
`colspan` element to visually indicate a caption, instead of using
an actual caption element.

## The Algorithm (in simple terms)

Checks that data tables are marked up with table cells that use a
`colspan` element to indicate a caption visually.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Table caption/name
* Table Headers
* Simple Header Associations
* Grouped Header Associations
* Complex Header Associations

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H39: Using caption elements to associate data table captions with data tables
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