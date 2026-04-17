---
{
  "rule_id": "html-xml-lang-mismatch",
  "title": "<html> elements with lang and xml:lang must have the same base language",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/html-xml-lang-mismatch",
  "version": "axe-html-4.2",
  "impact": "moderate",
  "wcag": [
    "3.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <html> elements with lang and xml:lang must have the same base language

Source: https://dequeuniversity.com/rules/axe/4.2/html-xml-lang-mismatch

# <html> elements with lang and xml:lang must have the same base language

Rule ID:
html-xml-lang-mismatch

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Moderate

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

![](https://dequeuniversity.com/a/deque-university/axe-rule-help/generic/images/DQ_DevToolsPro2.svg)

## Start building more accessible experiences

     

Axe DevTools Pro helps development teams find and fix up to 80% of accessibility issues while coding. No experience required. Get started with your free trial today.

[Start for free](https://axe.deque.com/plans?utm_source=dequeuniversity&utm_medium=referral&utm_campaign=a11yexperiences)

## Sign up for the Axe newsletter

Stay up to date on Axe features, updates, and events.

[Newsletter Sign-up](https://hubs.ly/H0gkTMZ0 "Newsletter Sign-up")

## Compliance Data & Impact

### User Impact

Moderate  
▼

Minor

Critical

### Disabilities Affected

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* ![](assets/images/icons/brain_side.png)Cognitive

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 3.1.1: MUST: Language of Page

### WCAG Success Criteria [WCAG 2.0 (A)]

* 3.1.1: MUST: Language of Page

## How to Fix the Problem

Add a `lang` attribute value to the `html` element (e.g.
`<html lang="en">`) indicating the primary document language.

If required, duplicate the value of the `lang` attribute as the
value of the `xml:lang` attribute on the `html` element.

Remember to set the `lang` attribute value in the opening
`html` element and spell the value correctly. For example, if the
primary language of a document is English, specify the language as:

```
<html lang="en">
  <!--document head and body-->
</html>
```

Language value codes include some dialects such as "en-US" to
differentiate American English from UK English< or "fr-CA" to differentiate
Canadian French from European French. You can find a list of language and
dialect codes on the
[ISO Codes for the Representation of Names of Languages web page.](https://www.loc.gov/standards/iso639-2/php/code_list.php)

In the event of a document containing multiple languages, specify language
values as required:

```
<p>Text in one language <span lang="es">text in another language</span></p>
```

Be sure to specify languages written right-to-left using the
`dir` attribute:

```
<p lang="ar" dir="rtl">Arabic text here</p>
```

Conversely, you may also specify left-to-right languages via the
`dir="ltr"` attribute value.

## Why it Matters

When configuring a screen reader, users select a default language. If the
language of a webpage is not specified, the screen reader assumes the default
language set by the user. Multiple languages are an issue for users who speak
and access websites in multiple languages. It is essential to specify a
default language and ensure that it is valid for screen readers to function
correctly.

Screen readers use different sound libraries for each language, based on the
pronunciation and characteristics of that language. Screen readers can switch
between language libraries easily, but only if documents specify which
language(s) should to read. If the language is not specified, screen readers
read documents in the user's default language, resulting in garbled language.
It can be challenging to understand anything when screen readers are using the
wrong language library.

## Rule Description

The HTML document must contain a valid `lang` attribute or must
correspond to a valid `lang` code for multilingual screen reader
users who may prefer a language other than the default. The
`xml:lang` attribute value, if included on the
`html` element, must duplicate the value of the
`lang` exactly.

## The Algorithm (in simple terms)

Ensures every HTML document has a `lang` attribute with a valid
value and, if present, the `xml:lang` value duplicates the lang
value.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Language

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H57: Using language attributes on the html element

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