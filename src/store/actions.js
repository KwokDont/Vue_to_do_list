import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);

const baseUrl = "http://5d36b1f086300e0014b644e6.mockapi.io/api/v1/todolist";

const action = {
  getTodos({ commit }) {
    Vue.axios
      .get(baseUrl)
      .then((response) => {
        commit('setTodoList', { list: response.data })
      }).catch(error => console.log(error))
  },
  addTodo(context, data) {
    Vue.axios
      .post(baseUrl, data)
      .then((response)=>{
        if (response.status === 201) {
          context.dispatch('getTodos')
        }
      }).catch(error => console.log(error))
  },
  updateTodo(context , data) {
    Vue.axios
      .put(`${baseUrl}/${data.id}`, data)
      .then((response)=>{
        if (response.status === 200) {
          context.dispatch('getTodos');
        }
      }).catch(error => console.log(error))
  },
  deleteTodo(context, data) {
    Vue.axios
      .delete(`${baseUrl}/${data.id}`)
      .then((response)=>{
        if (response.status === 200) {
          context.dispatch('getTodos');
        }
      }).catch(error => console.log(error))
  }
}

export default action;