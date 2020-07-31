<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import 'view-design/dist/styles/iview.css';
import Vue from 'vue';
import {
  Button, Table, Row, Col, Menu, Split,Input,Message,
  MenuItem, Icon, Submenu, Modal, Card, Notice,Form,FormItem,
  Layout,Header,Content,Footer,Tag
} from 'view-design';
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
Vue.component('Form', Form)
Vue.component('FormItem', FormItem)
Vue.component('Layout', Layout)
Vue.component('Header', Header)
Vue.component('Content', Content)
Vue.component('Footer', Footer)
Vue.component('Input', Input)
Vue.component('Tag', Tag)
// Vue.use(Message)
Vue.prototype.$Notice = Notice
Vue.prototype.$Message = Message
export default {
  name: 'App',
  components: {
  },
  data () {
    return {
      language: 'en',
      text: '英文'
    }
  },
  created () {
  }
}
</script>

<style>
#app {
  font-family:Consolas, 'Courier New', monospace;
  text-align: center;
  /* Consolas, 'Courier New', monospace */
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
}
</style>
