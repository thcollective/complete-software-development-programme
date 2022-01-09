# Topic

## Table of Contents

| No. | Topic                                     |
| :-: | ----------------------------------------- |
|  1  | [For Loop](#for-loop)                     |
|  2  | [For In Loop](#for-in-loop)               |
|  3  | [For Of Loop](#for-of-loop)               |
|  4  | [While Loop](#while-loop)                 |
|  5  | [Break Statement](#break-statement)       |
|  5  | [Continue Statement](#continue-statement) |

<br /><br />

# For Loop

```js
let total = 0;

for (let num = 1; num < 5; i++) {
	total += num;
}

console.log(total); // output: 10 (1 + 2 + 3 + 4)
```

<br /><br />

# For In Loop

```js
const names = ['A', 'B', 'C'];

for (let index in names) {
	const name = names[index];

	console.log(`In position ${index}: ${name}`);
}

/*
    output:
    - In position 0: A
    - In position 1: B
    - In position 2: C
*/
```

<br /><br />

# For Of Loop

```js
const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
	console.log(`I love to eat ${fruit}.`);
}

/*
    output:
    - I love to eat apple.
    - I love to eat banana.
    - I love to eat cherry.
*/
```

<br /><br />

# While Loop

```js
let age = 2;

while (age < 5) {
	console.log(`I am ${age} years old.`);
	age += 1;
}

/*
    output:
    - I am 2 years old.
    - I am 3 years old.
    - I am 4 years old.
*/
```

<br /><br />

# Break Statement

```js
const fruits = ['apple', 'banana', 'cherry'];

let favouriteFruit = 'banana';

for (let index in fruits) {
	const fruit = fruits[index];

	if (fruit === favouriteFruit) {
		console.log(`Found at position ${index}!`); // Found at position 1!
	}
}
```

<br /><br />

# Continue Statement

```js
const fruits = ['apple', 'banana', 'cherry'];
const hateFruit = 'banana';

for (let fruit of fruits) {
	if (fruit === hateFruit) continue;

	console.log(`I love to eat ${fruit}.`);
}

/*
    output:
    - I love to eat apple.
    - I love to eat cherry.
*/
```
