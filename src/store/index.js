import Vue from 'vue'
import Vuex from 'vuex'

import cart from './cart'
import user from './user'

Vue.use(Vuex)

export default new Vuex.Store({
  state: () => ({}),
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    cart,
    user,
  },
})
