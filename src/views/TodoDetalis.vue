<template>
  <section class="todo-detalies">
    <div class="back">
      <button @click="goBack">Back</button>
    </div>
    <h2>Details Todo</h2>
    <h3>{{ todo.title }}</h3>
    <p>{{ todo.joint }}</p>
    <p>{{ todo.actual }}</p>
  </section>
</template>

<script>
export default {
  name: "TodoDetalis",
  data: () => ({
    todo: {},
  }),
  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
  methods: {
    goBack() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped></style>
