<template>
  <div id="List">
    <a-list
      :dataSource="todoList"
      class="demo-loadmore-list"
      itemLayout="horizontal"
      :pagination="true"
    >
      <a-list-item slot="renderItem" slot-scope="item, index" :class="color[index%2]">
        <a slot="actions" @click="handleEdit(item)">edit</a>
        <a slot="actions" @click="handleDelete(item)">delete</a>
        <a slot="actions" @click="handleDone(item)">done</a>
        <span @dblclick="handleEdit(item)">{{item.item}}</span>
      </a-list-item>
    </a-list>
  </div>
</template>

<script>
export default {
  name: "list",
  props: {
    todoList: Array
  },
  data() {
    return {
      color: ["white", "peach"],
      input: ""
    };
  },
  methods: {
    handleDelete(item) {
      console.log(item);
      this.$store.dispatch("deleteTodo", item);
    },
    handleDone(item) {
      item.status = !item.status;
      this.$store.dispatch("updateTodo", {
        id: item.id,
        todo: item.todo,
        status: item.status
      });
    },
    handleEdit() {
      this.edit = !this.edit
    },
    handleChange(item){
      this.$store.dispatch("updateTodo", {
        id: item.id,
        todo: this.input,
        status: item.status
      });
    }
  },
};
</script>

<style>
.demo-loadmore-list {
  min-height: 350px;
}
.check {
  text-decoration: line-through;
  color: gray;
}
.none {
  text-decoration: none;
}
.white {
}
.peach {
  background-color: #f4ecec;
  height: 20px;
}
</style> 
