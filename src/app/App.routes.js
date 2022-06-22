import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () =>  import('components/MHome/MHome');
const MNewsArticle = () => import('components/MNewsArticle/MNewsArticle');

const routes = [
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

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export default createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHashHistory(),
  routes, // short for `routes: routes`
})