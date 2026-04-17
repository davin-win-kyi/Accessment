---
{
  "rule_id": "td-has-header",
  "title": "All non-empty <td> elements in tables larger than 3 by 3 must have an associated table header",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/td-has-header",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# All non-empty <td> elements in tables larger than 3 by 3 must have an associated table header

Source: https://dequeuniversity.com/rules/axe/4.2/td-has-header

# All non-empty <td> elements in tables larger than 3 by 3 must have an associated table header

Rule ID:
td-has-header

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

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

To fix the problem, ensure that each non-empty data cell in a large table has
one or more table headers. All table data cells (`td`) must have a
table header to ensure screen reader users can make sense of tabular data.

**Note:** A table is considered large if it is 3 or more cells
wide and 3 or more cells high.

### Example: Simple Data Table with `<th scope="col">` and `<th scope="row">`

To markup a table cell as a header cell, change the `<td>` to
a `<th>`. You will see that doing this to our example table
causes the top row to have bolded, centered text.

Greensprings Running Club Personal Bests

| Name | 1 mile | 5 km | 10 km |
| --- | --- | --- | --- |
| Mary | 8:32 | 28:04 | 1:01:16 |
| Betsy | 7:43 | 26:47 | 55:38 |
| Matt | 7:55 | 27:29 | 57:04 |
| Todd | 7:01 | 24:21 | 50:35 |

### HTML Code

```
<table class="data">
<caption>
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

**Note:** the visual aspects of table borders, fonts, margins,
backgrounds, etc. can be defined using CSS.

### Example: Complex table with `id` + `headers`

Complex tables benefit from the `id` + `headers` method
of associating header cell with data cells. This method is time consuming, as
every cell must be marked up with an identification of the row and column of
each cell.

Where possible, an easier option may be to plan your data presented in such as
way that you can break up a complex table into a series of simpler tables.
These tables may also be more useful for the general audience.

In the example below, `scope` attributes have been replaced with
`id` attributes on the headers. All of the data cells contain a
`headers` attribute. The `headers` attribute can take a
list of `id` values, each separated by a space, for each of the
relevant `headers`. For instance, the second cell in the second row
has a `headers` value of "mary 1m" indicating that this
cell is related to two headers: the row header cell for "mary" and
the column header cell for "1m".

Example 2 (column group headers):

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | Females | | Males | |
| Mary | Betsy | Matt | Todd |
| 1 mile | 8:32 | 7:43 | 7:55 | 7:01 |
| 5 km | 28:04 | 26:47 | 27:29 | 24:21 |
| 10 km | 1:01:16 | 55:38 | 57:04 | 50:35 |

### HTML Code

```
<table class="data complex" border="1">
<caption>
Example 2 (column group headers): 
</caption>
  <thead>
    <tr>
    <td rowspan="2"><span class="offscreen">empty</span></td>
    <th colspan="2" id="females2">Females</th>
    <th colspan="2" id="males2">Males</th>
    </tr>
    <tr>
    <th width="40" id="mary2">Mary</th>
    <th width="35" id="betsy2">Betsy</th>
    <th width="42" id="matt2">Matt</th>
    <th width="42" id="todd2">Todd</th>
    </tr>
  </thead>
  <tbody>
    <tr>
    <th width="39" id="mile1_2">1 mile</th>
    <td headers="females2 mary2 mile1_2">8:32</td>
    <td headers="females2 betsy2 mile1_2">7:43</td>
    <td headers="males2 matt2 mile1_2">7:55</td>
    <td headers="males2 todd2 mile1_2">7:01</td>
    </tr>
    <tr>
    <th id="km5_2">5 km</th>
    <td headers="females2 mary2 km5_2">28:04</td>
    <td headers="females2 betsy2 km5_2">26:47</td>
    <td headers="males2 matt2 km5_2">27:29</td>
    <td headers="males2 todd2 km5_2">24:21</td>
    </tr>
    <tr>
    <th id="km10_2">10 km</th>
    <td headers="females2 mary2 km10_2">1:01:16</td>
    <td headers="females2 betsy2 km10_2">55:38</td>
    <td headers="males2 matt2 km10_2">57:04</td>
    <td headers="males2 todd2 km10_2">50:35</td>
    </tr>
  </tbody>
</table>
```

This method creates an explicit association between the data cells and header
cells. Though tedious to mark up by hand, this approach is relatively easy to
program with a server-side scripting language (PHP, .net, JSP, Python,
etcetera) for tables of data from a database.

### Note: Old Versions of VoiceOver did Not Support the `id` + `headers` Method

Up until Mac OSX 10.10.2, VoiceOver did not support the ability to read
table headers with the id + headers method. Some versions even read the
wrong headers with the data cells. Fortunately, the current version of
VoiceOver does read the data and header associations correctly.

## Why it Matters

Screen readers have a specific way of announcing tables. When tables are not
properly marked up, this creates the opportunity for confusing or inaccurate
screen reader output.

When tables are not marked up semantically and do not have the correct header
structure, screen reader users cannot correctly perceive the relationships
between the cells and their contents visually.

## Rule Description

Data table markup can be tedious and confusing. Tables must be marked up done
semantically and with the correct header structure. Screen readers have
features to ease table navigation, but tables must be marked up accurately for
these features to work correctly.

## The Algorithm (in simple terms)

Checks that data tables are marked up semantically and have the correct header
structure.

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