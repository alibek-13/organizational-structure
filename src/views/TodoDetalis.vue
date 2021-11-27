<template>
  <section class="todo-detalies">
    <div class="back">
      <button @click="goBack">Back</button>
    </div>
    <h2>Details Todo</h2>
    <h3>{{ todo.title }}</h3>
    <p>{{ this.joint }}</p>
    <p>{{ this.actual }}</p>
  </section>
</template>

<script>
export default {
  name: "TodoDetalis",
  data: () => ({
    todo: {},
  }),
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
</style>