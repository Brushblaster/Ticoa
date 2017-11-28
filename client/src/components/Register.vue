<template>
    <v-container fluid grid-list-xl>
      <v-layout row justify-space-between>
        <v-flex >
    <h1>Register</h1>

    <v-form ref="form">
      <v-text-field
        label="Email"
        v-model="email"
      ></v-text-field>
      <v-text-field
        label="Password"
        v-model="password"
      ></v-text-field>

      <v-btn
      @click="register"
      >
      Register
      </v-btn>
      <v-btn>clear</v-btn>
    </v-form>
        </v-flex>
      </v-layout>
    </v-container>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'

export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>

<style scoped>

</style>
