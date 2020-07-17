import Vue from 'vue'
import Router from 'vue-router'
import tl from '@/views/layout/head'
import mainLayout from '@/views/layout/mainLayout'
import { c, o, m } from '@/views/layout/components/mainland/comics'
import { ce, e,t } from '@/views/layout/components/mainland/century'

Vue.use(Router)


export let initMenu = [
  {
    path: '',
    redirect: '/header/comics'
  },
  {
    path: '/header',
    component: tl,
    children: [
      {
        path: ":id",
        component: mainLayout,
        children: [
          {
            path: "c",
            component: c,
          },
          {
            path: "o",
            component: o,
          },
          {
            path: "m",
            component: m,
          },
          {
            path: "",
            component: c
          },
          {
            path: "ce",
            component: ce,//component: () => import('@/views/redirect/index')
          },
          {
            path: "e",
            component: e,
          },
          {
            path: "t",
            component: t,
          },
        ]
      },
      // {
      //   path: "century",
      //   component: mainLayout,
      //   children: [
      //     {
      //       path: "ce",
      //       component: ce,
      //     },
      //     {
      //       path: "e",
      //       component: e,
      //     },
      //     {
      //       path: "",
      //       component: ce,
      //     }
      //   ]
      // },
    ]
  },
]

export default new Router({
// export const routers = {
  routes: initMenu
})

