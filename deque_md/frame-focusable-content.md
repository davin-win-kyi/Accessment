---
{
  "rule_id": "frame-focusable-content",
  "title": "Ensures  <frame> and <iframe> elements with focusable content do not have tabindex=-1",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/frame-focusable-content",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Ensures  <frame> and <iframe> elements with focusable content do not have tabindex=-1

Source: https://dequeuniversity.com/rules/axe/4.2/frame-focusable-content

# Ensures <frame> and <iframe> elements with focusable content do not have tabindex=-1

Rule ID:
frame-focusable-content

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
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 2.1.1: MUST: Keyboard

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.1.1: MUST: Keyboard

## How to Fix the Problem

### Correct markup solutions

The `frame-focusable-content` rule is inapplicable for frames
without tabindex, or with a non-negative tabindex:

```
<iframe
    srcdoc="<button>Click me</button>"
    tabindex="0"
    title="My frame is an iframe"
  ></iframe>
```

In some cases, if the frame does not need any keyboard navigation or
keyboard scrolling, `tabindex="-1"` can be used on
iframes.

```
<iframe
  srcdoc="<p>Hello world</p>"
  tabindex="-1"
  title="My frame is an iframe"
></iframe>
```

While in some scenarios, negative tabindex on a frame may not cause
accessibility problems, it is easy for it to become an accidental
accessibility issue after an update to the content of the iframe. It is
therefore better to avoid negative tabindex on frames all together.

### Incorrect markup solutions

The `frame-focusable-content` rule fails the following markup
pattern:

```
<iframe
    srcdoc="<button>Click me</button>"
    tabindex="-1"
    title="My frame is an iframe"
  ></iframe>
```

## Why it Matters

When a frame has a negative tabindex, the browser is prevented from
redirecting the focus to the content inside that frame. This causes all its
content from getting skipped in keyboard navigation, and if the frame is
scrollable also prevents the focus from reaching any element from which the
frame can be scrolled with the keyboard.

## Rule Description

`%lt;frame%gt;` and `%lt;iframe%gt;` elements with
focusable content must not have `tabindex="-1"`.

## The Algorithm (in simple terms)

Check all `<frame>` and `<iframe>` elements
that have a negative tabindex number, such as `tabindex="-1"`. If
there are such frames, check that they do not contain focusable elements, or
have nested frames with focusable elements.

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