<template>
  <v-container grid-list-xs>
    <h1 class="text-xs-center display-1">Config</h1>
    <v-layout row wrap justify-center>
      <v-flex xs11 flexbox>

        <!-- Network Card -->

        <v-card class="elevation-12 light-blue darken-2">
          <v-card-title primary-title>
            <div class="headline">Networking</div>
          </v-card-title>
          <v-card-media
          src="https://www.networkcomputing.com/sites/default/files/resources/nwc/network%20opt.jpg"
          height="250px">
          </v-card-media>
          <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex md4 xs11>
                  Here you can set the parameters for communication between S7-CPU and Ticoa
                  <v-radio-group v-model="protocolTypeDD" :mandatory="false">
                    <p>Set the protocol</p>
                    <v-radio label="IPv4" value="IPv4" />
                    <v-radio label="IPv6" value="IPv6" />
                  </v-radio-group>
        <!--           <v-select
                  v-bind:items="protocolType"
                  v-model="protocolTypeDD"
                  sigle-line
                  bottom
                  light
                  label="Network Address Type"
                  ></v-select> -->
                  <v-select
                  v-bind:items="networkType"
                  v-model="networkTypeDD"
                  sigle-line
                  bottom
                  label="Network Connection Type"
                  ></v-select>

                  <v-text-field
                    name="IpAdress"
                    label="IP Address"
                    v-model="netAddr"
                  ></v-text-field>
              </v-flex>
            </v-layout>
          </v-container>
          </v-card-text>
        </v-card>

        <!-- Rack card -->

        <v-card class="mt-4 elevation-12 light-blue darken-2">
          <v-card-title primary-title>
            <div class="headline">Rack adjustments</div>
          </v-card-title>
          <v-card-media
          src="https://www.siemens.com/press/pool/de/pressebilder/2013/industry/industry-automation/300dpi/I2013112402-01_300dpi.jpg"
          height="250px">
          </v-card-media>
          <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex md4 xs11>
                  Here you can set the the Configuration of the Rack conected to
                  <v-text-field
                  label="Rack No."
                  v-model="rackNo"
                  required
                  ></v-text-field>

                  <v-text-field
                  label="Slot No."
                  v-model="slotNo"
                  required
                  ></v-text-field>

              </v-flex>
            </v-layout>
          </v-container>
          </v-card-text>
          <v-card-actions>
            <v-btn
            @click="save"
            >
            Save
            </v-btn>
            <v-btn
            @click="clear"
            >
            Clear
            </v-btn>
            <v-btn
            @click="getLastConfigData"
            >
            Load Last Config
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from 'vuex'
import { store } from '../../store'

export default {
  name: 'Config',
  data () {
    return {
      networkTypeDD: null,
      protocolTypeDD: null,
      protocolType: [
          { text: 'IPv4' },
          { text: 'IPv6' }
      ],
      networkType: [
          { text: 'Ethernet' },
          { text: 'Profibus' },
          { text: 'Profinet' },
          { text: 'Modbus' }
      ],
      netAddr: '',
      slotNo: '',
      rackNo: ''
    }
  },
  methods: {
    save () {
      let config
      config = {
        config: {
          netAddr: this.netAddr,
          slotNo: this.slotNo,
          rackNo: this.rackNo
        }
      }
      this.$store.dispatch('sendConfig', {
        config
      })
    },
    clear () {
      this.networkTypeDD = null
      this.netAddr = ''
      this.radio = false
      this.slotNo = ''
      this.rackNo = ''
      this.clearConfig()
    },
    getLastConfigData: () => {
      store.dispatch('getLastConfig')
      let config = store.getters.getConfig
      console.log(this.getConfig)
      this.netAddr = config.netAddr
      this.slotNo = config.slotNo
      this.rackNo = config.rackNo
    },
/*     ...mapActions([
      'getLastConfig'
    ]), */
    ...mapMutations([
      'saveConfig',
      'clearConfig'
    ])
  },
  computed: {
    ...mapGetters([
    'getConfig'
    ])
  },
  beforeEnter () {
    this.netAddr = store.getters.getConfig.netAddr
    this.slotNo = store.getters.getConfig.slotNo
    this.rackNo = store.getters.getConfig.rackNo
  }
}
</script>

<style lang="stylus" scoped>

</style>

