<template>
  <aside class="text-center">
    <h4>{{ title }}</h4>
   <div class="newsList" v-for="n in newsList">
     <i class="fa fa-pencil" aria-hidden="true"></i>
     {{ n.title }}
   </div>
  </aside>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      newsList: {
        type: Array,
        required: true
      }
    }
  }
</script>
<style lang="scss">
  div.newsList {
    margin: 0 auto;
    width: 16rem;
  }
</style>