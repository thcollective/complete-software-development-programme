# Variables

## Table of Contents

| No. | Topic                                                     |
| :-: | --------------------------------------------------------- |
|  1  | [Definition of variables](#what-are-variables)            |
|  2  | [Declaring a variable](#variable-declaration)             |
|  3  | [Assigning value to a variable](#variable-assignment)     |
|  4  | [Initializing a variable](#variable-initialization)       |
|  5  | [Reassigning value to a variable](#variable-reassignment) |

<br /><br />

# What are variables?

Variables are used to store data values. For example, a variable may be used to
store a user’s email address, or their name. In JavaScript, a variable can
contain any types of data, such as a string, a true or false boolean, an object,
or a number.

<br /><br />

# Variable Declaration

Variable declaration means creating a variable.

There are 3 ways to declare a variable, using keywords:

```js
// var (a.k.a. VARIABLE)
var name;

// let
let age;

// const (a.k.a. CONSTANT)
const isMale;
```

<br /><br />

# Variable Assignment

Variable assignment means assigning a value to the variable you declared.

We use `=` symbol to do variable assignment.

```js
// 1. Declaring variables.
var name;
let age;

// 2. Assign values to the variables we declared.
name = 'Yap';
age = 20;
```

Notice we didn't show an example of using `const`. This is because `const` has a
different way of using it. We will show in the
[next section](#variable-initialization).

<br /><br />

# Variable Initialization

Variable initialization means we declare and assign the value at the same time.

```js
var name = 'Yap';
let age = 20;
const isMale = true; // this is how you use `const`
```

To understand more why we can't declare and assign separately with `const`.
Continue on reading...

<br /><br />

# Variable Reassignment

Variable reassignment means we change the value of a variable to something else.

But, we can't reassign if the variable is declared by using `const`. Because
`const` means constant (a.k.a. value that doesn't change). Hence, we can only
initialize a `const` variable because it cannot do assignment.

```js
var name = 'Yap';
console.log(name); // output: Yap

name = 'Kaiz';
console.log(name); // output: Kaiz (changed!)
```

```js
let age = 20;
console.log(age); // output: 20

age = 30;
console.log(age); // output: 30 (changed!)
```

```js
const isMale = true;
console.log(isMale); // output: true

isMale = false; // TypeError: Assignment to constant variable.
```

Notice only `const` will faced error! Rule of thumb:

> Always use `const` unless you need to allow the variable to be
> mutable/changeable, then use `let`.
