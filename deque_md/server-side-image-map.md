---
{
  "rule_id": "server-side-image-map",
  "title": "Server-side image maps must not be used",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/server-side-image-map",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": [
    "2.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Server-side image maps must not be used

Source: https://dequeuniversity.com/rules/axe/4.2/server-side-image-map

# Server-side image maps must not be used

Rule ID:
server-side-image-map

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A), Section 508

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

* WCAG 2.1 (A)
* WCAG 2.0 (A)
* Section 508

### WCAG Success Criteria [WCAG 2.1 (A)]

* 2.1.1: MUST: Keyboard

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.1.1: MUST: Keyboard

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (f): MUST: Client-side image maps shall be provided instead of server-side image maps except where the regions cannot be defined with an available geometric shape.

## How to Fix the Problem

Change all server-side image maps to client-side image maps.

#### Bad Example

Don't use server-side image maps.

```
<a href="/maps/nav.map"><img src="/images/navbar.gif" ismap></a>
```

#### Good Example

A client-side image map is contained by an `<img>` element.
They have a usemap attribute containing the name of the image map (i.e.
`<img usemap="myImageMap" src="..." >`). After the
`<img>` element, a set of `<map>` elements
encloses the space where clickable hotspots are defined on the map as follows:

```
<img src="images/solar_system.jpg" alt="Solar System" width="472" height="800" usemap="#Map"/>
<map name="Map">
    <area shape="rect" coords="115,158,276,192" href="http://en.wikipedia.org/wiki/Mercury_%28planet%29" alt="Mercury">
    <area shape="rect" coords="115,193,276,234" href="http://en.wikipedia.org/wiki/Venus" alt="Venus">
    Remaining hotspots in image map...
</map>
```

## Why it Matters

Server-side image maps are not keyboard accessible; mouse clicks are required
to access the links contained in the image, making the image inaccessible to
people who only use keyboards for their navigation.

Server side image maps pass the coordinates of the mouse click to the
server-side script used to process the image map. Because they rely on mouse
clicks, they are not keyboard accessible, whereas client-side image maps are
keyboard accessible. Further, it is not possible to provide text alternatives
to the actionable areas of a server-side image map like you can with the
`area`s of a client-side image map.

## Rule Description

The document contains an image map that is server-side instead of client-side.

## The Algorithm (in simple terms)

Ensures that server-side image maps are never used.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Map directions
* Image Maps

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Web Accessibility: Image Maps

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