import React from 'react'

import { HashRouter as Router, Route, Link } from 'react-router-dom'

import Adopt from './Adopt'
import Rehome from './Rehome'
import { getDbCats } from '../apiClient'

class SideBar extends React.Component {
    constructor(props) {
        super(props)
    }

    displayCats() {
        getDbCats().then(result => {
            console.log(result)
            // const data = result.body;
            // this.setState({
            //     cats: data
            // })
        })
    }       
    
    render() {
        return (
            <Router>
                <div className="container-fluid sideBar-container">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container">
                            <h3><Link to='/adopt' onClick={this.displayCats}>Adopt a cat</Link></h3>
                            <h3><Link to='/rehome'>Rehome a cat</Link></h3>
                        </div>
                    </nav>
                </div>

                <Route path="/Adopt" component={Adopt} />
                <Route path="/Rehome" component={Rehome} />
            </Router>
        )
    }
}

export default SideBar

