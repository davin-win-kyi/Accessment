---
{
  "rule_id": "skip-link",
  "title": "The skip-link target should exist and be focusable",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/skip-link",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# The skip-link target should exist and be focusable

Source: https://dequeuniversity.com/rules/axe/4.2/skip-link

# The skip-link target should exist and be focusable

Rule ID:
skip-link

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

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure that all skip links in the webpage have a focusable target that allows
users to skip the navigation.

Place the skip navigation link at the top of the page right after the opening
`body` tag.

Use the following markup to add a skip link:

```
<div id="skip">
    <a href="courses/html-css/navigation/skip-navigation#content">Skip Content</a>
</div>
```

Unfortunately, WebKit based browsers such as Safari and Chrome have a bug that
prevents same-page links from adequately working. Create a workaround for such
browsers using Javascript. For a tutorial on how to fix this bug, see the Skip
Navigation Links in the HTML and CSS Accessibility Course.

It may be tempting to hide the skip navigation link; it adds content to the
page’s layout, and it might be confusing for people who don’t need it. If you
decide to hide the skip-link, do **NOT** hide it using any of
these CSS options:

* Use CSS to permanently position the link off screen.
* Set `display: none`.
* Set `visibility: invisible`

Hiding the skip-link with CSS works fine for screen reader users, but this
removes access to the link for sighted users who benefit from the skip link.
Setting either `display: none;` or
`visibility: invisible;` properties make the link inaccessible to
everyone. The following two accessible approaches to deal with skip links are
best practices:

* Make the "skip navigation" link permanently visible
* Use CSS to hide the link off screen until it receives keyboard focus to make
  it visible to all users.

To implement the CSS approach best practice to the markup above, include the
following CSS code:

```
#skip a {
    display: block;
    position: absolute;
    left: -999px;
    top: -999px;
    }

#skip a:focus {
    left: 0;
    top: 0;
    padding: 3px;
    background: #ffc;
    border:1px solid #990000;
    }
```

You may also wish to consider adding more skip links for users to skip past
repetitive content. Additional skip links are not always necessary, though it
may be helpful in some cases.

## Why it Matters

Screen readers announce content sequentially as it appears in the HTML file.
What this means for users of assistive technology is that the content at the
top of the page, typically including the entire navigation, is read out to the
user before reaching any of the main content. Since content at the top of the
page can often be very lengthy, it can be time-consuming to listen to or tab
through all of it when the user is only interested in the main content.
Including a skip link in an HTML page is beneficial to blind users, users with
low vision, and mouse-only users.

## Rule Description

The page must have a link at the top before the navigation that allows users
to skip lengthy navigation and proceed to a page's main content to save time.

## The Algorithm (in simple terms)

Ensures that developers follow the best practice of having a skip link as the
very first link in a page

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Skip Navigation Links

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* G1: Adding a link at the top of each page that goes directly to the main content area

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