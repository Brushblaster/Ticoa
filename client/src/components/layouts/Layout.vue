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
      <v-toolbar-side-icon @click.native.stop="Sidebar = !Sidebar"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="miniVariant ? 'chevron_right' : 'chevron_left'"></v-icon>
      </v-btn>
      <v-btn icon @click.stop="fixed = !fixed">
        <v-icon>remove</v-icon>
      </v-btn>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">Ticoa</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon @click.native.stop="options =! options">
        <v-icon>more_vert</v-icon>
      </v-btn>
    </v-toolbar>
    <v-content>
      <router-view>
        <v-container fluid></v-container>
      </router-view>
    </v-content>
  </div>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      Sidebar: false,
      fixed: false,
      options: false,
      Sidebarlinks: [
        { icon: 'home', title: 'Home', path: '/home' },
        { icon: 'web', title: 'Resources', path: '/resources' },
        { icon: 'web', title: 'Manual', path: '/manual' },
        { icon: 'input', title: 'Sign In', path: '/signin' },
        { icon: 'details', title: 'Sign Up', path: '/signup' },
        { icon: 'device_hub', title: 'Admin', path: '/admin' }
      ],
      miniVariant: false
    }
  }
}

</script>

<style scoped>
</style>
