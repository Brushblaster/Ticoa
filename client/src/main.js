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

Vue.use(Vuetify, {
  theme: {
    // primary: '#2196F3'
    primary: '#1B2030'
    // secondary: '#3C4561'
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
  components: { App }
})
