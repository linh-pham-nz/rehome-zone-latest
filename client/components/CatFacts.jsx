import React from 'react'
import { connect } from 'react-redux'

import {fetchFact} from '../actions'


class CatFacts extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fact: ''
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3 className="component-heading">CAT FACTS</h3>
                    <h3 className="main-text">Click on the button below for a random cat fact!</h3>
                    <button onClick={() => this.props.dispatch(fetchFact())}className="meow-button">Meow!!!</button>
                    <h4>{this.props.state}</h4>
                </div>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(CatFacts)


