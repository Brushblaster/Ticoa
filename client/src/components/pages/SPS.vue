<!-- inside here the static informations from the PLC are displayed -->
<template>
  <v-container fluid grid-list-xs >
        <v-layout row wrap justify-center>
          <v-flex xs11 flexbox class="text-xs-center">
             <v-card class="mb-2 elevation-12 light-blue accent-3">
              <v-card-title primary-title>
                <div>
                  <h3 class="display-1 mb-0">CPU Control</h3>
                </div>
              </v-card-title>
              <v-card-text>
                <v-layout>
                  <v-flex>
                    <v-btn @click="plcStatus">
                      Hot Start
                    </v-btn>
                    <v-btn @click="plcColdStart">
                      Cold Start
                    </v-btn>
                    <v-btn @click="plcStop">
                      Stop CPU
                    </v-btn>
                    <v-btn @click="plcStatus">
                      Status CPU
                    </v-btn>
                  </v-flex>

                  <v-flex>
                    <div class="headline mt-2">Status: {{ this.Status }}</div>
                  </v-flex>
                </v-layout>
              </v-card-text>
              <v-card-actions>

              </v-card-actions>
            </v-card>
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
      orderCode: {},
      Status: ''
    }
  },
  methods: {
    writeConfig () {
      this.$socket.emit('readConfig')
    },
    plcHotStart () {
      this.$socket.emit('plcHotStart')
    },
    plcColdStart () {
      this.$socket.emit('plcColdStart')
    },
    plcStop () {
      this.$socket.emit('plcStop')
    },
    plcStatus () {
      this.$socket.emit('plcStatus')
    },
    plcGetCpuInfo () {
      this.$socket.emit('plcGetCpuInfo')
    },
    plcGetOrderCode () {
      this.$socket.emit('plcGetOrderCode')
    }

  },
  beforeMount () {
    this.$socket.emit('readConfig')
    setTimeout(() => {
      this.plcStatus()
      this.plcGetCpuInfo()
      this.plcGetOrderCode()
    }, 200)
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
      } else {
        console.log('Read Cpu Info Error : ', data.err)
      }
    },
    plcGetOrderCode_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
        this.orderCode.execTime = msgExecTime
      }
      if (data.err === null) {
        this.orderCode = data.orderCode
      } else {
        console.log('Get Cpu order Code Error: ', data.err)
      }
    },
    plcHotStart_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
      }
      if (data.err === null) {
        console.log(data)
      } else {
        console.log('Plc Hot Start Error: ', data.err)
      }
    },
    plcColdStart_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
      }
      if (data.err === null) {
        console.log(data)
      } else {
        console.log('Plc Cold Start Error: ', data.err)
      }
    },
    plcStop_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
      }
      if (data.err === null) {
        console.log(data)
      } else {
        console.log('Plc Stop Error: ', data.err)
      }
    },
    plcStatus_res: function (data) {
      if (data.execTime) {
        let msgExecTime = data.execTime + ' ms - '
      }
      if (data.err === null) {
        this.Status = data.plcStatus
        console.log(data)
      } else {
        console.log('Plc Status Error: ', data.err)
      }
    }
  }
}

</script>

<style lang="stylus">

</style>
