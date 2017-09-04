<template>
  <div>
    <h1 class="text-center my-3">{{ title }}</h1>
    <h2 class="text-center my-2">Добро Пожаловать</h2>
    <div class="d-flex flex-wrap justify-content-around"
         v-if="Object.keys(news).length">
      <m-news-feed-item
        v-for="(article, key, index) in news"
        v-if="article.image"
        @on-article="articleHandler($event)"
        :key="index"
        :img="article.image.wh_300_200_url"
        :second-title="article.second_title"
        :published-date="article.pub_date"
        :article-key="key"
        :title="article.title">
      </m-news-feed-item>
    </div>
    <div v-else>
      No News
    </div>
  </div>
</template>

<script>
  import MNewsFeedItem from 'shared/components/MNewsFeedItem/MNewsFeedItem';

  export default {
    props: {
      news: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        title: 'News Feed',
        newsList: this.news
      }
    },
    components: { MNewsFeedItem },
    methods: {
      articleHandler (articleKey) {
        console.log(`articleKey`);
        console.log(articleKey);
        // extract the last piece of thr URL which is the article's name
        let articleName = articleKey.split('/').pop();
        // push the articleName for the url and `articleKey` for the NewsArticle
        this.$router.push({ name: `article`, params: {articleKey, articleName} });
      }
    }
  }

</script>