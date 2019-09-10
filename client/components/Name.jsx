import React from 'react'

import Adopt from './Adopt'

import { getDbCats } from '../apiClient'

const Name = (props) => {
    console.log(props)
    let { cat } = props.match.params
    console.log(cat)
    
    return (
        <h1>This is an individual {cat} page</h1>
    )
    
}

export default Name