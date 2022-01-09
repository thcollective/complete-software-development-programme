import { createRouter, createWebHistory } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'Home',
		component: () => import('./views/Home.vue'),
	},
	{
		path: '/about',
		name: 'About',
		component: () => import('./views/About.vue'),
	},
	{
		path: '/posts',
		name: 'Posts',
		component: () => import('./views/Posts.vue'),
	},
	{
		path: '/post/:id',
		name: 'Post',
		component: () => import('./views/Post.vue'),
	},
];

const router = createRouter({
	routes,
	history: createWebHistory(),
});

export default router;
