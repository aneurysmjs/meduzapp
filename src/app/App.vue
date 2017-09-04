<template>
  <div id="app">
    <m-header :brand-name="brandName"></m-header>
    <router-view></router-view>
    <m-footer>
      <m-address slot="col1" title="Location" address="Санкт-Петербург, Россия"></m-address>
      <h2 class="text-center" slot="col2">Col2</h2>
      <h2 class="text-center" slot="col3">Col3</h2>
    </m-footer>
  </div>
</template>

<script>
  import MHeader from 'components/MHeader/MHeader';
  import MFooter from 'components/MFooter/MFooter';
  import MAddress from 'shared/components/MAddress/MAddress';

  export default {
    name: 'app',
    components: {
      MHeader,
      MFooter,
      MAddress
    },
    data () {
      return {
        brandName: 'Meduzapp'
      }
    }
  }

</script>

<style lang="scss">
  // import Font-awesome's icons
  $fa-font-path: "~font-awesome/fonts";
  @import '~font-awesome/scss/font-awesome.scss';

  // import bootstrap.scss file
  @import '~bootstrap/scss/bootstrap.scss';

</style>
