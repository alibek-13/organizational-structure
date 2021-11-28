<template>
  <div class="todo">
    <div class="todo__header">
      <span @click="open">Открыть</span>
    </div>

    <div class="content">
      <div class="main header">{{ todo.title }}</div>
      <div class="total header">{{ todo.joint }}</div>
      <div class="amount header">{{ todo.actual }}</div>
      <div class="action header"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Todo",
  props: {
    todo: {
      type: Object,
      required: true,
      default: () => ({}),
    },
  },
  methods: {
    open() {
      this.$router.push({
        name: "TodoDetailsPage",
        params: { id: this.todo.created_at },
      });
    },
  },
};
</script>

<style scoped>
.todo {
  margin: 1rem auto;
  border: 1px solid black;
}
h3,
p {
  margin: 0 0 0.5rem 0;
}
</style>
