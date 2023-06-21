import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../components/MainPage.vue'
import DeviceView from '../components/DeviceView.vue'
import Basket from '../components/Basket.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'MainPage',
    component: MainPage
  },
  {
    path: '/view',
    name: 'DeviceView',
    component: DeviceView
  },
  {
    path: '/basket',
    name: 'Basket',
    component: Basket
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
