import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/service/:id',
    name: 'service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/results',
    name: 'results',
    component: () => import('../views/Results.vue')
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/politics',
    name: 'politics',
    component: () => import('../views/Politics.vue')
  },
  {
    path: '/about-us',
    name: 'about-us',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/legals',
    name: 'legals',
    component: () => import('../views/Legals.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
