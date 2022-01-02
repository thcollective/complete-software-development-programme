# Operators

## Table of Contents

| No. | Topic                                         |
| :-: | --------------------------------------------- |
|  1  | [Arithmetic operators](#arithmetic-operators) |
|  2  | [Assignment operators](#assignment-operators) |
|  3  | [Comparison operators](#comparison-operators) |
|  4  | [Logical operators](#logical-operators)       |

<br /><br />

# Arithmetic Operators

| Operator | Description                               |
| :------: | ----------------------------------------- |
|   `+`    | [Addition](#addition)                     |
|   `-`    | [Subtraction](#subtraction)               |
|   `*`    | [Multiplication](#multiplication)         |
|   `/`    | [Division](#division)                     |
|   `**`   | [Exponentiation](#exponentiation)         |
|   `%`    | [Modulus (Remainder)](#modulus-remainder) |
|   `++`   | [Increment](#increment)                   |
|   `--`   | [Decrement](#decrement)                   |

### Addition

```js
const num1 = 10;
const num2 = 2;
const sum = num1 + num2;

console.log(sum); // output: 12
```

### Subtraction

```js
const num1 = 10;
const num2 = 2;
const difference = num1 - num2;

console.log(difference); // output: 8
```

### Multiplication

```js
const num1 = 10;
const num2 = 2;
const product = num1 * num2;

console.log(product); // output:  20
```

### Division

```js
const num1 = 10;
const num2 = 2;
const quotient = num1 / num2;

console.log(quotient); // output: 5
```

### Exponentiation

```js
const num1 = 10;
const num2 = 2;
const power = num1 ** num2;

console.log(power); // output: 100
```

### Modulus (Remainder)

```js
const num1 = 10;
const num2 = 2;
const remainder = num1 % num2;

console.log(remainder); // output: 0
```

### Increment

```js
let num = 10;
const incremented_num = ++num;

console.log(incremented_num); // output: 11
```

### Decrement

```js
let num = 10;
const decremented_num = --num;

console.log(decremented_num); // output: 9
```

<br /><br />

# Assignment Operators

Assignment operators are just shortcuts.

| Operator | Example  | Same As       |
| :------: | -------- | ------------- |
|   `=`    | x `=` y  | x `=` y       |
|   `+=`   | x `+=` y | x `=` x `+` y |
|   `-=`   | x `-=` y | x `=` x `-` y |
|   `*=`   | x `*=` y | x `=` x `*` y |
|   `/=`   | x `/=` y | x `=` x `/` y |
|   `%=`   | x `%=` y | x `=` x `%` y |

<br /><br />

# Comparison Operators

| Operator | Description                       |
| :------: | --------------------------------- |
|   `==`   | equal value                       |
|  `===`   | equal value and equal type        |
|   `!=`   | not equal value                   |
|  `!==`   | not equal value or not equal type |
|   `>`    | greater than                      |
|   `<`    | less than                         |
|   `>=`   | greater than or equal to          |
|   `<=`   | less than or equal to             |

<br /><br />

# Logical Operators

| Operator | Description |
| :------: | ----------- |
|   `&&`   | and         |
|  `\|\|`  | or          |
|   `!`    | not         |
