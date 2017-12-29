<template>
  <v-container fluid grid-list-xs >
        <v-layout row wrap justify-center>
          <v-flex xs11 flexbox class="text-xs-center">
<!--             <v-card class="mb-2 elevation-12 light-blue accent-3">
              <v-card-title primary-title>
                <div>
                  <h3 class="display-1 mb-0">CPU Control</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex>
                    <v-btn @click="$socket.emit('plcHotStart')">
                      Hot Start
                    </v-btn>
                    <v-btn @click="$socket.emit('plcColdStart')">
                      Cold Start
                    </v-btn>
                    <v-btn @click="$socket.emit('plcStop')">
                      Stop CPU
                    </v-btn>
                    <v-btn @click="$socket.emit('plcStatus')">
                      Status CPU
                    </v-btn>
                  </v-flex>

                  <v-flex>
                    <div></div>
                    Status
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>

              </v-card-actions>
            </v-card> -->

            <v-card class="mb-2 elevation-12 light-blue accent-3">
              <v-card-title primary-title>
                <div>
                  <h3 class="display-1 mb-0">CPU Information</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex>
                    <div class="subheading text-xs-left mb-4">
                      Model:
                    </div>
                    <div class="subheading text-xs-left mb-4">
                      S/N:
                    </div>
                    <div class="subheading text-xs-left mb-4">
                      Module Name:
                    </div>
                    <div class="subheading text-xs-left mb-4">
                      Copyright:
                    </div>
                  </v-flex>

                  <v-flex>
                    <div class="subheading text-xs-right mb-4">
                      {{ cpuInfo.ModuleTypeName }}
                    </div>
                    <div class="subheading text-xs-right mb-4">
                      {{ cpuInfo.SerialNumber }}
                    </div>
                    <div class="subheading text-xs-right mb-4">
                      {{ cpuInfo.ModuleName }}
                    </div>
                    <div class="subheading text-xs-right mb-4">
                      {{ cpuInfo.Copyright }}
                    </div>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>

              </v-card-actions>
            </v-card>
          </v-flex>

          <v-flex xs11 class="text-xs-center" >
            <v-card class="mt-2 elevation-12 light-blue accent-3">
              <v-card-title class="text-xs-center">
                <div>
                  <h3 class="display-1 mb-0">Catalog Information</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex>
                    <div class="subheading text-xs-left mb-4">
                      Order Code:
                    </div>
                    <div class="subheading text-xs-left mb-4">
                      Version:
                    </div>
                  </v-flex>

                  <v-flex>
                    <div class="subheading text-xs-right mb-4">
                      {{ orderCode.Code }}
                    </div>
                    <div class="subheading text-xs-right mb-4">
                      {{ orderCode.V1 }}.{{ orderCode.V2 }}.{{ orderCode.V3 }}
                    </div>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>
              </v-card-actions>
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
    log () {
      console.log(this.orderCode)
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
        console.log(this.orderCode)
      }
    },
    plcHotStart_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
      }
      if (data.err === null) {
        console.log(data)
      }
    },
    plcColdStart_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
      }
      if (data.err === null) {
        console.log(data)
      }
    },
    plcStop_res: function (data) {
            if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
      }
      if (data.err === null) {
        console.log(data)
      }
    },
    plcStatus_res: function (data) {
            if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
      }
      if (data.err === null) {
        console.log(data)
      }
    }
  }
}

</script>

<style lang="stylus">

</style>
