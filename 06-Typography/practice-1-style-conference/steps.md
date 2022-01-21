> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

Diving back into our Styles Conference website, let’s start adding some font-based properties.

## Step 1

We’ll begin by updating the font on all of our text. To do this, we’ll apply styles to our `<body>` element. We’ll start with a color, and we’ll also add in font-weight, font-size, line-height, and font-family values by way of the font property and shorthand values.

In an attempt to keep our main.css file as organized as possible, let’s create a new section for these custom styles, placing it just below our reset and above our grid styles.

We need to add the following:

```css
/*
  ========================================
  Custom styles
  ========================================
*/
body {
  color: #888;
  font: 300 16px/22px "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

## Step 2

Within the same section of the main.css file, let’s add a color to the level-one through level-four headings.

```css
h1,
h2,
h3,
h4 {
  color: #648880;
}
```

While we’re at it, let’s also add in font sizes for these different heading levels. Our `<h1>` and `<h2>` elements will use fairly large font-size values; consequently, we’ll also want to increase their line-height values to keep the text within these elements legible. For reference, we’ll make their line-height values 44 pixels, double the value of the base line-height set within the `<body>` element rule set.

```css
h1 {
  font-size: 36px;
  line-height: 44px;
}
h2 {
  font-size: 24px;
  line-height: 44px;
}
h3 {
  font-size: 21px;
}
h4 {
  font-size: 18px;
}
```

## Step 3

Our `<h5>` elements are going to be a little more unique than the rest of our headings. Accordingly, we’re going to change their styles a bit.

We’ll use a different color property value and a slightly smaller font-size for these elements, and we’re going to change the font-weight to 400, or normal.

By default, browsers render headings with a font-weight of bold. Our headings, however, are currently all set to a font-weight of 300. Our reset at the top of our main.css file changed the font-weight to normal, and then our font-weight of 300 within the `<body>` element rule set changed all headings to a font-weight of 300.

The font-weight of 400 on the `<h5>` element will actually make it slightly thicker than the rest of our other headings and text.

```css
h5 {
  color: #a9b2b9;
  font-size: 14px;
  font-weight: 400;
}
```

## Step 4

Our reset at the beginning of our style sheet also reset the browser default styles for the `<strong>`, `<cite>`, and `<em>` elements, which we’ll want to add back in. For our `<strong>` elements we’ll want to set a font-weight of 400, which actually equates to normal, not bold, as the typeface we’re using is thicker than most typefaces. Then, for our `<cite>` and `<em>` elements we’ll want to set a font-style of italic.

```css
strong {
  font-weight: 400;
}
cite,
em {
  font-style: italic;
}
```

## Step 5

We’re on a roll, so let’s keep going by adding some styles to our anchor elements. Currently they are the browser default blue. Let’s make them the same color as our `<h1>` through `<h4>` heading elements. Additionally, let’s use the :hover pseudo-class to change the color to a light gray when a user hovers over an anchor.

```css
/*
  ========================================
  Links
  ========================================
*/

a:hover {
  color: #a9b2b9;
}
a {
  color: #648880;
}
```

## Step 6

Now let’s take a look at our `<header>` element and update our styles there. We’ll begin updating our logo by adding the font-size and line-height properties within the logo rule set. Adding to the existing border-top, float, and padding properties, the new rule set should look like this:

```css
.logo {
  border-top: 4px solid #648880;
  float: left;
  font-size: 48px;
  line-height: 44px;
  padding: 40px 0 22px 0;
}
```

## Step 7

Because we’ve bumped up the size of the logo quite a bit, let’s add a margin to the `<h3>` element within the `<header>` element to balance it. We’ll do so by placing a class attribute value of tagline on the `<h3>` element and then using that class within our CSS to apply the proper margins.

Let’s not forget that the changes to the `<h3>` element need to happen on every page.

```html
<section class="hero container">...</section>
```

Next we’ll want to create a new section within our CSS file for home page
styles, and, once we’re ready, we’ll use the class of hero to apply padding
around all four sides of the `<section>` element.

```HTML
<h3 class="tagline">August 24&ndash;26th &mdash; Chicago, IL</h3>
```

```css
.tagline {
  margin: 66px 0 22px 0;
}
```

## Step 8

After the `<h3>` element with the class attribute value of tagline comes the `<nav>` element. Let’s add a class attribute value of primary-nav to the `<nav>` element and add font-size and font-weight properties to make the navigation stand out against the rest of the header.

```html
<section class="hero container">...</section>
```

Next we’ll want to create a new section within our CSS file for home page
styles, and, once we’re ready, we’ll use the class of hero to apply padding
around all four sides of the `<section>` element.

```HTML
<nav class="primary-nav">
  ...
</nav>
```

```css
.primary-nav {
  font-size: 14px;
  font-weight: 400;
}
```

## Step 9

With the `<header>` element in slightly better shape, let’s also take a look at our `<footer>` element. Using the primary-footer class, let’s change the color and font-size for all the text within the `<footer>` element. Additionally, let’s bump up the font-weight of the `<small>` element to 400.

Including the existing styles, the styles for our primary footer section should look like this:

```css
.primary-footer {
  color: #648880;
  font-size: 14px;
  padding-bottom: 44px;
  padding-top: 44px;
}
.primary-footer small {
  float: left;
  font-weight: 400;
}
```

## Step 10

Let’s update our home page a bit, too. We’ll start with the hero section, increasing the overall line-height of the section to 44 pixels. We’ll also make the text within this section larger, increasing the `<h2>` element’s font-size to 36 pixels and the `<p>` element’s font-size to 24 pixels.

We can make all of these changes by using the existing hero class selector and creating new selectors for the `<h2>` and `<p>` elements. Our styles for the hero section will now break down in this way:

```css
.hero {
  line-height: 44px;
  padding: 22px 80px 66px 80px;
}
.hero h2 {
  font-size: 36px;
}
.hero p {
  font-size: 24px;
}
```

## Step 11

Lastly, we have one small issue to fix on our home page. Previously we gave all of our anchor elements a light gray color value when a user hovers over them. This works great, except for within the three teasers on our home page where the anchor element wraps both `<h3>` and `<h5>` elements. Because the `<h3>` and `<h5>` elements have their own color definition, they are not affected by the :hover pseudo-class styles from before.

Fortunately we can fix this, although it’s going to require a fairly complicated selector. We’ll begin by adding a class attribute value of teaser to all three columns on the home page. We’ll use this class as a qualifying selector shortly.

```html
<section class="grid">
  <!-- Speakers -->

  <section class="teaser col-1-3">
    <a href="speakers.html">
      <h5>Speakers</h5>
      <h3>World-Class Speakers</h3>
    </a>
    <p>
      Joining us from all around the world are over twenty fantastic speakers,
      here to share their stories.
    </p>
  </section>

  ...
</section>
```

With a qualifying class in place, we’re ready to do some CSS heavy lifting and create a fairly complex selector. We’ll begin our selector with the teaser class, as we only want to target elements within an element with the class of teaser. From there we want to apply styles to elements that reside within anchor elements that are being hovered over; thus we’ll add the a type selector along with the :hover pseudo-class. Lastly, we’ll add the h3 type selector to select the actual `<h3>` elements we wish to apply styles to.

Altogether, our selector and styles for these `<h3>` elements will look like this:

```css
.teaser a:hover h3 {
  color: #a9b2b9;
}
```

Whew, that was quite a bit. The good news is that our Styles Conference home page is starting to look really nice and is showing a bit of personality.

With text-based properties under our belts, let’s jump back into our Styles Conference website and put them to work.

## Step 12

Currently every link on the page is underlined, which is the default style for anchor elements. This style is a little overbearing at times, though, so we’re going to change it up a bit.

Adding to our links section within our main.css file, we’ll begin by removing the underline from all anchor elements by way of the text-decoration property. Next, we’ll select all anchor elements that appear within a paragraph element and give them a bottom border.

We could use the text-decoration property instead of the border-bottom property to underline all the links within each paragraph; however, by using the border-bottom property we have more control over the underline’s appearance. Here, for example, the underline will be a different color than the text itself.

Our links section, which includes our previous hover styles, should look like this:

```css
a {
  color: #648880;
  text-decoration: none;
}
a:hover {
  color: #a9b2b9;
}
p a {
  border-bottom: 1px solid #dfe2e5;
}
```

## Step 13

Going back to our `<h5>` elements from before, which have slightly different styles than the rest of the headings, let’s make them all uppercase using the text-transform property. Our new `<h5>` element styles should look like this:

```css
h5 {
  color: #a9b2b9;
  font-size: 14px;
  font-weight: 400;
  text-transform: uppercase;
}
```

## Step 14

Let’s revisit our `<header>` element to apply additional styles to our navigation menu (to which we previously added the primary-nav class attribute value). After the existing font-size and font-weight properties, let’s add some slight letter-spacing and change our text to all uppercase via the text-transform property.

Our styles for the `<nav>` element with the primary-nav class attribute value should now look like this:

```css
.primary-nav {
  font-size: 14px;
  font-weight: 400;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
```

## Step 15

Previously, we floated our logo to the left within the `<header>` element. Now our tagline sits directly to the right of the logo; however, we’d like it to appear all the way to the right of the `<header>` element, flush right.

We need to add the text-align property with a value of right to the `<h3>` element with the class attribute value of tagline to get the tagline to sit all the way to the right.

When added to the existing margin property, our new styles for the `<h3>` element with the class attribute value of tagline will look like this:

```css
.tagline {
  margin: 66px 0 22px 0;
  text-align: right;
}
```

## Step 16

We’d also like our navigation menus, both in the `<header>` and `<footer>` elements, to sit flush right. Because both the `<header>` and `<footer>` elements have child elements that are floated to the left, we can use the same approach as we did with our tagline.

The floated elements within the `<header>` and `<footer>` elements are taken out of the normal flow of the page, and this causes other elements to wrap around them. In this specific case, our navigation menus are the elements wrapping around the floated elements.

Because we’ll be sharing the same styles across both navigation menus, we’ll give them each the class of nav. Our `<header>` element will now look like this:

```html
<header class="container group">
  <h1 class="logo">...</h1>

  <h3 class="tagline">...</h3>

  <nav class="nav primary-nav">...</nav>
</header>
```

And our `<footer>` element will now look like this:

```html
<footer class="primary-footer container group">
  <small>...</small>

  <nav class="nav">...</nav>
</footer>
```

Let’s not forget, changes to our `<header>` and `<footer>` elements need to be made on every page.

## Step 17

With the nav class in place on both navigation menus, let’s create a new section within our main.css file to add shared navigation styles. We’ll begin by adding the text-align property with a value of right to a nav class rule set. We’ll expand these styles later on, but this will serve as a great foundation.

```css
/*
  ========================================
  Navigation
  ========================================
*/

.nav {
  text-align: right;
}
```

## Step 18

While we’re adding the text-align property to a few different elements, let’s also add the text-align property with a value of center to our hero class selector rule set. For reference, these styles, including our existing line-height and padding properties, are located within the home page section of our main.css file.

```css
.hero {
  line-height: 44px;
  padding: 22px 80px 66px 80px;
  text-align: center;
}
```

Our Styles Conference now has some serious style. (Bad joke, sorry.) Seriously, though, all of our styles are coming along quite well, and our website is progressing.

## Step 19

To add a little character to our Styles Conference website, let’s try using a Google Font on our website.

Let’s head over to the Google Fonts website and search for the font we’d like to use: Lato. Once we’ve found it, let’s proceed with adding it to our collection and following the steps on their website to use the font.

When the time comes to choose which font weights we’d like to use, let’s make sure to select 300 and 400, as we’ve already been using those within our CSS. Let’s also add 100 to the collection for another variation, too.

Google will give us an additional `<link>` element to include in the `<head>` element of all of our pages. We’ll place this new `<link>` element directly below our existing `<link>` element. The new element will include the proper style sheet reference to Google, which will take care of including a new CSS file with the proper @font-face at-rule necessary for us to use the Lato font.

With the addition of the new `<link>` element, our `<head>` element will look like this:

```html
<head>
  <meta charset="utf-8" />
  <title>Styles Conference</title>
  <link rel="stylesheet" href="assets/stylesheets/main.css" />
  <link
    rel="stylesheet"
    href="http://fonts.googleapis.com/css?family=Lato:100,300,400"
  />
</head>
```

## Step 20

Once we have added the new `<link>` element to all of our pages, we are ready to begin using the Lato font. We’ll do so by adding it to our primary font stack within the font property inside our `<body>` element styles.

Let’s add Lato to the beginning of our font stack to make it "Lato", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif.

Although Lato is a single word, because it is an embedded web font we’ll want to surround it with quotation marks within any CSS reference. Our new `<body>` element styles will look like this:

```css
body {
  color: #888;
  font: 300 16px/22px "Lato", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

## Step 21

Lato should now be up and running, visible in all of our text across the Styles Conference website. Let’s take a closer look at our logo and update it a bit.

Within our logo class selector rule set, we’ll begin by adding the font-weight property with a value of 100 to make the text fairly thin. We’ll also use the text-transform property with a value of uppercase to make all of the letters uppercase, as well as the letter-spacing property with a value of .5 pixels to add a tiny bit of space between each letter within the logo.

Altogether the styles for our logo will look like this:

```css
.logo {
  border-top: 4px solid #648880;
  float: left;
  font-size: 48px;
  font-weight: 100;
  letter-spacing: 0.5px;
  line-height: 44px;
  padding: 40px 0 22px 0;
  text-transform: uppercase;
}
```

## Step 22

Because we have a font-weight property value of 100 available, let’s also set the paragraph element within our hero section to that weight. We can use the existing selector to do so, and the new rule set will look like this:

```css
.hero p {
  font-size: 24px;
  font-weight: 100;
}
```

Our Styles Conference website has taken quite a few large steps this lesson, and the look and feel of our website is starting to really shine.

## Summary

Learning how to style text is exciting, as our content can begin to convey some emotion. We can also start to play around with the hierarchy of our content, making our website more legible and digestible.

To quickly recap, within this lesson we discussed the following:

- Adding color to our text to enhance it
- Applying font-based properties, including font-family, font-size, font-style, font-weight, and more
- Applying text-based properties, including text-align, text-decoration, text-indent, text-shadow, and more
- The history behind web-safe fonts and how to embed our own web fonts

Sharpening up our text and dabbling a bit with typography has brought our design along quite a way. Next, we’ll bring a little more color to our website by going over backgrounds and gradients.
