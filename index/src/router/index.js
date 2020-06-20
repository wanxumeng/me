import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/skill',
    name: 'skill',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/skill.vue')
    }
  },
  {
    path:'/products',
    name:'products',
    component:()=>import("../views/Products.vue")
},
{
  path:'/item',
  name:'item',
  component:()=>import("../views/item.vue")
},
{
  path:'/concact',
  name:'concact',
  component:()=>import("../views/concact.vue")
}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
