import Vue from 'vue'
import VueRouter from 'vue-router'
import admin from './admin'
import imgText from './imgText'
import liuyan from './liuyan'
Vue.use(VueRouter)

const routes = [
  ...admin,
    ...imgText,
    ...liuyan
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
