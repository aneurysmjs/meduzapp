<template>
  <section>
    <m-news-feed :news="news"></m-news-feed>
    <m-error-logger v-if="isError" :message="isError.message"></m-error-logger>
  </section>
</template>
<script>
  import api from 'api';
  import MErrorLogger from 'shared/components/MErrorLogger/MErrorLogger';
  import MNewsFeed from 'shared/components/MNewsFeed/MNewsFeed';

  export default {
    data () {
      return {
        news: {
          type: Object
        },
        isError: undefined
      }
    },
    components: {
      MErrorLogger,
      MNewsFeed
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
       * return {Promise<any>}
       */
      async getNews () {
        let url = `search?chrono=news&locale=ru&page=0&per_page=24`;
        try {
          let { data } = await api.get(url);
          this.news = data.documents;
          // clean error in case request is successful.
          this.isError = undefined;
        } catch(err) {
          this.isError = err;
        }
      }
    }
  }
</script>