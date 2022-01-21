> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

With an understanding of how to build forms in place, let’s create a registration page for our Styles Conference website so that we can begin to gather interest and sell tickets for the event.

## Step 1

umping into our register.html file, we’ll begin by following the same layout pattern we used on our Speakers and Venue pages. This includes adding a `<section>` element with a class attribute value of row just below the registration lead-in section and nesting a `<div>` element with a class attribute value of grid directly inside the `<section>` element.

Our code just below the lead-in section for the Register page should look like this:

```html
<section class="row">
  <div class="grid">...</div>
</section>
```

As a refresher, the class attribute value of row adds a white background and provides some vertical padding, while the class attribute value of grid centers our content in the middle of the page and provides some horizontal padding.

## Step 2

Inside the `<div>` element with a class attribute value of grid we’re going to create two columns, one covering two-thirds of the page width and one covering one-third of the page width. The two-thirds column will be a `<section>` element on the left- hand side that tells users why they should register for our conference. The one-third column, then, will be a `<form>` element on the right-hand side providing a way for users to register for our conference.

We’ll add these two elements, and their corresponding col-2-3 and col-1-3 classes, directly inside the `<div>` element with a class attribute value of grid. Since both of these elements will be inline-block elements, we need to open a comment directly after the two-thirds column closing tag and then close that comment directly before the one-third column opening tag.

In all, our code should look like this:

```html
<section class="row">
  <div class="grid">
    <section class="col-2-3">...</section>
    <!--

    -->
    <form class="col-1-3">...</form>
  </div>
</section>
```

## Step 3

Now, inside our two-thirds column let’s add some details about our event and why it’s a good idea for aspiring designers and front-end developers to attend. We’ll do so using a handful of different heading levels (along with their pre-established styles), a paragraph, and an unordered list.

In our `<section>` element with a class attribute value of col-2-3, the code should look like this:

```html
<section class="col-2-3">
  <h2>Purchase a Conference Pass</h2>
  <h5>$99 per Pass</h5>

  <p>
    Purchase your Styles Conference pass using the form to the right. Multiple
    passes may be purchased within the same order, so feel free to bring a
    friend or two along. Once your order is finished we&#8217;ll follow up and
    provide a receipt for your purchase. See you soon!
  </p>

  <h4>Why Attend?</h4>

  <ul>
    <li>Over twenty world-class speakers</li>
    <li>One full day of workshops and two full days of presentations</li>
    <li>Hosted at The Chicago Theatre, a historical landmark</li>
    <li>August in Chicago is simply amazing</li>
  </ul>
</section>
```

## Step 4

Currently our unordered list doesn’t have any list item markers. All of the browser default styles have been turned off by the CSS reset we added all the way back in Lesson 1. Let’s create some custom styles specifically for this unordered list.

To do so, let’s add a class attribute value of why-attend to the unordered list.

```html
<ul class="why-attend">
  ...
</ul>
```

With a class available to add styles to, let’s create a new section for Register page styles at the bottom of our main.css file. Within this section let’s use the class to select the unordered list and add a list-style of square and some bottom and left margins.

The new section at the bottom of our main.css file should look like this:

```css
/*
  ========================================
  Register
  ========================================
*/

.why-attend {
  list-style: square;
  margin: 0 0 22px 30px;
}
```

## Step 5

The details section of our registration page is complete, so now it’s time to address our registration form. We’ll start by adding the action and method attributes to the `<form>` element. Since we haven’t set up our form processing, these attributes will simply serve as placeholders and will need to be revisited.

The code for our `<form>` element should look like this:

```html
<form class="col-1-3" action="#" method="post">...</form>
```

## Step 6

Next, inside the `<form>` element we’ll add a `<fieldset>` element. Inside the `<fieldset>` element we’ll add a series of `<label>` elements that wrap a given form control.

We want to collect a user’s name, email address, number of desired conference passes, and any potential comments. The name, email address, and number of conference passes are required fields, and we’ll want to make sure we use the appropriate elements and attributes for each form control.

With a mix of different input types, select menus, textareas, and attributes, the code for our form should look like the following:

```html
<form class="col-1-3" action="#" method="post">
  <fieldset>
    <label>
      Name
      <input type="text" name="name" placeholder="Full name" required />
    </label>

    <label>
      Email
      <input type="email" name="email" placeholder="Email address" required />
    </label>

    <label>
      Number of Passes
      <select name="quantity" required>
        <option value="1" selected>1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
    </label>

    <label>
      Comments
      <textarea name="comments"></textarea>
    </label>
  </fieldset>

  <input type="submit" name="submit" value="Purchase" />
</form>
```

Here we can see each form control nested within a `<label>` element. The Name form control uses an `<input>` element with a type attribute value of text, while the Email form control uses an `<input>` element with a type attribute value of email.

Both the Name and Email form controls include the required Boolean attribute and a placeholder attribute.

The Number of Passes form control uses the `<select>` element and nested `<option>` elements. The `<select>` element itself includes the required Boolean attribute, and the first `<option>` element includes the selected Boolean attribute.

The Comments form control uses the `<textarea>` element without any special modifications. And lastly, outside of the `<fieldset>` element is the submit form control, which is formed by an `<input>` element with a type attribute value of submit.

## Step 7

With the form in place, it’s time to add styles to it. We’ll begin with a few default styles on the `<form>` element itself and on the `<input>`, `<select>`, and `<textarea>` elements.

Within the register section of our main.css file we’ll want to add the following styles:

```css
form {
  margin-bottom: 22px;
}
input,
select,
textarea {
  font: 300 16px/22px "Lato", "Open Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
}
```

We’ll start by placing a 22-pixel margin on the bottom of our form to help vertically space it apart from other elements. Then we’ll add some standard font-based styles—including weight, size, line-height, and family—for all of the `<input>`, `<select>`, and `<textarea>` elements.

By default, every browser has its own interpretation of how the styles for form controls should appear. With this in mind, we have repeated the font-based styles from our `<body>` element to ensure that our styles remain consistent.

## Step 8

Let’s add some styles to the elements within the `<fieldset>` element. Since we may add additional `<fieldset>` elements later on, let’s add a class attribute value of register-group to our existing `<fieldset>` element, and from there we can apply unique styles to the elements nested within it.

```html
<fieldset class="register-group">...</fieldset>
```

Once the register-group class attribute value is in place, we’ll add a few styles to the elements nested within the `<fieldset>` element. These styles will appear in our main.css file, below the existing form styles.

```css
.register-group label {
  color: #648880;
  cursor: pointer;
  font-weight: 400;
}
.register-group input,
.register-group select,
.register-group textarea {
  border: 1px solid #c6c9cc;
  border-radius: 5px;
  color: #888;
  display: block;
  margin: 5px 0 27px 0;
  padding: 5px 8px;
}
.register-group input,
.register-group textarea {
  width: 100%;
}
.register-group select {
  height: 34px;
  width: 60px;
}
.register-group textarea {
  height: 78px;
}
```

You’ll notice that most of these properties and values revolve around the box model, which we covered in Lesson 4. We’re primarily setting up the size of different form controls, ensuring that they are laid out appropriately. Aside from adding some box model styles, we’re adjusting the color and font-weight of a few elements.

## Step 9

So far, so good: our form is coming together quite nicely. The only remaining element yet to be styled is the submit button. As it’s a button, we actually have some existing styles we can apply here. If we think back to our home page, our hero section contained a button that received some styles by way of the btn class attribute value.

Let’s add this class attribute value, btn, along with a new class attribute value of btn-default to our submit button. Specifically we’ll use the class name of btn-default since this button is appearing on a white background and will be the default style for buttons moving forward.

```html
<input class="btn btn-default" type="submit" name="submit" value="Purchase" />
```

Now our submit button has some shared styles with the button on the home page. We’ll use the btn-default class attribute value to then apply some new styles to our submit button specifically.

Going back to the buttons section of our main.css file, let’s add the following:

```css
.btn-default {
  border: 0;
  background: #648880;
  padding: 11px 30px;
  font-size: 14px;
}
.btn-default:hover {
  background: #77a198;
}
```

> These new styles, which define the size and background of our submit button, are then combined with the existing btn class styles to create the final presentation of our submit button.

Our Register page is finished, and attendees can now begin to reserve their tickets.

## Summary

Forms play a large role in how users interact with, provide information to, and take action on websites. We’ve taken all the right steps to learn not only how to mark up forms but also how to style them.

To quickly recap, within this lesson we discussed the following:

- How to initialize a form
- Ways to obtain text-based information from users
- Different elements and methods for creating multiple choice options and menus
- Which elements and attributes are best used to submit a form’s data for processing
- How best to organize forms and give form controls structure and meaning
- A handful of attributes that help collect more qualified data

Our understanding of HTML and CSS is progressing quite nicely, and we only have one more component to learn: tables. In the next chapter, we’ll take a look at how to organize and present data with tables.
