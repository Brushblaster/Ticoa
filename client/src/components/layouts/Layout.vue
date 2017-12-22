<template>
  <div>
    <v-system-bar color="primary"></v-system-bar>
      <v-navigation-drawer
      fixed
      :mini-variant="miniVariant"
      :clipped="true"
      v-model="Sidebar"
      app
      light
    >
      <v-list>
        <v-list-tile
          value="true"
          v-for="item in Sidebarlinks"
          :key="item.title"
          router
          :to="item.path"
          :disabled="this.isAuthenticated"
        >
          <v-list-tile-action>
            <v-icon v-html="item.icon"></v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title v-text="item.title"></v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar fixed app dark class="primary" :clipped-left="clipped">
      <v-toolbar-side-icon @click.stop="Sidebar = !Sidebar"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-toolbar-title>
        <router-link to="/home" tag="span" style="cursor: pointer">Ticoa</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.stop="login" v-show="!this.isAuthenticated">
        <v-icon v-html="this.isAuthenticated ? 'lock' : 'lock_open'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="logout" v-show="this.isAuthenticated">
        <v-icon v-html="this.isAuthenticated ? 'lock' : 'lock_open'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="options =! options">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view >
        <v-container fluid></v-container>
      </router-view>
      <!-- <loading v-else /> -->
    </v-content>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import AuthService from '../../utils/AuthService'
import Loading from '../layouts/Loading'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
      console.log(authState.authenticated)
      if (authState.authenticated === true) {
        this.$store.dispatch('isAuthenticated', {
          auth: true
        })
      } else {
        this.$store.dispatch('isAuthenticated', {
          auth: false
        })
      }
    })

    return {
      clipped: false,
      Sidebar: false,
      fixed: false,
      options: false,
      Sidebarlinks: [
        { icon: 'home', title: 'Home', path: '/home', disabled: !this.isAuthenticated },
        { icon: 'web', title: 'Resources', path: '/resources', disabled: !this.isAuthenticated },
        { icon: 'web', title: 'Manual', path: '/manual', disabled: !this.isAuthenticated },
        { icon: 'device_hub', title: 'Admin', path: '/admin', disabled: !this.isAuthenticated }
      ],
      miniVariant: false,
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout,
    test () {
      authNotifier.emit('authChange', { authenticated: true })
      console.log(authenticated)
    },
    test2 () {
      console.log(this.authenticated)
    }
  },
  components: {
    Loading
  },
  computed: {
    ...mapGetters([
      'isAuthenticated'
    ])
  }
}

</script>

<style scoped>
</style>
