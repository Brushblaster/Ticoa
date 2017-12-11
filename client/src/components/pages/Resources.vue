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
        v-model="value1"
        min="0"
        max="300"
        step="0"
        ></v-slider>
        <v-slider
        v-model="value2"
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

export default {
  data () {
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
