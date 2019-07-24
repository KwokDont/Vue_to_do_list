import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import {AxiosUtil} from '../plugins/axios'

Vue.use(VueAxios, axios);

const baseUrl = "http://5d36b1f086300e0014b644e6.mockapi.io/api/v1/todolist";

const action = {
  getTodos({ commit }) {
    AxiosUtil(baseUrl,'get').then((res) => {commit('setTodoList', { list: res })}, (err) => {console.log(err)})
  },
  addTodo(context, data) {
    AxiosUtil(baseUrl,'post',data).then(()=>{context.dispatch('getTodos')}, (err) => {console.log(err)})
  },
  updateTodo(context, data) {
    AxiosUtil(`${baseUrl}/${data.id}`,'put',data).then(()=>{context.dispatch('getTodos')}, (err) => {console.log(err)})
  },
  deleteTodo(context, data) {
    AxiosUtil(`${baseUrl}/${data.id}`,'delete').then(()=>{context.dispatch('getTodos')}, (err) => {console.log(err)})
  }
}

export default action;