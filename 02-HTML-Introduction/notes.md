# Introduction to HTML

## Table of Contents

| No. | Topic                                                 |
| :-: | ----------------------------------------------------- |
|  1  | [Block vs Inline Elements](#block-vs-inline-elements) |
|  2  | [Text-Based Elements](#text-based-elements)           |
|  3  | [Divisions and Spans](#divisions-and-spans)           |
|  4  | [Building Structure](#building-structure)             |
|  5  | [Creating Hyperlinks](#creating-hyperlinks)           |
|  6  | [Comments Within HTML](#comments-within-html)         |

<br/> <br/>

## Block vs. Inline Elements

Block-level elements begin on a new line, stacking one on top of the other, and occupy any available width.

Inline-level elements do not begin on a new line. They fall into the normal flow of a document, lining up one after the other, and only maintain the width of their content.

<br/> <br/>

## Text-Based Elements

### Headings

Headings are block-level elements, and they come in six different rankings (in terms of importance), `<h1>` through `<h6>`.

```html
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```

### Paragraphs

Paragraphs are defined using the `<p>` block-level element.

```html
<p>
  Steve Jobs was a co-founder and longtime chief executive officer at Apple. On
  June 12, 2005, Steve gave the commencement address at Stanford University.
</p>

<p>
  In his address Steve urged graduates to follow their dreams and, despite any
  setbacks, to never give up&ndash;advice which he sincerely took to heart.
</p>
```

### Bold Text

There are two elements that will bold text for us:

- `<strong>` - [semantically](../12-Semantic/notes.md) used to give strong importance to text
- `<b>` - mainly for styling purpose

```html
<!-- Strong importance -->
<p><strong>Caution:</strong> Falling rocks.</p>

<!-- Styling purpose -->
<p>This recipe calls for <b>bacon</b> and <b>baconnaise</b>.</p>
```

### Italicize Text

There are also two different elements that will italicize text:

- `<em>` - stressed emphasis on text;
- `<i>` - convey text in an alternative voice or tone

```html
<!-- Stressed emphasis -->
<p>I <em>love</em> Chicago!</p>

<!-- Alternative voice or tone -->
<p>The name <i>Shay</i> means a gift.</p>
```

<br/> <br/>

## Divisions and Spans

Divisions, or `<div>`, and `<span>` act as containers solely for styling purposes. They are also known as non-semantic elements. Semantics within HTML is the practice of giving content on the page meaning and structure by using the proper element. Read more about semantics [here](../12-Semantic/notes.md).

A `<div>` is a block-level element that is commonly used to identify large groupings of content, and which helps to build a web page’s layout and design.

A`<span>`, on the other hand, is an inline-level element commonly used to identify smaller groupings of text within a block-level element.

```html
<!-- Division -->
<div class="social">
  <p>I may be found on...</p>
  <p>Additionally, I have a profile on...</p>
</div>

<!-- Span -->
<p>
  Soon we'll be <span class="tooltip">writing HTML</span> with the best of them.
</p>
```

## Building Structure

HTML5 introduced new structurally based elements, including the `<header>,` `<nav>`, `<article>`, `<section>`, `<aside>`, and `<footer>` elements to give meaning to the organization of
our pages and improve our structural semantics.

<img src="./assets/building-structure.png" style="background-color: white; width:500px" />

### Header

The `<header>` element is used to identify the top of a page, article, section, or other segment of a page. In general, the `<header>` element may include a heading, introductory text, and even navigation.

```html
<header>...</header>
```

### Navigation

The `<nav>` element identifies a section of major navigational links on a page.

```html
<nav>...</nav>
```

### Article

The `<article>` element is used to identify a section of independent, self-contained content that may be independently distributed or reused. We’ll often use the `<article>` element to mark up blog posts, newspaper articles, user-submitted content, and the like.

```html
<article>...</article>
```

### Section

The `<section>` element is used to identify a thematic grouping of content and is commonly used to break up and provide hierarchy to a page.

```html
<section>...</section>
```

**Deciding Between `<article>`, `<section>`, or `<div>` Elements**

- If the content is being grouped solely for styling purposes and doesn’t provide value to the outline of a document, use the `<div>` element.

- If the content adds to the document outline and it can be independently redistributed or syndicated, use the `<article>` element.

- If the content adds to the document outline and represents a thematic group of content, use the `<section>` element.

### Aside

The `<aside>` element holds content, such as sidebars, inserts, or brief explanations, that is related to the content surrounding it.

```html
<aside>...</aside>
```

### Footer

The `<footer>` element identifies the closing or end of a page, article, section, or other segment of a page.

```html
<footer>...</footer>
```

## Creating Hyperlinks

Hyperlinks are established using the anchor, `<a>`, inline-level element. In order to create a link from one page (or resource) to another, the `href` attribute, known as a hyperlink reference, is required.

For example, clicking the text “Click Me” which is wrapped inside the anchor element with the `href` attribute value of http://google.com, will take users to google.

```html
<a href="http://google.com">Click Me</a>
```

### Relative & Absolute Paths

- Relative path - links pointing to other pages of the same website; the `href` attribute value needs to include only the directory and filename of the page being linked to.

- Absolute path - linking to other websites outside of the current one; the `href` attribute value must include the full domain.

```html
<!-- Relative Path -->
<a href="about.html">About</a>

<!-- Absolute Path -->
<a href="http://www.google.com/">Google</a>
```

### Linking to an Email Address

To create an email link, the `href` attribute value needs to start with `mailto:` followed by the email address.

```html
<a href="mailto:hey@hackercollective.com">Email Us</a>
```

### Opening Links in a New Window

To open a link in a new window, use the `target` attribute with a value of `_blank`.

```html
<a href="https://www.hackercollective.co/" target="_blank">
  The Hacker Collective
</a>
```

### Linking to Parts of the Same Page

Common example of these same-page links are “Back to top” links that return a user to the top of a page. This is achieved by setting the `id` attribute on the element we wish to link to, then using the value of that `id` attribute within an anchor element’s `href` attribute.

```html
<body id="top">
  ...
  <a href="#top">Back to top</a>
  ...
</body>
```

<br/><br/>

## Comments within HTML

HTML comments start with `<!--` and end with `-->`. CSS comments start with `/*`
and end with `*/`.

```html
<!-- this is a line of comment -->
<p>Here's a piece of content</p>
```
