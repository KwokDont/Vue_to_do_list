<template>
  <div id="footButton">
    <button v-on:click="handleClick(`all`)">ALL</button>
    <button v-on:click="handleClick(`todo`)">Active</button>
    <button v-on:click="handleClick(`done`)">Complete</button>
  </div>
</template>

<script>
export default {
  name: "footButton",
  methods: {
    handleClick(param){
      this.$emit('changeShow',param)
    }
  },
}
</script>

<style scoped>
  @import '../assets/css/to_do_list.css';
</style>