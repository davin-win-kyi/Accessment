---
{
  "rule_id": "tabindex",
  "title": "Elements should not have tabindex greater than zero",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/tabindex",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.4.3"
  ]
}
---

# Elements should not have tabindex greater than zero

Source: https://dequeuniversity.com/rules/axe/4.2/tabindex

# Elements should not have tabindex greater than zero

Rule ID:
tabindex

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

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

Serious  
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

There are two main ways to avoid using `tabindex` with a value
greater than 0. The first method is to change the `tabindex` to 0.
Note that this may change the order in which the user tabs through the
elements. The second method is to remove the `tabindex` entirely
and modify the structure of the page so that a user tabbing through elements
reach them in the order initially desired.

A third method is to change the tabindex to `tabindex="-1"` and add
Javascript. This removes the element from the tab order until you use
Javascript changes the "-1" to a "0".

### Adding Items to the Tab Order Using `tabindex="0"` or `tabindex="-1"` + JavaScript

Only links and form elements can receive the tab focus under normal
conditions. Most of the time it is best to not add other items (such as
`<p>`, `<th>`, `<span>`,
etc.) to the tab flow, but under some exceptional circumstances — such as some
kinds of complex interactive JavaScript widgets — it can make sense to add
items to the tab flow that would not normally receive the tab focus. There are
two ways to accomplish this:

1. `tabindex="0"`
2. `tabindex="-1"` + JavaScript

Methods for allowing items to receive tab focus

| Method | Effect |
| --- | --- |
| `tabindex="0"` | Puts the item in the normal tab flow. |
| `tabindex="-1"` + JavaScript | Keeps the item out of the normal tab flow until a JavaScript method allows tab focus and changes the value (i.e. by changing the `tabindex` value to 0 or a positive number) |

Regardless of the fix you choose, be sure that the resulting tab order follows
a pattern that is logical from the user’s perspective. Remember that tab order
is determined by order of elements in the DOM, as opposed to how they visual
positioning. Remember that
*Default Tab Order = Source Code Order = The Order With Styles Turned
Off*.

**Caution**: The following CSS styles can change the order in
which elements are visually positioned and can thus cause a confusing tab
order:

* `position: absolute;`
* `position: relative;`
* `float: left;`
* `float: right;`

## Why it Matters

Using `tabindex` with a value greater than 0 can create as many
problems as it solves. It creates an unexpected tab order, which makes the
page less intuitive and can give the appearance of skipping certain elements
entirely.

Here are some of the problems that `tabindex` (with a value of 1 or
greater) causes:

* **Unexpected tab order:** From the perspective of the user,
  `tabindex` changes the default tab order in unexpected ways,
  possibly causing disorientation.
* **Items can appear to be skipped entirely:** Items appear in
  the tab order only once. If a user tabs past the `tabindex` items
  and continues through the rest of the web page, at some point the user
  arrives at the location of the `tabindex` items, but the tabbing
  process skips over these links, because the user already tabbed through them
  at the beginning of the cycle. Incorrect tab orders are frustrating when
  users are unable access items, and may not know that (s)he needs to cycle
  through the entire set of links on the page to reaccess those links.
* **All `tabindex` items are tabbed to before any non-`tabindex`
  items.**
  If you want to change the tab order of the first items AND of a section
  later in the page, you would need to set the `tabindex` value for
  every single item through to the end of the modified section. Taken to a bit
  of an extreme, if you have 20 links on a page, and if you set the
  `tabindex` of one of those links to `tabindex="100"`,
  the user tabs to that link first, even though there are fewer than 100 links
  on the page. There is no way to modify the tab order of sections later in
  the page unless you manually set the tab order of all the links before that
  section.

## Rule Description

A `tabindex` attribute must never have a value greater than 0 to
prevent an unexpected tab order that can give the appearance of skipping some
elements entirely.

## The Algorithm (in simple terms)

Ensures that explicit `tabindex` attributes that are greater than 0
are never used

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Reading Order, Focus Order
* Tab Focusability
* Tab Order
* Tab/Reading Order
* Using tabindex Correctly

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* F44: Failure of Success Criterion 2.4.3 due to using tabindex to create a tab order that does not preserve meaning and operability

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