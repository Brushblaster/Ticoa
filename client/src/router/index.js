// this is the main router file, every route and the nested ones are managed from here

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
import Root from '@/components/pages/Root'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Root',
      component: Root
    },
    {
      path: '/home',
      name: 'Home',
      component: Home,
      meta: { requiresAuth: true }
    },

    {
      path: '/resources',
      name: 'Resources',
      component: Resources,
      meta: { requiresAuth: true }
    },
    {
      path: '/manual',
      name: 'Manual',
      redirect: 'manual/sps',
      component: Manual,
      meta: { requiresAuth: true },
      children: [
        {
          path: 'sps',
          name: 'SPS',
          components: {
            a: SPS
          },
          meta: { requiresAuth: true }
        },
        {
          path: 'input',
          name: 'Input',
          components: {
            a: Input
          },
          meta: { requiresAuth: true }
        },
        {
          path: 'output',
          name: 'Output',
          components: {
            a: Output
          },
          meta: { requiresAuth: true }
        },
        {
          path: 'config',
          name: 'Config',
          components: {
            a: Config
          },
          meta: { requiresAuth: true }
        }
      ]
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin,
      meta: { requiresAuth: true }
    }

  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { x: 0, y: 0 }
    }
  }
})

