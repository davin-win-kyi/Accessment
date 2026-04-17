---
{
  "rule_id": "avoid-inline-spacing",
  "title": "Inline text spacing must be adjustable with custom stylesheets",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/avoid-inline-spacing",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "WCAG 2.1"
  ]
}
---

# Inline text spacing must be adjustable with custom stylesheets

Source: https://dequeuniversity.com/rules/axe/4.2/avoid-inline-spacing

# Inline text spacing must be adjustable with custom stylesheets

Rule ID:
avoid-inline-spacing

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Serious

Guidelines:
WCAG 2.1 (AA)

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

* Attention Deficit
* Blind
* Low Vision
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility
* ![](assets/images/icons/brain_side.png)Cognitive

### Standard(s)

* WCAG 2.1 (AA)

### WCAG Success Criteria [WCAG 2.1 (AA)]

* 1.4.12: MUST: Text Spacing
* 1.4.12: MUST: Content on Hover or Focus

## How to Fix the Problem

### Correct markup solutions

The `avoid-inline-spacing` rule includes five markup patterns
that pass testing criteria:

```
<!-- style attribute includes font-size property -->
<p id="pass1" style="font-size: 200%">I stepped on a Corn Flake, now I'm a Cereal Killer...</p>
 
 
<!-- style attribute includes line-height property -->
<p id="pass2" style="line-height: 1.5;">
    On a scale from one to ten, what is your favorite color of the alphabet.</p>
 
<!-- style attribute includes letter-spacing property -->
<p id="pass3" style="letter-spacing: 50px;">
    The quick brown fox jumped over the lazy dog</p>
 
<!-- style attribute includes word-spacing property -->
<p id="pass4" style="word-spacing: 10px;">A group of 24 Caterpillars has 694 legs</p>
 
<!-- style attribute includes word-spacing, letter-spacing, and line-height properties -->
<p id="pass5" 
    style="word-spacing: 20ch; letter-spacing: 50rem; line-height: 3;">Look, a distraction!</p>
```

### Incorrect markup solutions

The `avoid-inline-spacing` rule includes four markup patterns
that fail testing criteria:

```
<!-- style attribute includes forced line-height property -->
<p id="fail1" style="line-height: 1.5 !important;">Banana error</p>
 
<!-- style attribute includes forced letter-spacing property -->
<p id="fail2" style="letter-spacing: 100em !important;">We need more cheeeeeeessseeeee!!!</p>
 
<!-- style attribute includes forced word-spacing property -->
<p id="fail3" style="word-spacing: -.4ch !important;">The cheese grater is in the way!</p>
 
<!-- style attribute a word-spacing property, a forced letter-spacing property, and a line-height -->
<p id="fail4" style="word-spacing: 200%; letter-spacing: 50rem !important; line-height: 3;">Yo, Darth Vader</p>
```

## Why it Matters

Many people with cognitive disabilities have trouble tracking lines of text
when a block of text is single spaced. Providing spacing between 1.5 to 2
allows them to start a new line more easily once they have finished the
previous one.

## Rule Description

Ensure that text spacing set through style attributes can be adjusted with
custom stylesheets.

## The Algorithm (in simple terms)

Inline text spacing must be adjustable with custom stylesheets.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* SC 1.4.12 Text Spacing

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* 1.4.12 Text Spacing Level AA (Added in 2.1)

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