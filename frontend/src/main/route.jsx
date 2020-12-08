import React from 'react'
import {
    Route,
    Switch,
    Redirect
} from 'react-router-dom'

import Todo from '../todo/Todo'
import About from '../about/About'

const Routers = props => {

    return (
        <Switch>
            <Route exact path='/todos' component={Todo} />
            <Route path='/about' component={About} />
            <Redirect from='*' to='/todos' />
        </Switch>        
    )
}

export default Routers