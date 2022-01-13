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
		Every year the brightest web designers and front-end developers descend
		on Chicago to discuss the latest technologies. Join us this August!
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
			Joining us from all around the world are over twenty fantastic
			speakers, here to share their stories.
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
