<!-- inside here there are the inputs to wirte to the PLC -->
<template>
  <v-container grid-list-xs>
    <v-layout row wrap justify-center>
      <v-flex xs11 flexbox>
        <v-card class="elevation-12 light-blue accent-3">
          <v-card-title primary-title>
            <div class="headline">Boolean</div>
          </v-card-title>
          <v-card-media>
          </v-card-media>
          <v-card-text>
          <v-container fluid>
            <v-layout row>
              <v-flex md6 xs11 class="mr-3">
                  <v-card>
                    <v-card-title>
                      <div calss="headline">Inputs</div>
                    </v-card-title>
                    <v-card-text>
                      <v-switch v-for="item in inputs" :key="item.i" :label="item.label" color="cyan lighten-2" v-model.number="item.value"></v-switch>
                    </v-card-text>
                  </v-card>
              </v-flex>
              <v-flex md6 xs11 class="ml-3">
                  <v-card>
                    <v-card-title>
                      <div calss="headline">PLC Status</div>
                    </v-card-title>
                    <v-card-text class="text-color">
                      <v-checkbox v-for="item in status" :key="item.i" :label="item.label" v-model="item.value" color="success"></v-checkbox>
                    </v-card-text>

                  </v-card>
              </v-flex>
            </v-layout>
          </v-container>
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
      stopChange: false,
      inputs: [
      { name: 'i00', i: 1, byte: 0, bit: 0, value: false, label: 'I 8.0' },
      { name: 'i01', i: 2, byte: 0, bit: 1, value: false, label: 'I 8.1' },
      { name: 'i02', i: 3, byte: 0, bit: 2, value: false, label: 'I 8.2' },
      { name: 'i03', i: 4, byte: 0, bit: 3, value: false, label: 'I 8.3' },
      { name: 'i04', i: 5, byte: 0, bit: 4, value: false, label: 'I 8.4' },
      { name: 'i05', i: 6, byte: 0, bit: 5, value: false, label: 'I 8.5' },
      { name: 'i06', i: 7, byte: 0, bit: 6, value: false, label: 'I 8.6' },
      { name: 'i07', i: 8, byte: 0, bit: 7, value: false, label: 'I 8.7' },
      { name: 'i08', i: 9, byte: 1, bit: 0, value: false, label: 'I 9.0' },
      { name: 'i09', i: 10, byte: 1, bit: 1, value: false, label: 'I 9.1' },
      { name: 'i10', i: 11, byte: 1, bit: 2, value: false, label: 'I 9.2' },
      { name: 'i11', i: 12, byte: 1, bit: 3, value: false, label: 'I 9.3' },
      { name: 'i12', i: 13, byte: 1, bit: 4, value: false, label: 'I 9.4' },
      { name: 'i13', i: 14, byte: 1, bit: 5, value: false, label: 'I 9.5' },
      { name: 'i14', i: 15, byte: 1, bit: 6, value: false, label: 'I 9.6' },
      { name: 'i15', i: 16, byte: 1, bit: 7, value: false, label: 'I 9.7' },
      { name: 'i16', i: 17, byte: 2, bit: 0, value: false, label: 'I 10.0' },
      { name: 'i17', i: 18, byte: 2, bit: 1, value: false, label: 'I 10.1' },
      { name: 'i18', i: 19, byte: 2, bit: 2, value: false, label: 'I 10.2' },
      { name: 'i19', i: 20, byte: 2, bit: 3, value: false, label: 'I 10.3' },
      { name: 'i20', i: 21, byte: 2, bit: 4, value: false, label: 'I 10.4' },
      { name: 'i21', i: 22, byte: 2, bit: 5, value: false, label: 'I 10.5' },
      { name: 'i22', i: 23, byte: 2, bit: 6, value: false, label: 'I 10.6' },
      { name: 'i23', i: 24, byte: 2, bit: 7, value: false, label: 'I 10.7' },
      { name: 'i24', i: 25, byte: 3, bit: 0, value: false, label: 'I 11.0' },
      { name: 'i25', i: 26, byte: 3, bit: 1, value: false, label: 'I 11.1' },
      { name: 'i26', i: 27, byte: 3, bit: 2, value: false, label: 'I 11.2' },
      { name: 'i27', i: 28, byte: 3, bit: 3, value: false, label: 'I 11.3' },
      { name: 'i28', i: 30, byte: 3, bit: 4, value: false, label: 'I 11.4' },
      { name: 'i29', i: 31, byte: 3, bit: 5, value: false, label: 'I 11.5' },
      { name: 'i30', i: 32, byte: 3, bit: 6, value: false, label: 'I 11.6' },
      { name: 'i31', i: 33, byte: 3, bit: 7, value: false, label: 'I 11.7' }
      ],
      status: [
      { name: 'i00', i: 1, byte: 0, bit: 0, value: false, label: 'I 8.0' },
      { name: 'i01', i: 2, byte: 0, bit: 1, value: false, label: 'I 8.1' },
      { name: 'i02', i: 3, byte: 0, bit: 2, value: false, label: 'I 8.2' },
      { name: 'i03', i: 4, byte: 0, bit: 3, value: false, label: 'I 8.3' },
      { name: 'i04', i: 5, byte: 0, bit: 4, value: false, label: 'I 8.4' },
      { name: 'i05', i: 6, byte: 0, bit: 5, value: false, label: 'I 8.5' },
      { name: 'i06', i: 7, byte: 0, bit: 6, value: false, label: 'I 8.6' },
      { name: 'i07', i: 8, byte: 0, bit: 7, value: false, label: 'I 8.7' },
      { name: 'i08', i: 9, byte: 1, bit: 0, value: false, label: 'I 9.0' },
      { name: 'i09', i: 10, byte: 1, bit: 1, value: false, label: 'I 9.1' },
      { name: 'i10', i: 11, byte: 1, bit: 2, value: false, label: 'I 9.2' },
      { name: 'i11', i: 12, byte: 1, bit: 3, value: false, label: 'I 9.3' },
      { name: 'i12', i: 13, byte: 1, bit: 4, value: false, label: 'I 9.4' },
      { name: 'i13', i: 14, byte: 1, bit: 5, value: false, label: 'I 9.5' },
      { name: 'i14', i: 15, byte: 1, bit: 6, value: false, label: 'I 9.6' },
      { name: 'i15', i: 16, byte: 1, bit: 7, value: false, label: 'I 9.7' },
      { name: 'i16', i: 17, byte: 2, bit: 0, value: false, label: 'I 10.0' },
      { name: 'i17', i: 18, byte: 2, bit: 1, value: false, label: 'I 10.1' },
      { name: 'i18', i: 19, byte: 2, bit: 2, value: false, label: 'I 10.2' },
      { name: 'i19', i: 20, byte: 2, bit: 3, value: false, label: 'I 10.3' },
      { name: 'i20', i: 21, byte: 2, bit: 4, value: false, label: 'I 10.4' },
      { name: 'i21', i: 22, byte: 2, bit: 5, value: false, label: 'I 10.5' },
      { name: 'i22', i: 23, byte: 2, bit: 6, value: false, label: 'I 10.6' },
      { name: 'i23', i: 24, byte: 2, bit: 7, value: false, label: 'I 10.7' },
      { name: 'i24', i: 25, byte: 3, bit: 0, value: false, label: 'I 11.0' },
      { name: 'i25', i: 26, byte: 3, bit: 1, value: false, label: 'I 11.1' },
      { name: 'i26', i: 27, byte: 3, bit: 2, value: false, label: 'I 11.2' },
      { name: 'i27', i: 28, byte: 3, bit: 3, value: false, label: 'I 11.3' },
      { name: 'i28', i: 30, byte: 3, bit: 4, value: false, label: 'I 11.4' },
      { name: 'i29', i: 31, byte: 3, bit: 5, value: false, label: 'I 11.5' },
      { name: 'i30', i: 32, byte: 3, bit: 6, value: false, label: 'I 11.6' },
      { name: 'i31', i: 33, byte: 3, bit: 7, value: false, label: 'I 11.7' }
      ]
    }
  },
  watch: {
    inputs: {
      // watching if the output state changes
      handler: function (val, oldVal) {
        if (!this.stopChange) {
          this.status = this.inputs
          this.inputChange()
        }
      },
      deep: true
    }
  },
  methods: {
    inputChange () {
      // Forming an array of bits out of an Array of objects

      let inp = []

      // The for loop checks every index of the array an convert it to bits

      for (let i = 0; i < this.inputs.length; i++) {

        // If the index is boolen "true" the bit array recieves an 1

        if (this.inputs[i].value === true) {
          inp.push(1)

        // If the index is boolean "false" the bit array recieves an 0

        } else if ((this.inputs[i].value === false)) {
          inp.push(0)
        }

        // If the for loop reached the end, data is sent out

        if ((this.inputs.length - 1) === i) {
          console.log('inp: ', JSON.stringify(inp))
          this.$socket.emit('inputChange', JSON.stringify(inp))
        }
      }
    }
  },
  sockets: {
    inputChange_res (data) {
      let inServer = JSON.parse(data)

      // The for loop checks every index of the array an convert it to bits

      for (let i = 0; i < inServer.length; i++) {
        this.stopChange = true
        // If the index is boolen "true" the bit array recieves an 1

        if (inServer[i] === 1) {
          this.inputs[i].value = true

        // If the index is boolean "false" the bit array recieves an 0

        } else if ((inServer[i] === 0)) {
          this.inputs[i].value = false
        }

        // If the for loop reached the end, data is sent out

        if ((inServer.length - 1) === i) {
          console.log('recieved: ', JSON.stringify(inServer))
          this.stopChange = false
        }
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>


</template>
