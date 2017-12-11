<template>
    <v-container fluid grid-list-xs>
      <v-layout row justify-center>
        <v-flex xs8 md6 >
          <h1>Sign In</h1>
          <v-form ref="form">
            <v-text-field
            label="Email"
            v-model="email"
            prepend-icon="person"
            ></v-text-field>
            <v-text-field
            label="Password"
            v-model="password"
            prepend-icon="lock"
            :append-icon="i1 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (i1 = !i1)"
            :type="i1 ? 'password' : 'text'"
            ></v-text-field>
            <v-alert
            color="success"
            icon="check_circle"
            :value="this.$store.state.authenticated">
            Successfully loged in.
            </v-alert>
            <v-alert
            color="error"
            icon="warning"
            :value="!this.$store.state.authenticated">
            Invalid Password.
            </v-alert>
            <v-btn
            @click="signin"
            >
            Login
            </v-btn>
            <v-btn
            @click="clear"
            >clear</v-btn>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapMutations, mapActions } from 'vuex'

export default {
  name: 'Signin',
  data () {
    return {
      email: null,
      password: null,
      i1: true,
      token: this.$store.getters.getToken,
      isError: false,
      isSuccess: false
    }
  },
  methods: {
    ...mapMutations([
    'SOCKET_USER_LOGIN'
    ]),
    ...mapActions([
    'socket_userLogin'
    ]),
    clear () {
      this.$refs.form.reset()
      this.token = ''
      this.$store.commit('clearAuthentication')
    },
    signin () {
      let data = {
        email: this.email,
        password: this.password
      }
      // this.SOCKET_USER_LOGIN(data)
      this.$socket.emit('userLogin', data)
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
