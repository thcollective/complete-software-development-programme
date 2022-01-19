# Positioning

## Table of Contents

| No. | Topic                                                           |
| :-: | --------------------------------------------------------------- |
|  1  | [Positioning with Floats](#positioning-with-floats)             |
|  2  | [Positioning with Inline-Block](#positioning-with-inline-block) |
|  3  | [Uniquely Positioning Elements](#uniquely-positioning-elements) |

<br /><br />

## Positioning with Floats

The `float` property allows us to take an element, remove it from the normal flow of a page, and position it to the left or right of its parent element. An `<img>` element floated to the side of a few paragraphs of text, for example, will allow the paragraphs to wrap around the image as necessary.

The following example shows how we can change the block-level elements `<section>` and `<aside>` to sit side by side instead of stacked on top of one another using `float`.

```html
<header>this is header</header>
<section>this is section</section>
<aside>this is aside</aside>
<footer>this is footer</footer>
```

```css
/* to clear all default margin/padding/box-sizing values */
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

/* to outline each of the elements */
header,
footer,
section,
aside {
  height: 200px;
  border: 2px solid green;
}

section {
  float: left;
  margin: 0 1.5%;
  width: 63%;
}
aside {
  float: right;
  margin: 0 1.5%;
  width: 30%;
}
```

> Note: The `float` property relies on an element having a display value of `block`, and may alter an element’s default display value if it is not already displayed as a block-level element. For example if you `float` a `<span>` element it will change its display property originally from `inline` to `block`.

<br /><br />

## Positioning with Inline-Block

The `inline-block` method place elements next to one another within a line.

```html
<header>this is header</header>
<section>this is section</section>
<section>this is section</section>
<section>this is section</section>
<footer>this is footer</footer>
```

```css
/* to clear all default margin/padding/box-sizing values */
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

/* to outline each of the elements */
header,
footer,
section {
  height: 200px;
  border: 2px solid green;
}

section {
  display: inline-block;
  margin: 0 1.5%;
  width: 30%;
}
```

<br /><br />

## Uniquely Positioning Elements

Every now and then we’ll want to precisely position an element, but `float` or `inline-block` elements won’t do the trick. Here's when `position` property comes in.

### Relative Positioning

The `relative` value for the `position` property allows elements to appear within the normal flow a page, leaving space for an element as intended while not allowing other elements to flow around it.

```html
<div>This is the first div</div>
<div class="offset">This is the second div</div>
<div>This is the third div</div>
```

```css
div {
  background-color: gray;
  height: 100px;
  width: 200px;
}
.offset {
  background-color: green;
  left: 20px;
  position: relative;
  top: 20px;
}
```

### Absolute Positioning

An element with a `position` value of `absolute` will not appear within the normal flow of a document. `position: absolute` elements are moved in relation to their closest `position: relative` parent element. Should a `position: relative` parent element not exist, the absolutely positioned element will be positioned in relation to the `<body>` element.

```html
<section>
  <div class="offset">This is div</div>
</section>
```

```css
section {
  height: 200px;
  width: 200px;
  background-color: gray;
  position: relative;
}
div {
  height: 200px;
  background-color: green;
  position: absolute;
  right: 20px;
  top: 20px;
}
```

> In the above example, try removing the `position: relative` property from `section`. See what happens? the div is now absolutely positioned against the `<body>` element since there's no `position: relative` parent element exists.
