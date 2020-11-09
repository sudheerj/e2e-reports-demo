<template>
  <div class="container">
    <div class="row">
      <div class="col-6 py-5">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <div class="row mb-3">
      <create-todo @on-add="addTodo($event)" />
    </div>
    <div class="row">
      <div class="col-6 col-sm-10 col-lg-6">
        <ul class="list-group">
          <todo
            v-for="(todo, index) in todos"
            :key="index"
            :description="todo.description"
            :completed="todo.completed"
            @on-toggle="toggleTodo(todo)"
            @on-delete="deleteTodo(todo)"
            @on-edit="editTodo(todo, $event)"
          />
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from "./Todo.vue";
import CreateTodo from "./CreateTodo.vue";

export default {
  props: {
    title: String
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    addTodo(newTodo) {
      this.todos.push({ description: newTodo, completed: false });
    },
    toggleTodo(todo) {
      todo.completed = !todo.completed;
    },
    deleteTodo(deletedTodo) {
      this.todos = this.todos.filter(todo => todo !== deletedTodo);
    },
    editTodo(todo, newTodoDescription) {
      todo.description = newTodoDescription;
    }
  },
  components: { Todo, CreateTodo },
};
</script>

<style scoped lang="scss">
  .container {
    margin-right: unset;
  }
</style>
