<template>
  <div id="Item">
    <p v-if="!edit">
      <input type="checkbox" class="checkbox" @click="handleCheck" v-model="status" />
      <span :class="check" @dblclick="handleEdit">{{item.item}}</span>
      <button class="button" @click="handleDelete">×</button>
    </p>
    <p v-else>
      <input v-model="input" @keyup.enter="handleEdit"/>
    </p>
  </div>
</template>

<script>
export default {
  name: "Item",
  props: {
    item: Object
  },
  data() {
    return {
      status: this.item.status,
      edit: false,
      input: ""
    };
  },
  methods: {
    handleCheck() {
      this.status = !this.status;
      this.$store.dispatch("updateToDo", { ...this.item, status: this.status });
    },
    handleEdit() {
      if (this.input !== "") {
        this.$store.dispatch("updateToDo", { ...this.item, item: this.input });
      }
      this.edit = !this.edit;
    },
    handleDelete() {
      this.$store.dispatch("deleteTodo", this.item);
    }
  },
  computed: {
    check() {
      return this.status ? "check" : "none";
    }
  }
};
</script>

<style scoped>
@import "../assets/css/to_do_list.css";
</style>