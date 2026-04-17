---
{
  "rule_id": "landmark-no-duplicate-contentinfo",
  "title": "Page must not have more than one contentinfo landmark",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/landmark-no-duplicate-contentinfo",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Page must not have more than one contentinfo landmark

Source: https://dequeuniversity.com/rules/axe/4.2/landmark-no-duplicate-contentinfo

# Page must not have more than one contentinfo landmark

Rule ID:
landmark-no-duplicate-contentinfo

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

Guidelines:
Deque Best Practice

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

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

Ensure the document has no more than one `contentinfo` landmark.

A page SHOULD NOT contain more than one instance of the
`contentinfo` landmark.

### Good Example: One Instance Per Page of contentinfo Landmark

The `role="contentinfo"` ARIA landmark is used exactly once
on elements that are unique on the page.

The ARIA specification states that the landmarks
`role="banner"`, `role="main"`, and
`role="contentinfo"` are meant to be used only once per
page. Other ARIA landmarks can be used multiple times. Interestingly,
the HMTL5 specification allows multiple instances of the equivalent
landmarks: `header`, `main`, and
`footer`. The official restriction is only on ARIA
landmarks. Even so, it is appropriate in most web designs to have only
one each of these landmarks, whether they are specified using ARIA or
HTML5.

Begin code:

```
<div role="banner">Visit Your Local Zoo!</div>
<div role="main">
  <h1>The Nature of the Zoo</h1>
  <article>
    <h2>In the Zoo: From Wild to Tamed</h2>
    <p>What you see in the zoo are examples of 
    inborn traits left undeveloped. [...]</p>
  </article>
  <article>
   <h2>Feeding Frenzy: The Impact of Cohabitation</h2>
    <p>Some animals naturally group together with their own kind, 
    but others stake solitary claim on their territory. 
    Even those that typically live harmoniously together can 
    have bouts with romantic rivals, which can potentially 
    escalate in the more confined setting of a zoo. [...]</p>
  </article>
</div>
<div role="contentinfo">
  <p>Brought to you by North American Zoo Partnership</p>
</div>
```

End code.

### Bad Example: Multiple Instances of contentinfo Landmarks

In this example, two types of landmarks (`main` and
`role="contentinfo"`) which should be used only once have
been used multiple times on the same page.

Begin code:

```
<header>Visit Your Local Zoo!</header>
<h1>The Nature of the Zoo</h1>
<main class="article">
  <h2>In the Zoo: From Wild to Tamed</h2>
  <p>What you see in the zoo are examples of 
  inborn traits left undeveloped. [...]</p>
  <div role="contentinfo">
    <p>[...information about this article...]</p>
  </div>
</main>
<main class="article">
 <h2>Feeding Frenzy: The Impact of Cohabitation</h2>
  <p>Some animals naturally group together with their own kind,
  but others stake solitary claim on their territory.
  Even those that typically live harmoniously together can
  have bouts with romantic rivals, which can potentially
  escalate in the more confined setting of a zoo. [...]</p>
  <div role="contentinfo">
    <p>[...information about this article...]</p>
  </div>
</main>
<footer>
  <p>Brought to you by North American Zoo Partnership</p>
</footer>
```

End code.

## Why it Matters

One of the main purposes of landmarks is to allow blind users to quickly find
and navigate to the appropriate landmark, so you should keep the total number
of landmarks relatively low. If you don't, screen reader users will have to
sort through too much extra information to find what they're looking for.

Despite all of the talk about using correct semantic structure for
accessibility, HTML has historically lacked some key semantic markers, such as
the ability to designate sections of the page as the header, navigation, main
content, and footer. With HTML5, these designations are possible, using the
new elements `header`, `nav`, `main`, and
`footer`. Similar functionality is available using the ARIA
(Accessible Rich Internet Application) attributes `role="banner"`,
`role="navigation"`, `role="main"` and
`role="contentinfo"`.

JAWS, NVDA, and VoiceOver support the ability to navigate to sections of a web
page using ARIA landmarks. Landmarks provide a more elegant solution to the
problem of providing a way for users to skip to the main content of the web
page. There is no visible alteration to the web design, making it unobtrusive
and invisible. Of course, the fact that this technique is invisible is fine
for blind screen reader users, but not so fine for sighted keyboard users or
screen enlarger users with low vision. In this sense, HTML 5 regions and ARIA
landmarks cannot yet replace the old-fashioned "skip navigation"
links. Browsers still do not have a built-in way to notify users that HTML 5
regions or ARIA landmarks are present. Screen reader users are the only ones
who can take advantage of them. There is a
[Firefox ARIA landmark extension
![opens in a new window](/assets/images/template/courses2014/new-window.png)](https://github.com/davidtodd/landmarks)
available, which adds the ability to navigate by landmarks in Firefox, but
this is not a native feature of the browser.

## Rule Description

Ensures the page has at most one `contentinfo` landmark.

## The Algorithm (in simple terms)

This rule finds all `contentinfo` landmarks, filtering out those
who do not map their role, and verifies that there is no more than one.

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