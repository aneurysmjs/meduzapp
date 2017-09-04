<template>
  <div id="app">
    <m-header :brand-name="brandName"></m-header>
    <router-view></router-view>
    <m-footer>
      <m-address slot="col1" title="Location" address="Санкт-Петербург, Россия"></m-address>
      <m-news-list slot="col2" title="Latest News" :news-list="newsList"></m-news-list>
      <m-social slot="col3" title="Follow Us"></m-social>
    </m-footer>
  </div>
</template>

<script>
  import MHeader from 'components/MHeader/MHeader';
  import MFooter from 'components/MFooter/MFooter';
  import MAddress from 'shared/components/MAddress/MAddress';
  import MNewsList from 'shared/components/MNewsList/MNewsList';
  import MSocial from 'shared/components/MSocial/MSocial';

  export default {
    name: 'app',
    components: {
      MHeader,
      MFooter,
      MAddress,
      MNewsList,
      MSocial
    },
    data () {
      return {
        brandName: 'Meduzapp',
        newsList: [
          {
            title: 'Lorem ipsum'
          },
          {
            title: 'Neque Porro'
          },
          {
            title: 'Россия'
          }
        ]
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
