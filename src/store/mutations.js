export const mutations = {
    submitNewItem(state, payload) {
        state.todoList.push(payload)
    },
    checkTodoItem(state, payload) {
        state.todoList[state.todoList.findIndex(item => item.id === payload.id)].status = payload.status
    },
    setToDoList(state, payload) {
        state.todoList = payload.list;
    }
}