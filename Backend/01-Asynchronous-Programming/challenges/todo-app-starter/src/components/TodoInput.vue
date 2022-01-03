<template>
  <input
    class="new-todo"
    type="text"
    v-model="newTodo.title"
    placeholder="What needs to be done?"
    @keyup.enter.native="addTodo"
  />
</template>

<script>
export default {
  emits: ["todo:add"],
  data() {
    return {
      newTodo: {
        userId: new Date().valueOf().toString(), // Generates unique string.
        id: new Date().valueOf().toString(), // Generates unique string.
        title: "",
        completed: false,
      },
    };
  },
  methods: {
    addTodo() {
      if (!this.newTodo.title) {
        alert("Todo cannot be empty!");
        return;
      }

      this.$emit("todo:add", this.newTodo);
    },
  },
};
</script>

<style scoped>
/* Styling will be scoped just for this component */
input {
  padding: 16px 16px 16px 60px;
  border: none;
  background: rgba(0, 0, 0, 0.003);
  box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%), 0 25px 50px 0 rgb(0 0 0 / 10%);
  outline: none;
}
</style>
