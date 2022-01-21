# Introduction to CSS

## Table of Contents

| No. | Topic                                                     |
| :-: | --------------------------------------------------------- |
|  1  | [The Cascade](#the-cascade)                               |
|  2  | [Specificity](#specificity)                               |
|  3  | [Common CSS Property Values](#common-css-property-values) |
|  4  | [Comment Within CSS](#comment-within-css)                 |

<br/><br/>

## The Cascade

The core of CSS, as emphasized by the name: <em>Cascading</em> Style Sheets is the cascade, and it determines how to find the value to apply for each property for each document element.

Within CSS, all styles cascade from the top of a style sheet to the bottom, allowing different styles to be added or overwritten as the style sheet progresses.

```css
p {
  background: orange;
  font-size: 24px;
}
p {
  /* this background property will take precedence and overwrites the previous declaration making all paragraph background green */
  background: green;
}
```

The cascade also works with properties inside individual selectors too:

```css
p {
  background: orange;
  background: green;
}
```

<br/><br/>

## Specificity

If there are two or more CSS rules that point to the same element, the selector with the highest specificity value will "win", and its style declaration will be applied to that HTML element.

The ID selector has a higher specificity weight than the class selector, and the class selector has a higher specificity weight than the type selector.

`Inline > ID > Class > Type`

```html
<!-- 1. Inline style - highest priority hence text will appear in pink -->
<p id="demo" class="test" style="color: pink">Hello World!</p>
```

```css
/* 2. ID has second priority */
#demo {
  color: blue;
}

/* 3. Class is third */
.test {
  color: green;
}

/* 4. Type selector has the lowest priority */
p {
  color: red;
}
```

<br/><br/>

## Common CSS Property Values

### Colors

Colors are specified using predefined color names, or RGB, HEX, HSL, RGBA, HSLA values. Example:

<table>
    <thead>
        <tr>
            <th>Color</th>
            <th>Name</th>
            <th>Hex Values</th>
            <th>RGB Values</th>
            <th>HSL Values</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>
                <div style="background-color: black; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>black</td>
            <td>#000000</td>
            <td>rbg(0, 0, 0)</td>
            <td>hsl(0, 0%, 0%)</td>
        </tr>
        <tr>
            <td>
                <div style="background-color: silver; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>silver</td>
            <td>#c0c0c0</td>
            <td>rgb(192, 192, 192)</td>
            <td>hsl(0, 0%, 75%)    </td>
        </tr>
        <tr>
            <td>
                <div style="background-color: gray; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>gray</td>
            <td>#808080</td>
            <td>rgb(128, 128, 128)</td>
            <td>hsl(0, 0%, 50%)    </td>
        </tr>
        <tr>
            <td>
                <div style="background-color: white; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>white</td>
            <td>#ffffff</td>
            <td>rgb(255, 255, 255)</td>
            <td>hsl(0, 100%, 100%) </td>
        </tr>
        <tr>
            <td>
                <div style="background-color: maroon; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>maroon</td>
            <td>#800000</td>
            <td>rgb(128, 0, 0)</td>
            <td>hsl(0, 100%, 25%)  </td>
        </tr>
        <tr>
            <td>
                <div style="background-color: red; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>red</td>
            <td>#ff0000</td>
            <td>rgb(255,0, 0) </td>
            <td>hsl(0, 100%, 50%)  </td>
        </tr>
        <tr>
            <td>
                <div style="background-color: purple; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>purple</td>
            <td>#800080</td>
            <td>rgb(128, 0, 128)</td>
            <td>hsl(300, 100%, 25%)</td>
        </tr>
        <tr>
            <td>
                <div style="background-color: fuchsia; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>fuchsia</td>
            <td>#ff00ff</td>
            <td>rgb(255, 0, 255)</td>
            <td>hsl(300, 100%, 50%)</td>
        </tr>
        <tr>
            <td>
                <div style="background-color: green; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>green</td>
            <td>#008000</td>
            <td>rgb(0, 128, 0)</td>
            <td>hsl(120, 100%, 25%)</td>
        </tr>
        <tr>
            <td>
                <div style="background-color: olive; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>olive</td>
            <td>#808000</td>
            <td>rgb(128, 128, 0)</td>
            <td>hsl(60, 100%, 25%) </td>
        </tr>
        <tr>
            <td>
                <div style="background-color: lime; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>lime</td>
            <td>#00ff00</td>
            <td>rgb(0, 255, 0)</td>
            <td>hsl(120, 100%, 50%)</td>
        </tr>
        <tr>
            <td>
                <div style="background-color: yellow; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>yellow</td>
            <td>#ffff00</td>
            <td>rgb(255, 255, 0)</td>
            <td>hsl(60, 100%, 50%) </td>
        </tr>
        <tr>
            <td>
                <div style="background-color: navy; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>navy</td>
            <td>#000080</td>
            <td>rgb(0, 0, 128)</td>
            <td>hsl(240, 100%, 25%)</td>
        </tr>
        <tr>
            <td>
                <div style="background-color: blue; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>blue</td>
            <td>#0000ff</td>
            <td>rgb(0, 0, 255)</td>
            <td>hsl(240, 100%, 50%)</td>
        </tr>
        <tr>
            <td>
                <div style="background-color: teal; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>teal</td>
            <td>#008080</td>
            <td>rgb(0, 128, 128)</td>
            <td>hsl(180, 100%, 25%)</td>
        </tr>
        <tr>
            <td>
                <div style="background-color: aqua; border-radius: 6px; min-height: 36px; min-width: 36px;" ></div>
            </td>
            <td>aqua</td>
            <td>#00ffff</td>
            <td>rgb(0, 255, 255)</td>
            <td>hsl(180, 100%, 50%)</td>
        </tr>
    </tbody>
</table>

<br/>
### Lengths

Length values in CSS come in two different forms, absolute and relative, each of which
uses different units of measurement. Below are some of the more commonly used ones:

1. Absolute Lengths (i.e. pixel) represented by the `px` unit notation.

   ```css
   p {
     font-size: 14px;
   }
   ```

2. Relative Lengths

   - Percentages

   Percentage lengths are defined in relation to the length of its parent element, the element it is nested within.

   ```css
   .col {
     width: 50%;
   }
   ```

   - Em

   A single `em` unit is equivalent to an element’s font size. So, for example, if an element has a font size of 14px and a width set to 5em, the width would equal 70px (14 px \* 5).

   ```css
   .banner {
     font-size: 14px;
     width: 5em;
   }
   ```

   > When a font size is not explicitly stated, the em unit will be relative to the font size of the closest parent element with a stated font size. All HTML files default font size is `16px`.

<br/><br/>

## Comments within CSS

CSS comments start with `/*` and end with `*/`.

```css
p {
  /* this is a comment */
}
```
