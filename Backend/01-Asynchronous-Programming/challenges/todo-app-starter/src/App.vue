<template>
  <h1>todos</h1>
  <TodoInput />
</template>

<script>
import TodoInput from "./components/TodoInput.vue";
export default {
  name: "App",
  components: {
    TodoInput,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html,
body,
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  min-height: 100vh;
  min-width: 100vw;
  height: 100%;
  width: 100%;
  overflow-x: hidden;
  background: #f5f5f5;
  font-size: 2rem;
}

h1 {
  color: #ead7d7;
}
</style>
