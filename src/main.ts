import axios from 'axios';
import Vue from 'vue';
import App from './App.vue';
import router from './router';

axios.interceptors.request.use(config => ({ ...config, withCredentials: true }));

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
