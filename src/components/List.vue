<template>
    <div id="List">
        <ol>
            <li v-for="n in count" v-bind:key="n"><Item /></li>
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
            }
        },
    }
</script>