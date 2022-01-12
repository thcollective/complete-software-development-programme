import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import Courses from '../pages/Courses.vue';
import NavLayout from '../layouts/NavLayout.vue';

import { getUsers } from '../users';

const { users, currentUser } = getUsers();

export const routes = [
	{
		path: '/',
		component: NavLayout,
		children: [
			{
				path: '',
				redirect: {
					name: 'Home',
				},
			},
			{
				path: 'home',
				name: 'Home',
				component: Home,
				meta: {
					pageName: 'Home Page',
				},
			},
			{
				path: 'about',
				redirect: 'about-page',
			},
			{
				path: 'about-page',
				name: 'About',
				component: About,
				meta: {
					pageName: 'About Page',
				},
			},
			{
				path: 'courses',
				name: 'Courses',
				component: Courses,
				meta: {
					pageName: 'Browse Courses',
					onlyPaidMembers: true,
				},
				beforeEnter: (to, from, next) => {
					const user = users.find(
						(item) => item.name === currentUser
					);
					const isUserPaid = user.paid;

					if (!isUserPaid) {
						console.log('PAY MONEY!!!!');
						next('/');
					}

					next();
				},
			},
		],
	},
];
