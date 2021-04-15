import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Aforo from '../views/Aforo.vue'
import Contacto from '../views/Contacto.vue'
import Finalizar from '../views/Finalizar.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/acerca',
    name: 'Acerca de',
    component: About
  },
  {
    path: '/contacto',
    name: 'Contacto',
    component: Contacto
  },
  {
    path: '/aforo',
    name: 'Aforo',
    component: Aforo
  }
  ,
  {
    path: '/finalizar',
    name: 'Finalizar Pedido',
    component: Finalizar
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
