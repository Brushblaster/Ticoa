<template>
    <v-container fluid grid-list-xs>
      <v-layout row justify-center>
        <v-flex xs8 md6 >
          <h1>Sign Up</h1>
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
            :rules="rules"
            ></v-text-field>
            <v-text-field
            label="Confirm Password"
            v-model="passwordconf"
            prepend-icon="lock"
            :append-icon="i2 ? 'visibility' : 'visibility_off'"
            :append-icon-cb="() => (i2 = !i2)"
            :type="i2 ? 'password' : 'text'"
            :rules="rules"
            ></v-text-field>
            <v-text-field
            label="Authenticaded"
            v-model="pwvalid"
            ></v-text-field>
            <v-alert
            color="success"
            icon="check_circle"
            :value="userNotEmpty"
            transition="scale-transition"
            >
            You are registered !
            </v-alert>
            <v-alert
            color="error"
            icon="warning"
            :value="userNotEmpty"
            transition="scale-transition"
            >
            User allredy exists !
            </v-alert>
            <v-btn
            @click="signup"
            >
            Sing Up
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
  name: 'Signup',
  data () {
    return {
      email: '',
      password: '',
      passwordconf: '',
      i1: false,
      i2: false,
      isConnected: false,
      userNotEmpty: false,
      pwvalid: false,
      rules: []
    }
  },
  computed: {
  },
  methods: {
    ...mapMutations([
      'SOCKET_userCreate'
    ]),
    ...mapActions([
      'socket_userCreate'
    ]),
    clear () {
      // this.$refs.form.reset()
      this.email = null
      this.password = null
      this.passwordconf = null
    },
    signup () {
      if (this.password === this.passwordconf) {
        this.pwvalid = true
        console.log(this.email, this.password)
        let data = {
          email: this.email,
          password: this.password
        }
        // this.SOCKET_userCreate('userCreate', data)
        this.$socket.emit('userCreate', data)
      } else {
        this.pwvalid = false
        this.rules = 'Passwords did not match'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>

</style>
