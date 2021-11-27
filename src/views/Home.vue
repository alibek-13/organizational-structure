<template>
  <div class="main">
    <transition name="modal">
      <div v-show="Modal" class="modal-mask">
        <div class="modal-wrapper">
          <div class="modal-container">
            <div class="modal-header">
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
                <button class="model" @click="closeModal">Отменит</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </transition>
    <button class="submit" @click="AddCityModal">
      + добавить
    </button>
    <div class="content">
      <div class="main header">Город</div>
      <div class="total header">Общие количество</div>
      <div class="amount header">Фактическое количество</div>
      <div class="action header">Действие</div>
    </div>
    <div v-if="todoList.length" class="todos">
      <Todo v-for="todo in todoList" :key="todo.created_at" :todo="todo" />
    </div>
  </div>
</template>

<script>
import Todo from "../components/Todo.vue";

export default {
  name: "Home",
  components: {
    Todo,

  },
  data() {
    return {
      title: "",
      joint: "",
      actual: "",
      Modal: false,
    };
  },
  methods: {
    AddCity() {
      this.$router.push({ name: "AddTodo" });
    },
    AddCityModal() {
      this.Modal = true;
    },
    closeModal() {
      this.Modal = false;
      return {
        title: "",
        joint: "",
        actual: "",
      };
    },
    addTodo() {
      if (!this.title || !this.joint || !this.actual) return;
      // Поставить валидацию для времени
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
  computed: {
    todoList() {
      return this.$store.state.todoList;
    },
  },
};
</script>

<style>
.content {
  display: flex;
  justify-content: space-between;
  background-color: #2d3e50;
}
.contents {
}
.submit {
  margin: 15px;
}

/*  */
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 300px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  font-family: Helvetica, Arial, sans-serif;
}

.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>