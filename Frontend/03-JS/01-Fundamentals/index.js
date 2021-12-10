/***************************** VARIABLE *****************************/

// Variable Declaration
var name;
let age;
const isMale;

// Variable Initialization
var fruit = "banana";
let number = 10;
const eaten = true;

// Variable Assignment
var carBrand;
carBrand = "Porsche";

let score;
score = 100;

const registered;
registered = false;

/***************************** DATA TYPES *****************************/

// String
const name = 'Yap';

// Integer
const age = 20;

// Float
const height = 175.5;

// Boolean
const isMale = true;

// Array
const favouriteFruits = ['apple', 'banana', 'cherry'];

// Object
const grades = {
	science: 'A',
	history: 'B',
	english: 'C',
};

/***************************** OPERATORS *****************************/

// Assignment Operator
let age = 20;

age = age + 1
age += 1 // faster and cleaner

// Comparison Operator
console.log(1 < 2)
console.log(1 > 2)
console.log(1 <= 1)
console.log(2 >= 2)

console.log(2 == '2') // check for value only
console.log(2 === '2') // check for data type and value
console.log(2 != '2')
console.log(2 !== '2')

// Logical Operator
console.log(true && true)
console.log(true && false)
console.log(false && true)
console.log(false && false)

console.log(true || true)
console.log(true || false)
console.log(false || true)
console.log(false || false)

// check out https://www.w3schools.com/js/js_operators.asp for more

/***************************** CONDITIONS *****************************/

const registered = false;

if (registered) {
	console.log('Welcome!');
} else {
	console.log('Please register first!');
}

/***************************** LOOPS *****************************/

const names = ['User A', 'User B', 'User C'];

// Start at 0; Continue till the end of the array; +1 every loop
for (let i = 0; i < names.length; i++) {
	console.log(`Hello ${names[i]}!`);
}

// Loop through each item
for (let name of names) {
	console.log(`Hello ${name}!`);
}

// Loop through the index
for (let position in names) {
	console.log(`Hello ${names[position]}!`);
}

/***************************** FUNCTION *****************************/

// Function Declaration
function sayHello() {
	console.log('Hello');
}

sayHello(); // output: Hello

// Function Expression
const sayMorning = function () {
	console.log('Morning');
};

sayMorning(); // output: Morning

// Arrow Function
const sayAfternoon = () => console.log('Afternoon');

sayAfternoon(); // output: Afternoon

// Arguments
function greet(name) {
	console.log(`Hello ${name}!`);
}

greet('Yap'); // output: Hello Yap!

// Default Argument
function hello(name = 'Stranger') {
	console.log(`Hello ${name}!`);
}

hello('Yap'); // output: Hello Yap!
hello(); // output: Hello Stranger!

