// Example 1: Multiply all numbers by 2

// Imperative (Just want to get it done)
let nums = [1, 2, 3, 4, 5];

// impure
function multiplyAll(list) {
	/* ----- imperative way -----
	for (let i = 0; i < list.length; i++) {
	    list[i] *= 2;
	}
    */

	const doubleList = list.map((item) => item * 2);

	return doubleList;
}

const doubleNums = multiplyAll(nums);
console.log(doubleNums);

console.log(nums); // output: [2, 4, 6, 8, 10]

// 1. Mutate the original array
// 2. no return value
