export const getters = {
    getAllList(state) {
        return state.todoList
    },
    getActiveList(state) {
        return state.todoList.filter(item => item.status === false)
    },
    getCompleteList(state) {
        return state.todoList.filter(item => item.status === true)
    }
}