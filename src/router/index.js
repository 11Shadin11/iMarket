import Vue from 'vue'
import VueRouter from 'vue-router'
import MainPage from '../views/MainPage.vue'
import DeviceView from '../views/DeviceView.vue'
import Basket from '../views/Basket.vue'
import FavoriteProductsPage from '../views/FavoriteProductsPage.vue'

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
  },
  {
    path: '/favoriteProductsPage',
    name: 'FavoriteProductsPage',
    component: FavoriteProductsPage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
