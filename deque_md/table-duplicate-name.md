---
{
  "rule_id": "table-duplicate-name",
  "title": "The <caption> element should not contain the same text as the summary attribute",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/table-duplicate-name",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": []
}
---

# The <caption> element should not contain the same text as the summary attribute

Source: https://dequeuniversity.com/rules/axe/4.2/table-duplicate-name

# The <caption> element should not contain the same text as the summary attribute

Rule ID:
table-duplicate-name

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

Guidelines:
Deque Best Practice

## Learn Web Accessibility

Subscribe to our extensive curriculum of online self-paced courses

[Learn More about Deque University](/online-courses/?adtag=dquOnline&adid=2019-01-25b&adref=dqu&adcontext=ruleHelp)

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

* Deque Best Practice

## How to Fix the Problem

This Rule checks for tables that have identical summary and caption text. To
fix the problem, ensure that the content of the `summary` attribute
and the `<caption>` elements are not identical.

To ensure screen reader users can make sense of tabular data:

* Use the `<caption>` element for onscreen title.
* Use the `summary` attribute—only read by screen readers—to
  describe the table structure.

## Why it Matters

Screen readers have a specific way of announcing tables. When tables are not
properly marked up, this creates the opportunity for confusing or inaccurate
screen reader output.

When tables have summary and caption text that is identical, screen reader
users can be confused and find it difficult to know the name and purpose of
the table.

## Rule Description

Data table markup can be tedious and confusing. Make sure the caption and
summary table attributes are not identical. Screen readers have some features
to manage table navigation, but tables must be marked up accurately for these
features to work correctly.

## The Algorithm (in simple terms)

Checks that data tables that have both a summary and caption have the same
text for each.

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