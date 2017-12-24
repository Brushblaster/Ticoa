<template>
  <v-container grid-list-xs>
    <h1 class="text-xs-center display-1">Output</h1>
    <v-layout row wrap justify-center>
      <v-flex xs11 flexbox>
        <v-card class="elevation-12 light-blue darken-2">
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
                      <div calss="headline">Direct Acces to Outputs</div>
                    </v-card-title>
                    <v-card-text>
                      <v-switch v-bind:label="`Q 0.0`" color="cyan lighten-2" v-model="outputs.q00"></v-switch>
                      <v-switch v-bind:label="`Q 0.1`" color="cyan lighten-2" v-model="outputs.q01"></v-switch>
                      <v-switch v-bind:label="`Q 0.2`" color="cyan lighten-2" v-model="outputs.q02"></v-switch>
                      <v-switch v-bind:label="`Q 0.3`" color="cyan lighten-2" v-model="outputs.q03"></v-switch>
                      <v-switch v-bind:label="`Q 0.4`" color="cyan lighten-2" v-model="outputs.q04"></v-switch>
                      <v-switch v-bind:label="`Q 0.5`" color="cyan lighten-2" v-model="outputs.q05"></v-switch>
                      <v-switch v-bind:label="`Q 0.6`" color="cyan lighten-2" v-model="outputs.q06"></v-switch>
                      <v-switch v-bind:label="`Q 0.7`" color="cyan lighten-2" v-model="outputs.q07 "></v-switch>
                    </v-card-text>
                  </v-card>
              </v-flex>
              <v-flex md6 xs11 class="ml-3">
                  <v-card>
                    <v-card-title>
                      <div calss="headline">PLC Status</div>
                    </v-card-title>
                    <v-card-text class="text-color">
                      <v-checkbox label="Q 0.0" v-model="outputs.q00" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.1" v-model="outputs.q01" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.2" v-model="outputs.q02" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.3" v-model="outputs.q03" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.4" v-model="outputs.q04" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.5" v-model="outputs.q05" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.6" v-model="outputs.q06" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.7" v-model="outputs.q07 " color="success"></v-checkbox>
                    </v-card-text>
                  </v-card>
                  <v-btn @click="q0_0">
                    fetch
                  </v-btn>
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
      outputs: {
        q00: false,
        q01: false,
        q02: false,
        q03: false,
        q04: false,
        q05: false,
        q06: false,
        q07: false
      }
    }
  },
  watch: {
    outputs: () => {
      let witch = this.outputs
      this.outputChange(witch)
      console.log('Somthing Changed')
    }
  },
  methods: {
    outputChange: (witch) => {
      this.$store.commit('switchOutputState', witch)
    },
    q0_0 () {
      fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => console.log(data))
      .catch(error => console.log('Error :', error))
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

