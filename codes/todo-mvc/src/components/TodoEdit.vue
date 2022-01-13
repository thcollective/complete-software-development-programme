<template>
	<input id="edit" class="edit" type="text"
		v-todo-focus="todo == editedTodo"
		:value="todo.title"
		@input="onInput"
		@keypress.enter="doneEdit"
		@keyup.esc="cancelEdit"
		@blur="cancelEdit">
</template>

<script>
export default {
	name: 'TodoEdit',
	directives: {
		['todo-focus'](element, binding) {
			if (binding.value) {
				element.focus();
			}
		}
	},
	props: {
		todo: Object,
		editedTodo: Object
	},
	data() {
		return {
			editedTitle: null
		};
	},
	mounted() {
		this.editedTitle = this.todo.title;
	},
	methods: {
		onInput(event) {
			this.editedTitle = event.target.value;
		},
		doneEdit(event) {
			this.editedTitle = event.target.value;
			this.$emit('done-edit', this.editedTitle);
		},
		cancelEdit(event) {
			event.target.value = this.todo.title;
			this.$emit('cancel-edit');
		}
	}
}
</script>
