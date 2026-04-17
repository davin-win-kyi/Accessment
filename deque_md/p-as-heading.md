---
{
  "rule_id": "p-as-heading",
  "title": "Bold, italic text and font-size are not used to style <p> elements as a heading",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/p-as-heading",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.3.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Bold, italic text and font-size are not used to style <p> elements as a heading

Source: https://dequeuniversity.com/rules/axe/4.2/p-as-heading

# Bold, italic text and font-size are not used to style <p> elements as a heading

Rule ID:
p-as-heading

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Start building more accessible experiences

     

Axe DevTools Pro helps development teams find and fix up to 80% of accessibility issues while coding. No experience required. Get started with your free trial today.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11yexperiences)

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
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.3.1: MUST: Info and Relationships

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.3.1: MUST: Info and Relationships

## How to Fix the Problem

Ensure `p` elements are not used to style headings.

### Best practice: Start the main content with an h1 element:

Usually, the best practice is to start the main content of a web page with a
level 1 heading (`h1`), with no other headings before this
high-level heading. Mark sub-sections of the page as level 2 headings
(`h2`). If there are sub-sections within the level 2 sections, they
should be marked as level 3 (`h3`) and so on. Anything that comes
before the main content of the page should not be marked up with any headings
at all, though this is not an iron-clad rule. One of the main reasons that the
`h1` should appear at the beginning of the main content is because
screen reader users can use keyboard shortcuts to navigate directly to the
first `h1`, which, in principle, should allow them to jump directly
to the main content of the web page. If there is no `h1`, or if the
`h1` appears somewhere other than at the start of the main content,
screen reader users have to listen to more of the web page to understand its
structure, wasting valuable time.

As with all best practice recommendations, exceptions exist in which it
doesn't make sense to start the content with `h1`, or when it may
be best to put other headings before the content, but the exceptions do not
apply to the vast majority of web pages.

## Why it Matters

The underlying purpose of headers is to convey the structure of the page.
Sighted users can see structure by using different sizes of text. Screen
reader users, though, require heading elements to be marked up explicitly.
When heading elements are properly applied the page becomes much easier to
navigate for screen reader users and sighted users alike.

In the same way that sighted users can glance at a page and get a sense of its
contents, users of screen readers can do the same by navigating through
headings. Well written and properly ordered headings can save users,
especially those who use screen readers, a lot of time and frustration.

The purpose of headings is to describe the structure of the webpage, not just
highlight important text. They should be brief, clear, unique, and marked with
`h1` through `h6` elements in hierarchical order. All of
these qualities make headings are a valuable tool for users of screen readers.
In the same way that sighted users can glance at a page and get a sense of its
contents, users of screen readers can do the same by navigating through
headings. Well written and properly ordered headings can save users,
especially those who use screen readers, a lot of time and frustration.

In addition to making the page more accessible, headings have other benefits,
since search engines use headings when filtering, ordering, and displaying
results. Improving the accessibility of your site can also have the effect of
making your page more findable.

## Rule Description

Styled `p` elements must not be used to represent headings because
the structure of the document cannot otherwise be determined by screen reader
users.

## The Algorithm (in simple terms)

Ensures that paragraph elements do not use italic, bold or font size to give
the appearance of headings.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Headings

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Heading Tags

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