# Conditional Statements

## Table of Contents

| No. | Topic                                   |
| :-: | --------------------------------------- |
|  1  | [If Statement](#if-statement)           |
|  2  | [Else Statement](#else-statement)       |
|  3  | [Else If Statement](#else-if-statement) |
|  4  | [Switch Statement](#switch-statement)   |
|  4  | [Ternary Operator](#ternary-operator)   |

<br /><br />

# If Statement

```js
const registered = true;

// registered = Registered (true)
if (registered) {
	console.log('Thanks for registering!'); // this will be run
}

// !registered = Not Registered (false)
if (!registered) {
	console.log('Please register!');
}
```

<br /><br />

# Else Statement

```js
const registered = true;

if (registered) {
	console.log('Thanks for registering!'); // this will be run
} else {
	console.log('Please register!');
}
```

<br /><br />

# Else If Statement

```js
const mark = 65;

if (mark > 80) {
	console.log('A');
} else if (mark > 70) {
	console.log('B');
} else if (mark > 60) {
	console.log('C'); // this will be run
} else if (mark > 50) {
	console.log('D');
} else if (mark > 40) {
	console.log('E');
} else {
	console.log('G');
}
```

<br /><br />

# Switch Statement

```js
let day = 5;

switch (day) {
	case 1:
		day = 'Monday';
		break;
	case 2:
		day = 'Tuesday';
		break;
	case 3:
		day = 'Wednesday';
		break;
	case 4:
		day = 'Thursday';
		break;
	case 5:
		day = 'Friday';
		break;
	case 6:
		day = 'Saturday';
	case 7:
		day = 'Sunday';
		break;
	default:
		day = 'Wrong day';
		break;
}

console.log(day); // output: 'Friday'
```

<br /><br />

# Ternary Operator

```js
const registered = true;

console.log(registered ? 'Thanks for registering!' : 'Please register!');
// output: Thanks for registering!
```
