// main.js
// This is the Main entry file, inside here is the Root of the application

import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from './store'
import 'vuetify/dist/vuetify.css'
import App from './App'
import router from './router'
import VueSocketio from 'vue-socket.io'
import socketConfig from './config/socketConfig'

// define the Vuetify theme structure

Vue.use(Vuetify, {
  theme: {
    // primary: '#2196F3'
    primary: '#1B2030'
    // secondary: '#3C4561'
  }
})

// get sure, that only authenticated Users can access the routes

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
     // this route requires auth, check if logged in
     // if not, redirect to login page.
    if (!store.getters.isAuthenticated) {
      console.log('please login first.!')
      store.dispatch('getLoginAlert', {
        setOn: true
      })
      next({
        path: '/',
        query: { redirect: to.fullPath }
      })
    } else {
      store.dispatch('getLoginAlert', {
        setOn: false
      })
      next()
    }
  } else {
    next()
  }
})

// Defining the Enviroment for the Vuejs application

Vue.config.productionTip = true

// Defining that Vuejs should use Vuetify

Vue.use(VueSocketio, '#/')
console.log(process.env.BASE_URL)

// Define a new Instance of Vuejs

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },

  // If the token was sent from auth0 authentication service it is stored with an expiry date inside of the local storage
  // If there is allready an token inside the storage, the user can proceed without authenticate again
  beforeMount: () => {
    let expiresAt = JSON.parse(localStorage.getItem('expires_at'))
    let isAuthValid = (new Date().getTime() < (expiresAt))
    if (isAuthValid) {
      store.commit('isAuthenticated', {
        auth: true
      })
    } else {
      store.commit('isAuthenticated', {
        auth: false
      })
    }
  }
})
