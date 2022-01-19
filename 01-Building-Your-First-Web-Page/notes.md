# Building Your First Web Page

## Table of Contents

| No. | Topic                                                               |
| :-: | ------------------------------------------------------------------- |
|  1  | [What are HTML and CSS?](#what-are-html-and-css)                    |
|  2  | [Understanding Common HTML Terms](#understanding-common-html-terms) |
|  3  | [Understanding Common CSS Terms](#understanding-common-css-terms)   |
|  4  | [Working with CSS Selectors](#understanding-common-css-terms)       |
|  4  | [Referencing CSS](#referencing-css)                                 |

## What are HTML and CSS?

HTML stands for **HyperText Markup Language**, gives content structure and meaning by defining that content as, for example, headings, paragraphs, or images. CSS, or **Cascading Style Sheets**, is a presentation language created to style the appearance of content using, for example, fonts or colors.

Putting into simpler terms, HTML represents the content/structure of your webpage, and CSS represents the appearance of it.

## Understanding Common HTML Terms

You will encounter many new terms as you get started and these are the three common HTML terms you should begin with - elements, tags, and attributes.

### HTML Elements

Elements helps define the structure and content of objects within
a page. Some of the more frequently used elements include multiple levels of
headings (identified as `<h1>` through `<h6>` elements) and paragraphs
(identified as the `<p>` element); the list goes on to include the `<a>`,
`<div>`, `<span>`, `<strong>`, and `<em>` elements, and many more.

Elements are identified by the use of less-than and greater-than angle brackets,
`< >`, surrounding the element name. Thus, an element will look like the
following:

```
<a>
```

### HTML Tags

The use of `<` and `>` angle brackets surrounding an element creates what is known as a tag. Tags most commonly occur in pairs of opening and closing tags.

An opening tag marks the beginning of an element. For example, `<div>`.

A closing tag marks the end of an element. It consist of a `/` before the element name inside the tag, for example, `</div>`.

Anything falls between the two tags will be the content:

```html
<div>Content goes in here</div>
```

> There are some elements that don't come in a pair of opening and closing tags, and we refer them as `self-closing tags`. Image element `<img>` is one of the example of a self-closing tag. Self-closing tags only have attributes and no content inside. We will get into more about this in the later section.

### HTML Attributes

Attributes are properties used to provide additional information about an
element and are defined within the opening tag, after an element’s name.

Generally attributes include a name and a value. The format for these attributes
consists of the attribute name followed by an equals sign and then a quoted
attribute value. For example, an anchor (link) `<a>` element including an href attribute would look like the following:

```html
<a href="https://hackercollective.co/">Click Me</a>
```

The code above will display the content “Click Me” on the web page and will
take users to `https://hackercollective.co/` upon clicking the “Click Me”
text. The anchor element is declared with the opening `<a>` and closing `</a>`
tags encompassing the content, and the hyperlink reference attribute and value are
declared with `href="https://hackercollective.co/"` in the opening tag.

### HTML Document

HTML documents are plain text documents saved with an .html file extension.

> To begin writing HTML, you first need a text editor and we strongly recommend VS Code. Follow this [link](https://pathforge.co/adventures/1/Complete-Software-Development-Programme/journeys/2/quests/19) to get started (if you haven't got VS Code installed).

All HTML documents have a required structure that includes the following
declaration and elements: `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.

The document type declaration, or `<!DOCTYPE html>`, informs web browsers which
version of HTML is being used and is placed at the very beginning of the HTML
document. Because we’ll be using the latest version of HTML, our document type
declaration is simply `<!DOCTYPE html>`. Following the document type
declaration, the `<html>` element signifies the beginning of the document.

Inside the `<html>` element, the `<head>` element identifies the top of the
document, including any metadata (accompanying information about the page). The
content inside the `<head>` element is not displayed on the web page itself.
Instead, it may include the document title (which is displayed on the title bar
in the browser window), links to any external files, or any other beneficial
metadata.

All of the visible content within the web page will fall within the `<body>`
element. A breakdown of a typical HTML document structure looks like this:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <title>Hello World</title>
  </head>
  <body>
    <h1>Hello World</h1>
    <p>This is a web page.</p>
  </body>
</html>
```

The code above shows the document beginning with the document type declaration `<!DOCTYPE html>`, followed directly by the `<html>` element. Inside the `<html>` element come the `<head>` and `<body>` elements. The `<head>` element includes the character encoding of the page via the `<meta charset="utf-8">` tag and the title of the document via the `<title>` element. The `<body>` element includes a heading via the `<h1>` element and a paragraph via the `<p>` element. Because both the heading and paragraph are nested within the `<body>` element, they are visible on the web page.

When an element is placed inside of another element, also known as nested, it is a good idea to indent that element to keep the document structure well organized and legible In the previous code, both the `<head>` and `<body>` elements were nested — and indented — inside the `<html>` element. The pattern of indenting for elements continues as new elements are added inside the `<head>` and `<body>` elements.

> Install and enable `Prettier` extension in your VS code to ease your code formatting.

### HTML Self-Closing Elements

If you observe from the previous code example, the `<meta>` element is a self-closing tag. Some elements simply receive their content or behavior from attributes within a single tag, and contains no content. Other common self-closing elements include:

```html
<br />
<hr />
<img />
<meta />
<input />
<link />
...
```

Now that you know what HTML elements, tags, attributes, and documents are, let’s take a
look at putting together [our first web page](./practice-1/steps.md). If anything looks new here, no worries — we’ll decipher it as we go.

## Understanding Common CSS Terms

Let's start looking into a few common CSS terms you will want to familiarize yourself with. These terms include selectors, properties, and values. As with the HTML terminology, the more you work with CSS, the more these terms will become second nature.

### CSS Selectors

A selector designates exactly which element or elements within our HTML to target and apply styles to.

Selectors generally target an attribute value, such as an `id` or `class` value, or
target the type of element, such as `<h1>` or `<p>`.

Within CSS, selectors are followed with curly brackets, `{}`, which encompass
the styles to be applied to the selected element. The selector here is targeting
all `<p>` elements.

```css
p {
  ...;
}
```

### CSS Properties

Once an element is selected, a property determines the styles that will be
applied to that element. Property names fall after a selector, within the curly
brackets, `{}`, and immediately preceding a colon, `:`. There are numerous
properties we can use, such as `background`, `color`, `font-size`, `height`, and
`width`, and new properties are often added. In the following code, we are
defining the color and font-size properties to be applied to all `<p>` elements.

```css
p {
  color: ...;
  font-size: ...;
}
```

### CSS Values

So far we’ve selected an element with a selector and determined what style we’d
like to apply with a property. Now we can determine the behavior of that
property with a value. Values can be identified as the text between the colon,
`:`, and semicolon, `;`. Here we are selecting all `<p>` elements and setting
the value of the color property to be orange and the value of the `font-size`
property to be `16 pixels`.'

```css
p {
  color: orange;
  font-size: 16px;
}
```

## Working with CSS Selectors

Selectors, as previously mentioned, indicate which HTML elements are being
styled. It is important to fully understand how to use selectors and how they
can be leveraged. The first step is to become familiar with the different types
of selectors. We’ll start with the most common selectors: type, class, and ID
selectors.

#### Type Selectors

Type selectors target elements by their element type. For example, should we
wish to target all division elements, <div>, we would use a type selector of
div. The following code shows a type selector for division elements as well as
the corresponding HTML it selects.

##### HTML

```html
<div>...</div>
<div>...</div>
```

##### CSS

```css
div {
  ...;
}
```

#### Class Selectors

Class selectors allow us to select an element based on the element’s class
attribute value. Class selectors are a little more specific than type selectors,
as they select a particular group of elements rather than all elements of one
type.

Class selectors allow us to apply the same styles to different elements at once
by using the same class attribute value across multiple elements.

Within CSS, classes are denoted by a leading period, ., followed by the class
attribute value. Here the class selector will select any element containing the
class attribute value of awesome, including both division and paragraph
elements.

##### HTML

```html
<div class="awesome">...</div>
<p class="awesome">...</p>
```

##### CSS

```css
.awesome {
  ...;
}
```

#### ID Selectors

ID selectors are even more precise than class selectors, as they target only one
unique element at a time. Just as class selectors use an element’s class
attribute value as the selector, ID selectors use an element’s id attribute
value as a selector.

Regardless of which type of element they appear on, id attribute values can only
be used once per page. If used they should be reserved for significant elements.

Within CSS, ID selectors are denoted by a leading hash sign, #, followed by the
id attribute value. Here the ID selector will only select the element containing
the id attribute value of shayhowe.

##### HTML

```html
<div id="shayhowe">...</div>
```

##### CSS

```css
#shayhowe {
  ...;
}
```

## Referencing CSS

In order to get our CSS talking to our HTML, we need to reference our CSS file
within our HTML. The best practice for referencing our CSS is to include all of
our styles in a single external style sheet, which is referenced from within the

<head> element of our HTML document. Using a single external style sheet allows
us to use the same styles across an entire website and quickly make changes
sitewide.

To create our external CSS style sheet, we’ll want to use our text editor of
choice again to create a new plain text file with a .css file extension. Our CSS
file should be saved within the same folder, or a subfolder, where our HTML file
is located.

Within the <head> element of the HTML document, the <link> element is used to
define the relationship between the HTML file and the CSS file. Because we are
linking to CSS, we use the rel attribute with a value of stylesheet to specify
their relationship. Furthermore, the href (or hyperlink reference) attribute is
used to identify the location, or path, of the CSS file.

Consider the following example of an HTML document <head> element that
references a single external style sheet.

```html
<head>
  <link rel="stylesheet" href="main.css" />
</head>
```

In order for the CSS to render correctly, the path of the href attribute value
must directly correlate to where our CSS file is saved. In the preceding
example, the main.css file is stored within the same location as the HTML file,
also known as the root directory.

If our CSS file is within a subdirectory or subfolder, the href attribute value
needs to correlate to this path accordingly. For example, if our main.css file
were stored within a subdirectory named stylesheets, the href attribute value
would be stylesheets/main.css, using a forward slash to indicate moving into a
subdirectory.

At this point our pages are starting to come to life, slowly but surely.
