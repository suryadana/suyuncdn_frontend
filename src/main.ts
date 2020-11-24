import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';
import CoreuiVue from '@coreui/vue';
import icons from './assets/icons/icons';

Vue.config.performance = true;
Vue.use(CoreuiVue);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  icons,
  render: (h) => h(App),
}).$mount('#app');
