<template>
	<section class="main" v-show="todos.length" v-cloak>
		<input id="toggle-all" class="toggle-all" type="checkbox"
			:value="allDone"
			:checked="allDone"
			@change="onInput">
		<label for="toggle-all"></label>
		<transition-group class="todo-list" name="todo-item" tag="ul">
			<li v-for="todo in filteredTodos"
				:key="todo.id"
				:class="['todo-item', {completed: todo.is_completed, editing: todo == editedTodo}]">
				<todo-item
					:todo="todo"
					@remove-todo="removeTodo"
					@done="done"
					@edit-todo="editTodo">
				</todo-item>
				<todo-edit
					:todo="todo"
					:editedTodo="editedTodo"
					@done-edit="doneEdit"
					@cancel-edit="cancelEdit">
				</todo-edit>
			</li>
		</transition-group>
	</section>
</template>

<script>
import TodoItem from './TodoItem.vue';
import TodoEdit from './TodoEdit.vue';
export default {
	name: 'TodoList',
	components: {
		TodoItem,
		TodoEdit
	},
	props: {
		todos: Array,
		filteredTodos: Array,
		allDone: Boolean
	},
	data() {
		return {
			editedTodo: null
		};
	},
	methods: {
		removeTodo(todo) {
			this.$emit('remove-todo', todo);
		},
		done(todo, completed) {
			this.$emit('done', todo, completed);
		},
		onInput() {
			this.$emit('allDone', !this.allDone);
		},
		editTodo(todo) {
			this.editedTodo = todo;
		},
		doneEdit(todoTitle) {
			if (!this.editedTodo) {
				return;
			}
			const title = todoTitle.trim();
			if (title) {
				this.editedTodo.title = title;
				this.done(this.editedTodo, this.editedTodo.is_completed)
			} else {
				this.removeTodo(this.editedTodo);
			}
			this.editedTodo = null;
		},
		cancelEdit() {
			this.editedTodo = null;
		}
	}
}
</script>

<style scoped>
[v-cloak] {
	display: none;
}
.todo-item {
	transition: 1s;
}
.todo-item-enter, .todo-item-leave-to {
	opacity: 0;
	transform: translateX(200px);
}
.todo-item-leave-active {
	position: absolute;
}
</style>
