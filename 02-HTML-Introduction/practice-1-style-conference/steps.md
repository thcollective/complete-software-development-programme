> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

Currently, our Styles Conference website lacks real structure—and content for
that matter. Let’s take some time to flesh out our home page a bit.

## Step 1

Using our existing index.html file, let’s add in a `<header>` element. Our
`<header>` element should include our existing `<h1>` element; let’s also add an
`<h3>` element as a tagline to support our `<h1>` element.

```html
<header>
  <h1>Styles Conference</h1>
  <h3>August 24&ndash;26th &mdash; Chicago, IL</h3>
</header>
```

## Step 2

After our `<header>` element, let’s add a new group of content, using the
`<section>` element, that introduces our conference. We’ll begin this section
with a new `<h2>` element and end it with our existing paragraph.

```html
<section>
  <h2>Dedicated to the Craft of Building Websites</h2>
  <p>
    Every year the brightest web designers and front-end developers descend on
    Chicago to discuss the latest technologies. Join us this August!
  </p>
</section>
```

## Step 3

Following the introduction to our conference, let’s add another group of content
that teases a few of the pages we’ll be adding, specifically the Speakers,
Schedule, and Venue pages. Each of the pages we’re teasing should also reside
within its own section and include supporting text.

We’ll group all of the teasers inside a `<section>` element, and each individual
teaser will be wrapped within a `<section>` element as well. In all, we’ll have
three `<section>` elements inside another `<section>` element, which is all
right.

```html
<section>
  <section>
    <h5>Speakers</h5>
    <h3>World-Class Speakers</h3>
    <p>
      Joining us from all around the world are over twenty fantastic speakers,
      here to share their stories.
    </p>
  </section>

  ...
</section>
```

## Step 4

Lastly, let’s add our copyright within the `<footer>` element at the end of our
page. To do so let’s use the `<small>` element, which semantically represents
side comments and small print—perfect for our copyright.

Generally, content within the `<small>` element will be rendered as, well,
small, but our CSS reset will prevent that from happening.

```html
<footer>
  <small>&copy; Styles Conference</small>
</footer>
```

Now we can see our home page beginning to come to life.

With our home page taking shape, let’s take a look at creating hyperlinks so
that we may add additional pages and build out the rest of our website.

## Step 5

We’ll begin by making our “Styles Conference” text inside the `<h1>` element
within our `<header>` element link to the index.html page.

Because we are already on the index.html page, this may seem a little odd—and
rightfully so—but as the header is replicated on other pages, linking back to
the home page will make sense.

```html
<h1>
  <a href="index.html">Styles Conference</a>
</h1>
```

## Step 6

In order to navigate across all of the different pages, we’re going add in a
navigation menu, using the `<nav>` element, within our `<header>` element. We’ll
be creating Speakers, Schedule, Venue, and Register pages to go with our home
page, so we should create links for all of them.

```html
<header>
  ...

  <nav>
    <a href="index.html">Home</a>
    <a href="speakers.html">Speakers</a>
    <a href="schedule.html">Schedule</a>
    <a href="venue.html">Venue</a>
    <a href="register.html">Register</a>
  </nav>
</header>
```

## Step 7

Let’s also add the same navigation menu from our `<header>` element to our

<footer> element for convenience.

```html
<footer>
  ...

  <nav>
    <a href="index.html">Home</a>
    <a href="speakers.html">Speakers</a>
    <a href="schedule.html">Schedule</a>
    <a href="venue.html">Venue</a>
    <a href="register.html">Register</a>
  </nav>
</footer>
```

## Step 8

Within the `<section>` element that introduces our conference, just below our
header, we should also include a link to register for the conference. Placing a
link below the paragraph will work perfectly.

```html
<section>
  ...

  <a href="register.html">Register Now</a>
</section>
```

## Step 9

We can’t forget to add links to all of the sections teasing our other pages.
Inside each section, let’s wrap both the `<h3>` and `<h5>` elements within an
anchor element linking to the proper page.

We’ll want to make sure we do this for every section accordingly.

```html
<section>
  <section>
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

## Step 10

Now we need to create a handful of new pages. Let’s create speakers.html,
schedule.html, venue.html, and register.html files. These files should live
within the same folder as the index.html file, and, because we’re keeping them
inside the same folder, all of our links should work as expected.

To ensure that all of our pages look the same, let’s make sure that all of these
new files have the same document structure and `<header>` and `<footer>`
elements as the index.html file.

It’s official, we’re no longer working with a single page but indeed a full
website.
