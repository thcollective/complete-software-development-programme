const users = ['Bernard', 'Kaiz', 'Jason', 'Brandon'];
const activeUsers = ['Kaiz', 'Brandon'];

// output: ['Bernard', 'Jason']

// 1. Imperative
// Step 1: Loop through users array
// Step 2: Find the user that is not in the activeUsers array
// Step 3: Push it to inactiveUsers array

// const inactiveUsers = [];

// for (const index in users) {
// 	const currentUser = users[index];
// 	const isUserActive = activeUsers.includes(currentUser);

// 	if (!isUserActive) {
// 		inactiveUsers.push(currentUser);
// 	}
// }

// console.log(inactiveUsers);

// 2. Declarative (.filter)
function isIncluded(arr, target) {
	return arr.includes(target);
}

const inactiveUsers = users.filter((user) => !isIncluded(activeUsers, user));

console.log(inactiveUsers);
