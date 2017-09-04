<template>
  <section class="newsArticle">
    {{ article }}
    <m-error-logger v-if="isError" :message="isError.message"></m-error-logger>
  </section>
</template>
<script>

  import api from 'api';
  import MErrorLogger from 'shared/components/MErrorLogger/MErrorLogger';

  export default {
    props: ['article'],
    data () {
      return {
        isError: undefined
      };
    },
    components: {
      MErrorLogger
    },
    created () {
      let { articleKey } = this.$route.params;

      api.get(articleKey).then(article => {
        this.article = article;
        // clean error in case request is successful.
        this.isError = undefined;
      }).catch(err => {
        this.isError = err;
      });

    }

  }

</script>
<style lang="scss" scoped>
  .newsArticle {
    height: calc(100vh - 250px);
  }
</style>