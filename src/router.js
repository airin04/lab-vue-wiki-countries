import { createRouter, createWebHistory } from 'vue-router';
import HomeView from './views/HomeView.vue';
import CountryDetailsView from './views/CountryDetailsView.vue';

const routes = [
  {
    path: '/',
    name: 'root',
    component: HomeView,
  },
  {
    path: '/:countryCode',
    name: 'countryDetailsView',
    component: CountryDetailsView,
  }
];

export default createRouter({
  history: createWebHistory('/'),
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});