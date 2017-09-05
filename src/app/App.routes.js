import Vue from 'vue';
import Router from 'vue-router';
const Home = () =>  import('components/MHome/MHome');
const MNewsArticle = () => import('components/MNewsArticle/MNewsArticle');

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