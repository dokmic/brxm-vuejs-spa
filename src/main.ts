import axios from 'axios';
import Vue from 'vue';
// @ts-ignore
import VueFragment from 'vue-fragment';

import App from './App.vue';
import { BrPage } from './brxm';
import router from './router';

axios.interceptors.request.use(config => ({ ...config, withCredentials: true }));

Vue.use(VueFragment.Plugin);
Vue.config.productionTip = false;

Vue.component('br-page', BrPage);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
