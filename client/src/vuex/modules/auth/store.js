import router from '../../../router'

export default {
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
    isAuthenticated (state, valid) {
      console.log('payload: ' + valid.payload)
      if (valid.payload === true) {
        state.isAuthenticated = true
        console.log('Autehntication is valid !')
        router.push('/home')
      } else {
        state.isAuthenticated = false
        console.log('Authentication is void')
      }
    },
    getLoginAlert: (state, acc) => {
      console.log('alert: ' + acc.Seton)
      if (acc.setOn === true) {
        state.loginAlert = true
      } else {
        state.loginAlert = false
      }
    }
  },
  actions: {
    isAuthenticated ({ commit, state }, auth) {
      console.log('auth: ' + auth.auth)
      if (auth.auth === true) {
        return new Promise((resolve, reject) => {
          commit('isAuthenticated', {
            payload: true
          })
        })
      } else {
        return new Promise((resolve, reject) => {
          commit('isAuthenticated', {
            payload: false
          })
        })
      }
    },
    getLoginAlert: ({ commit }, acc) => {
      console.log('actionAlert: ' + alert)
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
