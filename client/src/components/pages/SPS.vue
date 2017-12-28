<template>
  <v-container fluid grid-list-xs >
    <h1 class="text-xs-center">SPS</h1>
        <v-layout v-bind="binding" justify-center >
          <v-flex xs5 mr-4 class="text-xs-center">
            <v-card raised dark class="cyan darken-3">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">CPU Control</h3>
                </div>
              </v-card-title>
              <v-card-actions>

              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs5 ml-4 class="text-xs-center" >
            <v-card raised dark class="cyan darken-3">
              <v-card-title primary-title>
                <div>
                  <h3 class="headline mb-0">CPU Status</h3>
                </div>
              </v-card-title>
              <v-card-text>
                CPU info
              </v-card-text>
            </v-card>
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      ex11: true,
      isMobile: false,
      cpuInfo: {},
      orderCode: {}
    }
  },
  mounted () {
    // console.log(this.$vuetify.breakpoint)
  },
  beforeDestroy () {
    this.onResize()
    window.addEventListener('resize', this.onResize, { passive: true })
  },
  methods: {
    onResize () {
      this.isMobile = window.innerWidth < 600
    },
    writeConfig () {
      this.$socket.emit('readConfig')
    },
    sendData () {
      this.$socket.emit('startPlc')
    },
    sendData2 () {
      this.$socket.emit('startPlc2')
    }
  },
  computed: {
    binding () {
      const binding = {}

      if (this.$vuetify.breakpoint.smAndUp) {
        binding.row = true
      } else if (this.$vuetify.breakpoint.smAndDown) {
        binding.column = true
      }

      return binding
    }
  },
  beforeMount () {
    this.$socket.emit('readConfig')
    this.$socket.emit('plcGetCpuInfo')
    this.$socket.emit('plcGetOrderCode')
  },
  sockets: {
    plcGetCpuInfo_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
        this.cpuInfo.execTime = msgExecTime
      }
      let prop
      if (data.err === null) {
        this.cpuInfo = data.cpuInfo
      }
      console.log('data: ', this.cpuInfo)
    },
    plcGetOrderCode_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
        this.orderCode.execTime = msgExecTime
      }
      if (data.err === null) {
        this.orderCode = data.orderCode
        console.log(data)
      }

    }
  }
}

</script>

<style lang="stylus">

</style>
