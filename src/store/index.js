import Vue from 'vue'
import Vuex from 'vuex'

import market from './market.module'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    market
  }
})