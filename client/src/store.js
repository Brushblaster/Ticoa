import Vue from 'vue'
import Vuex from 'vuex'
import auth from './vuex/modules/auth/store'

Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth
  },
  state: {
    isConnected: false,
    authenticated: false,
    loading: false,
    error: null,
    token: ''
  },
  getters: {
    getToken: (state) => {
      return state.token
    }
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
  }
})
