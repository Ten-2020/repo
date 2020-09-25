import login from 'src/views/login/login'
import main from 'src/views/main/main.jsx'

import sirloin from 'src/views/component/beef/sirloin/sirloin.jsx'
import steak from 'src/views/component/beef/steak/steak.jsx'

const routes = [
  {
    path: "/",
    component: login,
    exact: true
  },
  {
    path: "/main",
    component: main,
    routes: [
      {
        path: "/main/steak",
        component: steak
      },
      {
        path: "/main/sirloin",
        component: sirloin
      }
    ]
  },

]

export default routes