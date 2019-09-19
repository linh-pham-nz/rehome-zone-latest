import React from 'react'
import request from 'superagent'
import { connect } from 'react-redux'
import {getCatFacts} from '../apiClient'

class CatFacts extends React.Component {
    randomCatFact() {
        getCatFacts()
            console.log(result.body)
            .then(result => {
                console.log(result.body)
                    const allFacts = result.body
                    const randomFact = allFacts[Math.floor(Math.random() * allFacts.length)]
                    this.setState({
                        fact: randomFact
                    })
            })     
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h3 className="component-heading">CAT FACTS</h3>
                    <h3 className="main-text">Click on the button below for a random cat fact!</h3>
                    <button onClick={this.randomCatFact}className="meow-button">Meow!!!</button>
                    <h4>{this.randomCatFact}</h4>
                </div>
            </React.Fragment>
        )
    }
}

export default connect()(CatFacts)

// constructor(props) {
//     super(props)
//     this.state = {
//         fact: ''
//     }
//     this.getCatFact = this.getCatFact.bind(this)

//     this.getCatFact()
// }

