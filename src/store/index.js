import Vue from 'vue'
import Vuex from 'vuex'

import products from '@/store/modules/products'
import categories from '@/store/modules/categories'
import cart from '@/store/modules/cart'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    products,
    categories,
    cart
  }
})
