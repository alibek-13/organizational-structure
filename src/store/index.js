import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    todoList: []
  },
  mutations: {
    ADD_TODO(state, todo) {
      state.todoList.push(todo);
    },
    // SET_TODOS(state, todos) {
    //   state.todoList = todos;
    // },
  },
  actions: {},
});
