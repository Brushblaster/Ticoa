<template>
<div>
  <v-progress-circular
  indeterminate
  v-bind:size="70"
  v-bind:width="7"
  color="blue"
  ></v-progress-circular>
</div>
</template>

<script>
  export default {
    name: 'callback',
    props: ['auth'],
    data () {
      // this.auth.isAuthenticated()
      return {}
    }
  }
</script>

<style lang="stylus" scoped>
#div {
  margin: auto
  padding: auto
  width: 50%
}
</style>

