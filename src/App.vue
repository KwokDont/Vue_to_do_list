<template>
  <div id="app">
    <Header />
    <AddItem />
    <List />
    <FootButtom/>
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
