import React, { Component, Provider } from 'react'
import './App.less';
// import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Router, Route} from "react-router-dom";
import router from "src/libs/router"
import history from './libs/history';

export default class App extends Component {
  render () {
    return (
      <Router history={history}>
        {/* <nav className="nav">
          <ul>
            <li>
              <Link to="/">登陆</Link>
            </li>
            <li>
              <Link to="/main">首页</Link>
            </li>
          </ul>
        </nav> */}
        {
          router.map((router, index) => {
            if (router.exact) {
              return <Route exact key={index} path={router.path}
                render={
                  props => (
                    <router.component {...props} routes={router.routes} />
                  )
                }
              />
            } else {
              return <Route key={index} path={router.path}
                render={
                  props => (
                    <router.component {...props} routes={router.routes} />
                  )
                }
              />
            }
          })
        }
      </Router>
    )
  }
}
