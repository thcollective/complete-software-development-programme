# HTML Forms

## Table of Contents

| No. | Topic                                       |
| :-: | ------------------------------------------- |
|  1  | [Initializing A Form](#initializing-a-form) |
|  2  | [Form Elements](#form-elements)             |
|  3  | [Description List](#description-list)       |

<br /><br />

Forms are essential in order to acquire user input(data). There are a variety of form elements to use to capture different types of data.

# Initializing A Form

Use `<form>` element to initialize a form and wrap all other elements included within the form, much like a `<div>` element.

```html
<form>
  <!-- all other form elements go here -->
</form>
```

<br /><br />

# Form Elements

- **Text Field**<br/>
  One of the primary elements used to obtain text from users is the `<input>` element. The `<input>` element uses the type attribute to define what type of information is to be captured within the control. The most popular type attribute value is text, which denotes a single line of text input.

  Along with setting a type attribute, it is best practice to give an `<input>` element a name attribute as well. The name attribute value is used as the name of the control and is submitted along with the input data to the server.

  ```html
  <input type="text" name="username" />

  <!-- examples of other type attribute values -->
  <!-- different values provide different controls, all of which make gathering input from users easier -->
  <input type="date" name="birthday" />
  <input type="time" name="game-time" />
  <input type="email" name="email-address" />
  <input type="url" name="website" />
  <input type="number" name="cost" />
  <input type="tel" name="phone-number" />
  ```

- **Textarea** <br/>
  `<textarea>` element differs from the `<input>` element in that it can accept larger passages of text spanning multiple lines. The `<textarea>` element also has start and end tags that can wrap plain text. Because the `<textarea>` element only accepts one type of value, the type attribute doesn’t apply here, but the name attribute is still used.

  ```html
  <textarea name="comment">Add your comment here</textarea>
  ```

- **Radio Buttons** <br/>
  Radio buttons permit users to select one option only, as opposed to multiple options.

  To create a radio button, the `<input>` element is used with a type attribute value of radio. Each radio button element should have the same name attribute value so that all of the buttons within a group correspond to one another.

  Using the value attribute, we can set a specific value for each radio `<input>` element.

  ```html
  <input type="radio" name="day" value="Friday" /> Friday
  <!-- use checked to preselect a radio button for users -->
  <input type="radio" name="day" value="Saturday" checked /> Saturday
  <input type="radio" name="day" value="Sunday" /> Sunday
  ```

- **Checkboxes** <br/>
  Check boxes allow users to select multiple values and tie them all to one control name.

  ```html
  <input type="checkbox" name="day" value="Friday" /> Friday
  <!-- use checked to preselect a checkbox button for users -->
  <input type="checkbox" name="day" value="Saturday" checked /> Saturday
  <input type="checkbox" name="day" value="Sunday" /> Sunday
  ```

- **Dropdown List** <br/>
  To create a drop-down list we’ll use the <select> and <option> elements. The <select> element wraps all of the menu options, and each menu option is marked up using the <option> element.

  ```html
  <select name="day">
    <!-- use selected to preselect an option for users -->
    <option value="Friday" selected>Friday</option>
    <option value="Saturday">Saturday</option>
    <option value="Sunday">Sunday</option>
  </select>
  ```

  You can also add the `multiple` attribute to the `<select>` element if you allow users to select multiple options:

  ```html
  <select name="day">
    <!-- use selected to preselect an option for users -->
    <option value="Friday" selected>Friday</option>
    <option value="Saturday" selected>Saturday</option>
    <option value="Sunday" selected>Sunday</option>
  </select>
  ```

<br /><br />

<!-- WIP -->
