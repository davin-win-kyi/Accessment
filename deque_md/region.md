---
{
  "rule_id": "region",
  "title": "All page content must be contained by landmarks",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/region",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# All page content must be contained by landmarks

Source: https://dequeuniversity.com/rules/axe/4.2/region

# All page content must be contained by landmarks

Rule ID:
region

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

Guidelines:
Deque Best Practice

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQU_elearning.svg)

## Need accessibility training?

     

Deque University offers an extensive curriculum of self-paced online courses for every skill profile and experience level.

[Start learning today](https://dequeuniversity.com/curriculum/online-classes/?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=training_gen)

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

Ensure all content is contained within a landmark region, designated with
HTML5 landmark elements and/or ARIA landmark regions.

Screen reader users can navigate to a section based on its HTML element or
ARIA Landmark. For example, you might use ARIA Landmarks to provide a simple
replacement for a skip navigation link, though the replacement is only useful
for users of screen readers. Sighted users or people using screen enlargers
won't benefit from the addition, so it's not a good practice to substitute
ARIA landmarks for skip navigation links altogether.

### Examples

The markup in the following example shows native HTML5 landmark elements:

```
<html lang="en">
    <head>
        <title>Hello</title>
    </head>
    <body>
        <header>This is the header</header>
        <nav>This is the nav</nav>
        <main>This is the main</main>
        <footer>This is the footer</footer>
    </body>
</html>
```

ARIA best practices call for the use of native HTML5 landmark elements instead
of ARIA roles where possible, but the markup in the following example works:

```
<html lang="en">
    <head>
        <title>Hello</title>
    </head>
    <body>
        <div role="banner">This is the header</div>
        <div role="navigation">This is the nav</div>
        <div role="main">This is the main</div>
        <div role="contentinfo">This is the footer</div>
    </body>
</html>
```

## Why it Matters

Navigating a web page is far simpler for screen reader users if the content
splits between multiple high-level sections. Content outside of sections is
difficult to find, and the content's purpose may be unclear.

Historically, HTML lacked some key semantic markers such as the ability to
designate sections of the page as the header, navigation, main content, and
footer. Using both HTML5 elements and ARIA landmarks in the same element is
considered a best practice, but the future favors using native HTML5 element
regions as browser support increases.

## Rule Description

It is best practice to contain all content excepting skip links, within
distinct regions such as the header, nav, main, and footer.

## The Algorithm (in simple terms)

Ensures that all content on a page is contained within a landmark region.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmarks
* Landmark Roles
* Live Regions

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* ARIA11: Using ARIA landmarks to identify regions of a page

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