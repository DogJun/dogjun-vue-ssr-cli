import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '../components/HelloWorld'
Vue.use(Router)

export function createRouter () {
  const router = new Router({
    mode: 'history',
    routes: [
      {
        path: '/',
        component: HelloWorld
      }
    ]
  })
  return router
}