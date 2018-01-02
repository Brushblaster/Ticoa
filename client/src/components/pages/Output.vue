<!-- inside here the output bits are set and sent to the server -->
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
                      <div calss="headline">Outputs</div>
                    </v-card-title>
                    <v-card-text>
                      <v-switch v-for="item in outputs" :key="item.i" :label="item.label" color="cyan lighten-2" v-model.number="item.value"></v-switch>
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
  name: 'Outputs',
  data: () => {
    return {
      outputs: [
      { name: 'q00', i: 1, byte: 0, bit: 0, value: false, label: 'Q 8.0' },
      { name: 'q01', i: 2, byte: 0, bit: 1, value: false, label: 'Q 8.1' },
      { name: 'q02', i: 3, byte: 0, bit: 2, value: false, label: 'Q 8.2' },
      { name: 'q03', i: 4, byte: 0, bit: 3, value: false, label: 'Q 8.3' },
      { name: 'q04', i: 5, byte: 0, bit: 4, value: false, label: 'Q 8.4' },
      { name: 'q05', i: 6, byte: 0, bit: 5, value: false, label: 'Q 8.5' },
      { name: 'q06', i: 7, byte: 0, bit: 6, value: false, label: 'Q 8.6' },
      { name: 'q07', i: 8, byte: 0, bit: 7, value: false, label: 'Q 8.7' },
      { name: 'q08', i: 9, byte: 1, bit: 0, value: false, label: 'Q 9.0' },
      { name: 'q09', i: 10, byte: 1, bit: 1, value: false, label: 'Q 9.1' },
      { name: 'q10', i: 11, byte: 1, bit: 2, value: false, label: 'Q 9.2' },
      { name: 'q11', i: 12, byte: 1, bit: 3, value: false, label: 'Q 9.3' },
      { name: 'q12', i: 13, byte: 1, bit: 4, value: false, label: 'Q 9.4' },
      { name: 'q13', i: 14, byte: 1, bit: 5, value: false, label: 'Q 9.5' },
      { name: 'q14', i: 15, byte: 1, bit: 6, value: false, label: 'Q 9.6' },
      { name: 'q15', i: 16, byte: 1, bit: 7, value: false, label: 'Q 9.7' },
      { name: 'q16', i: 17, byte: 2, bit: 0, value: false, label: 'Q 10.0' },
      { name: 'q17', i: 18, byte: 2, bit: 1, value: false, label: 'Q 10.1' },
      { name: 'q18', i: 19, byte: 2, bit: 2, value: false, label: 'Q 10.2' },
      { name: 'q19', i: 20, byte: 2, bit: 3, value: false, label: 'Q 10.3' },
      { name: 'q20', i: 21, byte: 2, bit: 4, value: false, label: 'Q 10.4' },
      { name: 'q21', i: 22, byte: 2, bit: 5, value: false, label: 'Q 10.5' },
      { name: 'q22', i: 23, byte: 2, bit: 6, value: false, label: 'Q 10.6' },
      { name: 'q23', i: 24, byte: 2, bit: 7, value: false, label: 'Q 10.7' },
      { name: 'q24', i: 25, byte: 3, bit: 0, value: false, label: 'Q 11.0' },
      { name: 'q25', i: 26, byte: 3, bit: 1, value: false, label: 'Q 11.1' },
      { name: 'q26', i: 27, byte: 3, bit: 2, value: false, label: 'Q 11.2' },
      { name: 'q27', i: 28, byte: 3, bit: 3, value: false, label: 'Q 11.3' },
      { name: 'q28', i: 30, byte: 3, bit: 4, value: false, label: 'Q 11.4' },
      { name: 'q29', i: 31, byte: 3, bit: 5, value: false, label: 'Q 11.5' },
      { name: 'q30', i: 32, byte: 3, bit: 6, value: false, label: 'Q 11.6' },
      { name: 'q31', i: 33, byte: 3, bit: 7, value: false, label: 'Q 11.7' }
      ],
      status: [
      { name: 'q00', i: 1, byte: 0, bit: 0, value: false, label: 'Q 8.0' },
      { name: 'q01', i: 2, byte: 0, bit: 1, value: false, label: 'Q 8.1' },
      { name: 'q02', i: 3, byte: 0, bit: 2, value: false, label: 'Q 8.2' },
      { name: 'q03', i: 4, byte: 0, bit: 3, value: false, label: 'Q 8.3' },
      { name: 'q04', i: 5, byte: 0, bit: 4, value: false, label: 'Q 8.4' },
      { name: 'q05', i: 6, byte: 0, bit: 5, value: false, label: 'Q 8.5' },
      { name: 'q06', i: 7, byte: 0, bit: 6, value: false, label: 'Q 8.6' },
      { name: 'q07', i: 8, byte: 0, bit: 7, value: false, label: 'Q 8.7' },
      { name: 'q08', i: 9, byte: 1, bit: 0, value: false, label: 'Q 9.0' },
      { name: 'q09', i: 10, byte: 1, bit: 1, value: false, label: 'Q 9.1' },
      { name: 'q10', i: 11, byte: 1, bit: 2, value: false, label: 'Q 9.2' },
      { name: 'q11', i: 12, byte: 1, bit: 3, value: false, label: 'Q 9.3' },
      { name: 'q12', i: 13, byte: 1, bit: 4, value: false, label: 'Q 9.4' },
      { name: 'q13', i: 14, byte: 1, bit: 5, value: false, label: 'Q 9.5' },
      { name: 'q14', i: 15, byte: 1, bit: 6, value: false, label: 'Q 9.6' },
      { name: 'q15', i: 16, byte: 1, bit: 7, value: false, label: 'Q 9.7' },
      { name: 'q16', i: 17, byte: 2, bit: 0, value: false, label: 'Q 10.0' },
      { name: 'q17', i: 18, byte: 2, bit: 1, value: false, label: 'Q 10.1' },
      { name: 'q18', i: 19, byte: 2, bit: 2, value: false, label: 'Q 10.2' },
      { name: 'q19', i: 20, byte: 2, bit: 3, value: false, label: 'Q 10.3' },
      { name: 'q20', i: 21, byte: 2, bit: 4, value: false, label: 'Q 10.4' },
      { name: 'q21', i: 22, byte: 2, bit: 5, value: false, label: 'Q 10.5' },
      { name: 'q22', i: 23, byte: 2, bit: 6, value: false, label: 'Q 10.6' },
      { name: 'q23', i: 24, byte: 2, bit: 7, value: false, label: 'Q 10.7' },
      { name: 'q24', i: 25, byte: 3, bit: 0, value: false, label: 'Q 11.0' },
      { name: 'q25', i: 26, byte: 3, bit: 1, value: false, label: 'Q 11.1' },
      { name: 'q26', i: 27, byte: 3, bit: 2, value: false, label: 'Q 11.2' },
      { name: 'q27', i: 28, byte: 3, bit: 3, value: false, label: 'Q 11.3' },
      { name: 'q28', i: 30, byte: 3, bit: 4, value: false, label: 'Q 11.4' },
      { name: 'q29', i: 31, byte: 3, bit: 5, value: false, label: 'Q 11.5' },
      { name: 'q30', i: 32, byte: 3, bit: 6, value: false, label: 'Q 11.6' },
      { name: 'q31', i: 33, byte: 3, bit: 7, value: false, label: 'Q 11.7' }
      ]
    }
  },
  watch: {
    outputs: {
      // watching if the output state changes
      handler: function (val, oldVal) {
        this.status = this.outputs
        this.outputChange()
      },
      deep: true
    }
  },
  methods: {
    outputChange () {
      // Forming an array of bits out of an Array of objects

      let out = []

      // The for loop checks every index of the array an convert it to bits

      for (let i = 0; i < this.outputs.length; i++) {

        // If the index is boolen "true" the bit array recieves an 1

        if (this.outputs[i].value === true) {
          out.push(1)

        // If the index is boolean "false" the bit array recieves an 0

        } else if ((this.outputs[i].value === false)) {
          out.push(0)
        }

        // If the for loop reached the end, data is sent out

        if ((this.outputs.length - 1) === i) {
          console.log('out: ', JSON.stringify(out))
          this.$socket.emit('outputChange', JSON.stringify(out))
        }
      }
    }
  },
  beforeMount () {
    this.$socket.emit('readConfig')
  }
}
</script>

<style lang="stylus" scoped>

</style>

