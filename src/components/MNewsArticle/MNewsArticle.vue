<template>
  <article class="newsArticle">
    <m-error-logger v-if="isError" :message="isError.message"></m-error-logger>
    <header class="my-3">
      <h1>{{  articleMock.root.title }}</h1>
    </header>
    <div class="mb-3">
      <span>
        <i class="fa fa-bookmark"></i>
        {{ articleMock.root.source.name }}
      </span>
      <span>
        <i class="fa fa-calendar"></i>
        {{ articleMock.root.pub_date }}
      </span>
    </div>
    <figure>
      <img class="img-fluid" :src="url + articleMock.root.image.wh_1245_500_url" alt="">
    </figure>
    <div v-html="articleMock.root.content.body"></div>
  </article>
</template>
<script>

  import api from 'api';
  import MErrorLogger from 'shared/components/MErrorLogger/MErrorLogger';
  import articleMock from 'articleMock';

  export default {
    props: ['article'],
    data () {
      return {
        url: 'https://meduza.io',
        isError: undefined,
        articleMock
      };
    },
    components: {
      MErrorLogger
    },
    created () {
      let { articleKey } = this.$route.params;

      /*api.get(articleKey).then(article => {
        this.article = article;
        // clean error in case request is successful.
        this.isError = undefined;
      }).catch(err => {
        this.isError = err;
      });*/

    }

  }

</script>
<style lang="scss" scoped>
  .newsArticle {
    min-height: calc(100vh - 250px);
  }
</style>