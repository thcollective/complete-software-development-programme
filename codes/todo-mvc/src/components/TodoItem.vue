<template>
	<div class="view">
		<input
			type="checkbox" class="toggle"
			:value="todo.is_completed"
			:checked="todo.is_completed"
			@change="onInput">
		<label @dblclick="editTodo">
			{{todo.title}}
		</label>
		<button
			class="destroy"
			@click="removeTodo">
		</button>
	</div>
</template>

<script>
export default {
	name: 'TodoItem',
	props: {
		todo: Object
	},
	methods: {
		removeTodo() {
			this.$emit('remove-todo', this.todo);
		},
		onInput() {
			this.$emit('done', this.todo, !this.todo.is_completed);
		},
		editTodo() {
			this.$emit('edit-todo', this.todo);
		}
	}
}
</script>
