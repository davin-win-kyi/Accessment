---
{
  "rule_id": "landmark-main-is-top-level",
  "title": "Main landmark must not be contained in another landmark",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/landmark-main-is-top-level",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Main landmark must not be contained in another landmark

Source: https://dequeuniversity.com/rules/axe/4.2/landmark-main-is-top-level

# Main landmark must not be contained in another landmark

Rule ID:
landmark-main-is-top-level

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

Guidelines:
Deque Best Practice

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

* Deque Best Practice

## How to Fix the Problem

Ensure the main landmark is not contained in another landmark.

Ensure all content is contained within a landmark region, designated with
HTML5 landmark elements and/or ARIA landmark regions.

It is a **best practice** to use both HTML5 and ARIA landmarks to
ensure all content is contained within a navigational region. In HTML5, you
should use elements like `<header>`,
`<nav>`, `<main>`, and
`<footer>`. Their ARIA counterparts are
`role="banner"`,
`role="navigation"`, `role="main"`,
and `role="contentinfo"`, in that order. By using both
HTML5 and ARIA markup, you make the webpage more robust and functional no
matter what screen reader technology is used.

Once added, screen reader users can navigate to a section based on its ARIA
landmark or HTML element. The `contentinfo` landmark provides a
simple replacement for a skip navigation link, though the replacement is only
useful for users of screen readers. Sighted users or users of screen enlargers
wouldn’t get much benefit from the addition, so it the
`contentinfo` landmark does not replace skip navigation links
altogether.

### Example

A simplified web page, stripped down to just the bare landmark essentials,
might look something like this:

```
<header role="banner">
   <p>Put company logo, etc. here.</p>
</header>
<nav role="navigation">
   <ul>
      <li>Put navigation here</li>
   </ul>
</nav>
<main role="main">
   <p>Put main content here.</p>
</main>
<footer role="contentinfo">
   <p>Put copyright, etc. here.</p>
</footer>
```

The markup for regions and roles is redundant, but this is a transition
period, and the above markup is the most robust.

## Why it Matters

Navigating a web page is far simpler for screen reader users if the content
splits between some high-level sections. Content outside of these sections is
difficult to find, and its purpose may be unclear.

HTML has historically lacked some key semantic markers, such as the ability to
designate sections of the page as the header, navigation, main content, and
footer. Using both HTML5 elements and ARIA landmarks in the same element is
considered a best practice, but the future probably favors HTML regions as
browser support increases.

The HTML Living Standard states "A hierarchically correct main element is one
whose ancestor elements *are limited* to `<html>`,
`<body>`, `<div>`,
`<form` without an accessible name, and autonomous custom
elements. Each main element must be a hierarchically correct main element."
This may reflect a "best practice" based on W3C validation.

## Rule Description

It is a best practice to ensure the main landmark is not contained within
another landmark. All content should be contained within distinct regions such
as the header (`role="banner"`), content
(`role="main"`), and footer (`role="contentinfo"`).

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
* The main element

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