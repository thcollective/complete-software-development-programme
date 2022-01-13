# HTML Tables

## Table of Contents

| No. | Topic                                       |
| :-: | ------------------------------------------- |
|  1  | [Creating a Table](#creating-a-table)       |
|  2  | [Table Structure](#table-structure)         |
|  3  | [Combine Table Cells](#combine-table-cells) |

<br /><br />

Tables are a way to represent complex information in a grid format.

Tables are made up of rows and columns.

# Creating a Table

At a minimum a table must consist of `<table>`, `<tr>` (table row), and `<td>` (table data) elements. For greater structure and additional semantic value, tables may include the `<th>`(table header) element and a few other elements as well. When all of these elements are working together, they produce a solid table.

- Table
  Use the `<table>` element to initialize a table on a page.

```html
<table>
  ...
</table>
```

- Table Row
  Table rows may be added using the `<tr>` element.

```html
<table>
  <tr>
    ...
  </tr>
  <tr>
    ...
  </tr>
</table>
```

- Table Data
  Data cells may be added to the table via the table data, or `<td>`, element. Listing multiple `<td>` elements one after the other will create columns within a table row.

```html
<table>
  <tr>
    <td>Banana</td>
    <td>In Stock</td>
    <td>1</td>
    <td>$3.99</td>
  </tr>
  <tr>
    <td>Watermelon</td>
    <td>In Stock</td>
    <td>2</td>
    <td>$7.99</td>
  </tr>
</table>
```

- Table Header
  To designate a heading for a column or row of cells, the table header element, `<th>`, should be used. The `<th>` element works just like the `<td>` element in that it creates a cell for data.

```html
<table>
  <tr>
    <th>Fruit</th>
    <th>Availability</th>
    <th>Count</th>
    <th>Unit Price</th>
  </tr>
  <tr>
    <td>Banana</td>
    <td>In Stock</td>
    <td>1</td>
    <td>$3.99</td>
  </tr>
  <tr>
    <td>Watermelon</td>
    <td>In Stock</td>
    <td>2</td>
    <td>$7.99</td>
  </tr>
</table>
```

<br /><br />

# Table Structure

There are a few additional elements to help us organize the data and structure of a table. These elements include `<caption>`, `<thead>`, `<tbody>`, and `<tfoot>`.

- Table Caption
  The `<caption>` element provides a caption or title for a table. The `<caption>` element must come immediately after the opening `<table>` tag, and it is positioned at the top of a table by default.

```html
<table>
  <caption>
    Fruits Stock Availability
  </caption>
  <tr>
    <th>Fruit</th>
    <th>Availability</th>
    <th>Count</th>
    <th>Unit Price</th>
  </tr>
  <tr>
    <td>Banana</td>
    <td>In Stock</td>
    <td>1</td>
    <td>$3.99</td>
  </tr>
  <tr>
    <td>Watermelon</td>
    <td>In Stock</td>
    <td>2</td>
    <td>$7.99</td>
  </tr>
  ...
</table>
```

- Table Head, Body, & Foot
  The table head element, `<thead>`, wraps the heading row or rows of a table to denote the head. The table head should be placed at the top of a table, after any `<caption>` element and before any `<tbody>` element. The `<tbody>` element should contain the primary data within a table, while the `<tfoot>` element contains data that outlines the contents of a table.

  ```html
  <table>
    <caption>
      Fruits Stock Availability
    </caption>
    <thead>
      <tr>
        <th>Fruit</th>
        <th>Availability</th>
        <th>Count</th>
        <th>Unit Price</th>
        <th>Total Price</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Banana</td>
        <td>In Stock</td>
        <td>1</td>
        <td>$3.99</td>
        <td>$3.99</td>
      </tr>
      <tr>
        <td>Watermelon</td>
        <td>In Stock</td>
        <td>2</td>
        <td>$7.99</td>
        <td>$15.98</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <td>Grandtotal</td>
        <td></td>
        <td></td>
        <td></td>
        <td>$19.97</td>
      </tr>
    </tfoot>
  </table>
  ```

  <br /><br />

# Combine Table Cells

We can use the colspan and rowspan attributes to combine mutiple table cells.

```html
<table>
  <caption>
    Fruits Stock Availability
  </caption>
  <thead>
    <tr>
      <th>Fruit</th>
      <th>Availability</th>
      <th>Count</th>
      <th>Unit Price</th>
      <th>Total Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Banana</td>
      <td rowspan="2">In Stock</td>
      <td>1</td>
      <td>$3.99</td>
      <td>$3.99</td>
    </tr>
    <tr>
      <td>Watermelon</td>
      <!-- <td>In Stock</td> -->
      <td>2</td>
      <td>$7.99</td>
      <td>$15.98</td>
    </tr>
  </tbody>
  <tfoot>
    <tr>
      <td colspan="4">Grandtotal</td>
      <!-- <td></td> -->
      <!-- <td></td> -->
      <!-- <td></td> -->
      <td>$19.97</td>
    </tr>
  </tfoot>
</table>
```
