<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center>
      <v-flex xs11 flexbox>

        <!-- Network Card -->

        <v-card class="elevation-12 light-blue accent-3">
          <v-card-title primary-title>
            <div class="headline">Networking</div>
          </v-card-title>
          <v-card-media
          src="../../../static/img/networkopt.jpg"
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

        <v-card class="mt-4 elevation-12 light-blue accent-3">
          <v-card-title primary-title>
            <div class="headline">Rack adjustments</div>
          </v-card-title>
          <v-card-media
          src="../../../static/img/I2013112402-01_300dpi.jpg"
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
            Load
            </v-btn>
          </v-card-actions>
          <p class="ml-2 caption">Timestamp of last Config: {{ this.createdOn }}</p>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
import { store } from '../../store'
const moment = require('moment')

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
      netAddr: null,
      slotNo: null,
      rackNo: null,
      createdOn: null
    }
  },
  methods: {
    save () {
      let config
      config = {
        config: {
          netAddr: this.netAddr,
          slotNo: this.slotNo,
          rackNo: this.rackNo,
          networkType: this.networkTypeDD.text,
          protocolType: this.protocolTypeDD
        }
      }
      console.log(config)
      this.$socket.emit('saveConfig', config)
    },
    clear () {
      this.networkTypeDD = null
      this.netAddr = ''
      this.protocolTypeDD = null
      this.slotNo = ''
      this.rackNo = ''
      this.createdOn = ''
    },
    getLastConfigData () {
      this.$socket.emit('getLastConfig')
    }
  },
  beforeMount () {
    this.getLastConfigData()
  },
  sockets: {
    getLastConfig_res: function (res) {
      this.networkTypeDD = res.config.networkType
      this.protocolTypeDD = res.config.protocolType
      this.netAddr = res.config.netAddr
      this.slotNo = res.config.slotNo
      this.rackNo = res.config.rackNo
      moment.locale('de-ch')
      let Dat = moment(res.createdOn).format('LLLL')
      this.createdOn = Dat
      console.log('res: ', res)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

