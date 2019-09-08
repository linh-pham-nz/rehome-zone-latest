import React, { Component } from 'react'
import postNewCat from '../apiClient'

// import { restElement } from '@babel/types'

class Rehome extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            catName: '',
            catBreed: '',
            catAge: 0
        }
        
        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
    }   


    handleChange = (e) => {
        const { name, value } = e.target
        console.log(name, value)
        this.setState({ 
                name: value,
                breed: value,
                age: value
            }
        )
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const data = {
            catName: this.state.catName,
            catBreed: this.state.catBreed,
            catAge: this.state.catAge
        }
    }

    // postNewCat(data) {
    //     then(() => {
    //     this.setState({ 
    //         catName: value,
    //         catBreed: value,
    //         catAge: undefined 
    //         })
    //     })
    // }

    render() {
        console.log(this.state)
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
                                        value={this.state.catName}
                                        onChange={this.handleChange}
                                        />
                                </label>
                            </div>
                            <div>
                                <label>Cat breed:
                                <input 
                                    type="text" 
                                    name="breed" 
                                    value={this.state.catBreed}
                                    onChange={this.handleChange}
                                    />
                                </label>
                            </div>
                            <div>
                                <label>Cat age:
                                <input 
                                    type="number" 
                                    name="age" 
                                    value={this.state.catAge}
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

// From handleChange:

// this.setState({ 
//     name: value,
//     breed: value,
//     age: value
// }

// catName: value,
// catBreed: value,
// catAge: value