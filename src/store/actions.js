import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)
Vue.prototype.$ajax = axios

const baseUrl = "http://5d36b1f086300e0014b644e6.mockapi.io/api/v1/todolist";

const actions = {
    getToDos({commit}){
        axios.get(baseUrl)
        .then(response => {
            commit('setToDoList',{list: response.data})
        }).catch();
    },
}

export default actions