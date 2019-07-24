<template>
  <div id="addItem">
    <a-row  type="flex" class="row-bg" justify="center">
      <a-col :span="8">
        <a-input id="add_input" type="text" v-model="newItem" />
      </a-col>
      <a-col :span="2">
        <a-button id="add_button" v-on:click="handleAddItem">Add</a-button>
      </a-col>
    </a-row>
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
      this.$store.dispatch("addTodo", { item: this.newItem, status: false });
      this.newItem = "";
    }
  }
};
</script>

