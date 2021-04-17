import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobReg from '../views/job_register.vue'
import UniReg from '../views/uni_register.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/job_reg',
    name: 'JobReg',
    component: JobReg
  },
  {
    path: '/uni_reg',
    name: 'UniReg',
    component: UniReg
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
