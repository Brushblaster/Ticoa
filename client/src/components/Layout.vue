<template>
<v-content>
  <v-system-bar status color="primary" dark></v-system-bar>
  <v-toolbar dark color="primary">
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title class="white--text">Ticoa</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-btn icon @click:this.>
      <v-icon>home</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>search</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>refresh</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>more_vert</v-icon>
    </v-btn>
  </v-toolbar>
</v-content>
</template>

<script>
export default {
  data () {
    return {
      mobileDevice: ''
    }
  }
}
</script>

<style scoped>

</style>
