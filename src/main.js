import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'

Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  state: {
    todoList : [],
  },
  getters : {
    getAllList (state) {
      return state.todoList
    },
    getActiveList (state) {
      return state.todoList.filter(item => item.status === "none")
    },
    getCompleteList (state) {
      return state.todoList.filter(item => item.status === "check")
    },
  },
  mutations : {
    submitNewItem(state, payload){
      state.todoList.push(payload)
    },
    checkTodoItem(state,payload){
      state.todoList[state.todoList.findIndex(item => item.id === payload.id)].status = payload.check
    }
  }
})

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
