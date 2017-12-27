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
                      <v-switch v-bind:label="`Q 0.0`" color="cyan lighten-2" v-model="q00"></v-switch>
                      <v-switch v-bind:label="`Q 0.1`" color="cyan lighten-2" v-model="q01"></v-switch>
                      <v-switch v-bind:label="`Q 0.2`" color="cyan lighten-2" v-model="q02"></v-switch>
                      <v-switch v-bind:label="`Q 0.3`" color="cyan lighten-2" v-model="q03"></v-switch>
                      <v-switch v-bind:label="`Q 0.4`" color="cyan lighten-2" v-model="q04"></v-switch>
                      <v-switch v-bind:label="`Q 0.5`" color="cyan lighten-2" v-model="q05"></v-switch>
                      <v-switch v-bind:label="`Q 0.6`" color="cyan lighten-2" v-model="q06"></v-switch>
                      <v-switch v-bind:label="`Q 0.7`" color="cyan lighten-2" v-model="q07 "></v-switch>
                    </v-card-text>
                  </v-card>
              </v-flex>
              <v-flex md6 xs11 class="ml-3">
                  <v-card>
                    <v-card-title>
                      <div calss="headline">PLC Status</div>
                    </v-card-title>
                    <v-card-text class="text-color">
                      <v-checkbox label="Q 0.0" v-model="q00" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.1" v-model="q01" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.2" v-model="q02" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.3" v-model="q03" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.4" v-model="q04" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.5" v-model="q05" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.6" v-model="q06" color="success"></v-checkbox>
                      <v-checkbox label="Q 0.7" v-model="q07 " color="success"></v-checkbox>
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
      q00: false,
      q01: false,
      q02: false,
      q03: false,
      q04: false,
      q05: false,
      q06: false,
      q07: false
    }
  },
  watch: {
    q00 () {
      this.outputChange()
    },
    q01 () {
      this.outputChange()
    },
    q02 () {
      this.outputChange()
    },
    q03 () {
      this.outputChange()
    },
    q04 () {
      this.outputChange()
    },
    q05 () {
      this.outputChange()
    },
    q06 () {
      this.outputChange()
    },
    q07 () {
      this.outputChange()
    },
    q08 () {
      this.outputChange()
    }
  },
  methods: {
    outputChange () {
      let outputs = {
        q00: this.q00,
        q01: this.q01,
        q02: this.q02,
        q03: this.q03,
        q04: this.q04,
        q05: this.q05,
        q06: this.q06,
        q07: this.q07
      }
      console.log(outputs)
      this.$store.dispatch('switchOutput', {
        outputs
      })
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>

