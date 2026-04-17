---
{
  "rule_id": "aria-valid-attr-value",
  "title": "ARIA attributes must conform to valid values",
  "source_url": "https://dequeuniversity.com/rules/axe/4.2/aria-valid-attr-value",
  "version": "axe-html-4.2",
  "impact": "critical",
  "wcag": [
    "4.1.2",
    "WCAG 2.0",
    "WCAG 2.1"
  ]
}
---

# ARIA attributes must conform to valid values

Source: https://dequeuniversity.com/rules/axe/4.2/aria-valid-attr-value

# ARIA attributes must conform to valid values

Rule ID:
aria-valid-attr-value

Ruleset:
 [axe-core 4.2](rules/axe/4.2)

User Impact:
Critical

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

Critical  
▼

Minor

Critical

### Disabilities Affected

* Blind
* ![](assets/images/icons/deafblind.png)Deafblind
* Mobility

### Standard(s)

* WCAG 2.1 (A)
* WCAG 2.0 (A)

### WCAG Success Criteria [WCAG 2.1 (A)]

* 4.1.2: MUST: Name, Role, Value

### WCAG Success Criteria [WCAG 2.0 (A)]

* 4.1.2: MUST: Name, Role, Value

## How to Fix the Problem

Ensure the value inside each attribute is spelled correctly and corresponds to
a valid value.

For example, `aria-hidden="true"` would pass, but
`aria-hidden="rtue"` would fail, as would
`aria-hidden="pizza"`.

As another example, the `checkbox` role only has three possible
values: `true`, `false`, or `mixed`. Using
any value other than one of those three will prevent the checkbox from being
functional.

### Note:

Particular caution must be used when specifying values for ARIA attributes,
as factors such as the distinction between states and properties, role
inheritance, undefined and default values can be confusing.

### Value Types

It is useful to take into consideration the following allowed state or
property value types:

true/false
:   Value representing either true or false, with a default "false"
    value.

tristate
:   Value representing true or false, with an intermediate "mixed"
    value. Default value is "false" unless otherwise specified.


true/false/undefined
:   Value representing true or false, with a default "undefined" value
    indicating the state or property is not relevant.

ID reference
:   Reference to the ID of another
    [element](https://www.w3.org/TR/wai-aria-1.1/#dfn-element)
    in the same document

ID reference list
:   A list of one or more ID references.

integer
:   A numerical value without a fractional component.

number
:   Any real numerical value.

string
:   Unconstrained value type.

token
:   One of a limited set of allowed values.

token list
:   A list of one or more tokens.

**Undefined Value**: The "undefined" value, when
allowed on a state or property, is an explicit indication that the state or
property is not set. The value is used on states and properties that support
tokens, and the "undefined" value is a string that is one of the
allowed tokens. It is also used on some states and properties that accept
true/false values, when "undefined" has a different meaning than
"false".

These are generic types for states and properties, but do not define specific
representation. See
[State and Property Attribute Processing](https://www.w3.org/TR/wai-aria-1.1/#state_property_processing)
for details on how these values are expressed and handled in host languages.

**Default Value and Implicit Value for Role**: Many states and
properties have default values. Occasionally, the default value when used on a
given role should be different from the usual default. Roles that require a
state or property to have a non-standard default value indicate this in the
"Implicit Value for Role". This is expressed in the form "state or
property name is new default value". Roles that define this have the new
default value for the state or property if the author does not provide an
explicit value.

**State and Property Values Reference**: For complete information
about allowed values, refer to the table of characteristics for each
individual attribute at
[W3C WAI-ARIA 1.1 Supported States and Properties](http://www.w3.org/TR/wai-aria-1.1/#state_prop_values).

## Why it Matters

ARIA attributes (i.e. starting with `aria-`) must contain valid
values. These values must be spelled correctly and correspond to values that
make sense for a particular attribute to perform the intended accessibility
function.

Many ARIA attributes accept a specific set of values. Allowed values,
acceptable "undefined" values, and acceptable "default"
values are required. Failure to comply with allowed values results in content
that is not accessible to assistive technology users.

## Rule Description

ARIA attributes starting with `aria-` must contain valid values.
These values must be spelled correctly and correspond to values that make
sense for a particular attribute in order to perform the intended
accessibility function.

## The Algorithm (in simple terms)

Checks all elements that contain WAI-ARIA attributes to ensure that the values
of the attributes are valid.

## Resources

[Deque University![Deque University logo](https://dequeuniversity.com/assets/js/sandbox/images/deque_university_wordmark.png)](/)

### Deque University Course Pages (subscription required)

* Landmark Roles
* Widget Roles
* Pseudo HTML Roles
* The Document Role
* The Application Role
* The Presentation Role
* The Math Role
* The Definition Role
* The Note Role
* The Directory Role
* Abstract Roles

[Deque University
![Github logo: Contribute to axe-core on GitHub](https://dequeuniversity.com/assets/js/sandbox/images/GitHub-Logo.png)](https://github.com/dequelabs/axe-core)

### [Contribute to axe-core on GitHub](https://github.com/dequelabs/axe-core)

### Other Resources

You may also want to check out these other resources.

* Accessible Rich Internet Applications (WAI-ARIA) 1.1 - Supported States and Properties

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