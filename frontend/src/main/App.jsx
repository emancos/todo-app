import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Routers from './route'
import Menu from '../template/Menu'

import 'bootstrap/dist/css/bootstrap.min.css'

import './App.css'
import { Container } from 'react-bootstrap'

const App = () => {
  return (
    <div className="App">
      <Router>
        <Menu />
        <Container>
          <Routers />
        </Container>
      </Router>
    </div>
  )
}

export default App
