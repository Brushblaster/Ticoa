<template>
  <div class="hello">
      <img src="../../../static/img/v.png">
      <h1>Welcome to Ticoa</h1>
      <!--<v-parallax src="../../../static/img/s7-1500_standard_cpus.jpg"></v-parallax>-->
      <v-content text-align-center>
        <h1>Totally integraded Control App</h1>
      </v-content>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: 'Hi'
    }
  },
  methods: {

  },
  computed: {

  }
}
</script>

<style scoped>
  .hello {
    /* background-color: #3C4561; */
    text-align: center;
  }
  img {
    padding: 50px;
  }
  h1, h2 {
  font-weight: normal;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
</style>
