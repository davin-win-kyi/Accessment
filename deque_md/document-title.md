---
{
  "rule_id": "document-title",
  "title": "Documents must contain a title element to aid in navigation",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/document-title",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.4.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Documents must contain a title element to aid in navigation

Source: https://dequeuniversity.com/rules/axe/4.2/document-title

# Documents must contain a title element to aid in navigation

Rule ID:
document-title

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQU_elearning.svg)

## Need accessibility training?

     

Deque University offers an extensive curriculum of self-paced online courses for every skill profile and experience level.

[Start learning today](https://dequeuniversity.com/curriculum/online-classes/?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=training_gen)

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

* 2.4.2: MUST: Page Titled

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.4.2: MUST: Page Titled

## How to Fix the Problem

Add an informative title to the document using the `title` element
with meaningful text.

Ensure that the document's `title` contains short, descriptive text
summarizing the page's contents.

Add a title to the document using the `title` tag. You can do this
as follows:

```
	<html>
		<title> A brief, clear, informative, and unique title</title>
		<!-- the rest of the page content --> 
	</html>
```

A good title is brief, clear, informative, and unique. Ensure that the
document's `title` contains short, descriptive text summarizing the
page's contents. To pass this rule, it’s not sufficient to simply have a
`title` element; the element must also contain meaningful text.

Be sure to follow these **best practices** when writing a title:

* Replace placeholder titles such as "untitled page" with a more
  appropriate phrase
* Make each title unique - don’t duplicate titles across pages, even if they
  are similar.
* Put all unique information first. If you want to include the company’s name
  or brand in the title, this information should go after the unique content.
  Otherwise, users of screen readers will have to listen to this information
  over and over as they search for the page that interests them.
* Make the page title match the top heading (ideally labelled as h1) on your
  page. These don’t need to be identical, but it often makes sense to make
  them very similar, since the `title` and `h1` elements
  serve essentially the same purpose.

In addition to making the page more accessible, titles have other benefits,
since search engines use titles when filtering, ordering, and displaying
results. Improving the accessibility of your site can also have the effect of
making your page more findable.

## Why it Matters

Screen reader users use page titles to get an overview of the contents of the
page. Navigating through pages can quickly become difficult and confusing for
screen reader users if the pages are not marked with a title. The page
`title` element is the first thing screen reader users hear when
first loading a web page.

The `title` is the first thing that screen reader users hear when
they arrive at a page. If there is no `title` or if the
`title` is not descriptive and unique, screen reader users must
read through the page to determine its contents and purpose.

## Rule Description

The HTML document must have a `title` element to provide users with
an overview of its content, and when present, it must not be empty.

## The Algorithm (in simple terms)

Ensures that each HTML document contains a `title`.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Page Title

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H25: Providing a title using the title element

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