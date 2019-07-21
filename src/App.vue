<template>
  <div id="app">
    <Header />
    <AddItem />
    <List />
  </div>
</template>

<script>
import Header from './components/Header';
import List from './components/List';
import AddItem from './components/AddItem';

export default {
  name: 'app',
  components: {
    Header,
    List,
    AddItem,
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
