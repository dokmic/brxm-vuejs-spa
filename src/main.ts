import axios from 'axios';
import Vue from 'vue';
// @ts-ignore
import VueFragment from 'vue-fragment';

import App from './App.vue';
import { BrComponent, BrManageContentButton, BrManageMenuButton, BrPage } from './brxm';
import router from './router';

axios.interceptors.request.use(config => ({ ...config, withCredentials: true }));

Vue.use(VueFragment.Plugin);
Vue.config.productionTip = false;

Vue.component('br-component', BrComponent);
Vue.component('br-manage-content-button', BrManageContentButton);
Vue.component('br-manage-menu-button', BrManageMenuButton);
Vue.component('br-page', BrPage);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
