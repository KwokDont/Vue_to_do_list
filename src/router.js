import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Welcome from './views/Welcome.vue'
import TodoList from './views/TodoList.vue'
import Me from './views/Me.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome,

    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        {
          path: 'todolist',
          name: 'todolist',
          component: TodoList,
        },
        {
          path: 'me',
          name: 'me',
          component: Me,
        }
      ]
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    }
  ]
})
