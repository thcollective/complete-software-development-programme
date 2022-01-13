<template>
	<input
		class="new-todo" autofocus autocomplete="off"
		:placeholder="$t('message.placeholder')"
		v-model="newTodo"
		@keypress.enter="addTodo">
</template>

<script>
export default {
	name: 'TodoInput',
	data() {
		return {
			newTodo: ''
		};
	},
	methods: {
		addTodo() {
			this.$emit('add-todo', this.newTodo);
			this.newTodo = '';
		}
	}
}
</script>
