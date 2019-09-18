import React from 'react'
import { connect } from 'react-redux'

class CatFacts extends React.Component {
    render() {
        console.log("hello")
        return (
            <div className="container">
                <h3 className="component-heading">CAT FACTS</h3>
                <h3 className="main-text">Click on the button below for a random cat fact!</h3>
                <button className="meow-button">Meow!!!</button>
            </div>
        )
    }
}

export default connect()(CatFacts)