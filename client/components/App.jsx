import React from 'react'

import { getFruits } from '../apiClient'

import Nav from './Nav'
import SideBar from './SideBar'

const App = () => {
  return (
    <div className='app'>
      <Nav />
      <SideBar />

    </div>
    
  )
}

export default App