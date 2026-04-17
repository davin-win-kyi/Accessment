---
{
  "rule_id": "area-alt",
  "title": "Active <area> elements must have alternate text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/area-alt",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "1.1.1",
    "2.4.4",
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Active <area> elements must have alternate text

Source: https://dequeuniversity.com/rules/axe/4.2/area-alt

# Active <area> elements must have alternate text

Rule ID:
area-alt

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQU_elearning.svg)

## Need accessibility training?

     

Deque University offers an extensive curriculum of self-paced online courses for every skill profile and experience level.

[Start learning today](https://dequeuniversity.com/curriculum/online-classes/?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=training_gen)

## Sign up for the Axe newsletter

Stay up to date on Axe features, updates, and events.

[Newsletter Sign-up](https://hubs.ly/H0gkTMZ0 "Newsletter Sign-up")

## Compliance Data & Impact

### User Impact

Critical  
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
* 2.4.4: MUST: Link Purpose (In Context)
* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 1.1.1: MUST: Non-text Content
* 2.4.4: MUST: Link Purpose (In Context)
* 4.1.2: MUST: Name, Role, Value

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (a): MUST: A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content)

## How to Fix the Problem

Ensure each clickable `<area>` within an image map has an
`alt`, `aria-label` or
`aria-labelledby` attribute value that describes the purpose of the
link.

`<img>` elements with `usemap` attribute values
identify image maps that use a set of `<map>` tags enclosing
clickable hotspots defined by `area` attribute values. An
additional `alt` attribute is required to define alternate text for
each `area`:

```
<img src="images/solar_system.jpg" alt="Solar System" width="472" height="800" usemap="#Map"/>
<map name="Map">
    <area shape="rect" coords="115,158,276,192" href="http://en.wikipedia.org/wiki/Mercury_%28planet%29" alt="Mercury">
    <area shape="rect" coords="115,193,276,234" href="http://en.wikipedia.org/wiki/Venus" alt="Venus">
    <!-- Remaining hotspots in image map... -->
</map>
```

### Bad Example

Don't use server-side image maps that rely on mouse click coordinates. These
maps are not keyboard accessible, and do not provide text alternatives to the
actionable areas of the image map.

```
<a href="/maps/nav.map"><img src="/images/navbar.gif" ismap></a>
```

## Why it Matters

Screen readers have no way of translating images into words. It is important
that all images, including image maps, have `alt` text values.

Screen readers typically announce the filename of the image if alternative
text is missing. Filenames do not adequately describe images and are not
helpful to screen reader users.

## Rule Description

An image map is a single image with many clickable areas. Like all images, an
image map must have alternate text for *each* of the different
clickable areas, as well as for the larger image itself, since screen readers
have no way of translating graphics into text.

## The Algorithm (in simple terms)

Ensures `area` elements of image maps have alternate text.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Advanced Alt Text and Extended Descriptions
* Image Alt Text
* Image Maps

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"
* H24: Providing text alternatives for the area elements of image maps

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