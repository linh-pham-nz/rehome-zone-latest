import React from 'react'

import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

import RehomeZone from './RehomeZone'
import Adopt from './Adopt'
import Rehome from './Rehome'

const App = () => {
  return (
    <Router>
      <div className="navBar container-fluid">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
          <div className="container">
            <h1><Link to='/'>Rehome Zone</Link></h1>
            <h3><Link to='/adopt'>Adopt a cat</Link></h3>
            <h3><Link to='/rehome'>Rehome a cat</Link></h3>
          </div>
        </nav>
      </div>
      <Rehome />
      <Route path='/' component={RehomeZone} />
      <Route path="/Adopt" component={Adopt} />
      <Route path="/Rehome" component={Rehome} />
    </Router>
  )
}

export default App