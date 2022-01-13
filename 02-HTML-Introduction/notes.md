# Introduction to HTML

## Table of Contents

| No. | Topic                                                         |
| :-: | ------------------------------------------------------------- |
|  1  | [Semantics Overview](#semantic-overviews)                     |
|  2  | [Identifying Divisions & Spans](#identifying-divisions-spans) |
|  3  | [Using Text-Based Elements](#using-text-based-elements)       |
|  4  | [Building Structure](#building-structure)                     |
|  5  | [Creating Hyperlinks](#creating-hyperlinks)                   |
|  6  | [Summary](#summary)                                           |

With our introduction to HTML and CSS complete, it’s time to dig a little deeper
into HTML and examine the different components that make up this language.

In order to start building websites, we need to learn a little about which HTML
elements are best used to display different types of content. It’s also
important to understand how elements are visually displayed on a web page, as
well as what different elements mean semantically.

Using the proper element for the job goes a long way, and we’ll want to make
well-informed decisions in the process.

## Semantics Overview

So what exactly are semantics? Semantics within HTML is the practice of giving
content on the page meaning and structure by using the proper element. Semantic
code describes the value of content on a page, regardless of the style or
appearance of that content. There are several benefits to using semantic
elements, including enabling computers, screen readers, search engines, and
other devices to adequately read and understand the content on a web page.
Additionally, semantic HTML is easier to manage and work with, as it shows
clearly what each piece of content is about.

Moving forward, as new elements are introduced, we’ll talk about what those
elements actually mean and the type of content they best represent. Before we do
that, though, let’s look at two elements—`<div>`s and `<span>`s—that actually
don’t hold any semantic value. They exist for styling purposes only.

## Identifying Divisions & Spans

Divisions, or `<div>`s, and `<span>`s are HTML elements that act as containers
solely for styling purposes. As generic containers, they do not come with any
overarching meaning or semantic value. Paragraphs are semantic in that content
wrapped within a `<p>` element is known and understood as a paragraph. `<div>`s
and `<span>`s do not hold any such meaning and are simply containers.

### Block vs. Inline Elements

Most elements are either block- or inline-level elements. What’s the difference?

Block-level elements begin on a new line, stacking one on top of the other, and
occupy any available width. Block-level elements may be nested inside one
another and may wrap inline-level elements. We’ll most commonly see block-level
elements used for larger pieces of content, such as paragraphs.

Inline-level elements do not begin on a new line. They fall into the normal flow
of a document, lining up one after the other, and only maintain the width of
their content. Inline-level elements may be nested inside one another; however,
they cannot wrap block-level elements. We’ll usually see inline-level elements
with smaller pieces of content, such as a few words.

Both `<div>`s and `<span>`s, however, are extremely valuable when building a
website in that they give us the ability to apply targeted styles to a contained
set of content.

A `<div>` is a block-level element that is commonly used to identify large
groupings of content, and which helps to build a web page’s layout and design. A
`<span>`, on the other hand, is an inline-level element commonly used to
identify smaller groupings of text within a block-level element.

We’ll commonly see `<div>`s and `<span>`s with class or id attributes for
styling purposes. Choosing a class or id attribute value, or name, requires a
bit of care. We want to choose a value that refers to the content of an element,
not necessarily the appearance of an element.

For example, if we have a `<div>` with an orange background that contains social
media links, our first thought might be to give the `<div>` a class value of
orange. What happens if that orange background is later changed to blue? Having
a class value of orange no longer makes sense. A more sensible choice for a
class value would be social, as it pertains to the contents of the `<div>`, not
the style.

```html
<!-- Division -->
<div class="social">
	<p>I may be found on...</p>
	<p>Additionally, I have a profile on...</p>
</div>

<!-- Span -->
<p>
	Soon we'll be <span class="tooltip">writing HTML</span> with the best of
	them.
</p>
```

### Comments within HTML & CSS

The previous code includes exclamation points within the HTML, and that’s all
right. Those are not elements, those are comments.

HTML and CSS give us the ability to leave comments within our code, and any
content wrapped within a comment will not be displayed on the web page. Comments
help keep our files organized, allow us to set reminders, and provide a way for
us to more effectively manage our code. Comments become especially useful when
there are multiple people working on the same files.

HTML comments start with `<!--` and end with `-->`. CSS comments start with `/*`
and end with `*/`.

## Using Text-Based Elements

Many different forms of media and content exist online; however, text is
predominant. Accordingly, there are a number of different elements for
displaying text on a web page. For now we’ll focus on the more popular elements,
including headings, paragraphs, bold text to show importance, and italics for
emphasis. Later, within Lesson 6, “Working with Typography,” we’ll take a closer
look at how to style text.

### Headings

Headings are block-level elements, and they come in six different rankings,
`<h1>` through `<h6>`. Headings help to quickly break up content and establish
hierarchy, and they are key identifiers for users reading a page. They also help
search engines to index and determine the content on a page.

Headings should be used in an order that is relevant to the content of a page.
The primary heading of a page or section should be marked up with an `<h1>`
element, and subsequent headings should use `<h2>`, `<h3>`, `<h4>`, `<h5>`, and
`<h6>` elements as necessary.

Each heading level should be used where it is semantically valued, and should
not be used to make text bold or big—there are other, better ways to do that.

Here is an example of HTML for all the different heading levels and the
resulting display on a web page.

```html
<h1>Heading Level 1</h1>
<h2>Heading Level 2</h2>
<h3>Heading Level 3</h3>
<h4>Heading Level 4</h4>
<h5>Heading Level 5</h5>
<h6>Heading Level 6</h6>
```

### Paragraphs

Headings are often followed by supporting paragraphs. Paragraphs are defined
using the <p> block-level element. Paragraphs can appear one after the other,
adding information to a page as desired. Here is an example of how to set up
paragraphs.

```html
<p>
	Steve Jobs was a co-founder and longtime chief executive officer at Apple.
	On June 12, 2005, Steve gave the commencement address at Stanford
	University.
</p>

<p>
	In his address Steve urged graduates to follow their dreams and, despite any
	setbacks, to never give up&ndash;advice which he sincerely took to heart.
</p>
```

### Bold Text with Strong

To make text bold and place a strong importance on it, we’ll use the `<strong>`
inline-level element. There are two elements that will bold text for us: the
`<strong>` and `<b>` elements. It is important to understand the semantic
difference between the two.

The `<strong>` element is semantically used to give strong importance to text,
and is thus the most popular option for bolding text. The `<b>` element, on the
other hand, semantically means to stylistically offset text, which isn’t always
the best choice for text deserving prominent attention. We have to gauge the
significance of the text we wish to set as bold and to choose an element
accordingly.

Here are the two HTML options for creating bold text in action:

```html
<!-- Strong importance -->
<p><strong>Caution:</strong> Falling rocks.</p>

<!-- Stylistically offset -->
<p>This recipe calls for <b>bacon</b> and <b>baconnaise</b>.</p>
```

### Italicize Text with Emphasis

To italicize text, thereby placing emphasis on it, we’ll use the `<em>`
inline-level element. As with the elements for bold text, there are two
different elements that will italicize text, each with a slightly different
semantic meaning.

The `<em>` element is used semantically to place a stressed emphasis on text; it
is thus the most popular option for italicizing text. The other option, the
`<i>` element, is used semantically to convey text in an alternative voice or
tone, almost as if it were placed in quotation marks. Again, we will need to
gauge the significance of the text we want to italicize and choose an element
accordingly.

Here’s the HTML code for italicizing:

```html
<!-- Stressed emphasis -->
<p>I <em>love</em> Chicago!</p>

<!-- Alternative voice or tone -->
<p>The name <i>Shay</i> means a gift.</p>
```

These text-level elements are quite handy for bringing our content to life. In
addition to these, there are structurally based elements. Whereas text-based
elements identify headings and paragraphs, structural elements identify
groupings of content such as headers, articles, footers, and so forth. Let’s
take a look.

## Building Structure

For the longest time the structure of a web page was built using divisions. The
problem was that divisions provide no semantic value, and it was fairly
difficult to determine the intention of these divisions. Fortunately HTML5
introduced new structurally based elements, including the `<header>,` `<nav>,`
`<article>,` `<section>,` `<aside>,` and `<footer>` elements.

All of these new elements are intended to give meaning to the organization of
our pages and improve our structural semantics. They are all block-level
elements and do not have any implied position or style. Additionally, all of
these elements may be used multiple times per page, so long as each use reflects
the proper semantic meaning.

Let’s roll up our sleeves and take a closer look.

<img src="./assets/building-structure.png" style="background-color: white;" />

### Header

The `<header>` element, like it sounds, is used to identify the top of a page,
article, section, or other segment of a page. In general, the `<header>` element
may include a heading, introductory text, and even navigation.

```html
<header>...</header>
```

### Navigation

The `<nav>` element identifies a section of major navigational links on a page.
The `<nav>` element should be reserved for primary navigation sections only,
such as global navigation, a table of contents, previous/next links, or other
noteworthy groups of navigational links.

Most commonly, links included within the `<nav>` element will link to other
pages within the same website or to parts of the same web page. Miscellaneous
one-off links should not be wrapped within the `<nav>` element; they should use
the anchor element, <a>, and the anchor element alone.

```html
<nav>...</nav>
```

### Article

The `<article>` element is used to identify a section of independent,
self-contained content that may be independently distributed or reused. We’ll
often use the `<article>` element to mark up blog posts, newspaper articles,
user-submitted content, and the like.

When deciding whether to use the `<article>` element, we must determine if the
content within the element could be replicated elsewhere without any confusion.
If the content within the `<article>` element were removed from the context of
the page and placed, for example, within an email or printed work, that content
should still make sense.

```html
<article>...</article>
```

### Section

The `<section>` element is used to identify a thematic grouping of content,
which generally, but not always, includes a heading. The grouping of content
within the `<section>` element may be generic in nature, but it’s useful to
identify all of the content as related.

The `<section>` element is commonly used to break up and provide hierarchy to a
page.

```html
<section>...</section>
```

### Deciding Between `<article>`, `<section>`, or `<div>` Elements

At times it becomes fairly difficult to decide which element—`<article>`,
`<section>`, or `<div>`—is the best element for the job based on its semantic
meaning. The trick here, as with every semantic decision, is to look at the
content.

Both the `<article>` and `<section>` elements contribute to a document’s
structure and help to outline a document. If the content is being grouped solely
for styling purposes and doesn’t provide value to the outline of a document, use
the `<div>` element.

If the content adds to the document outline and it can be independently
redistributed or syndicated, use the `<article>` element.

If the content adds to the document outline and represents a thematic group of
content, use the `<section>` element.

### Aside

The `<aside>` element holds content, such as sidebars, inserts, or brief
explanations, that is tangentially related to the content surrounding it. When
used within an `<article>` element, for example, the `<aside>` element may
identify content related to the author of the article.

We may instinctively think of an `<aside>` element as an element that appears
off to the left or right side of a page. We have to remember, though, that all
of the structural elements, including the `<aside>` element, are block-level
elements and as such will appear on a new line, occupying the full available
width of the page or of the element they are nested within, also known as their
parent element.

```html
<aside>...</aside>
```

We’ll discuss how to change the position of an element, perhaps placing it to
the right or left of a group of content, in Lesson 5, “Positioning Content.”

### Footer

The `<footer>` element identifies the closing or end of a page, article,
section, or other segment of a page. Generally the `<footer>` element is found
at the bottom of its parent. Content within the `<footer>` element should be
relative information and should not diverge from the document or section it is
included within.

```html
<footer>...</footer>
```

With structural elements and text-based elements under our belts, our HTML
knowledge is really starting to come together. Now is a good time to revisit our
Styles Conference website and see if we can provide it with a little better
structure.

## Creating Hyperlinks

Along with text, one of the core components of the Internet is the hyperlink,
which provides the ability to link from one web page or resource to another.
Hyperlinks are established using the anchor, `<a>`, inline-level element. In
order to create a link from one page (or resource) to another, the href
attribute, known as a hyperlink reference, is required. The href attribute value
identifies the destination of the link.

For example, clicking the text “Shay,” which is wrapped inside the anchor
element with the href attribute value of http://shayhowe.com, will take users to
my website.

```html
<a href="http://shayhowe.com">Shay</a>
```

### Relative & Absolute Paths

The two most common types of links are links to other pages of the same website
and links to other websites. These links are identified by their href attribute
values, also known as their paths.

Links pointing to other pages of the same website will have a relative path,
which does not include the domain (.com, .org, .edu, etc.) in the href attribute
value. Because the link is pointing to another page on the same website, the
href attribute value needs to include only the filename of the page being linked
to: about.html, for example.

Should the page being linked to reside within a different directory, or folder,
the href attribute value needs to reflect this as well. Say the about.html page
resides within the pages directory; the relative path would then be
pages/about.html.

Linking to other websites outside of the current one requires an absolute path,
where the href attribute value must include the full domain. A link to Google
would need the href attribute value of http://google.com, starting with http and
including the domain, .com in this case.

Here clicking on the text “About” will open the about.html page inside our
browser. Clicking the text “Google,” on the other hand, will open
http://google.com/ within our browser.

```html
<!-- Relative Path -->
<a href="about.html">About</a>

<!-- Absolute Path -->
<a href="http://www.google.com/">Google</a>
```

### Linking to an Email Address

Occasionally we may want to create a hyperlink to our email address—for example,
hyperlink text that says “Email Me,” which when clicked opens a user’s default
email client and pre-populates part of an email. At a minimum the email address
to which the email is being sent is populated; other information such as a
subject line and body text may also be included.

To create an email link, the href attribute value needs to start with mailto:
followed by the email address to which the email should be sent. To create an
email link to shay@awesome.com, for example, the href attribute value would be
mailto:shay@awesome.com.

Additionally, subject, body text, and other information for the email may be
populated. To add a subject line, we’ll include the subject= parameter after the
email address. The first parameter following the email address must begin with a
question mark, ?, to bind it to the hyperlink path. Multiple words within a
subject line require that spaces be encoded using %20.

Adding body text works in the same way as adding the subject, this time using
the body= parameter in the href attribute value. Because we are binding one
parameter to another we need to use the ampersand, &, to separate the two. As
with the subject, spaces must be encoded using %20, and line breaks must be
encoded using %0A.

Altogether, a link to shay@awesome.com with the subject of “Reaching Out” and
body text of “How are you” would require an href attribute value of
mailto:shay@awesome.com?subject=Reaching%20Out&body=How%20are%20you.

Here’s the full breakdown:

```html
<a href="mailto:shay@awesome.com?subject=Reaching%20Out&body=How%20are%20you"
	>Email Me</a
>
```

### Opening Links in a New Window

One feature available with hyperlinks is the ability to determine where a link
opens when clicked. Typically, links open in the same window from which they are
clicked; however, links may also be opened in new windows.

To trigger the action of opening a link in a new window, use the target
attribute with a value of \_blank. The target attribute determines exactly where
the link will be displayed, and the \_blank value specifies a new window.

To open http://shayhowe.com/ in a new window, the code would look like this:

```html
<a href="http://shayhowe.com/" target="_blank">Shay Howe</a>
```

### Linking to Parts of the Same Page

Periodically we’ll see hyperlinks that link to part of the same page the link
appears on. A common example of these same-page links are “Back to top” links
that return a user to the top of a page.

We can create an on-page link by first setting an id attribute on the element we
wish to link to, then using the value of that id attribute within an anchor
element’s href attribute.

Using the “Back to top” link as an example, we can place an id attribute value
of top on the <body> element. Now we can create an anchor element with an href
attribute value of #top, pound sign and all, to link to the beginning of the

<body> element.

Our code for this same-page link would look like the following:

```html
<body id="top">
	...
	<a href="#top">Back to top</a>
	...
</body>
```

Hyperlinks are incredibly useful and have revolutionized how we use the
Internet. So far we’ve covered how to link to other pages or websites, as well
as how to create email links and links to parts of the same page. Before we go
any further, let’s create some links of our own.

## Summary

Semantics, as discussed within this lesson, are essential for providing our HTML
with structure and meaning. Moving forward we’ll periodically introduce new
elements, all of which will come with their own semantic meaning. It is the
meaning of all of these elements that will provide our content with the most
value.

Once again, in this lesson we covered the following:

What semantics are and why they are important

`<div>`s and `<spans>`s, and the difference between block- and inline-level
elements Which text-based elements best represent the content of a page The
HTML5 structural elements and how to define the structure and organization of
our content and page How to use hyperlinks to navigate between web pages or
websites Hopefully you’re starting to feel pretty good about HTML. There is
still quite a bit to learn, but the foundation is in place. Next up, we’ll take
a deeper look into CSS.
