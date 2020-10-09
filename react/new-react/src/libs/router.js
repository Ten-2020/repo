import login from 'src/views/login/login'
import main from 'src/views/main/main.jsx'

import sirloin from 'src/views/component/beef/sirloin/sirloin.jsx'
import steak from '@/views/component/beef/steak/steak'
import fatCatte from '@/views/component/beef/fatCattle/fatCattle'
import guangdong from '@/views/component/hotPot/guangdong/guangdong'
import chongqing from '@/views/component/hotPot/chongqing/chongqing'
import sichuan from '@/views/component/hotPot/sichuan/sichuan'
import {
  DesktopOutlined,
  // PieChartOutlined,
  FileOutlined,
  // TeamOutlined,
  // UserOutlined,
  ProfileOutlined,
  ReadOutlined,
  HomeOutlined,
} from '@ant-design/icons'
const routes = [
  {
    path: "/",
    component: login,
    exact: true
  },
  {
    path: "/beef",
    component: main,
    name: '干锅',
    icon: HomeOutlined,
    routes: [
      {
        path: "/beef/steak",
        component: steak,
        name: '干锅蟹煲',
      },
      {
        path: "/beef/sirloin",
        component: sirloin,
        name: '干锅虾煲',
      },
      {
        path: "/beef/fatCatte",
        component: fatCatte,
        name: '干锅牛蛙',
      },
    ]
  },
  {
    path: "/hotPot",
    component: main,
    name: '火锅',
    icon: DesktopOutlined,
    routes: [
      {
        path: "/hotPot/guangdong",
        component: guangdong,
        name: '广东火锅',
      },
      {
        path: "/hotPot/chongqing",
        component: chongqing,
        name: '重庆火锅',
      },
      {
        path: "/hotPot/sichuan",
        component: sichuan,
        name: '四川火锅',
      },
    ]
  },

]

export default routes