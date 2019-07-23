import {getters} from './getters'
import {mutations} from './mutations'
import actions from './actions'
import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state:{
        todoList: []
    },
    getters,
    mutations,
    actions
}) 



