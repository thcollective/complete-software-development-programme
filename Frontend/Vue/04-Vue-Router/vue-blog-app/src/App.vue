<template>
	<router-link to="/">Home</router-link> |
	<router-link to="/about">About</router-link> |
	<router-link to="/posts">Posts</router-link>

	<router-view></router-view>
</template>

<script>
export default {
	name: 'App',
};
</script>
