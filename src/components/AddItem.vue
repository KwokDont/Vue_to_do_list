<template>
  <div id="addItem">
    <input id="add_input" type="text" v-model="newItem" />
    <button id="add_button" v-on:click="handleAddItem">Add</button>
  </div>
</template>

<script>
export default {
  name: "addItem",
  data() {
    return {
      newItem: ""
    };
  },
  methods: {
    handleAddItem() {
      if (this.newItem == "") {
        alert("不能为空");
        return;
      }
      this.$store.dispatch('addToDo', {item:this.newItem,status:false})
      this.newItem = "";
    }
  }
};
</script>

<style scoped>
@import "../assets/css/to_do_list.css";
</style>