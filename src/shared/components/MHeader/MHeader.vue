<template>
  <header class="mHeader fixed-top">
    <nav class="navbar navbar-expand-lg navbar-dark"
         v-bind:style="styleObject">
      <a class="navbar-brand" href="#">{{ brandName }}</a>
      <button class="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
        </div>
      </div>
    </nav>
  </header>
</template>
<script>
  export default {
    props: {
      brandName: {
        type: String,
        required: true
      }
    },
    data () {
      return {
        styleObject: {
          background: '#24D1C4'
        }
      };
    }

  }
</script>
<style lang="scss" scoped>
  .mHeader {
    margin: 0 auto;
    width: 78%;
  }
</style>