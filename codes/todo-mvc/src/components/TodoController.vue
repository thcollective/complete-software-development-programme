<template>
	<footer class="footer" v-show="todos.length" v-cloak>
		<span class="todo-count">
			{{$tc("message.remaining", remaining, {count: remaining})}}
		</span>
		<ul class="filters">
			<li
				v-for="(value, key) in filters"
				:key="key"
			>
				<a
					:href="'#/' + key"
					:class="{selected: visibility === key}"
				>
					{{$t("message." + key)}}
				</a>
			</li>
		</ul>
		<button class="clear-completed"
			v-show="todos.length > remaining"
			@click="removeCompleted">
			{{$t("message.archive")}}
		</button>
	</footer>
</template>

<script>
export default {
	name: 'TodoController',
	props: {
		todos: Array,
		remaining: Number,
		visibility: String,
		filters: Object
	},
	methods: {
		removeCompleted() {
			this.$emit('removeCompleted');
		}
	}
}
</script>
