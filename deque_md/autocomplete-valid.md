---
{
  "rule_id": "autocomplete-valid",
  "title": "Autocomplete attribute must be used correctly",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/autocomplete-valid",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.5",
    "WCAG 2.1"
  ]
}
---

# Autocomplete attribute must be used correctly

Source: https://dequeuniversity.com/rules/axe/4.2/autocomplete-valid

# Autocomplete attribute must be used correctly

Rule ID:
autocomplete-valid

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (AA)

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

* Attention Deficit
* Blind
* Low Vision
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility
* ![](assets/images/icons/brain_side.png)Cognitive

### Standard(s)

* WCAG 2.1 (AA)

### WCAG Success Criteria [WCAG 2.1 (AA)]

* 1.3.5: MUST: Identify Input Purpose

## How to Fix the Problem

1. Identify any form elements that accept an individual's personal data.
2. For each form element that accepts an individual's personal data:
   * Check to see if the personal data is one of the 53 types identified in
     WCAG 2.1 Section 7 Input Purposes for User Interface Components opens in
     a new window.
   * Confirm that the autocomplete attribute is set with the appropriate
     value to identify the purpose of that UI component.

## Why it Matters

Failure to provide autocomplete values in form fields results in inaccessible
content. Screen readers do not read identified autocomplete form fields if the
appropriate autocomplete attribute values are missing. Users cannot correctly
navigate forms when screen readers cannot provide adequate information to the
user regarding form field interaction requirements.

## Rule Description

The purpose for each common input field that collects an individual's personal
data is programmatically defined based on the list of 53 Input Purposes for
User Interface Components. The autocomplete attribute values must be valid and
correctly applied for screen readers to function correctly.

## The Algorithm (in simple terms)

The purpose of each input field collecting information about the user can be
programmatically determined when:

* The input field serves a purpose identified in the Input Purposes for User
  Interface Components section; and
* The content is implemented using technologies with support for identifying
  the expected meaning for form input data.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

No related course information available.

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* 4.10.18.7.1. Autofilling form controls: the autocomplete attribute
* WCAG 2.1 - 1.3.5 Identify Input Purpose Level AA

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