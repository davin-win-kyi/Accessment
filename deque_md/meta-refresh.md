---
{
  "rule_id": "meta-refresh",
  "title": "Timed refresh must not exist",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/meta-refresh",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "2.2.1",
    "2.2.4",
    "3.2.5",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Timed refresh must not exist

Source: https://dequeuniversity.com/rules/axe/4.2/meta-refresh

# Timed refresh must not exist

Rule ID:
meta-refresh

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (AA)

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
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (AA)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 2.2.1: MUST: Timing Adjustable
* 2.2.4: MUST: Interruptions
* 3.2.5: MUST: Change on Request

### WCAG Success Criteria [WCAG 2.0 (AA)]

* 2.2.1: MUST: Timing Adjustable
* 2.2.4: MUST: Interruptions
* 3.2.5: MUST: Change on Request

## How to Fix the Problem

Remove the `http-equiv="refresh"` attribute from each
`meta` element in which it is present.

To modify this example and make it accessible, remove the
`http-equiv="refresh"` attribute from the
`meta` element.

### Bad Example

```
<meta http-equiv="refresh" content="10" url="http://www.yourdomain.com/index.html">
```

If the purpose of the `<meta>` element is to refresh the
page, this should be handled through JavaScript. Furthermore, additional
scripting should be used to provide users the ability to pause the refresh,
extend the time between refreshes, or to turn the refresh off entirely.

For more information, see
[Timed Content](https://dequeuniversity.com/class/archive/html-css1/dynamic-content/timed-content)
in the Dynamic Content section of the HTML and CSS Accessibility course.

## Why it Matters

Since users do not expect a page to refresh automatically, such refreshing can
be disorienting. Refreshing also moves the programmatic focus back to the top
of the page, away from where the user had it. Such resetting is frustrating
for users.

Redirection and page refresh through the use of the
`<meta>` element is problematic for users with disabilities
in many ways. The primary reason why redirects and refreshes are problematic
is that the user has no control over when the redirect or refresh occurs. If
the purpose of the `<meta>` element is to redirect the user
to a new location, server-side means should be employed instead of
client-side. Content that moves or auto-updates can be a barrier to anyone who
has trouble reading the stationary text as quickly as well as to anyone who
has trouble tracking moving objects. It can also cause problems for screen
readers.

## Rule Description

The document must not use
`<meta http-equiv="refresh">` because it can prevent control
over when the refresh occurs for users with disabilities.

## The Algorithm (in simple terms)

Checks for the presence of the `http-equiv="refresh"` attribute on
the `meta` elements.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Time Limits

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H76: Using meta refresh to create an instant client-side redirect
* F41: Failure of Success Criterion 2.2.1, 2.2.4, and 3.2.5 due to using meta refresh to reload the page

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