<template>
  <div class="auth">
    <div class="conteiner">
      <button @click="start">start</button>
      <div class="number" v-show="mini">{{ mini }}</div>
      <p class="number">{{ mon }}</p>
      <div class="number" v-show="mini">{{ maxi }}</div>
      <input v-model="answer" />
      <div class="setY">{{ response }}</div>
      <button @click="btnNumber">GO</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "auth",
  components: {},
  data() {
    return {
      mon: "",
      response: "",
      mini: "",
      maxi: "",
      answer: "",
      end: "",
    };
  },

  methods: {
    start(end) {
      this.mini = Math.floor(Math.random() * 10);
      this.maxi = Math.floor(Math.random() * 10);

      this.mon = Math.floor(Math.random() * 50);
      if (this.mon < 25) {
        return (this.mon = "+"), (this.end = this.mini + this.maxi);
      }
      if (this.mon > 25 || this.mon < 50) {
        return (this.mon = "-"), (this.end = this.mini + this.maxi);
      }

      this.end = this.mini + this.maxi;

      return end;
    },

    btnNumber() {
      if (this.answer === "") return;
      if (parseInt(this.answer) === this.end) {
        (this.response = "Правильно!!!"), console.log("Правильно");
      } else {
        (this.response = "Не правильно !!!"), console.log(" не Правильно");
      }
      this.$router.push({ name: "Home" });
    },
  },
  computed: {},
};
</script>
<style lang="scss">
.auth {
  .conteiner {
    width: 400px;
  }

  display: flex;
  flex-direction: column;
  align-items: center;

  .number {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8px;
  }
}
</style>
