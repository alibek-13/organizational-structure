import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import AddTodo from "../views/AddTodo.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/todolist",
    name: "TodoList",
    component: AddTodo,
    meta: {
      requireAuth: true,
    }
  },
  {
    path: "/TodoDetailsPage/:id",
    name: "TodoDetailsPage",
    component: () => import("@/views/TodoDetalis.vue"),
    meta: {
      layout: "Todo-Detalis",
    }
  },
  {
    path: "*",
    name: "404",
    redirect: "/",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
