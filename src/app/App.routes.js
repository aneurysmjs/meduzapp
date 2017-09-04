import Vue from 'vue';
import Router from 'vue-router';
import Home from 'components/MHome/MHome.vue';
import MNewsArticle from 'components/MNewsArticle/MNewsArticle';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/:articleKey',
      name: 'article',
      component: MNewsArticle
    }
  ]
});