import Vue from 'vue'
import Vuex from 'vuex'
// import products from './modules/products'
import user from './modules/user'
import internship from './modules/internship'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loading: false
  },
  mutations: {
    SET_LOADING(state, loading) {
      state.loading = loading;
    },
  },
  actions: {
  },
  getters: {
    isLoading(state) {
      return state.loading;
    }
  },

  modules: {
    user,
    internship
  },
})
