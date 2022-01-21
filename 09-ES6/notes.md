# Topic

## Table of Contents

| No. | Topic                                            |
| :-: | ------------------------------------------------ |
|  1  | [What is ES6](#what-is-es6)                      |
|  2  | [Template literals](#template-literals)          |
|  3  | [Let and Const](#let-and-const)                  |
|  4  | [Default parameters](#default-parameters)        |
|  5  | [Arrow functions](#arrow-functions)              |
|  6  | [Destructuring](#destructuring)                  |
|  7  | [Array Method 1: Map](#array-method-1-map)       |
|  8  | [Array Method 2: Filter](#array-method-2-filter) |
|  9  | [Array Method 3: Reduce](#array-method-3-reduce) |

<br />

# What is ES6?

ES6 refers to version 6 of the ECMA Script programming language. ECMA Script is
the standardized name for JavaScript and was released in 2011. It is a major
enhancement to the JavaScript language, and adds many more features intended to
make large-scale software development easier.

<br /><br />

# Template Literals

### Before:

```js
const user = { name: 'A', age: 20 };
const greeting =
	'Hey guys! I am ' + user.name + '. I am ' + user.age + ' years old.';

console.log(greeting); // output: Hey guys! I am A. I am 20 years old.
```

### After:

```js
const user = { name: 'A', age: 20 };
const greeting = `Hey guys! I am ${user.name}. I am ${user.age} years old.`;

console.log(greeting); // output: Hey guys! I am A. I am 20 years old.
```

<br /><br />

# Let and Const

There are few problems when using `var` to declare variables.

<br />

### Problem 1:

```js
console.log(age); // output: 20 ??

var age = 20;
```

<br />

It's weird to still be able to get the value, when you use it before creating
it. This is due to a concept called `hoisting`. We will cover this in a more
advanced sections.

<br />

To avoid this problem, we could use `let`:

```js
console.log(age); // output: "ReferenceError: Cannot access 'age' before initialization"

let age = 20;
```

<br />

### Problem 2:

```js
let password = 'ILoveCoding123';

password = 'CodingLoveMe123';

console.log(age); // output: 'CodingLoveMe123'
```

<br />

Oh no! It's not meant to be change! You might be thinking, who would do this
silly mistake? But imagine in a project file that has thousands lines of code,
it's hard to detect and easy to make mistakes like that.

<br />

To solve this, we use `const`:

```js
const password = 'ILoveCoding123';

password = 'CodingLoveMe123'; // "TypeError: Assignment to constant variable."

console.log(age); // the program stops before this line of code
```

<br />

### Rule of thumb:

Always use `const`, until the variable is required to be mutable/changeable,
then use `let`. You can totally forget about `var`.

<br /><br />

# Default Parameters

```js
const userOne = 'A';
const userTwo = 'B';

function greet(name) {
	console.log(`Hello ${name}!`);
}

greet(userOne); // output: "Hello A!"
greet(); // output: "Hello undefined!"
```

<br />

Oh no! I forgot to put `userTwo` in my `greeting()` function. We can avoid this
by putting a `default value` if user forgot to pass in their name:

```js
function greet(name = 'Stranger') {
	console.log(`Hello ${name}!`);
}

greet(); // output: "Hello Stranger!"
```

<br /><br />

# Arrow Functions

### Before

```js
const num1 = 10;
const num2 = 20;

function sum(num1, num2) {
	return num1 + num2;
}

const total = sum(num1, num2);

console.log(total); // output: 30
```

<br />

### After

```js
const num1 = 10;
const num2 = 20;

const sum = (num1, num2) => num1 + num2;

const total = sum(num1, num2);

console.log(total); // output: 30
```

<br /><br />

# Destructuring

There are 2 types of destructuring:

1. Array destructuring
2. Object destructuring

<br />

## Array Destructuring

### Before:

```js
const users = ['A', 'B'];

const user1 = users[0];
const user2 = users[1];
console.log(user1); // output: 'A'
console.log(user2); // output: 'B'
```

### After:

```js
const users = ['A', 'B'];

const [user1, user2] = users;
console.log(user1); // output: 'A'
console.log(user2); // output: 'B'
```

<br />

## Object Destructuring

### Before:

```js
const user = { id: 1, name: 'A', age: 20 };

const userID = user.id;
const userName = user.name;
const userAge = user.age;
console.log(userID); // output: 1
console.log(userName); // output: 'A'
console.log(userAge); // output: 20
```

### After:

```js
const user = { id: 1, name: 'A', age: 20 };

const { id, name, age } = user;
console.log(id); // output: 1
console.log(name); // output: 'A'
console.log(age); // output: 20
```

You can rename the variable also:

### Before:

```js
const user = { id: 1, name: 'A', age: 20 };

const { id: userID, name: userName, age: userAge } = user;
console.log(userID); // output: 1
console.log(userName); // output: 'A'
console.log(userAge); // output: 20
```

<br /><br />

# Array Method 1: Map

Use case: Reformat the array

Let's say we have an array of numbers, and we want to create an array of all the
numbers but double.

### Before:

```js
const nums = [1, 2, 3];
const doubleNums = [];

for (let i = 0; i < nums.length; i++) {
	const doubleNum = nums[i] * 2;
	doubleNums.push(doubleNum);
}

console.log(doubleNums); // output: [2, 4, 6]
```

### After:

```js
const nums = [1, 2, 3];
const doubleNums = nums.map((num) => num * 2);

console.log(doubleNums); // output: [2, 4, 6]
```

<br /><br />

# Array Method 2: Filter

Use case: Get a subset of the array based on conditions.

Let's say we have an array of `users`. I want to get users that are above 18.

### Before:

```js
const users = [
	{ id: 1, name: 'A', age: 10 },
	{ id: 2, name: 'B', age: 20 },
	{ id: 3, name: 'C', age: 30 },
];

const adultUsers = [];

for (let i = 0; i < users.length; i++) {
	const currentUser = users[i];

	if (currentUser.age >= 18) {
		adultUsers.push(currentUser);
	}
}

console.log(adultUsers); // output: [ { id: 2, name: 'B', age: 20 }, { id: 3, name: 'C', age: 30 } ]
```

### After:

```js
const users = [
	{ id: 1, name: 'A', age: 10 },
	{ id: 2, name: 'B', age: 20 },
	{ id: 3, name: 'C', age: 30 },
];

const adultUsers = users.filter((user) => user.age >= 18);

console.log(adultUsers); // output: [ { id: 2, name: 'B', age: 20 }, { id: 3, name: 'C', age: 30 } ]
```

<br /><br />

# Array Method 3: Reduce

Use case: Compute each element accumatively

Let's say I want to calculate the total of all numbers in the array.

### Before:

```js
const nums = [1, 2, 3];

let total = 0;

for (let i = 0; i < nums.length; i++) {
	total += nums[i];
}

console.log(total); // output: 6
```

<br />

### After:

```js
const nums = [1, 2, 3];

let total = nums.reduce(
	(previousTotal, currentNum) => previousTotal + currentNum,
	0
);

console.log(total); // output: 6
```
