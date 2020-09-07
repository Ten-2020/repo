import React from 'react'
import Home from './view/home.jsx'
import Nav from './view/nav.jsx'
import State from './view/state.jsx'

class App extends React.Component {
  render () {
    const nav1 = ['a','b','c']
    const nav2 = ['d','e','f']
    return (
      <div>
        <h1>{<Home></Home>} React Component</h1>
        <Nav nav={nav1}></Nav>
        <Nav nav={nav2}></Nav>
        <State></State>
      </div>
    )
  }
}
export default App