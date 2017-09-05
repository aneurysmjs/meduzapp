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
    <div class="d-flex justify-content-center my-2">
      <m-page-buttons
        :pages="pages"
        @on-click="pageHandler($event)">
      </m-page-buttons>
    </div>
    <m-error-logger v-if="isError" :message="isError.message"></m-error-logger>
  </section>
</template>
<script>
  import api from 'api';
  import MErrorLogger from 'shared/components/MErrorLogger/MErrorLogger';
  import MNewsFeed from 'shared/components/MNewsFeed/MNewsFeed';
  import MButton from 'shared/components/MButton/MButton';
  import MPageButtons from 'shared/components/MPageButtons/MPageButtons';

  export default {
    data () {
      return {
        news: {},
        isError: undefined,
        /**
         * Number of records per page
         *
         * @type {Number}
         */
        records: 5,
        /**
         * How many records are left for each request, so it can be set a limit
         *
         * @type {Number}
         */
        limit: 0,
        /**
         * @type {Boolean}
         */
        isButtonBlocked: false,
        /**
         * current page
         *
         * @type {Number}
         */
        page: 0,
        /**
         * the amount of pages to display
         *
         * @type {Number}
         */
        pages: 5,
      }
    },
    components: {
      MErrorLogger,
      MNewsFeed,
      MButton,
      MPageButtons
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

        let url = `search?chrono=news&locale=ru&page=${this.page}&per_page=${this.records}`;

        try {
          // destructure response's `data` property
          let { data } = await api.get(url);
          // destructure data's `_count` and `documents` properties.
          let { _count, documents } = data;
          // set the record's limit
          this.limit = _count;
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
        if (this.records < this.limit) { // get 5 records if it less than the limit.
          this.records += 5;
          this.getNews();
        } else { // otherwise block the button.
          this.isButtonBlocked = true;
        }
      },
      /**
       * get the desirable page selected by the user.
       *
       * @param {Number} pageNumber
       * @return {void}
       */
      pageHandler (pageNumber) {
        // set the current page number.
        this.page = pageNumber;
        // reset records since is a new page.
        this.records = 0;
        this.getNews();
      }
    }
  }
</script>