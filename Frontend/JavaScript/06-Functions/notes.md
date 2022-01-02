# Function

## Table of Contents

| No. | Topic                                       |
| :-: | ------------------------------------------- |
|  1  | [What is a function](#what-is-a-function)   |
|  2  | [Creating a function](#creating-a-function) |
|  3  | [Using a function](#using-a-function)       |
|  4  | [Function parameters](#function-parameters) |

<br /><br />

# What is a function?

Functions are JavaScript codes that can:

1. Saved for later use. You can call it anytime you want.
2. Use it multiple times. Not like loops, you can control when and where to use
   functions.

<br /><br />

# Creating a function

You create a function by using the keyword `function`.

In more advanced sections, we will look into other ways of creating functions.

```js
function name() {
	// your code
}
```

<br /><br />

# Using a function

Let's say we have a `sayHello` function.

Use the function by calling the name followed by a `()`.

```js
function sayHello() {
	console.log('Hello');
}

sayHello(); // <- here
```

<br /><br />

# Function parameters

What if you want to say hello to specific names?

We can use parameters to customize our how the task is run.

```js
function sayHello(name) {
	console.log(`Hello ${name}`);
}

sayHello('A'); // output: Hello A
sayHello('B'); // output: Hello B
sayHello('C'); // output: Hello C
```
