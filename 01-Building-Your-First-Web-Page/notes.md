# Building Your First Web Page

## Table of Contents

| No. | Topic                                                               |
| :-: | ------------------------------------------------------------------- |
|  1  | [What are HTML and CSS?](#what-are-html-and-css)                    |
|  2  | [Understanding Common HTML Terms](#understanding-common-html-terms) |
|  3  | [Understanding Common CSS Terms](#understanding-common-css-terms)   |
|  4  | [Working with CSS Selectors](#working-with-css-selectors)           |
|  4  | [Referencing CSS](#referencing-css)                                 |

<br/> <br/>

## What are HTML and CSS?

HTML stands for **HyperText Markup Language**, gives content structure and meaning by defining that content as, for example, headings, paragraphs, or images in a webpage.

CSS, or **Cascading Style Sheets**, is a presentation language created to style the appearance of content using, for example, fonts or colors.

## Understanding Common HTML Terms

### HTML Elements

Elements helps define the structure and content of objects within a page. Some of the more frequently used elements include multiple levels of headings (identified as `<h1>` through `<h6>` elements) and paragraphs (identified as the `<p>` element); the list goes on to include the `<a>`, `<div>`,`<span>`, and many more.

> Check out this [link](https://developer.mozilla.org/en-US/docs/Web/HTML/Element) for the list of HTML elements.

### HTML Tags

Tags most commonly occur in pairs of opening and closing tags. An opening tag marks the beginning of an element. For example, `<div>`.

A closing tag marks the end of an element. It consist of a `/` before the element name inside the tag, for example, `</div>`.

Anything falls between the two tags will be the content:

```html
<div>Content goes in here</div>
```

> There are some elements that don't come in a pair of opening and closing tags, and we refer them as `self-closing tags`. Image element `<img>` is one of the example of a self-closing tag. Self-closing tags only have attributes and no content inside. We will get into more about this in the later section.

### HTML Attributes

Attributes are properties used to provide additional information about an element and are defined within the opening tag.

For example, an anchor (link) `<a>` element including an href attribute would look like the following:

```html
<a href="https://hackercollective.co/">Click Me</a>
```

The code above will display the content “Click Me” on the webpage and will take users to `https://hackercollective.co/` upon clicking the “Click Me” text. The anchor element is declared with the opening `<a>` and closing `</a>` tags encompassing the content, and the href attribute and value are declared with `href="https://hackercollective.co/"` in the opening tag.

### HTML Document

HTML documents are plain text documents saved with an .html file extension.

> To begin writing HTML, you first need a text editor and we strongly recommend VS Code. Follow this [link](https://pathforge.co/adventures/1/Complete-Software-Development-Programme/journeys/2/quests/19) to get started (if you haven't got VS Code installed).

All HTML documents have a required structure that includes the following declaration and elements: `<!DOCTYPE html>`, `<html>`, `<head>`, and `<body>`.

The document type declaration `<!DOCTYPE html>` informs web browsers the latest version of HTML is being used and is placed at the very beginning of the HTML document.

Following the `<!DOCTYPE html>`, the `<html>` element signifies the beginning of the document.

Inside the `<html>` element, the `<head>` element identifies the top of the document, including any metadata (accompanying information about the page).

> The content inside the `<head>` element is not displayed on the web page itself. Instead, it may include the document title (which is displayed on the title bar in the browser window), links to any external files, or any other beneficial metadata.

All of the visible content within the web page will fall within the `<body>` element.

A breakdown of a typical HTML document structure looks like this:

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

When an element is placed inside of another element, also known as nested, it is a good idea to indent that element to keep the document structure well organized and legible In the previous code, both the `<head>` and `<body>` elements were nested — and indented — inside the `<html>` element. The pattern of indenting for elements continues as new elements are added inside the `<head>` and `<body>` elements.

> Install and enable `Prettier` extension in your VS code to ease your code formatting.

### HTML Self-Closing Elements

If you observe from the previous code example, the `<meta>` element is a self-closing tag. Self-closing element simply receive their content or behavior from attributes within a single tag, and contains no content. Other common self-closing elements include:

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

<br/> <br/>

## Understanding Common CSS Terms

### CSS Selectors

A selector targets element or elements within our HTML to apply styles to.

Selectors generally target an attribute value, such as an `id` or `class` value, or target the type of element, such as `<h1>` or `<p>`.

For example, the selector here is targeting all `<p>` elements.

```css
p {
  /* CSS properties go here */
}
```

### CSS Properties and Values

We use CSS properties to style elements. There are numerous properties we can use, such as `background`, `color`, `font-size`, `height`, and `width`, and new properties are often added.

In the following code, we are defining the color and font-size properties, along with its value, to be applied to all `<p>` elements.

```css
p {
  /* CSS property: value */
  color: black;
  font-size: 12px;
}
```

## Working with CSS Selectors

Let's get familiar with the different types of CSS selectors.

#### Type Selectors

Type selectors target elements by their element type. For example, should we wish to target all division elements, `<div>`, we would use a type selector of div.

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

Class selectors allow us to select an element based on the element’s class attribute value.

Class selectors allow us to apply the same styles to different elements at once by using the same class attribute value across multiple elements.

##### HTML

```html
<div class="class-name">...</div>
<p class="class-name">...</p>
```

##### CSS

```css
.class-name {
  ...;
}
```

> Within CSS, classes are denoted by a leading period, `.`, followed by the `class` attribute value.

#### ID Selectors

ID selectors target only one unique element at a time. Regardless of which type of element they appear on, `id` attribute values can only be used once per page.

##### HTML

```html
<div id="special">...</div>
```

##### CSS

```css
#special {
  ...;
}
```

> Within CSS, ID selectors are denoted by a leading hash sign, `#`, followed by the `id` attribute value.

## Referencing CSS

In order to get our CSS talking to our HTML, we need to reference our CSS file within our HTML. The best practice for referencing our CSS is to include all of our styles in a single external style sheet, which is referenced from within the `<head>` element of our HTML document.

To create our external CSS style sheet, simply create a new text file with a `.css` file extension. Our CSS file should be saved within the same folder, or a subfolder, where our HTML file
is located.

Inside the `<head>` element of the HTML document, the `<link>` element is used to define the relationship `rel` between the HTML file and the CSS file. The `href` attribute is specify the path of the CSS file.

```html
<head>
  <link rel="stylesheet" href="style.css" />
</head>
```
