import React from 'react';
import './App.less';
import {
  BrowserRouter as Router, Switch, Route, Link
} from "react-router-dom"
import Steak from './views/component/beef/steak/steak.jsx'
import Sirloin from './views/component/beef/sirloin/sirloin.jsx'
import FatCattle from './views/component/beef/fatCattle/fatCattle.jsx'
export default function App () {
  return (
    <Router>
      <div>
        <nav>
          <h1>客官,欢迎光临我们牛肉店,您准备吃点什么呢?</h1>
          这是我们的菜单:
          <ul>
            <li>
              <Link to="/sirloin">牛腩</Link>
            </li>
            <li>
              <Link to="/steak">牛排</Link>
            </li>
            <li>
              <Link to="/fatCattle">肥牛</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/sirloin">
            <Steak></Steak>
          </Route>
          <Route path="/steak">
            <Sirloin></Sirloin>
          </Route>
          <Route path="/fatCattle">
            <FatCattle></FatCattle>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
