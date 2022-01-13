It’s time to take Styles Conference from a single-page website to a full-blown
website with multiple pages, all of which will be linked together using
hyperlinks.

## Step 1

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

## Step 2

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

## Step 3

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

## Step 4

Within the `<section>` element that introduces our conference, just below our
header, we should also include a link to register for the conference. Placing a
link below the paragraph will work perfectly.

```html
<section>
	...

	<a href="register.html">Register Now</a>
</section>
```

## Step 5

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
			Joining us from all around the world are over twenty fantastic
			speakers, here to share their stories.
		</p>
	</section>

	...
</section>
```

## Step 6

Now we need to create a handful of new pages. Let’s create speakers.html,
schedule.html, venue.html, and register.html files. These files should live
within the same folder as the index.html file, and, because we’re keeping them
inside the same folder, all of our links should work as expected.

To ensure that all of our pages look the same, let’s make sure that all of these
new files have the same document structure and `<header>` and `<footer>`
elements as the index.html file.

It’s official, we’re no longer working with a single page but indeed a full
website.
