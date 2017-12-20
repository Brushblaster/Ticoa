<template>
    <div class="root">
      <v-layout row justify-center>
        <v-flex xs12 sm9 md7 lg5 xl3>
          <v-card light>
            <v-card-media src="https://avatars0.githubusercontent.com/u/22138497?s=400&v=4" height="197px" width="197px">
            </v-card-media>
            <!-- <v-card-title primary-title> -->
              <h3 class="display-1 mr-2 text-xs-center">Welcome to Ticoa</h3>
              <br>
              <div class="headline text-xs-center">
                <h3>You are not logged in</h3>
                <h3>Please login, now !</h3>
              </div>
            <!--  </v-card-title> -->
            <v-card-actions>
              <v-btn flat color="blue" @click="login">Login</v-btn>
              <v-spacer />
              <v-btn flat color="blue" href="https://www.google.ch">
                Leave
              </v-btn>
            </v-card-actions>
          </v-card>
          <small>Totally integrated control app</small>
        </v-flex>
      </v-layout>
      <!--<v-parallax src="../../../static/img/s7-1500_standard_cpus.jpg"></v-parallax>-->
  </div>
</template>

<script>
import AuthService from '../../utils/AuthService'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'Root',
  data () {
    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
      console.log(authState.authenticated)
      if (authState.authenticated === true) {
        this.$store.dispatch('isAuthenticated', {
          auth: true
        })
      } else {
        this.$store.dispatch('isAuthenticated', {
          auth: false
        })
      }
    })

    return {
      auth,
      authenticated
    }
  },
  methods: {
    login,
    logout
  }
}
</script>

<style lang="stylus" scoped>
    .hello {
    /* background-color: #3C4561; */
    text-align: center;
  }
  img {
    padding: 50px;
  }
</style>


