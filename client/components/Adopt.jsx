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
        getDbCats().then(result => {
            const dbCats = result.body;
            this.setState({
                cats: dbCats
            })
        })
    }

    render() {
        return (
            <React.Fragment>
                <div className="container">
                    <h1 className="adopt-heading">ADOPT A CAT</h1>
                    <div className="row">
                        {this.state.cats.map((cat, i) => {
                            return (
                                <div className="col-xl-4 col-sm-6" key={i}>
                                    <div className="card card-dimensions zoom mb-4 shadow">
                                        <img className="card-img-top card-img-top-dimensions" src={`/images/cats/${cat.name}.jpg)`}></img>
                                        <div className="card-body">
                                            <p className="card-body-name">{cat.name}</p>
                                            <p className="card-body-details">{cat.breed}</p>
                                            <p className="card-body-details">{cat.age} years old</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </React.Fragment>
        )
    }
}

export default Adopt

