---
{
  "rule_id": "bypass",
  "title": "Page must have means to bypass repeated blocks",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/bypass",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.4.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Page must have means to bypass repeated blocks

Source: https://dequeuniversity.com/rules/axe/4.2/bypass

# Page must have means to bypass repeated blocks

Rule ID:
bypass

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

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
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 2.4.1: MUST: Bypass Blocks

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.4.1: MUST: Bypass Blocks

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (o): MUST: A method shall be provided that permits users to skip repetitive navigation links.

## How to Fix the Problem

Ensure each page has a `main` landmark to provide a mechanism to
bypass repeated blocks of content or interface elements (like header and
navigation) and quickly arrive at the main content.

Landmarks SHOULD be used to designate pre-defined parts of the layout such as
the main content section.

A page SHOULD NOT contain more than one instance of the main landmark.

### HTML5 vs. ARIA:

As a general rule, it is usually best to use native HTML elements rather
than their ARIA equivalents whenever possible. Therefore, even though the
ARIA Role `role="main"` is listed among landmarks by most screen
readers, use the the corresponding `main` HTML5 element instead.

### Good Example: Using Appropriate Landmarks

In this example, all content is inside of a landmark, and landmarks are used
to properly identify the various types of content.

Begin code:

```
<header>
  <div>This is the header.</div>
</header>
<nav>
  <div>This is the navigation.</div>
</nav>
<main>
  <div>This is the main content.</div>
  <section>
    <div>This is a section.</div>
  </section>
  <article>
    <div>This is an article.</div>
  </article>
  <aside>
    <div>This is an aside.</div>
  </aside>
</main>
<footer>
  <div>This is the footer.</div>
</footer>
```

End code.

## Why it Matters

Since web sites often display secondary, repeated content on multiple pages
(such as navigation links, heading graphics, and advertising frames),
keyboard-only users benefit from faster, more direct access to the primary
content on a page. This reduces keystrokes and minimizes associated physical
pain.

For users who cannot use a mouse, navigating with a keyboard is more difficult
and time-consuming when the interface does not include methods to make
keyboard navigation easier. For example, to activate a link in the middle of a
web page, a keyboard user may have to tab through a large number of links and
buttons in the header and main navigation of the page.

At the extreme end, users with severe motor limitations might require several
minutes to tab through all of those elements, and can lead to fatigue and
possible physical pain for some users. Even users with less severe constraints
will require longer than mouse users, who can click on the desired link in a
second or two.

## Rule Description

Each page must have a `main` landmark to provide a mechanism to
bypass repeated blocks of content or interface elements (like header and
navigation) and quickly arrive at the main content.

## The Algorithm (in simple terms)

Checks for least one of the following features:

* an internal skip link
* a heading
* a landmark region

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmarks
* Links
* Navigation Within Pages
* Navigation Between Pages

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* G1: Adding a link at the top of each page that goes directly to the main content area
* WCAG ARIA11: Using ARIA landmarks to identify regions of a page
* H69: Providing heading elements at the beginning of each section of content

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