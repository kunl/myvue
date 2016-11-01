import Vue from 'vue'
import Router from 'vue-router'
import App from './App'

import {routes} from './routes';
/* eslint-disable no-new */
Vue.use(Router);

let router = new Router({
    routes: routes
});

console.log(routes)

new Vue({
  el: '#app',
  template: '<App/>',
  router: router,
  components: { App }
})
