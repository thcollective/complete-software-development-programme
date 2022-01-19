# Media

## Table of Contents

| No. | Topic                                         |
| :-: | --------------------------------------------- |
|  1  | [Adding Images](#adding-images)               |
|  2  | [Adding Audio](#adding-audio)                 |
|  3  | [Adding Video](#adding-video)                 |
|  4  | [Adding Inline Frames](#adding-inline-frames) |

<br /><br />

## Adding Images

To add images to a page, we use the `<img>` inline element with a `src` attribute and value must be included to specify the source of the image.

A good practice is also to include the `alt` (alternative text) attribute, which describes the contents of an image, will help to improve SEO performance. The `alt` text will also be displayed in place of the image if for some reason the image is not available.

```html
<img
  src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_light_color_272x92dp.png"
  alt="Google logo"
/>
```

### Sizing Images

Images can be sized using the `width` and `height` properties in CSS. Specifying either a `width` or `height` will cause the other dimension to adjust automatically to maintain the aspect ratio of the image.

```css
img {
  width: 200px;
}
```

### Positioning Images

By default images are positioned as `inline` elements; however, their positions may be changed using CSS properties such as `float`, `display`, and so on.

```css
img {
  /* change the image to be a block-level element making the image appear on its own line. */
  display: block;
}
```

<br /><br />

## Adding Audio

As with the `<img>` element, the `<audio>` element accepts a source URL specified by the `src` attribute. Unlike the `<img>` element, though, the `<audio>` element requires both opening and closing tags:

```html
<audio src="jazz.mp3">
  <!-- any fallback content goes in here -->
</audio>
```

### Audio Attributes

Common `<audio>` attributes include `autoplay`, `controls`, and `loop`.

> By default, the `<audio>` element isn’t displayed on a page. If the `autoplay` attribute is present on the `<audio>` element, nothing will appear on the page, but the audio file will automatically play upon loading.

```html
<audio src="jazz.mp3" autoplay></audio>
```

To display the `<audio>` element, we can apply the `controls` attribute, which will display a browser’s default audio controls, including play and pause, seek, and volume controls.

```html
<audio src="jazz.mp3" controls></audio>
```

<br /><br />

## Adding Video

Adding video is very similar to adding audio using the `<video>` element. All of the same attributes (`src`, `autoplay`, `controls`, `loop` and so on) apply too.

```html
<video src="sample-music-video.mp4" controls>
  <!-- any fallback goes in here -->
</video>
```

### Poster Attribute

We can use the `poster` attribute to specify an image, in the form of a URL, to be shown before a video is played.

```html
<video
  src="sample-music-video.mp4"
  controls
  poster="sample-album-cover.jpg"
></video>
```

<br /><br />

## Adding Inline Frames

We can user the `<iframe>` element to add a HTML page within the current page. The `<iframe>` element accepts the URL of another HTML page within the `src` attribute value.

Many pages use the `<iframe>` element to embed media onto a page from an external website such as Google Maps, YouTube, and others.

```html
<!-- example to embed Google Maps -->
<iframe src="https://www.google.com/maps/embed?..."></iframe>

<!-- below extracted from Youtube embed option of a video: -->

<iframe
  width="560"
  height="315"
  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
  title="YouTube video player"
  frameborder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowfullscreen
></iframe>
```
