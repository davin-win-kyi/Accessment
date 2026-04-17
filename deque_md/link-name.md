---
{
  "rule_id": "link-name",
  "title": "Links must have discernible text",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/link-name",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.4.4",
    "2.4.9",
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Links must have discernible text

Source: https://dequeuniversity.com/rules/axe/4.2/link-name

# Links must have discernible text

Rule ID:
link-name

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

* 2.4.4: MUST: Link Purpose (In Context)
* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.4.4: MUST: Link Purpose (In Context)
* 4.1.2: MUST: Name, Role, Value

### Section 508 Guidelines

* 1194.22: MUST: Web based intranet and Internet Information & Applications
* 1194.22 (a): MUST: A text equivalent for every non-text element shall be provided (e.g., via "alt", "longdesc", or in element content)

## How to Fix the Problem

* Ensure that all link names are accessible. It may be possible that the
  inner link text is not visible to a screen reader, that there are
  duplicate link labels, or that the link is not focusable.
* Ensure all links can receive programmatic focus; for example, avoid
  device-specific events (for example, `onmouseover`).
* To ensure all link text is visible to screen readers, link text cannot be
  hidden (e.g. with `display: none` or
  `aria-hidden="true"`).
* To ensure all links can receive programmatic focus, avoid device-specific
  Javascript events such as `onmouseover()`,
  `mouseover()`, `hover()`, `onmouseout()`,
  `mouseout()`. Replace these with device-independent events such
  as `onfocus()`, `focus()`, `onblur()`, or
  `blur()`.
* Do not modify the style of the links to suppress the change in style when
  a link is the object of programmatic focus. Modifying link styles removes
  the capability for sighted keyboard users to know where they are on the
  page. Furthermore, ensure you are creating real links using the
  `a` element with the `href` attribute.

The ARIA 1.1 Wiki
[Using `aria-label` for link purpose](https://www.w3.org/WAI/GL/wiki/Using_aria-label_for_link_purpose#Examples)
page provides the following example to describe the purpose of a link in HTML
using the aria-label element:

```
<h4>Neighborhood News</h4>
 <p>Seminole tax hike: Seminole city managers are proposing a 75% increase in 
 property taxes for the coming fiscal year.
 <a href="taxhike.html" aria-label="Read more about Seminole tax hike">[Read more...]</a>
 </p> 
 <p>Baby Mayor: Seminole voters elect the city's youngest mayor ever by voting in 3 year
 old Willy "Dusty" Williams in yesterday's mayoral election.
 <a href="babymayor.html" aria-label="Read more about Seminole's new baby mayor">[Read more...]</a>
 </p>
```

## Why it Matters

* Inaccessible link elements pose barriers to accessibility, as they are a
  fundamental component of a website.
* Users who rely exclusively on a keyboard (and no mouse) to navigate a
  webpage can only click on links that can receive programmatic focus. A
  link that cannot receive programmatic focus is inaccessible to these
  users.
* Like sighted users, screen reader users need to know where a link is
  pointing. Inner link text provides this information, though it won't get
  used if a screen reader can't access it.
* Keyboard users, including visually impaired screen reader users or people
  who cannot use a mouse, can activate only the links and form elements that
  can receive programmatic focus. Any events activated exclusively by other
  types of focus, for example `onmouseover` events that depend on
  the mouse hover focus, are inaccessible to keyboard users. Only links and
  form elements receive keyboard focus by default. Modify elements that are
  not links or form components to receive focus by adding
  `tabindex="0"`.

## Rule Description

Link text and alternate text for images, when used as links, must be
discernible by a screen reader, must not have a duplicate label, and must be
focusable.

## The Algorithm (in simple terms)

Ensures that every link has an accessible name.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Visual focus indicator
* Links
* Labels
* Link

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Using aria-label to provide labels for objects
* Using aria-label to provide an invisible label
* ARIA7: Using aria-labelledby for link purpose
* F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link
* G91: Providing link text that describes the purpose of a link
* H30: Providing link text that describes the purpose of a link for anchor elements

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