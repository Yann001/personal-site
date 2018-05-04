// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';

// import hljs from 'highlight.js';
import router from './router';
import { timeFormat } from './util/util';

import 'font-awesome/css/font-awesome.min.css';
import 'highlight.js/styles/monokai.css';

Vue.config.productionTip = false;
Vue.filter('timeFilter', timeFormat);
// Vue.directive('highlight', el => {
//   let blocks = el.querySelectorAll('pre code');
//   blocks.forEach((block) => {
//     hljs.highlightBlock(block);
//   });
// });

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
});
