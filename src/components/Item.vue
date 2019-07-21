<template>
    <div id="Item">
        <p>
            <input type="checkbox" class="checkbox" />{{itemMessage}}
        </p>
    </div>
</template>

<script>
    export default {
        name: "listItem",
        props:{
            itemMessage: String,
        }
    }
</script>

<style scoped>
    @import "../assets/css/to_do_list.css";
</style>