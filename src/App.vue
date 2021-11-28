<template>
  <div id="app">
    <AppHeader />
    <router-view />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
export default {
  name: "App",
  components: {
    AppHeader,
  },

  computed: {
    cities() {
      return this.$store.state.cities;
    },
  },
};
</script>

<style>
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
}

#app {
  height: 100vh;
}
button {
  color: #000000;
  padding: 5px 5px;
  text-align: center;

  font-size: 10px;
  border: 1px solid rgb(32, 32, 32);
  border-radius: 5px;
  cursor: pointer;
}
a {
  text-decoration: none;
  outline: none;
  color: #ffffff;
}
</style>
