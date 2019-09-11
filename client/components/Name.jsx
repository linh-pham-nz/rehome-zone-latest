import React from 'react'

import { getCatByName } from '../apiClient'

class Name extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            cat: []
        }

    }
    
    componentDidMount() {
        let { id } = this.props.match.params
        getCatByName(id)
            .then(result => {
                const data = result.body
            this.setState({
                cat: data
            })
        }) 
    }       
    
    render() {
        return (
            <div className="container flex">
                <h1 className="component-heading">PLEASE MEET: {this.state.cat.name}</h1>
                <div className="row">
                    <div className="col-xl-6 col-sm-6">
                        <div>
                            <img src={`/images/cats/${this.state.cat.name}.jpg`}></img>
                        </div>
                    </div>
                    <div className="col-xl-6 col-sm-6">
                        <div className="card cat-data">
                            <p className="card-body-name">{this.state.cat.name}</p>
                            <p className="card-body-individual">{this.state.cat.breed}</p>
                            <p className="card-body-individual">{this.state.cat.age} years old</p>
                            <p className="card-body-individual">{this.state.cat.about}</p>
                        </div>
                    </div> 
                </div>                   
            </div>
        )
    }
}

export default Name

