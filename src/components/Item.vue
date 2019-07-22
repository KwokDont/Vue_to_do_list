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
        props:{
            item: Object
        },
        data() {
          return {
            check: this.item.status,
            status: this.item.status==="check" ? true : false,
          };
        },
        methods: {
          handleCheck(){
            this.check === "check" ? (this.check = "none") : (this.check = "check");
            this.$emit("checkItem", { item: this.item.item, status: this.check });
          }
        }
    }
</script>

<style scoped>
    @import "../assets/css/to_do_list.css";
</style>