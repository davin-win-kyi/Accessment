---
{
  "rule_id": "identical-links-same-purpose",
  "title": "Ensure that links with the same accessible name serve a similar purpose",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/identical-links-same-purpose",
  "version": "axe-html-4.2",
  "impact": "minor",
  "wcag": [
    "2.4.9",
    "3.2.4",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# Ensure that links with the same accessible name serve a similar purpose

Source: https://dequeuniversity.com/rules/axe/4.2/identical-links-same-purpose

# Ensure that links with the same accessible name serve a similar purpose

Rule ID:
identical-links-same-purpose

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Minor

Guidelines:
WCAG 2.1 (AAA), WCAG 2.0 (AAA)

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

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind

### Standard(s)

* WCAG 2.1 (AAA)
* WCAG 2.0 (AAA)

### WCAG Success Criteria [WCAG 2.1 (AAA)]

* 2.4.9: MUST: Link Purpose (Link Only)

### WCAG Success Criteria [WCAG 2.0 (AAA)]

* 2.4.9: MUST: Link Purpose (Link Only)

## How to Fix the Problem

Identical links must describe the same purpose in order to prevent user
confusion. The description lets a user distinguish any one link from links in
the Web page that lead to other destinations and helps the user determine
whether to follow the link. The URI of the destination is generally not
sufficiently descriptive.

The intent of this Success Criterion is to help users understand the purpose
of each link in the content, so they can decide whether they want to follow
it.

### Markup Examples that work

The following examples are preceded by a link to the technique reference page
of origination:

#### [Using aria-label for link purpose](https://www.w3.org/WAI/WCAG21/Techniques/aria/ARIA8)

Example: Describing the purpose of a link in HTML using aria-label:

```
<h4>Neighborhood News</h4>
<p>Seminole tax hike:  Seminole city managers are proposing a 75% increase in 
property taxes for the coming fiscal year.
<a href="taxhike.html" aria-label="Read more about Seminole tax hike">[Read more...]</a>
</p> 

<p>Baby Mayor:  Seminole voters elect the city's youngest mayor ever by voting in 3 year 
old Willy "Dusty" Williams in yesterday's mayoral election.
<a href="babymayor.html" aria-label="Read more about Seminole's new baby mayor">[Read more...]</a>
</p>
```

#### [Providing link text that describes the purpose of a link](https://www.w3.org/WAI/WCAG21/Techniques/general/G91)

Describing the purpose of a link in HTML in the text content of the a element:

```
<a href="routes.html">Current routes at Boulders Climbing Gym</a>
```

#### [Providing link text that describes the purpose of a link for anchor elements](https://www.w3.org/WAI/WCAG21/Techniques/html/H30)

##### Examples

**Example 1:** Describing the purpose of a link in HTML in the
text content of the a element.

```
<a href="routes.html">
  Current routes at Boulders Climbing Gym
</a>
```

**Example 2:** Using the `alt` attribute for the img
element to describe the purpose of a graphical link.

```
<a href="routes.html">
  <img src="topo.gif" alt="Current routes at Boulders Climbing Gym" /> 
</a>
```

**Example 3:** Using an empty `alt` attribute when the
anchor (a) element contains text that describes the purpose of the link in
addition to the `img` element. Note that the link text will appear
on the page next to the image.

```
<a href="routes.html">
  <img src="topo.gif" alt="" />
  Current routes at Boulders Climbing Gym
</a>
```

**Example 4:** A site allows users to provide feedback on
products, when the user is logged in, by clicking on the "Feedback"
link in a product detail page. Other users or the product manufacturer are
able to provide a response to any feedback. The feedback link displays an icon
before the "Feedback" text when a response to the user's feedback is
available. The help information describes this icon as a talking bubble
containing quotation marks and includes the icon itself as an example. The
icon's text alternative in the help text is "Response received
icon". The same text alternative is used in the product detail pages
(when a response is available) to allow identification of this icon through
multiple modalities.

```
<a href="prod_123_feedback.htm">Feedback 
  <img src="response.gif" width="15" height="15" alt="Response received icon" /></a>
```

**Example 5:** A link contains text and an icon, and the icon
provides additional information about the target.

```
<a href="WMFP.pdf">
  Woodend Music Festival Program
  <img src="pdficon.gif" alt="PDF format"/>
</a>
```

**Example 6:** The "MyCorp" company’s annual report is
made available on the corporate website as a PDF file, and the annual
corporate budget is made available as an Excel file on the web site.

### Note:

Many users prefer to know the file type when opening a file that results in
opening a new application to view the file, so it is often regarded as
useful to include this additional information. However, this is not required
for compliance with this success criterion.

```
<p>
  <a href=”2009mycorp_report.pdf”>MyCorp 2009 Annual Report (pdf)</a><br />
  <a href=”2009mycorp_budget.xls”>MyCorp 2009 Annual Budget (Excel)</a>
</p>
```

**Example 7:** Using a link to wrap block level elements in
HTML5.

```
<article>
  <a href="news.html">
  <h3>Budget Debate Continues in Parliament</h3>
  <p class="subhead"><img class="alertimg" src="alerticon.png" alt="Breaking News" height="30" width="30">Members of Parliament continued vigorous debate on three challenging issues surrounding the upcoming year's budget.</p>
  <p>Read more</p>
  </a>
</article>
```

## Why it Matters

This rule is important because the intention is to to help users understand
the purpose of each link in the content, so they can decide whether they want
to follow it. Best practice is that links with the same destination would have
the same descriptions, but links with different purposes and destinations
would have different descriptions (see also
[Success Criterion 3.2.4](https://www.w3.org/WAI/WCAG21/Understanding/consistent-identification)
which calls for consistency in identifying components that have the same
functionality). Because the purpose of a link can be identified from its link
text, links can be understood when they are out of context, such as when the
user agent provides a list of all the links on a page.

## Rule Description

Ensure that links with the same accessible name serve a similar purpose.

## The Algorithm (in simple terms)

The algorithm for this rule returns:

* **Undefined** for native link with
  `href` attribute value but with no accessible name.
* **Undefined** when an ARIA link has no accessible name.
* **Undefined** when an ARIA link has only any combination of
  unicode (emoji, punctuations, nonBmp) characters as the accessible name.
* **True** for native links with `href` attribute
  value and an accessible name.
* **True** for ARIA links that have accessible names (e.g., an
  >area< with >map< which is used in an >img< element).
* **True** for native links with `href` attribute
  values and an accessible name (that also has emoji, nonBmp and punctuation
  characters).

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

No related course information available.

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Understanding Success Criterion 2.4.9: Link Purpose (Link Only)
* Failure of Success Criterion 2.4.9 due to using a non-specific link such as "click here" or "more" without a mechanism to change the link text to specific text

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