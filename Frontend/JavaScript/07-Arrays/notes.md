# Arrays

## Table of Contents

| No. | Topic                                         |
| :-: | --------------------------------------------- |
|  1  | [What is an array](#what-is-an-array)         |
|  2  | [Creating an array](#creating-an-array)       |
|  3  | [Accessing an element](#accessing-an-element) |
|  4  | [Changing an element](#changing-an-element)   |
|  5  | [Array methods](#array-methods)               |

<br /><br />

# What is an array?

Let's say, you have 3 users and you want to store their names:

```js
const user1 = 'A';
const user2 = 'B';
const user3 = 'C';
```

What if you have 100? It will be 100 lines of codes.

Instead, we can store in an `array` like this:

```js
const users = ['A', 'B', 'C', ...];
```

<br /><br />

# Creating an array

To create an array, we use the square bracket `[]`.

Array can store any type of values.

```js
// Array of strings
const names = ['A', 'B', 'C'];

// Array of numbers
const heights = [150, 160, 170];

// Array of objects
const users = [
	{ id: 1, name: 'A' },
	{ id: 2, name: 'B' },
];
```

And more... we will talk about `Object` in future sections.

<br /><br />

# Accessing an element

`Element` means the individual value in the `array`.

```js
const names = ['A', 'B', 'C'];
```

A, B, and C are all called `element` in the **names** `array`.

We access the element by their `position` in that array. Note that in JavaScript
and most of the programming languages, array starts with index `0`.

```js
const names = ['A', 'B', 'C'];

console.log(names[0]); // output: A
console.log(names[1]); // output: B
console.log(names[2]); // output: C
```

<br /><br />

# Changing an element

```js
const names = ['A', 'B', 'C'];

names[0] = 'D';

console.log(names); // output: ['D', 'B', 'C']
```

<br /><br />

# Array methods

In JavaScript, there are tons of array methods. Here are some common ones, you
can explore more here:

1. [W3 School](https://www.w3schools.com/js/js_array_methods.asp)
2. [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

### `Array.length` - Get array's length

```js
const nums = [1, 2, 3];

console.log(nums.length); // output: 3
```

### `Array.push` - Add new element into array

```js
const nums = [1, 2, 3];

nums.push(4);

console.log(nums); // output: [1, 2, 3, 4]
```
