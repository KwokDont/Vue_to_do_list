<template>
  <div id="todolist">
    <Header />
    <AddItem />
    <List :todoList="getList" />
    <FootButtopm @changeShow="changeShow" />
  </div>
</template>

<script>
import Header from "../components/Header";
import List from "../components/List";
import AddItem from "../components/AddItem";
import FootButtopm from "../components/FootButton";

export default {
  name: "todolist",
  components: {
    Header,
    List,
    AddItem,
    FootButtopm
  },
  mounted(){
    this.$store.dispatch('getTodos')
  },
  data() {
    return {
      show : "all",
    };
  },
  computed: {
    getList(){
      if (this.show === "all") {
        return this.$store.getters.getAllList
      }else if (this.show === "todo"){
        return this.$store.getters.getActiveList
      }else{
        return this.$store.getters.getCompleteList
      }
    },
  },
  methods: {
    changeShow(show) {
      this.show = show
    }
  }
};
</script>

