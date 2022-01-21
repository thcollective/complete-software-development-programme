> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

Now that we know how to build lists within HTML and CSS, let’s loop back to our Styles Conference website and see where we might be able to use lists.

## Step 1

Currently the navigation menus within the `<header>` and `<footer>` elements on our pages consist of a handful of anchor elements. These anchor elements could be better organized in an unordered list.

Using an unordered list (via the `<ul>` element) and list items (via the `<li>` element) will give structure to our navigation menus. These new elements, however, will display our navigation menus vertically.

We’re going to want to change the display value of our `<li>` elements to inline-block to get all of them to align in a horizontal row. When we do that, though, we’ll also need to account for the blank space left between each `<li>` element. Thinking back to Lesson 5, “Positioning Content,” we know that opening an HTML comment at the end of a `<li>` element and closing an HTML comment at the beginning of a `<li>` element will remove this space.

Keeping this in mind, the markup for the navigation menu within our `<header>` element will now look like this:

```html
<nav class="nav primary-nav">
  <ul>
    <li><a href="index.html">Home</a></li>
    <!--
    -->
    <li><a href="speakers.html">Speakers</a></li>
    <!--
    -->
    <li><a href="schedule.html">Schedule</a></li>
    <!--
    -->
    <li><a href="venue.html">Venue</a></li>
    <!--
    -->
    <li><a href="register.html">Register</a></li>
  </ul>
</nav>
```

Along these same lines, the markup for the navigation menu within our `<footer>` element will now look like this:

```html
<nav class="nav">
  <ul>
    <li><a href="index.html">Home</a></li>
    <!--
    -->
    <li><a href="speakers.html">Speakers</a></li>
    <!--
    -->
    <li><a href="schedule.html">Schedule</a></li>
    <!--
    -->
    <li><a href="venue.html">Venue</a></li>
    <!--
    -->
    <li><a href="register.html">Register</a></li>
  </ul>
</nav>
```

Let’s not forget to make these changes in all of our HTML files.

## Step 2

With the unordered list in place, let’s make sure the list items align horizontally, and let’s clean up their styles a bit. We’ll use the existing nav class to help target our new styles.

We’ll begin by setting all of the `<li>` elements within any element with the class attribute value of nav to be displayed inline-block, to include some horizontal margins, and to be vertically aligned to the top of the element.

Additionally, we’ll use the :last-child pseudo-class selector to identify the last `<li>` element and reset its right margin to 0. Doing so ensures that any horizontal space between the `<li>` element and the edge of its parent element is removed.

Within our main.css file, below our existing navigation styles, let’s add the following CSS:

```css
.nav li {
  display: inline-block;
  margin: 0 10px;
  vertical-align: top;
}
.nav li:last-child {
  margin-right: 0;
}
```

You may be wondering why our unordered list didn’t include any list item markers or default styles. These styles were removed by the reset at the top of our style sheet. If we look at the reset, we’ll see our `<ol>`, `<ul>`, and `<li>` elements all include a margin and padding of 0, and our `<ol>` and `<ul>` elements have a list-style value of none.

## Step 3

Our navigation menus aren’t the only places we’ll be using lists. We’ll also use them on some of our internal pages, including the Speakers page. Let’s add some speakers to our conference.

Within our speakers.html file just below our lead section, let’s create a new section where we’ll present all of our speakers. Reusing some existing styles, we’ll use a `<section>` element with a class attribute value of row to wrap all of our speakers and apply a white background and padding behind them. Inside the `<section>` element, we’ll add a `<div>` element with a class attribute value of grid to center our speakers on the page and allow us to use multiple columns in doing so.

So far our HTML below the lead section looks like this:

```html
<section class="row">
  <div class="grid"></div>
</section>
```

## Step 4

Inside the grid every speaker will be marked up with his or her own `<section>` element, which will include two columns. The first column will span two-thirds of the `<section>` element and will be marked up using a `<div>` element. The second column will span the remaining one-third of the `<section>` element and will be marked up using an `<aside>` element, as its content is secondary to the speaker and his or her specific talk.

Using our existing col-2-3 and col-1-3 classes, the outline for a speaker section will look like this:

```html
<section id="shay-howe">
  <div class="col-2-3">...</div>
  <!--

  -->
  <aside class="col-1-3">...</aside>
</section>
```

There are a few items to notice here. First, each `<section>` element for each speaker includes an ID attribute with the speaker’s name as the attribute value. Later, when we create the schedule for our conference, these ID attributes will serve as anchors, allowing us to link from the schedule to a speaker’s profile.

Additionally, the closing tag of the `<div>` element is followed by the opening of an HTML comment, and the opening tag of the `<aside>` element is preceded by the closing of an HTML comment. Because the column-based classes will display these elements as inline-block elements, we are removing the blank space that will appear between them.

## Step 5

Inside the two-thirds column, marked up with the `<div>` element, we’ll use a few headings and paragraphs to show the speaker’s name, the title and abstract of the talk, and a short biography.

Including this content, a speaker section will look like this:

```html
<section id="shay-howe">
  <div class="col-2-3">
    <h2>Shay Howe</h2>
    <h5>Less Is More: How Constraints Cultivate Growth</h5>

    <p>By setting constraints, we force ourselves...</p>

    <h5>About Shay</h5>

    <p>As a designer and front-end developer, Shay...</p>
  </div>
  <!--
  -->
  <aside class="col-1-3">...</aside>
</section>
```

## Step 6

Within the one-third column, marked up with an `<aside>` element, we’re going to add a `<div>` element with a class attribute value of speaker-info. We’ll use a `<div>` element because we’ll be adding styles to this element soon.

Before getting into any styles, though, let’s add an unordered list within the `<div>` element that includes as list items some relevant links for the speaker.

Now our HTML for a speaker will look like this:

```html
<section id="shay-howe">
  <div class="col-2-3">
    <h2>Shay Howe</h2>
    <h5>Less Is More: How Constraints Cultivate Growth</h5>

    <p>By setting constraints, we force ourselves...</p>

    <h5>About Shay</h5>

    <p>As a designer and front-end developer, Shay...</p>
  </div>
  <!--

  -->
  <aside class="col-1-3">
    <div class="speaker-info">
      <ul>
        <li><a href="https://twitter.com/shayhowe">@shayhowe</a></li>
        <li><a href="http://learn.shayhowe.com/">learn.shayhowe.com</a></li>
      </ul>
    </div>
  </aside>
</section>
```

## Step 7

With the `<div>` element with a class attribute value of speaker-info ready, we can add some styles to it.

We’ll begin by adding a new section within our main.css file for the Speaker page styles. From there, let’s add a 1-pixel solid gray border with a 5-pixel radius around any element that includes the class attribute value of speaker-info.

Next, let’s add a top margin of 88 pixels to position the element on the same vertical line as the first paragraph of the talk description, and let’s also add 22 pixels of vertical padding inside the element to provide room for the nested unordered list.

Lastly, let’s center all of the text within the element.

In all, our CSS for the speaker-info class rule set looks like this:

```css
/*
  ========================================
  Speakers
  ========================================
*/

.speaker-info {
  border: 1px solid #dfe2e5;
  border-radius: 5px;
  margin-top: 88px;
  padding: 22px 0;
  text-align: center;
}
```

Let’s take a minute to review why we’re using a `<div>` element here and the corresponding styles.

We’re placing a `<div>` element inside the `<aside>` element with the class attribute value of col-1-3 because we’ll want the padding inherited from the col-1-3 class to be outside of the border on the `<div>` element. Before long we’ll be including an image within the `<div>` element, alongside the unordered list; therefore we created a `<div>` element as opposed to applying these styles directly to the `<ul>` element.

## Step 8

As we add more and more speakers to the page, we’ll want to ensure that they remain an equal distance apart vertically. To do so, we’ll create a speaker class rule set which includes a bottom margin of 44 pixels, like this:

```css
.speaker {
  margin-bottom: 44px;
}
```

We can then apply this class to the `<section>` element for each speaker, provided it isn’t the last speaker. We’ll omit this class on the last speaker, as we don’t want to create any unnecessary margins before our `<footer>` element. With more than one speaker, our layout will look like this:

```html
<section class="row">
  <div class="grid">
    <section class="speaker" id="chris-mills">
      <div class="col-2-3">...</div>
      <!--

      -->
      <aside class="col-1-3">...</aside>
    </section>

    <section id="shay-howe">
      <div class="col-2-3">...</div>
      <!--
    
      -->
      <aside class="col-1-3">...</aside>
    </section>
  </div>
</section>
```

> Notice how the first speaker `<section>` element, for Chris Mills, includes the class attribute value of speaker, which vertically separates it from the speaker `<section>` element for myself, Shay Howe. The last speaker `<section>` element, again for myself, doesn’t include a class attribute value of speaker in order to keep it a proper distance from the `<footer>` element.

Our navigation menus are now complete, and the Speakers page is taking shape.

## Summary

Lists are used quite commonly in HTML, often in places that might not be obvious or apparent. The key is to use them as semantically as possible and to leverage them where they best fit.

Let’s recap. Within this lesson we covered the following:

- How to create unordered, ordered, and description lists
- How to properly nest lists inside of other lists
- How to change the list item marker style and position
- How to use a background image instead of a list item marker
- How to horizontally display or float lists

Now that we know how to add lists to our pages, let’s add media to our pages, too. In the next chapter we’ll dive into embeddable media such as images, audio, and video.
