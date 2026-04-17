---
{
  "rule_id": "aria-toggle-field-name",
  "title": "ARIA toggle fields have an accessible name",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-toggle-field-name",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# ARIA toggle fields have an accessible name

Source: https://dequeuniversity.com/rules/axe/4.2/aria-toggle-field-name

# ARIA toggle fields have an accessible name

Rule ID:
aria-toggle-field-name

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQU_elearning.svg)

## Need accessibility training?

     

Deque University offers an extensive curriculum of self-paced online courses for every skill profile and experience level.

[Start learning today](https://dequeuniversity.com/curriculum/online-classes/?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=training_gen)

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

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

## How to Fix the Problem

### Correct markup solutions

The `aria-toggle-field-name` contains five markup patterns that
pass testing criteria:

```
<!-- checkbox -->
<div id="pass1" role="checkbox">Newspaper</div>
 
<!-- menuitemcheckbox -->
<ul role="menu">
    <li id="pass2"
        role="menuitemcheckbox"
        aria-label="Word wrap"
        aria-checked="true"></li>
</ul>
 
<!-- menuitemradio -->
<p id="pass3Label">Sans-serif</p>
<ul role="menu">
    <li id="pass3"
        role="menuitemradio"
        aria-labelledby="pass3Label"
        aria-checked="true"></li>
</ul>
 
<!-- radio -->
<div role="radiogroup">
    <div id="pass4"
        role="radio"
        aria-checked="false"
        tabindex="0"
        title="Regular Crust"></div>
</div>
 
<!-- switch -->
<div id="pass5"
    role="switch"
    aria-checked="true"
    aria-label="Toggle blue light:">
    <span>off</span>
    <span>on</span>
</div>
```

### Incorrect markup solutions

The `aria-toggle-field-label` contains five markup patterns that
fail testing criteria:

```
<!-- checkbox -->
<div id="fail1" role="checkbox" aria-labelledby="does-not-exist"></div>
 
<!-- menuitemcheckbox -->
<ul role="menu">
	<li id="fail2" role="menuitemcheckbox" aria-checked="true"></li>
</ul>
 
#3 <!-- menuitemradio -->
<ul role="menu">
	<li id="fail3" role="menuitemradio" aria-checked="true"></li>
</ul>
 
#4 <!-- radio -->
<div role="radiogroup">
	<div id="fail4" role="radio" aria-checked="false" tabindex="0"></div>
</div>
 
#5 <!-- switch -->
<div id="fail5" role="switch" aria-checked="true">
	<span></span>
	<span></span>
</div>
```

## Why it Matters

Ensures every element with a semantic role also has an accessible name.
Semantic roles include:

* checkbox
* menu
* menuitemcheckbox
* menuitemradio
* radio
* radiogroup
* switch

## Rule Description

Ensures every ARIA toggle field has an accessible name.

## The Algorithm (in simple terms)

ARIA toggle fields have an accessible name.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

No related course information available.

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

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