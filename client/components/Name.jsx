import React from 'react'

import { getCatByName } from '../apiClient'
import Adopt from './Adopt'



class Name extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            cat: []
        }

    }
    
    componentDidMount() {
        let { id } = this.props.match.params
        // console.log(id)
        getCatByName(id)
            .then(result => {
                const data = result.body
                // console.log(data)
            this.setState({
                cat: data
            })
        }) 
    }       
    
    render() {
        return (
            <div className="container">
                <h1 className="component-heading">PLEASE MEET: {this.state.cat.name}</h1>
                <div className="col-xl-4 col-sm-6">
                <img src={`/images/cats/${this.state.cat.name}.jpg`}></img>
                <div className="card-body data">
                    <p className="card-body-name">{this.state.cat.name}</p>
                    <p className="card-body-details">{this.state.cat.breed}</p>
                    <p className="card-body-details">{this.state.cat.age} years old</p>
                    <p className="card-body-details">About: {this.state.cat.about}</p>

                </div>
                    
                </div>
            </div>
        )
    }
}

export default Name

    
{/* <div className="col-xl-4 col-sm-6">
    <div className="card card-dimensions zoom mb-4 shadow">
        <img 
            className="card-img-top card-img-top-dimensions" 
            src={`/images/cats/${this.state.cat.name}.jpg`}>
        </img>
        <div className="card-body">
            <p className="card-body-name">{this.state.cat.name}</p>
            <p className="card-body-details">{this.state.cat.breed}</p>
            <p className="card-body-details">{this.state.cat.age} years old</p>
            <p className="card-body-details">About: {this.state.cat.about}</p>

        </div>
    </div>
</div> */}