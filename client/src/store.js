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
    },
    authenticateUser: (state, data) => {
      state.token = data.token
    },
    clearAuthentication: (state) => {
      state.authenticated = false
      state.token = ''
    },
    setError: (state, payload) => {
      state.error = payload
    },
    SOCKET_CONNECT (state) {
      state.isConnect = true
      console.log('socket connected')
    },
    SOCKET_DISCONNECT (state) {
      state.isConnected = false
      state.authenticated = false
      console.log('disoconnected from socket')
    },
    SOCKET_userCreate (state, data) {
      return console.log('sent authentication')
    },
    SOCKET_userLogin: (state, data) => {
      // this.$socket.emit('userLogin', data)
      console.log('userLogin sent')
    },
    clearError (state) {
      state.error = null
    },
    getAuth: (state, data) => {
      if (data) {
        state.authenticated = true
        state.token = data.token
      } else {
        state.authenticated = false
        state.token = ''
      }
    }
  },
  actions: {
    socket_userGetSuccess (context, data) {
      // this.state.token = data.token
      // this.state.authenticated = true
      store.commit('getAuth', data)
      console.log(data.token + ' auth ' + this.state.authenticated)
    }
  }
})
