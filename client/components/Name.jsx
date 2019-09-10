import React from 'react'

import Adopt from './Adopt'

import { getDbCats } from '../apiClient'

const Name = (props) => {
    // console.log(props)
    // let { name } = props.match.params.path
    // console.log(name)
    
    return (
        <h1>This is an individual {name} page</h1>
    )
    
}

export default Name