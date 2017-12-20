import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Resources from '@/components/pages/Resources'
import Manual from '@/components/pages/Manual'
import Admin from '@/components/pages/Admin'
import SPS from '@/components/pages/SPS'
import Input from '@/components/pages/Input'
import Output from '@/components/pages/Output'
import Config from '@/components/pages/Config'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },

    {
      path: '/resources',
      name: 'Resources',
      component: Resources
    },
    {
      path: '/manual',
      name: 'Manual',
      redirect: 'manual/sps',
      component: Manual,
      children: [
        {
          path: 'sps',
          name: 'SPS',
          components: {
            a: SPS
          }
        },
        {
          path: 'input',
          name: 'Input',
          components: {
            a: Input
          }
        },
        {
          path: 'output',
          name: 'Output',
          components: {
            a: Output
          }
        },
        {
          path: 'config',
          name: 'Config',
          components: {
            a: Config
          }
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }

  ],
  mode: 'history'
})
