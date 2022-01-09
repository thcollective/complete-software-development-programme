# Data Types

## Table of Contents

| No. | Topic                                 |
| :-: | ------------------------------------- |
|  1  | [Primitive Values](#primitive-values) |
|  2  | [Objects](#objects)                   |

<br /><br />

# Primitive Values

A primitive is data that is not an object and has no methods.

All primitives are immutable/unchangeable.

5 Types of primitive values:

### Number

```js
// Integer
const age = 20;

// Float or Decimal
const price = 10.99;
```

### String

```js
const name = 'Yap';
```

### Boolean

```js
const isMale = true;
const hasRegistered = false;
```

### Null

```js
const favouriteVegetables = null;
```

### Undefined

```js
let loggedInUsers;

console.log(loggedInUsers); // output: undefined
```

<br /><br />

# Objects

Objects are non-primitive values.

Types of objects in JavaScript:

1. Array

```js
const nums = [1, 2, 3];
```

2. Object

```js
const user = {
	name: 'Yap',
	age: 20,
};
```

3. Function

```js
function sayHello() {
	console.log('Hello');
}
```
