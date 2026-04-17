---
{
  "rule_id": "accesskeys",
  "title": "accesskey attribute value must be unique",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/accesskeys",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": []
}
---

# accesskey attribute value must be unique

Source: https://dequeuniversity.com/rules/axe/4.2/accesskeys

# accesskey attribute value must be unique

Rule ID:
accesskeys

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
* Low Vision
* Mobility

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Ensure all `accesskey` values in the document are unique.

Look for and change duplicate `accesskey` values.

Consider the following code:

```
<a href="google.com" accesskey="g">Link to Google</a>
<a href="github.com" accesskey="g">Link to GitHub</a>
```

change the value of one of the accesskey attributes to remove the duplicated
value. An improved version of the above code looks like this:

```
<a href="google.com" accesskey="g">Link to Google</a>
<a href="github.com" accesskey="h">Link to GitHub</a>
```

Although the “providing access keys” option exists, we do not
recommend including `accesskey` attribute values due to
limitations:

* Access keys are not supported by every browser.
* Access keys are not always obvious to the user.
* Access keys defined by the developer may conflict with default browser
  access keys.
* Using a letter from a label element as access key may cause problems when
  rendering content in multiple languages

## Why it Matters

Specifying a `accesskey` attribute value for some part of a
document allows users to quickly activate or move the focus to a specific
element by pressing the specified key (usually in combination with the
`alt` key). Duplicating `accesskey` values
creates unexpected effects that ultimately make the page less accessible.

For each defined `accesskey`, ensure the value is unique and does
not conflict with any default browser and screen reader shortcut keys.

Content is not operable by keyboard users with no or low vision who cannot use
devices such as mice that require eye-hand coordination, users who have
trouble tracking a pointer, or users who must use alternate keyboards or input
devices acting as keyboard emulators.

## Rule Description

All `accesskey` attribute values in a document must be unique. Put
another way, `accesskey`s must not be repeated to prevent
unexpected effects for keyboard users.

## The Algorithm (in simple terms)

Ensures that each element on the page with an `accesskey` attribute
has a unique value.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

No related course information available.

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

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