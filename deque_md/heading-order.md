---
{
  "rule_id": "heading-order",
  "title": "Heading levels should only increase by one",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/heading-order",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": []
}
---

# Heading levels should only increase by one

Source: https://dequeuniversity.com/rules/axe/4.2/heading-order

# Heading levels should only increase by one

Rule ID:
heading-order

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

Ensure headings are in a logical order. For example, check that all headings
are marked with `h1` through `h6` elements and that
these are ordered hierarchically. For example, the heading level following an
`h1` element should be an `h2` element, not an
`h3` element. Finally, don't use heading mark up on text that isn't
actually a heading.

To ensure you are writing effective headings, read through the headings on the
page and ask yourself if you get a general sense of the page’s contents based
only on the information provided by the headings. If the answer is
"no", consider rewriting your headings. While you are at it, be sure
that you are using the heading markup (`h1` through
`h6`'s) if and only if you are writing a heading. While applying
such markup is a quick way to make text stand out, using it for anything other
than headings will make navigating a web page more confusing for users of
assistive technology.

### Example

If you were to create a web page about setting the exposure manually on a
camera, you could simplify the steps into an outline as follows:

* Setting the Exposure Manually on a Camera
  + Set the ISO
  + Choose an aperture
  + Set a shutter speed

You would need to fill in the details of each item in this list, but that's a
pretty good overview of the main steps or parts of the process, so we can use
these list items as the basis for our heading structure. In this example, the
first item would be marked as `h1` element and the remaining items
would be marked as `h2` elements:

```
<h1>Setting the Exposure Manually on a Camera</h1>
      <p>Put text here...</p>
   <h2>Set the ISO</h2>
      <p>Put text here...</p>
   <h2>Choose an aperture</h2>
      <p>Put text here...</p>
   <h2>Choose a shutter speed</h2>
      <p>Put text here...</p>
```

### Best Practice: Start the Main Content with a `h1` element:

Usually, the best practice is to start the main content of a web page with a
level 1 heading element (`h1`), with no other headings before this
high-level heading. Markup the sub-sections of the page as level 2 heading
elements (`h2`). If there are sub-sections within the level 2
sections, mark these sections as level 3 heading elements (`h3`)
and so on. Anything that comes before the main content of the page should not
be marked up with any headings at all, though this is not an iron-clad rule.
One of the main reasons that the `h1` element should appear at the
beginning of the main content is because screen reader users can use keyboard
shortcuts to navigate directly to the first `h1` element, which, in
principle, should allow them to jump directly to the main content of the web
page. If there is no `h1` element, or if the
`h1` element appears somewhere other than at the start of the main
content, screen reader users will have to listen to additional web page
content to understand the page structure, wasting valuable time.

As with all best practice recommendations, there will be exceptions in which
it doesn't make sense to start the content with `<h1>`, or
when it may be best to put other headings before the content, but the
exceptions do not apply to the vast majority of web pages.

## Why it Matters

The underlying purpose of headers is to convey the structure of the page. For
sighted users, the same purpose is achieved using different sizes of text.
Text size, however, is not helpful for users of screen readers, because a
screen reader identifies a header only if it is properly marked-up. When
heading elements are applied correctly, the page becomes much easier to
navigate for screen reader users and sighted users alike.

In the same way that sighted users can glance at a page and get a sense of its
contents, users of screen readers can do the same by navigating through
headings. Well written and properly ordered headings can save users,
especially those who use screen readers, a lot of time and frustration.

The purpose of headings is to describe the structure of the webpage, not just
highlight important text. They should be brief, clear, unique, and marked with
`h1` through `h6` elements applied in hierarchical
order. All of these qualities make headings valuable tools for screen reader
users. Similar to the way sighted users can glance at a page and get a sense
of its contents, screen reader users can navigate through headings. Well
written and properly ordered headings can save screen reader time and
frustration.

In addition to making the page more accessible, headings have other benefits
since search engines use headings when filtering, ordering, and displaying
results. Improving the accessibility of your site can also have the effect of
making your page more findable.

## Rule Description

Headings must be in a valid logical order, meaning `h1` through
`h6` element tags must appear in a sequentially-descending order.

## The Algorithm (in simple terms)

Ensures the order of headings is semantically correct.

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