> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

Let’s return to the Styles Conference website to try floating some content.

## Step 1

First things first, before we begin floating any elements, let’s provide a way to contain those floats by adding the clearfix to our CSS. Within the main.css file, just below our grid styles, let’s add the clearfix under the class name group, just like before.

```css
/*
  ========================================
  Clearfix
  ========================================
*/
.group:before,
.group:after {
  content: "";
  display: table;
}
.group:after {
  clear: both;
}
.group {
  clear: both;
  *zoom: 1;
}
```

## Step 2

Now that we can contain floats, let’s float the primary `<h1>` within the `<header>` element to the left and allow all of the other content in the header to wrap to the right of it.

To do this, let’s add a class of logo to the `<h1>` element. Then within our CSS, let’s add a new section of styles for the primary header. In this section we’ll select the `<h1>` element with the logo class and then float it to the left.

```html
<h1 class="logo">
  <a href="index.html">Styles Conference</a>
</h1>
```

```css
/*
  ========================================
  Primary header
  ========================================
*/

.logo {
  float: left;
}
```

## Step 3

While we’re at it, let’s add a little more detail to our logo. We’ll begin by placing a `<br>` element, or line break, between the word “Styles” and the word “Conference” to force the text of our logo to sit on two lines.

Within the CSS, let’s add a border to the top of our logo and some vertical padding to give the logo breathing room.

```html
<h1 class="logo">
  <a href="index.html"
    >Styles <br />
    Conference</a
  >
</h1>
```

```css
.logo {
  border-top: 4px solid #648880;
  padding: 40px 0 22px 0;
  float: left;
}
```

## Step 4

Because we floated the `<h1>` element, we’ll want to contain that float. The closest parent element of the `<h1>` element is the `<header>` element, so we’ll want to add the class of group to the `<header>` element. Doing this applies the clearfix styles we set up earlier to the `<header>` element.

```html
<header class="container group">...</header>
```

## Step 5

The `<header>` element is taking shape, so let’s take a look at the `<footer>` element. Much like we did with the `<header>` element, we’ll float our copyright to the left within the `<small>` element and let all other elements wrap around it to the right.

Unlike the `<header>` element, though, we’re not going to use a class directly on the floated element. This time we’re going to apply a class to the parent of the floated element and use a unique CSS selector to select the element and then float it.

Let’s start by adding the class of primary-footer to the `<footer>` element. Because we know we’ll be floating an element within the `<footer>` element, we should also add the class of group while we’re at it.

```html
<footer class="primary-footer container group">...</footer>
```

## Step 6

Now that the class of primary-footer is on the `<footer>` element, we can use that class to prequalify the `<small>` element with CSS. We’ll want to select and float the `<small>` element to the left. Let’s not forget to create a new section within our main.css file for these primary footer styles.

```css
/*
  ========================================
  Primary footer
  ========================================
*/

.primary-footer small {
  float: left;
}
```

To review, here we are selecting the `<small>` element, which must reside within an element with the class attribute value of primary-footer, such as our `<footer>` element, for example.

## Step 7

Lastly, let’s put some padding on the top and bottom of the `<footer>` element to help separate it a little more from the rest of the page. We can do this directly by using the primary-footer class with a class selector.

```css
.primary-footer {
  padding-bottom: 44px;
  padding-top: 44px;
}
```

With all of these changes to the `<header>` and `<footer>` elements, we have to be sure to make them on every page, not just the index.html page.

## Step 8

For the Styles Conference website, we’ll create a three-column reusable layout using inline-block elements. We’ll do so in a way that allows us to have three columns of equal width or two columns with the total width split between them, two-thirds in one and one-third in the other.

To begin, we’ll create classes that define the width of these columns. The two classes we’ll create are col-1-3, for one-third, and col-2-3, for two-thirds. Within the grid section of our main.css file, let’s go ahead and define these classes and their corresponding widths.

```css
.col-1-3 {
  width: 33.33%;
}
.col-2-3 {
  width: 66.66%;
}
```

## Step 9

We’ll want both of the columns to be displayed as inline-block elements. We’ll need to make sure that their vertical alignment is set to the top of each column, too.

Let’s create two new selectors that will share the display and vertical-alignment property styles.

```css
.col-1-3,
.col-2-3 {
  display: inline-block;
  vertical-align: top;
}
```

Looking at the CSS again, we’ve created two class selectors, col-1-3 and col-2-3, that are separated with a comma. The comma at the end of the first selector signifies that another selector is to follow. The second selector is followed by the opening curly bracket, {, which signifies that style declarations are to follow. By comma-separating the selectors, we can bind the same styles to multiple selectors at one time.

## Step 10

We’ll want to put some space in between each of the columns to help break up the content. We can accomplish this by putting horizontal padding on each of the columns.

This works well; however, when two columns are sitting next to one another, the width of the space between them will be double that of the space from the outside columns to the edge of the row. To balance this we’ll place all of our columns within a grid and add the same padding from our columns to that grid.

Let’s use a class name of grid to identify our grid, and then let’s identify the same horizontal padding for our grid, col-1-3, and col-2-3 classes. With commas separating our selectors again, our CSS looks like this:

```css
.grid,
.col-1-3,
.col-2-3 {
  padding-left: 15px;
  padding-right: 15px;
}
```

## Step 11

When we’re setting up the horizontal padding, we’ll need to be careful. Remember, in the last lesson we created a container element, known by the class of container, to center all of our content on a page within a 960-pixel-wide element. Currently if we were to put an element with the class of grid inside an element with the class of container, their horizontal paddings would add to one another, and our columns would not appear proportionate to the width of the rest of the page.

We don’t want this to happen, so instead, we’ll have to share some of the styles from the container rule set with the grid rule set. Specifically, we’ll need to share the width property and values (to make sure our page stays fixed at 960 pixels wide) and the margin property and values (to center any element with the class of grid on the page).

We’ll accomplish this by breaking up the old container rule set into the following:

```css
.container,
.grid {
  margin: 0 auto;
  width: 960px;
}
.container {
  padding-left: 30px;
  padding-right: 30px;
}
```

Now any element with the class of container or grid will be 960 pixels wide and centered on the page. Additionally, we’ve preserved the existing horizontal padding for any element with the class of container by moving it into a new, separate rule set.

## Step 12

All right—all of the heavy lifting needed to get our reusable grid styles into place is finished. Now it’s time to work in our HTML and to see how these classes perform.

We’ll begin with the teasers on the home page, within our index.html file, aligning them into three columns. Currently, the teasers are wrapped in a `<section>` element with the class of container. We’ll want to change that class from container to grid so that we can begin placing columns within it.

```html
<section class="grid">...</section>
```

## Step 13

Next, we’ll want to add a class of col-1-3 to each of the `<section>` elements within the `<section>` element with the class of grid.

```html
<section class="grid">
  <section class="col-1-3">...</section>

  <section class="col-1-3">...</section>

  <section class="col-1-3">...</section>
</section>
```

## Step 14

And lastly, because each of our columns is an inline-block element, we’ll want to make sure we remove the empty white space between them. We’ll use comments to do this, and we’ll add a little bit of documentation noting each upcoming section while we’re at it to better organize our code.

```html
<section class="grid">
  <!-- Speakers -->

  <section class="col-1-3">...</section>
  <!--
  
  Schedule
  
  -->
  <section class="col-1-3">...</section>
  <!--
  
  Venue
  
  -->
  <section class="col-1-3">...</section>
</section>
```

> To review, on line 3 we leave a comment identifying the “Speakers” section to follow. At the end of line 7, we open a comment immediately after the closing `</section>` tag. Within that comment, on line 9 we identify the “Schedule” section to come. We then close the comment at the beginning of line 11, just before the opening `<section>` tag. This same comment structure reappears on lines 13 through 17 between the two `<section>` elements, right before the “Venue” section. In all, we’ve commented out any potential white space between the columns while also using those comments to identify our sections.

We now have a reusable three-column grid that supports multiple arrangements, using both one-third- and two-thirds-width columns. Our home page now has three columns, breaking up all the different teasers.

## Summary

Learning how to position content within HTML and CSS is a huge step toward mastering the two languages. Add to this the box model, and we’re well on our way to becoming front-end developers.

To review, within this lesson we covered the following:

- What floats are and how to use them to position content
- How to clear and contain floated elements
- How to position content with inline-block elements
- How to remove the white space between inline-block elements
- How to uniquely position content with relatively and absolutely positioned elements

We’re adding new skills with each lesson, so let’s keep going. Next up, typography!
