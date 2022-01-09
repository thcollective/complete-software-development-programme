# Topic

## Table of Contents

| No. | Topic                                                       |
| :-: | ----------------------------------------------------------- |
|  1  | [What is an object](#what-is-an-object)                     |
|  2  | [Creating an object](#creating-an-object)                   |
|  3  | [Accessing object properties](#accessing-object-properties) |
|  4  | [Mutating object properties](#mutating-object-properties)   |

<br /><br />

# What is an Object?

> Almost everything in JavaScript are objects, including arrays.

If you try:

```js
console.log(typeof []); // output: object
```

So, what are objects?

**Object** is a collection of properties (key value pairs).

Let's look at the different when using and not using an object, to better
understand the use case:

```js
// Without using object
const userName = 'A';
const userAge = 20;
const userIsMale = true;
const userHobbies = ['coding', 'coding', 'coding'];

// Using object
const user = {
    name: 'A',
    age: 20,
    isMale: true
    hobbies: ['coding', 'coding', 'coding']
}
```

As you can see, we can group related properties that tied to the user, as an
object.

And think about it, for every new user, you have to create 4 new variables for
each property without using object.

But with object, just create **1** object, and store all the values in it.

<br /><br />

# Creating an Object

Object contains `key` and `value` pairs. For each `value` you want to contain,
you will have a `key` that describes what is the value for:

```js
const yourObject = {
	key1: 'Value 1',
	key2: 'Value 2',
	key3: 'Value 3',
};
```

<br />

## Why arrays are object?

Before moving on, let me explain briefly why arrays are object. Even though it
looks like they didn't satisfy the definition above.

```js
const users = [/* 0: */ A, /* 1: */ B, /* 2: */ C];

// To access the user A:
users[0]; // 0 is the key to the value A
```

Actually, arrays have key value pairs too. The key for each of the value in that
`users` array, is actually the `index` starting from `0` up till the
`length - 1`.

<br /><br />

# Accessing Object properties

As you might guess, we access object properties through the value's key.

There are 2 ways to access the key:

<br />

## Dot notation

```js
const user = { id: 1, name: 'A', age: 20 };

// User ID:
console.log(user.id); // output: 1
console.log(user.name); // output: 'A'
console.log(user.age); // output: 20
```

<br />

## Bracket notation

```js
const user = { id: 1, name: 'A', age: 20 };

// User ID:
console.log(user['id']); // output: 1
console.log(user['name']); // output: 'A'
console.log(user['age']); // output: 20
```

<br />

The benefit of using bracket notation is to allow accessing of properties
dynamically.

```js
const fruitsPrice = {
	apple: 5,
	banana: 7,
	grape: 10,
};

function getFruitPrice(fruit) {
	return fruitsPrice[fruit];
}

console.log(getFruitPrice(apple)); // output: 5
console.log(getFruitPrice(banana)); // output: 7
console.log(getFruitPrice(grape)); // output: 10
```

<br /><br />

# Mutating Object properties

There are 3 ways of possible mutations:

1. [Adding a new property](#adding-a-new-property)
2. [Editing a property value](#editing-a-property-value)
3. [Deleting a property](#deleting-a-property)

<br />

## Adding a new property

```js
const user = { id: 1, name: 'A' };

// Add user's `age` and `isMale` property:
user.age = 20;
user['isMale'] = false;

console.log(user); // output: { id: 1, name: 'A', age: 20, isMale: false }
```

<br />

## Editing a property value

```js
const user = { id: 1, name: 'A' };

user.name = 'B';
console.log(user); // output: { id: 1, name: 'B' }
```

<br />

## Deleting a property

```js
const user = { id: 1, name: 'A' };

delete user.name;
console.log(user); // output: { id: 1 }
```
