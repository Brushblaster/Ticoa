<template>
  <div>
    <h1> rescoureces Page </h1>
    <div id="gauges">
    </div>
    <div id="gauges2">
    </div>
    <v-card>
      <v-card-text>
        <v-slider
        min="0"
        max="300"
        step="0"
        ></v-slider>
        <v-slider
        step="0"
        min="0"
        max="300"
        ></v-slider>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
// import VueCharts from 'vue-chartjs'
import auth from '../../utils/AuthService'

export default {
<<<<<<< HEAD
  name: 'Resources',
=======
  name: 'resources',
  porps: [ auth ],
>>>>>>> 04a161a6002713fb6c0b984870dd96e200093b96
  data () {
    this.auth.isAuthenticated()
    return {
      value1: 0,
      value2: 0
    }
  },
  components: {
  }
}
</script>

<style lang="stylus" scoped>
#gauges
  display block
  margin auto
  width 10%

#gauges2
  margin auto
  width 10%
</style>
