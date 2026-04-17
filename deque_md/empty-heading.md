---
{
  "rule_id": "empty-heading",
  "title": "Headings must not be empty",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/empty-heading",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": []
}
---

# Headings must not be empty

Source: https://dequeuniversity.com/rules/axe/4.2/empty-heading

# Headings must not be empty

Rule ID:
empty-heading

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

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

Minor  
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

It is a best practice to ensure all heading elements (those marked with
`<h1>` through `<h6>`) contain content.
Furthermore, be sure that this content can be accessed by a screen reader;
this means that the heading text must NOT be hidden (for example, using CSS
`display: none` or `aria-hidden="true"`).

To ensure you are writing effective headings, read through the headings on the
page and ask yourself if you get a general sense of the page’s contents based
only on the information provided by the headings. If the answer is
"no", consider rewriting your headings.

While you are at it, be sure that you are using the heading markup (`<h1>`
through `<h6>` elements) if and only if you are writing a
heading. Headings should be brief, clear, unique, and marked with levels in
hierarchical order to convey the structure of the webpage.

### Bad Example: Empty Heading

```
<h1></h1>
```

### Bad Example: Heading Hidden from Assistive Technologies

```
<h1 aria-hidden="true">Heading Text</h1>
```

## Why it Matters

Screen readers alert users to the presence of a heading tag. If the heading is
empty or the text cannot be accessed, this could either confuse users or even
prevent them from accessing information on the page's structure.

If the text inside a heading cannot be accessed by a screen reader, users of
this technology will not be able to hear the contents of the heading. Since
headings relay the structure of a webpage, it's crucial that users of screen
readers are able to access the contents.

Applying heading markup (`<h1>` through
`><h6>`) is a quick way to make text stand out, however,
using it for anything other than headings will make navigating a web page more
confusing for users of assistive technology.

In addition to making the page more accessible, headings have other benefits,
since search engines use headings when filtering, ordering, and displaying
results. Improving the accessibility of your site can also have the effect of
making your page more findable.

In the same way that sighted users can glance at a page and get a sense of its
contents, users of screen readers can do the same by navigating through
headings. Well written and properly ordered headings can save users,
especially those who use screen readers, a lot of time and frustration.

## Rule Description

When at least one heading element (marked by `<h1>` through
`<h6>`) is present, it is a best practice to ensure it
contains content.

## The Algorithm (in simple terms)

Ensures that headings contain content and that this content is accessible by a
screen reader.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Headings
* Real Headings

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* G130: Providing descriptive headings
* ARIA12: Using role=heading to identify headings

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