<template>
  <section id="app" class="todoapp">
    <header class="header">
      <transition appear name="todo-head">
        <h1>todos</h1>
      </transition>
      <todo-input @add-todo="addTodo"> </todo-input>
    </header>
    <todo-list
      :todos="todos"
      :filtered-todos="filteredTodos"
      :allDone="allDone"
      @remove-todo="removeTodo"
      @done="done"
      @allDone="onAllDone"
    >
    </todo-list>
    <todo-controller
      :todos="todos"
      :remaining="remaining"
      :visibility="visibility"
      :filters="filters"
      @removeCompleted="removeCompleted"
    >
    </todo-controller>
  </section>
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
import TodoList from "./components/TodoList.vue";
import TodoController from "./components/TodoController.vue";
import axios from "axios";
const URL = "http://localhost:3000";
const todoStorage = {
  async fetch() {
    const res = await axios.get(URL + "/get-todos");
    return res.data;
  },
};
const filters = {
  all(todos) {
    return todos;
  },
  active(todos) {
    return todos.filter((todo) => !todo.is_completed);
  },
  completed(todos) {
    return todos.filter((todo) => todo.is_completed);
  },
};
export default {
  name: "app",
  components: {
    TodoInput,
    TodoList,
    TodoController,
  },
  data() {
    return {
      todos: [],
      visibility: "all",
      filters: filters,
    };
  },
  computed: {
    filteredTodos() {
      return filters[this.visibility](this.todos);
    },
    remaining() {
      const todos = filters.active(this.todos);
      return todos.length;
    },
    allDone: {
      get() {
        return this.remaining === 0;
      },
      set(value) {
        this.todos.forEach((todo) => (todo.is_completed = value));
      },
    },
  },
  async mounted() {
    this.todos = await todoStorage.fetch();
    window.addEventListener("hashchange", this.onHashChange);
  },
  methods: {
    async addTodo(todoTitle) {
      const newTodo = todoTitle && todoTitle.trim();
      if (!newTodo) {
        return;
      }
      const res = await axios.post(URL + "/create-todo", {
        title: newTodo,
        description: "",
      });
      this.todos.push(res.data);
    },
    async removeTodo(todo) {
      await axios.delete(URL + "/delete-todo/" + todo.id);

      this.todos = this.todos.filter((item) => item.id !== todo.id);
    },
    async done(todo, completed) {
      await axios.put(URL + "/update-todo/" + todo.id, {
        title: todo.title,
        description: "",
        is_completed: completed,
      });
      todo.is_completed = completed;
    },
    onHashChange() {
      const visibility = window.location.hash.replace(/#\/?/, "");
      this.visibility = visibility;
    },
    async onAllDone(done) {
      for (let i = 0; i < this.todos.length; i++) {
        const todo = this.todos[i];
        await axios.put(URL + "/update-todo/" + todo.id, {
          title: todo.title,
          description: "",
          is_completed: done,
        });
      }
      this.allDone = done;
    },
    async removeCompleted() {
      for (let i = 0; i < this.todos.length; i++) {
        const todo = this.todos[i];
        await axios.delete(URL + "/delete-todo/" + todo.id);
      }
      this.todos = filters.active(this.todos);
    },
  },
};
</script>

<style>
@import url("https://unpkg.com/todomvc-app-css@2.2.0/index.css");
</style>

<style scoped>
.todo-head-enter-active {
  transition: 1s;
}
.todo-head-enter {
  opacity: 0;
  transform: translateY(-40px);
}
</style>
