---
{
  "rule_id": "href-no-hash",
  "title": "Anchors must only be used as links with valid URLs or URL fragments",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/href-no-hash",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.4.4",
    "2.4.9",
    "4.1.2"
  ]
}
---

# Anchors must only be used as links with valid URLs or URL fragments

Source: https://dequeuniversity.com/rules/axe/4.2/href-no-hash

# Anchors must only be used as links with valid URLs or URL fragments

Rule ID:
href-no-hash

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
Deque Best Practice

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

* Deque Best Practice

## How to Fix the Problem

Provide a valid link destination in the `href` attribute to ensure
that links function properly even with JavaScript turned off. In particular,
you should avoid `href=""` or
`href="#"`. The "#" symbol is used as a
"fragment identifier separator", which means its intended purpose
within the `href` attribute is to precede a string of text which
identifies a fragment within the page (a named anchor or an ID on the page).
The use of "#" as the hypertext reference essentially means that
the anchor points to nothing. In some browsers this may "point" to
the entire document or to the top of the page, and this will cause an
unexpected shift in focus.

### Examples

Link
`href`
Recommendations

| Recommended | Not Recommended |
| --- | --- |
| Placing a link to another page in the href value:   ``` <a href="index.html">   Home </a> ```   Placing a link to an internal destination on the same page in the href value:   ``` <a href="rules/axe/html#annual">   Annual Reports </a> ```   Placing a valid link in the href attribute, plus a JavaScript function:   ``` <a href="http://www.deque.com"  onclick="window.open(this.href);  return false;">   Annual Reports </a> ``` | Leaving off the href attribute:   ``` <a  onclick="window.location.href=index.html">   Home </a> ```   Placing nothing in the href attribute:   ``` <a href=""  onclick="window.location.href=index.html">   Home </a> ```   Placing "#" in the href attribute:   ``` <a href="class/html-css1/navigation/links#"  onclick="window.location.href=index.html">   Home </a> ```   Placing a JavaScript function in the `href` attribute:   ``` <a href="javascript:void(0)"  onclick="myFunc();">   Annual Reports </a> ``` |

## Why it Matters

Inaccessible link elements pose barriers to accessibility, as they are a
fundamental component of a website.

Users who rely exclusively on a keyboard (and no mouse) to navigate a webpage
can only click on links that can receive programmatic focus. If a link cannot
receive programmatic focus, it will be inaccessible to these users.

Like sighted users, screen reader users need to know where a link is pointing.
Inner link text provides this information, though it won't be useful if a
screen reader can't access it.

Keyboard users — such as blind screen reader users or people who cannot use a
mouse due to tremors in their hands — can activate only the links and form
elements that can receive programmatic focus. They cannot activate anything
that cannot receive a programmatic focus. If any events are activated
exclusively by the other types of focus, for example
`onmouseover` events that depend on the mouse hover focus — those
events will be inaccessible to keyboard users. By default, only links and form
elements receive keyboard focus. Other elements can be modified to receive
focus by adding `tabindex="0"`.

## Rule Description

Anchor links must be used with valid URLs or URL fragments so that they are
discernible by a screen reader.

## The Algorithm (in simple terms)

Ensures that every anchor link is used as a link with a valid URL or URL
fragment.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Links
* Name
* Focus Management

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H30: Providing link text that describes the purpose of a link for anchor elements
* F89: Failure of Success Criteria 2.4.4, 2.4.9 and 4.1.2 due to not providing an accessible name for an image which is the only content in a link
* ARIA7: Using aria-labelledby for link purpose

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