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
                    <div className="row">
                        {this.state.cats.map((cat, i) => {
                            return (
                                <div className="col-xl-4 col-sm-6" key={i}>
                                    <div className="card card-dimensions zoom mb-4 shadow">
                                        <img className="card-img-top card-img-top-dimensions" src={`/images/cats/${cat.name}.jpg`}></img>
                                        <div className="card-body">
                                            <p>{cat.name}</p>
                                            <p>{cat.breed}</p>
                                            <p>{cat.age}</p>
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

