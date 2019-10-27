import axios from 'axios';
import Vue from 'vue';
// @ts-ignore
import VueFragment from 'vue-fragment';

import App from './App.vue';
import { BrComponent, BrManageContentButton, BrManageMenuButton, BrPage } from './brxm';
import router from './router';

import BrBanner from './components/BrBanner.vue';
import BrContent from './components/BrContent.vue';
import BrMenu from './components/BrMenu.vue';
import BrNewsList from './components/BrNewsList.vue';

axios.interceptors.request.use(config => ({ ...config, withCredentials: true }));

Vue.use(VueFragment.Plugin);
Vue.config.productionTip = false;

Vue.component('br-component', BrComponent);
Vue.component('br-manage-content-button', BrManageContentButton);
Vue.component('br-manage-menu-button', BrManageMenuButton);
Vue.component('br-page', BrPage);

Vue.component('br-banner', BrBanner);
Vue.component('br-content', BrContent);
Vue.component('br-menu', BrMenu);
Vue.component('br-news-list', BrNewsList);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
