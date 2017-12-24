import Vue from 'vue'
import Vuex from 'vuex'
import auth from './vuex/modules/auth/store'
import setConfig from './vuex/modules/setConfig/store'
import outputs from './vuex/modules/outputs/store'
Vue.use(Vuex)

export const store = new Vuex.Store({
  modules: {
    auth,
    setConfig,
    outputs
  },
  state: {
    isConnected: false,
    authenticated: false,
    loading: false,
    error: null
  },
  getters: {
  },
  mutations: {
    setLoading (state, payload) {
      state.loading = payload
    }
  },
  actions: {
  }
})
