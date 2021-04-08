import Vue from 'vue'
import App from './App.vue'
import VueRouter from "vue-router";
import { routes } from './routes';
import store from './store';

/* importing default css */
import './assets/styles/main.scss';
import ApiService from "./common/api";

Vue.config.productionTip = false

Vue.use(VueRouter);

ApiService.init();

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
