export default {
  setTodoList(state, payload){
    state.todoList = payload.list;
  },
  submitNewItem(state, payload) {
    state.todoList.push(payload)
  },
  checkTodoItem(state, payload) {
    state.todoList[state.todoList.findIndex(item => item.id === payload.id)].status = payload.status
  },
  setUsername(state, payload){
    state.username = payload.name;
  }
}