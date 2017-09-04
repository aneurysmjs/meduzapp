import Vue from 'vue'
import App from './app/App.vue'
import router from './app/App.routes';

new Vue({
  el: '#app',
  components: { App },
  template: `<App />`,
  router
});
