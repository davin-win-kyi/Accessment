---
{
  "rule_id": "image-redundant-alt",
  "title": "Text of buttons and links should not be repeated in the image alternative",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/image-redundant-alt",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": [
    "1.1.1"
  ]
}
---

# Text of buttons and links should not be repeated in the image alternative

Source: https://dequeuniversity.com/rules/axe/4.2/image-redundant-alt

# Text of buttons and links should not be repeated in the image alternative

Rule ID:
image-redundant-alt

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

Guidelines:
Deque Best Practice

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Accessibility testing for dev teams - No experience required



Find and fix up to 80% of accessibility issues with axe DevTools Pro. Get started with your free trial today. No credit card needed.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11ytesting)

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

### Standard(s)

* Deque Best Practice

## How to Fix the Problem

Don't put the same text in the `alt` attribute value for a button
or link in the text adjacent to the corresponding image or link.

### Bad Example:

For example, given the icon markup `<img alt="Home Page"/>`,
the adjacent text also says "Home Page". In such a scenario, a
screen reader will announce this content to the user as "Home Page Home
Page". The redundancy is unnecessary and potentially confusing:

[![Home Page](/assets/images/html_css/home-icon.png)
Home Page](https://dequeuniversity.com/class/archive/html-css1/introduction/)

```
<p><a href="index.html"><img src="images/home-icon.png" alt="Home Page" width="24" height="25">Home Page</a></p>
```

In this scenario, the icon image's `alt` attribute value is better
left empty by setting `alt=""`.

Image buttons use the `alt` attribute as a label. The
`alt` attribute value must be provided, and the value must be
clear, concise, and representative of the action performed when the button is
activated by the user and not a description of the button image itself.

### Image Button Example

```
<input type="image" src="submit.png" name="submit" height="36" width="113" alt="Submit">
```

### Alternative text writing tips

Keep in mind that the purpose of a button's alternative text is to relay
information to blind users about the image’s contents and purpose. Blind users
should receive equivalent information from an image's alternative text as a
sighted user receives from the image. Alternative text should state the
intent, purpose, and meaning of the image.

Keep the following questions in mind when writing alternative text for button
images:

* What information does the button present?
* What purpose does the button fulfill?
* If I couldn't use an image as a button, what words would I use to convey
  button information or function?

Be sure that all text contained in the `alt` attribute is useful.
Words like "chart," "image," "diagram," or image
file names are not very useful.

## Why it Matters

It is unnecessary and potentially confusing to have alternative text for a
link or image to be repeated in text adjacent to the link or image since it
would be read twice by a screen reader.

Since image buttons use alt attributes for labels, the labels must not
duplicate the text next to the button. Duplicated alternative text for an
image or link in the text adjacent to that image or link results in screen
readers announcing the text to the user twice.

## Rule Description

When button and link text repeats in a `alt` attribute value,
screen reader users hear the same information twice, which renders the alt
text meaningless and confusing.

## The Algorithm (in simple terms)

Ensure button and link text is not repeated as image alternative.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Links
* Labels

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* F65: Failure of Success Criterion 1.1.1 due to omitting the alt attribute or text alternative on img elements, area elements, and input elements of type "image"
* H36: Using alt attributes on images used as submit buttons

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