<template>
    <div id="List">
        <ol>
            <li v-for="(item,index) in todoItem" v-bind:key="index" :class="color[index%2]"><Item :itemMessage="item"/></li>
        </ol>

    </div>
</template>

<script>
    import Item from './Item';
    export default {
        name: "list",
        components: {
            Item,
        },
        props:{
            todoItem: Array,
        },
        data() {
            return {
                color:["white", "peach"],
            }
        },
    }
</script>

<style scoped>
    @import '../assets/css/to_do_list.css';
</style>