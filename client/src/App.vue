<template>
  <v-app dark class="blue-grey darken-2">
    <Layout/>
    <v-footer fixed app color="blue-grey lighten-1">
      <span>&copy; D.Käch</span>
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

<style>
/*
  .application--dark {
    background-color: #3C4561;
  }
*/
</style>
