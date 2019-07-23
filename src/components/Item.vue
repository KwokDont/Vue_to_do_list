<template>
  <div id="Item">
    <p>
      <input type="checkbox" class="checkbox" @click="handleCheck" v-model="status" />
      <span :class="check">{{item.item}}</span>
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
      status: this.item.status
    };
  },
  methods: {
    handleCheck() {
      this.status = !this.status;
      this.$store.commit("checkTodoItem", {
        id: this.item.id,
        status: this.status
      });
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