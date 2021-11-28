import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [
      {
        title: "Aktau",
        joint: 12,
        actual: 12,
        child: [
          {
            title: "Aktau1",
            joint: 12,
            actual: 12,
            child: [
              {
                title: "Aktau2",
                joint: 12,
                actual: 12,
                child: [
                  {
                    title: "Aktau3",
                    joint: 12,
                    actual: 12,
                    child: [
                      {
                        title: "Aktau4",
                        joint: 12,
                        actual: 12,
                        child: [],
                      },
                    ],
                  },
                ],
              },
              {
                title: "Aktobe",
                joint: 12,
                actual: 12,
                child: [],
              },
            ],
          },
        ],
      },
      {
        title: "Oskemen",
        joint: 12,
        actual: 112,
        child: [],
      },
    ],
  },
  mutations: {
    SET_CITY(state, payload) {
      state.cities.push(payload);
    },
    // SET_TODOS(state, todos) {
    //   state.todoList = todos;
    // },
  },
  actions: {
    addCity({ commit }, payload) {
      commit("SET_CITY", { payload });
    },
    editCity({ commit }, payload) {
      commit("SET_CITY", { payload });
    },
    deleteCity({ commit }, payload) {
      commit("SET_CITY", { payload });
    },
  },
  getters: {
    cities: (state) => state.cities,
  },
});
