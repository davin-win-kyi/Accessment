---
{
  "rule_id": "marquee",
  "title": "<marquee> elements are deprecated and must not be used",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/marquee",
  "version": "axe-html-4.2",
  "impact": "serious",
  "wcag": [
    "2.2.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# <marquee> elements are deprecated and must not be used

Source: https://dequeuniversity.com/rules/axe/4.2/marquee

# <marquee> elements are deprecated and must not be used

Rule ID:
marquee

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

* Low Vision
* Mobility
* ![](assets/images/icons/brain_side.png)Cognitive

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 2.2.2: MUST: Pause, Stop, Hide

### WCAG Success Criteria [WCAG 2.0 (A)]

* 2.2.2: MUST: Pause, Stop, Hide

## How to Fix the Problem

Deprecated elements which are presentational in nature have typically been
replaced by cascading style sheets (CSS), and their use may interfere with the
ability of assistive technologies to properly render content.

Remove all `marquee` elements, even if they are empty.

### Example of What To Remove

The following is code for scrolling marquee text with links, followed by the
rendered display output:

```
<marquee behavior="scroll" direction="left"> Frisbeetarianism is the <a href="http://en.wikipedia.org/wiki/Belief">belief</a> 
that when you <a href="http://en.wikipedia.org/wiki/Death">die</a>, your <a href="http://en.wikipedia.org/wiki/Soul">soul</a> 
goes up on the <a href="http://en.wikipedia.org/wiki/Roof">roof</a> and gets stuck.</marquee>
```

Frisbeetarianism is the
[belief](http://en.wikipedia.org/wiki/Belief) that when you
[die](http://en.wikipedia.org/wiki/Death), your
[soul](http://en.wikipedia.org/wiki/Soul) goes up on the
[roof](http://en.wikipedia.org/wiki/Roof) and gets stuck.

## Why it Matters

The `marquee` element creates scrolling text that is difficult to
read and click on. Beyond that, it can be distracting to viewers, especially
to those with low vision, cognitive disabilities, or attention deficits.

People with attention deficits or cognitive disabilities could become
distracted by content that scrolls. If scrolling content contains links,
people with limited fine motor abilities may not be able to click on the links
accurately. Users with visual impairments may not be able to see the scrolling
text with enough acuity to know what the content says.

## Rule Description

`<marquee>` elements must not be present because they are
deprecated, increase difficulty for users with limited dexterity, and are
distracting for users with cognitive or attention deficits.

## The Algorithm (in simple terms)

Ensures that the deprecated `marquee` element is not used.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Typography

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* F16: Failure of Success Criterion 2.2.2 due to including scrolling content where movement is not essential to the activity without also including a mechanism to pause and restart the content

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