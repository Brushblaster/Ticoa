<template>
  <v-container grid-list-xs>
    <h1 class="text-xs-center display-1">Iutput</h1>
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
                      <div calss="headline">Direct Acces to Inputs</div>
                    </v-card-title>
                    <v-card-text>
                      <v-switch v-bind:label="`I 0.0`" color="cyan lighten-2" v-model="i0_0"></v-switch>
                      <v-switch v-bind:label="`I 0.1`" color="cyan lighten-2" v-model="i0_1"></v-switch>
                      <v-switch v-bind:label="`I 0.2`" color="cyan lighten-2" v-model="i0_2"></v-switch>
                      <v-switch v-bind:label="`I 0.3`" color="cyan lighten-2" v-model="i0_3"></v-switch>
                      <v-switch v-bind:label="`I 0.4`" color="cyan lighten-2" v-model="i0_4"></v-switch>
                      <v-switch v-bind:label="`I 0.5`" color="cyan lighten-2" v-model="i0_5"></v-switch>
                      <v-switch v-bind:label="`I 0.6`" color="cyan lighten-2" v-model="i0_6"></v-switch>
                      <v-switch v-bind:label="`I 0.7`" color="cyan lighten-2" v-model="i0_7"></v-switch>
                    </v-card-text>
                  </v-card>
              </v-flex>
              <v-flex md6 xs11 class="ml-3">
                  <v-card>
                    <v-card-title>
                      <div calss="headline">PLC Status</div>
                    </v-card-title>
                    <v-card-text class="text-color">
                      <v-checkbox label="I 0.0" v-model="i0_0" color="success"></v-checkbox>
                      <v-checkbox label="I 0.1" v-model="i0_1" color="success"></v-checkbox>
                      <v-checkbox label="I 0.2" v-model="i0_2" color="success"></v-checkbox>
                      <v-checkbox label="I 0.3" v-model="i0_3" color="success"></v-checkbox>
                      <v-checkbox label="I 0.4" v-model="i0_4" color="success"></v-checkbox>
                      <v-checkbox label="I 0.5" v-model="i0_5" color="success"></v-checkbox>
                      <v-checkbox label="I 0.6" v-model="i0_6" color="success"></v-checkbox>
                      <v-checkbox label="I 0.7" v-model="i0_7" color="success"></v-checkbox>
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
      i0_0: false,
      i0_1: false,
      i0_2: false,
      i0_3: false,
      i0_4: false,
      i0_5: false,
      i0_6: false,
      i0_7: false
    }
  },
  methods: {
    I0_0: () => {

    }
  }
}
</script>

<style lang="stylus" scoped>

</style>


</template>
