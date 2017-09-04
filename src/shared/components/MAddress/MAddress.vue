<template>
  <aside class="text-center">
    <h4>{{ title }}</h4>
    <p>
      <i class="fa fa-map-marker" aria-hidden="true"></i>
      {{ address }}
    </p>
  </aside>
</template>
<script>
  export default {
    props: {
      title: {
        type: String,
        required: true
      },
      address: {
        type: String,
        required: true
      }
    }
  }
</script>
<style lang="scss" scoped>
  aside.text-center {
    i {
      color: #24D1C4;
      &:hover {

      }
    }
  }
</style>