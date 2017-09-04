<template>
  <article class="newsItem card mb-4" @click="goToArticle">
    <figure>
      <img class="card-img-top" :src="url + img" alt="Card image cap">
    </figure>
    <div class="card-body">
      <header>
        <h4 class="card-title">{{ title }}</h4>
      </header>
      <p class="card-text cut-text">
        {{ secondTitle }}
      </p>
    </div>
    <footer class="d-flex justify-content-end mr-2 mb-1">
      <small>{{ publishedDate }}</small>
    </footer>
  </article>
</template>
<script>

  export default {
    data () {
      return {
        url: 'https://meduza.io'
      }
    },
    props: {
      title: {
        type: String,
        required: true
      },
      publishedDate: {
        type: String,
        required: true
      },
      img: {
        type: String
      },
      secondTitle: {
        type: String
      },
      articleKey: {
        type: String
      }
    },
    methods: {
      goToArticle () {
        this.$emit('on-article', this.articleKey);
      }
    }
  }

</script>

<style lang="scss" scoped>
  .cut-text {
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    line-height: 16px;     /* fallback */
    max-height: 64px;      /* fallback */
    -webkit-line-clamp: 4; /* number of lines to show */
    -webkit-box-orient: vertical;
  }

  .newsItem {
    cursor: pointer;
    filter: grayscale(1);
    width: 20rem;

    &:hover {
      filter: grayscale(0);
    }
  }
</style>