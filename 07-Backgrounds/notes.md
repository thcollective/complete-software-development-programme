# Backgrounds

## Table of Contents

| No. | Topic                                                   |
| :-: | ------------------------------------------------------- |
|  1  | [Adding Background](#adding-background)                 |
|  1  | [Background Image Controls](#background-image-controls) |

<br /><br />

## Adding Background

We can add a background to an element by using the `background` property. The background property accepts colors and images in shorthand form.

```css
div {
  /* adding a background color */
  background: #b2b2b2;
}
```

For image background there must be an image source identified using a `url()` function and the value will be the background image’s path:

```css
div {
  /* adding a background image from an online source */
  background: url("https://amymhaddad.s3.amazonaws.com/morocco-blue.png");

  /* adding a background image from directory; second background property declared can act as a fallback: */
  background: url("image1.png");
}
```

> You can also use `background-color` or `background-image` property for your specific background requirements.
> <br /><br />

## Background Image Controls

### Background Repeat and Background Position

By default the background image will repeat horizontally and vertically from the top left of the given element to fill up the element’s background. Thankfully we can use the `background-repeat` and `background-position` properties to control how or even whether the image repeats.

```css
div {
  background-image: url("alert.png");
  background-repeat: no-repeat;
  background-position: 20px 10px;
}
```

> The `background-repeat` property accepts four different values: `repeat`, `repeat-x`, `repeat-y`, and `no-repeat`.
> To set a `background-position` value, we can use the `top`, `right`, `bottom`, `left`, and `center` keywords, pixels, percentages, or any length measurements.

### Background Size

The `background-size` property allows us to specify a size for a background image.

When using length values, we can specify a width and a height value by using two space-separated values.

```css
div {
  background-image: url("alert.png");
  background-size: 100% 75%;
  height: 200px;
  width: 200px;
}
```

> Percentage values are in relation to the element’s size, not the background image’s original size. Setting a background-size property with a 100% width will make the background image occupy the full width of the element. If a second value isn’t identified after the width, the height value will be automatically set to `auto` to preserve the aspect ratio of the background image.

#### Cover / Contain

There are also `cover` and `contain` keyword values available to the `background-size` property.

`background-size: cover` specifies that the background image will be resized to completely cover an element’s width and height. The background image’s original aspect ratio will be preserved, yet the image will stretch or shrink as necessary to cover the entire element.

> Often when using the `cover` keyword value, part of the background image is cut off in order for the image to occupy the full available space of the element.

`background-size: contain` on the other hand, specifies that the background image will be resized to reside entirely contained within an element’s width and height. In doing so the background image’s original aspect ratio will be preserved, but the image will stretch or shrink as necessary to remain within the width and height of the element.

> The `contain` keyword value will always show the full background image hence oftentimes it will not occupy the full available space of the element.
