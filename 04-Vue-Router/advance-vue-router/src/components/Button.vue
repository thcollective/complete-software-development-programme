<template>
	<button class="button">
		<slot>Click</slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
};
</script>

<style scoped>
.button {
	background-color: blue;
	color: white;
	cursor: pointer;
	border: 0;
	outline: none;
	padding: 10px 20px;
	border-radius: 9999px;
}

.button:hover {
	opacity: 60%;
}
</style>
