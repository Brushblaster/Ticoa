import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Register from '@/components/pages/Register'
import Resources from '@/components/pages/Resources'
import Manual from '@/components/pages/Manual'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/resources',
      name: 'resources',
      component: Resources
    },
    {
      path: '/manual',
      name: 'manual',
      component: Manual
    }
  ],
  mode: 'history'
})
