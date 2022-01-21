# Topic

## Table of Contents

| No. | Topic                        |
| :-: | ---------------------------- |
|  1  | [Introduction to Modules](#) |
|  2  | [What is a Module?](#)       |
|  3  | [Export and Import](#)       |

<br /><br />

# Introduction to Modules

As our application grows bigger, we want to split it into multiple files, so
called "modules". A module may contain a class or a library of functions for a
specific purpose.

For a long time, JavaScript existed without a language-level module syntax. That
wasn’t a problem, because initially scripts were small and simple, so there was
no need.

But eventually scripts became more and more complex, so the community invented a
variety of ways to organize code into modules, special libraries to load modules
on demand.

To name some (for historical reasons):

-   AMD – one of the most ancient module systems, initially implemented by the
    library require.js.
-   CommonJS – the module system created for Node.js server.
-   UMD – one more module system, suggested as a universal one, compatible with
    AMD and CommonJS. Now all these slowly become a part of history, but we
    still can find them in old scripts.

The language-level module system appeared in the standard in 2015, gradually
evolved since then, and is now supported by all major browsers and in Node.js.
So we’ll study the modern JavaScript modules from now on.

<br><br>

# What is a Module?

A module is just a file. One script is one module. As simple as that.

Modules can load each other and use special directives `export` and `import` to
interchange functionality, call functions of one module from another one.

<br><br>

# Export and Import

`Export` keyword allows `function` or `variable` to be used in other files.

There are 2 ways of exporting modules:

1. `export default`
2. `export`

<br>

## Export Default

Use `export default` keyword when there is only 1 thing you want to export in
the file.

<br>

For example, in this `math.js` file:

```js
function sum(num1, num2) {
	return num1 + num2;
}

export default sum;
```

<br>

Now, let's say you need to use this `sum` function in `app.js`:

```js
import sum from './math';

const total = sum(10, 20);

console.log(total); // output: 30
```

<br>

One thing to note using `export default`, is because by **default**, the `sum`
function is being exported.

When you `import` it, you can name it anything you want because we know what's
the function being exported by default:

```js
import add from './math';

const total = add(10, 20);

console.log(total); // output: 30
```

<br>

## Export

Use `export` keyword when there are multiple functions or variables you want to
export from a file.

<br>

Let's go back to our `math.js` and add more utilities.

```js
export function sum(num1, num2) {
	return num1 + num2;
}

export function minus(num1, num2) {
	return num1 - num2;
}
```

<br>

Now, in my `app.js`:

```js
import { sum, minus } from './math';

const total = sum(10, 20);
console.log(total); // output: 30

const diff = minus(9, 3);
console.log(diff); // output: 6
```

<br>

Notice we used `{}` to import all the functions. If you import without using
`{}`, this is how you can use it:

```js
import * as math from './math';

const total = math.sum(10, 20);
console.log(total); // output: 30

const diff = math.minus(9, 3);
console.log(diff); // output: 6
```

<br>

`import *` means import every exported functions/variables and named it under
`math`. Then you use it by saying `math.` follow by the function name.
