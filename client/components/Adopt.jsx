import React from 'react'

class Adopt extends React.Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <React.Fragment>
                <div className="container-right">
                    <h2>Adopt a cat!</h2>
                    {/* // Display images of cats available for adoption
                    // Connect to database
                    // Display content as cards */}

                    <div className="row">
                        <div className="card card-dimensions zoom mb-4 shadow">
                            <img className="card-img-top card-img-top-dimensions" alt="image of cat" src="/images/cats/Andy.jpg" />
                            <div className="card-body">
                                <p className="card-title text-center">Name: </p>
                                <p className="card-text">Breed: </p>
                                <p className="card-text">Age: </p>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Adopt