import Vue from 'vue';
import App from './App.vue';
import store from './store';

import Mycomponents from './components';

import './assets/fonts/iconfont.css'

Vue.use(Mycomponents);
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount('#app');
