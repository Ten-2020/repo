<!--
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-05-03 11:49:53
 -->
<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
 
<script>
import Vue from 'vue';
import {  Button, Table, Row, Col, Menu, Split,
  MenuItem, Icon, Submenu, Modal, Card,Notice} from 'view-design';
Vue.component('Button', Button)
Vue.component('Table', Table)
Vue.component('Row', Row)
Vue.component('Col', Col)
Vue.component('Menu', Menu)
Vue.component('MenuItem', MenuItem)
Vue.component('Icon', Icon)
Vue.component('Submenu', Submenu)
Vue.component('Split', Split)
Vue.component('Modal', Modal)
Vue.component('Card', Card)
// Vue.component('Notice', Notice)
Vue.prototype.$Notice = Notice
export default {
  name: 'app'
}

</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
