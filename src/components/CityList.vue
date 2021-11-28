<template>
  <div>
    <div id="main"></div>
    <div v-for="(item, index) in cities" :key="index">
      {{ item.title }}
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { addCity, editCity, deleteCity} from "../helpers/index";
// eslint-disable-next-line no-unused-vars
const callAction = (type) => {
  switch (type) {
    case "add":
      addCity();
      break;

    case "edit":
      editCity();
      break;

    case "delete":
      deleteCity();
      break;

    default:
      break;
  }
};

export default {
  computed: {
    ...mapGetters(["cities"]),
  },
  async created() {
    await this.init();
  },
  mounted() {},
  watch: {
    cities: {
      immediate: false,
      async handler() {
        await this.removeTable();
        await this.creteTable();
      },
    },
  },
  methods: {
    init() {
      console.log(this.cities);
      this.creteTable();
    },
    lestener() {
      document
        .getElementsByClassName("btn")
        .addEventListener("click", this.test());
    },
    test() {
      console.log("test1");
    },
    removeTable() {
      var element = document.getElementsByTagName("table"),
        index;

      for (index = element.length - 1; index >= 0; index--) {
        element[index].parentNode.removeChild(element[index]);
      }
    },
    createActionButton(el) {
      const btnAdd = document.createElement("input");
      btnAdd.type = "button";
      btnAdd.className = "btn";
      btnAdd.value = "add";
      btnAdd.onclick = () => {
        console.log("add");
        callAction("add");
      };

      const btnEdit = document.createElement("input");
      btnEdit.type = "button";
      btnEdit.className = "btn";
      btnEdit.value = "edit";
      btnEdit.onclick = () => {
        console.log("edit");
        callAction("edit");
      };
      const btnDelete = document.createElement("input");
      btnDelete.type = "button";
      btnDelete.className = "btn";
      btnDelete.value = "delete";
      btnDelete.onclick = () => {
        console.log("delete");
        callAction("delete");
      };

      el.appendChild(btnAdd);
      el.appendChild(btnEdit);
      el.appendChild(btnDelete);
    },
    creteRow(table, element) {
      const tr = document.createElement("tr");
      tr.setAttribute("class", "rowTable");
      const td1 = document.createElement("td");
      const td2 = document.createElement("td");
      const td3 = document.createElement("td");
      const td4 = document.createElement("div");
      const text1 = document.createTextNode(element.title);
      const text2 = document.createTextNode(element.joint);
      const text3 = document.createTextNode(element.actual);

      td1.appendChild(text1);
      td2.appendChild(text2);
      td3.appendChild(text3);
      this.createActionButton(td4);

      tr.appendChild(td1);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);

      table.appendChild(tr);

      if (element.child.length > 0) {
        element.child.forEach((child) => {
          this.creteRow(table, child);
        });
      } else return;
    },
    creteTable() {
      const table = document.createElement("table");
      const thead = document.createElement("thead");
      table.appendChild(thead);
      this.cities.forEach((element) => {
        this.creteRow(table, element);
      });
      document.body.appendChild(table);
    },
  },
};
</script>

<style lang="scss">
.rowTable {
  margin: 20px 20px;
  border: 1px solid black;
}
.btn {
  border: none;
  outline: none;
  color: red;
  width: 70px;
  padding: 10px;
  margin: 10px;
}
.btn:hover {
  cursor: pointer;
}
</style>
