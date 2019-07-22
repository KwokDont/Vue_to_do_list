<template>
  <div id="app">
    <Header />
    <AddItem />
    <List :todoItem="getList" />
    <FootButtom @changeShow="changeShow" />
  </div>
</template>

<script>
import Header from './components/Header';
import List from './components/List';
import AddItem from './components/AddItem';
import FootButtom from './components/FootButton';

export default {
  name: 'app',
  components: {
    Header,
    List,
    AddItem,
    FootButtom,
  },
  data() {
    return {
      showList: this.getAllList,
      show : "all"
    }
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
    }
  },
  methods: {
    changeShow(show) {
      this.show = show
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
