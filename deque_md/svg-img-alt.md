---
{
  "rule_id": "svg-img-alt",
  "title": "SVG images and graphics require accessible text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/svg-img-alt",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "1.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# SVG images and graphics require accessible text

Source: https://dequeuniversity.com/rules/axe/4.2/svg-img-alt

# SVG images and graphics require accessible text

Rule ID:
svg-img-alt

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

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
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 1.1.1: MUST: Non-text Content

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.1.1: MUST: Non-text Content

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (a): MUST: A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content)

## How to Fix the Problem

Ensure that all SVG elements that are added as markup into the HTML, one or a
combination of the below methods are used to provide an accessible name for
the SVG.

### Using the <title> attribute

#### Example:

```
    <svg role="img" title="A brown circle">
      <circle
        cx="30"
        cy="30"
        r="10"
        fill="brown"
      ></circle>
    </svg>
```

### Using the SVG <title> element

The <title> element provides an accessible, short-text description of
any SVG container element or graphics element.

#### Example:

```
    <svg role="img">
      <title>A descriptive title for the SVG element</title>
      <path d="...." />
    </svg>
```

### Using the `aria-label` attribute

#### Example:

```
    <svg xmlns="https://www.w3.org/2000/svg">
    <circle role="img" cx="50" cy="50" r="40" stroke="black" fill="red"  aria-label="A red circle with black border">
    </circle>
    </svg>
```

### Using the `aria-labelledby` attribute

#### Example:

```
    <div id="first">First</div>
    <div id="name">Name</div>
    <svg role="img"  aria-labelledby="first name">
      <path d="...." />
    </svg>
```

## Why it Matters

The intent of
[Success Criterion 1.1.1](https://www.w3.org/WAI/WCAG21/Understanding/non-text-content)
is to make information conveyed by non-text content (including SVG images)
accessible through the use of a text alternative. Text alternatives are a
primary way for making information accessible because they can be rendered
through any sensory modality (for example, visual, auditory or tactile) to
match the needs of the user. Providing text alternatives allows the
information to be rendered in a variety of ways by a variety of user agents.
For example, a person who cannot see a picture can have the text alternative
read aloud using synthesized speech. A person who cannot hear an audio file
can have the text alternative displayed so that he or she can read it. In the
future, text alternatives will also allow information to be more easily
translated into sign language or into a simpler form of the same language.

## Rule Description

Ensures SVG elements with an `<img>`, graphics-document or
graphics-symbol role have an accessible text alternative.

## The Algorithm (in simple terms)

The algorithm for this rule returns:

* **True** if the element has a `<title>`code
  child

  ```
  <svg id="target"><title>Time II: Party</title></svg>
  ```
* **True** if the `<title>` child has text
  nested in another element.

  ```
  <svg id="target"><title><g>Time II: Party</g></title></svg>
  ```
* **False** if the element has no
  `<title>` child.

  ```
  <svg id="target"></svg>
  ```
* **False** if the `<title>` child is empty.

  ```
  <svg id="target"><title></title></svg>
  ```
* **False** if the `<title>` is a grandchild.

  ```
  <svg id="target"><circle><title>Time II: Party</title></circle></svg>
  ```
* **False** if the `<title>` child has only
  whitespace.

  ```
  <svg id="target"><title> \t\r\n </title></svg>
  ```
* **False** if there are multiple titles and the first is
  empty.

  ```
  <svg id="target"><title></title><title>Time II: Party</title></svg>
  ```

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

No related course information available.

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* https://www.deque.com/blog/creating-accessible-svgs/
* G94: Providing short text alternative for non-text content that serves the same purpose and presents the same information as the non-text content
* Accessible SVG test page

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