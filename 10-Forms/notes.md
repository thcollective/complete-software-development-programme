# HTML Forms

## Table of Contents

| No. | Topic                                                   |
| :-: | ------------------------------------------------------- |
|  1  | [Initializing A Form](#initializing-a-form)             |
|  2  | [Form Elements](#form-elements)                         |
|  3  | [Form Buttons](#form-buttons)                           |
|  4  | [Other Inputs](#other-inputs)                           |
|  5  | [Organizing Form Elements](#organizing-form-elements)   |
|  6  | [Form And Input Attributes](#form-and-input-attributes) |

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
  To create a drop-down list we’ll use the `<select>` and `<option>` elements. The `<select> `element wraps all of the menu options, and each menu option is marked up using the `<option>` element.

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

# Form Buttons

- **Submit Input/ Submit Button**<br/>
  Users click the submit button to process data after filling out a form. The submit button is created using the `<input>` element with a type attribute value of submit. The value attribute is used to specify the text that appears within the button.

  ```html
  <input type="submit" name="submit" value="Send" />
  ```

  Alternatively, you can also use a `<button>` element for submission of the form data:

  ```html
  <button name="submit">Submit</button>
  ```

<br /><br />

# Other Inputs

- **Hidden Input**<br/>
  Hidden inputs provide a way to pass data to the server without displaying it to users.

  ```html
  <input type="hidden" name="tracking-code" value="abc-123" />
  ```

  Here's a [sample use case of hidden input](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/hidden).

- **File Input**<br/>
  To allow users to add a file to a form, much like attaching a file to an email, use the file value for the type attribute.

  ```html
  <input type="file" name="file" />
  ```

  <br /><br />

# Organizing Form Elements

- **Label**<br/>
  Labels provide captions or headings for form controls.

  ```html
  <label for="username">Username</label>
  <input type="text" name="username" id="username" />
  ```

- **Fieldset**<br/>
  Fieldset group form controls and labels into organized sections. Much like a `<section>` element, the `<fieldset>` is a block-level element that wraps related elements, specifically within a `<form>` element, for better organization.

  ```html
  <fieldset>
    <label>
      Username
      <input type="text" name="username" />
    </label>
    <label>
      Password
      <input type="text" name="password" />
    </label>
  </fieldset>
  ```

- **Legend**<br/>
  A legend provides a caption, or heading, for the `<fieldset>` element. The `<legend>` element wraps text describing the form controls that fall within the fieldset. The markup should include the `<legend>` element directly after the opening `<fieldset>` tag.

  ```html
  <fieldset>
    <legend>Login</legend>
    <label>
      Username
      <input type="text" name="username" />
    </label>
    <label>
      Password
      <input type="text" name="password" />
    </label>
  </fieldset>
  ```

  <br /><br />

# Form And Input Attributes

These attributes and values serve a handful of different functions, such as disabling controls and adding form validation. Refer below for some of the more frequently used and helpful attributes.

- **Disabled**<br/>
  The disabled Boolean attribute turns off an element or control so that it is not available for interaction or input.

  ```html
  <label>
    Username
    <input type="text" name="username" disabled />
  </label>
  ```

- **Placeholder**<br/>
  Placeholder give users further information on how the form input should be filled in and it appears inside the input field.

  ```html
  <label>
    Email Address
    <input type="email" name="email-address" placeholder="name@domain.com" />
  </label>
  ```

- **Required**<br/>
  Required attribute enforces that an element or form control must contain a value upon being submitted to the server.

  ```html
  <label>
    Email Address
    <input type="email" name="email-address" required />
  </label>
  ```
