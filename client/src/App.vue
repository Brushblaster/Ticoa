<template>
  <v-app>
    <layout />
    <router-view />
  </v-app>
</template>

<script>
import layout from '@/components/Layout'

export default {
  data () {
    return {

    }
  },
  components: {
    layout
  }
}
</script>
