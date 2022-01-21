> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

As web designers and front-end developers, we have the luxury of attending a
number of great conferences dedicated to our craft. We’re going to make up our
own conference, Styles Conference, and build a website for it throughout the
following lessons.

## Step 1

Let’s open our text editor, create a new file named index.html, and save it to a
location we won’t forget. I’m going to create a folder on my Desktop named
“styles- conference” and save this file there; feel free to do the same.

## Step 2

Within the index.html file, let’s add the document structure, including the
`<!DOCTYPE html>` document type and the `<html>`, `<head>`, and `<body>`
elements.

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body></body>
</html>
```

## Step 3

Inside the `<head>` element, let’s add `<meta>` and `<title>` elements. The
`<meta>` element should include the proper charset attribute and value, while
the `<title>` element should contain the title of the page—let’s say “Styles
Conference.”

```html
<head>
  <meta charset="utf-8" />
  <title>Styles Conference</title>
</head>
```

## Step 4

Inside the `<body>` element, let’s add `<h1>` and `<p>` elements. The `<h1>`
element should include the heading we wish to include—let’s use “Styles
Conference” again—and the `<p>` element should include a simple paragraph to
introduce our conference.

```html
<body>
  <h1>Styles Conference</h1>
  <p>
    Every year the brightest web designers and front-end developers descend on
    Chicago to discuss the latest technologies. Join us this August!
  </p>
</body>
```

## Step 5

Now it’s time to see how we’ve done! Let’s go find our index.html file (mine is
within the “styles-conference” folder on my Desktop). Double-clicking this file
or dragging it into a web browser will open it for us to review.

## Step 6

Inside of our “styles-conference” folder, let’s create a new folder named “assets.” We’ll store all of the assets for our website, such as our style sheets, images, videos, and so forth, in this folder. For our style sheets, let’s go ahead and add another folder named “stylesheets” inside the “assets” folder.

## Step 7

Using our text editor, let’s create a new file named main.css and save it within the “stylesheets” folder we just created.

## Step 8

Looking at our index.html file in a web browser, we can see that the `<h1>` and `<p>` elements each have default CSS styles. Specifically, they each have a unique font size and spacing around them. Using Eric Meyer’s reset, we can tone down these styles, allowing each of them to be styled from the same base. To do this let’s head over to Eric’s website, copy his reset, and paste it at the top of our main.css file.

```css
/* http://meyerweb.com/eric/tools/css/reset/ 2. v2.0 | 20110126
  License: none (public domain)
*/

* {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}
body {
  line-height: 1;
}
ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
```

## Step 9

With our main.css file starting to take shape, let’s connect it to our index.html file. Opening the index.html file in our text editor, let’s add the `<link>` element within our `<head>` element, just after the `<title>` element.

## Step 10

Because we’ll be referencing a style sheet within the `<link>` element, let’s add the relation attribute, rel, with a value of stylesheet.

## Step 11

We also want to include a hyperlink reference, using the href attribute, to our main.css file. Remember, our main.css file is saved within the “stylesheets” folder, which is inside the “assets” folder. Therefore, the href attribute value, which is the path to our main.css file, needs to be assets/stylesheets/main.css.

```html
<head>
  <meta charset="utf-8" />
  <title>Styles Conference</title>
  <link rel="stylesheet" href="assets/stylesheets/main.css" />
</head>
```

Time to check out our work and see if our HTML and CSS are getting along. Now opening our index.html file (or refreshing the page if it’s already opened) within a web browser should show slightly different results than before.
