export function getUsers() {
	const user1 = {
		name: 'User 1',
		paid: false,
	};

	const user2 = {
		name: 'User 2',
		paid: true,
	};

	const users = [user1, user2];

	const currentUser = 'User 2';

	return {
		users,
		currentUser,
	};
}
