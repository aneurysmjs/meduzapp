<template>
  <footer class="my-3 p-2">
    <h3 class="text-center">
      Subscribe
    </h3>
    <div class="row">
      <div class="col" v-for="col in columns">
        <slot :name="col.name"></slot>
      </div>
    </div>
  </footer>
</template>

<script>

  export default {
    data () {
      return {
        columns: [
          {
            name: 'col1'
          },
          {
            name: 'col2'
          },
          {
            name: 'col3'
          }
        ]
      }
    }
  }

</script>


<style lang="scss" scoped>
  footer {
    background: #fafafa;
  }
</style>