import router from '../../../router'

export default {
  state: {
    isAuthenticated: false
  },
  getters: {
    isAuthenticated: state => {
      return state.isAuthenticated
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
    }
  }
}
