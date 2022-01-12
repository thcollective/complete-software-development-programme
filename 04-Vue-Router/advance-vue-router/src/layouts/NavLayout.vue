<template>
	<nav>
		<span @click="goToPreviousPage" class="button previous-button"
			>&lt;</span
		>
		&nbsp;&nbsp; <router-link to="/home">Home</router-link> |
		<router-link to="/about">About</router-link>
		&nbsp;&nbsp;
		<span @click="goToNextPage" class="button next-button">&gt;</span>
	</nav>

	<router-view />
</template>

<script>
export default {
	name: 'NavBar',
	methods: {
		goToPreviousPage() {
			this.$router.back();
			// console.log(this.$router);
		},
		goToNextPage() {
			this.$router.forward();
		},
	},
};
</script>

<style scoped>
.button {
	cursor: pointer;
}

.button:hover {
	color: red;
}
</style>
