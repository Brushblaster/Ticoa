<template>
  <v-content>
    <v-container>
    <h1>Register</h1>

    <v-form ref="form">
      <v-text-field
        label="Email"
      ></v-text-field>
      <v-text-field
        label="Password"
      ></v-text-field>

      <v-btn
      >
      submit
      </v-btn>
      <v-btn>clear</v-btn>
    </v-form>
    </v-container>
  </v-content>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
