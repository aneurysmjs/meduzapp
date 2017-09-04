<template>
  <aside class="text-center">
    <h3>{{ title }}</h3>
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