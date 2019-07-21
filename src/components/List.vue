<template>
    <div id="List">
        <ol>
            <li v-for="n in count" v-bind:key="n" :class="color[n%2]"><Item /></li>
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
        data() {
            return {
                count : 3,
                color:["peach", "white"],
            }
        },
    }
</script>

<style scoped>
    @import '../assets/css/to_do_list.css';
</style>