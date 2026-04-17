---
{
  "rule_id": "input-button-name",
  "title": "Input buttons must have discernible text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/input-button-name",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Input buttons must have discernible text

Source: https://dequeuniversity.com/rules/axe/4.2/input-button-name

# Input buttons must have discernible text

Rule ID:
input-button-name

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

## Learn Web Accessibility

Subscribe to our extensive curriculum of online self-paced courses

[Learn More about Deque University](/online-courses/?adtag=dquOnline&adid=2019-01-25b&adref=dqu&adcontext=ruleHelp)

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

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (a): MUST: A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content)

## How to Fix the Problem

### Correct markup solutions

Eleven markup patterns pass the `input-button-name` test
criteria:

```
<form action="#">
    <input type="button" id="pass1" value="Button Name" />
    <input type="button" id="pass2" aria-label="Name" />
    <input type="button" id="pass3" aria-labelledby="labeldiv" />
    <input type="button" id="pass4" value="Name" aria-label="Aria Name" />
    <input type="submit" id="pass5" />
    <input type="submit" value="Something" id="pass6" />
    <input type="reset" id="pass7" />
    <input type="reset" value="Something" id="pass8" />
    <input type="button" title="Something" id="pass9" />
    <input type="submit" title="Something" id="pass10" />
    <input type="reset" title="Something" id="pass11" />
</form>
```

### Incorrect markup solutions

Five markup patterns fail the `input-button-name` test criteria:

```
<form action="#">
    <input type="button" id="fail1" />
</form>
 
<form action="#">
    <input type="button" id="fail2" aria-label="" />
</form>
 
<form action="#">
    <input type="button" id="fail3" aria-labelledby="nonexistent" />
</form>
 
<form action="#">
    <input type="button" id="fail4" aria-labelledby="emptydiv" />
    <div id="labeldiv">Button label</div>
    <div id="emptydiv"></div>
</form>
 
<form action="#">
    <input type="submit" value="" id="fail5" />
</form>
 
<form action="#">
    <input type="reset" value="" id="fail6" />
</form>
```

## Why it Matters

Screen reader users are not able to discern the purpose of an
`input type="button"` without an accessible name.

Screen reader users cannot understand the purpose of an image without a
discernable and accessible textual name. A title for an image may provide only
advisory information about the image itself. Unnamed actionable graphic images
such as buttons have no clear description of the destination, purpose,
function or action for the non-text content when it is intended to be used as
a control.

## Rule Description

Ensures input buttons have discernible text.

The `input-button-name` rule separates functionality from the
`button-name` rule to ensure that input buttons have discernible
text; advise relevant to input button names was incorrect for button elements.

## The Algorithm (in simple terms)

Input buttons must have discernible text.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Labels
* Group Labels
* Instructions and Other Helpful Info
* Instructions for Inputs

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