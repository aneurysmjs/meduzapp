<template>
  <aside class="text-center">
    <h4>{{ title }}</h4>
    <div class="socialIcons d-flex justify-content-between align-items-center">
      <a v-for="social in socialNetworks"
         :href="social.url"
         :title="social.title"
         target="_blank">
        <i :class="social.icon" aria-hidden="true"></i>
      </a>
    </div>
  </aside>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        socialNetworks: [
          {
            icon: 'fa fa-facebook fa-2x',
            url: 'https://facebook.com',
            title: 'facebook'
          },
          {
            icon: 'fa fa-twitter fa-2x',
            url: 'https://twitter.com',
            title: 'twitter'
          },
          {
            icon: 'fa fa-instagram fa-2x',
            url: 'https://instagram.com',
            title: 'instagram'
          }
        ]
      }
    }
  }
</script><style lang="scss">
  div.socialIcons {
    margin: 0 auto;
    height: 3em;
    width: 16rem;

    i {
      color: #24D1C4;
      &:hover {

      }
    }

  }
</style>