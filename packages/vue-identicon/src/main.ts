import Vue from 'vue';
import Identicon from './Identicon.vue';

// Vue.config.productionTip = false;

// new Vue({
//   render: (h) => h(Identicon),
// }).$mount('#app');

Vue.component('Identicon', Identicon)
export default Identicon

// export default {
//   install(Vue: any, options = {}) {
//       Vue.component('Identicon', Identicon)
//   }
// }
