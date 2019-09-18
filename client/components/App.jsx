import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import RehomeZone from './RehomeZone'
import Adopt from './Adopt'
import Rehome from './Rehome'
import Name from './Name'
import CatFacts from './CatFacts'

const App = () => {
  return (
    <Router>
      <div className="navBar container-fluid">
        <nav className="navbar bg-dark">
          <div className="container">
            <h1><Link to='/'><i className="fa fa-paw fa-2x"></i>REHOME ZONE</Link></h1>
            <ul className="nav navbar-nav">
              <li><Link to='/adopt'><i className="fa fa-paw"></i>Adopt a cat</Link></li>
              <li><Link to='/rehome'><i className="fa fa-paw"></i>Rehome a cat</Link></li>
              <li><Link to='/cat-facts'><i className="fa fa-paw"></i>Cat facts</Link></li>
            </ul>
          </div>
        </nav>
      </div>
      
      <Route exact={true} path='/' component={RehomeZone} />
      <Route path="/adopt" component={Adopt} />
      <Route path="/name/:id" component={Name} />
      <Route path="/rehome" component={Rehome} />
      <Route path="/cat-facts" component={CatFacts} />
    </Router>
  )
}

export default App