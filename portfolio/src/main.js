import Vue from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTwitter, faGithub, faCodepen } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import App from './App.vue';

library.add(
  faTwitter,
  faGithub,
  faCodepen,
);
Vue.component('font-awesome-icon', FontAwesomeIcon);
Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');
