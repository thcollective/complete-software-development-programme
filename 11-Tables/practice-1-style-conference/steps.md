> This amazing exercise is part of the 'Style Conference' website build practice extracted from [Learn to Code HTML & CSS](https://learn.shayhowe.com/html-css/). All credit goes to the creator of the resources.

Now that we know how to create and style tables, let’s wrap up the last remaining page of our Styles Conference website, the schedule.

## Step 1

We’ll begin our Schedule page by opening up the schedule.html file and adding a `<section>` element with a class attribute value of row, much like we’ve done with all of the other subpages. Within this new `<section>` element let’s also add a `<div>` element with a class attribute value of container.

```html
/
<section class="row">
  <div class="container">...</div>
</section>
```

With these elements and classes we’ve created a new section of the page with a white background and vertical padding, and we’ve centered our content on the page. What’s different here from all of the other subpages is the container class attribute value in place of the grid class attribute value on the `<div>` element. Since we’re not using any of the col-based classes we’ll forgo the grid class attribute value in favor of the container class attribute value.

## Step 2

Within the new section we’ll add three tables, one for each day of the conference. The tables will display the events of each day using three columns and multiple rows and will include a table head and table body.

To get started let’s outline the structure of the first table, including the `<table>`, `<thead>`, and `<tbody>` elements.

```html
<section class="row">
  <div class="container">
    <table>
      <thead>
        ...
      </thead>
      <tbody>
        ...
      </tbody>
    </table>
  </div>
</section>
```

## Step 3

Currently, even though our first table doesn’t contain any data, it does have some styles applied to it. Specifically, the reset we added back in Lesson 1 to tone down all of the default browser styles has added the border-collapse property with a value of collapse and the border-spacing property with a value of 0 to the table. We want these styles, so we’ll leave them alone; however, let’s create a new section in our main.css file to add some additional styles.

In our new section of styles specifically for the Schedule page (which will appear just below the styles for the Speakers page), let’s set our `<table>` elements to have a width of 100% and a bottom margin of 44 pixels.

Then, using the :last-child pseudo-class selector to identify the last `<table>` element within the section, let’s set its bottom margin to 0 pixels. Doing so prevents this table from conflicting with the bottom padding belonging to the `<section>` element with a class attribute value of row.

So far, the new section within our main.css file looks like this:

```css
/*
  ========================================
  Schedule
  ========================================
*/

table {
  margin-bottom: 44px;
  width: 100%;
}
table:last-child {
  margin-bottom: 0;
}
```

## Step 4

Now let’s add some data to our table. We’ll begin with the first day of our conference, the workshop day on August 24.

Within the `<thead>` element of the table let’s add a `<tr>` element. The first cell within the row will be a `<th>` element noting the focus of the day: “Workshops” for this specific day. Since the `<th>` element is the heading for the row we’ll also add the scope attribute with a value of row to it.

After the `<th>` element comes a `<td>` element with the date, “August 24th” in this case. Now, more often than not we’ll have three columns, the first being a table heading that identifies a time of day and the second two columns being regular table cells that identify speakers for that given time. Since this row doesn’t feature two separate speakers we’ll want to add the colspan attribute with a value of 2 to the `<td>` element, forcing it to span two columns.

Our code for the table now looks like this:

```html
<table>
  <thead>
    <tr>
      <th scope="row">Workshops</th>
      <td colspan="2">August 24th</td>
    </tr>
  </thead>
  <tbody>
    ...
  </tbody>
</table>
```

## Step 5

Inside the `<tbody>` element let’s fill out the day’s activities. We’ll begin by adding a `<tr>` element with a `<th>` and a `<td>` element directly inside the row.

On the `<th>` element, and all subsequent `<th>` elements, we’ll add the scope attribute with a value of row to semantically identify this element as the header for the row. Then within the `<th>` element let’s add a `<time>` element that shows the time of the first activity of the day, “8:30 AM” in this case. We’ll also include a datetime attribute on the `<time>` element with a value noting the time in hours, minutes, and seconds, 08:30:00.

In the `<td>` element that follows the `<th>` element we’ll include the activity name (since there aren’t any speakers at this time), which is “Registration” in this case. Since there is only one activity at this time we’ll also include the colspan attribute with a value of 2 on the `<td>` element.

In all, the code for our first table looks like this:

```html
<table>
  <thead>
    <tr>
      <th scope="row">Workshops</th>
      <td colspan="2">August 24th</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <time datetime="08:30:00">8:30 AM</time>
      </th>
      <td colspan="2">Registration</td>
    </tr>
  </tbody>
</table>
```

## Step 6

For the second row within the `<tbody>` element let’s add a `<tr>` element just below our previous row. Then let’s add a `<th>` element with the scope attribute with a value of row, and again add a `<time>` element with the appropriate time and datetime attribute value within that `<th>` element.

After the `<th>` element let’s add two `<td>` elements for the two speakers presenting at that time. Directly inside each `<td>` element we’ll add an `<a>` element, which will link back to where that speaker is positioned on the Speakers page. Remember, we added id attributes with each speaker’s name to the parent elements for each speaker. Using that id attribute value preceded by the speakers.html filename and a pound/hash sign, #, we can link directly to that speaker’s talk description and biography on the Speakers page.

Within the `<a>` element we’ll include an `<h4>` element with the speaker’s name followed by the talk title.

The code for the first two workshops looks like this:

```html
<table>
  <thead>
    <tr>
      <th scope="row">Workshops</th>
      <td colspan="2">August 24th</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <time datetime="08:30:00">8:30 AM</time>
      </th>
      <td colspan="2">Registration</td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="09:00:00">9:00 AM</time>
      </th>
      <td>
        <a href="speakers.html#adam-connor">
          <h4>Adam Connor</h4>
          Lights! Camera! Interaction! Design Inspiration from Filmmakers
        </a>
      </td>
      <td>
        <a href="speakers.html#jennifer-jones">
          <h4>Jennifer Jones</h4>
          What Designers Can Learn from Parenting
        </a>
      </td>
    </tr>
  </tbody>
</table>
```

## Step 7

From here, we can repeat this pattern for each activity and speaker to finish our first table and then add the next two tables for the second two days of the conference.

While doing this, keep in mind that the table head will always include a table heading noting the events of the day and a table cell spanning two columns showing the date.

Then, within the body of each table, every row will have a table heading that shows the time of day. After the table heading will be an activity, a speaker, or multiple speakers. Activities without speakers will reside within a single `<td>` element that spans two columns. If only one speaker is presenting at a certain time, that speaker will reside within a single `<td>` element that spans two columns as well, `<a>` and `<h4>` elements and all.

If there are two speakers for a given time then each speaker will reside within his or her own `<td>` element, just as before.

The full code for all three tables can be found at at the end of this exercise. For reference, the table for the first day, which includes lunch and two more speakers, looks like this:

```html
<table>
  <thead>
    <tr>
      <th scope="row">Workshops</th>
      <td colspan="2">August 24th</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <time datetime="08:30:00">8:30 AM</time>
      </th>
      <td colspan="2">Registration</td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="09:00:00">9:00 AM</time>
      </th>
      <td>
        <a href="speakers.html#adam-connor">
          <h4>Adam Connor</h4>
          Lights! Camera! Interaction! Design Inspiration from Filmmakers
        </a>
      </td>
      <td>
        <a href="speakers.html#jennifer-jones">
          <h4>Jennifer Jones</h4>
          What Designers Can Learn from Parenting
        </a>
      </td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="12:30:00">12:30 PM</time>
      </th>
      <td colspan="2">Lunch</td>
    </tr>
    <tr>
      <th scope="row">
        <time datetime="14:00">2:00 PM</time>
      </th>
      <td>
        <a href="speakers.html#tessa-harmon">
          <h4>Tessa Harmon</h4>
          Crafty Coding: Generating Knitting Patterns
        </a>
      </td>
      <td>
        <a href="speakers.html#russ-unger">
          <h4>Russ Unger</h4>
          From Muppets to Mastery: Core UX Principles from Mr. Jim Henson
        </a>
      </td>
    </tr>
  </tbody>
</table>
```

## Step 8

Now that our tables are taking shape, it’s time to add a little style to them. Let’s begin by adding some general styles to the `<th>` and `<td>` elements. For both the `<th>` and `<td>` elements let’s add a bottom padding of 22 pixels and a vertical alignment of top. For `<th>` elements specifically let’s add a right padding of 45 pixels, a text alignment of right, and a width of 20%. Then, for `<td>` elements let’s add a width of 40%.

Below our existing table and schedule styles, our code should look like this:

```css
th,
td {
  padding-bottom: 22px;
  vertical-align: top;
}
th {
  padding-right: 45px;
  text-align: right;
  width: 20%;
}
td {
  width: 40%;
}
```

## Step 9

Next, let’s style the table head and the elements within the table head. We’ll set a line-height of 44 pixels on the `<thead>` element only, and a color of #648880 and a font-size of 24 pixels on all `<th>` elements nested within a `<thead>` element. Our new styles include the following:

```css
thead {
  line-height: 44px;
}
thead th {
  color: #648880;
  font-size: 24px;
}
```

## Step 10

The table head is looking good, so let’s also add some styles for the table body. We’ll begin with `<th>` elements nested within the `<tbody>` element: changing their color, adding some font- and text-based styles, and adding some top padding.

```css
tbody th {
  color: #a9b2b9;
  font-size: 14px;
  font-weight: 400;
  padding-top: 22px;
  text-transform: uppercase;
}
```

## Step 11

We’ll also add some styles to `<td>` elements nested within the `<tbody>` element, beginning with a top border and padding. We’ll style the `<td>` elements that span only one column by adding 15 pixels of right padding to those that form the left column and 15 pixels of left padding to those that form the right column. Doing so puts a total of 30 pixels of padding between the two columns while keeping each cell the same size. We don’t need to apply any left or right padding to the `<td>` elements that span two columns.

We’ll add all of these horizontal paddings using the :first-of-type, :last-of-type, and :only-of-type pseudo-class selectors. These pseudo-class selectors work very similarly to the :last-child pseudo-class selector we’ve used before.

The :first-of-type pseudo-class selector will select the first element of its type within a parent element. In our case, the td:first-of-type selector will select the first `<td>` element within a `<tr>` element. Then, the :last-of-type pseudo-class selector will select the last element of its type within a parent element.

Again, in our case, the td:last-of-type selector will select the last `<td>` element within a `<tr>` element. Lastly, the :only-of-type pseudo-class selector will select an element if it’s the only element of its type within a parent element. Here, the td:only-of-type selector will only select a `<td>` element if it’s the only `<td>` element within a `<tr>` element, such as when a `<td>` element spans two columns.

Our styles are a little complex, but they’re flexible in addressing the needs of our table. These new styles include the following:

```css
tbody td {
  border-top: 1px solid #dfe2e5;
  padding-top: 21px;
}
tbody td:first-of-type {
  padding-right: 15px;
}
tbody td:last-of-type {
  padding-left: 15px;
}
tbody td:only-of-type {
  padding-left: 0;
  padding-right: 0;
}
```

## Step 12

Our schedule—and the tables that display it—is coming together. Let’s adjust a few of the styles on existing elements to clean up the design. We’ll start by making all of the links within the table a medium gray. If we target only the `<a>` elements within a table, our headings with the speaker’s name within the links will remain green, while the talk titles will be gray, creating a nice contrast between the two.

While we’re adjusting the styles of the entries for the talks, let’s also remove the bottom margin on the `<h4>` elements within the table, allowing the speaker’s name to sit closer to her or his title. We can implement these styles with the following code:

```css
table a {
  color: #888;
}
table h4 {
  margin-bottom: 0;
}
```

## Step 13

Lastly, let’s create some visual contrast among the different types of activities happening throughout the day. All of the talks look good with our latest changes. For all of the other activities, such as registration, lunch, and breaks (which are within the table body) as well as for the date (which is within the table header) let’s use a subtle gray.

We’ll do so by creating a new class, schedule-offset, and assigning a color of #a9b2b9 to it.

```css
.schedule-offset {
  color: #a9b2b9;
}
```

Once the class is in place, let’s add it to all of the `<td>` elements that span two columns and include either the day’s date or a designated activity—registration, lunch, or a break. Looking back to our table for the first day, the workshops day, the HTML will look like this:

```html
<table>
  <thead>
    <tr>
      <th scope="row">Workshops</th>
      <td class="schedule-offset" colspan="2">August 24th</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">
        <time datetime="08:30:00">8:30 AM</time>
      </th>
      <td class="schedule-offset" colspan="2">Registration</td>
    </tr>
    ...
    <tr>
      <th scope="row">
        <time datetime="12:30:00">12:30 PM</time>
      </th>
      <td class="schedule-offset" colspan="2">Lunch</td>
    </tr>
    ...
  </tbody>
</table>
```

Tables, which may appear simple on the surface, can be quite complex, and that is the case with our Styles Conference schedule. The good news is that our schedule is now complete, and it’s looking great.

## Summary

All right, we now know how to semantically lay out tabular data within HTML while also making it intuitive with CSS. Discussing tables was our last major hurdle in learning HTML and CSS, and we have now officially finished our Styles Conference website.

To review, within this lesson we covered the following:

- The best ways to semantically create tables
- How to make individual table cells span multiple columns or rows
- The structural elements that make up tables
- Different ways to style borders on a table, and how different border properties affect a table’s appearance
- How to vertically align text within a table

We’ve done a great job at putting all of our new skills to use, and we’re miles beyond where we were a few lessons ago. Let’s end on a high note, tie up some loose ends, and look at ways to write our best possible code.
