---
{
  "rule_id": "td-headers-attr",
  "title": "All cells in a <table> element that use the headers attribute must only refer to other cells of that same <table>",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/td-headers-attr",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# All cells in a <table> element that use the headers attribute must only refer to other cells of that same <table>

Source: https://dequeuniversity.com/rules/axe/4.2/td-headers-attr

# All cells in a <table> element that use the headers attribute must only refer to other cells of that same <table>

Rule ID:
td-headers-attr

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

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

To fix the problem, ensure that each cell in a table using
`headers` refers to another cell in the same table by creating a
`scope` attribute value on each `th` element within
`tr` elements. This rule checks that references to header columns
and rows connect to specific `td` elements.

The `scope` attribute tells the browser and screen reader that
everything under the column is related to the header at the top, and
everything to the right of the row header is related to that header.

Applying the scope attribute to our table the markup now looks like this:

### Example

```
<table>
  <caption><strong>Greensprings Running Club Personal Bests</strong></caption>
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

See
[Using `id` and `headers` attributes to associate data
cells with header cells in data tables](https://www.w3.org/WAI/WCAG21/Techniques/html/H43)
for a specific example connecting data cells to one ore more header cell
within a data table.

Note that the top headers for Name, 1 mile, 5 km and 10 km are all marked up
with `th` elements, as are the row headers for Mary, Betsy, Matt
and Todd. Each of these header cell have also been given the
`scope` attribute values of `col` or
`row` depending on whether they are column or row header cells.

One more method to associating header cells with data cells uses the
`colgroup` and `rowgroup` values of the
`scope` attribute. This markup technique is use to indicate headers
spanning multiple columns or rows. Consider the following table from
[Mozilla's Learn HTML Developer Docs](https://developer.mozilla.org/en-US/docs/Learn/HTML/Tables/Advanced):

Items Sold August 2016

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  |  | Clothes | | | Accessories | |
|  |  | Trousers | Skirts | Dresses | Bracelets | Rings |
| Belgium | Antwerp | 56 | 22 | 43 | 72 | 23 |
| Gent | 46 | 18 | 50 | 61 | 15 |
| Brussels | 51 | 27 | 38 | 69 | 28 |
| The Netherlands | Amsterdam | 89 | 34 | 69 | 85 | 38 |
| Utrecht | 80 | 12 | 43 | 36 | 19 |

### Example including `scope="colgroup"` and `scope="rowgroup"` values on `th` elements

```
<table>
  <caption>Items Sold August 2016</caption>
  <tbody>
    <tr>
      <td></td>
      <td></td>
      <th colspan="3" scope="colgroup">Clothes</th>
      <th colspan="2" scope="colgroup">Accessories</th>
    </tr>
    <tr>
      <td></td>
      <td></td>
      <th scope="col">Trousers</th>
      <th scope="col">Skirts</th>
      <th scope="col">Dresses</th>
      <th scope="col">Bracelets</th>
      <th scope="col">Rings</th>
    </tr>
    <tr>
      <th rowspan="3" scope="rowgroup">Belgium</th>
      <th scope="row">Antwerp</th>
      <td>56</td>
      <td>22</td>
      <td>43</td>
      <td>72</td>
      <td>23</td>
    </tr>
    <tr>
      <th scope="row">Gent</th>
      <td>46</td>
      <td>18</td>
      <td>50</td>
      <td>61</td>
      <td>15</td>
    </tr>
    <tr>
      <th scope="row">Brussels</th>
      <td>51</td>
      <td>27</td>
      <td>38</td>
      <td>69</td>
      <td>28</td>
    </tr>
    <tr>
      <th rowspan="2" scope="rowgroup">The Netherlands</th>
      <th scope="row">Amsterdam</th>
      <td>89</td>
      <td>34</td>
      <td>69</td>
      <td>85</td>
      <td>38</td>
    </tr>
    <tr>
      <th scope="row">Utrecht</th>
      <td>80</td>
      <td>12</td>
      <td>43</td>
      <td>36</td>
      <td>19</td>
    </tr>
  </tbody>
</table>
```

## Why it Matters

Screen readers have a specific way of announcing tables. When tables are not
properly marked up, this creates the opportunity for confusing or inaccurate
screen reader output.

Sighted users can usually tell at a glance what the table's headers are and
what their relationship to the data is. For non-sighted users this must be
done in the markup.

When a data table is designed with accessibility in mind, the user enters into
table navigation mode, which allows the user to navigate from cell to cell
within the table while hearing the screen reader announce the corresponding
table headers for the data cells. Hearing the table headers is especially
helpful when navigating through large data tables, or when cells contain
similar-sounding data that could be easily confused.

Table navigation mode is not useful, though, if the table lacks accessibility
features.

## Rule Description

Data table markup can be tedious and confusing. Markup tables semantically and
with the correct header structure. Screen readers have features to ease table
navigation, but tables must be marked up accurately for these features to work
correctly.

## The Algorithm (in simple terms)

Checks that data tables are marked up semantically and have the correct header
structure.

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