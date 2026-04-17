---
{
  "rule_id": "landmark-complementary-is-top-level",
  "title": "Complementary landmarks and/or asides are top level",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/landmark-complementary-is-top-level",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Complementary landmarks and/or asides are top level

Source: https://dequeuniversity.com/rules/axe/4.2/landmark-complementary-is-top-level

# Complementary landmarks and/or asides are top level

Rule ID:
landmark-complementary-is-top-level

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

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

Moderate  
▼

Minor

Critical

### Disabilities Affected

* Sighted Keyboard Users
* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

This best practice rule ensures that `aside` elements or elements
with `role=complementary` are not an internal part of another ARIA
landmark. Nesting landmarks create confusing document structures. This rule is
similar to existing rules that test this same ARIA requirement for the banner,
contentinfo, and main roles.

### Examples

The following example FAILS the Complementary landmarks are at the top level
rule:

```
<main>
  <p>Some text</p>
  <aside><p>An aside</p></aside>
</main>
```

The following example PASSES the Complementary landmarks are at the top level
rule:

```
<main><p>Some text</p></main>
<aside>An aside</aside>
```

## Why it Matters

Complementary content is ancillary content to the main theme of a document or
page. Screen reader users have the option to skip over complementary content
when it appears at the top level of the accessibility API. Embedding an
`<aside>` element in another landmark may disable screen
reader functionality allowing users to navigate through complementary content.

## Rule Description

Ensures the complementary landmark or aside is at top level

## The Algorithm (in simple terms)

Do not include `<aside>` elements or elements containing
`role="complementary"` within other content marked up as a
landmark.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmarks
* Test for Landmarks

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* MDN ARIA Complementary Role
* ARIA landmarks examples

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