<!-- inside here the Main page called "Home" is definded -->
<template>
  <div class="hello text-xs-center">
      <img src="../../../static/img/v.png">
      <h1>Welcome to Ticoa</h1>
        <h1>Totally integraded Control App</h1>
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
