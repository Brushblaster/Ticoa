<!-- Inside the App.vue component the entire app is build -->

<template>
  <v-app dark class="blue-grey darken-2">
    <Layout/>
    <v-footer fixed app color="blue-grey lighten-1">
      <span class="ml-4">&copy; 2017 | D.Käch</span>
      <v-spacer />
      <a class="mr-4" href="https://next.vuetifyjs.com"><span>created with awsome Vuetify</span></a>
    </v-footer>
  </v-app>
</template>

<script>
import Layout from '@/components/layouts/Layout'
// import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      clipped: false,
      drawer: false,
      fixed: false,
      items: [{
        icon: 'bubble_chart',
        title: 'Inspire'
      }],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  },
  components: {
    Layout
  }
}
</script>

<style lang="stylus">

</style>
