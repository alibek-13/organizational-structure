<template>
  <div class="AddTodoList">
    <div class="container">
      <form @submit.prevent="addTodo" class="form__Todo">
        <select name="city">
          <option value="City"></option>
          <option value="center"></option>
          <option value="menegment"></option>
          <option value="otdel"></option>
        </select>
        <input
          class="model"
          v-model.trim="title"
          type="text"
          placeholder="Отделение"
        />
        <input
          class="model"
          v-model.trim="joint"
          type="text"
          placeholder="Обище количество"
        />
        <input
          class="model"
          v-model.trim="actual"
          type="text"
          placeholder="Фактическое количество"
        />
        <button class="model" type="submit">Добавить</button>
        <button class="model" @click="toHomePage">Отменит</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodo",
  data() {
    return {
      title: "",
      joint: "",
      actual: "",
    };
  },
  methods: {
    addTodo() {
      if (!this.title || !this.joint || !this.actual) return;
      this.$store.commit("ADD_TODO", {
        title: this.title,
        joint: this.joint,
        actual: this.actual,
        created_at: Date.now(),
      });
      this.toHomePage();
    },
    toHomePage() {
      this.$router.push({ name: "Home" });
    },
  },
};
</script>

<style scoped>
.AddTodoList {
  display: flex;
  align-items: center;
  justify-content: center;
}
.container {
  width: 400px;
}
.model {
  margin: 5px;
}
.form__Todo {
  margin: 8px;
}
span {
  border: none;
}
</style>