---
{
  "rule_id": "page-has-heading-one",
  "title": "Page must contain a level-one heading",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/page-has-heading-one",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Page must contain a level-one heading

Source: https://dequeuniversity.com/rules/axe/4.2/page-has-heading-one

# Page must contain a level-one heading

Rule ID:
page-has-heading-one

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

* Sighted Keyboard Users
* Blind
* Low Vision
* ![](assets/images/icons/deafblind.png)Deafblind

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure that the page or at least one of its frames contains a level-one
heading.

Generally, it is a best practice to ensure that the beginning of a page's main
content starts with a `h1` element, and also to ensure that the
page contains only one `h1` element.

Usually the best practice is to start the main content of a web page with a
level 1 heading (`h1`), with no other headings before this
high-level heading. Mark the sub-sections of the page as level 2 headings
(`h2`). If the level 2 sections contain sub-sections, mark these
children as level 3 sections (`h3`) and so on.

The heading hierarchy of an iframe SHOULD be designed to fit within the
heading hierarchy of the parent document, if possible. If you have control
over the content of the embedded document in the iframe, the best practice is
to fit the iframe heading hierarchy into the proper place within the existing
heading hierarchy of the parent page. If the parent document is structured
with a single `h1` at the top of the content (this is a recommended
best practice), the `iframe` ought to take this into account, and
not start with another `h1`. The `iframe` document ought
to start with `h2` if the content is a direct child of the first
heading on the page, or if it is a child of a level 2 heading, then the first
heading of the iframe should be `h3`, and so on.

When iframes contain content from third-party websites — as is often the case
— it is not always possible to control the heading hierarchy. Because of the
lack of control in these situations, the guidelines don't strictly require the
heading hierarchies of the two documents to match, but it would still be
better if they did.

## Why it Matters

Screen reader users can use keyboard shortcuts to navigate directly to the
first `h1`, which, in principle, should allow them to jump directly
to the main content of the web page. If there is no `h1`, or if the
`h1` appears somewhere other than at the start of the main content,
screen reader users must listen to more of the web page to understand its
structure, wasting valuable time.

Keep in mind that blind users can't just look at a web page and immediately
understand its layout the way that a visual user can. Visual users can take in
much information about the page layout without having to read all of the
content. Blind users don't have that luxury. Screen readers read linearly,
which means listening to the entire web page unless there is some other
convenient way to get a "glimpse" of the page's layout and
structure. It turns out that headings are a way to do that. Screen reader
users can use keyboard shortcuts to navigate through the heading structure of
a document.

## Rule Description

Ensures that the page, or at least one of its frames, contains an
`h1` element that appears before the start of the main content to
allow screen reader users to use keyboard shortcuts to navigate the heading
structure instead of wasting time listening to more of the web page to
understand its structure.

## The Algorithm (in simple terms)

This rule finds all elements which match the following selector and verifies
that there is at least one: `h1:not([role])`,
`[role="heading"][aria-level="1"]`

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Navigating Headings with Screen Readers
* Heading Level 1 Best Practices

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Headings - Page Structure Tutorial - Web Accessibility Initiative

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