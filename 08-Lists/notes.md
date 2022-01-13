# HTML Lists

## Table of Contents

| No. | Topic                                 |
| :-: | ------------------------------------- |
|  1  | [Unordered List](#unordered-list)     |
|  2  | [Ordered List](#ordered-list)         |
|  3  | [Description List](#description-list) |

<br /><br />

Lists are used to present list of information in well formed and semantic way.
There are 3 types of list:

# Unordered List

Use to create a list of related items, in no particular order.

```html
<ul>
	<li>Banana</li>
	<li>Orange</li>
	<li>Watermelon</li>
</ul>
```

<br /><br />

# Ordered List

Use to create a list of related items, in a specific order.

```html
<p>How to make orange juice</p>
<ol>
	<li>Prepare a handful of oranges</li>
	<li>Wash the oranges</li>
	<li>Peel the oranges</li>
	<li>Put the peeled oranges into juicer and start juicing</li>
</ol>
```

<br /><br />

# Description List

Use to create a list of terms and their descriptions. Description list requires
two block-level elements: the description term element, `<dt>`, and the
description element, `<dd>`.

```html
<dl>
	<dt>Banana</dt>
	<dd>A curved, yellow fruit.</dd>
	<dt>Orange</dt>
	<dd>A round, orange fruit.</dd>
</dl>
```
