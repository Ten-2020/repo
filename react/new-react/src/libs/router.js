import login from 'src/views/login/login'
import main from 'src/views/main/main.jsx'
import crab from 'src/views/component/drypot/crab/crab'
import shrimp from '@/views/component/drypot/shrimp/shrimp'
import bullfrog from '@/views/component/drypot/bullfrog/bullfrog'
import guangdong from '@/views/component/hotpot/guangdong/guangdong.jsx'
import chongqing from '@/views/component/hotpot/chongqing/chongqing.jsx'
import sichuan from '@/views/component/hotpot/sichuan/sichuan.jsx'
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
    path: "/drypot",
    component: main,
    name: '干锅',
    icon: HomeOutlined,
    routes: [
      {
        path: "/drypot/crab",
        component: crab,
        name: '干锅蟹煲',
      },
      {
        path: "/drypot/shrimp",
        component: shrimp,
        name: '干锅虾煲',
      },
      {
        path: "/drypot/bullfrog",
        component: bullfrog,
        name: '干锅牛蛙',
      },
    ]
  },
  {
    path: "/hotpot",
    component: main,
    name: '火锅',
    icon: DesktopOutlined,
    routes: [
      {
        path: "/hotpot/guangdong",
        component: guangdong,
        name: '广东火锅',
      },
      {
        path: "/hotpot/chongqing",
        component: chongqing,
        name: '重庆火锅',
      },
      {
        path: "/hotpot/sichuan",
        component: sichuan,
        name: '四川火锅',
      },
    ]
  }

]

export default routes