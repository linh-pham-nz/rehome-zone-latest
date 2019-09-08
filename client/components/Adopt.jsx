import React from 'react'

import { getDbCats } from '../apiClient'

class Adopt extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            cats: []
        }
    }

    componentDidMount() {
        // displayCats() {
            getDbCats().then(result => {
                const dbCats = result.body;
                this.setState({
                    cats: dbCats
                })
            })
        // }
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    {this.state.cats.map((cat, i) => {
                        return (
                            <div key={i}>
                                <div className="row">
                                    <div className="col-xl-4 col-sm-6"> 
                                        <div className="card card-dimensions zoom mb-4 shadow">
                                            <img className="card-img-top card-img-top-dimensions" src={`/images/cats/${cat.name}.jpg`}></img>
                                            <div className="card-body">
                                                <p>{cat.name}</p>
                                                <p>{cat.breed}</p>
                                                <p>{cat.age}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </React.Fragment>
        )
    }
}

export default Adopt

{/* <React.Fragment>
                <div className="container-right">
                    <h2>Adopt a cat!</h2>
                    {/* // Display images of cats available for adoption
                    // Connect to database
                    // Display content as cards */}

            //         <div className="row">
            //             <div className="card card-dimensions zoom mb-4 shadow">
            //                 <img className="card-img-top card-img-top-dimensions" alt="image of cat" src="/images/cats/Andy.jpg" />
            //                 <div className="card-body">
            //                     <p className="card-title text-center">Name: </p>
            //                     <p className="card-text">Breed: </p>
            //                     <p className="card-text">Age: </p>
            //                 </div>
            //             </div>
            //         </div>
            //     </div>
            // </React.Fragment> */}