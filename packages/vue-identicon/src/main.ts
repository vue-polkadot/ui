import Vue from 'vue';
import Identicon from './Identicon.vue';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(Identicon),
}).$mount('#app');
