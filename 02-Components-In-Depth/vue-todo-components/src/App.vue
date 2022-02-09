<template>
	<Header />

	<TodoForm @addTodo="addTodo" v-model="todoInput" />

	<TodoList
		@completeTodo="completeTodo"
		@deleteTodo="deleteTodo"
		:todos="todos"
	/>
</template>

<script setup>
import { ref } from 'vue';
import { generateRandomID } from './helper/id';
import Header from './components/Header.vue';
import TodoForm from './components/TodoForm.vue';
import TodoList from './components/TodoList.vue';

const todoInput = ref('');
const todos = ref([]);

function addTodo() {
	const newTodo = {
		id: generateRandomID(),
		text: todoInput.value,
		completed: false,
	};

	todos.value.push(newTodo);

	todoInput.value = '';
}

function completeTodo(todoID) {
	todos.value.forEach((todo) => {
		if (todo.id === todoID) {
			todo.completed = !todo.completed;
		}
	});
}

function deleteTodo(todoID) {
	todos.value = todos.value.filter((todo) => todo.id !== todoID);
}
</script>

<style>
.completed__todo {
	color: green;
	text-decoration: line-through;
}
</style>
