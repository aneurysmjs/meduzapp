<template>
  <button type="button"
          class="btn"
          :disabled="isBlocked"
          @click="click">
    {{ text }}
  </button>
</template>
<script>
  export default {
    props: {
      text: {
        type: String,
        required: true
      },
      isBlocked: {
        type: Boolean
      }
    },
    methods: {
      click () {
        this.$emit('on-click');
      }
    }
  }
</script>
<style lang="scss" scoped>
  button.btn {
    background: #24d1c4 !important;
    color: #ffffff;
    cursor: pointer;
    &:hover {
      background: #25c5b9 !important;
    }
    &:disabled {
      cursor: not-allowed;
    }
  }
</style>