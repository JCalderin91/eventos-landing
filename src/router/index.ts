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
    path: '/servicio/:id',
    name: 'service',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/combo/:id',
    name: 'combo',
    component: () => import('../views/Service.vue')
  },
  {
    path: '/resultados',
    name: 'results',
    component: () => import('../views/Results.vue')
  },
  {
    path: '/perfil/:id',
    name: 'profile',
    component: () => import('../views/Profile.vue')
  },
  {
    path: '/politicas-de-uso',
    name: 'politics',
    component: () => import('../views/Politics.vue')
  },
  {
    path: '/contactenos',
    name: 'about-us',
    component: () => import('../views/AboutUs.vue')
  },
  {
    path: '/terminos-legales',
    name: 'legals',
    component: () => import('../views/Legals.vue')
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404.vue')
  },
  {
    path: '/unauthorized',
    name: 'unauthorized',
    component: () => import('../views/Unauthorized.vue')
  },
  {
    path: '*',
    redirect: '/404'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})




export default router
