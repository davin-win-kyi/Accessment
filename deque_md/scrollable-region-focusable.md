---
{
  "rule_id": "scrollable-region-focusable",
  "title": "Ensure that scrollable region has keyboard access",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/scrollable-region-focusable",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": [
    "2.1.1",
    "2.4.7",
    "3.2.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Ensure that scrollable region has keyboard access

Source: https://dequeuniversity.com/rules/axe/4.2/scrollable-region-focusable

# Ensure that scrollable region has keyboard access

Rule ID:
scrollable-region-focusable

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

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

Moderate  
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

* 2.4.7: MUST: Focus Visible

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.4.7: MUST: Focus Visible

## How to Fix the Problem

### Correct markup solutions

The key to getting a scrollable region to be accessible with the keyboard is
to ensure that a keyboard-only user can focus the scrollable region itself
or a static text item within the scrollable region. The first example below
shows the first technique and the second one shows the second technique.

```
<div id="pass1" style="height: 200px; overflow-y: auto" tabindex="0">
    <div style="height: 2000px">
        <p>Content</p>
    </div>
</div>

<div id="pass2" style="height: 20px; overflow: auto;">
    <input type="text" tabindex="-1" />
    <select tabindex="-1"></select>
    <textarea tabindex="-1"></textarea>
    <p style="height: 200px;" tabindex="0"></p>
</div>
```

### Conditional solution

The following examples could fail if the browser intercepts the keyboard
events for autocomplete. It is better to always put a tabindex of 0 on the
scrollable region or a static element within the region.

```
    <div id="conditional1" style="overflow-y: scroll; height: 5px;">
    <input type="text" />
</div>
```

### Incorrect markup

The following two examples fail because there is no focusable element within
the scrollable region.

```
<div id="fail1" style="height: 5px; overflow: auto;">
	<input type="text" tabindex="-1" /></div>

<div id="fail2" style="height: 5px; overflow: auto;">
	<input type="text" tabindex="-1" />
	<select tabindex="-1"></select>
	<textarea tabindex="-1"></textarea></div>
```

## Why it Matters

Checks scrollable content for focusable elements enabling keyboard navigation.
Keyboard navigation should not fail when focus moves to an element within a
scrollable region.

## Rule Description

Elements that have scrollable content should be accessible by keyboard

## The Algorithm (in simple terms)

Ensure that scrollable region has keyboard access.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* SC 2.4.7 Focus Visible

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* 2.4.7 Focus Visible Level AA
* Understanding Success Criterion 2.4.7: Focus Visible
* F55: Failure of Success Criteria 2.1.1, 2.4.7, and 3.2.1 due to using script to remove focus when focus is received

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