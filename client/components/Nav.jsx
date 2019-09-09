import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Adopt from './Adopt'
import Rehome from './Rehome'

const Nav = () => {    
    return (
        <Router>
            <div className="navBar container-fluid">
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-fixed-top">
                    <div className="container">
                        <h1>Rehome Zone</h1>
                        <h3><Link to='/adopt'>Adopt a cat</Link></h3>
                        <h3><Link to='/rehome'>Rehome a cat</Link></h3>
                    </div>
                </nav>
            </div>

            <Route path="/Adopt" component={Adopt} />
            <Route path="/Rehome" component={Rehome} />
        </Router>
    )
}

export default Nav



