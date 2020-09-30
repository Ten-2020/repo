import login from 'src/views/login/login'
import main from 'src/views/main/main.jsx'

import sirloin from 'src/views/component/beef/sirloin/sirloin.jsx'
import steak from '@/views/component/beef/steak/steak'

const routes = [
  {
    path: "/",
    component: login,
    exact: true
  },
  {
    path: "/beef",
    component: main,
    name:'牛肉',
    routes: [
      {
        path: "/beef/steak",
        component: steak,
        name:'牛腩',
      },
      {
        path: "/beef/sirloin",
        component: sirloin,
        name:'牛排',
      }
    ]
  },

]

export default routes