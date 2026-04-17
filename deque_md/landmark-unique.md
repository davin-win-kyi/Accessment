---
{
  "rule_id": "landmark-unique",
  "title": "Landmarks must have a unique role or role/label/title (i.e. accessible name) combination",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/landmark-unique",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Landmarks must have a unique role or role/label/title (i.e. accessible name) combination

Source: https://dequeuniversity.com/rules/axe/4.2/landmark-unique

# Landmarks must have a unique role or role/label/title (i.e. accessible name) combination

Rule ID:
landmark-unique

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

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

### Correct markup solutions

`landmark-unique` contains eleven passing markup solutions:

```
<main id="pass-main">Only main</main>

<header id="pass-header">Only header</header>

<form id="pass-form-aria-label-1" aria-label="form-label-1"></form>
<form id="pass-form-aria-label-2" aria-label="form-label-2"></form>

<div id="form-label-1">form-with-label-1</div>
<div id="form-label-2">form-with-label-2</div>
<form id="pass-form-aria-labelledby-1" aria-labelledby="form-label-1"></form>
<form id="pass-form-aria-labelledby-2" aria-labelledby="form-label-2"></form>

<form id="pass-aside-aria-label-1" aria-label="aside-label-1"></form>
<form id="pass-aside-aria-label-2" aria-label="aside-label-2"></form>

<div id="aside-label-1">aside-with-label-1</div>
<div id="aside-label-2">aside-with-label-2</div>
<form id="pass-aside-aria-labelledby-1" aria-labelledby="aside-label-1"></form>
<form id="pass-aside-aria-labelledby-2" aria-labelledby="aside-label-2"></form>

<footer id="pass-footer">Only footer</footer>
```

### Incorrect markup solutions

`landmark-unique` contains seventeen markup solutions that fail
test criteria:

```
<main id="violation-main-1">First main</main>
<iframe src="landmark-unique/frame.html" title="iframe with main" id="frame"></iframe>

<header id="violation-header-1">First header</header>
<header id="violation-header-2">Second header</header>

<form id="violation-form-aria-label-1" aria-label="form-label"></form>
<form id="violation-form-aria-label-2" aria-label="form-label"></form>

<div id="form-label-1">form-with-label</div>
<div id="form-label-2">form-with-label</div>
<form id="violation-form-aria-labelledby-1" aria-labelledby="form-label-1"></form>
<form id="violation-form-aria-labelledby-2" aria-labelledby="form-label-2"></form>

<form id="violation-aside-aria-label-1" aria-label="aside-label"></form>
<form id="violation-aside-aria-label-2" aria-label="aside-label"></form>

<div id="aside-label-1">aside-with-label</div>
<div id="aside-label-2">aside-with-label</div>
<form id="violation-aside-aria-labelledby-1" aria-labelledby="aside-label-1"></form>
<form id="violation-aside-aria-labelledby-2" aria-labelledby="aside-label-2"></form>

<footer id="violation-footer-1">First footer</footer>
<footer id="violation-footer-2">Second footer</footer>

<div id="form-label-3">iframe-form-with-label</div>
<div id="violation-form-through-iframe-1" role="form" aria-labelledby="form-label-3"></div>

<div id="violation-nav-through-iframe-1" role="navigation"></div>

<div id="violation-role-banner" aria-label="duplicate label" role="banner"></div>
<div id="violation-role-banner-2"  aria-label="duplicate label" role="banner"></div>

<div id="violation-role-complementary" role="complementary"></div>
<div id="violation-role-complementary-2" role="complementary"></div>

<div id="violation-role-contentinfo" aria-label="duplicate label for contentinfo" role="contentinfo"></div>
<div id="violation-role-contentinfo-2" aria-label="duplicate label for contentinfo" role="contentinfo"></div>

<div id="violation-role-main" aria-label="duplicate label for main" role="main"></div>
<div id="violation-role-main-2" aria-label="duplicate label for main" role="main"></div>

<div id="violation-role-region" role="region"></div>
<div id="violation-role-region-2" role="region"></div>

<div id="violation-role-search" role="search"></div>
<div id="violation-role-search-2" role="search"></div>

<nav  id="violation-nav" aria-label="duplicate label for nav"></nav>
<nav  id="violation-nav-2" aria-label="duplicate label for nav"></nav>

<section  id="violation-section" aria-label="duplicate label for section"></section>
<section  id="violation-section-2" aria-label="duplicate label for section"></section>
```

## Why it Matters

`landmark-unique` is a new best practice rule ensures that
landmarks have a unique role or accessible name (i.e. role, label, title)
combination.

## Rule Description

Landmarks must have a unique role or role/label/title (i.e. accessible name)
combination.

## The Algorithm (in simple terms)

Ensures landmarks are unique.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmarks
* Role

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Contentinfo Landmark: ARIA Landmark Examples (W3)
* W3C Recommendation - Contentinfo role

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