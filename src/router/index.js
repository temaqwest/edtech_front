import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import JobReg from '../views/job_register.vue'
import Vacancies from '../views/Vacancies.vue'
import Internships from '../views/Internships.vue'
import Profile from '../views/Profile.vue'
import store from '../store'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/internships',
    name: 'Internships',
    component: Internships
  },
  {
    path: '/job_reg',
    name: 'JobReg',
    component: JobReg
  },
  {
    path: '/vacancies',
    name: 'Vacancies',
    component: Vacancies
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach(async function(to, from, next) {
  const statusRestoring =  window.localStorage.logged;
  if (!statusRestoring && to.name !== 'JobReg') {
    next({name: 'JobReg'})
  }
  await store.dispatch('user/getUser')
  next()
});

export default router
