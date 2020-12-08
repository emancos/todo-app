import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routers from './route'
import Menu from '../template/Menu'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <div className='container'>
          <Routers />
        </div>
      </Router>
    </div>
  )
}

export default App
