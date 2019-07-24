<template>
  <div id="footButton">
    <a-button v-on:click="handleClick(`all`)">ALL</a-button>
    <a-button v-on:click="handleClick(`todo`)">Active</a-button>
    <a-button v-on:click="handleClick(`done`)">Complete</a-button>
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