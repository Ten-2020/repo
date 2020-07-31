/*
 * @Author: 高腾
 * @Description: 
 * @Date: 2020-05-04 09:13:11
 */
import Vue from 'vue'
import Router from 'vue-router'
import translate from '@/view/translate/translate'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/',
      name: 'translate',
      meta:{
        title:'搜索'
      },
      component: translate
    },
  ]
})
