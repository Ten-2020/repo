import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueResource from 'vue-resource'
import router from './router';
import VueRouter from 'vue-router'
Vue.use(VueResource) // 使用这个就能使用this.$http.get
Vue.prototype.$axios = axios
Vue.config.productionTip = false
// import iView from 'iview';
// import 'iview/dist/styles/iview.css';
import VueClipboard from 'vue-clipboard2'
Vue.use(VueClipboard)

Vue.use(VueRouter);
// Vue.use(iView);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
