import React, { Component } from 'react'
import { postNewCat } from '../apiClient'

class Rehome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            name: '',
            breed: '',
            gender: '',
            age: 0,
            about: ''
        }
    }   


    handleChange = (e) => {
        let { name, value } = e.target
        this.setState({ 
            [name]: value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            name: this.state.name,
            breed: this.state.breed,
            gender: this.state.gender,
            age: this.state.age,
            about: this.state.about
        }
        postNewCat(data)
        // console.log(data)
    }

    render() {
        // console.log(this.state)
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="component-heading">REHOME A CAT</h1>
                    <div>
                        <form onSubmit={this.handleSubmit} className="form">
                            <div >
                                <label>Name: 
                                    <input 
                                        type="text" 
                                        id="name"
                                        name="name" 
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        />
                                </label>
                            </div>
                            <div>
                                <label>Breed:
                                <input 
                                    type="text"
                                    id="breed" 
                                    name="breed" 
                                    value={this.state.breed}
                                    onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>Gender:
                                <input 
                                    type="text" 
                                    id="gender"
                                    name="gender" 
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>Age:
                                <input 
                                    type="number" 
                                    id="age"
                                    name="age" 
                                    value={this.state.age}
                                    onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>About:
                                <input 
                                    type="text" 
                                    id="about"
                                    name="about" 
                                    value={this.state.about}
                                    onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Rehome



