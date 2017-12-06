// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.css'
import VueSocketIo from 'vue-socket.io'

import App from './App'
import router from './router'

// const SocketInstance = io('http://localhost:8081')

Vue.use(Vuetify, {
  theme: {
    primary: '#2196F3'
  }
})
Vue.use(VueSocketIo, 'http://localhost:8081')

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
