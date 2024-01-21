import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import fonts from  "@/assets/styles/fonts.scss"

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  store,
  fonts,
  render: h => h(App)
}).$mount('#app')
