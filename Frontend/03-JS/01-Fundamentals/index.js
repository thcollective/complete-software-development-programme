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

