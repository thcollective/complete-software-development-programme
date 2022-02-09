<template>
	<form @submit.prevent="emit('addTodo')">
		<input
			@input="emit('update:modelValue', $event.target.value)"
			:value="modelValue"
			type="text"
			placeholder="Enter your todo"
		/>
		<button>Add Todo</button>
	</form>
</template>

<script setup>
defineProps({
	modelValue: {
		type: String,
	},
});

const emit = defineEmits(['update:modelValue', 'addTodo']);
</script>
