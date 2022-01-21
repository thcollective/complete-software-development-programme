> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

Returning to our Styles Conference website, let’s add some background colors. While we do that, we’ll change a few other styles to keep all of our styles working together and to keep all of our content legible.

## Step 1

We’ll begin by taking a big step and applying a blue background to the `<body>` element alongside the existing color and font properties. All of the styles for the `<body>` element rule set now include the following:

```css
body {
  background: #293f50;
  color: #888;
  font: 300 16px/22px "Lato", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

We’ve placed a blue background on the `<body>` element purposely, as our website will have a few different rows of background colors, and the most frequent background color will be blue.

## Step 2

Now that every page on our Styles Conference website includes a blue background, let’s clean up a few areas that will keep that blue background. Specifically, our `<header>` and `<footer>` elements will remain blue, as will the hero section on the home page.

Within our `<header>` and `<footer>` elements let’s make all of our link colors start as white and then, when hovered over, turn the same green as our headings.

We’ll begin with our `<header>` element. In order to select all <a> elements within the `<header>` element, we’ll add a class of primary-header to the `<header>` element (in addition to the existing container and group classes). Don’t forget, we’ll need to add this class to the `<header>` elements across all of our pages.

```html
<header class="primary-header container group">...</header>
```

With the primary-header class in place on the `<header>` element, and the existing primary-footer class in place on the `<footer>` element, we can add two new rule sets to the bottom of the links section within our main.css file.

The first rule set will select all `<a>` elements within an element with the class attribute value of primary-header or primary-footer and set their color to white, as defined by comma separating two individual selectors that share the same property and value. The second rule set will select the same `<a>` elements as before but will change their color to green when a user hovers over them.

```css
.primary-header a,
.primary-footer a {
  color: #fff;
}
.primary-header a:hover,
.primary-footer a:hover {
  color: #648880;
}
```

## Step 3

While we’re making some of our text white, let’s make the text within the hero section of our home page white also, as it will remain on a blue background. We have the existing hero class rule set available to add styles to, so let’s add our white text color there. In all, our hero class rule set should include the following:

```css
.hero {
  color: #fff;
  line-height: 44px;
  padding: 22px 80px 66px 80px;
  text-align: center;
}
```

## Step 4

Also within the hero section of our home page, let’s clean up some of the button styles. We’ll begin by adding some new properties to our btn class rule set, within the buttons section of our main.css file.

Specifically, let’s set the button text color to white, make sure our cursor is always a pointer, increase the font-weight, add a small amount of letter-spacing, and change our text-transform to uppercase.

In all, our new btn class rule set should look like this:

```css
.btn {
  border-radius: 5px;
  color: #fff;
  cursor: pointer;
  display: inline-block;
  font-weight: 400;
  letter-spacing: 0.5px;
  margin: 0;
  text-transform: uppercase;
}
```

We’ll also clean up some of the alternate button styles by way of the btn-alt class rule set. Specifically, let’s make the buttons’ borders white and add hover styles including a white background and blue text color.

With all of the additions, our new btn-alt class rule set should look like this:

```css
.btn-alt {
  border: 1px solid #fff;
  padding: 10px 30px;
}
.btn-alt:hover {
  background: #fff;
  color: #648880;
}
```

## Step 5

Now that we have all of the areas with blue backgrounds cleaned up, let’s add styles for the rows that have white backgrounds. Let’s create a new section within our main.css file for rows, just below the clearfix section. Within this new rows section, let’s create a new class selector named row.

Within our new row class rule set, let’s add a white background, a minimum width of 960 pixels (to make sure our row elements are always larger than the width of our container or grid elements), and some vertical padding. Altogether our new row section within our main.css file should look like this:

```css
/*
  ========================================
  Rows
  ========================================
*/

.row {
  background: #fff;
  min-width: 960px;
  padding: 66px 0 44px 0;
}
```

## Step 6

With our row class styles in place, let’s add a row with a white background to our home page. We’ll do this on our teasers section. Currently this area has a `<section>` element with the class of grid wrapping three additional `<section>` elements with the classes of teaser and col-1-3.

To add a white background to this section, we’re going to wrap all of these elements in an element with the class of row.

Because we’ll want the entire teasers section wrapped in a `<section>` element, we’re going to add a new `<section>` element with the class of row that surrounds the existing `<section>` element with the class of grid.

Having two `<section>` elements wrapping the exact same content diminishes semantic value. To correct this we’ll change the second `<section>` element, the one with the class of grid, to a `<div>` element. After all, at this point this element is only adding styles, not semantic meaning, and is appropriate as a `<div>` element.

The structure of our new teasers element should look like this:

```html
<section class="row">
  <div class="grid">
    <!-- Speakers -->

    <section class="teaser col-1-3">...</section>
    <!--
    
    Schedule
  
    -->
    <section class="teaser col-1-3">...</section>
    <!--
    
    Venue
    
    -->
    <section class="teaser col-1-3">...</section>
  </div>
</section>
```

It is amazing how a few background colors can affect the design of a website. Our Styles Conference website is coming along quite nicely, and our home page is proof.

## Summary

Adding backgrounds and gradients to our pages allows us to bring color to the forefront of our designs. These features also help to define how content is grouped and to improve the layout of our pages as a whole.

To review, this lesson covered the following:

- How to add background colors and images to elements
- New CSS3 properties that allow us to change the size, surface area, and origin of background images

Adding background and images brings forth quite a few possibilities to enhance the overall design of our websites. Soon we’ll discuss how to semantically add images (aside from background images) and other media to our pages. But before that, let’s take a look at how to semantically create lists.
