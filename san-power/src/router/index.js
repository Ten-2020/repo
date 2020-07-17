/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-05-04 09:13:11
 */
import Vue from 'vue'
import Router from 'vue-router'
import index from '@/views/interior/index'
import main from '@/views/warfare/map/mainMap'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'index',
      meta:{
        title:'内政'
      },
      component: index
    },
    {
      path: '/main',
      name: 'main',
      meta:{
        title:'main'
      },
      component: main
    }
  ]
})
