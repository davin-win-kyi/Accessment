---
{
  "rule_id": "valid-lang",
  "title": "lang attribute must have a valid value",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/valid-lang",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "3.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# lang attribute must have a valid value

Source: https://dequeuniversity.com/rules/axe/4.2/valid-lang

# lang attribute must have a valid value

Rule ID:
valid-lang

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (AA), WCAG 2.0 (AA)

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
* ![](assets/images/icons/brain_side.png)Cognitive

### Standard(s)

* WCAG 2.1 (AA)
* WCAG 2.0 (AA)

### WCAG Success Criteria [WCAG 2.1 (AA)]

* 3.1.2: MUST: Language of Parts

### WCAG Success Criteria [WCAG 2.0 (AA)]

* 3.1.2: MUST: Language of Parts

## How to Fix the Problem

Ensure that the language code specified in the `lang` attribute is
a valid language code (e.g. `<html lang="en">`;
would set the language of the document to English).

Make sure you identify a language in the opening
`<html>` element and spell the attribute correctly. For
example, if the primary language of a document is English, you could specify
the language as follows:

```
<html lang="en">
    document text
</html>
```

If you would like, you can even specify some dialects with codes such as
"en-US" to signify American English or "fr-CA" for
Canadian French. You can find a list of language and dialect codes on the
internet.

If the language changes within a document, you can specify this as follows:

```
<p>Text in one language <span lang="es">text in another language</span></p>
```

If you are using a language that is written right to left, be sure to specify
this using the `dir` attribute:

```
<p lang="ar" dir="rtl">Arabic text here</p>
```

If you would like to specify that a language is written left to right, you can
fill the value of the `dir` attribute with the value
"ltr".

Ensure that the language code specified in the
`<html lang=" ">` is a valid and allowed language code.

To identify the primary language of the document as English in the opening
<html> element, designate it with the two-letter code "en".

```
<html lang="en">
```

Language value codes include some dialects such as "en-US" to
differentiate American English from UK English< or "fr-CA" to differentiate
Canadian French from European French. You can find a list of language and
dialect codes on the
[ISO Codes for the Representation of Names of Languages web page.](https://www.loc.gov/standards/iso639-2/php/code_list.php)

## Why it Matters

When configuring a screen reader, users select a default language. If the
language of a webpage is not specified, the screen reader assumes it is the
default language set by the user. Language selection becomes an issue for
users who speak multiple languages and access the website in more than one
language. It is essential to specify a language and ensure that it is valid so
website text is pronounced correctly.

Screen readers use different sound libraries for each language, based on the
pronunciation and characteristics of that language. Screen readers can switch
between these language libraries easily, but only if the documents specify
which language(s) to read. If the language is not specified, the screen reader
reads the document in the user's default language, resulting in a confusing
experience!

## Rule Description

The language specified in the HTML document must be one of the valid languages
to ensure text is pronounced correctly for screen reader users.

## The Algorithm (in simple terms)

`lang` attribute must have a valid value.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Primary Language of Page
* Language of Parts within the Page
* Language Codes

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* H58: Using language attributes to identify changes in the human language

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