<template>
  <aside class="text-danger text-center">
    {{ message }}
  </aside>
</template>
<script>
  export default {
    props: {
      message: {
        type: String,
        required: true
      }
    }
  }
</script>
