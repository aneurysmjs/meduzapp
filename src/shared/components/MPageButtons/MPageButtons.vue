<template>
  <nav>
    <ul class="pagination">
      <li class="page-item" v-for="button in buttons">
        <button type="button"
                class="btn btn-link"
                @click="click(button)">
          {{ button + 1 }}
        </button>
      </li>
    </ul>
  </nav>
</template>
<script>
  export default {
    data () {
      return {
        buttons: []
      }
    },
    props: {
      pages: {
        type: [Number, String],
        required: true
      }
    },
    created () {
      for (let i = 0; i < this.pages; i += 1) {
        this.buttons = [...this.buttons, i];
      }
    },
    methods: {
      /**
       * emit the selected number by the user.
       *
       * @param {Number} number - page number
       * @return {void}
       */
      click (number) {
        this.$emit('on-click', number);
      }
    }
  }
</script>