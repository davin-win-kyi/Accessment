---
{
  "rule_id": "aria-input-field-name",
  "title": "ARIA input fields must have an accessible name",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-input-field-name",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# ARIA input fields must have an accessible name

Source: https://dequeuniversity.com/rules/axe/4.2/aria-input-field-name

# ARIA input fields must have an accessible name

Rule ID:
aria-input-field-name

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

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

## How to Fix the Problem

### Correct markup solutions

The `aria-input-field-label` rule includes six markup patterns
that pass testing criteria:

```
<!-- combobox -->
<div id="pass1" aria-label="country" role="combobox">England</div>
 
<!-- Select a color: -->
<div id="pass2" role="listbox" aria-labelledby="pass2Label">
    <div role="option">Orange</div>
</div>
 
<!-- searchbox -->
<p id="pass3Label">Search currency pairs:</p>
<div id="pass3"
    role="searchbox"
    contenteditable="true"
    aria-labelledby="pass3Label"></div>
 
<!-- slider -->
<div id="pass4"
    role="slider"
    aria-label="Choose a value"
    aria-valuemin="1"
    aria-valuemax="7"
    aria-valuenow="2"></div>
 
<!-- spinbutton -->
<div id="pass5"
    role="spinbutton"
    aria-valuemin="0"
    aria-valuemax="10"
    aria-valuenow="8"
    aria-label="Enter quantity:"></div>
 
<!-- textbox -->
<label id="foo">
    foo
    <div id="pass6" role="textbox" aria-labelledby="foo"></div>
</label>
```

### Incorrect markup solutions

The `aria-input-field-label` rule includes ten markup patterns
that fail testing criteria:

```
<!-- aria-label with empty text string -->
<div id="fail1" aria-label=" " role="combobox">England</div>
 
<!-- The label does not exist. -->
<div id="fail2" aria-labelledby="non-existing" role="combobox">England</div>
 
<!-- The implicit label is not supported on div elements. -->
<label>
    first name
    <div id="fail3" role="textbox"></div>
</label>
 
<!-- explicit label not supported on div elements -->
<label for="fail4">first name</label>
<div role="textbox" id="fail4"></div>
 
<!-- combobox -->
<div id="fail5" role="combobox">England</div>
 
<!-- listbox -->
<div id="fail6" role="listbox" aria-labelledby="label-does-not-exist">
    <div role="option">Orange</div>
</div>
 
<!-- searchbox -->
<div id="fail7"
    role="searchbox"
    contenteditable="true"
    aria-labelledby="unknown-label"></div>
 
 
<!-- slider -->
<div id="fail8"
    role="slider"
    aria-valuemin="1"
    aria-valuemax="7"
    aria-valuenow="2"></div>
 
<!-- spinbutton -->
<div id="fail9"
    role="spinbutton"
    aria-valuemin="0"
    aria-valuemax="10"
    aria-valuenow="8"></div>
 
<!-- textbox -->
<label>foo
    <div id="fail10" role="textbox"></div>
</label>
```

## Why it Matters

This new rule ensures every ARIA input field has an accessible name.
Accessible names must exist for the following input field roles:

* combobox
* listbox
* searchbox
* slider
* spinbutton
* textbox

## Rule Description

Ensures every ARIA input field has an accessible name.

## The Algorithm (in simple terms)

ARIA input fields must have an accessible name.

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