import login from 'src/views/login/login'
import main from 'src/views/main/main.jsx'
import early from 'src/views/component/tang/early/early'
import middle from '@/views/component/tang/middle/middle'
import latter from '@/views/component/tang/latter/latter'
import wanyue from '@/views/component/song/wanyue/wanyue'
import hanfang from '@/views/component/song/hanfang/hanfang'
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
    path: "/tang",
    component: main,
    name: '唐诗',
    icon: HomeOutlined,
    routes: [
      {
        path: "/tang/early",
        component: early,
        name: '盛唐',
      },
      {
        path: "/tang/middle",
        component: middle,
        name: '中唐',
      },
      {
        path: "/tang/latter",
        component: latter,
        name: '晚唐',
      },
    ]
  },
  {
    path: "/song",
    component: main,
    name: '宋词',
    icon: DesktopOutlined,
    routes: [
      {
        path: "/song/wanyue",
        component: wanyue,
        name: '婉约派',
      },
      {
        path: "/song/hanfang",
        component: hanfang,
        name: '豪放派',
      }
    ]
  }

]

export default routes