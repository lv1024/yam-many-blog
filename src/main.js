// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import '../theme/index.css'
import ElementUI from 'element-ui';
import Util from '@/helpers/util'
// import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI);
Vue.use(Util)
Vue.config.productionTip = false

Vue.config.warnHandler = function(msg, vm, trace) {
  console.log(`Warn: ${msg}\nTrace: ${trace}`);
};

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
