import React, { Component } from 'react'
import { postNewCat } from '../apiClient'

// import { restElement } from '@babel/types'

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
        // console.log("event", event.target.name, event.target.value)
        this.setState({ 
            [event.target.name]: event.target.value
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
                    <h2>Rehome a cat!</h2>
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <div >
                                <label>Cat name: 
                                    <input 
                                        type="text" 
                                        name="name" 
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                        />
                                </label>
                            </div>
                            <div>
                                <label>Cat breed:
                                <input 
                                    type="text" 
                                    name="breed" 
                                    value={this.state.breed}
                                    onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>Cat gender:
                                <input 
                                    type="text" 
                                    name="gender" 
                                    value={this.state.gender}
                                    onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>Cat age:
                                <input 
                                    type="number" 
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



