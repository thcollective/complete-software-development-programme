// 1. Pass object as argument -> You know what you passed in
// 2. Extracting out the logics -> Easier to maintain / reuse
// 3. remove else statement -> guard clause

function insuranceScore({ age, smokes, drivingScore }) {
	const isOld = age > 50;
	const hasSmoke = smokes;
	const badDriving = drivingScore < 5;

	const highRisk = isOld && hasSmoke && badDriving;

	const individualType = highRisk ? 'High' : 'Low';
	const percentage = highRisk ? 10 : 5;

	console.log(`${individualType} risk individual`);
	return (age * drivingScore) / percentage;
}

const userOne = { age: 55, smokes: true, drivingScore: 4 };
const userTwo = { age: 55, smokes: false, drivingScore: 4 };

const userOneInsuranceScore = insuranceScore(userOne);
const userTwoInsuranceScore = insuranceScore(userTwo);

console.log('User One', userOneInsuranceScore);
console.log('User Two', userTwoInsuranceScore);

// function insuranceScore(age, smokes, drivingScore) {
// 	if (age > 50 && smokes === true && drivingScore < 5) {
// 		console.log('High risk individual');
// 		return (age * drivingScore) / 10;
// 	} else {
// 		console.log('Low risk individual');
// 		return (age * drivingScore) / 5;
// 	}
// }

// console.log(insuranceScore(55, true, 4));
// console.log(insuranceScore(55, false, 4));
