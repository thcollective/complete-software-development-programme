<template>
	<ul>
		<li v-for="todo in todos" :key="todo.id">
			<span :class="{ completed__todo: todo.completed }">
				{{ todo.text }}
			</span>
			<button @click.prevent="emit('completeTodo', todo.id)">
				Complete
			</button>
			<button @click.prevent="emit('deleteTodo', todo.id)">Delete</button>
		</li>
	</ul>
</template>

<script setup>
defineProps({
	todos: {
		type: Array,
		required: true,
	},
});

const emit = defineEmits(['completeTodo', 'deleteTodo']);
</script>
