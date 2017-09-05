<template>
  <section>
    <m-news-feed :news="news"></m-news-feed>
    <div class="text-center">
      <m-button
        text="Load more"
        :is-blocked="isButtonBlocked"
        @on-click="loadMoreHandler">
      </m-button>
    </div>
    <m-error-logger v-if="isError" :message="isError.message"></m-error-logger>
  </section>
</template>
<script>
  import api from 'api';
  import MErrorLogger from 'shared/components/MErrorLogger/MErrorLogger';
  import MNewsFeed from 'shared/components/MNewsFeed/MNewsFeed';
  import MButton from 'shared/components/MButton/MButton';

  export default {
    data () {
      return {
        news: {},
        isError: undefined,
        /**
         * @private
         *
         * Number of records per page
         */
        _records: 5,
        /**
         * @private
         *
         * How many records are left for each request, so it can be set a limit
         */
        _limit: 0,
        /**
         * @type {Boolean}
         */
        isButtonBlocked: false
      }
    },
    components: {
      MErrorLogger,
      MNewsFeed,
      MButton
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
       * @return {Promise<any>}
       */
      async getNews () {

        let url = `search?chrono=news&locale=ru&page=0&per_page=${this._records}`;

        try {
          // destructure response's `data` property
          let { data } = await api.get(url);
          // destructure data's `_count` and `documents` properties.
          let { _count, documents } = data;
          // set the record's limit
          this._limit = _count;
          // clone the documents in a new object.
          this.news = Object.assign({}, documents);
          // clean error in case request is successful.
          this.isError = undefined;
        } catch(err) {
          // set the current error to whatever the response throws.
          this.isError = err;
        }

      },
      /**
       * Gets the more records from the meduza's API.
       *
       * @return {void}
       */
      loadMoreHandler () {
        if (this._records < this._limit) { // get 5 records if it less than the limit.
          this._records += 5;
          this.getNews();
        } else { // otherwise block the button.
          this.isButtonBlocked = true;
        }
      }
    }
  }
</script>