import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
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
