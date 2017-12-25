// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import { store } from './store'
// import { sync } from 'vuex-router-sync'
import 'vuetify/dist/vuetify.css'
import 'material-design-icons/iconfont/material-icons.css'
import App from './App'
import router from './router'
import './utils/apiCrecentials'

Vue.use(Vuetify, {
  theme: {
    // primary: '#2196F3'
    primary: '#1B2030'
    // secondary: '#3C4561'
  }
})

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
    next() // make sure to always call next()!
  }
})

Vue.config.productionTip = false

// console.log(this.$store.state.connect)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App },
  // Autologin based on existing token inside the local Storage
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
