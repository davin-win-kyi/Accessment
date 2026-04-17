---
{
  "rule_id": "layout-table",
  "title": "Layout tables must not use data table elements",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/layout-table",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Layout tables must not use data table elements

Source: https://dequeuniversity.com/rules/axe/4.2/layout-table

# Layout tables must not use data table elements

Rule ID:
layout-table

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

Serious  
▼

Minor

Critical

### Disabilities Affected

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: MUST: Info and Relationships

## How to Fix the Problem

This rule checks for the presence of a table header, caption, and summary for
tables being used for layout purposes only.

To prevent the issue, remove markup that is only relevant for data tables from
your layout-only tables including elements such as a header, caption, and
summary. If using a table just for visual layout and not for tabular data, use
cascading style sheets (CSS) instead.

The rationale is that if a table is being used only for layout, it doesn't
make sense to add elements that belong only to data tables. Aside from being
unnecessary, such elements can confuse users of screen readers, since the
assistive technology announces these elements in a particular way. If these
elements are present, users might expect a data table and be confused when
this is not what the cells contain.

The `table` element was not designed to be a layout tool since its
purpose is to display tabular data. The `table-layout` property
defines the algorithm to be used to layout the table cells, rows, and columns
in Cascading Style Sheets (CSS).

## Why it Matters

If a table is being used only for layout, it doesn't make sense to add
elements that belong only to data tables. Aside from being unnecessary, such
elements can confuse users of screen readers, since the assistive technology
announces these elements in a particular way. If these elements are present,
users might expect a data table and be confused when this is not what the
cells contain.

With broad adoption of CSS for beautiful page layouts, it is no longer
necessary or desirable to use tables to structure a page. The use of real data
tables, with properly marked-up table headers, allow screen reader users to
navigate from cell to cell and hear the headers announced.

## Rule Description

If a table is being used for layout purposes only, it must not use data table
elements such as a header, caption, and summary to prevent confusion by screen
reader users who would otherwise expect data to be contained within the cells.

## The Algorithm (in simple terms)

Ensures that presentational `table` elements do not use
`th`, `caption` elements or the
`summary` attribute.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Tables
* Responsive Tables

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* F46: Failure of Success Criterion 1.3.1 due to using th elements, caption elements, or non-empty summary attributes in layout tables

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