// Inside here the state, getters, mutations and actions for the Authentification service are stored

import router from '../../../router'

export default {
  // defining witch state to hold
  state: {
    isAuthenticated: false,
    loginAlert: false
  },
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated
    },
    loginAlert: state => {
      return state.loginAlert
    }
  },
  mutations: {
    isAuthenticated (state, auth) {
      if (auth.auth === true) {
        state.isAuthenticated = true
        console.log('Autehnticatied...!')
        router.push('/home')
      } else {
        state.isAuthenticated = false
        console.log('Authentication is invalid !')
      }
    },
    getLoginAlert: (state, acc) => {
      if (acc.setOn === true) {
        state.loginAlert = true
      } else {
        state.loginAlert = false
      }
    }
  },
  actions: {
    isAuthenticated ({ commit, state }, auth) {
      if (auth.auth === true) {
        return new Promise((resolve, reject) => {
          commit('isAuthenticated', {
            auth: true
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          commit('isAuthenticated', {
            auth: false
          })
        })
      }
    },
    getLoginAlert: ({ commit }, acc) => {
      if (acc.setOn === true) {
        commit('getLoginAlert', {
          setOn: true
        })
      } else {
        commit('getLoginAlert', {
          setOn: false
        })
      }
    }
  }
}
