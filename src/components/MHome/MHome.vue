<template>
  <section>
    <h1 class="text-center">Home</h1>
  </section>
</template>
<script>
  import api from 'api';

  export default {
    data () {
      return {
        news: {
          type: Object
        },
        isError: undefined
      }
    },
    created () {
      /**
       * Call `getNews` as soon the component is created
       */
      this.getNews();
    },
    methods: {
      /**
       * get the news feed from `https://meduza.io`
       *
       * return {void}
       */
      getNews () {

        let url = `search?chrono=news&locale=ru&page=0&per_page=24`;

        api.get(url)
          .then(({data}) => {
          console.log(`data.documents`);
          console.log(data.documents);
            this.news = data.documents;
            // clean error in case request is successful.
            this.isError = undefined;
          })
          .catch(err => {
            this.isError = err;
          });
      }
    }
  }
</script>