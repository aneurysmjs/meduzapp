<template>
  <div id="app">
    <m-header :brand-name="brandName"></m-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import MHeader from 'components/MHeader/MHeader.vue';

  export default {
    name: 'app',
    components: {
      MHeader
    },
    data () {
      return {
        brandName: 'Meduzapp'
      }
    }
  }

</script>

<style lang="scss">
  // import bootstrap.scss file
  @import '~bootstrap/scss/bootstrap.scss';

</style>
