import React from 'react';
import './App.less';
import {
  BrowserRouter as Router,Switch,Route,Link,useRouteMatch,
  useParams} from "react-router-dom"

export default function App(){
  return(
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/users">
            <Users></Users>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
          <Route path="/Topics">
            <Topics></Topics>
          </Route>
        </Switch>
      </div>
    </Router>
  )
}
let Home = ()=>(<h2>Home</h2>)
let About = ()=>(<h2>About</h2>)
let Users = ()=>(<h2>Users</h2>)

function Topics() {
  let match = useRouteMatch();

  return (
    <div>
      <h2>Topics</h2>

      <ul>
        <li>
          <Link to={`${match.url}/components`}>Components</Link>
        </li>
        <li>
          <Link to={`${match.url}/props-v-state`}>
            Props v. State
          </Link>
        </li>
      </ul>
      <Switch>
        <Route path={`${match.path}/:topicId`}>
          <Topic />
        </Route>
        <Route path={match.path}>
          <h3>Please select a topic.</h3>
        </Route>
      </Switch>
    </div>
  );
}

function Topic() {
  let { topicId } = useParams();
  return <h3>Requested topic ID: {topicId}</h3>;
}