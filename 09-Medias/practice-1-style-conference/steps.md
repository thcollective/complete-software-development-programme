> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

Now that we know how to add and position images on a page, let’s take a look at our Styles Conference website and see where we can add a few images.

## Step 1

Let’s begin by adding some images to our home page. Specifically, we’ll add an image within each of the teaser sections promoting a few of our pages.

Before we jump into the code, though, let’s create a new folder named “images” within our “assets” folder. Then, within the “images” folder, let’s create another folder named “home” specifically for our home page images. Within the “home” folder we’ll add three images: speakers.jpg, schedule.jpg, and venue.jpg. (For reference, these images may be downloaded within a zip file.)

Then, inside our index.html file, each teaser section has an `<a>` element wrapping both an `<h3>` and an `<h5>` element. Let’s move the `<h5>` element above the `<a>` element and replace it with an `<img>` element. The src attribute value for each `<img>` element will correspond to the folder structure and filename we set up, and the alt attribute value will describe the contents of each image.

The HTML for our first teaser, for the Speakers page, will look like this:

```html
<section class="teaser col-1-3">
  <h5>Speakers</h5>
  <a href="speakers.html">
    <img src="assets/images/home/speakers.jpg" alt="Professional Speaker" />
    <h3>World-Class Speakers</h3>
  </a>
  <p>
    Joining us from all around the world are over twenty fantastic speakers,
    here to share their stories.
  </p>
</section>
```

Let’s continue this pattern for both the Schedule and Venue page teasers, too.

## Step 2

Now that we’ve added a few images to our home page, we’ll need to clean up their styles a bit and make sure they properly fit into the layout of our page.

Since images are inline-level elements by default, let’s change our images within the teaser sections to block-level elements. Let’s also set their maximum width to 100% to ensure they don’t exceed the width of their respective columns. Changing this width value is important as it allows our images to adjust with the width of the columns as necessary.

Lastly, let’s round the corners of the images slightly and apply 22 pixels of bottom margin to the images, providing a little breathing room.

Once we add these new styles to our existing home page styles (using the teaser class as a qualifying selector for the `<img>` elements), our CSS will look like this:

```css
.teaser img {
  border-radius: 5px;
  display: block;
  margin-bottom: 22px;
  max-width: 100%;
}
```

## Step 3

Next up, let’s add images of all of the speakers to the Speakers page. We’ll begin by creating a “speakers” folder within our “images” folder and placing images of all of the speakers there.

Within the speakers.html file, let’s add an `<img>` element within each of the speaker information `<aside>` elements. Let’s place each `<img>` element inside the `<div>` element with the class attribute value of speaker-info, just above the `<ul>` element.

The src attribute value of each image will correspond to the “speakers” folder we set up and the speaker’s name; the alt attribute value will be the speaker’s name.

The `<aside>` element for myself, as a speaker, will look like this:

```html
<aside class="col-1-3">
  <div class="speaker-info">
    <img src="assets/images/speakers/shay-howe.jpg" alt="Shay Howe" />

    <ul>
      <li><a href="https://twitter.com/shayhowe">@shayhowe</a></li>
      <li><a href="http://learn.shayhowe.com/">learn.shayhowe.com</a></li>
    </ul>
  </div>
</aside>
```

This same pattern for adding an image should then be applied to all other speakers.

## Step 4

As we did with the images on our home page, we’ll want to apply some styles to the images on the Speakers page.

Let’s begin by applying the border-radius property with a value of 50%, turning our images into circles. From there, let’s set a fixed height of 130 pixels to each image and set them to be vertically aligned to the top of the line they reside within.

With the height and vertical alignment in place, let’s apply vertical margins to the images. Using a negative 66-pixel margin on the top of the images, we’ll pull them slightly out of the `<aside>` element and make them vertically centered with the top border of the `<div>` element with a class attribute value of speaker-info. Then, applying a 22-pixel margin on the bottom of the image provides space between the image and the `<ul>` element below it.

When we add these new styles to our existing Speakers page styles (using the speaker-info class as a qualifying selector for the `<img>` elements), our CSS will look like this:

```css
.speaker-info img {
  border-radius: 50%;
  height: 130px;
  margin: -66px 0 22px 0;
  vertical-align: top;
}
```

## Step 5

Since we are using an aggressive negative margin on the `<img>` element within the `<div>` element with a class attribute value of speaker-info, we need to remove the padding on the top of that `<div>` element.

Previously we were using the padding property with a value of 22px 0, thus placing 22 pixels of padding on the top and bottom and 0 pixels of padding on the left and right of the `<div>` element. Let’s swap this property and value out for the padding-bottom property, as that’s the only padding we need to identify, and use a value of 22 pixels.

The new speaker-info class rule set looks like this:

```css
.speaker-info {
  border: 1px solid #dfe2e5;
  border-radius: 5px;
  margin-top: 88px;
  padding-bottom: 22px;
  text-align: center;
}
```

Now both our home and Speaker pages are looking pretty sharp.

## Step 6

Inline frames provide a great way to add dynamic content to a page. Let’s give this a shot by updating our Venue page with some maps.

Before adding any maps or inline frames, let’s first prepare our Venue page for a two-column grid. Below the leading section of the page we’ll add a `<section>` element with the class attribute value of row to identify a new section of the page, and we’ll include some general styles, such as a white background and some vertical padding.

Directly inside this `<section>` element let’s add a `<div>` element with the class attribute value of grid. The class of grid centers our content on the page and prepares for the one-third and two-thirds columns to follow.

So far the main section of our venue.html file looks like this:

```html
<section class="row">
  <div class="grid">...</div>
</section>
```

## Step 7

Within the `<div>` element with the class attribute value of grid we’ll have two new sections, one for the conference venue and one for the conference hotel. Let’s add two new `<section>` elements and give each of these `<section>` elements a unique class that corresponds to its content. We’ll use these classes to add margins to the bottom of each section.

Our HTML should now look like this:

```html
<section class="row">
  <div class="grid">
    <section class="venue-theatre">...</section>

    <section class="venue-hotel">...</section>
  </div>
</section>
```

## Step 8

Now that we have a few classes to work with, let’s create a new section within our main.css file for Venue page styles. We’ll add a 66-pixel margin to the bottom of the `<section>` element with the class attribute value of venue-theatre to insert some space between it and the `<section>` element below it.

Then, we’ll add a 22-pixel margin to the bottom of the `<section>` element with the class attribute value of venue-hotel to provide some space between it and the `<footer>` element below it.

The new venue section within the main.css file looks like the following:

```css
/*
  ========================================
  Venue
  ========================================
*/

.venue-theatre {
  margin-bottom: 66px;
}
.venue-hotel {
  margin-bottom: 22px;
}
```

The `<section>` element with the class attribute value of venue-hotel has a smaller bottom margin than the `<section>` element with the class attribute value of venue-theatre because it sits next to the padding from the bottom of the `<section>` element with the class attribute of row. Adding that margin and padding together gives us the same value as the bottom margin on the `<section>` element with the class attribute value of venue-theatre.

## Step 9

Now it’s time to create the two columns within each of the new `<section>` elements. We’ll start by adding a `<div>` element with a class attribute value of col-1-3 to establish a one-third column. After it we’ll add an `<iframe>` element with a class attribute value of col-2-3 to establish a two-thirds column.

Keeping in mind that the column classes make both the `<div>` and `<iframe>` elements inline-block elements, we need to remove the empty space that will appear between them. To do so we’ll open an HTML comment directly after the closing `<div>` tag, and we’ll close the HTML comment immediately before the opening `<iframe>` tag.

In all, our HTML for the columns looks like this:

```html
<section class="row">
  <div class="grid">
    <section class="venue-theatre">
      <div class="col-1-3"></div>
      <!--

      --><iframe class="col-2-3"></iframe>
    </section>

    <section class="venue-hotel">
      <div class="col-1-3"></div>
      <!--
      --><iframe class="col-2-3"></iframe>
    </section>
  </div>
</section>
```

## Step 10

Within each of the `<div>` elements with a class attribute value of col-1-3 let’s add the venue’s name within an `<h2>` element, followed by two `<p>` elements. In the first `<p>` element let’s include the venue’s address, and in the second `<p>` element let’s include the venue’s website (within an anchor link) and phone number.

Within each of the paragraphs, let’s use the line-break element, `<br>`, to place breaks within the address and in between the website and phone number.

For the `<section>` element with the class attribute value of venue-theatre, the HTML looks like this:

```html
<section class="venue-theatre">
  <div class="col-1-3">
    <h2>Chicago Theatre</h2>
    <p>
      175 N State St <br />
      Chicago, IL 60601
    </p>
    <p>
      <a href="http://www.thechicagotheatre.com/">thechicagotheatre.com</a>
      <br />
      (312) 462-6300
    </p>
  </div>
  <!--

  --><iframe class="col-2-3"></iframe>
</section>
```

The same pattern shown here for the theatre should also be applied to the hotel (using, of course, the proper address, website, and phone number).

## Step 11

We can search for these addresses in Google Maps. Once we locate an address and create a customized map, we have the ability to embed that map into our page. Following the instructions on Google Maps for how to share and embed a map will provide us with the HTML for an `<iframe>` element.

Let’s copy the HTML—`<iframe>` element, src attribute, and all—onto our page where our existing `<iframe>` element resides. We’ll do this for each location, using two different `<iframe>` elements.

In copying over the `<iframe>` element from Google Maps we need to make sure we preserve the class attribute and value, col-2-3, from our existing `<iframe>` element. We also need to be careful not to harm the HTML comment that closes directly before our opening `<iframe>` tag.

Looking directly at the `<section>` element with the class attribute value of venue-theatre again, the HTML looks like this:

```html
<section class="venue-theatre">
  <div class="col-1-3">
    <h2>Chicago Theatre</h2>
    <p>
      175 N State St <br />
      Chicago, IL 60601
    </p>
    <p>
      <a href="http://www.thechicagotheatre.com/">thechicagotheatre.com</a>
      <br />
      (312) 462-6300
    </p>
  </div>
  <!--

  --><iframe
    class="col-2-3"
    src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcbfad6!2schicago+theatre!5e0!3m2!1sen!2sus!4v1388701393606"
  ></iframe>
</section>
```

## Step 12

Lastly, we’ll want to make sure that both `<iframe>` elements that reference Google Maps share the same height. To do this, we’ll create a new class, venue-map, and apply it to each of the `<iframe>` elements alongside the existing col-2-3 class attribute value.

The HTML for the `<section>` element with the class attribute value of venue-theatre now looks like this:

```html
<section class="venue-theatre">
  <div class="col-1-3">
    <h2>Chicago Theatre</h2>
    <p>
      175 N State St <br />
      Chicago, IL 60601
    </p>
    <p>
      <a href="http://www.thechicagotheatre.com/">thechicagotheatre.com</a>
      <br />
      (312) 462-6300
    </p>
  </div>
  <!--

  --><iframe
    class="venue-map col-2-3"
    src="https://www.google.com/maps/embed?pb=!1m5!3m3!1m2!1s0x880e2ca55810a493%3A0x4700ddf60fcbfad6!2schicago+theatre!5e0!3m2!1sen!2sus!4v1388701393606"
  ></iframe>
</section>
```

Once the venue-map class is applied to each `<iframe>` element, let’s create the venue-map class rule set within our main.css file. It includes the height property with a value of 264 pixels.

The venue-map class rule set looks like this:

```css
.venue-map {
  height: 264px;
}
```

We now have a Venue page, complete with maps for the different locations of our conference.

## Summary

Alongside text, media is one of the largest parts of the web. Use of images, audio, and video has only grown over recent years, and it isn’t likely to slow down. Now we know how to incorporate these forms of media into our designs and how we can use them to enrich the content on our websites.

Within this lesson we covered the following:

- The best ways to add images, audio clips, videos, and inline frames to a page
- Different ways to position images in different situations

We’re coming into the homestretch of learning HTML and CSS, with only a few more components left to introduce. Next on the list are forms.
