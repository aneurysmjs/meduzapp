<template>
  <div id="app">
    <m-header :brand-name="brandName"></m-header>
    <router-view></router-view>
    <m-footer>
      <h2 class="text-center" slot="col1">Col1</h2>
      <h2 class="text-center" slot="col2">Col2</h2>
      <h2 class="text-center" slot="col3">Col3</h2>
    </m-footer>
  </div>
</template>

<script>
  import MHeader from 'components/MHeader/MHeader';
  import MFooter from 'components/MFooter/MFooter';

  export default {
    name: 'app',
    components: {
      MHeader,
      MFooter
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
