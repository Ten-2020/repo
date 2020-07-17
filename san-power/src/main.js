/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-05-03 11:49:53
 */
import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './components/App.vue';
import router from './router';
import 'view-design/dist/styles/iview.css';
Vue.config.productionTip = false
Vue.use(VueRouter);

new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
});