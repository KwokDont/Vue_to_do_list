<template>
  <div id="app">
    <Header />
    <AddItem @submitNewItem="addListItem" />
    <List :todoItem="showList" @checkItem="checkItem" />
    <FootButtopm @changeShow="changeShow" />
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
      todoItem: [],
      doneItem: [],
      showList: [],
      show: "all"
    }
  },
  methods: {
    addListItem(newItem) {
      this.todoItem.push(newItem);
      this.changeShow(this.show);
    },
    checkItem(item) {
      if (item.status === "check") {
        console.log("check", item);
        this.todoItem.splice(
          this.todoItem.map(item => item.item).indexOf(item.item),1);
        this.doneItem.push(item);
      } else {
        console.log("else", item);
        this.doneItem.splice(
          this.doneItem.map(item => item.item).indexOf(item.item),1);
        this.todoItem.push(item);
      }
      console.log("todo", this.todoItem);
      console.log("done", this.doneItem);
      this.changeShow(this.show);
    },
    changeShow(show) {
      this.show = show;
      if (show === "all") {
        let temp = this.todoItem;
        this.showList = temp.concat(this.doneItem);
      } else if (show === "todo") {
        let temp = this.todoItem;
        this.showList = temp;
      } else {
        let temp = this.doneItem;
        this.showList = temp;
      }
  },
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
