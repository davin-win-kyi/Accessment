---
{
  "rule_id": "scope-attr-valid",
  "title": "Scope attribute should be used correctly on tables",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/scope-attr-valid",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": []
}
---

# Scope attribute should be used correctly on tables

Source: https://dequeuniversity.com/rules/axe/4.2/scope-attr-valid

# Scope attribute should be used correctly on tables

Rule ID:
scope-attr-valid

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

If you are using HTML5, check that the `scope` attribute is only
being used on `th` elements. If you are using HTML 4, check that
the `scope` attribute is only being used on `th` and
`td`.

Finally, check that the value of the scope is either `row` or
`col`, but nothing else.

Add `scope` attribute values to all `th` elements that
do not have one.

The markup necessary to convey the relationship between header cells and data
cells in data tables that are not complex can be accomplished using the
`scope` attribute. The `scope` attribute tells the
browser and screen reader that everything under the column is related to the
header at the top, and everything to the right of the row header is related to
that header.

Applying the scope attribute to a table in markup looks like this:

### Good Example

```
<table>
<caption><strong>Greensprings Running Club Personal Bests</strong></caption>
  <tr>
    <th scope="col">Name</th>
    <th scope="col">1 mile</th>
    <th scope="col">5 km</th>
    <th scope="col">10 km</th>
  </tr>
    
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
</table>
```

Note that the top headers for Name, 1 mile, 5 km and 10 km are all marked up
with `th` elements, as are the row headers for Mary, Betsy, Matt
and Todd. Each of these header cells have also been given the
`scope` attribute values of `col` or
`row` depending on whether they are column or row header cells.

## Why it Matters

The `scope` attribute makes table navigation much easier for screen
reader users, provided that it is used correctly. Incorrectly used,
`scope` can make table navigation much harder and less efficient.

A screen reader operates under the assumption that a table has a header and
that this header specifies a scope. Because of the way screen readers
function, having an accurate header makes viewing a table far more accessible
and more efficient for people who use the device.

## Rule Description

The `scope` attribute must be used correctly on tables in
accordance with either HTML4 or HTML5 specifications to enable efficient table
navigation for screen reader users.

## The Algorithm (in simple terms)

Ensures that the scope attribute is used correctly on tables.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

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