/*
 * @Author: 高腾
 * @Description:
 * @Date: 2019-07-27 12:08:23
 */
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    route: {
      url: {// 先搁置
        century:
        [
          { id: '1', name: '江雪', path: '/header/century/ce' },
          { id: '2', name: '渔翁', path: '/header/century/e' }
        ],
        comics: [
          { id: '1', name: '江雪', path: '/header/comics/c' },
          { id: '2', name: '渔翁', path: '/header/comics/o' },
          { id: '3', name: '咏史', path: '/header/comics/m' }
        ]
      }
    }
  },
  getters: {
  },
  mutations: {

  },
  actions: {

  }
})
export default store
