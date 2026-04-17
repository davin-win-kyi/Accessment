---
{
  "rule_id": "html-lang-valid",
  "title": "<html> element must have a valid value for the lang attribute",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/html-lang-valid",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "3.1.1",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <html> element must have a valid value for the lang attribute

Source: https://dequeuniversity.com/rules/axe/4.2/html-lang-valid

# <html> element must have a valid value for the lang attribute

Rule ID:
html-lang-valid

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (A), WCAG 2.0 (A)

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
* ![](assets/images/icons/brain_side.png)Cognitive

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 3.1.1: MUST: Language of Page

### WCAG Success Criteria [WCAG 2.0 (A)]

* 3.1.1: MUST: Language of Page

## How to Fix the Problem

Add a `lang` or `xml:lang` attribute to the
`html` element (e.g. `<html lang="en">` or
`<html xml:lang="en">`) whose value represents the primary
language of document.

Make sure you identify a language in the opening
`<html>` element and spell the attribute correctly. For
example, if the primary language of a document is English, you could specify
the language as follows:

```
<html lang="en">
  <!--document head and body-->
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

## Why it Matters

When configuring a screen reader, users select a default language. If the
language of a webpage is not specified, the screen reader assumes the default
language set by the user. Language settings are an issue for users who speak
multiple languages and access website in more than one language. It is
essential to specify a language and ensure that it is valid so website text is
pronounced correctly.

Screen readers use different sound libraries for each language, based on the
pronunciation and characteristics of that language. Screen readers can switch
between these language libraries easily, but only if the documents correctly
specify which language(s) to read. If the language is not specified, the
screen reader reads the document in the user's default language, resulting in
a confusing accent! It is impossible to understand anything when screen
readers are using the wrong language library.

## Rule Description

The HTML document must contain a valid `lang` attribute or must
correspond to a valid `lang` code for multilingual screen reader
users who may prefer a language other than the default.

## The Algorithm (in simple terms)

Ensures that every HTML document has a `lang` or
`xml:lang` attribute and that the attribute's value is valid value.

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
* Language tags in HTML and XML
* Declaring language in HTML

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