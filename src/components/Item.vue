<template>
    <div id="Item">
        <p>
            <input type="checkbox" class="checkbox" v-on:click="handleCheck"/><span :class="check" >{{itemMessage}}</span>
        </p>
    </div>
</template>

<script>
    export default {
        name: "listItem",
        props:{
            itemMessage: String,
        },
        data() {
          return {
            check: "none",
          }
        },
        methods: {
          handleCheck(){
            this.check === "check" ? this.check = "none" : this.check = "check";
          }
        },
    }
</script>

<style scoped>
    @import "../assets/css/to_do_list.css";
</style>