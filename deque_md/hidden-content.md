---
{
  "rule_id": "hidden-content",
  "title": "Hidden content on the page cannot be analyzed",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/hidden-content",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": []
}
---

# Hidden content on the page cannot be analyzed

Source: https://dequeuniversity.com/rules/axe/4.2/hidden-content

# Hidden content on the page cannot be analyzed

Rule ID:
hidden-content

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

* Sighted Keyboard Users
* Blind
* ![](assets/images/icons/color_pallete.png)Colorblindness

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

You need to trigger the display of this content to analyze it. A failure
indicates problems analyzing the content on the page under test, whereas when
"incomplete," there may be hidden items identified that must be
exposed to be analyzed. Passing this rule (in other words, no violations
found) indicates it was possible to analyze all of the content on the page,
and the test identified no hidden content.

As one of Deque's experimental rules, the Hidden Content rule automatically
alerts you to the fact that there is visually hidden content on the page under
test. Various techniques exist for hiding elements and their contained content
from either screen readers only, or from sighted users only. It is also
possible to hide text from both sighted users and screen reader users
simultaneously (for example, by using CSS properties including
`display: none` or `visibility: hidden`). All such
techniques can prevent the content from being analyzed for accessibility
problems, so as with CSS-generated text, use these techniques with caution.
Depending on the technique used to hide content, the solution lies in using
the appropriate techniques to expose it so that it can then be analyzed.

## Why it Matters

Hidden content cannot be automatically analyzed for accessibility rule
violations.

Visually hidden content must be accessible by both sighted and screen reader
users. If there is a compelling reason to hide content from sighted users,
there is usually a compelling reason also to hide that content from blind
users. When the content is made available to sighted users, it makes sense to
make it available to blind users as well.

Content will be hidden from screen reader users (and all sighted users too)
when the CSS properties `display: none` or
`visibility: hidden` are used. Changing CSS properties to
`display: block`, `display: inline`, or using other
display values makes the items available to screen reader users.

## Rule Description

Informs users about hidden content that cannot be analyzed for accessibility
violations.

## The Algorithm (in simple terms)

Checks CSS style property values of `display: none;` and
`visibility: hidden;` and alerts users to the presence of hidden
item content requiring further review.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Visually Hidden Content

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* W3Schools - Display Visibility
* W3Schools - Visibility Hidden

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