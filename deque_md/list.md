---
{
  "rule_id": "list",
  "title": "<ul> and <ol> must only directly contain <li>, <script> or <template> elements",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/list",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <ul> and <ol> must only directly contain <li>, <script> or <template> elements

Source: https://dequeuniversity.com/rules/axe/4.2/list

# <ul> and <ol> must only directly contain <li>, <script> or <template> elements

Rule ID:
list

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: MUST: Info and Relationships

## How to Fix the Problem

Ensure all ordered and unordered lists (defined by `ul` or
`ol` elements) contain only `li`
**content** elements.

Here is a list, using proper semantic markup:

```
<p> These are a few of my favorite things</p>
<ul>
     <li>Raindrops on roses</li>
     <li>Whiskers on kittens</li>
     <li>Bright copper kettles</li>
     <li>Warm woolen mittens</li>
     <li>Brown paper packages tied up with strings</li>
     <li>Cream colored ponies</li>
     <li>Crisp apple streudels</li>
     <li>Doorbells and sleigh bells</li>
     <li>Schnitzel with noodles</li>
     <li>Wild geese that fly with the moon on their wings</li>
     <li>Girls in white dresses with blue satin sashes</li>
     <li>Snowflakes that stay on my nose and eyelashes</li>
     <li>Silver white winters that melt into springs</li>
 </ul>
```

## Why it Matters

Screen readers have a specific way of announcing lists. This feature makes
lists clearer to understand, but will only work if lists are properly
structured.

When content elements other than list items are contained within a set of list
elements, screen readers cannot inform the listener that they are listening to
items within the list.

For a list to be valid, it must have both parent elements (a set of
`ul` elements or a set of `ol` elements) and child
elements (declared inside of these tags using the `li` element),
and any other content elements are invalid.

Although some *non-content* elements such as script, template, style,
meta, link, map, area, and datalist are permitted within lists,
*content* elements other than `li` are not permitted.

## Rule Description

Lists must be marked up correctly, meaning they must not contain
**content** elements other than `li` elements.

## The Algorithm (in simple terms)

Ensures that lists are structured correctly.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Lists

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H48: Using ol, ul and dl for lists or groups of links

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