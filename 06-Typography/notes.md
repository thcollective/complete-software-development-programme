# Typography

## Table of Contents

| No. | Topic                                                 |
| :-: | ----------------------------------------------------- |
|  1  | [Adding Color to Text](#adding-color-to-text)         |
|  2  | [Changing Font Properties](#changing-font-properties) |
|  3  | [Applying Text Properties](#applying-text-properties) |
|  4  | [Embedding Web Fonts](#embedding-web-fonts)           |

<br /><br />

## Adding Color to Text

The only property we need to set the color of text is the `color` property. The `color` property accepts one color value, but in many different format such as color keywords, hexadecimal values, and RGB, RGBa, HSL, and HSLa values. More about color formats [here](https://www.w3schools.com/cssref/css_colors_legal.asp).

Here's the example to change the color of all the text within the <html> element on a page:

```css
html {
  color: #555;
}
```

<br /><br />

## Changing Font Properties

### Font Family

The `font-family` property is used to declare which font — as well as which fallback or substitute fonts—should be used to display text. The value of the font-family property contains multiple font names, all comma separated.

The font-family property in action looks like this:

```css
body {
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

> The first declared font `Helvetica Neue` is the preferred font to display from the example above. If this font is unavailable or not installed on a given device, the next font in the list `Helvetica` will be used, and so on.

### Font Size

The `font-size` property set the size of text using common length values, including pixels, em units, percentages, points, or font-size keywords. More about CSS units, follow this [link](https://www.w3schools.com/cssref/css_units.asp).

Here the CSS is setting a `font-size` of 14 pixels on the `<body>` element:

```css
body {
  font-size: 14px;
}
```

### Font Style

The `font-style` property accepts four keyword values: `normal`, `italic`, `oblique`, and `inherit`.

Following CSS example italicize all text within a `<p>` element:

```css
p {
  font-style: italic;
}
```

### Font Weight

`font-weight` property controls how bold a font should look.

Following CSS example turns all text within a `<p>` element `bold`:

```css
p {
  font-weight: bold;
}
```

> `font-weight` property also accepts numeric values from `100` to `900`. Generally, the keyword value of `normal` maps to `400` and the keyword `bold` maps to `700`.

### Line Height

`line-height` controls the distance between two lines of text (often referred to as leading).

Example below place 22 pixels between each line of text within the `<body>` element:

```css
body {
  line-height: 22px;
}
```

<br /><br />

## Applying Text Properties

### Text Align

The `text-align` property has five values: `left`, `right`, `center`, `justify`, and `inherit`.

The following CSS sets all paragraph text to be center aligned:

```css
p {
  text-align: center;
}
```

### Text Decoration

The `text-decoration` property accepts the keyword values of `none`, `underline`, `overline`, `line-through`, and `inherit`.

The following CSS underlines all paragraph text:

```css
p {
  text-decoration: underline;
}
```

> Multiple text-decoration values may be applied to an element at once by space-separating each keyword within the value.

### Text Indent

The `text-indent` property can be used to indent the first line of text within an element.

Here, the CSS indents the text for all <p> elements inward by 20 pixels:

```css
p {
  text-indent: 20px;
}
```

### Text Shadow

The `text-shadow` property allows us to add shadow to text. The property generally takes four values. The first three values are lengths, and the last value is a color.

Within the three length values, the first value determines the shadow’s horizontal offset, the second value determines the shadow’s vertical offset, and the third value determines the shadow’s blur radius. The fourth, and last, value is the shadow’s color.

The `text-shadow` property here is casting a 30% opaque black shadow 3 pixels towards the right, 6 pixels down, and blurred 2 pixels off all <p> element text:

```css
p {
  text-shadow: 3px 6px 2px rgba(0, 0, 0, 0.3);
}
```

### Text Transform

The `text-transform` property accepts five values: `none`, `capitalize`, `uppercase`, `lowercase`, and `inherit`.

The following CSS sets all <p> element text to appear in all uppercase letters:

```css
p {
  text-transform: uppercase;
}
```

### Letter Spacing

Using the `letter-spacing` property, we can adjust the space (or tracking) between the letters on a page.

Example below allows all letters within our `<p>` elements to appear 0.5em further apart:

```css
p {
  letter-spacing: 0.5em;
}
```

### Word Spacing

Much like the `letter-spacing` property, we can also adjust the space between words within an element using the `word-spacing` property.

Here every word within a `<p>` element will be spaced 0.25em apart.

```css
p {
  word-spacing: 0.25em;
}
```

<br /><br />

## Embedding Web Fonts

Let’s try using a [Google Font](https://fonts.google.com/) on our website.

We will use [Roboto](https://fonts.google.com/specimen/Roboto#standard-styles) font for this example. Simply click on '+ Select this style' and you will see the additional `<link>` element provided by Google to include in the `<head>` element of all of our pages.

With the addition of the new `<link>` element, our `<head>` element will look like this:

```html
<head>
  <meta charset="utf-8" />
  <title>Styles Conference</title>
  <link rel="stylesheet" href="style.css" />
  <!-- below copied from Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
    rel="stylesheet"
  />
</head>
```

Once we have added the new `<link>` element to all of our pages, we are ready to begin using the Roboto font - just add the CSS rules provided by Google Fonts into the `font-family` property:

```css
body {
  /* added 'Roboto' font into our default font-family */
  font-family: "Roboto", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```
