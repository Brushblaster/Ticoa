import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    registrations: [],
    users: [
      {id: 1, name: 'Max', registered: false},
      {id: 1, name: 'Anna', registered: false},
      {id: 1, name: 'Chris', registered: false},
      {id: 1, name: 'Sven', registered: false}
    ]
  },
  getters: {
    unregisteredUsers () {
      return this.state.users.filter(user => {
        return !user.registered
      })
    }
  },
  mutations: {

  },
  actions: {
    register (context, userID) {
      context.commit('register', userID)
    },
    login (context, userID) {
      context.commit('login', userID)
    }
  }
})
