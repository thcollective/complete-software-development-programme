import { createApp } from 'vue';
import App from './App.vue';
import { routes } from './router';
import { createRouter, createWebHistory } from 'vue-router';
import { getUsers } from './users';

const { users, currentUser } = getUsers();

const router = createRouter({
	routes,
	history: createWebHistory(),
});

createApp(App).use(router).mount('#app');
