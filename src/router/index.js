import Vue from 'vue'
import VueRouter from 'vue-router'
import administration from './administration'

Vue.use(VueRouter)

const routes = [
  ...administration,
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
